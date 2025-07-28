import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Database, Code, Lock, Smartphone, Brain, Play, Calendar } from "lucide-react";
import { scrollToContact } from "@/utils/scroll";
import BasicVideoModal from "@/components/BasicVideoModal";
import { openCalendly } from "@/config/calendly";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = memo(() => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);


  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-label="Seção principal - Apresentação do Fastcomm"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="presentation"
        aria-hidden="true"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/lovable-uploads/2e2b68d7-64c8-49b8-b7bd-54d6766ac7de.png" 
                  alt="Fastcomm - Logotipo da empresa de interoperabilidade em saúde" 
                  className="h-10 w-auto"
                />
              </div>
               <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Interoperabilidade
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Simplificada
                </span>
                para Saúde
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Plataforma de integração em nuvem que conecta todo o ecossistema de saúde com suporte nativo aos padrões 
                <span className="font-semibold text-primary"> FHIR, HL7 e TISS</span>. 
                Reduza de 6 meses para 3 semanas o tempo de integração.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center relative z-10">
              <Button 
                variant="hero" 
                size="xl" 
                className="group flex-shrink-0 w-full sm:w-auto text-center justify-center"
                onClick={() => {
                  console.log('🖱️ Hero button clicked!');
                  scrollToContact();
                }}
                aria-label="Solicitar demonstração da plataforma Fastcomm"
              >
                Solicitar Demonstração
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Ver demonstração em vídeo do Fastcomm"
                className="group flex-shrink-0 w-full sm:w-auto text-center justify-center"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Ver Demo em Vídeo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div 
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-700"
              role="list"
              aria-label="Indicadores de confiança e certificações"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300" role="listitem">
                <Shield className="w-4 h-4 text-success" aria-hidden="true" />
                <span>Compliance FHIR R4</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300" role="listitem">
                <Lock className="w-4 h-4 text-success" aria-hidden="true" />
                <span>LGPD Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300" role="listitem">
                <Database className="w-4 h-4 text-success" aria-hidden="true" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Diagram */}
          <div className="relative mt-8 lg:mt-0 lg:ml-12" role="img" aria-labelledby="integration-flow-title">
            <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-card/95 to-muted/90 border-2 border-primary/20 shadow-2xl shadow-primary/25 backdrop-blur-sm hover:shadow-primary/35 lg:hover:scale-105 transition-all duration-300">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 id="integration-flow-title" className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                    Fluxo de Integração
                  </h3>
                </div>
                
                {/* Integration Flow */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Múltiplas Fontes de Entrada */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-slate-100 rounded-lg border">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      </div>
                      <div className="text-xs text-center text-slate-700">
                        <div className="font-medium">Hospitais</div>
                        <div className="text-slate-500 hidden sm:block">HIS/RIS</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-slate-100 rounded-lg border">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <div className="text-xs text-center text-slate-700">
                        <div className="font-medium">Clínicas</div>
                        <div className="text-slate-500 hidden sm:block">Prontuários</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-slate-100 rounded-lg border col-span-2 sm:col-span-1">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                      </div>
                      <div className="text-xs text-center text-slate-700">
                        <div className="font-medium">Laboratórios</div>
                        <div className="text-slate-500 hidden sm:block">LIS/LIMS</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Linhas de Conexão */}
                  <div className="flex justify-center hidden sm:block">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-3 sm:h-4 bg-gradient-to-b from-slate-400 to-accent"></div>
                      <div className="text-xs text-slate-500">múltiplos formatos</div>
                      <div className="w-px h-3 sm:h-4 bg-gradient-to-b from-accent to-slate-400"></div>
                    </div>
                  </div>
                  
                  {/* Fastcomm Engine - Hub Central */}
                  <div className="flex justify-center">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border-2 border-accent/30 shadow-lg">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/30 rounded-xl flex items-center justify-center">
                          <Code className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-sm sm:text-base">Fastcomm Engine</div>
                          <div className="text-xs text-slate-600 hidden sm:block">Transformação & Normalização</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Linhas de Saída */}
                  <div className="flex justify-center hidden sm:block">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-3 sm:h-4 bg-gradient-to-b from-accent to-primary"></div>
                      <div className="text-xs text-slate-500">formatos padrão</div>
                      <div className="w-px h-3 sm:h-4 bg-gradient-to-b from-primary to-slate-400"></div>
                    </div>
                  </div>
                  
                  {/* Padrões de Saída */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2">
                    <div className="flex flex-col items-center gap-1 p-1.5 sm:p-2 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                      </div>
                      <div className="text-xs font-medium text-slate-700">FHIR R4</div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 p-1.5 sm:p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />
                      </div>
                      <div className="text-xs font-medium text-slate-700">HL7 v2/v3</div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 p-1.5 sm:p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-600" />
                      </div>
                      <div className="text-xs font-medium text-slate-700">TISS 4.0</div>
                    </div>
                  </div>
                  
                  {/* Destinos Finais */}
                  <div className="flex justify-center hidden sm:block">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-3 sm:h-4 bg-gradient-to-b from-slate-400 to-primary"></div>
                      <div className="text-xs text-slate-500">APIs padronizadas</div>
                      <div className="w-px h-3 sm:h-4 bg-gradient-to-b from-primary to-slate-400"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-slate-100 rounded-lg border">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <div className="text-xs text-center text-slate-700">
                        <div className="font-medium">Healthtechs</div>
                        <div className="text-slate-500 hidden sm:block">Apps/Sistemas</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-slate-100 rounded-lg border">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                      </div>
                      <div className="text-xs text-center text-slate-700">
                        <div className="font-medium">IA/Analytics</div>
                        <div className="text-slate-500 hidden sm:block">Algoritmos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <BasicVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={`/fastcomm-demo.mp4?v=${Date.now()}`}
        title="Demonstração Fastcomm"
      />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;