# Configuração do Resend para Envio de Emails

## Passo 1: Criar conta no Resend

1. Acesse [https://resend.com/](https://resend.com/)
2. Clique em "Sign up" e crie sua conta
3. Confirme seu email

## Passo 2: Obter a API Key

1. Faça login no dashboard do Resend
2. Vá para "API Keys" no menu lateral
3. Clique em "Create API Key"
4. Dê um nome (ex: "Fastcomm Contact Form")
5. Copie a API key gerada (formato: `re_xxxxx`)

## Passo 3: Configurar o Domínio (Opcional)

Para usar um domínio personalizado:

1. No dashboard, vá para "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: `fastcomm.com.br`)
4. Siga as instruções para configurar os registros DNS

## Passo 4: Configurar a Aplicação

1. Crie um arquivo `.env` na raiz do projeto:
```bash
RESEND_API_KEY=re_sua_api_key_aqui
```

2. Reinicie os serviços:
```bash
docker-compose down
docker-compose up -d
```

## Passo 5: Testar o Formulário

1. Acesse [http://localhost:3000](http://localhost:3000)
2. Vá até a seção "Solicitar Demonstração"
3. Preencha o formulário e envie
4. Verifique o email em contato@fastcomm.com.br

## Modo de Desenvolvimento

Sem a API key, o sistema funciona em modo de desenvolvimento:
- Os emails são simulados (não enviados)
- As informações aparecem no console do servidor
- Você pode testar a funcionalidade sem configurar o Resend

## Logs do Servidor

Para ver os logs do servidor de email:
```bash
docker logs fastcomm-email-service -f
```

## Custos

- Resend oferece 3.000 emails gratuitos por mês
- Planos pagos começam em $20/mês para 50.000 emails
- Veja os preços completos em [https://resend.com/pricing](https://resend.com/pricing)

## Alternativas

Se preferir usar SendGrid:
1. Substitua `resend` por `@sendgrid/mail` no `server/package.json`
2. Atualize o código no `server/index.js` para usar a API do SendGrid
3. Configure a API key do SendGrid no `.env`