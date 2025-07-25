# 📊 Sistema de Tracking de Leads - Landing Page Fastcomm

## ✅ Implementação Completa

Este documento descreve a implementação completa do sistema de tracking e analytics para leads da Landing Page Fastcomm, incluindo integração com o CRM ikv360.

## 🚀 Features Implementadas

### ✅ 1. Captura Completa de Dados
- **UTM Parameters**: Source, Medium, Campaign, Content, Term
- **Dados Técnicos**: Device, Browser, OS, Screen Resolution, IP
- **Dados Comportamentais**: Time on Page, Scroll Depth
- **Classificação de Campanhas**: Paid, Organic, Direct, Referral

### ✅ 2. Tracking de Analytics
- **Google Analytics 4**: Events, Conversions, Enhanced Ecommerce
- **Facebook Pixel**: Lead Events, Custom Conversions
- **LinkedIn Insight Tag**: Conversion Tracking (configurável)

### ✅ 3. Integração CRM ikv360
- **Webhook Direto**: Envio automático para ikv360 via webhook
- **Dados Estruturados**: Payload completo com todos os dados de tracking
- **Error Handling**: Logs e fallbacks para falhas de webhook

### ✅ 4. Email Enhanced
- **Template Rico**: Email com todos os dados de tracking
- **Resend Integration**: Mantém funcionamento atual
- **Dados de Campanha**: UTM tracking visível no email

## 📁 Arquivos Modificados/Criados

### 🆕 Novos Arquivos
- `src/utils/tracking.ts` - Funções utilitárias de tracking
- `docs/ikv360-webhook-integration.md` - Documentação completa da integração
- `docs/LEAD_TRACKING_IMPLEMENTATION.md` - Este arquivo

### 🔄 Arquivos Modificados
- `src/components/ContactSection.tsx` - Formulário com tracking completo
- `src/lib/emailjs.ts` - Interface expandida para dados de tracking
- `api/send-email.js` - API completa com webhook ikv360
- `src/components/analytics/GoogleAnalytics.tsx` - Tracking de leads expandido
- `.env.example` - Variáveis de ambiente para ikv360

## 🔧 Configuração Necessária

### 1. Variáveis de Ambiente

```bash
# CRM ikv360 Integration
IKV360_WEBHOOK_URL=https://ikv360.aws.domain.com/api/webhooks/fastcomm-landing
IKV360_WEBHOOK_SECRET=shared_secret_between_systems

# Resend Email (já existente)
RESEND_API_KEY=your_resend_api_key_here

# Analytics (opcional - configurar se necessário)
GA_MEASUREMENT_ID=G-XXXXXXXXXX
FB_PIXEL_ID=123456789
LINKEDIN_PARTNER_ID=123456
```

### 2. Google Analytics 4
```html
<!-- Adicionar ao index.html se ainda não estiver -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Facebook Pixel
```html
<!-- Adicionar ao index.html se ainda não estiver -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'FB_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📊 Fluxo Completo

### 1. Usuario Acessa Landing Page
```
Usuario → Landing Page → initializeSession() → trackFormEvent('start')
```

### 2. Usuario Interage com Formulário
```
Focus em campo → trackFormEvent('field_focus') → Google Analytics + Facebook Pixel
```

### 3. Usuario Submete Formulário
```
Submit → Validação → Captura dados completos → trackFormEvent('submit')
       ↓
   API /send-email → Webhook ikv360 + Email Resend + Analytics
```

### 4. Dados no ikv360
```
Webhook → MySQL → CRM Interface → Analytics Dashboard
```

## 🎯 Dados Capturados

### Basic Lead Data
```json
{
  "name": "João Silva",
  "email": "joao@empresa.com",
  "company": "Empresa XYZ",
  "role": "CTO",
  "interest": "Integração FHIR",
  "message": "Mensagem do usuario..."
}
```

### UTM Tracking
```json
{
  "utm_source": "google",
  "utm_medium": "cpc", 
  "utm_campaign": "healthcare-integration-2024",
  "utm_content": "ad-variant-a",
  "utm_term": "integracao+fhir"
}
```

### Technical Data
```json
{
  "device_type": "desktop",
  "browser": "Chrome",
  "operating_system": "Windows",
  "screen_resolution": "1920x1080",
  "ip_address": "192.168.1.100",
  "user_agent": "Mozilla/5.0...",
  "referrer": "https://google.com/search?q=..."
}
```

### Behavioral Data
```json
{
  "time_on_page": 45,
  "scroll_depth": 85,
  "landing_page": "https://fastcomm.com.br/?utm_campaign=...",
  "page_title": "Fastcomm - Interoperabilidade Simplificada"
}
```

### Campaign Classification
```json
{
  "source": "fastcomm_landing_page",
  "channel": "website_form",
  "funnel_stage": "top_of_funnel",
  "campaign_type": "paid",
  "tracking_id": "lp_1234567890_abc123"
}
```

## 📈 Analytics Events

### Google Analytics 4

#### Form Start
```javascript
gtag('event', 'form_start', {
  event_category: 'Lead Generation',
  event_label: 'Fastcomm Demo Request',
  utm_source: 'google',
  utm_campaign: 'healthcare-integration-2024'
});
```

#### Lead Generated
```javascript
gtag('event', 'generate_lead', {
  event_category: 'Lead Generation',
  value: 1,
  currency: 'BRL',
  utm_source: 'google',
  utm_campaign: 'healthcare-integration-2024',
  custom_parameter_company: 'Empresa XYZ',
  custom_parameter_tracking_id: 'lp_1234567890_abc123'
});
```

### Facebook Pixel

#### Lead Event
```javascript
fbq('track', 'Lead', {
  content_name: 'Fastcomm Demo Request',
  content_category: 'Healthcare Technology',
  value: 100,
  currency: 'BRL',
  utm_source: 'google',
  company_name: 'Empresa XYZ'
});
```

## 🧪 Como Testar

### 1. Teste Local
```bash
# 1. Configure as env variables
cp .env.example .env.local

# 2. Adicione as URLs reais do ikv360
IKV360_WEBHOOK_URL=https://seu-ikv360.aws.com/api/webhooks/fastcomm-landing
IKV360_WEBHOOK_SECRET=seu_secret_compartilhado

# 3. Rode o projeto
npm run dev

# 4. Acesse com UTM parameters
http://localhost:3000/?utm_source=test&utm_campaign=dev-test&utm_medium=manual
```

### 2. Teste de Webhook
```bash
# Teste manual do endpoint
curl -X POST https://seu-ikv360.aws.com/api/webhooks/fastcomm-landing \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: seu_secret" \
  -H "X-Source: fastcomm-landing-page" \
  -d '{
    "landing_page_lead_id": "test_lead_123",
    "source": "fastcomm_landing_page",
    "lead_data": {
      "name": "Teste Silva",
      "email": "teste@empresa.com",
      "company": "Empresa Teste"
    }
  }'
```

### 3. Verificar Analytics
- **Google Analytics**: Real-time events em Relatórios > Tempo real
- **Facebook Pixel**: Events Manager no Facebook Business
- **Console do Browser**: Logs de tracking em sessionStorage

## 🔍 Debug e Monitoring

### Browser DevTools
```javascript
// Ver eventos de tracking armazenados
JSON.parse(sessionStorage.getItem('form_events'))

// Ver dados de tracking atuais
import { getTrackingData } from '@/utils/tracking';
console.log(getTrackingData());
```

### Logs do Servidor
```javascript
// Vercel Functions logs
console.log('Lead processing completed:', {
  email_id: data.id,
  webhook_success: webhookResult.success,
  tracking_id: completeLeadData.tracking_id,
  utm_campaign: completeLeadData.utm_campaign
});
```

### ikv360 Logs (Laravel)
```php
Log::info('Fastcomm lead received successfully', [
  'lead_id' => $lead->id,
  'email' => $lead->email,
  'utm_campaign' => $lead->utm_campaign
]);
```

## 📊 Métricas Disponíveis

### Landing Page Performance
- **Conversion Rate**: Visitantes → Leads
- **Time to Convert**: Tempo médio na página antes de converter
- **Scroll Engagement**: Depth médio de scroll dos leads
- **Device Performance**: Conversão por Desktop/Mobile/Tablet

### Campaign Performance
- **UTM Tracking**: Performance por source/medium/campaign
- **Cost per Lead**: CPL por campanha (se disponível)
- **Lead Quality**: Scoring baseado em dados comportamentais
- **Geographic Performance**: Por região (baseado em IP)

### Comparative Analysis
- **Channel Comparison**: Landing Page vs. outros canais
- **Campaign ROI**: Retorno sobre investimento por campanha
- **Funnel Analysis**: Da visita até a conversão final

## 🚀 Próximos Passos

### Configuração no ikv360
1. **Implementar webhook receiver** (ver documentação em `docs/ikv360-webhook-integration.md`)
2. **Criar tabela MySQL** com o schema fornecido
3. **Configurar dashboards** para análise de campanhas
4. **Setup de auto-assignment** de leads por regras

### Otimizações Possíveis
1. **A/B Testing**: Diferentes versões do formulário
2. **Lead Scoring**: Algoritmo de pontuação automática
3. **Real-time Notifications**: Slack/Teams para novos leads
4. **Advanced Analytics**: Cohort analysis, attribution modeling

### Integração com Aplicação Principal
1. **API Gateway**: Centralizar leads de múltiplas fontes
2. **Customer Journey**: Tracking completo da jornada
3. **Unified Database**: Consolidar dados de leads

## 📞 Suporte

Para dúvidas sobre a implementação:
1. Consulte a documentação completa em `docs/ikv360-webhook-integration.md`
2. Verifique os logs nos ambientes de desenvolvimento/produção
3. Teste os webhooks individualmente para isolar problemas
4. Valide as variáveis de ambiente estão configuradas corretamente

---

**Status**: ✅ Implementação Completa  
**Última Atualização**: Janeiro 2024  
**Versão**: 1.0.0