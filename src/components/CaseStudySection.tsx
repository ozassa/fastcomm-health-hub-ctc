import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Quote, TrendingUp, Clock, Database, CheckCircle } from "lucide-react";
import { scrollToContact } from "@/utils/scroll";

const CaseStudySection = memo(() => {
  const metrics = [
    {
      icon: Database,
      value: "50+",
      label: "Sistemas Integrados",
      description: "Unificação completa da infraestrutura hospitalar"
    },
    {
      icon: Clock,
      value: "3 semanas",
      label: "Tempo de Integração",
      description: "Redução de 6 meses para 3 semanas"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Redução de Redundâncias",
      description: "Eliminação de exames desnecessários"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Disponibilidade",
      description: "Dados acessíveis e seguros 24/7"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-success/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Caso de <span className="text-success">Sucesso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hospital Moinhos de Vento transforma operação com integração completa do ecossistema de dados
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Hospital Moinhos de Vento
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Uma das instituições de saúde mais respeitadas do Brasil unificou mais de 50 sistemas 
                  internos com a interoperabilidade do Fastcomm, transformando completamente seu atendimento médico.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Resultados Alcançados:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Atendimento médico mais eficiente com diagnósticos agilizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Redução significativa de exames redundantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Ambiente de dados integrados, acessíveis e seguros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Processo de integração reduzido de 6 meses para 3 semanas</span>
                  </li>
                </ul>
              </div>

              {/* Testimonial */}
              <Card className="p-6 bg-gradient-to-r from-success/10 to-accent/10 border-l-4 border-l-success">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "A principal necessidade era acabar com diversas fontes de dados com 
                      informações desconectadas, trabalhando para que os dados fossem mais 
                      íntegros e conseguisse ter maior assertividade na utilização médica."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                        <span className="text-success font-semibold">VF</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Vitor Ferreira</div>
                        <div className="text-sm text-muted-foreground">Gerente de TI do Hospital Moinhos de Vento</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Metrics */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-center mb-8">Métricas de Impacto</h4>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                        <metric.icon className="w-6 h-6 text-success" />
                      </div>
                      <div className="text-2xl font-bold text-success">
                        {metric.value}
                      </div>
                      <div className="font-semibold text-foreground">
                        {metric.label}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-success/10 to-primary/10 border-2 border-success/20">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para Transformar sua Instituição?
              </h3>
              <p className="text-muted-foreground mb-6">
                Junte-se a centenas de instituições que já escolheram o Fastcomm para revolucionar 
                sua interoperabilidade em saúde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-success text-success-foreground px-8 py-3 rounded-lg font-medium hover:bg-success/90 transition-colors" onClick={scrollToContact}>
                  Solicitar Demonstração
                </button>
                <button 
                  className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={scrollToContact}
                >
                  Ver Mais Cases
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

CaseStudySection.displayName = 'CaseStudySection';

export default CaseStudySection;