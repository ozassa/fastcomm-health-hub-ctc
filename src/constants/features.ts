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
    title: "Interface Low-Code",
    description: "Configure integrações complexas através de interface visual intuitiva, sem necessidade de programação avançada.",
    benefits: ["Reduz tempo de desenvolvimento em 80%", "Interface drag-and-drop", "Templates pré-configurados"]
  },
  {
    icon: Database,
    title: "Engine FHIR Nativa",
    description: "Motor de transformação FHIR R4 integrado, com suporte completo aos recursos e perfis mais utilizados na saúde.",
    benefits: ["FHIR R4 completo", "Validação automática", "Perfis brasileiros inclusos"]
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
    title: "Conectores Prontos",
    description: "Biblioteca extensa de conectores para principais sistemas hospitalares, HIS e healthtechs do mercado.",
    benefits: ["50+ conectores nativos", "APIs REST/SOAP", "Sistemas legados"]
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
  description: "Arquitetura moderna e robusta projetada para atender as demandas mais exigentes de interoperabilidade na saúde digital.",
  cta: {
    title: "Arquitetura de",
    titleHighlight: "Classe Mundial",
    description: "Desenvolvido por especialistas em interoperabilidade com mais de 15 anos de experiência em sistemas críticos de saúde.",
    buttons: {
      primary: "Ver Arquitetura Técnica",
      secondary: "Baixar Whitepaper"
    }
  }
};