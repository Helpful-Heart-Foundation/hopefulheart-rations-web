
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import CausesSection from "@/components/CausesSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const location = useLocation();

  // Scroll to the section if a hash is present in the URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    document.title = "HopefulHeart Foundation | Supporting Widow Communities";
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <CausesSection />
        <DonationSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
