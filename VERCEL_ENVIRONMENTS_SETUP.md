# Guia de Setup - Ambientes Vercel para FastComm Health Hub

Este guia detalha como configurar os 3 ambientes no Vercel Dashboard para o projeto FastComm Health Hub.

## 🎯 Estrutura dos Projetos Vercel

Você precisa criar **3 projetos separados** no Vercel, cada um conectado a uma branch específica:

### 1. **fastcomm-health-hub-dev** (Desenvolvimento)

- **Branch**: `development`
- **URL Final**: `https://fastcomm-health-hub-dev.vercel.app`

### 2. **fastcomm-health-hub-staging** (Homologação)

- **Branch**: `staging`
- **URL Final**: `https://fastcomm-health-hub-staging.vercel.app`

### 3. **fastcomm-health-hub-ctc** (Produção)

- **Branch**: `main`
- **URL Final**: `https://fastcomm-health-hub-ctc.vercel.app` ✅ _Já existe_

## 🚀 Passo a Passo no Vercel Dashboard

### Projeto 1: Development Environment

1. **Criar Novo Projeto**
   - Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
   - Clique em "Add New..." → "Project"
   - Selecione o repositório: `ozassa/fastcomm-health-hub-ctc`

2. **Configurações do Projeto**
   - **Project Name**: `fastcomm-health-hub-dev`
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (deixar padrão)
   - **Build Command**: `npm run build:dev`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Git Configuration**
   - **Production Branch**: `development` ⚠️ _Importante: mudar de main para development_
   - **Preview Deployments**: Enabled (opcional)

4. **Environment Variables** (copiar do `.env.development`):
   ```
   VITE_APP_ENV=development
   VITE_MODE=development
   NODE_ENV=development
   VITE_API_URL=https://fastcomm-health-hub-dev.vercel.app/api
   VITE_APP_URL=https://fastcomm-health-hub-dev.vercel.app
   RESEND_API_KEY=your_resend_api_key_here
   IKV360_WEBHOOK_URL=https://webhook.ikv360.com/endpoints/ctc-fastcomm-dev
   IKV360_WEBHOOK_SECRET=your_webhook_secret_dev
   VITE_GOOGLE_ANALYTICS_ID=
   VITE_VERCEL_ANALYTICS_ENABLED=false
   VITE_ENABLE_DEBUG_MODE=true
   VITE_ENABLE_CONSOLE_LOGS=true
   VITE_ENABLE_ERROR_REPORTING=false
   VITE_ENABLE_HONEYPOT=true
   VITE_ENABLE_RATE_LIMITING=false
   VITE_MAX_REQUESTS_PER_MINUTE=100
   VITE_OPTIMIZE_IMAGES=false
   VITE_ENABLE_LAZY_LOADING=false
   VITE_ENABLE_REACT_DEVTOOLS=true
   VITE_ENABLE_QUERY_DEVTOOLS=true
   ```

### Projeto 2: Staging Environment

1. **Criar Novo Projeto**
   - **Project Name**: `fastcomm-health-hub-staging`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build:staging`
   - **Output Directory**: `dist`

2. **Git Configuration**
   - **Production Branch**: `staging` ⚠️ _Importante: mudar para staging_

3. **Environment Variables** (copiar do `.env.staging`):
   ```
   VITE_APP_ENV=staging
   VITE_MODE=staging
   NODE_ENV=production
   VITE_API_URL=https://fastcomm-health-hub-staging.vercel.app/api
   VITE_APP_URL=https://fastcomm-health-hub-staging.vercel.app
   RESEND_API_KEY=your_resend_api_key_here
   IKV360_WEBHOOK_URL=https://webhook.ikv360.com/endpoints/ctc-fastcomm-staging
   IKV360_WEBHOOK_SECRET=your_webhook_secret_staging
   VITE_GOOGLE_ANALYTICS_ID=
   VITE_VERCEL_ANALYTICS_ENABLED=false
   VITE_ENABLE_DEBUG_MODE=true
   VITE_ENABLE_CONSOLE_LOGS=true
   VITE_ENABLE_ERROR_REPORTING=true
   VITE_ENABLE_HONEYPOT=true
   VITE_ENABLE_RATE_LIMITING=true
   VITE_MAX_REQUESTS_PER_MINUTE=60
   VITE_OPTIMIZE_IMAGES=true
   VITE_ENABLE_LAZY_LOADING=true
   VITE_ENABLE_REACT_DEVTOOLS=false
   VITE_ENABLE_QUERY_DEVTOOLS=false
   ```

### Projeto 3: Production Environment (Atualizar Existente)

1. **Atualizar Projeto Existente**
   - Vá para o projeto `fastcomm-health-hub-ctc` existente
   - **Settings** → **Git** → **Production Branch**: confirme que está `main`
   - **Settings** → **General** → **Build Command**: `npm run build:prod`

2. **Atualizar Environment Variables** (baseado no `.env.production`):
   ```
   VITE_APP_ENV=production
   VITE_MODE=production
   NODE_ENV=production
   VITE_API_URL=https://fastcomm-health-hub-ctc.vercel.app/api
   VITE_APP_URL=https://fastcomm-health-hub-ctc.vercel.app
   RESEND_API_KEY=re_dXuNfzj7_4wFciskhAEu9nSQiugsr69rF
   IKV360_WEBHOOK_URL=https://ikv360.com.br/api/marketings/fastcomm-lp
   IKV360_WEBHOOK_SECRET=1|QYleqiZbE2SF8ozxMK8jxkkzXojz8Wt0uZJDBZ8x3a53e87e
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   VITE_VERCEL_ANALYTICS_ENABLED=true
   VITE_ENABLE_DEBUG_MODE=false
   VITE_ENABLE_CONSOLE_LOGS=false
   VITE_ENABLE_ERROR_REPORTING=true
   VITE_ENABLE_HONEYPOT=true
   VITE_ENABLE_RATE_LIMITING=true
   VITE_MAX_REQUESTS_PER_MINUTE=30
   VITE_OPTIMIZE_IMAGES=true
   VITE_ENABLE_LAZY_LOADING=true
   VITE_ENABLE_REACT_DEVTOOLS=false
   VITE_ENABLE_QUERY_DEVTOOLS=false
   CORS_ORIGIN=https://www.fastcomm.com.br
   DOMAIN=www.fastcomm.com.br
   STAGING_DOMAIN=staging.fastcomm.com.br
   ```

## 🔗 Configuração IKV360 CRM

### Production ✅ _Configurado_

- **URL**: `https://ikv360.com.br/api/marketings/fastcomm-lp`
- **Bearer Token**: `1|QYleqiZbE2SF8ozxMK8jxkkzXojz8Wt0uZJDBZ8x3a53e87e`
- **Usar em**: Ambiente de produção

### Development & Staging

Para desenvolvimento e staging, você precisará criar endpoints separados no IKV360 ou usar URLs de teste:

- **Development**: Configurar endpoint de teste no IKV360
- **Staging**: Configurar endpoint de homologação no IKV360

**Nota**: O código da API foi atualizado para usar `Authorization: Bearer` em vez de headers personalizados.

## ⚙️ Configurações Avançadas

### Build Settings por Ambiente

| Ambiente    | Build Command           | Node Version | Caching  |
| ----------- | ----------------------- | ------------ | -------- |
| Development | `npm run build:dev`     | 18.x         | Disabled |
| Staging     | `npm run build:staging` | 18.x         | Enabled  |
| Production  | `npm run build:prod`    | 18.x         | Enabled  |

### Domains e DNS

Após criar os projetos, você pode configurar domínios customizados:

- **Development**: `dev-hub.fastcomm.com.br` (opcional)
- **Staging**: `staging-hub.fastcomm.com.br` (recomendado)
- **Production**: `hub.fastcomm.com.br` ou manter `fastcomm-health-hub-ctc.vercel.app`

## 🚨 Deploy Triggers

### Automatic Deployments

- **Development**: Todo push para `development` → deploy automático
- **Staging**: Todo push para `staging` → deploy automático
- **Production**: Todo push para `main` → deploy automático

### Manual Deployments

No dashboard de cada projeto:

1. Vá para **Deployments**
2. Clique nos "..." ao lado do deployment
3. Selecione **Redeploy**

## ✅ Checklist Final

Após configurar todos os projetos:

- [ ] **Development**: Deploy testado e funcionando
- [ ] **Staging**: Deploy testado e funcionando
- [ ] **Production**: Deploy funcionando (já existente)
- [ ] **IKV360**: Endpoints criados para cada ambiente
- [ ] **Environment Variables**: Configuradas corretamente em cada projeto
- [ ] **Build Commands**: Específicos para cada ambiente
- [ ] **Branch Protection**: Production branch configurada
- [ ] **DNS**: Domínios configurados (opcional)

## 📞 URLs Finais

Após a configuração completa:

- 🔧 **Development**: `https://fastcomm-health-hub-dev.vercel.app`
- 🧪 **Staging**: `https://fastcomm-health-hub-staging.vercel.app`
- 🚀 **Production**: `https://fastcomm-health-hub-ctc.vercel.app`

---

## 🔧 Comandos Úteis

### Vercel CLI (opcional)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy manual para ambiente específico
vercel --prod  # para production
vercel --target staging  # para staging
```

### Monitoramento

- **Analytics**: Habilitado apenas em staging e production
- **Error Tracking**: Sentry ou similar, configurado por ambiente
- **Performance**: Lighthouse CI pode ser configurado para cada ambiente

---

📝 **Importante**: Sempre teste cada ambiente após a configuração inicial e após mudanças significativas nas configurações.
