import { Mail, Phone, MapPin, Clock, LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "E-mail",
    value: "faleconosco@ctctech.com.br",
    description: "Resposta em até 4 horas"
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "Entre em contato via formulário",
    description: "Retornamos sua ligação"
  },
  {
    icon: MapPin,
    title: "Matriz",
    value: "São Paulo, SP",
    description: "Centro Empresarial"
  },
  {
    icon: Clock,
    title: "Atendimento",
    value: "24/7",
    description: "Suporte especializado"
  }
];

export const contactBenefits: string[] = [
  "Demonstração personalizada da plataforma",
  "Análise gratuita da sua arquitetura atual",
  "Roadmap de implementação detalhado",
  "Estimativa de ROI e economia de custos",
  "Acesso a case studies relevantes"
];

export const roleOptions: FormOption[] = [
  { value: "cto", label: "CTO" },
  { value: "cio", label: "CIO" },
  { value: "tech-lead", label: "Tech Lead" },
  { value: "architect", label: "Arquiteto de Software" },
  { value: "director", label: "Diretor de TI" },
  { value: "manager", label: "Gerente de TI" },
  { value: "developer", label: "Desenvolvedor" },
  { value: "other", label: "Outro" }
];

export const interestOptions: FormOption[] = [
  { value: "fhir", label: "Integrações FHIR" },
  { value: "hl7", label: "Conectividade HL7" },
  { value: "tiss", label: "Padrão TISS" },
  { value: "legacy", label: "Modernização de sistemas legados" },
  { value: "healthtech", label: "Conexão com healthtechs" },
  { value: "analytics", label: "Analytics e BI" },
  { value: "compliance", label: "Compliance e segurança" },
  { value: "all", label: "Solução completa" }
];

export const contactContent = {
  title: "Pronto para",
  titleHighlight: "Transformar",
  subtitle: "suas Integrações?",
  description: "Agende uma demonstração personalizada e descubra como o Fastcomm pode acelerar suas integrações de saúde.",
  form: {
    title: "Solicitar Demonstração",
    description: "Preencha o formulário e nossa equipe técnica entrará em contato.",
    submitButton: "Solicitar Demonstração",
    submittingText: "Enviando..."
  },
  benefitsSection: {
    title: "O que você receberá:"
  },
  urgencySection: {
    title: "Resposta Garantida",
    description: "Nossa equipe técnica responde todas as solicitações em até",
    highlightText: "4 horas úteis"
  }
};

export const formLabels = {
  name: "Nome completo",
  email: "E-mail corporativo",
  company: "Empresa",
  role: "Cargo",
  interest: "Área de interesse",
  message: "Desafio ou necessidade específica"
};

export const formPlaceholders = {
  name: "Seu nome",
  email: "email@empresa.com",
  company: "Nome da empresa",
  role: "Selecione seu cargo",
  interest: "O que mais te interessa?",
  message: "Descreva brevemente seu desafio atual com integrações..."
};