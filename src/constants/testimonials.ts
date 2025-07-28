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
    quote: "O Fastcomm reduziu nosso tempo de integração com sistemas externos de 6 meses para 2 semanas. A interface low-code permitiu que nossa equipe de TI configurasse integrações complexas sem dependência de fornecedores externos.",
    author: "Dr. Ricardo Silva",
    position: "CTO - Hospital Sírio-Libanês",
    company: "Hospital Sírio-Libanês",
    avatar: "RS",
    rating: 5
  },
  {
    quote: "Implementamos integrações FHIR com 15 hospitais diferentes em apenas 3 meses. A padronização automática e os conectores prontos foram essenciais para escalar nossa plataforma de telemedicina rapidamente.",
    author: "Ana Beatriz Costa",
    position: "Head of Engineering - Telemedicina Mais",
    company: "Telemedicina Mais",
    avatar: "AC",
    rating: 5
  },
  {
    quote: "A compliance LGPD nativa e os logs de auditoria detalhados foram fundamentais para nossa certificação ISO 27001. O suporte técnico é excepcional e sempre disponível quando precisamos.",
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
  description: "Depoimentos de CTOs, CIOs e líderes técnicos que transformaram suas integrações com o Fastcomm.",
  cta: {
    title: "Junte-se aos",
    titleHighlight: "Líderes",
    subtitle: "de Mercado",
    description: "Mais de 200 organizações já confiam no Fastcomm para suas integrações críticas. Seja o próximo a transformar sua arquitetura de dados.",
    buttons: {
      primary: "Solicitar Demonstração",
      secondary: "Falar com Especialista"
    }
  }
};