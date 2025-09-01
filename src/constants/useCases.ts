import { Hospital, Smartphone, Building2, Stethoscope, Brain, Shield, LucideIcon } from "lucide-react";

export interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
  metrics: string;
}

export const useCases: UseCase[] = [
  {
    icon: Hospital,
    title: "Hospitais e Clínicas",
    description: "Integre sistemas hospitalares HIS legados (Tasy, MV Soul, Philips TASY) com soluções modernas de telemedicina e prontuário eletrônico PEP. Transforme dados hospitalares fragmentados em ecossistema integrado através de padrões FHIR R4 e HL7 v2/v3.",
    examples: [
      "Integração HIS → Plataforma telemedicina FHIR",
      "Prontuário eletrônico único centralizado", 
      "Laudos radiológicos automatizados via RIS",
      "Faturamento TISS integrado com operadoras",
      "Conectar sistema hospitalar com apps móveis"
    ],
    metrics: "Reduz em 60% o tempo de integração hospitalar"
  },
  {
    icon: Smartphone,
    title: "Healthtechs e Startups de Saúde Digital",
    description: "Conecte sua aplicação de telemedicina ou healthtech a múltiplos sistemas hospitalares sem complexidade técnica. Acesse dados FHIR padronizados de hospitais através de APIs REST modernas, eliminando a necessidade de desenvolver conectores específicos para cada HIS.",
    examples: [
      "APIs FHIR R4 padronizadas para healthtechs",
      "Onboarding automatizado em hospitais",
      "Conectores plug-and-play para HIS/RIS",
      "Marketplace de integrações FHIR",
      "SDK para desenvolvimento de apps médicos"
    ],
    metrics: "Time-to-market 5x mais rápido para healthtechs"
  },
  {
    icon: Building2,
    title: "Operadoras de Saúde e Planos Médicos",
    description: "Centralize dados de múltiplas redes credenciadas com compliance total ao padrão TISS 4.0. Integre automaticamente dados de hospitais, clínicas e laboratórios credenciados através de transformação FHIR para TISS, eliminando processos manuais de auditoria.",
    examples: [
      "Consolidação automática de dados TISS",
      "Auditoria automatizada de glosas",
      "Relatórios regulatórios ANS",
      "Analytics preditivo de custos assistenciais",
      "Monitoramento de utilização em tempo real"
    ],
    metrics: "Economia de 40% em processos de auditoria médica"
  },
  {
    icon: Stethoscope,
    title: "Telemedicina",
    description: "Acesse dados clínicos de qualquer sistema hospitalar através de APIs padronizadas.",
    examples: [
      "Acesso a histórico clínico",
      "Integração com wearables",
      "Prescrição eletrônica",
      "Monitoramento remoto"
    ],
    metrics: "Cobertura de 95% dos sistemas"
  },
  {
    icon: Brain,
    title: "IA em Saúde e Machine Learning Médico",
    description: "Alimente algoritmos de inteligência artificial médica com dados FHIR estruturados e padronizados de múltiplas fontes hospitalares. Datasets prontos para machine learning com dados de pacientes, diagnósticos, exames e tratamentos normalizados.",
    examples: [
      "Datasets FHIR normalizados para IA médica",
      "APIs REST para machine learning clínico",
      "Pipelines de dados para análise preditiva",
      "Modelos de diagnóstico assistido por IA",
      "Analytics populacionais de saúde"
    ],
    metrics: "Qualidade de dados 99.5% para IA médica"
  },
  {
    icon: Shield,
    title: "Compliance e Auditoria",
    description: "Garanta conformidade regulatória com rastreabilidade completa e logs auditáveis.",
    examples: [
      "Trilha de auditoria completa",
      "Relatórios ANVISA/ANS",
      "Controle de acesso granular",
      "Backup e recuperação"
    ],
    metrics: "100% compliance regulatório"
  }
];

export const useCasesContent = {
  title: "Casos de",
  titleHighlight: "Uso",
  description: "Soluções específicas para cada segmento da cadeia de saúde digital: desde hospitais tradicionais com sistemas HIS legados até startups de IA médica que precisam acessar dados FHIR estruturados. Nossa plataforma interoperabilidade hospitais conecta todo o ecossistema de saúde.",
  industrySegments: {
    title: "Segmentos Atendidos",
    description: "Especialistas em conectar diferentes tipos de organizações de saúde",
    segments: [
      "Hospitais com sistemas HIS/RIS legados",
      "Clínicas médicas e ambulatoriais",
      "Laboratórios de análises clínicas",
      "Healthtechs e startups de saúde digital", 
      "Operadoras de planos de saúde",
      "Empresas de telemedicina",
      "Plataformas de IA médica e machine learning"
    ]
  },
  successStories: {
    title: "Casos de",
    titleHighlight: "Sucesso",
    description: "Resultados comprovados em interoperabilidade hospitalar e integração de sistemas de saúde",
    stats: [
      { value: "200+", label: "Organizações de saúde conectadas" },
      { value: "50M+", label: "Registros FHIR processados/mês" },
      { value: "99.9%", label: "Disponibilidade SLA sistemas críticos" }
    ],
    buttons: {
      primary: "Ver Estudos de Caso",
      secondary: "Calcular ROI Interoperabilidade"
    }
  }
};