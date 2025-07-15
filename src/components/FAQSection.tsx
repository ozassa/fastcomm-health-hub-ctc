import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "O que é FHIR R4 e por que é importante para minha instituição de saúde?",
    answer: "FHIR R4 (Fast Healthcare Interoperability Resources) é o padrão global para troca de dados de saúde. Ele permite que diferentes sistemas (HIS, RIS, LIMS) se comuniquem de forma padronizada, reduzindo custos de integração em até 60% e melhorando a eficiência operacional."
  },
  {
    question: "Como a Fastcomm garante a segurança e compliance com LGPD?",
    answer: "Nossa plataforma implementa criptografia end-to-end, controle de acesso baseado em roles, auditoria completa de logs e está em conformidade com LGPD, ANVISA e ANS. Todos os dados são processados em data centers certificados no Brasil."
  },
  {
    question: "Quanto tempo leva para integrar meu sistema existente?",
    answer: "Com nossa plataforma low-code, integrações que tradicionalmente levam 6-12 meses são concluídas em 4-8 semanas. Oferecemos APIs pré-construídas para os principais sistemas do mercado brasileiro."
  },
  {
    question: "Quais sistemas a Fastcomm consegue integrar?",
    answer: "Integramos HIS (Hospital Information Systems), RIS/PACS (Radiologia), LIMS (Laboratório), sistemas de prontuário eletrônico, healthtechs, APIs de telemedicina, e sistemas legados. Suportamos HL7 v2.x, FHIR R4, DICOM e padrão TISS."
  },
  {
    question: "Como funciona o suporte técnico e a manutenção?",
    answer: "Oferecemos suporte 24/7 com SLA de 99.9% de uptime. Nossa equipe técnica especializada em saúde digital fornece suporte por chat, telefone e email, além de treinamento completo para sua equipe."
  },
  {
    question: "Qual é o modelo de precificação da Fastcomm?",
    answer: "Nosso modelo é baseado no volume de transações e complexidade das integrações. Oferecemos planos flexíveis para desde clínicas pequenas até grandes redes hospitalares. Agende uma demonstração para receber uma proposta personalizada."
  },
  {
    question: "A Fastcomm funciona com sistemas legados?",
    answer: "Sim! Nossa plataforma foi desenvolvida especificamente para conectar sistemas legados com tecnologias modernas. Utilizamos conectores especializados e transformação de dados para garantir compatibilidade total."
  },
  {
    question: "Como posso medir o ROI da implementação?",
    answer: "Nossos clientes reportam redução de 40-60% nos custos de integração, diminuição de 70% no tempo de desenvolvimento, e melhoria significativa na qualidade dos dados. Fornecemos dashboards detalhados para acompanhar métricas de performance."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre integração FHIR R4 e interoperabilidade em saúde
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
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
                <div className="mt-2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};