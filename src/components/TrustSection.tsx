import { memo } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { partners, certifications, trustContent } from "@/constants/trust";

const TrustSection = memo(() => {
  return (
    <section 
      className="py-20 bg-muted/30"
      aria-labelledby="trust-section-title"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Partners Section */}
          <div className="text-center mb-16">
            <h2 id="trust-section-title" className="sr-only">Parcerias e Certificações</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {trustContent.partnersSection.description} <span className="font-semibold text-primary">{trustContent.partnersSection.highlight}</span> {trustContent.partnersSection.subtitle}
            </p>
            
            <div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              role="list"
              aria-label="Parceiros e clientes"
            >
              {partners.map((partner, index) => {
                const LogoContent = () => (
                  <div className="flex flex-col items-center space-y-2">
                    {partner.logoUrl ? (
                      <div className="w-16 h-16 flex items-center justify-center p-2">
                        <img 
                          src={partner.logoUrl} 
                          alt={`Logotipo do ${partner.name} - parceiro da plataforma Fastcomm`} 
                          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center';
                            fallback.innerHTML = `<span class="font-bold text-lg text-primary">${partner.logo}</span>`;
                            img.parentElement?.appendChild(fallback);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-lg text-primary">{partner.logo}</span>
                      </div>
                    )}
                    <div className="text-xs text-center text-muted-foreground font-medium">
                      {partner.name}
                    </div>
                    {partner.websiteUrl && (
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                );

                return partner.websiteUrl ? (
                  <a
                    key={index}
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    role="listitem"
                    aria-label={`Visitar site do ${partner.name} (abre em nova aba)`}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm cursor-pointer hover:bg-card/70">
                      <LogoContent />
                    </Card>
                  </a>
                ) : (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
                    role="listitem"
                  >
                    <LogoContent />
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Certificações e conformidades"
          >
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-accent/5"
                role="listitem"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground">{cert.title}</div>
                    <div className="text-sm text-muted-foreground">{cert.subtitle}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

TrustSection.displayName = 'TrustSection';

export default TrustSection;