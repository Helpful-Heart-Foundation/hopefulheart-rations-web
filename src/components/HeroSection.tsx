
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column with text content */}
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-hope-dark">
              Bringing <span className="text-hope-primary">Hope</span> to Widow Communities
            </h1>
            <p className="text-lg md:text-xl mb-8 text-hope-dark/80 max-w-lg">
              We provide essential ration kits to widow women, ensuring they have the necessary support 
              to lead dignified lives. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg px-8 py-6 bg-hope-primary hover:bg-hope-secondary font-medium transition-all">
                Donate Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-hope-primary text-hope-primary hover:bg-hope-softPurple font-medium transition-all flex items-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="relative animate-fade-in-right">
            <div className="bg-white rounded-lg p-3 shadow-xl transform rotate-2 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=631&q=80" 
                alt="Volunteers distributing ration kits" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 z-10 bg-hope-softPurple rounded-lg p-8 shadow-lg transform -rotate-3">
              <div className="flex items-center gap-4">
                <div className="bg-hope-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                  5K+
                </div>
                <div>
                  <p className="font-bold text-hope-dark">Families Supported</p>
                  <p className="text-sm text-hope-dark/70">In the last year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-hope-softPink opacity-60 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-hope-primary opacity-30 animate-float"></div>
    </section>
  );
};

export default HeroSection;
