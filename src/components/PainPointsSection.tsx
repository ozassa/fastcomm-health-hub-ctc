import { memo } from "react";
import { Card } from "@/components/ui/card";
import { scrollToContact } from "@/utils/scroll";
import { painPoints, painPointsContent } from "@/constants/painPoints";

const PainPointsSection = memo(() => {

  return (
    <section 
      className="py-20 bg-gradient-to-br from-destructive/5 to-muted/30"
      aria-labelledby="pain-points-title"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="pain-points-title" className="text-4xl font-bold mb-4">
              {painPointsContent.title} <span className="text-destructive">{painPointsContent.titleHighlight}</span> {painPointsContent.subtitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {painPointsContent.description}
            </p>
          </div>

          {/* Pain Points Grid */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            role="list"
            aria-label="Principais desafios de interoperabilidade"
          >
            {painPoints.map((point, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-destructive/50"
                role="listitem"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-destructive" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-destructive">
                      {point.stat}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {point.description}
                    </p>
                    <p className="text-xs text-muted-foreground/70 italic">
                      Fonte: {point.source}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Solution Transition */}
          <div className="text-center">
            <Card 
              className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20"
              role="region"
              aria-labelledby="solution-title"
            >
              <h3 id="solution-title" className="text-2xl font-bold mb-4">
                <span className="text-primary">{painPointsContent.solution.title}</span> {painPointsContent.solution.titleHighlight}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {painPointsContent.solution.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  onClick={scrollToContact}
                  aria-label="Solicitar demonstração da solução Fastcomm"
                >
                  {painPointsContent.solution.buttons.primary}
                </button>
                <button 
                  className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={scrollToContact}
                  aria-label="Acessar casos de uso e exemplos"
                >
                  {painPointsContent.solution.buttons.secondary}
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

PainPointsSection.displayName = 'PainPointsSection';

export default PainPointsSection;