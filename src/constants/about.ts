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
    description: "Desenvolvedora do Fastcomm, a CTC é líder brasileira em soluções de interoperabilidade para saúde digital, especializada em padrões FHIR R4, HL7 v2/v3 e TISS 4.0. Atendemos missões críticas de integração hospitalar com alta performance e compliance regulatório."
  },
  expertise: {
    title: "Expertise em",
    titleHighlight: "Interoperabilidade",
    specializations: [
      "Implementação e certificação FHIR R4 em sistemas hospitalares brasileiros",
      "Transformação bidirecional HL7 v2/v3 para integração de sistemas legados", 
      "Compliance TISS 4.0 para operadoras de planos de saúde",
      "Conectores nativos para principais HIS brasileiros (Tasy, MV Soul, Philips)",
      "APIs REST para integração de healthtechs com hospitais",
      "Arquitetura de microserviços para aplicações críticas de saúde"
    ]
  },
  story: {
    title: "Nossa",
    titleHighlight: "História",
    subtitle: "em Interoperabilidade Hospitalar",
    paragraphs: [
      "Fundada por especialistas em sistemas críticos hospitalares, a CTC desenvolveu expertise única em padrões de interoperabilidade como FHIR R4, HL7 v2/v3 e TISS ao longo de mais de 15 anos integrando sistemas de saúde complexos no Brasil.",
      "Atendemos desde grandes hospitais de referência como HCOR, Oswaldo Cruz e Hospital Moinhos de Vento até healthtechs inovadoras, sempre focados em soluções de interoperabilidade que geram impacto real na qualidade do atendimento.",
      "O Fastcomm representa a evolução de todo nosso conhecimento em integração hospitalar, democratizando através de uma plataforma low-code especializada em saúde o que antes exigia meses de desenvolvimento especializado em padrões FHIR e HL7."
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
    subtitle: "de Especialistas em Interoperabilidade",
    description: "Time de especialistas certificados em FHIR R4, HL7 v2/v3, TISS 4.0 e arquiteturas de alta disponibilidade para sistemas críticos hospitalares. Expertise comprovada em conectar sistemas HIS, RIS, LIMS com aplicações modernas de telemedicina e healthtechs.",
    technicalExpertise: {
      title: "Expertise Técnica da Equipe",
      areas: [
        "Certificações oficiais HL7 FHIR e participação ativa na comunidade brasileira",
        "Especialistas em sistemas HIS brasileiros (Tasy, MV Soul, Philips TASY)",
        "Arquitetos de soluções com experiência em PACS/RIS radiológicos",
        "Desenvolvedores especializados em APIs REST para integração hospitalar",
        "Consultores em compliance LGPD e auditoria TISS para operadoras"
      ]
    },
    stats: {
      education: {
        title: "PhDs e Mestres",
        description: "em Engenharia de Software, Informática Médica e Interoperabilidade"
      },
      certifications: {
        title: "Certificações Técnicas",
        description: "FHIR R4, HL7 v2/v3, TISS 4.0, AWS, Azure, Oracle Cloud"
      }
    },
    buttons: {
      primary: "Conheça o Time Técnico",
      secondary: "Trabalhe com Interoperabilidade"
    }
  }
};

export const companyLogos = {
  fastcomm: "/lovable-uploads/2e2b68d7-64c8-49b8-b7bd-54d6766ac7de.png",
  ctc: "CTC" // Logo initials for CTC
};