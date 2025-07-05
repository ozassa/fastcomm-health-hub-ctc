import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { howItWorksSteps, howItWorksContent } from "@/constants/howItWorks";

const HowItWorksSection = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {howItWorksContent.title} <span className="text-primary">{howItWorksContent.titleHighlight}</span> {howItWorksContent.subtitle}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {howItWorksContent.description}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600/50 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Step Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-accent mb-1">
                            Etapa {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
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
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Arrow between steps */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA - Destacado */}
          <div className="text-center mt-20">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl rounded-3xl transform scale-110"></div>
              
              <Card className="relative p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-primary/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl">
                <div className="max-w-2xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-white leading-tight">
                      {howItWorksContent.cta.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{howItWorksContent.cta.titleHighlight}</span> {howItWorksContent.cta.subtitle}
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {howItWorksContent.cta.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl">
                      {howItWorksContent.cta.buttons.primary}
                    </button>
                    <button className="border-2 border-slate-400/50 bg-slate-700/50 text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-600/70 hover:border-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm">
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
    </section>
  );
};

export default HowItWorksSection;