import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { scrollToContact } from "@/utils/scroll";

const faqData = [
  {
    question: "O que é FHIR R4 e por que é importante para minha instituição de saúde?",
    answer: "FHIR R4 (Fast Healthcare Interoperability Resources) é o padrão global para troca de dados de saúde desenvolvido pelo HL7. Ele permite que diferentes sistemas (HIS, RIS, LIMS) se comuniquem de forma padronizada, reduzindo custos de integração em até 60% e melhorando a eficiência operacional. Para hospitais e clínicas, isso significa menos tempo gasto em integrações manuais e mais foco no atendimento ao paciente."
  },
  {
    question: "Como a Fastcomm garante a segurança e compliance com LGPD?",
    answer: "Nossa plataforma implementa criptografia end-to-end AES-256, controle de acesso baseado em roles (RBAC), auditoria completa de logs com rastreabilidade total e está em conformidade com LGPD, ANVISA e ANS. Todos os dados são processados em data centers certificados no Brasil com ISO 27001. Realizamos auditorias trimestrais e testes de penetração para garantir máxima segurança."
  },
  {
    question: "Quanto tempo leva para integrar meu sistema existente com a Fastcomm?",
    answer: "Com nossa plataforma low-code e APIs pré-construídas, integrações que tradicionalmente levam 6-12 meses são concluídas em 4-8 semanas. Oferecemos conectores nativos para os principais sistemas do mercado brasileiro como Philips Tasy, MV, Wareline, e sistemas legados. O tempo varia conforme a complexidade, mas nossa metodologia ágil acelera significativamente o processo."
  },
  {
    question: "Quais sistemas de saúde a Fastcomm consegue integrar?",
    answer: "Integramos HIS (Hospital Information Systems), RIS/PACS (Radiologia), LIMS (Laboratório), sistemas de prontuário eletrônico (PEP), healthtechs, APIs de telemedicina, sistemas de gestão hospitalar e sistemas legados. Suportamos protocolos HL7 v2.x, FHIR R4, DICOM, padrão TISS da ANS, e formatos proprietários. Nossa plataforma é agnóstica de fornecedor."
  },
  {
    question: "Como funciona o suporte técnico e a manutenção da plataforma?",
    answer: "Oferecemos suporte 24/7 com SLA de 99.9% de uptime garantido em contrato. Nossa equipe técnica especializada em saúde digital fornece suporte por chat, telefone, email e videoconferência. Incluímos treinamento completo para sua equipe, documentação técnica detalhada, e monitoramento proativo dos sistemas integrados."
  },
  {
    question: "Qual é o modelo de precificação da Fastcomm?",
    answer: "Nosso modelo é baseado no volume de transações mensais e complexidade das integrações. Oferecemos planos flexíveis desde clínicas pequenas (a partir de R$ 2.500/mês) até grandes redes hospitalares (planos enterprise personalizados). Incluímos setup inicial, treinamento e suporte sem custos adicionais. Agende uma demonstração para receber uma proposta personalizada."
  },
  {
    question: "A Fastcomm funciona com sistemas legados e antigos?",
    answer: "Sim! Nossa plataforma foi desenvolvida especificamente para conectar sistemas legados com tecnologias modernas. Utilizamos conectores especializados, transformação de dados ETL, e APIs de bridge para garantir compatibilidade total. Já integramos sistemas de mainframe, AS/400, e bases de dados antigas sem necessidade de substituição."
  },
  {
    question: "Como posso medir o ROI da implementação da Fastcomm?",
    answer: "Nossos clientes reportam redução de 40-60% nos custos de integração, diminuição de 70% no tempo de desenvolvimento, redução de 80% em erros de dados, e melhoria significativa na qualidade dos dados. Fornecemos dashboards detalhados para acompanhar métricas de performance, volume de transações, tempo de resposta, e análise de custos vs benefícios."
  },
  {
    question: "Como a Fastcomm facilita a interoperabilidade entre diferentes healthtechs?",
    answer: "Nossa plataforma atua como um hub central que conecta diferentes healthtechs através de APIs padronizadas FHIR R4. Isso permite que startups de saúde se integrem rapidamente com sistemas hospitalares, laboratórios e clínicas sem desenvolver integrações customizadas para cada cliente. Reduzimos o time-to-market de healthtechs em 60%."
  },
  {
    question: "Que tipo de dados de saúde posso integrar com a Fastcomm?",
    answer: "Suportamos todos os tipos de dados de saúde: dados demográficos de pacientes, resultados de exames laboratoriais, imagens médicas (DICOM), prontuários eletrônicos, dados de monitoramento, informações de faturamento (TISS), dados de telemedicina, e IoT de dispositivos médicos. Todos os dados são tratados conforme padrões internacionais de saúde."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes sobre FHIR R4 e Interoperabilidade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre integração FHIR R4, compliance LGPD, e como conectar sistemas de saúde de forma eficiente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4" itemScope itemType="https://schema.org/Question">
              <button
                className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm" itemScope itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            aria-label="Entrar em contato através do formulário"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};