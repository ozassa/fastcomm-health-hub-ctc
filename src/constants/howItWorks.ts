import { Database, Code, Shield, BarChart3, LucideIcon } from "lucide-react";

export interface HowItWorksStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    icon: Database,
    title: "Conectar",
    description: "Conecte seus sistemas legados, APIs e bancos de dados existentes através de conectores pré-configurados ou personalizados.",
    features: ["Conectores nativos", "APIs REST/SOAP", "Bancos SQL/NoSQL", "Sistemas HL7"]
  },
  {
    number: "02", 
    icon: Code,
    title: "Mapear",
    description: "Configure mapeamentos de dados usando nossa interface low-code intuitiva, sem necessidade de programação complexa.",
    features: ["Interface visual", "Mapeamento drag-&-drop", "Validação automática", "Templates prontos"]
  },
  {
    number: "03",
    icon: Shield,
    title: "Transformar",
    description: "Nossa engine converte automaticamente os dados para padrões FHIR, HL7 ou TISS, garantindo interoperabilidade total.",
    features: ["FHIR R4 nativo", "HL7 v2/v3", "TISS 4.0", "Validação completa"]
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monitorar",
    description: "Acompanhe todas as integrações em tempo real com dashboards detalhados e alertas proativos de performance.",
    features: ["Monitoramento 24/7", "Alertas em tempo real", "Métricas de performance", "Logs detalhados"]
  }
];

export const howItWorksContent = {
  title: "Como o",
  titleHighlight: "Fastcomm",
  subtitle: "Funciona",
  description: "Processo simplificado em 4 etapas para integrar qualquer sistema de saúde com padrões de interoperabilidade modernos.",
  cta: {
    title: "Pronto para",
    titleHighlight: "Revolucionar",
    subtitle: "suas Integrações?",
    description: "Configure sua primeira integração em menos de 30 minutos e experimente o poder da interoperabilidade moderna.",
    buttons: {
      primary: "🚀 Iniciar Teste Gratuito",
      secondary: "📅 Agendar Demonstração"
    },
    features: "✨ Sem compromisso • Setup gratuito • Suporte especializado"
  }
};