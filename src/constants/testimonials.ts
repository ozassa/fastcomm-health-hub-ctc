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
    quote: "A plataforma Fastcomm nos permitiu acelerar significativamente nossos processos de integração de sistemas. A redução no tempo de desenvolvimento foi notável e nossa equipe conseguiu implementar as soluções com muito mais agilidade.",
    author: "Equipe Técnica",
    position: "Liderança de TI",
    company: "Hospital Partner",
    avatar: "HP",
    rating: 5
  },
  {
    quote: "O suporte técnico especializado e a facilidade de implementação da plataforma FHIR superaram nossas expectativas. Conseguimos conectar diferentes sistemas de forma muito mais eficiente.",
    author: "Equipe de Desenvolvimento",
    position: "Arquitetura de Sistemas",
    company: "Healthtech Partner",
    avatar: "HT",
    rating: 5
  },
  {
    quote: "A compliance e os recursos de auditoria da plataforma foram essenciais para atender nossos requisitos de segurança. A solução trouxe mais confiabilidade aos nossos processos de integração.",
    author: "Equipe de Compliance",
    position: "Segurança da Informação",
    company: "Organização de Saúde",
    avatar: "OS",
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