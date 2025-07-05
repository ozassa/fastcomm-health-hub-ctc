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
    alt: "Fastcomm Logo"
  },
  title: {
    main: "Interoperabilidade",
    highlight: "Simplificada",
    subtitle: "para Saúde"
  },
  description: "Plataforma de integração em nuvem que conecta todo o ecossistema de saúde com suporte nativo aos padrões FHIR, HL7 e TISS. Reduza de 6 meses para 3 semanas o tempo de integração.",
  highlightedStandards: " FHIR, HL7 e TISS",
  buttons: {
    primary: "Solicitar Demonstração",
    secondary: "Ver Documentação"
  },
  integrationFlow: {
    title: "Fluxo de Integração",
    sources: [
      { name: "Hospitais", subtitle: "HIS/RIS", color: "blue" },
      { name: "Clínicas", subtitle: "Prontuários", color: "green" },
      { name: "Laboratórios", subtitle: "LIS/LIMS", color: "purple" }
    ],
    engine: {
      title: "Fastcomm Engine",
      subtitle: "Transformação & Normalização"
    },
    standards: [
      { name: "FHIR R4", color: "primary" },
      { name: "HL7 v2/v3", color: "green" },
      { name: "TISS 4.0", color: "orange" }
    ],
    destinations: [
      { name: "Healthtechs", subtitle: "Apps/Sistemas" },
      { name: "IA/Analytics", subtitle: "Algoritmos" }
    ]
  }
};