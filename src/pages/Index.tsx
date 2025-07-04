import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PainPointsSection from "@/components/PainPointsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import HealthTechSection from "@/components/HealthTechSection";
import CaseStudySection from "@/components/CaseStudySection";
import UseCasesSection from "@/components/UseCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AISection />
      <HealthTechSection />
      <CaseStudySection />
      <UseCasesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;