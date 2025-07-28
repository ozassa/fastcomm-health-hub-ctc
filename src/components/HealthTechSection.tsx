import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Rocket, Zap, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";

const HealthTechSection = memo(() => {
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-accent" />
              <h2 className="text-4xl font-bold text-white">
                Ecossistema de <span className="text-accent">Health Techs</span>
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Conecte-se ao ecossistema Fastcomm para se unir a centenas de instituições 
              que escolheram nossa plataforma como barramento de integração e interoperabilidade.
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Challenges */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-l-4 border-l-destructive/70 border-slate-600/50">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Desafios das Health Techs
                  </h3>
                  <p className="text-slate-300">
                    Barreiras que impedem startups de crescer no mercado de saúde
                  </p>
                </div>
                
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-destructive/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-destructive/50">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      </div>
                      <span className="text-slate-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Solutions */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-l-4 border-l-accent border-slate-600/50">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Soluções do Fastcomm
                  </h3>
                  <p className="text-slate-300">
                    Como nossa plataforma acelera o crescimento da sua startup
                  </p>
                </div>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600/50">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto border border-accent/30">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Ecosystem Visual */}
          <div className="text-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl rounded-3xl transform scale-105"></div>
              
              <Card className="relative p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-primary/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold mb-6 text-white leading-tight">
                      <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Diversas Possibilidades</span>, Uma Conexão
                    </h3>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                      Integre-se ao Fastcomm e você estará conectado com os mais diversos 
                      sistemas heterogêneos do mercado, reduzindo custo e tempo das suas integrações.
                    </p>
                  </div>

                  {/* Connection Diagram */}
                  <div className="flex items-center justify-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center border border-accent/50">
                        <Rocket className="w-8 h-8 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">Sua Startup</span>
                    </div>
                    
                    <ArrowRight className="w-8 h-8 text-accent" />
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center border border-primary/50">
                        <span className="font-bold text-primary">F</span>
                      </div>
                      <span className="text-sm font-medium text-slate-200">Fastcomm</span>
                    </div>
                    
                    <ArrowRight className="w-8 h-8 text-accent" />
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-success/30 rounded-full flex items-center justify-center border border-success/50">
                        <Users className="w-8 h-8 text-success" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">200+ Instituições</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/25 via-primary/25 to-accent/25 blur-2xl rounded-2xl transform scale-105"></div>
              
              <Card className="relative p-10 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-accent/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      Acelere sua <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">HealthTech</span> Hoje
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Junte-se ao ecossistema que está transformando a interoperabilidade em saúde no Brasil.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-gradient-to-r from-accent to-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-accent/90 hover:to-primary/90 hover:scale-110 transition-all duration-300 shadow-xl">
                      Conectar Minha Startup
                    </button>
                    <button className="border-2 border-slate-400/50 bg-slate-700/50 text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-600/70 hover:border-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm">
                      Ver Documentação
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

HealthTechSection.displayName = 'HealthTechSection';

export default HealthTechSection;