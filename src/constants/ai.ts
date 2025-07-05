import { Database, TrendingUp, Shield, Zap, Brain, CheckCircle, LucideIcon } from "lucide-react";

export interface AIBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aiBenefits: AIBenefit[] = [
  {
    icon: Database,
    title: "Dados Padronizados",
    description: "Algoritmos de IA funcionam melhor com dados estruturados e consistentes"
  },
  {
    icon: TrendingUp,
    title: "Maior Acurácia",
    description: "Dados não padronizados levam a erros de análise e resultados incorretos"
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Validação automática FHIR garante integridade dos dados para IA"
  },
  {
    icon: Zap,
    title: "Insights Precisos",
    description: "IA extrai insights mais relevantes de dados bem estruturados"
  }
];

export const aiUseCases: string[] = [
  "Diagnóstico assistido por IA com histórico completo do paciente",
  "Predição de riscos com dados integrados de múltiplas fontes",
  "Otimização de tratamentos baseada em dados populacionais",
  "Detecção precoce de surtos através de análise de padrões",
  "Personalização de medicamentos com base em perfil genético integrado"
];

export const aiContent = {
  title: "Turbine sua",
  titleHighlight: "Inteligência Artificial",
  description: "O Fastcomm entrega dados padronizados para que algoritmos de IA extraiam insights mais precisos e relevantes para decisões médicas críticas.",
  benefits: {
    title: "Por que Dados Padronizados são Cruciais para IA?",
    description: "A qualidade dos dados é um fator crucial para que algoritmos de inteligência artificial possam funcionar com maior acurácia. Dados não padronizados comprometem a eficácia da IA."
  },
  useCases: {
    title: "Casos de Uso de IA Potencializados",
    description: "Com dados padronizados do Fastcomm, sua IA pode:",
    cta: {
      description: "Dados FHIR estruturados prontos para seus algoritmos",
      button: "Ver Documentação API"
    }
  },
  architecture: {
    title: "Arquitetura",
    titleHighlight: "Cloud-First",
    subtitle: "para IA",
    description: "Infraestrutura baseada em microserviços com Oracle Cloud e AWS, garantindo escalabilidade e disponibilidade para aplicações de IA mais exigentes.",
    buttons: {
      primary: "Ver Arquitetura",
      secondary: "Testar API"
    }
  }
};