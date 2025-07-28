import { AlertCircle, TrendingDown, Users, Clock, LucideIcon } from "lucide-react";

export interface PainPoint {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
  source: string;
}

export const painPoints: PainPoint[] = [
  {
    icon: Clock,
    stat: "60%",
    title: "Tempo Perdido",
    description: "do tempo dos profissionais da assistência são dedicados a preencher sistemas e realizar trabalho burocrático",
    source: "Medscape Physician Burnout Report 2022"
  },
  {
    icon: AlertCircle,
    stat: "36%",
    title: "Decisões Prejudicadas",
    description: "dos médicos atribuem o 'overtreat' à falta de informações ou histórico do paciente",
    source: "PLOS ONE Study 2017"
  },
  {
    icon: TrendingDown,
    stat: "47%",
    title: "Fragmentação",
    description: "dos desafios de interoperabilidade são causados pela fragmentação dos sistemas de dados existentes",
    source: "Observatório ANAHP 2022"
  },
  {
    icon: Users,
    stat: "6 meses",
    title: "Tempo de Integração",
    description: "é o tempo médio para integrar sistemas de saúde usando métodos tradicionais - enquanto pacientes aguardam",
    source: "Análise CTC Healthcare"
  }
];

export const painPointsContent = {
  title: "O",
  titleHighlight: "Problema",
  subtitle: "é Real",
  description: "A fragmentação de dados na saúde cria barreiras que impactam diretamente o atendimento aos pacientes e a eficiência operacional das instituições.",
  solution: {
    title: "Fastcomm",
    titleHighlight: "é a Solução",
    description: "Transforme dados desconectados em um ecossistema integrado que acelera decisões médicas e melhora resultados de saúde.",
    buttons: {
      primary: "Ver Como Funciona",
      secondary: "Casos de Sucesso"
    }
  }
};