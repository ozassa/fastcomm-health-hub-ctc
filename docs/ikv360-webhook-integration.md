# Integração ikv360 CRM - Landing Page Fastcomm

## 📋 Visão Geral

Esta documentação descreve a integração entre a Landing Page Fastcomm e o CRM ikv360 através de webhooks para captura e análise de leads.

## 🔗 Fluxo de Integração

```
Usuario Formulário → Landing Page → API send-email → Webhook ikv360 → MySQL (ikv360)
                                       ↓
                                   Email via Resend
```

## 📊 Estrutura de Dados

### Webhook Payload (Enviado para ikv360)

```json
{
  "landing_page_lead_id": "lp_1234567890_abc123",
  "source": "fastcomm_landing_page",
  "lead_data": {
    "name": "João Silva",
    "email": "joao@empresa.com",
    "company": "Empresa XYZ",
    "role": "CTO",
    "interest": "Integração FHIR",
    "message": "Gostaria de conhecer melhor a solução...",
    
    "utm_data": {
      "source": "google",
      "medium": "cpc",
      "campaign": "healthcare-integration-2024",
      "content": "ad-variant-a",
      "term": "integracao+fhir"
    },
    
    "technical_data": {
      "ip_address": "192.168.1.100",
      "user_agent": "Mozilla/5.0...",
      "device_type": "desktop",
      "browser": "Chrome",
      "operating_system": "Windows",
      "screen_resolution": "1920x1080",
      "page_url": "https://fastcomm.com.br/?utm_campaign=...",
      "referrer": "https://google.com/search?q=...",
      "time_on_page": 45,
      "scroll_depth": 85
    },
    
    "campaign_type": "paid",
    "channel": "website_form",
    "funnel_stage": "top_of_funnel"
  },
  "created_at": "2024-01-15T14:30:00.000Z",
  "timestamp": "2024-01-15T14:30:00.000Z"
}
```

### Headers do Webhook

```
Content-Type: application/json
X-Webhook-Secret: {IKV360_WEBHOOK_SECRET}
X-Source: fastcomm-landing-page
User-Agent: Fastcomm-Landing-Page/1.0
```

## 🏗️ Schema MySQL (ikv360)

### Tabela Principal: `fastcomm_landing_leads`

```sql
CREATE TABLE fastcomm_landing_leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  
  -- Lead identification
  landing_page_id VARCHAR(36) UNIQUE NOT NULL,
  
  -- Basic lead data
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(200) NOT NULL,
  role VARCHAR(100) NOT NULL,
  interest VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  
  -- UTM tracking (for campaign analysis)
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100), 
  utm_campaign VARCHAR(100),
  utm_content VARCHAR(100),
  utm_term VARCHAR(100),
  
  -- Technical data
  ip_address VARCHAR(45),
  device_type ENUM('desktop', 'mobile', 'tablet'),
  browser VARCHAR(50),
  operating_system VARCHAR(50),
  screen_resolution VARCHAR(20),
  page_url VARCHAR(500),
  referrer VARCHAR(500),
  
  -- Behavioral data
  time_on_page INT DEFAULT 0,
  scroll_depth INT DEFAULT 0,
  
  -- Campaign classification
  campaign_type ENUM('paid', 'organic', 'direct', 'referral') DEFAULT 'direct',
  channel VARCHAR(50) DEFAULT 'website_form',
  funnel_stage VARCHAR(50) DEFAULT 'top_of_funnel',
  
  -- CRM fields
  status ENUM('new', 'contacted', 'qualified', 'proposal', 'won', 'lost') DEFAULT 'new',
  assigned_to INT,
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  lead_score INT DEFAULT 0,
  notes TEXT,
  
  -- Timestamps
  lead_created_at TIMESTAMP NOT NULL,
  first_contact_at TIMESTAMP NULL,
  last_activity_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Indexes for performance
  INDEX idx_email (email),
  INDEX idx_utm_campaign (utm_campaign),
  INDEX idx_utm_source (utm_source),
  INDEX idx_status (status),
  INDEX idx_campaign_type (campaign_type),
  INDEX idx_created_at (lead_created_at),
  INDEX idx_assigned_to (assigned_to),
  
  FOREIGN KEY (assigned_to) REFERENCES users(id)
);
```

## 🔧 Implementação ikv360 (Laravel)

### 1. Controller de Webhook

```php
<?php
// app/Http/Controllers/FastcommWebhookController.php

class FastcommWebhookController extends Controller
{
    public function receiveLead(Request $request)
    {
        // Validar webhook secret
        if (!$this->validateWebhookSecret($request)) {
            Log::warning('Invalid webhook secret from Fastcomm Landing Page');
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        try {
            $payload = $request->all();
            $leadData = $payload['lead_data'];
            
            // Verificar se lead já existe
            $existingLead = FastcommLandingLead::where(
                'landing_page_id', 
                $payload['landing_page_lead_id']
            )->first();
            
            if ($existingLead) {
                return response()->json([
                    'status' => 'already_exists', 
                    'id' => $existingLead->id
                ]);
            }
            
            // Criar novo lead
            $lead = FastcommLandingLead::create([
                'landing_page_id' => $payload['landing_page_lead_id'],
                'name' => $leadData['name'],
                'email' => $leadData['email'],
                'company' => $leadData['company'],
                'role' => $leadData['role'],
                'interest' => $leadData['interest'],
                'message' => $leadData['message'],
                
                // UTM data
                'utm_source' => $leadData['utm_data']['source'],
                'utm_medium' => $leadData['utm_data']['medium'],
                'utm_campaign' => $leadData['utm_data']['campaign'],
                'utm_content' => $leadData['utm_data']['content'],
                'utm_term' => $leadData['utm_data']['term'],
                
                // Technical data
                'ip_address' => $leadData['technical_data']['ip_address'],
                'device_type' => $leadData['technical_data']['device_type'],
                'browser' => $leadData['technical_data']['browser'],
                'operating_system' => $leadData['technical_data']['operating_system'],
                'screen_resolution' => $leadData['technical_data']['screen_resolution'],
                'page_url' => $leadData['technical_data']['page_url'],
                'referrer' => $leadData['technical_data']['referrer'],
                'time_on_page' => $leadData['technical_data']['time_on_page'],
                'scroll_depth' => $leadData['technical_data']['scroll_depth'],
                
                // Campaign classification
                'campaign_type' => $leadData['campaign_type'],
                'channel' => $leadData['channel'],
                'funnel_stage' => $leadData['funnel_stage'],
                
                // Timestamps
                'lead_created_at' => $payload['created_at'],
                'status' => 'new'
            ]);
            
            // Auto-assign lead se houver regras configuradas
            $this->autoAssignLead($lead);
            
            // Notificar equipe de vendas
            $this->notifyNewLead($lead);
            
            Log::info('Fastcomm lead received successfully', [
                'lead_id' => $lead->id,
                'email' => $lead->email,
                'utm_campaign' => $lead->utm_campaign
            ]);
            
            return response()->json([
                'status' => 'success',
                'crm_lead_id' => $lead->id,
                'message' => 'Lead created successfully'
            ]);
            
        } catch (\Exception $e) {
            Log::error('Error processing Fastcomm webhook', [
                'error' => $e->getMessage(),
                'payload' => $request->all()
            ]);
            
            return response()->json([
                'error' => 'Internal server error'
            ], 500);
        }
    }
    
    private function validateWebhookSecret($request)
    {
        $providedSecret = $request->header('X-Webhook-Secret');
        $expectedSecret = config('fastcomm.webhook_secret');
        
        return hash_equals($expectedSecret, $providedSecret);
    }
    
    private function autoAssignLead($lead)
    {
        // Lógica de auto-assignment baseada em regras
        // Ex: por interesse, região, etc.
        
        $salesRep = $this->findBestSalesRep($lead);
        if ($salesRep) {
            $lead->update(['assigned_to' => $salesRep->id]);
        }
    }
    
    private function notifyNewLead($lead)
    {
        // Notificar via Slack, email, etc.
        
        // Slack notification
        if (config('fastcomm.slack_webhook_url')) {
            $this->sendSlackNotification($lead);
        }
        
        // Email para vendedor
        if ($lead->assigned_to) {
            Mail::to($lead->assignedUser->email)
                ->send(new NewLeadAssignedMail($lead));
        }
    }
}
```

### 2. Model FastcommLandingLead

```php
<?php
// app/Models/FastcommLandingLead.php

class FastcommLandingLead extends Model
{
    protected $table = 'fastcomm_landing_leads';
    
    protected $fillable = [
        'landing_page_id', 'name', 'email', 'company', 'role', 
        'interest', 'message', 'utm_source', 'utm_medium', 
        'utm_campaign', 'utm_content', 'utm_term', 'ip_address',
        'device_type', 'browser', 'operating_system', 'screen_resolution',
        'page_url', 'referrer', 'time_on_page', 'scroll_depth',
        'campaign_type', 'channel', 'funnel_stage', 'status',
        'assigned_to', 'priority', 'lead_score', 'notes',
        'lead_created_at', 'first_contact_at', 'last_activity_at'
    ];
    
    protected $casts = [
        'lead_created_at' => 'datetime',
        'first_contact_at' => 'datetime',
        'last_activity_at' => 'datetime',
    ];
    
    // Relacionamentos
    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
    
    public function activities()
    {
        return $this->hasMany(LeadActivity::class, 'lead_id');
    }
    
    // Scopes para queries
    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }
    
    public function scopeFromCampaign($query, $campaign)
    {
        return $query->where('utm_campaign', $campaign);
    }
    
    public function scopePaidTraffic($query)
    {
        return $query->where('campaign_type', 'paid');
    }
    
    // Mutators & Accessors
    public function getQualityScoreAttribute()
    {
        $score = 0;
        
        // Score baseado em completude dos dados
        if ($this->company) $score += 20;
        if ($this->role) $score += 15;
        if (strlen($this->message) > 50) $score += 25;
        if ($this->time_on_page > 30) $score += 20;
        if ($this->scroll_depth > 50) $score += 20;
        
        return $score;
    }
}
```

### 3. Routes

```php
<?php
// routes/api.php

Route::post('/webhooks/fastcomm-landing', [FastcommWebhookController::class, 'receiveLead']);

// Routes para análise (com autenticação)
Route::middleware(['auth:api'])->group(function () {
    Route::get('/leads/fastcomm/analytics', [LeadAnalyticsController::class, 'fastcommAnalytics']);
    Route::get('/leads/fastcomm/campaigns', [LeadAnalyticsController::class, 'campaignPerformance']);
    Route::get('/leads/fastcomm/export', [LeadAnalyticsController::class, 'exportLeads']);
});
```

## 📈 Queries de Análise

### Performance por Campanha

```sql
SELECT 
    utm_campaign,
    utm_source,
    utm_medium,
    campaign_type,
    COUNT(*) as total_leads,
    COUNT(CASE WHEN status IN ('qualified', 'won') THEN 1 END) as qualified_leads,
    COUNT(CASE WHEN status = 'won' THEN 1 END) as customers,
    ROUND(COUNT(CASE WHEN status = 'won' THEN 1 END) * 100.0 / COUNT(*), 2) as conversion_rate,
    AVG(time_on_page) as avg_time_on_page,
    AVG(scroll_depth) as avg_scroll_depth
FROM fastcomm_landing_leads 
WHERE lead_created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY utm_campaign, utm_source, utm_medium, campaign_type
ORDER BY total_leads DESC;
```

### Comparação de Canais

```sql
SELECT 
    campaign_type,
    COUNT(*) as leads,
    COUNT(CASE WHEN status = 'won' THEN 1 END) as customers,
    ROUND(COUNT(CASE WHEN status = 'won' THEN 1 END) * 100.0 / COUNT(*), 2) as conversion_rate,
    AVG(CASE WHEN status = 'won' AND first_contact_at IS NOT NULL 
        THEN TIMESTAMPDIFF(DAY, lead_created_at, first_contact_at) END) as avg_days_to_contact
FROM fastcomm_landing_leads 
WHERE lead_created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)
GROUP BY campaign_type
ORDER BY conversion_rate DESC;
```

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```bash
# Fastcomm Landing Page Integration
FASTCOMM_WEBHOOK_SECRET=shared_secret_here
FASTCOMM_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/xxx/xxx

# Auto-assignment rules
FASTCOMM_AUTO_ASSIGN_ENABLED=true
FASTCOMM_DEFAULT_SALES_REP_ID=1
```

### Config File (config/fastcomm.php)

```php
<?php

return [
    'webhook_secret' => env('FASTCOMM_WEBHOOK_SECRET'),
    'slack_webhook_url' => env('FASTCOMM_SLACK_WEBHOOK_URL'),
    'auto_assign_enabled' => env('FASTCOMM_AUTO_ASSIGN_ENABLED', false),
    'default_sales_rep_id' => env('FASTCOMM_DEFAULT_SALES_REP_ID'),
    
    // Auto-assignment rules
    'assignment_rules' => [
        'healthcare' => 1, // User ID
        'hospital' => 2,
        'clinic' => 3
    ]
];
```

## 🚨 Monitoramento

### Logs Importantes

1. **Webhook received**: Log de todos os webhooks recebidos
2. **Lead created**: Confirmação de criação de lead
3. **Assignment**: Logs de auto-assignment
4. **Errors**: Falhas no processamento

### Métricas a Monitorar

1. **Taxa de recebimento**: Webhooks recebidos vs. enviados
2. **Taxa de conversão**: Leads → Customers por campanha
3. **Tempo de resposta**: Webhook processing time
4. **Qualidade dos leads**: Lead score médio por fonte

## 🔄 Troubleshooting

### Problemas Comuns

1. **Webhook secret inválido**: Verificar env variables
2. **Lead duplicado**: Verificar landing_page_id único
3. **Dados faltando**: Validar payload structure
4. **Auto-assignment falha**: Verificar regras configuradas

### Como Testar

```bash
# Teste manual do webhook
curl -X POST https://ikv360.aws.domain.com/api/webhooks/fastcomm-landing \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: your_secret_here" \
  -d @test_payload.json
```

## 📊 Dashboard Sugerido

### KPIs Principais
- Leads por dia/semana/mês
- Conversão por campanha
- Custo por lead (CPL)
- Tempo médio de resposta
- Lead score médio

### Segmentações
- Por fonte (Google, Facebook, LinkedIn)
- Por dispositivo (Desktop, Mobile, Tablet)
- Por geografia (se disponível via IP)
- Por interesse declarado
- Por tamanho de empresa