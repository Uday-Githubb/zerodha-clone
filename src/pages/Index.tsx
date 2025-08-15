import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { PricingSection } from "@/components/PricingSection";
import { EducationSection } from "@/components/EducationSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <EcosystemSection />
        <PricingSection />
        <EducationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
