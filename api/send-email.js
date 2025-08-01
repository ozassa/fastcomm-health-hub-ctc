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

function formatPhoneForDisplay(phoneDigits) {
  if (!phoneDigits) return '';
  
  // Format for display in email
  if (phoneDigits.length === 10) {
    return `(${phoneDigits.slice(0, 2)}) ${phoneDigits.slice(2, 6)}-${phoneDigits.slice(6)}`;
  } else if (phoneDigits.length === 11) {
    return `(${phoneDigits.slice(0, 2)}) ${phoneDigits.slice(2, 7)}-${phoneDigits.slice(7)}`;
  }
  
  return phoneDigits;
}

async function sendToIkv360Webhook(leadData) {
  if (!process.env.IKV360_WEBHOOK_URL) {
    console.log('IKV360_WEBHOOK_URL not configured, skipping webhook');
    return { success: false, error: 'Webhook URL not configured' };
  }

  try {
    // Format payload to match IKV360 API expectations
    const webhookPayload = {
      name: leadData.company || 'Empresa não informada',
      contact_email: leadData.email,
      contact_name: leadData.name, 
      contact_job: leadData.role,
      contact_cel: formatPhoneForDisplay(leadData.phone),
      marketing_request: `${leadData.message}

--- Dados Adicionais ---
Interesse: ${leadData.interest}
UTM Source: ${leadData.utm_source || 'direct'}
UTM Campaign: ${leadData.utm_campaign || 'no-campaign'}
UTM Medium: ${leadData.utm_medium || 'none'}
Dispositivo: ${leadData.device_type || 'unknown'}
Tempo na página: ${leadData.time_on_page || 0}s
Tracking ID: ${leadData.tracking_id || 'N/A'}`
    };

    const response = await fetch(process.env.IKV360_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.IKV360_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookPayload)
    });

    const responseData = await response.text();
    
    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status} - ${responseData}`);
    }

    console.log('IKV360 webhook sent successfully:', {
      status: response.status,
      contact_email: webhookPayload.contact_email,
      company: webhookPayload.name,
      utm_campaign: leadData.utm_campaign
    });

    return {
      success: true,
      status: response.status,
      response: responseData,
      contact_email: webhookPayload.contact_email
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
      name, email, phone, company, role, interest, message, website,
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
    if (!name || !email || !phone || !company || !role || !interest || !message) {
      return res.status(400).json({ 
        error: 'Todos os campos são obrigatórios',
        details: ['Nome, email, telefone, empresa, cargo, interesse e mensagem são obrigatórios']
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

    // Phone validation
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return res.status(400).json({ error: 'Telefone deve ter 10 ou 11 dígitos' });
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
      name, email, phone, company, role, interest, message, website,
      
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

    // Enhanced email template with tracking data
    const emailHtml = `
      <h2>Nova solicitação de demonstração - Fastcomm Landing Page</h2>
      
      <h3>📋 Dados do Lead</h3>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(formatPhoneForDisplay(phone))}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
      <p><strong>Cargo:</strong> ${escapeHtml(role)}</p>
      <p><strong>Área de interesse:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      
      <h3>📊 Dados de Campanha (UTM)</h3>
      <p><strong>Fonte:</strong> ${escapeHtml(completeLeadData.utm_source)}</p>
      <p><strong>Meio:</strong> ${escapeHtml(completeLeadData.utm_medium)}</p>
      <p><strong>Campanha:</strong> ${escapeHtml(completeLeadData.utm_campaign)}</p>
      <p><strong>Tipo de Campanha:</strong> ${escapeHtml(campaign_type)}</p>
      ${completeLeadData.utm_content ? `<p><strong>Conteúdo:</strong> ${escapeHtml(completeLeadData.utm_content)}</p>` : ''}
      ${completeLeadData.utm_term ? `<p><strong>Termo:</strong> ${escapeHtml(completeLeadData.utm_term)}</p>` : ''}
      
      <h3>💻 Dados Técnicos</h3>
      <p><strong>Dispositivo:</strong> ${escapeHtml(completeLeadData.device_type)}</p>
      <p><strong>Browser:</strong> ${escapeHtml(completeLeadData.browser)}</p>
      <p><strong>Sistema:</strong> ${escapeHtml(completeLeadData.operating_system)}</p>
      <p><strong>Resolução:</strong> ${escapeHtml(completeLeadData.screen_resolution)}</p>
      <p><strong>IP:</strong> ${escapeHtml(clientIP)}</p>
      <p><strong>Referrer:</strong> ${escapeHtml(completeLeadData.referrer)}</p>
      
      <h3>⏱️ Dados Comportamentais</h3>
      <p><strong>Tempo na página:</strong> ${completeLeadData.time_on_page}s</p>
      <p><strong>Scroll depth:</strong> ${completeLeadData.scroll_depth}%</p>
      <p><strong>Página de entrada:</strong> ${escapeHtml(completeLeadData.landing_page)}</p>
      
      <hr>
      <p><em>Enviado via Landing Page Fastcomm</em></p>
      <p><em>ID de Tracking: ${escapeHtml(completeLeadData.tracking_id)}</em></p>
      <p><em>Timestamp: ${new Date().toLocaleString('pt-BR')}</em></p>
    `;

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
