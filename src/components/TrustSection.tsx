import { Card } from "@/components/ui/card";
import { Shield, CheckCircle, Award, Zap } from "lucide-react";

const TrustSection = () => {
  const partners = [
    { name: "Hospital Moinhos de Vento", logo: "MV" },
    { name: "HCOR", logo: "HC" },
    { name: "Oswaldo Cruz", logo: "OC" },
    { name: "Hospital São Francisco", logo: "SF" },
    { name: "Unimed", logo: "UN" },
    { name: "IOP", logo: "IO" },
    { name: "BP Beneficência", logo: "BP" },
    { name: "Santa Casa", logo: "SC" },
    { name: "Transduson", logo: "TD" },
    { name: "ACCG", logo: "AC" },
    { name: "FSEX", logo: "FS" },
    { name: "CTR", logo: "CT" }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "FHIR R4",
      subtitle: "Certified"
    },
    {
      icon: CheckCircle,
      title: "HL7 Brasil",
      subtitle: "Mantenedor"
    },
    {
      icon: Award,
      title: "RNDS",
      subtitle: "Conector"
    },
    {
      icon: Zap,
      title: "Cloud First",
      subtitle: "AWS + Oracle"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Partners Section */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground mb-8 text-lg">
              Confiado por mais de <span className="font-semibold text-primary">200+ organizações</span> de saúde
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-sm text-primary">{partner.logo}</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground font-medium">
                      {partner.name}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-accent/5">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-accent" />
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
};

export default TrustSection;