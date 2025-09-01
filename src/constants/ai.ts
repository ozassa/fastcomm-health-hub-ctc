import { Database, TrendingUp, Shield, Zap, Brain, CheckCircle, LucideIcon } from "lucide-react";

export interface AIBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aiBenefits: AIBenefit[] = [
  {
    icon: Database,
    title: "Dados FHIR Estruturados para IA Médica",
    description: "Algoritmos de inteligência artificial médica alcançam maior acurácia com dados FHIR estruturados e consistentes. Datasets padronizados eliminam bias de dados e melhoram performance de modelos de machine learning clínico."
  },
  {
    icon: TrendingUp,
    title: "Acurácia Superior em Diagnóstico Assistido por IA",
    description: "Dados hospitalares não padronizados levam a erros críticos em análise preditiva e resultados incorretos em diagnóstico assistido por IA. Padronização FHIR elimina inconsistências que comprometem modelos de machine learning médico."
  },
  {
    icon: Shield,
    title: "Qualidade de Dados Garantida para Machine Learning",
    description: "Validação automática FHIR R4 garante integridade e conformidade dos dados clínicos para algoritmos de IA médica. Schema validation elimina dados corrompidos que comprometem treinamento de modelos preditivos."
  },
  {
    icon: Zap,
    title: "Insights Médicos Precisos e Acionáveis",
    description: "Algoritmos de IA médica extraem insights clínicos mais relevantes e acionáveis de dados FHIR bem estruturados. Analytics preditivo em saúde alcança maior precisão com datasets normalizados via interoperabilidade padronizada."
  }
];

export const aiUseCases: string[] = [
  "Diagnóstico assistido por IA com histórico médico completo do paciente via FHIR",
  "Predição de riscos cardiovasculares com dados integrados de múltiplos sistemas HIS",
  "Otimização de protocolos de tratamento baseada em dados populacionais FHIR",
  "Detecção precoce de surtos epidemiológicos através de análise de padrões clínicos",
  "Personalização de terapias medicamentosas com base em perfil genômico integrado",
  "Machine learning para otimização de fluxos hospitalares baseado em dados operacionais",
  "IA para análise preditiva de readmissões hospitalares via dados FHIR estruturados",
  "Algoritmos de apoio à decisão clínica com acesso a dados laboratoriais LIMS integrados"
];

export const aiContent = {
  title: "Turbine sua",
  titleHighlight: "Inteligência Artificial Médica",
  description: "O Fastcomm entrega dados hospitalares FHIR padronizados para que algoritmos de IA médica extraiam insights mais precisos e relevantes para decisões clínicas críticas. Datasets estruturados para machine learning em saúde com qualidade garantida para aplicações de diagnóstico assistido por IA.",
  benefits: {
    title: "Por que Dados FHIR Padronizados são Cruciais para IA Médica?",
    description: "A qualidade e padronização dos dados clínicos é fator determinante para que algoritmos de inteligência artificial médica alcancem acurácia clínica adequada. Dados hospitalares não padronizados comprometem severely a eficácia de modelos de machine learning em saúde, resultando em diagnósticos incorretos e decisões clínicas prejudicadas.",
    technicalRequirements: {
      title: "Requisitos Técnicos para IA Médica",
      requirements: [
        "Conformidade total com padrões FHIR R4 para interoperabilidade",
        "Validação contínua contra schemas HL7 oficiais", 
        "Normalização de terminologias médicas (SNOMED CT, ICD-10)",
        "Datasets balanceados para treinamento não enviesado",
        "APIs REST otimizadas para consumo de modelos ML"
      ]
    }
  },
  useCases: {
    title: "Casos de Uso de IA Médica Potencializados",
    description: "Com dados FHIR estruturados do Fastcomm, seus algoritmos de IA médica podem:",
    cta: {
      description: "Dados FHIR estruturados prontos para algoritmos de machine learning médico",
      button: "Ver Documentação API FHIR"
    }
  },
  architecture: {
    title: "Arquitetura",
    titleHighlight: "Cloud-First",
    subtitle: "para IA Médica",
    description: "Infraestrutura baseada em microserviços com Oracle Cloud e AWS, garantindo escalabilidade, disponibilidade e compliance LGPD para aplicações de IA médica mais exigentes. Pipeline de dados otimizado para machine learning em saúde com processamento em tempo real de dados FHIR.",
    buttons: {
      primary: "Ver Arquitetura para IA",
      secondary: "Testar API FHIR"
    }
  }
};