import { Card } from "@/components/ui/card";
import { Rocket, Zap, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";

const HealthTechSection = () => {
  const challenges = [
    "Grandes desafios na interoperabilidade de sistemas",
    "Barreira em escalar no mercado de saúde",
    "Dificuldade para integrar com instituições tradicionais",
    "Altos custos de desenvolvimento de conectores"
  ];

  const solutions = [
    "Conecte-se facilmente com instituições de saúde",
    "Troca de informações padronizada e segura",
    "Plataforma robusta para diferentes sistemas",
    "Independente de padrões ou linguagens específicas"
  ];

  const benefits = [
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

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-accent" />
              <h2 className="text-4xl font-bold">
                Ecossistema de <span className="text-accent">Health Techs</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conecte-se ao ecossistema Fastcomm para se unir a centenas de instituições 
              que escolheram nossa plataforma como barramento de integração e interoperabilidade.
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Challenges */}
            <Card className="p-8 bg-gradient-to-br from-destructive/5 to-muted/30 border-l-4 border-l-destructive/50">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Desafios das Health Techs
                  </h3>
                  <p className="text-muted-foreground">
                    Barreiras que impedem startups de crescer no mercado de saúde
                  </p>
                </div>
                
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Solutions */}
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-success/5 border-l-4 border-l-accent">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Soluções do Fastcomm
                  </h3>
                  <p className="text-muted-foreground">
                    Como nossa plataforma acelera o crescimento da sua startup
                  </p>
                </div>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-accent/5">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Ecosystem Visual */}
          <div className="text-center mb-16">
            <Card className="p-12 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="text-accent">Diversas Possibilidades</span>, Uma Conexão
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Integre-se ao Fastcomm e você estará conectado com os mais diversos 
                    sistemas heterogêneos do mercado, reduzindo custo e tempo das suas integrações.
                  </p>
                </div>

                {/* Connection Diagram */}
                <div className="flex items-center justify-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-sm font-medium">Sua Startup</span>
                  </div>
                  
                  <ArrowRight className="w-8 h-8 text-accent" />
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">F</span>
                    </div>
                    <span className="text-sm font-medium">Fastcomm</span>
                  </div>
                  
                  <ArrowRight className="w-8 h-8 text-accent" />
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-success" />
                    </div>
                    <span className="text-sm font-medium">200+ Instituições</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/30">
              <h3 className="text-2xl font-bold mb-4">
                Acelere sua Health Tech Hoje
              </h3>
              <p className="text-muted-foreground mb-6">
                Junte-se ao ecossistema que está transformando a interoperabilidade em saúde no Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Conectar Minha Startup
                </button>
                <button className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Ver Documentação
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTechSection;