import { Rocket, Zap, Users, Globe, CheckCircle, ArrowRight, LucideIcon } from "lucide-react";

export interface HealthTechBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const healthTechChallenges: string[] = [
  "Grandes desafios na interoperabilidade de sistemas",
  "Barreira em escalar no mercado de saúde",
  "Dificuldade para integrar com instituições tradicionais",
  "Altos custos de desenvolvimento de conectores"
];

export const healthTechSolutions: string[] = [
  "Conecte-se facilmente com instituições de saúde",
  "Troca de informações padronizada e segura",
  "Plataforma robusta para diferentes sistemas",
  "Independente de padrões ou linguagens específicas"
];

export const healthTechBenefits: HealthTechBenefit[] = [
  {
    icon: Zap,
    title: "Acelere seu Time-to-Market",
    description: "Reduza meses de desenvolvimento para semanas com nossa plataforma pronta"
  },
  {
    icon: Globe,
    title: "Escale Globalmente",
    description: "Conecte-se ao ecossistema Fastcomm com centenas de instituições"
  },
  {
    icon: Users,
    title: "Foque no seu Core",
    description: "Otimize recursos da sua startup sem trocar arquitetura dos sistemas"
  }
];

export const healthTechContent = {
  title: "Ecossistema de",
  titleHighlight: "Health Techs",
  description: "Conecte-se ao ecossistema Fastcomm para se unir a centenas de instituições que escolheram nossa plataforma como barramento de integração e interoperabilidade.",
  challenges: {
    title: "Desafios das Health Techs",
    description: "Barreiras que impedem startups de crescer no mercado de saúde"
  },
  solutions: {
    title: "Soluções do Fastcomm",
    description: "Como nossa plataforma acelera o crescimento da sua startup"
  },
  ecosystem: {
    title: "Diversas Possibilidades",
    titleHighlight: "Uma Conexão",
    description: "Integre-se ao Fastcomm e você estará conectado com os mais diversos sistemas heterogêneos do mercado, reduzindo custo e tempo das suas integrações.",
    diagram: {
      startup: "Sua Startup",
      fastcomm: "Fastcomm",
      institutions: "200+ Instituições"
    }
  },
  cta: {
    title: "Acelere sua",
    titleHighlight: "HealthTech",
    subtitle: "Hoje",
    description: "Junte-se ao ecossistema que está transformando a interoperabilidade em saúde no Brasil.",
    buttons: {
      primary: "Conectar Minha Startup",
      secondary: "Ver Documentação"
    }
  }
};