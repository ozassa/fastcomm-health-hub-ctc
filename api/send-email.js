import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper functions
function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection.remoteAddress || 
         'unknown';
}

function determineCampaignType(utm_medium) {
  const medium = utm_medium?.toLowerCase() || '';
  const paidMedia = ['cpc', 'paid', 'ppc', 'display', 'social-paid', 'paid-social', 'adwords', 'facebook-ads'];
  const organicMedia = ['organic', 'social', 'social-organic'];
  const referralMedia = ['referral', 'link', 'website'];
  
  if (paidMedia.some(p => medium.includes(p))) return 'paid';
  if (organicMedia.some(p => medium.includes(p))) return 'organic';
  if (referralMedia.some(p => medium.includes(p))) return 'referral';
  return 'direct';
}

async function sendToIkv360Webhook(leadData) {
  if (!process.env.IKV360_WEBHOOK_URL) {
    console.log('IKV360_WEBHOOK_URL not configured, skipping webhook');
    return { success: false, error: 'Webhook URL not configured' };
  }


  try {
    // IKV360 API format - based on working Postman example
    const webhookPayload = {
      name: leadData.company, // Company name
      contact_email: leadData.email,
      contact_name: leadData.name,
      contact_job: leadData.role,
      contact_cel: leadData.phone || '(00) 0000-0000', // Required field - use placeholder if empty
      marketing_request: `${leadData.interest} - ${leadData.message}` // Combined interest + message
    };

    // Log the request for debugging
    console.log('Sending to IKV360:', {
      url: process.env.IKV360_WEBHOOK_URL,
      environment: process.env.VITE_APP_ENV || 'unknown',
      payload_keys: Object.keys(webhookPayload),
      token_preview: process.env.IKV360_WEBHOOK_SECRET?.substring(0, 15) + '...',
    });
    
    console.log('IKV360 payload:', webhookPayload);

    const response = await fetch(process.env.IKV360_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.IKV360_WEBHOOK_SECRET}`,
        'Accept': 'application/json',
        'User-Agent': 'Fastcomm-Landing-Page/1.0',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(webhookPayload),
      redirect: 'manual' // Don't follow redirects automatically
    });

    const responseData = await response.text();
    
    console.log('IKV360 response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseData.substring(0, 500) + (responseData.length > 500 ? '...' : '')
    });
    
    // Handle redirects (301, 302, etc.)
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      throw new Error(`IKV360 redirected to: ${location} - This usually means authentication failed`);
    }
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(`Authentication failed - Token may be invalid or expired`);
      }
      if (response.status === 405) {
        throw new Error(`Method not allowed - The endpoint ${process.env.IKV360_WEBHOOK_URL} may be incorrect`);
      }
      throw new Error(`Webhook failed: ${response.status} ${response.statusText} - ${responseData.substring(0, 200)}`);
    }

    console.log('IKV360 webhook sent successfully:', {
      status: response.status,
      email: leadData.email,
      company: leadData.company
    });

    return {
      success: true,
      status: response.status,
      response: responseData,
      webhook_id: webhookPayload.landing_page_lead_id
    };

  } catch (error) {
    console.error('IKV360 webhook error:', {
      error: error.message,
      lead_email: leadData.email,
      utm_campaign: leadData.utm_campaign
    });
    
    return {
      success: false,
      error: error.message
    };
  }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      // Basic form data
      name, email, company, role, interest, message, website,
      // UTM Parameters
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      // Page/Session data
      referrer, landing_page, page_title,
      // Device/Browser data
      user_agent, screen_resolution, device_type, browser, operating_system,
      // Behavior data
      time_on_page, scroll_depth,
      // Source classification
      source, channel, funnel_stage, tracking_id, submitted_at
    } = req.body;

    // Validation
    if (!name || !email || !company || !role || !interest || !message) {
      return res.status(400).json({ 
        error: 'Todos os campos são obrigatórios',
        details: ['Nome, email, empresa, cargo, interesse e mensagem são obrigatórios']
      });
    }

    // Honeypot check
    if (website && website.trim() !== '') {
      console.log('Bot detected - honeypot field filled:', { website });
      return res.json({ 
        success: true, 
        message: 'Email enviado com sucesso!',
        id: 'honeypot-' + Date.now()
      });
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({ error: 'Nome deve ter entre 2 e 100 caracteres' });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({ error: 'Mensagem deve ter entre 10 e 1000 caracteres' });
    }

    // Additional bot detection
    const suspiciousPatterns = [
      /http[s]?:\/\//i,
      /<[^>]*>/,
      /\b(viagra|casino|loan|crypto|bitcoin)\b/i
    ];
    
    const textFields = [name, company, message];
    const hasSuspiciousContent = textFields.some(field => 
      suspiciousPatterns.some(pattern => pattern.test(field))
    );
    
    if (hasSuspiciousContent) {
      return res.status(400).json({ 
        error: 'Conteúdo não permitido detectado' 
      });
    }

    // Escape HTML
    const escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    // Prepare comprehensive lead data
    const currentTime = new Date().toISOString();
    const clientIP = getClientIP(req);
    const campaign_type = determineCampaignType(utm_medium);

    const completeLeadData = {
      // Basic form data
      name, email, company, role, interest, message, website,
      
      // UTM Parameters
      utm_source: utm_source || 'direct',
      utm_medium: utm_medium || 'none',
      utm_campaign: utm_campaign || 'no-campaign',
      utm_content: utm_content || '',
      utm_term: utm_term || '',
      
      // Page/Session data
      referrer: referrer || 'direct',
      landing_page: landing_page || '',
      page_title: page_title || '',
      
      // Device/Browser data
      user_agent: user_agent || req.headers['user-agent'] || '',
      screen_resolution: screen_resolution || '',
      device_type: device_type || 'unknown',
      browser: browser || '',
      operating_system: operating_system || '',
      
      // Behavior data
      time_on_page: time_on_page || 0,
      scroll_depth: scroll_depth || 0,
      
      // Source classification
      source: source || 'fastcomm_landing_page',
      channel: channel || 'website_form',
      funnel_stage: funnel_stage || 'top_of_funnel',
      campaign_type,
      tracking_id: tracking_id || `lp_${Date.now()}`,
      submitted_at: submitted_at || currentTime,
      
      // Technical data
      ip_address: clientIP
    };

    // Professional email template with modern design
    const emailHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nova Solicitação - Fastcomm</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 32px 24px; text-align: center; }
        .header h1 { color: white; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .header p { color: #dbeafe; font-size: 16px; }
        .content { padding: 32px 24px; }
        .lead-card { background: #f8fafc; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #3b82f6; }
        .section { margin: 32px 0; }
        .section-title { font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .data-row { display: flex; margin: 12px 0; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .data-label { font-weight: 600; color: #4b5563; min-width: 140px; }
        .data-value { color: #1f2937; flex: 1; }
        .message-box { background: #f3f4f6; border-radius: 8px; padding: 16px; margin: 16px 0; border-left: 3px solid #10b981; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin: 20px 0; }
        .stat-card { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; text-align: center; }
        .stat-number { font-size: 24px; font-weight: 700; color: #3b82f6; }
        .stat-label { font-size: 12px; color: #6b7280; text-transform: uppercase; margin-top: 4px; }
        .footer { background: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { color: #6b7280; font-size: 14px; margin: 4px 0; }
        .priority-high { background: #fef2f2; border-left-color: #ef4444; }
        .priority-medium { background: #fffbeb; border-left-color: #f59e0b; }
        .priority-low { background: #f0fdf4; border-left-color: #10b981; }
        .campaign-badge { display: inline-block; background: #3b82f6; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
        @media (max-width: 600px) {
          .container { margin: 0; }
          .header { padding: 24px 16px; }
          .content { padding: 24px 16px; }
          .data-row { flex-direction: column; }
          .data-label { min-width: auto; margin-bottom: 4px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>🎯 Novo Lead Capturado</h1>
          <p>Landing Page Fastcomm • ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <!-- Content -->
        <div class="content">
          <!-- Lead Information Card -->
          <div class="lead-card priority-high">
            <div class="section">
              <h2 class="section-title">👤 Informações do Lead</h2>
              
              <div class="data-row">
                <div class="data-label">Nome:</div>
                <div class="data-value"><strong>${escapeHtml(name)}</strong></div>
              </div>
              
              <div class="data-row">
                <div class="data-label">Email:</div>
                <div class="data-value">
                  <a href="mailto:${escapeHtml(email)}" style="color: #3b82f6; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </div>
              </div>
              
              <div class="data-row">
                <div class="data-label">Empresa:</div>
                <div class="data-value"><strong>${escapeHtml(company)}</strong></div>
              </div>
              
              <div class="data-row">
                <div class="data-label">Cargo:</div>
                <div class="data-value">${escapeHtml(role)}</div>
              </div>
              
              <div class="data-row">
                <div class="data-label">Interesse:</div>
                <div class="data-value">
                  <span class="campaign-badge">${escapeHtml(interest)}</span>
                </div>
              </div>
            </div>

            <!-- Message -->
            <div class="message-box">
              <strong>💬 Mensagem:</strong><br>
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </div>
          </div>

          <!-- Campaign Data -->
          <div class="section">
            <h2 class="section-title">📊 Dados de Campanha</h2>
            
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">${escapeHtml(completeLeadData.utm_source)}</div>
                <div class="stat-label">Fonte</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${escapeHtml(completeLeadData.utm_medium)}</div>
                <div class="stat-label">Meio</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${escapeHtml(campaign_type)}</div>
                <div class="stat-label">Tipo</div>
              </div>
            </div>

            <div class="data-row">
              <div class="data-label">Campanha:</div>
              <div class="data-value">${escapeHtml(completeLeadData.utm_campaign)}</div>
            </div>
            ${completeLeadData.utm_content ? `
            <div class="data-row">
              <div class="data-label">Conteúdo:</div>
              <div class="data-value">${escapeHtml(completeLeadData.utm_content)}</div>
            </div>` : ''}
            ${completeLeadData.utm_term ? `
            <div class="data-row">
              <div class="data-label">Termo:</div>
              <div class="data-value">${escapeHtml(completeLeadData.utm_term)}</div>
            </div>` : ''}
          </div>

          <!-- Behavioral Data -->
          <div class="section">
            <h2 class="section-title">⏱️ Dados Comportamentais</h2>
            
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">${completeLeadData.time_on_page || 0}s</div>
                <div class="stat-label">Tempo na Página</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${completeLeadData.scroll_depth || 0}%</div>
                <div class="stat-label">Scroll Depth</div>
              </div>
            </div>

            <div class="data-row">
              <div class="data-label">Página de Entrada:</div>
              <div class="data-value">${escapeHtml(completeLeadData.landing_page || 'N/A')}</div>
            </div>
            <div class="data-row">
              <div class="data-label">Referrer:</div>
              <div class="data-value">${escapeHtml(completeLeadData.referrer)}</div>
            </div>
          </div>

          <!-- Technical Data (Collapsible) -->
          <details class="section">
            <summary class="section-title" style="cursor: pointer;">💻 Dados Técnicos (clique para expandir)</summary>
            <div style="margin-top: 16px;">
              <div class="data-row">
                <div class="data-label">Dispositivo:</div>
                <div class="data-value">${escapeHtml(completeLeadData.device_type || 'N/A')}</div>
              </div>
              <div class="data-row">
                <div class="data-label">Browser:</div>
                <div class="data-value">${escapeHtml(completeLeadData.browser || 'N/A')}</div>
              </div>
              <div class="data-row">
                <div class="data-label">Sistema:</div>
                <div class="data-value">${escapeHtml(completeLeadData.operating_system || 'N/A')}</div>
              </div>
              <div class="data-row">
                <div class="data-label">Resolução:</div>
                <div class="data-value">${escapeHtml(completeLeadData.screen_resolution || 'N/A')}</div>
              </div>
              <div class="data-row">
                <div class="data-label">IP:</div>
                <div class="data-value">${escapeHtml(clientIP)}</div>
              </div>
            </div>
          </details>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p><strong>Fastcomm Health Hub</strong></p>
          <p>ID de Tracking: <code>${escapeHtml(completeLeadData.tracking_id)}</code></p>
          <p>Ambiente: <strong>${escapeHtml(completeLeadData.source || 'fastcomm_landing_page')}</strong></p>
          <p>Gerado em: ${new Date().toLocaleString('pt-BR', { 
            timeZone: 'America/Sao_Paulo',
            day: '2-digit',
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
      </div>
    </body>
    </html>`;

    // Send email
    const data = await resend.emails.send({
      from: 'Fastcomm <noreply@sendteste.ctctech.com.br>',
      to: ['faleconosco@ctctech.com.br'],
      subject: `Nova solicitação de demonstração - ${company}`,
      html: emailHtml,
      replyTo: email
    });

    console.log('Email sent successfully:', data);

    // Send to ikv360 CRM via webhook
    const webhookResult = await sendToIkv360Webhook(completeLeadData);
    
    // Log results for monitoring
    console.log('Lead processing completed:', {
      email_id: data.id,
      webhook_success: webhookResult.success,
      tracking_id: completeLeadData.tracking_id,
      utm_campaign: completeLeadData.utm_campaign,
      utm_source: completeLeadData.utm_source,
      company: company,
      timestamp: currentTime
    });
    
    return res.json({ 
      success: true, 
      message: 'Lead capturado com sucesso!',
      tracking_id: completeLeadData.tracking_id,
      email_id: data.id,
      webhook_sent: webhookResult.success,
      utm_data: {
        source: completeLeadData.utm_source,
        campaign: completeLeadData.utm_campaign,
        medium: completeLeadData.utm_medium
      }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
}
