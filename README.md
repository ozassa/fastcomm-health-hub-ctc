# FastComm Health Connect Hub

## Visão Geral

O FastComm Health Connect Hub é uma plataforma web moderna desenvolvida para conectar profissionais de saúde e facilitar a comunicação em ambientes hospitalares e clínicos. A aplicação oferece uma interface intuitiva e responsiva para gerenciamento de comunicações em tempo real.

## Domínios

- **Produção**: https://www.fastcomm.com.br
- **Staging**: https://staging.fastcomm.com.br

## Tecnologias Utilizadas

Esta aplicação foi desenvolvida com as seguintes tecnologias:

- **Frontend**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui components (Radix UI)
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Routing**: React Router DOM v6
- **Testing**: Vitest + Testing Library
- **Build**: Vite com SWC

## Desenvolvimento Local

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- [Instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Configuração

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Navegue para o diretório do projeto
cd fastcomm-health-connect-hub

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run build           # Build de produção
npm run build:dev       # Build de desenvolvimento
npm run preview         # Preview do build

# Otimização de Assets
npm run optimize:assets # Otimizar imagens e vídeos
npm run optimize:images # Otimizar apenas imagens
npm run optimize:videos # Otimizar apenas vídeos

# Testes e Qualidade
npm run test            # Executar testes
npm run test:ui         # Interface de testes
npm run test:coverage   # Relatório de cobertura
npm run lint           # Análise de código
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   └── __tests__/      # Testes de componentes
├── pages/              # Páginas da aplicação
├── constants/          # Dados estáticos e configurações
├── hooks/              # Custom hooks
├── lib/                # Utilitários e bibliotecas
├── utils/              # Funções auxiliares
├── config/             # Arquivos de configuração
└── assets/             # Assets estáticos
```

## Deploy

O projeto está configurado para deploy via Docker com suporte a múltiplos ambientes:

### Produção
```bash
# Build e deploy de produção
npm run build
docker-compose -f docker-compose.prod.yml up -d
```

### Staging
```bash
# Deploy para staging
docker-compose -f docker-compose.staging.yml up -d
```

## Otimização de Performance

- Lazy loading para imagens e vídeos
- Pipeline de otimização automática de assets
- Code splitting via React Router
- Error boundaries para estabilidade da aplicação

## Contato

Para dúvidas ou suporte, entre em contato através do email: faleconosco@ctctech.com.br
