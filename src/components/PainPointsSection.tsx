import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Users, Clock } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
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

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              O <span className="text-destructive">Problema</span> é Real
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A fragmentação de dados na saúde cria barreiras que impactam diretamente 
              o atendimento aos pacientes e a eficiência operacional das instituições.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-destructive/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="text-3xl font-bold text-destructive">
                      {point.stat}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {point.description}
                    </p>
                    <p className="text-xs text-muted-foreground/70 italic">
                      Fonte: {point.source}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Solution Transition */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">Fastcomm</span> é a Solução
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Transforme dados desconectados em um ecossistema integrado que acelera decisões médicas 
                e melhora resultados de saúde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Ver Como Funciona
                </button>
                <button className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Casos de Sucesso
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;