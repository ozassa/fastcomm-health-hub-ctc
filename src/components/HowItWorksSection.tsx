import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Code, Shield, BarChart3 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Conectar",
      description: "Conecte seus sistemas legados, APIs e bancos de dados existentes através de conectores pré-configurados ou personalizados.",
      features: ["Conectores nativos", "APIs REST/SOAP", "Bancos SQL/NoSQL", "Sistemas HL7"]
    },
    {
      number: "02", 
      icon: Code,
      title: "Mapear",
      description: "Configure mapeamentos de dados usando nossa interface low-code intuitiva, sem necessidade de programação complexa.",
      features: ["Interface visual", "Mapeamento drag-&-drop", "Validação automática", "Templates prontos"]
    },
    {
      number: "03",
      icon: Shield,
      title: "Transformar",
      description: "Nossa engine converte automaticamente os dados para padrões FHIR, HL7 ou TISS, garantindo interoperabilidade total.",
      features: ["FHIR R4 nativo", "HL7 v2/v3", "TISS 4.0", "Validação completa"]
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Monitorar",
      description: "Acompanhe todas as integrações em tempo real com dashboards detalhados e alertas proativos de performance.",
      features: ["Monitoramento 24/7", "Alertas em tempo real", "Métricas de performance", "Logs detalhados"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Como o <span className="text-primary">Fastcomm</span> Funciona
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Processo simplificado em 4 etapas para integrar qualquer sistema de saúde 
              com padrões de interoperabilidade modernos.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600/50 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Step Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-accent mb-1">
                            Etapa {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-200 mb-4">Recursos:</h4>
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA - Destacado */}
          <div className="text-center mt-20">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl rounded-3xl transform scale-110"></div>
              
              <Card className="relative p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-primary/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <div className="max-w-2xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-white leading-tight">
                      Pronto para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Revolucionar</span> suas Integrações?
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Configure sua primeira integração em menos de 30 minutos e experimente o poder da interoperabilidade moderna.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl">
                      🚀 Iniciar Teste Gratuito
                    </button>
                    <button className="border-2 border-slate-400/50 bg-slate-700/50 text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-600/70 hover:border-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm">
                      📅 Agendar Demonstração
                    </button>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-600/50">
                    <p className="text-sm text-slate-400">
                      ✨ Sem compromisso • Setup gratuito • Suporte especializado
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;