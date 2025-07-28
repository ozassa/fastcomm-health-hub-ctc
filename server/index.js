const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');
const { Resend } = require('resend');

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend with API key (with fallback for development)
const resendApiKey = process.env.RESEND_API_KEY || 'development-key';
const resend = resendApiKey !== 'development-key' ? new Resend(resendApiKey) : null;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rate limiting - 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Muitas tentativas de envio. Tente novamente em 15 minutos.',
    retryAfter: '15 minutos'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to email endpoint
app.use('/api/send-email', limiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email service is running' });
});

// Validation rules
const emailValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres')
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/)
    .withMessage('Nome deve conter apenas letras e espaços'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  body('company')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Empresa deve ter entre 2 e 100 caracteres'),
  body('role')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Cargo é obrigatório'),
  body('interest')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Interesse é obrigatório'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Mensagem deve ter entre 10 e 1000 caracteres'),
  // Honeypot field - should be empty
  body('website')
    .isEmpty()
    .withMessage('Campo suspeito preenchido')
];

// Email sending endpoint
app.post('/api/send-email', emailValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Dados inválidos',
        details: errors.array().map(err => err.msg)
      });
    }

    const { name, email, company, role, interest, message, website } = req.body;

    // Honeypot check - if website field is filled, it's likely a bot
    if (website && website.trim() !== '') {
      console.log('Bot detected - honeypot field filled:', { ip: req.ip, website });
      // Return success to not reveal the honeypot
      return res.json({ 
        success: true, 
        message: 'Email enviado com sucesso!',
        id: 'honeypot-' + Date.now()
      });
    }

    // Additional bot detection patterns
    const suspiciousPatterns = [
      /http[s]?:\/\//i,  // URLs in name/company
      /<[^>]*>/,         // HTML tags
      /\b(viagra|casino|loan|crypto|bitcoin)\b/i // Spam keywords
    ];
    
    const textFields = [name, company, message];
    const hasSuspiciousContent = textFields.some(field => 
      suspiciousPatterns.some(pattern => pattern.test(field))
    );
    
    if (hasSuspiciousContent) {
      console.log('Suspicious content detected:', { ip: req.ip, fields: textFields });
      return res.status(400).json({ 
        error: 'Conteúdo não permitido detectado' 
      });
    }

    // Sanitize and escape HTML to prevent XSS
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

    // Email template with escaped content
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
      <p><em>Enviado via formulário do site Fastcomm - IP: ${req.ip}</em></p>
      <p><em>Timestamp: ${new Date().toLocaleString('pt-BR')}</em></p>
    `;

    // Send email using Resend (or simulate in development)
    if (resend) {
      const data = await resend.emails.send({
        from: 'Fastcomm <noreply@sendteste.ctctech.com.br>',
        to: ['faleconosco@ctctech.com.br'],
        subject: `Nova solicitação de demonstração - ${company}`,
        html: emailHtml,
        replyTo: email
      });

      console.log('Email sent successfully:', data);
      res.json({ 
        success: true, 
        message: 'Email enviado com sucesso!',
        id: data.id 
      });
    } else {
      // Development mode - simulate email sending
      console.log('=== SIMULATED EMAIL (Development Mode) ===');
      console.log('To: faleconosco@ctctech.com.br');
      console.log(`Subject: Nova solicitação de demonstração - ${escapeHtml(company)}`);
      console.log('From IP:', req.ip);
      console.log('Timestamp:', new Date().toLocaleString('pt-BR'));
      console.log('HTML:', emailHtml);
      console.log('=============================================');
      
      res.json({ 
        success: true, 
        message: 'Email enviado com sucesso! (Modo desenvolvimento)',
        id: 'dev-' + Date.now()
      });
    }

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Email service running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
});