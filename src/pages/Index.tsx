
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    document.title = "HopefulHeart Foundation | Supporting Widow Communities";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <HowWeHelpSection />
      <DonationSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
