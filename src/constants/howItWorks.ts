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
    title: "Conectar Sistemas Hospitalares",
    description: "Conecte sistemas hospitalares HIS legados (Tasy, MV Soul, Philips TASY), RIS radiológicos, LIMS laboratoriais e APIs de prontuário eletrônico através de conectores pré-configurados especializados em saúde.",
    features: ["Conectores HIS/RIS/LIMS nativos", "APIs REST/SOAP para sistemas legados", "Bancos SQL/NoSQL hospitalares", "Mensagens HL7 v2/v3 em tempo real"]
  },
  {
    number: "02", 
    icon: Code,
    title: "Mapear Dados Médicos FHIR",
    description: "Configure mapeamentos de dados clínicos usando nossa interface low-code especializada em padrões de saúde. Transforme schemas proprietários de HIS em estruturas FHIR R4 padronizadas sem necessidade de programação complexa ou expertise em interoperabilidade.",
    features: ["Interface visual para mapeamento FHIR", "Drag-&-drop de recursos FHIR", "Validação automática HL7 FHIR", "Templates FHIR para HIS brasileiros"]
  },
  {
    number: "03",
    icon: Shield,
    title: "Transformar para Padrões Globais",
    description: "Nossa engine de interoperabilidade converte automaticamente dados hospitalares proprietários para padrões FHIR R4, HL7 v2/v3 ou TISS 4.0, garantindo interoperabilidade total entre sistemas hospitalares heterogêneos e aplicações de telemedicina.",
    features: ["Engine FHIR R4 certificada", "Transformação HL7 v2/v3 bidirecional", "Compliance TISS 4.0 nativo", "Validação completa contra schemas oficiais"]
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
  description: "Processo simplificado em 4 etapas para integrar qualquer sistema hospitalar (HIS, RIS, LIMS) com padrões de interoperabilidade modernos FHIR R4 e HL7 v2/v3. Metodologia comprovada para conectar sistema hospitalar FHIR com aplicações de telemedicina, healthtechs e plataformas de IA médica.",
  methodology: {
    title: "Metodologia de Integração Hospitalar",
    description: "Processo estruturado baseado em melhores práticas de interoperabilidade em saúde",
    principles: [
      "Análise prévia da arquitetura de dados hospitalares existente",
      "Mapeamento de recursos FHIR específicos por especialidade médica", 
      "Validação contínua contra especificações HL7 oficiais",
      "Testes de conformidade com sistemas HIS reais"
    ]
  },
  cta: {
    title: "Pronto para",
    titleHighlight: "Revolucionar",
    subtitle: "sua Interoperabilidade Hospitalar?",
    description: "Configure sua primeira integração HIS em menos de 30 minutos e experimente o poder da interoperabilidade moderna. Conecte sistema hospitalar FHIR com qualquer aplicação de saúde digital.",
    buttons: {
      primary: "Iniciar Teste Gratuito",
      secondary: "Agendar Demonstração Técnica"
    },
    features: "Sem compromisso • Setup gratuito • Suporte especializado em FHIR/HL7"
  }
};