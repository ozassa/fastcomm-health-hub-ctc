import { Card } from "@/components/ui/card";
import { Hospital, Smartphone, Building2, Stethoscope, Brain, Shield } from "lucide-react";

const UseCasesSection = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Casos de <span className="text-primary">Uso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções específicas para cada segmento da cadeia de saúde digital, 
              desde hospitais tradicionais até startups de IA médica.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-primary/5 group">
                <div className="space-y-6">
                  
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {useCase.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Examples */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Principais aplicações:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-border">
                    <div className="bg-accent/10 rounded-lg p-3">
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
          <div className="mt-16">
            <Card className="p-10 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold">
                  Casos de <span className="text-accent">Sucesso</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Organizações conectadas</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent">50M+</div>
                    <div className="text-sm text-muted-foreground">Registros processados/mês</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-success">99.9%</div>
                    <div className="text-sm text-muted-foreground">Disponibilidade média</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
                    Ver Estudos de Caso
                  </button>
                  <button className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-muted hover:text-foreground transition-colors">
                    Calcular ROI
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;