# 🛡️ Proteção Contra Bots e Ataques - Formulário Fastcomm

## ✅ Proteções Implementadas

### 1. **Rate Limiting**
- **Limite:** 5 tentativas por IP a cada 15 minutos
- **Bloqueio automático** após exceder o limite
- **Headers de controle** para informar limite restante

### 2. **Campo Honeypot**
- **Campo invisível** "website" no formulário
- **Detecta bots** que preenchem todos os campos automaticamente
- **Resposta falsa** para não revelar a proteção

### 3. **Validação Rigorosa**
- **Sanitização** de todos os campos de entrada
- **Escape de HTML** para prevenir XSS
- **Validação de formato** (email, tamanho, caracteres)
- **Filtragem de conteúdo suspeito** (URLs, HTML, spam keywords)

### 4. **Helmet Security**
- **Headers de segurança** automaticamente configurados
- **Proteção XSS, CSRF, Clickjacking**
- **Content Security Policy** básica

### 5. **Logging e Monitoramento**
- **Log de IPs suspeitos**
- **Timestamp** de todas as tentativas
- **Detecção de padrões** maliciosos

## 🚀 Proteções Avançadas Opcionais

### Google reCAPTCHA v3
Para ativar o reCAPTCHA:

1. **Obtenha as chaves:**
   - Acesse [Google reCAPTCHA](https://www.google.com/recaptcha/)
   - Registre seu site
   - Copie a Site Key e Secret Key

2. **Configure as variáveis de ambiente:**
```bash
# .env
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

3. **Ative o reCAPTCHA no código** (já preparado, basta descomentar)

## 📊 Monitoramento

### Logs do Servidor
```bash
# Ver logs em tempo real
docker logs fastcomm-email-service -f

# Buscar tentativas suspeitas
docker logs fastcomm-email-service 2>&1 | grep "suspicious\\|Bot detected"
```

### Métricas de Segurança
- **Rate limit atingido:** Muitas tentativas do mesmo IP
- **Honeypot ativado:** Bot detectado preenchendo campo oculto
- **Conteúdo suspeito:** URLs, HTML ou palavras-chave de spam
- **Validação falhada:** Dados malformados ou inválidos

## 🛠️ Configurações de Segurança

### Rate Limiting Customizado
No arquivo `server/index.js`, você pode ajustar:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Janela de tempo (15 min)
  max: 5,                   // Máximo de tentativas
  message: {                // Mensagem de erro
    error: 'Muitas tentativas...'
  }
});
```

### Palavras-chave Suspeitas
Adicione mais padrões no array `suspiciousPatterns`:
```javascript
const suspiciousPatterns = [
  /http[s]?:\\/\\//i,  // URLs
  /<[^>]*>/,           // HTML tags
  /\\b(viagra|casino|loan|crypto|bitcoin)\\b/i, // Spam
  // Adicione mais padrões aqui
];
```

## 🔒 Recomendações Adicionais

1. **Firewall Web Application (WAF)**
   - CloudFlare, AWS WAF, ou similar
   - Filtragem por geolocalização
   - Proteção DDoS

2. **Autenticação de Email**
   - SPF, DKIM, DMARC configurados
   - Verificação de domínio no Resend

3. **Monitoramento Proativo**
   - Alertas para picos de tentativas
   - Dashboard de métricas de segurança
   - Backup e logs centralizados

4. **HTTPS Obrigatório**
   - Certificado SSL/TLS
   - HSTS headers
   - Redirecionamento automático

## 🎯 Eficácia das Proteções

### Proteção contra:
- ✅ **Bots simples** (honeypot + rate limiting)
- ✅ **Spam automatizado** (validação + filtros)
- ✅ **Ataques de força bruta** (rate limiting)
- ✅ **Injeção XSS** (sanitização + escape)
- ✅ **Múltiplas tentativas** (IP tracking)

### Limitações:
- ⚠️ **Bots sofisticados** podem contornar honeypot
- ⚠️ **IPs rotativos** podem contornar rate limiting
- ⚠️ **Captcha farming** pode contornar reCAPTCHA

## 📈 Próximos Passos

1. **Monitorar logs** por 1-2 semanas
2. **Ajustar rate limiting** conforme necessário
3. **Implementar reCAPTCHA** se detectar bots avançados
4. **Configurar alertas** para administradores