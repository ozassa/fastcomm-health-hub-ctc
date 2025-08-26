import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Award, Users, Calendar, Globe, Target, Rocket, Shield } from "lucide-react";
import { scrollToContact } from "@/utils/scroll";

const AboutSection = memo(() => {
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
    <section 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/2e2b68d7-64c8-49b8-b7bd-54d6766ac7de.png" 
                alt="Fastcomm - Logotipo da empresa de interoperabilidade em saúde" 
                className="h-10 w-auto"
              />
              <span className="text-4xl font-bold text-slate-300">+</span>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <span className="font-bold text-primary text-xl">CTC</span>
              </div>
            </div>
            <h2 id="about-title" className="text-4xl font-bold mb-4 text-white">
              Sobre a <span className="text-primary">CTC</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Desenvolvedora do Fastcomm, a CTC é líder brasileira em soluções de TI para saúde, 
              governo, indústria e setor financeiro, atendendo missões críticas com alta performance.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 id="company-story-title" className="text-3xl font-bold text-white">
                Nossa <span className="text-accent">História</span>
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
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
            <div 
              className="grid grid-cols-2 gap-6"
              role="list"
              aria-labelledby="achievements-title"
            >
              <h3 id="achievements-title" className="sr-only">Conquistas e certificações da empresa</h3>
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600/50"
                  role="listitem"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <achievement.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="font-bold text-lg text-white">{achievement.title}</div>
                    <div className="text-sm text-slate-300">{achievement.description}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <article className="space-y-8">
              <div className="text-center">
                <h3 id="values-title" className="text-3xl font-bold mb-4 text-white">
                  Nossos <span className="text-primary">Valores</span>
                </h3>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Princípios que guiam nossa missão de transformar a interoperabilidade na saúde.
              </p>
            </div>

            <div 
              className="grid md:grid-cols-3 gap-8"
              role="list"
              aria-labelledby="values-title"
            >
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600/50"
                  role="listitem"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center border border-primary/30">
                      <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{value.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </article>

          {/* Team CTA */}
          <div className="mt-16 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl rounded-3xl transform scale-105"></div>
              
              <Card className="relative p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-primary/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <div className="max-w-2xl mx-auto space-y-8">
                  <div>
                    <h3 id="team-cta-title" className="text-4xl font-bold text-white leading-tight">
                      Conheça Nossa <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Equipe</span>
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Especialistas certificados em FHIR, HL7 e arquiteturas de alta disponibilidade, 
                      prontos para apoiar sua jornada de transformação digital.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-primary">PhDs e Mestres</div>
                      <div className="text-base text-slate-300">em Engenharia de Software e Informática Médica</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-accent">Certificações</div>
                      <div className="text-base text-slate-300">FHIR, HL7, AWS, Azure e Google Cloud</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                    <button className="bg-gradient-to-r from-accent to-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-accent/90 hover:to-primary/90 hover:scale-110 transition-all duration-300 shadow-xl"
                      aria-label="Conhecer a equipe de especialistas da CTC" onClick={scrollToContact}>
                      Conheça o Time
                    </button>
                    <a 
                      href="https://www.inhire.com.br/carreiras/ctctech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-2 border-slate-400/50 bg-slate-700/50 text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-600/70 hover:border-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm text-center"
                      aria-label="Ver oportunidades de carreira na CTC"
                    >
                      Trabalhe Conosco
                    </a>
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

AboutSection.displayName = 'AboutSection';

export default AboutSection;