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
import BlogSection from "@/components/BlogSection";
import SectionErrorBoundary from "@/components/SectionErrorBoundary";
import { FAQSection } from "@/components/FAQSection";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const Index = () => {

  return (
    <div className="min-h-screen">
      <GoogleAnalytics />
      {/* Skip Links for Keyboard Navigation */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-primary text-primary-foreground p-2 rounded">
        <a href="#main-content" className="underline">
          Pular para o conteúdo principal
        </a>
        <a href="#contact" className="underline ml-4">
          Pular para contato
        </a>
      </div>

      <header>
        <SectionErrorBoundary sectionName="Hero">
          <HeroSection />
        </SectionErrorBoundary>
      </header>

      <main id="main-content" role="main">
        <SectionErrorBoundary sectionName="Parceiros">
          <TrustSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Problemas do Setor">
          <PainPointsSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Como Funciona">
          <HowItWorksSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Funcionalidades">
          <FeaturesSection />
        </SectionErrorBoundary>
        
        
        <SectionErrorBoundary sectionName="IA e Analytics">
          <AISection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="HealthTech">
          <HealthTechSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Case Study">
          <CaseStudySection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Casos de Uso">
          <UseCasesSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Depoimentos">
          <TestimonialsSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Sobre a Empresa">
          <AboutSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="Recursos Técnicos">
          <BlogSection />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary sectionName="FAQ">
          <FAQSection />
        </SectionErrorBoundary>
      </main>

      <footer id="contact">
        <SectionErrorBoundary sectionName="Contato">
          <ContactSection />
        </SectionErrorBoundary>
      </footer>
    </div>
  );
};

export default Index;