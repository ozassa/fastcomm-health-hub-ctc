export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "A principal necessidade era acabar com diversas bases de dados com informações desconectadas. Trabalhar para que todos os dados fossem mais íntegros e conseguisse ter maior especialização na utilização.",
    author: "Vitor Ferreira",
    position: "Gerente de TI de Negócios de Venda",
    company: "Hospital Moinhos de Vento",
    avatar: "VF",
    rating: 5
  },
  {
    quote: "O Fastcomm nos permitiu unificar mais de 50 sistemas internos com interoperabilidade eficiente. O resultado foi um atendimento médico mais ágil, com diagnósticos otimizados e redução de exames redundantes.",
    author: "Equipe Técnica",
    position: "Liderança de TI",
    company: "Hospital Moinhos de Vento",
    avatar: "MV",
    rating: 5
  },
  {
    quote: "A plataforma Fastcomm revolucionou nossa capacidade de integração com sistemas hospitalares. Como healthtech, conseguimos conectar rapidamente com diferentes HIS e acelerar nossa expansão no mercado de oncologia digital.",
    author: "Equipe de Desenvolvimento",
    position: "CTO",
    company: "WeCancer",
    avatar: "WC",
    rating: 5
  }
];

export const testimonialStats: Stat[] = [
  { value: "98%", label: "Satisfação dos clientes", sublabel: "NPS médio de 87" },
  { value: "80%", label: "Redução de tempo", sublabel: "Vs. desenvolvimento tradicional" },
  { value: "24/7", label: "Suporte técnico", sublabel: "Especialistas em FHIR/HL7" }
];

export const testimonialsContent = {
  title: "O que dizem nossos",
  titleHighlight: "Clientes",
  description: "Depoimentos de CTOs, CIOs e líderes técnicos de hospitais, healthtechs e operadoras que transformaram sua interoperabilidade hospitalar com o Fastcomm. Resultados comprovados em integração de sistemas HIS, RIS, LIMS e aplicações de telemedicina.",
  clientProfiles: {
    title: "Perfil dos Nossos Clientes",
    profiles: [
      "CTOs de hospitais de referência com sistemas HIS complexos",
      "Líderes técnicos de healthtechs que precisam conectar com hospitais",
      "CISOs de operadoras focados em compliance e auditoria TISS",
      "Arquitetos de software especializados em interoperabilidade FHIR"
    ]
  },
  cta: {
    title: "Junte-se aos",
    titleHighlight: "Líderes",
    subtitle: "em Interoperabilidade Hospitalar",
    description: "Mais de 200 organizações de saúde já confiam no Fastcomm para suas integrações críticas HIS/RIS/LIMS. Seja o próximo a transformar sua arquitetura de dados hospitalares com padrões FHIR R4 e HL7.",
    buttons: {
      primary: "Solicitar Demonstração",
      secondary: "Falar com Especialista FHIR"
    }
  }
};