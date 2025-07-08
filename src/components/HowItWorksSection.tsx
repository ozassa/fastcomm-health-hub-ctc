import { memo, useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { howItWorksSteps, howItWorksContent } from "@/constants/howItWorks";
import { scrollToContact } from "@/utils/scroll";
import { openCalendly } from "@/config/calendly";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import VideoModal from "@/components/VideoModal";

const HowItWorksSection = memo(() => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="how-it-works-title" className="text-4xl font-bold mb-4 text-white">
              {howItWorksContent.title} <span className="text-primary">{howItWorksContent.titleHighlight}</span> {howItWorksContent.subtitle}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {howItWorksContent.description}
            </p>
          </div>

          {/* Steps */}
          <div 
            className="space-y-8"
            role="list"
            aria-label="Etapas do processo de integração"
          >
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative" role="listitem">
                <Card 
                  className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600/50 backdrop-blur-sm"
                  role="article"
                  aria-labelledby={`step-${step.number}-title`}
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Step Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-accent mb-1">
                            Etapa {step.number}
                          </div>
                          <h3 id={`step-${step.number}-title`} className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-200 mb-4">Recursos:</h4>
                      <ul className="space-y-3" role="list">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3" role="listitem">
                            <div className="w-2 h-2 bg-accent rounded-full" aria-hidden="true"></div>
                            <span className="text-sm text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Arrow between steps */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="flex justify-center my-6" role="presentation" aria-hidden="true">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Screenshots Gallery */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Veja a Plataforma <span className="text-primary">em Ação</span>
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore as principais telas e funcionalidades do Fastcomm
              </p>
            </div>
            
            <ScreenshotGallery onVideoClick={() => setIsVideoModalOpen(true)} />
          </div>

          {/* CTA - Destacado */}
          <div className="text-center mt-20">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl rounded-3xl transform scale-110"></div>
              
              <Card 
                className="relative p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-primary/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl"
                role="region"
                aria-labelledby="how-it-works-cta-title"
              >
                <div className="max-w-2xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h3 id="how-it-works-cta-title" className="text-4xl font-bold text-white leading-tight">
                      {howItWorksContent.cta.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{howItWorksContent.cta.titleHighlight}</span> {howItWorksContent.cta.subtitle}
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {howItWorksContent.cta.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
                      aria-label="Solicitar demonstração do processo de integração" onClick={scrollToContact}>
                      {howItWorksContent.cta.buttons.primary}
                    </button>
                    <button 
                      className="border-2 border-slate-400/50 bg-slate-700/50 text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-600/70 hover:border-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm"
                      onClick={openCalendly}
                      aria-label="Agendar demonstração via Calendly"
                    >
                      {howItWorksContent.cta.buttons.secondary}
                    </button>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-600/50">
                    <p className="text-sm text-slate-400">
                      {howItWorksContent.cta.features}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/fastcomm-demo.mp4"
        title="Demonstração Completa - Fastcomm"
        description="Veja um walkthrough completo da plataforma e suas funcionalidades"
      />
    </section>
  );
});

HowItWorksSection.displayName = 'HowItWorksSection';

export default HowItWorksSection;