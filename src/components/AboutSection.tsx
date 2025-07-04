import { Card } from "@/components/ui/card";
import { Award, Users, Calendar, Globe, Target, Rocket, Shield } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Calendar,
      title: "15+ Anos",
      description: "De experiência em sistemas críticos de saúde"
    },
    {
      icon: Users,
      title: "50+ Especialistas",
      description: "Em interoperabilidade e padrões de saúde"
    },
    {
      icon: Award,
      title: "ISO 27001",
      description: "Certificação em segurança da informação"
    },
    {
      icon: Globe,
      title: "3 Países",
      description: "Brasil, Argentina e México"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Priorizamos soluções que geram impacto real nos indicadores de negócio dos nossos clientes."
    },
    {
      icon: Shield,
      title: "Segurança First",
      description: "Todos os nossos produtos são projetados com segurança e compliance desde a concepção."
    },
    {
      icon: Rocket,
      title: "Inovação Contínua",
      description: "Investimos 30% do nosso faturamento em P&D para manter nossa liderança tecnológica."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/18ffcb20-6460-4a77-837b-0648705e26db.png" 
                alt="Fastcomm Logo" 
                className="h-10 w-auto"
              />
              <span className="text-4xl font-bold">+</span>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-bold text-primary text-xl">CTC</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Sobre a <span className="text-primary">CTC</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvedora do Fastcomm, a CTC é líder brasileira em soluções de TI para saúde, 
              governo, indústria e setor financeiro, atendendo missões críticas com alta performance.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Nossa <span className="text-accent">História</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundada por especialistas em sistemas críticos, a CTC desenvolveu expertise única 
                  em padrões como FHIR, HL7 e TISS ao longo de mais de 15 anos no mercado de saúde.
                </p>
                <p>
                  Atendemos desde grandes hospitais como HCOR, Oswaldo Cruz e Hospital Moinhos de Vento 
                  até startups inovadoras, sempre focados em soluções que geram impacto real.
                </p>
                <p>
                  O Fastcomm representa a evolução de todo nosso conhecimento, democratizando através 
                  de uma plataforma low-code o que antes exigia meses de desenvolvimento especializado.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-accent/5">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-bold text-lg text-foreground">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                Nossos <span className="text-primary">Valores</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Princípios que guiam nossa missão de transformar a interoperabilidade na saúde.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-primary/5">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Team CTA */}
          <div className="mt-16 text-center">
            <Card className="p-10 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-3xl font-bold">
                  Conheça Nossa <span className="text-accent">Equipe</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Especialistas certificados em FHIR, HL7 e arquiteturas de alta disponibilidade, 
                  prontos para apoiar sua jornada de transformação digital.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">PhDs e Mestres</div>
                    <div className="text-sm text-muted-foreground">em Engenharia de Software e Informática Médica</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">Certificações</div>
                    <div className="text-sm text-muted-foreground">FHIR, HL7, AWS, Azure e Google Cloud</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
                    Conheça o Time
                  </button>
                  <button className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-muted hover:text-foreground transition-colors">
                    Trabalhe Conosco
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

export default AboutSection;