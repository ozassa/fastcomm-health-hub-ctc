import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, role, interest, message, website } = req.body;

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

    // Email template
    const emailHtml = `
      <h2>Nova solicitação de demonstração - Fastcomm</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
      <p><strong>Cargo:</strong> ${escapeHtml(role)}</p>
      <p><strong>Área de interesse:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Enviado via formulário do site Fastcomm</em></p>
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
    
    return res.json({ 
      success: true, 
      message: 'Email enviado com sucesso!',
      id: data.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
}
