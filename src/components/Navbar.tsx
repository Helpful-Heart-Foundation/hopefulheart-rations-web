
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-hope-primary flex items-center justify-center">
              <span className="text-white text-xl font-bold">H</span>
            </div>
            <span className={`font-poppins font-bold text-xl ${isScrolled ? "text-hope-dark" : "text-hope-dark"}`}>
              HopefulHeart
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">About</a>
            <a href="#impact" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">Impact</a>
            <a href="#how-we-help" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">How We Help</a>
            <a href="#contact" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">Contact</a>
            <Button className="bg-hope-primary hover:bg-hope-secondary transition-all">
              Donate Now
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-hope-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-5 bg-white absolute left-0 right-0 top-full shadow-md animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#about" 
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#impact" 
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </a>
              <a 
                href="#how-we-help" 
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Help
              </a>
              <a 
                href="#contact" 
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-hope-primary hover:bg-hope-secondary transition-all w-full">
                Donate Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
