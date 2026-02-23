import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EcosystemFlow } from "@/components/EcosystemFlow";
import { ChallengesSection } from "@/components/ChallengesSection";
import { ResponseSection } from "@/components/ResponseSection";
import { StatsSection } from "@/components/StatsSection";
import { MissionInActionSection } from "@/components/MissionInActionSection";
import { WhyThisMattersSection } from "@/components/WhyThisMattersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ChallengesSection />
      <ResponseSection />
      <EcosystemFlow />
      <StatsSection />
      <MissionInActionSection />
      <WhyThisMattersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
