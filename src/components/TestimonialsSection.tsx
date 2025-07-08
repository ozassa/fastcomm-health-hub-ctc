import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Quote, Star, User, Building } from "lucide-react";
import { testimonials, testimonialStats, testimonialsContent } from "@/constants/testimonials";
import { scrollToContact } from "@/utils/scroll";

const TestimonialsSection = memo(() => {

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {testimonialsContent.title} <span className="text-primary">{testimonialsContent.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {testimonialsContent.description}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-card to-accent/5">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  
                  {/* Quote */}
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-start gap-3">
                      <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <blockquote className="text-lg text-foreground leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-lg text-primary">{testimonial.avatar}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                        <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialStats.map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-primary/5">
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="p-10 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-3xl font-bold">
                  {testimonialsContent.cta.title} <span className="text-primary">{testimonialsContent.cta.titleHighlight}</span> {testimonialsContent.cta.subtitle}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {testimonialsContent.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors" onClick={scrollToContact}>
                    {testimonialsContent.cta.buttons.primary}
                  </button>
                  <button 
                    className="border border-input bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={scrollToContact}
                  >
                    {testimonialsContent.cta.buttons.secondary}
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

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;