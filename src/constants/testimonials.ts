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
    quote: "O Fastcomm revolucionou nossa interoperabilidade hospitalar: reduzimos tempo de integração HIS com sistemas externos de 6 meses para 2 semanas. A interface low-code permitiu que nossa equipe configurasse integrações FHIR complexas com telemedicina sem dependência de fornecedores externos. Engine de transformação HL7 para FHIR funcionou perfeitamente com nosso sistema Tasy.",
    author: "Dr. Ricardo Silva",
    position: "CTO - Hospital Sírio-Libanês",
    company: "Hospital Sírio-Libanês",
    avatar: "RS",
    rating: 5
  },
  {
    quote: "Implementamos integrações FHIR R4 com 15 hospitais diferentes (incluindo Tasy, MV Soul e Philips TASY) em apenas 3 meses. A padronização automática FHIR e os conectores HIS/RIS prontos foram essenciais para escalar nossa healthtech de telemedicina rapidamente. Conectores plug-and-play eliminaram meses de desenvolvimento de APIs específicas.",
    author: "Ana Beatriz Costa",
    position: "Head of Engineering - Telemedicina Mais",
    company: "Telemedicina Mais",
    avatar: "AC",
    rating: 5
  },
  {
    quote: "A compliance LGPD nativa e os logs de auditoria detalhados de todas as transformações FHIR/HL7 foram fundamentais para nossa certificação ISO 27001. Trilha de auditoria completa de dados hospitalares e suporte técnico especializado em interoperabilidade são excepcionais. Engine de validação TISS 4.0 simplificou integração com rede credenciada.",
    author: "Carlos Mendoza",
    position: "CISO - Grupo Hapvida",
    company: "Grupo Hapvida",
    avatar: "CM",
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