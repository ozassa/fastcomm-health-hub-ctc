// Export all constants for easy importing
export * from './about';
export * from './ai';
export * from './caseStudy';
export * from './contact';
export * from './features';
export * from './healthTech';
export * from './hero';
export * from './howItWorks';
export * from './painPoints';
export * from './testimonials';
export * from './trust';
export * from './useCases';

// Common types used across multiple files
export interface ButtonConfig {
  primary: string;
  secondary: string;
}

export interface TitleConfig {
  title: string;
  titleHighlight: string;
  subtitle?: string;
  description?: string;
}

// Common button text patterns
export const commonButtons = {
  requestDemo: "Solicitar Demonstração",
  viewDocumentation: "Ver Documentação",
  scheduleDemo: "Agendar Demonstração",
  freeTrail: "Iniciar Teste Gratuito",
  contactSpecialist: "Falar com Especialista",
  seeArchitecture: "Ver Arquitetura",
  calculateROI: "Calcular ROI",
  viewCaseStudies: "Ver Estudos de Caso"
};

// Common messaging
export const commonMessages = {
  fhirCompliance: "Compliance FHIR R4",
  lgpdCompliant: "LGPD Compliant",
  uptimeSLA: "99.9% Uptime SLA",
  supportResponse: "Resposta em até 4 horas",
  support247: "Suporte 24/7"
};