/**
 * Configuração do Calendly para agendamento de demonstrações
 * 
 * Para configurar:
 * 1. Crie uma conta no Calendly (https://calendly.com)
 * 2. Configure um tipo de evento para "Demonstração Fastcomm"
 * 3. Substitua a URL abaixo pela sua URL personalizada do Calendly
 * 
 * Exemplo de URL: https://calendly.com/seu-usuario/demonstracao-fastcomm
 */

// IMPORTANTE: Substitua pela sua URL real do Calendly
export const CALENDLY_URL = "https://calendly.com/seu-usuario/demonstracao-fastcomm";

/**
 * Abre o Calendly em uma nova aba
 */
export const openCalendly = (onComplete?: () => void) => {
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  if (onComplete) {
    onComplete();
  }
};

/**
 * Configurações recomendadas para o evento do Calendly:
 * 
 * - Nome do evento: "Demonstração Fastcomm - Interoperabilidade em Saúde"
 * - Duração: 30-45 minutos
 * - Descrição: "Demonstração personalizada da plataforma Fastcomm para integração FHIR, HL7 e TISS"
 * - Perguntas personalizadas:
 *   - Nome da empresa
 *   - Cargo/função
 *   - Principais desafios de interoperabilidade
 *   - Sistemas atuais utilizados
 *   - Tamanho da organização
 */