import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Hospital, Smartphone, Building2, Stethoscope, Brain, Shield } from "lucide-react";

const UseCasesSection = memo(() => {
  const useCases = [
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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Casos de <span className="text-primary">Uso</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Soluções específicas para cada segmento da cadeia de saúde digital, 
              desde hospitais tradicionais até startups de IA médica.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600/50 group">
                <div className="space-y-6">
                  
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white">
                      {useCase.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Examples */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-200">Principais aplicações:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-slate-600">
                    <div className="bg-accent/20 rounded-lg p-3 border border-accent/30">
                      <div className="text-sm font-semibold text-accent">
                        {useCase.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Stories */}
          {/* Cases de Sucesso */}
          <div className="mt-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl rounded-3xl transform scale-105"></div>
              
              <Card className="relative p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-accent/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <div className="text-center space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold text-white leading-tight">
                      Casos de <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Sucesso</span>
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">200+</div>
                      <div className="text-base text-slate-300">Organizações conectadas</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-accent">50M+</div>
                      <div className="text-base text-slate-300">Registros processados/mês</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-success">99.9%</div>
                      <div className="text-base text-slate-300">Disponibilidade média</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                    <button className="bg-gradient-to-r from-accent to-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-accent/90 hover:to-primary/90 hover:scale-110 transition-all duration-300 shadow-xl">
                      Ver Estudos de Caso
                    </button>
                    <button className="border-2 border-slate-400/50 bg-slate-700/50 text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-600/70 hover:border-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm">
                      Calcular ROI
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

UseCasesSection.displayName = 'UseCasesSection';

export default UseCasesSection;