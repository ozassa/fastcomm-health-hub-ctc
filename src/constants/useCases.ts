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
    description: "Integre sistemas HIS legados com soluções modernas de telemedicina e prontuário eletrônico.",
    examples: [
      "Integração HIS → Telemedicina",
      "Prontuário único centralizado", 
      "Laudos automatizados",
      "Faturamento TISS integrado"
    ],
    metrics: "Reduz em 60% o tempo de integração"
  },
  {
    icon: Smartphone,
    title: "Healthtechs e Startups",
    description: "Conecte sua aplicação a múltiplos sistemas hospitalares sem complexidade técnica.",
    examples: [
      "APIs FHIR padronizadas",
      "Onboarding automatizado",
      "Conectores plug-and-play",
      "Marketplace de integrações"
    ],
    metrics: "Time-to-market 5x mais rápido"
  },
  {
    icon: Building2,
    title: "Operadoras de Saúde",
    description: "Centralize dados de múltiplas redes credenciadas com compliance total ao padrão TISS.",
    examples: [
      "Consolidação de dados",
      "Auditoria automatizada",
      "Relatórios regulatórios",
      "Analytics preditivo"
    ],
    metrics: "Economia de 40% em auditoria"
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
    title: "IA e Analytics",
    description: "Alimente seus modelos de IA com dados estruturados e padronizados de múltiplas fontes.",
    examples: [
      "Datasets normalizados",
      "APIs de machine learning",
      "Pipelines de dados",
      "Modelos preditivos"
    ],
    metrics: "Qualidade de dados 99.5%"
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
  description: "Soluções específicas para cada segmento da cadeia de saúde digital, desde hospitais tradicionais até startups de IA médica.",
  successStories: {
    title: "Casos de",
    titleHighlight: "Sucesso",
    stats: [
      { value: "200+", label: "Organizações conectadas" },
      { value: "50M+", label: "Registros processados/mês" },
      { value: "99.9%", label: "Disponibilidade média" }
    ],
    buttons: {
      primary: "Ver Estudos de Caso",
      secondary: "Calcular ROI"
    }
  }
};