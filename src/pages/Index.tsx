import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EcosystemFlow } from "@/components/EcosystemFlow";
import { ChallengesResponseSection } from "@/components/ChallengesResponseSection";
import { StatsSection } from "@/components/StatsSection";
import { WhyThisMattersSection } from "@/components/WhyThisMattersSection";

import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyThisMattersSection />
      <ChallengesResponseSection />
      <ServicesSection />
      <EcosystemFlow />
      <StatsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
