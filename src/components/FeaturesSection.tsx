import { memo } from "react";
import { Card } from "@/components/ui/card";
import { features, featuresSectionContent } from "@/constants/features";
import { scrollToContact } from "@/utils/scroll";

const FeaturesSection = memo(() => {

  return (
    <section 
      className="py-20 bg-muted/30"
      aria-labelledby="features-title"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl font-bold mb-4">
              {featuresSectionContent.title} <span className="text-primary">{featuresSectionContent.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {featuresSectionContent.description}
            </p>
          </div>

          {/* Features Grid */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Lista de funcionalidades principais"
          >
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-accent/5 group"
                role="listitem"
              >
                <div className="space-y-6">
                  
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Principais vantagens:</h4>
                    <ul className="space-y-1" role="list">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground" role="listitem">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card 
              className="p-10 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20"
              role="region"
              aria-labelledby="features-cta-title"
            >
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 id="features-cta-title" className="text-3xl font-bold">
                  {featuresSectionContent.cta.title} <span className="text-primary">{featuresSectionContent.cta.titleHighlight}</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  {featuresSectionContent.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    aria-label="Solicitar demonstração das funcionalidades" onClick={scrollToContact}>
                    {featuresSectionContent.cta.buttons.primary}
                  </button>
                  <button 
                    className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={scrollToContact}
                    aria-label="Acessar documentação técnica"
                  >
                    {featuresSectionContent.cta.buttons.secondary}
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;