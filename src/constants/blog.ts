import { Calendar, FileText, Stethoscope, Database, Shield, Zap } from "lucide-react";

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readingTime: string;
  icon: typeof Calendar;
  slug: string;
}

export const blogCategories = [
  { id: "interoperabilidade", name: "Interoperabilidade", icon: Database },
  { id: "fhir-hl7", name: "FHIR & HL7", icon: FileText },
  { id: "casos-de-uso", name: "Casos de Uso", icon: Stethoscope },
  { id: "seguranca", name: "Segurança & LGPD", icon: Shield },
  { id: "performance", name: "Performance & Escalabilidade", icon: Zap }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "implementar-interoperabilidade-saude",
    title: "Como Implementar Interoperabilidade em Saúde: Guia Completo FHIR R4",
    excerpt: "Guia técnico abrangente para implementar interoperabilidade em sistemas de saúde usando FHIR R4, HL7 e padrões brasileiros TISS. Inclui arquitetura, melhores práticas e casos reais.",
    content: `
# Como Implementar Interoperabilidade em Saúde: Guia Completo FHIR R4

## Introdução à Interoperabilidade Hospitalar

A **interoperabilidade em saúde** é fundamental para conectar sistemas hospitalares HIS, RIS e LIMS de forma eficiente. Este guia técnico apresenta como implementar uma **plataforma interoperabilidade hospitais** usando FHIR R4.

## 1. Arquitetura de Interoperabilidade

### Componentes Essenciais
- **Engine FHIR R4**: Motor de transformação de dados médicos
- **Conectores HIS/RIS/LIMS**: Adaptadores para sistemas hospitalares
- **API Gateway**: Camada de segurança e controle de acesso
- **Data Lake**: Armazenamento padronizado FHIR

### Padrões Técnicos Obrigatórios
- **FHIR R4**: Recursos Patient, Observation, DiagnosticReport
- **HL7 v2.x/v3**: Mensagens ADT, ORM, ORU para sistemas legados  
- **TISS 4.0**: Padrão ANS para operadoras de saúde
- **DICOM**: Imagens médicas e laudos radiológicos

## 2. Processo de Implementação

### Fase 1: Avaliação de Sistemas (Semana 1-2)
1. **Inventário de sistemas**: HIS (Tasy, MV Soul, Philips TASY), RIS/PACS, LIMS
2. **Mapeamento de dados**: Identificar entidades críticas (pacientes, exames, laudos)
3. **Análise de conectividade**: APIs REST, Web Services SOAP, HL7 MLLP
4. **Requisitos de compliance**: LGPD, ANVISA, ANS

### Fase 2: Configuração da Plataforma (Semana 3-4)
1. **Deploy da engine FHIR**: Configuração de servidor FHIR R4 certificado
2. **Conectores nativos**: Instalação de adaptadores HIS/RIS/LIMS
3. **Transformações de dados**: Mapeamento HL7 ↔ FHIR bidirecional
4. **Políticas de segurança**: Criptografia AES-256, OAuth 2.0/OpenID Connect

### Fase 3: Integração e Testes (Semana 5-6)
1. **Testes de conectividade**: Validação de endpoints FHIR
2. **Transformação de dados**: Testes de mapeamento HL7 → FHIR → HL7
3. **Performance**: Benchmarks de latência (<100ms) e throughput
4. **Compliance**: Auditoria de logs e rastreabilidade LGPD

## 3. Casos de Uso Técnicos

### HIS → Aplicação Telemedicina
\`\`\`json
// Exemplo: Transformação de paciente HL7 para FHIR
{
  "resourceType": "Patient",
  "id": "12345",
  "identifier": [
    {
      "system": "http://hospital.com.br/patient-id",
      "value": "PAT12345"
    }
  ],
  "name": [
    {
      "family": "Silva",
      "given": ["João", "Carlos"]
    }
  ]
}
\`\`\`

### RIS/PACS → IA Diagnóstica
- **Input**: Estudos DICOM + metadata HL7 ORU
- **Transformação**: FHIR DiagnosticReport + ImagingStudy  
- **Output**: Algoritmos ML para diagnóstico assistido

### LIMS → Dashboard Analytics
- **Dados laboratoriais**: HL7 ORU → FHIR Observation
- **Métricas em tempo real**: Resultado de exames, TAT, qualidade
- **Alertas inteligentes**: Valores críticos, controle de qualidade

## 4. Benefícios Mensuráveis

### ROI da Interoperabilidade
- **Redução de custos**: 40-60% economia em integrações
- **Time-to-market**: De 6 meses para 4 semanas
- **Qualidade de dados**: 95% redução de erros de transcrição
- **Compliance**: 100% conformidade LGPD/ANVISA

### KPIs Técnicos
- **Latência**: <100ms para transformações FHIR
- **Throughput**: >1M registros/dia processados
- **Uptime**: SLA 99.9% garantido
- **Segurança**: Zero vazamentos de dados PHI

## 5. Melhores Práticas

### Governança de Dados
1. **Padronização**: Uso obrigatório de terminologias (SNOMED CT, LOINC, ICD-10)
2. **Qualidade**: Validação contra schemas FHIR oficiais
3. **Versionamento**: Controle de versões de recursos FHIR
4. **Auditoria**: Logs completos de transformações e acessos

### Segurança e Compliance
1. **Criptografia**: End-to-end encryption (TLS 1.3 + AES-256)
2. **Autenticação**: OAuth 2.0/OIDC com SMART on FHIR
3. **Autorização**: RBAC granular por recurso FHIR
4. **LGPD**: Pseudonimização e direito ao esquecimento

## Conclusão

A implementação de **interoperabilidade hospitalar** usando **FHIR R4** é um investimento estratégico que transforma a capacidade de inovação em saúde digital. Com a metodologia adequada, organizações reduzem significativamente o tempo e custo de integração enquanto mantêm total compliance regulatório.

Para organizações que buscam acelerar sua **transformação digital saúde**, a adoção de uma **plataforma interoperabilidade hospitais** madura é essencial para competir no ecossistema de healthtechs atual.
    `,
    author: "Dr. Ricardo Santos, Arquiteto de Soluções em Saúde Digital",
    publishedAt: "2025-08-15",
    category: "interoperabilidade",
    tags: ["FHIR R4", "HL7", "interoperabilidade hospitalar", "HIS", "RIS", "LIMS", "implementação"],
    readingTime: "12 min",
    icon: Database,
    slug: "implementar-interoperabilidade-saude"
  },
  {
    id: "fhir-vs-hl7-comparativo",
    title: "FHIR vs HL7: Qual Padrão Escolher para Seu Sistema de Saúde?",
    excerpt: "Comparativo técnico detalhado entre FHIR R4 e HL7 v2/v3 para decidir qual padrão de interoperabilidade usar em sistemas hospitalares HIS, RIS e LIMS.",
    content: `
# FHIR vs HL7: Qual Padrão Escolher para Seu Sistema de Saúde?

## Visão Geral dos Padrões de Interoperabilidade

Ao implementar **interoperabilidade em sistemas de saúde**, gestores técnicos enfrentam uma decisão crítica: adotar **FHIR R4** ou manter **HL7 v2/v3**? Este comparativo técnico analisa cenários reais para **conectar sistema hospitalar FHIR** eficientemente.

## HL7 v2: O Veterano dos Sistemas Hospitalares

### Características Técnicas HL7 v2.x
- **Formato**: Mensagens de texto delimitadas por pipe (|)
- **Transporte**: TCP/IP MLLP (Minimal Lower Layer Protocol)
- **Tipos de mensagem**: ADT (pacientes), ORM/OBR (pedidos), ORU (resultados)
- **Estrutura**: Segmentos obrigatórios MSH, PID, OBX

### Vantagens do HL7 v2
1. **Maturidade**: 30+ anos no mercado, sistemas legados compatíveis
2. **Performance**: Baixa latência para mensagens simples
3. **Suporte nativo**: HIS brasileiros (Tasy, MV Soul, Philips TASY)
4. **Custo**: Interfaces já desenvolvidas e testadas

### Limitações Críticas
- **Flexibilidade limitada**: Estrutura rígida de segmentos
- **Versionamento complexo**: Incompatibilidades entre v2.3, v2.4, v2.5, v2.8
- **Web unfriendly**: Não é RESTful, difícil para aplicações web
- **Extensibilidade**: Campos Z customizados causam incompatibilidades

## FHIR R4: A Nova Geração de Interoperabilidade

### Características Técnicas FHIR R4
- **Formato**: JSON/XML com estrutura orientada a recursos
- **Transporte**: RESTful APIs (HTTP GET/POST/PUT/DELETE)
- **Recursos**: Patient, Observation, DiagnosticReport, Medication
- **Versionamento**: Backward compatibility garantida

### Vantagens do FHIR R4
1. **APIs modernas**: RESTful, compatível com arquiteturas de microserviços
2. **Flexibilidade**: Extensões customizáveis sem quebrar compatibilidade
3. **Web-friendly**: Ideal para **healthtechs e aplicações móveis**
4. **Ecossistema**: Ferramentas modernas (SDKs, validadores, servidores)

### Casos de Uso Ideais para FHIR
- **Aplicações web/mobile**: Telemedicina, prontuários eletrônicos
- **IA em saúde**: Machine learning médico, diagnóstico assistido
- **Analytics**: Dashboards em tempo real, business intelligence
- **Integrações externas**: APIs para terceiros, marketplace de apps

## Análise Comparativa Técnica

### Performance e Escalabilidade

| Aspecto | HL7 v2 | FHIR R4 | Vencedor |
|---------|--------|---------|----------|
| **Latência** | <50ms | <100ms | HL7 v2 |
| **Throughput** | >100K msg/s | >50K req/s | HL7 v2 |
| **Escalabilidade** | Vertical | Horizontal | FHIR R4 |
| **Cache** | Limitado | HTTP cache | FHIR R4 |

### Desenvolvimento e Manutenção

| Aspecto | HL7 v2 | FHIR R4 | Vencedor |
|---------|--------|---------|----------|
| **Curva aprendizado** | Alta | Média | FHIR R4 |
| **Ferramentas dev** | Limitadas | Abundantes | FHIR R4 |
| **Testing** | Manual | Automatizado | FHIR R4 |
| **Debugging** | Complexo | Simples | FHIR R4 |

### Compliance e Segurança

| Aspecto | HL7 v2 | FHIR R4 | Vencedor |
|---------|--------|---------|----------|
| **LGPD** | Manual | Nativo | FHIR R4 |
| **Auditoria** | Básica | Granular | FHIR R4 |
| **Criptografia** | TLS | SMART/OAuth2 | FHIR R4 |
| **Autorização** | Básica | RBAC | FHIR R4 |

## Cenários de Decisão

### Escolha HL7 v2 Quando:
1. **Sistemas legados críticos**: HIS/RIS que só suportam HL7 v2
2. **Performance extrema**: >100K mensagens/segundo necessárias
3. **Orçamento limitado**: Equipe sem recursos para migração
4. **Compliance simples**: Requisitos básicos de auditoria

### Escolha FHIR R4 Quando:
1. **Inovação digital**: Desenvolver **aplicações de telemedicina**
2. **Integrações múltiplas**: **Conectar HIS RIS LIMS** com healthtechs
3. **IA em saúde**: Algoritmos de **machine learning médico**
4. **Compliance avançado**: Requisitos LGPD/GDPR rigorosos

## Estratégia Híbrida: O Melhor dos Dois Mundos

### Arquitetura Recomendada
\`\`\`
HIS/RIS/LIMS (HL7 v2) → Engine de Transformação → FHIR R4 APIs
                            ↓
                    Healthtechs e Apps Modernas
\`\`\`

### Benefícios da Abordagem Híbrida
1. **Preserva investimentos**: Sistemas HL7 v2 continuam funcionando
2. **Habilita inovação**: APIs FHIR para novas aplicações  
3. **Migração gradual**: Transição sem interrupção de serviços
4. **ROI otimizado**: Aproveita melhor de cada tecnologia

## Casos de Sucesso Brasileiros

### Hospital Sírio-Libanês
- **Desafio**: Integrar HIS Tasy com 15+ aplicações de telemedicina
- **Solução**: Engine FHIR sobre HL7 v2 legado
- **Resultado**: 60% redução tempo de integração, APIs para inovação

### Rede D'Or
- **Desafio**: Padronizar dados entre 50+ hospitais  
- **Solução**: Hub FHIR R4 com conectores HL7 v2
- **Resultado**: Dashboard unificado, analytics avançado

## Recomendações Técnicas

### Para CTOs e Arquitetos
1. **Avaliação atual**: Inventário de sistemas e capacidades HL7/FHIR
2. **Roadmap tecnológico**: Planejamento de migração 3-5 anos
3. **Proof of Concept**: Piloto FHIR em caso de uso específico
4. **Capacitação**: Treinamento de equipes em padrões modernos

### Para Fornecedores de HIS/RIS
1. **APIs FHIR nativas**: Desenvolver endpoints FHIR R4 
2. **Backward compatibility**: Manter suporte HL7 v2 existente
3. **Certificação**: Validação contra perfis FHIR brasileiros
4. **Documentação**: Guias de implementação técnica

## Conclusão: A Escolha Estratégica

A decisão entre **HL7 v2 e FHIR R4** não é binária. A estratégia mais efetiva combina ambos os padrões:

- **HL7 v2 para sistemas críticos legados** que exigem performance máxima
- **FHIR R4 para inovação e novos casos de uso** que demandam flexibilidade

Uma **plataforma interoperabilidade hospitais** madura deve suportar ambos os padrões, oferecendo transformação bidirecional e APIs modernas para acelerar a **transformação digital saúde**.

Para organizações que buscam **conectar sistema hospitalar FHIR** mantendo investimentos HL7 existentes, a abordagem híbrida oferece o melhor ROI e menor risco técnico.
    `,
    author: "Eng. Ana Paula Ferreira, Especialista em HL7/FHIR",
    publishedAt: "2025-08-10",
    category: "fhir-hl7",
    tags: ["FHIR R4", "HL7 v2", "comparativo", "interoperabilidade", "sistemas hospitalares"],
    readingTime: "15 min",
    icon: FileText,
    slug: "fhir-vs-hl7-comparativo"
  },
  {
    id: "casos-sucesso-integracao-hospitalar",
    title: "Casos de Sucesso: Integração Hospitalar FHIR no Brasil",
    excerpt: "Análise de casos reais de implementação de interoperabilidade hospitalar usando FHIR R4 em grandes redes de saúde brasileiras. Inclui métricas, desafios e resultados.",
    content: `
# Casos de Sucesso: Integração Hospitalar FHIR no Brasil

## Panorama da Interoperabilidade Hospitalar Brasileira

O mercado brasileiro de saúde digital vive uma transformação acelerada na adoção de **interoperabilidade hospitalar**. Este relatório analisa casos reais de **integração sistema hospitalar FHIR** em organizações líderes.

## Caso 1: Hospital Moinhos de Vento - Porto Alegre

### Contexto e Desafios
- **Sistemas integrados**: Mais de 50 sistemas internos fragmentados
- **Desafio principal**: Diversas bases de dados com informações desconectadas
- **Objetivo**: Integrar dados para maior integridade e especialização na utilização
- **Compliance**: LGPD, ANVISA, certificação hospitalar de excelência

### Arquitetura Implementada
\`\`\`
50+ Sistemas Internos → FastComm Engine → Dados Integrados
                            ├─ Sistemas administrativos
                            ├─ Sistemas clínicos (HIS)
                            ├─ Sistemas diagnósticos (RIS/LIMS)
                            └─ Dashboards unificados
\`\`\`

### Soluções Técnicas
1. **Unificação de dados**: Integração de mais de 50 sistemas internos
2. **Dados íntegros**: Eliminação de informações desconectadas e redundantes
3. **Interoperabilidade**: Engine FastComm conectando diferentes protocolos
4. **Especialização**: Melhor utilização de dados para atendimento médico otimizado

### Resultados Mensuráveis
| KPI | Antes | Depois | Melhoria |
|-----|--------|---------|----------|
| **Sistemas integrados** | Fragmentados | 50+ unificados | **Integração completa** |
| **Integridade de dados** | Inconsistente | Padronizada | **95% melhoria** |
| **Diagnósticos ágeis** | Processo lento | Otimizado | **Redução significativa** |
| **Exames redundantes** | Frequentes | Minimizados | **Eficiência operacional** |

### Impacto Organizacional
- **Dados integrados**: Base única de informações confiáveis
- **Atendimento médico**: Mais eficiente com diagnósticos agilizados
- **Redução de redundâncias**: Eliminação de exames desnecessários
- **Especialização**: Melhor utilização de dados clínicos

## Caso 2: WeCancer - Healthtech de Oncologia

### Contexto e Desafios
- **Especialidade**: Plataforma digital para oncologia
- **Desafio principal**: Integração rápida com sistemas hospitalares diversos
- **Necessidade**: Conectividade eficiente com diferentes HIS para dados de pacientes oncológicos
- **Mercado**: Expansão nacional com foco em hospitais especializados em câncer

### Soluções FastComm Implementadas
1. **Conectores rápidos**: APIs padronizadas para integração com diferentes HIS
2. **Interoperabilidade oncológica**: Acesso a dados específicos de pacientes com câncer
3. **Escalabilidade**: Capacidade de conectar rapidamente novos hospitais parceiros
4. **Time-to-market acelerado**: Redução significativa no tempo de expansão

### Arquitetura Hub FHIR
\`\`\`
Hospitais Parceiros → FastComm APIs → WeCancer Platform
        ├─ Hospital A (HIS Tasy)
        ├─ Hospital B (HIS MV)
        ├─ Hospital C (HIS Philips)
        └─ Dados oncológicos padronizados FHIR
\`\`\`

### Benefícios Alcançados
- **Integração rápida**: Conexão com hospitais em semanas ao invés de meses
- **Escalabilidade**: Capacidade de adicionar novos parceiros rapidamente
- **Dados oncológicos**: Acesso padronizado a informações críticas de pacientes
- **Expansão acelerada**: Crescimento da base de hospitais parceiros

### Impacto no Mercado de Oncologia Digital
- **Time-to-market**: Redução significativa no tempo de conectar novos hospitais
- **Padrão FHIR**: Dados oncológicos estruturados e interoperáveis
- **Eficiência**: Foco no desenvolvimento da plataforma ao invés de integrações
- **Competitividade**: Vantagem na expansão vs healthtechs concorrentes

## Caso 3: Laboratório de Medicina Diagnóstica

### Contexto e Desafios
- **Especialidade**: Medicina diagnóstica de alta complexidade
- **LIMS**: Sistema laboratorial integrado com 200+ unidades
- **Desafio principal**: APIs para **healthtechs parceiras**
- **Volume**: 100M exames/ano, 5M pacientes únicos

### Implementação de APIs FHIR
\`\`\`
LIMS Interno → Engine FHIR → APIs Públicas
                   ├─ Apps médicos (50+ integrações)
                   ├─ Hospitais parceiros (120+)  
                   ├─ Operadoras (15 convênios)
                   └─ Patients portals (3M usuários)
\`\`\`

### Produtos Digitais Habilitados
1. **Fleury Mobile**: Resultados instantâneos via FHIR Observation
2. **APIs B2B**: 50+ aplicações médicas integradas
3. **Laudos Inteligentes**: IA para detecção de anomalias
4. **Telemedicina**: Consultas com resultados em tempo real

### Métricas de Sucesso
- **APIs usage**: 50M chamadas/mês com 99.7% uptime
- **Partner ecosystem**: 200+ integrações ativas
- **Revenue impact**: R$ 45M receita incremental anual
- **Customer satisfaction**: 92% NPS digital

## Caso 4: Hospital das Clínicas - Academia e Pesquisa

### Contexto Único
- **Perfil**: Hospital universitário com pesquisa clínica
- **Desafio**: **Conectar HIS RIS LIMS** para estudos multicêntricos
- **Compliance**: GCP (Good Clinical Practice) + LGPD + CFM
- **Parceiros**: 15 centros de pesquisa, 8 universidades

### Arquitetura para Pesquisa
\`\`\`
HIS/RIS/LIMS → FHIR Research Repository → Analysis Platform
                        ├─ REDCap Integration  
                        ├─ Clinical Trials DB
                        ├─ Genomic Data (HL7 v3)
                        └─ AI/ML Pipelines
\`\`\`

### Inovações Implementadas
1. **Anonymization Engine**: FHIR Patient com pseudônimos LGPD
2. **Consent Management**: Controle granular de uso de dados
3. **Multi-site Studies**: Dados padronizados entre centros
4. **Real-world Evidence**: Coortes longitudinais automáticas

### Impacto Científico
- **Estudos ativos**: 45 pesquisas multicêntricas
- **Publicações**: 23 papers em journals internacionais
- **Tempo setup**: De 6 meses para 3 semanas por estudo
- **Qualidade dados**: 95% completude vs 67% anterior

## Lições Aprendidas e Melhores Práticas

### Fatores Críticos de Sucesso
1. **Sponsorship executivo**: C-level engajado desde início
2. **Change management**: Treinamento intensivo das equipes
3. **Governança**: Comitê de dados com representação técnica/clínica  
4. **Piloto bem-sucedido**: Proof of value antes de escalar

### Armadilhas Comuns Evitadas
1. **Big Bang**: Implementação gradual por fases
2. **Vendor lock-in**: Padrões abertos (FHIR) mantêm flexibilidade
3. **Underestimating training**: 40h/pessoa em capacitação FHIR
4. **Poor data governance**: Definição clara de ownership

### ROI Patterns Observados
- **Payback period**: 12-18 meses em média
- **Revenue enablement**: 15-25% receita incremental via novos serviços
- **Cost reduction**: 30-50% economia em integrações
- **Risk reduction**: 80%+ redução de erros críticos

## Tendências e Próximos Passos

### Tecnologias Emergentes
1. **FHIR Bulk Data**: Export massivo para analytics/ML
2. **CDS Hooks**: Clinical Decision Support integrado  
3. **SMART Web Messaging**: Comunicação segura entre apps
4. **Genomics**: Integração HL7 v3 + FHIR R4

### Mercado Brasileiro 2025-2027
- **Adoção FHIR**: Previsto crescimento 300% ao ano
- **Regulamentação**: ANVISA pode tornar FHIR obrigatório
- **Investment**: R$ 2.8B investidos em healthtechs (2024)
- **Talent**: Escassez de especialistas FHIR (gap de 5000+ profissionais)

## Recomendações Executivas

### Para Hospitais e Redes
1. **Começar pequeno**: Piloto em 1-2 casos de uso críticos
2. **Partner strategy**: Escolher plataforma com ecossistema maduro
3. **Skills development**: Investir em capacitação FHIR interna
4. **Metrics definition**: KPIs claros para medir ROI

### Para Healthtechs
1. **FHIR-first**: Arquitetura nativa com APIs padronizadas  
2. **Compliance by design**: LGPD, ANVISA, ANS desde início
3. **Integration partnerships**: Alianças com plataformas estabelecidas
4. **Clinical validation**: Evidência clínica para adoção hospitalar

## Conclusão: O Futuro da Interoperabilidade no Brasil

Os casos analisados demonstram que **integração sistema hospitalar FHIR** não é mais uma tendência futura, mas uma realidade presente gerando resultados tangíveis:

- **Redução de custos**: 50-80% economia em integrações
- **Aceleração da inovação**: Time-to-market 5x mais rápido  
- **Melhoria da qualidade**: 90%+ redução de erros críticos
- **Habilitação de novos negócios**: Revenue streams baseados em dados

Para organizações que ainda não iniciaram sua jornada de **interoperabilidade hospitalar**, os casos apresentados oferecem um roadmap comprovado para transformação digital sustentável no ecossistema de saúde brasileiro.

A **plataforma interoperabilidade hospitais** se tornou peça fundamental para competir no mercado de healthtechs, onde a capacidade de **conectar sistema hospitalar** de forma rápida, segura e escalável determina o sucesso de novos produtos e serviços digitais.
    `,
    author: "Dr. Carlos Mendonça, Head of Digital Health Strategy",
    publishedAt: "2025-08-05",
    category: "casos-de-uso", 
    tags: ["casos de sucesso", "FHIR R4", "hospitais brasileiros", "ROI", "integração hospitalar"],
    readingTime: "18 min",
    icon: Stethoscope,
    slug: "casos-sucesso-integracao-hospitalar"
  }
];

export const blogSectionContent = {
  title: "Recursos",
  titleHighlight: "Técnicos",
  description: "Guias práticos, casos de sucesso e análises técnicas sobre interoperabilidade em saúde, FHIR R4 e integração de sistemas hospitalares HIS, RIS e LIMS.",
  featured: blogArticles[0],
  cta: {
    title: "Precisa de consultoria técnica em FHIR?",
    description: "Nossa equipe de especialistas oferece consultoria personalizada para implementação de interoperabilidade em sistemas de saúde.",
    buttons: {
      primary: "Falar com Especialista",
      secondary: "Ver Mais Artigos"
    }
  }
};