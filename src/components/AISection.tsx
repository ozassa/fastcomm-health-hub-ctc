import { Card } from "@/components/ui/card";
import { Brain, Database, TrendingUp, Shield, Zap, CheckCircle } from "lucide-react";

const AISection = () => {
  const benefits = [
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

  const useCases = [
    "Diagnóstico assistido por IA com histórico completo do paciente",
    "Predição de riscos com dados integrados de múltiplas fontes",
    "Otimização de tratamentos baseada em dados populacionais",
    "Detecção precoce de surtos através de análise de padrões",
    "Personalização de medicamentos com base em perfil genético integrado"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">
                Turbine sua <span className="text-primary">Inteligência Artificial</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O Fastcomm entrega dados padronizados para que algoritmos de IA extraiam 
              insights mais precisos e relevantes para decisões médicas críticas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Por que Dados Padronizados são Cruciais para IA?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  A qualidade dos dados é um fator crucial para que algoritmos de inteligência artificial 
                  possam funcionar com maior acurácia. Dados não padronizados comprometem a eficácia da IA.
                </p>
              </div>

              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Use Cases */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Casos de Uso de IA Potencializados
                    </h3>
                    <p className="text-muted-foreground">
                      Com dados padronizados do Fastcomm, sua IA pode:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{useCase}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-muted">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        Dados FHIR estruturados prontos para seus algoritmos
                      </p>
                      <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        Ver Documentação API
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Architecture Highlight */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
              <h3 className="text-2xl font-bold mb-4">
                Arquitetura <span className="text-accent">Cloud-First</span> para IA
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Infraestrutura baseada em microserviços com Oracle Cloud e AWS, 
                garantindo escalabilidade e disponibilidade para aplicações de IA mais exigentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Ver Arquitetura
                </button>
                <button className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Testar API
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;