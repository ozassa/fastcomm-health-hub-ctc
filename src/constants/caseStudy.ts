import { Database, Clock, TrendingUp, CheckCircle, LucideIcon } from "lucide-react";

export interface CaseStudyMetric {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export const caseStudyMetrics: CaseStudyMetric[] = [
  {
    icon: Database,
    value: "50+",
    label: "Sistemas Integrados",
    description: "Unificação completa da infraestrutura hospitalar"
  },
  {
    icon: Clock,
    value: "3 semanas",
    label: "Tempo de Integração",
    description: "Redução de 6 meses para 3 semanas"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Redução de Redundâncias",
    description: "Eliminação de exames desnecessários"
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Disponibilidade",
    description: "Dados acessíveis e seguros 24/7"
  }
];

export const caseStudyContent = {
  title: "Caso de",
  titleHighlight: "Sucesso",
  subtitle: "em Interoperabilidade Hospitalar",
  description: "Hospital Moinhos de Vento transforma operação com integração completa FHIR de sistema hospitalar HIS, RIS radiológico e LIMS laboratorial",
  hospital: {
    name: "Hospital Moinhos de Vento",
    description: "Uma das instituições de saúde mais respeitadas do Brasil unificou mais de 50 sistemas internos (HIS Tasy, RIS radiológico, LIMS laboratorial) com engine de interoperabilidade Fastcomm, transformando completamente atendimento médico através de dados FHIR padronizados.",
    results: {
      title: "Resultados Alcançados:",
      items: [
        "Atendimento médico mais eficiente com diagnósticos agilizados",
        "Redução significativa de exames redundantes",
        "Ambiente de dados integrados, acessíveis e seguros",
        "Processo de integração reduzido de 6 meses para 3 semanas"
      ]
    },
    testimonial: {
      quote: "A principal necessidade era acabar com diversas fontes de dados com informações desconectadas, trabalhando para que os dados fossem mais íntegros e conseguisse ter maior assertividade na utilização médica.",
      author: "Vitor Ferreira",
      position: "Gerente de TI do Hospital Moinhos de Vento",
      avatar: "VF"
    }
  },
  metricsTitle: "Métricas de Impacto",
  cta: {
    title: "Pronto para Transformar sua Instituição?",
    description: "Junte-se a centenas de instituições que já escolheram o Fastcomm para revolucionar sua interoperabilidade em saúde.",
    buttons: {
      primary: "Solicitar Demonstração",
      secondary: "Ver Mais Cases"
    }
  }
};