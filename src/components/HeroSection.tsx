import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Database, Code, Lock } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Interoperabilidade
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Simplificada
                </span>
                para Saúde
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Plataforma de integração em nuvem que conecta todo o ecossistema de saúde com suporte nativo aos padrões 
                <span className="font-semibold text-primary"> FHIR, HL7 e TISS</span>. 
                Reduza de 6 meses para 3 semanas o tempo de integração.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Solicitar Demonstração
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button variant="outline" size="xl">
                Ver Documentação
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-muted">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-success" />
                Compliance FHIR R4
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-success" />
                LGPD Compliant
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="w-4 h-4 text-success" />
                99.9% Uptime SLA
              </div>
            </div>
          </div>

          {/* Right Column - Visual Diagram */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-muted/50 border-2 border-muted shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Fluxo de Integração
                  </h3>
                </div>
                
                {/* Integration Flow */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background/70 rounded-lg border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Sistema Legado</div>
                      <div className="text-sm text-muted-foreground">Hospital/Clínica</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-primary to-accent"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Code className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Fastcomm Engine</div>
                      <div className="text-sm text-muted-foreground">Transformação FHIR</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-accent to-primary"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background/70 rounded-lg border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">API Padronizada</div>
                      <div className="text-sm text-muted-foreground">Healthtech/App</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;