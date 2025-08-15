# Fluxo de Trabalho - FastComm Health Hub

Este documento descreve o fluxo de trabalho para desenvolvimento seguro com múltiplos ambientes no projeto FastComm Health Hub.

## 📋 Visão Geral dos Ambientes

### 🔧 Development (Desenvolvimento)

- **Branch**: `development`
- **URL**: `https://fastcomm-health-hub-dev.vercel.app`
- **Propósito**: Desenvolvimento ativo diário, testes de features
- **Características**: Debug habilitado, logs detalhados, sem otimizações

### 🧪 Staging (Homologação)

- **Branch**: `staging`
- **URL**: `https://fastcomm-health-hub-staging.vercel.app`
- **Propósito**: Validação final antes da produção, testes de integração
- **Características**: Ambiente próximo à produção, com algumas funcionalidades de debug

### 🚀 Production (Produção)

- **Branch**: `main`
- **URL**: `https://fastcomm-health-hub-ctc.vercel.app`
- **Propósito**: Ambiente live para usuários finais
- **Características**: Otimizações máximas, logs mínimos, performance otimizada

## 🔄 Fluxo de Trabalho da Equipe

### 1. Desenvolvimento Diário

```bash
# Iniciar nova feature
git checkout development
git pull origin development
git checkout -b feature/nome-da-feature

# Fazer alterações...
git add .
git commit -m "feat: descrição da feature"
git push origin feature/nome-da-feature

# Criar PR para development
# Após aprovação, merge para development
```

**Deploy automático**: Toda vez que há push para `development`, o Vercel faz deploy automático para o ambiente de desenvolvimento.

### 2. Validação em Staging

```bash
# Preparar para staging
git checkout staging
git pull origin staging
git merge development
git push origin staging
```

**Deploy automático**: Push para `staging` dispara deploy automático no ambiente de homologação.

### 3. Deploy para Produção

```bash
# Após validação completa no staging
git checkout main
git pull origin main
git merge staging
git push origin main
```

**Deploy automático**: Push para `main` dispara deploy automático na produção.

## 🛠️ Comandos de Desenvolvimento

### Desenvolvimento Local

```bash
# Ambiente de desenvolvimento
npm run dev

# Ambiente de staging localmente
npm run dev:staging
```

### Builds

```bash
# Build para desenvolvimento
npm run build:dev

# Build para staging
npm run build:staging

# Build para produção
npm run build:prod
```

### Testes e Qualidade

```bash
# Executar testes
npm run test

# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check
```

## 🔒 Regras de Proteção

### Branch `main` (Produção)

- ❌ Push direto bloqueado
- ✅ Apenas merges via Pull Request
- ✅ Requer aprovação de code review
- ✅ Todos os testes devem passar

### Branch `staging` (Homologação)

- ⚠️ Push direto permitido para leads
- ✅ Recomendado usar PRs
- ✅ Testes automatizados devem passar

### Branch `development` (Desenvolvimento)

- ✅ Push direto permitido
- ✅ Ambiente para experimentação
- ⚠️ Pode ter instabilidades temporárias

## 📊 Monitoramento por Ambiente

### Analytics e Tracking

- **Development**: Analytics desabilitado, apenas logs de debug
- **Staging**: Analytics limitado, tracking de testes
- **Production**: Analytics completo, tracking de usuários reais

### Logs e Errors

- **Development**: Console logs habilitados, debug mode ativo
- **Staging**: Logs importantes, error reporting ativo
- **Production**: Logs mínimos, error reporting e monitoring completo

## 🚨 Procedimento de Emergência

### Rollback de Produção

```bash
# Em caso de problema crítico em produção
git checkout main
git revert HEAD  # ou commit específico
git push origin main
```

### Hotfix em Produção

```bash
# Para correções urgentes
git checkout main
git checkout -b hotfix/nome-do-fix
# Fazer correção...
git commit -m "fix: correção urgente"
git push origin hotfix/nome-do-fix

# Criar PR direto para main
# Após merge, sincronizar com outras branches:
git checkout staging
git merge main
git push origin staging

git checkout development
git merge main
git push origin development
```

## ✅ Checklist de Deploy

### Antes de fazer merge para `staging`:

- [ ] Todos os testes passando
- [ ] Feature testada localmente
- [ ] Documentação atualizada (se necessário)
- [ ] Performance verificada

### Antes de fazer merge para `main`:

- [ ] Validação completa no staging
- [ ] Aprovação do product owner
- [ ] Testes de carga realizados (se necessário)
- [ ] Backup/rollback plan definido
- [ ] Monitoramento preparado

## 📞 Contatos e Responsabilidades

- **Development**: Toda a equipe de desenvolvimento
- **Staging**: Lead developer + QA team
- **Production**: Tech lead + DevOps

---

## 🔧 Configurações por Ambiente

| Configuração       | Development | Staging      | Production  |
| ------------------ | ----------- | ------------ | ----------- |
| Debug Mode         | ✅ Enabled  | ✅ Enabled   | ❌ Disabled |
| Console Logs       | ✅ Enabled  | ✅ Enabled   | ❌ Disabled |
| Source Maps        | ✅ Enabled  | ⚠️ Limited   | ❌ Disabled |
| Analytics          | ❌ Disabled | ⚠️ Test Mode | ✅ Enabled  |
| Error Reporting    | ❌ Disabled | ✅ Enabled   | ✅ Enabled  |
| Asset Optimization | ❌ Disabled | ✅ Enabled   | ✅ Enabled  |
| Rate Limiting      | ❌ Disabled | ✅ Enabled   | ✅ Enabled  |

---

📝 **Nota**: Este fluxo garante que nunca quebremos a produção e sempre tenhamos um ambiente estável para validação antes do deploy final.
