import { Code, Database, Shield, Zap, Users, BarChart3, LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export const features: Feature[] = [
  {
    icon: Code,
    title: "Interface Low-Code para Integração Hospitalar",
    description: "Configure integrações complexas entre sistemas hospitalares HIS, RIS, LIMS através de interface visual intuitiva. Conecte sistema hospitalar FHIR sem necessidade de programação avançada ou conhecimento profundo em padrões de interoperabilidade em saúde.",
    benefits: ["Reduz tempo de desenvolvimento em 80%", "Interface drag-and-drop para mapeamento FHIR", "Templates pré-configurados para HIS/RIS/LIMS", "Validação automática de conformidade FHIR R4"]
  },
  {
    icon: Database,
    title: "Engine FHIR R4 Nativa para Interoperabilidade",
    description: "Motor de transformação FHIR R4 integrado com suporte completo aos recursos Patient, Observation, DiagnosticReport e perfis brasileiros. Engine de interoperabilidade especializada em conectar HIS RIS LIMS com aplicações modernas de telemedicina e prontuário eletrônico.",
    benefits: ["FHIR R4 completo com perfis brasileiros", "Validação automática contra especificação HL7", "Suporte a recursos FHIR essenciais", "Transformação bidirecional HL7 ↔ FHIR"]
  },
  {
    icon: Shield,
    title: "Segurança Enterprise",
    description: "Criptografia end-to-end, compliance LGPD e auditoria completa de todas as transações de dados.",
    benefits: ["Criptografia AES-256", "Logs de auditoria", "Compliance LGPD nativo"]
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Processamento paralelo de alta performance com capacidade de escalar para milhões de registros por dia.",
    benefits: ["Latência < 100ms", "Auto-scaling", "SLA 99.9% uptime"]
  },
  {
    icon: Users,
    title: "Conectores HIS/RIS/LIMS Prontos",
    description: "Biblioteca extensa de conectores para principais sistemas hospitalares brasileiros: Tasy, MV Soul, Philips TASY, Agfa HealthCare, sistemas HIS legados e soluções LIMS laboratoriais. Conecte sistema hospitalar com healthtechs em minutos.",
    benefits: ["50+ conectores nativos para HIS brasileiros", "APIs REST/SOAP para sistemas legados", "Conectores LIMS especializados", "Integração com PACS e RIS radiológicos"]
  },
  {
    icon: BarChart3,
    title: "Analytics Integrado",
    description: "Dashboards em tempo real com métricas de performance, qualidade de dados e monitoramento proativo.",
    benefits: ["Dashboards personalizáveis", "Alertas inteligentes", "Relatórios automatizados"]
  }
];

export const featuresSectionContent = {
  title: "Benefícios",
  titleHighlight: "Técnicos",
  description: "Arquitetura moderna e robusta projetada para atender as demandas mais exigentes de interoperabilidade na saúde digital. Plataforma especializada em conectar sistemas hospitalares heterogêneos através de padrões FHIR R4, HL7 v2/v3 e TISS 4.0.",
  technicalOverview: {
    title: "Especificações Técnicas de Interoperabilidade",
    capabilities: [
      "Suporte completo ao padrão FHIR R4 com todos os recursos essenciais",
      "Transformação bidirecional HL7 v2 ↔ FHIR para sistemas legados",
      "Engine de validação TISS 4.0 para operadoras de saúde",
      "Conectores nativos para HIS brasileiros (Tasy, MV Soul, Philips)",
      "API REST para integração com aplicações de telemedicina",
      "Suporte a PACS/RIS para sistemas de imagem médica"
    ]
  },
  cta: {
    title: "Arquitetura de",
    titleHighlight: "Classe Mundial",
    subtitle: "para Interoperabilidade Hospitalar",
    description: "Desenvolvido por especialistas em interoperabilidade FHIR com mais de 15 anos de experiência em sistemas críticos de saúde. Nossa engine de transformação é certificada pelos principais órgãos reguladores e utilizada por hospitais de referência no Brasil.",
    buttons: {
      primary: "Ver Arquitetura Técnica",
      secondary: "Baixar Whitepaper FHIR"
    }
  }
};