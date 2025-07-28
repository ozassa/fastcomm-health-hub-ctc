# ✅ Checklist de Deploy - Fastcomm

## 🔧 **Configuração do Servidor**

### Infra
- [ ] Servidor Linux configurado (Ubuntu 20.04+)
- [ ] Docker e Docker Compose instalados
- [ ] Firewall configurado (portas 80, 443, 22)
- [ ] Certificado SSL obtido e configurado
- [ ] DNS apontando para o servidor
- [ ] Backup da configuração atual

### Domínio
- [ ] DNS configurado para `www.fastcomm.com.br`
- [ ] DNS configurado para `fastcomm.com.br` (redirect)
- [ ] Certificado SSL válido
- [ ] Teste de resolução DNS funcionando

## 🔐 **Segurança**

### SSL/TLS
- [ ] Certificado SSL válido
- [ ] Certificado colocado em `/etc/nginx/ssl/`
- [ ] Permissões corretas (600) nos arquivos de certificado
- [ ] Teste HTTPS funcionando

### Variáveis de Ambiente
- [ ] `.env.production` criado
- [ ] `RESEND_API_KEY` configurada
- [ ] Analytics IDs configurados (GA4, FB, LinkedIn)
- [ ] Permissões corretas no arquivo `.env`

## 📦 **Aplicação**

### Código
- [ ] Código atualizado para produção
- [ ] URLs atualizadas para `www.fastcomm.com.br`
- [ ] Structured data atualizado
- [ ] Sitemap e robots.txt atualizados
- [ ] Build testado localmente

### Docker
- [ ] `docker-compose.prod.yml` configurado
- [ ] `nginx.prod.conf` configurado
- [ ] Dockerfile otimizado
- [ ] Health checks funcionando

## 🚀 **Deploy**

### Pré-Deploy
- [ ] Backup da versão atual
- [ ] Teste de conectividade com servidor
- [ ] Verificação de recursos do servidor
- [ ] Validação de certificados SSL

### Deploy
- [ ] Executar `./deploy.sh production`
- [ ] Aguardar build completo
- [ ] Verificar logs sem erros
- [ ] Containers rodando sem problemas

### Pós-Deploy
- [ ] Health check frontend: `https://www.fastcomm.com.br/health`
- [ ] Health check backend: `https://www.fastcomm.com.br/api/health`
- [ ] Teste de formulário completo
- [ ] Verificação de email delivery
- [ ] Teste de todas as seções da página

## 🔍 **Testes**

### Funcionalidade
- [ ] Página carregando corretamente
- [ ] Formulário de contato funcionando
- [ ] Emails sendo enviados para `faleconosco@ctctech.com.br`
- [ ] FAQ section funcionando
- [ ] Responsividade mobile/desktop

### Performance
- [ ] Tempo de carregamento < 3s
- [ ] Core Web Vitals otimizados
- [ ] Gzip compression ativo
- [ ] Cache headers funcionando

### SEO
- [ ] Meta tags corretas
- [ ] Structured data funcionando
- [ ] Sitemap acessível
- [ ] Robots.txt correto
- [ ] Canonical URLs corretas

### Segurança
- [ ] Headers de segurança ativos
- [ ] SSL/TLS funcionando
- [ ] Rate limiting ativo
- [ ] Firewall configurado

## 📊 **Monitoramento**

### Setup
- [ ] Google Analytics configurado
- [ ] Google Search Console configurado
- [ ] Logs de monitoramento funcionando
- [ ] Alertas configurados

### Métricas
- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] Error tracking
- [ ] Lead tracking

## 🔄 **Manutenção**

### Backup
- [ ] Configuração de backup automático
- [ ] Teste de restore
- [ ] Documentação de recovery

### Updates
- [ ] Processo de atualização definido
- [ ] Estratégia de rollback
- [ ] Cronograma de manutenção

## 📞 **Contatos**

### Responsáveis
- **DevOps**: [Nome/Email]
- **Desenvolvimento**: [Nome/Email]
- **Product Owner**: [Nome/Email]
- **Suporte**: faleconosco@ctctech.com.br

### Emergência
- **Telefone**: +55 (11) XXXX-XXXX
- **Email**: emergencia@ctctech.com.br
- **Slack**: #fastcomm-alerts

---

## 🚨 **Em Caso de Problema**

1. **Verificar logs**: `docker-compose -f docker-compose.prod.yml logs`
2. **Reiniciar serviços**: `docker-compose -f docker-compose.prod.yml restart`
3. **Rollback**: `git checkout HEAD~1 && ./deploy.sh production`
4. **Contatar suporte**: faleconosco@ctctech.com.br

**✅ Deploy concluído com sucesso!**