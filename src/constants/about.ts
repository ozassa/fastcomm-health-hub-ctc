import { Award, Users, Calendar, Globe, Target, Rocket, Shield, LucideIcon } from "lucide-react";

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: Calendar,
    title: "15+ Anos",
    description: "De experiência em sistemas críticos de saúde"
  },
  {
    icon: Users,
    title: "50+ Especialistas",
    description: "Em interoperabilidade e padrões de saúde"
  },
  {
    icon: Award,
    title: "ISO 27001",
    description: "Certificação em segurança da informação"
  },
  {
    icon: Globe,
    title: "3 Países",
    description: "Brasil, Argentina e México"
  }
];

export const companyValues: CompanyValue[] = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Priorizamos soluções que geram impacto real nos indicadores de negócio dos nossos clientes."
  },
  {
    icon: Shield,
    title: "Segurança First",
    description: "Todos os nossos produtos são projetados com segurança e compliance desde a concepção."
  },
  {
    icon: Rocket,
    title: "Inovação Contínua",
    description: "Investimos 30% do nosso faturamento em P&D para manter nossa liderança tecnológica."
  }
];

export const aboutContent = {
  header: {
    title: "Sobre a",
    titleHighlight: "CTC",
    description: "Desenvolvedora do Fastcomm, a CTC é líder brasileira em soluções de TI para saúde, governo, indústria e setor financeiro, atendendo missões críticas com alta performance."
  },
  story: {
    title: "Nossa",
    titleHighlight: "História",
    paragraphs: [
      "Fundada por especialistas em sistemas críticos, a CTC desenvolveu expertise única em padrões como FHIR, HL7 e TISS ao longo de mais de 15 anos no mercado de saúde.",
      "Atendemos desde grandes hospitais como HCOR, Oswaldo Cruz e Hospital Moinhos de Vento até startups inovadoras, sempre focados em soluções que geram impacto real.",
      "O Fastcomm representa a evolução de todo nosso conhecimento, democratizando através de uma plataforma low-code o que antes exigia meses de desenvolvimento especializado."
    ]
  },
  values: {
    title: "Nossos",
    titleHighlight: "Valores",
    description: "Princípios que guiam nossa missão de transformar a interoperabilidade na saúde."
  },
  team: {
    title: "Conheça Nossa",
    titleHighlight: "Equipe",
    description: "Especialistas certificados em FHIR, HL7 e arquiteturas de alta disponibilidade, prontos para apoiar sua jornada de transformação digital.",
    stats: {
      education: {
        title: "PhDs e Mestres",
        description: "em Engenharia de Software e Informática Médica"
      },
      certifications: {
        title: "Certificações",
        description: "FHIR, HL7, AWS, Azure e Google Cloud"
      }
    },
    buttons: {
      primary: "Conheça o Time",
      secondary: "Trabalhe Conosco"
    }
  }
};

export const companyLogos = {
  fastcomm: "/lovable-uploads/2e2b68d7-64c8-49b8-b7bd-54d6766ac7de.png",
  ctc: "CTC" // Logo initials for CTC
};