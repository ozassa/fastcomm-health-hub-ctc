# 🚀 Fastcomm - Guia de Deploy para Produção

## 📋 Pré-requisitos

### Servidor
- **OS**: Ubuntu 20.04+ ou CentOS 7+
- **CPU**: 2 vCPUs mínimo
- **RAM**: 4GB mínimo
- **Storage**: 20GB SSD
- **Network**: Porta 80 e 443 abertas

### Software
- **Docker**: 20.10+
- **Docker Compose**: 2.0+
- **Git**: 2.0+
- **Curl**: Para health checks

## 🔧 Configuração do Servidor

### 1. Instalar Docker
```bash
# Ubuntu
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# CentOS
sudo yum install -y docker docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

### 2. Configurar Firewall
```bash
# Ubuntu (UFW)
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable

# CentOS (firewalld)
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --reload
```

### 3. Configurar SSL Certificate
```bash
# Criar diretório SSL
sudo mkdir -p /etc/nginx/ssl

# Copiar certificados (substitua pelos seus)
sudo cp fastcomm.com.br.crt /etc/nginx/ssl/
sudo cp fastcomm.com.br.key /etc/nginx/ssl/
sudo chmod 600 /etc/nginx/ssl/*
```

## 🌐 Configuração DNS

Configure os seguintes registros DNS:

```
# Produção
www.fastcomm.com.br    A       IP_DO_SERVIDOR
fastcomm.com.br        A       IP_DO_SERVIDOR

# Staging (opcional)
staging.fastcomm.com.br A       IP_DO_SERVIDOR
```

## 📦 Deploy da Aplicação

### 1. Clonar o Repositório
```bash
git clone https://github.com/sua-org/fastcomm-health-connect-hub.git
cd fastcomm-health-connect-hub
```

### 2. Configurar Variáveis de Ambiente
```bash
# Copiar arquivo de exemplo
cp .env.production .env

# Editar com valores corretos
nano .env

# Variáveis importantes:
# RESEND_API_KEY=sua_api_key_aqui
# GA_MEASUREMENT_ID=G-XXXXXXXXXX
# FB_PIXEL_ID=XXXXXXXXXX
# LINKEDIN_PARTNER_ID=XXXXXXXXXX
```

### 3. Executar Deploy
```bash
# Dar permissão de execução
chmod +x deploy.sh

# Executar deploy
./deploy.sh production
```

### 4. Verificar Status
```bash
# Verificar containers
docker-compose -f docker-compose.prod.yml ps

# Verificar logs
docker-compose -f docker-compose.prod.yml logs -f

# Health checks
curl https://www.fastcomm.com.br/health
curl https://www.fastcomm.com.br/api/health
```

## 🔍 Monitoramento

### Health Checks
- **Frontend**: `https://www.fastcomm.com.br/health`
- **Backend**: `https://www.fastcomm.com.br/api/health`

### Logs
```bash
# Todos os logs
docker-compose -f docker-compose.prod.yml logs

# Logs específicos
docker logs fastcomm-frontend
docker logs fastcomm-backend

# Logs em tempo real
docker-compose -f docker-compose.prod.yml logs -f
```

### Métricas
```bash
# Status dos containers
docker stats

# Uso de recursos
docker system df

# Informações do sistema
docker info
```

## 🔄 Atualizações

### Deploy de Nova Versão
```bash
# Fazer pull do código
git pull origin main

# Executar deploy
./deploy.sh production

# Verificar se tudo está funcionando
curl https://www.fastcomm.com.br/health
```

### Rollback
```bash
# Voltar para versão anterior
git checkout HEAD~1

# Executar deploy
./deploy.sh production
```

## 🛠️ Troubleshooting

### Container não inicia
```bash
# Verificar logs
docker-compose -f docker-compose.prod.yml logs [service-name]

# Verificar configuração
docker-compose -f docker-compose.prod.yml config

# Rebuild forçado
docker-compose -f docker-compose.prod.yml up --build --force-recreate
```

### SSL Issues
```bash
# Verificar certificado
openssl x509 -in /etc/nginx/ssl/fastcomm.com.br.crt -text -noout

# Verificar chave
openssl rsa -in /etc/nginx/ssl/fastcomm.com.br.key -check

# Testar SSL
curl -I https://www.fastcomm.com.br
```

### Performance Issues
```bash
# Verificar recursos
docker stats

# Verificar logs de erro
docker-compose -f docker-compose.prod.yml logs | grep -i error

# Reiniciar serviços
docker-compose -f docker-compose.prod.yml restart
```

## 🔒 Segurança

### Configurações Importantes
- SSL/TLS configurado
- Headers de segurança ativos
- Firewall configurado
- Certificados com permissões corretas
- Variáveis de ambiente seguras

### Backup
```bash
# Backup de configurações
tar -czf backup-$(date +%Y%m%d).tar.gz .env* docker-compose.prod.yml nginx.prod.conf

# Backup de logs
docker-compose -f docker-compose.prod.yml logs > logs-$(date +%Y%m%d).txt
```

## 📊 Configuração de Analytics

### Google Analytics 4
1. Substitua `GA_MEASUREMENT_ID` no `.env`
2. Configure goals para leads
3. Ative Enhanced Ecommerce

### Facebook Pixel
1. Substitua `FB_PIXEL_ID` no `.env`
2. Configure eventos de conversão
3. Crie audiências personalizadas

### LinkedIn Insight Tag
1. Substitua `LINKEDIN_PARTNER_ID` no `.env`
2. Configure tracking de conversões B2B

## 🆘 Suporte

### Contatos
- **Email**: faleconosco@ctctech.com.br
- **Equipe**: DevOps Team

### Documentação
- **API**: `/api/health`
- **Status**: `/health`
- **Logs**: `docker-compose logs`

---

**Versão**: 1.0.0  
**Última atualização**: 2025-07-15