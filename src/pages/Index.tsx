import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { MissionSection } from "@/components/MissionSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <MissionSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
