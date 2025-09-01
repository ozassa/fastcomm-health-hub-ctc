import { Shield, Lock, Database } from "lucide-react";

export interface TrustIndicator {
  icon: typeof Shield | typeof Lock | typeof Database;
  text: string;
}

export const trustIndicators: TrustIndicator[] = [
  {
    icon: Shield,
    text: "Compliance FHIR R4"
  },
  {
    icon: Lock,
    text: "LGPD Compliant"
  },
  {
    icon: Database,
    text: "99.9% Uptime SLA"
  }
];

export const heroContent = {
  logo: {
    src: "/lovable-uploads/2e2b68d7-64c8-49b8-b7bd-54d6766ac7de.png",
    alt: "Fastcomm - Plataforma de Interoperabilidade em Saúde Digital"
  },
  title: {
    main: "Interoperabilidade",
    highlight: "Simplificada",
    subtitle: "para Saúde"
  },
  description: "Plataforma de integração em nuvem que conecta sistemas hospitalares HIS, RIS, LIMS e prontuários eletrônicos com suporte nativo aos padrões FHIR R4, HL7 v2/v3 e TISS 4.0. Transforme integração hospitalar complexa: reduza de 6 meses para 3 semanas o tempo de conectar sistema hospitalar FHIR com aplicações de telemedicina e healthtechs.",
  highlightedStandards: " FHIR R4, HL7 v2/v3 e TISS 4.0",
  buttons: {
    primary: "Solicitar Demonstração",
    secondary: "Ver Documentação"
  },
  integrationFlow: {
    title: "Fluxo de Integração Hospitalar",
    description: "Conecte sistemas hospitalares heterogêneos através de engine de transformação FHIR nativa",
    sources: [
      { name: "Hospitais", subtitle: "HIS/RIS (Sistema Hospitalar/Radiologia)", color: "blue" },
      { name: "Clínicas", subtitle: "Prontuários Eletrônicos PEP", color: "green" },
      { name: "Laboratórios", subtitle: "LIS/LIMS (Sistema Laboratorial)", color: "purple" }
    ],
    engine: {
      title: "Fastcomm Engine",
      subtitle: "Transformação FHIR R4 & Normalização HL7",
      capabilities: "Engine de interoperabilidade que transforma dados hospitalares legados em padrões modernos"
    },
    standards: [
      { name: "FHIR R4", color: "primary", description: "Fast Healthcare Interoperability Resources v4" },
      { name: "HL7 v2/v3", color: "green", description: "Health Level 7 Standards" },
      { name: "TISS 4.0", color: "orange", description: "Troca de Informações em Saúde Suplementar" }
    ],
    destinations: [
      { name: "Healthtechs", subtitle: "Apps Médicos/Sistemas SaaS" },
      { name: "IA/Analytics", subtitle: "Machine Learning Médico" }
    ]
  },
  glossary: {
    title: "Glossário de Interoperabilidade",
    terms: [
      { 
        term: "FHIR R4", 
        definition: "Fast Healthcare Interoperability Resources versão 4 - padrão global para troca de informações de saúde"
      },
      { 
        term: "HIS", 
        definition: "Hospital Information System - sistema de gestão hospitalar que integra dados administrativos e clínicos"
      },
      { 
        term: "RIS", 
        definition: "Radiology Information System - sistema especializado em gestão de exames de imagem e laudos radiológicos"
      },
      { 
        term: "LIMS", 
        definition: "Laboratory Information Management System - sistema para gestão de dados laboratoriais e resultados de exames"
      },
      { 
        term: "HL7", 
        definition: "Health Level 7 - conjunto de padrões internacionais para intercâmbio de dados clínicos e administrativos"
      },
      { 
        term: "TISS", 
        definition: "Troca de Informações em Saúde Suplementar - padrão brasileiro para operadoras de planos de saúde"
      }
    ]
  }
};