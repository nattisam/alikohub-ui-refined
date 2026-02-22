import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EcosystemFlow } from "@/components/EcosystemFlow";
import { ChallengesSection } from "@/components/ChallengesSection";
import { StatsSection } from "@/components/StatsSection";
import { MissionSection } from "@/components/MissionSection";
import { MissionInActionSection } from "@/components/MissionInActionSection";
import { WhyThisMattersSection } from "@/components/WhyThisMattersSection";
import { PolicyAlignmentSection } from "@/components/PolicyAlignmentSection";

import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <EcosystemFlow />
      <ServicesSection />
      <StatsSection />
      <MissionSection />
      <MissionInActionSection />
      <WhyThisMattersSection />
      <PolicyAlignmentSection />
      
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
