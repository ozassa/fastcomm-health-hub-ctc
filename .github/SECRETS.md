# GitHub Secrets Configuration

Este documento lista os secrets necessários para configurar o CI/CD completo do projeto.

## Secrets Obrigatórios

### Deployment (Production)
- `HOST`: IP ou hostname do servidor de produção
- `USERNAME`: Nome do usuário SSH para deploy
- `SSH_KEY`: Chave SSH privada para acesso ao servidor
- `PORT`: Porta SSH (geralmente 22)

### Deployment (Staging)
- `STAGING_HOST`: IP ou hostname do servidor de staging
- `STAGING_USERNAME`: Nome do usuário SSH para staging
- `STAGING_SSH_KEY`: Chave SSH privada para staging
- `STAGING_PORT`: Porta SSH para staging

### Notificações
- `SLACK_WEBHOOK`: URL do webhook do Slack para notificações
- `GITHUB_TOKEN`: Token do GitHub para releases automáticos

### Analytics e Monitoramento
- `GA_MEASUREMENT_ID`: ID do Google Analytics
- `FB_PIXEL_ID`: ID do Facebook Pixel
- `LINKEDIN_PARTNER_ID`: ID do LinkedIn Partner
- `SENTRY_DSN`: DSN do Sentry para monitoramento de erros

### APIs Externas
- `RECAPTCHA_SITE_KEY`: Chave do site reCAPTCHA
- `RECAPTCHA_SECRET_KEY`: Chave secreta do reCAPTCHA
- `CALENDLY_API_KEY`: API key do Calendly
- `SMTP_PASSWORD`: Senha do SMTP para envio de emails

### Security
- `JWT_SECRET`: Secret para JWT tokens
- `ENCRYPTION_KEY`: Chave de criptografia
- `SESSION_SECRET`: Secret para sessões

## Como Configurar

1. Acesse o repositório no GitHub
2. Vá em Settings → Secrets and variables → Actions
3. Clique em "New repository secret"
4. Adicione cada secret da lista acima

## Environments

Configure os seguintes environments:

### Production Environment
- `HOST`
- `USERNAME`
- `SSH_KEY`
- `PORT`

### Staging Environment
- `STAGING_HOST`
- `STAGING_USERNAME`
- `STAGING_SSH_KEY`
- `STAGING_PORT`

## Comandos para Configurar via CLI

```bash
# Exemplo de configuração via gh CLI
gh secret set HOST --body "your-production-server-ip"
gh secret set USERNAME --body "your-ssh-username"
gh secret set SSH_KEY --body "$(cat ~/.ssh/id_rsa)"
gh secret set PORT --body "22"

# Staging
gh secret set STAGING_HOST --body "your-staging-server-ip"
gh secret set STAGING_USERNAME --body "your-staging-username"
gh secret set STAGING_SSH_KEY --body "$(cat ~/.ssh/staging_key)"
gh secret set STAGING_PORT --body "22"

# Notificações
gh secret set SLACK_WEBHOOK --body "https://hooks.slack.com/services/..."
gh secret set GITHUB_TOKEN --body "ghp_..."

# Analytics
gh secret set GA_MEASUREMENT_ID --body "G-XXXXXXXXXX"
gh secret set FB_PIXEL_ID --body "123456789"
gh secret set LINKEDIN_PARTNER_ID --body "123456"

# APIs
gh secret set RECAPTCHA_SITE_KEY --body "6Lc..."
gh secret set RECAPTCHA_SECRET_KEY --body "6Lc..."
gh secret set CALENDLY_API_KEY --body "your-calendly-key"
gh secret set SMTP_PASSWORD --body "your-smtp-password"

# Security
gh secret set JWT_SECRET --body "your-jwt-secret-key"
gh secret set ENCRYPTION_KEY --body "your-encryption-key"
gh secret set SESSION_SECRET --body "your-session-secret"
```

## Verificação

Para verificar se os secrets foram configurados:

```bash
gh secret list
```

## Segurança

- Nunca commite secrets no código
- Use secrets apenas para valores sensíveis
- Rotacione secrets periodicamente
- Monitore uso de secrets nos logs
- Use environments para separar prod/staging

## Troubleshooting

- Verifique se os secrets estão no environment correto
- Confirme que as chaves SSH têm permissões corretas
- Teste conectividade SSH antes de configurar
- Verifique logs dos workflows para erros específicos