
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-hope-primary flex items-center justify-center">
              <span className="text-white text-xl font-bold">H</span>
            </div>
            <span className={`font-poppins font-bold text-xl text-hope-dark`}>
              HopefulHeart
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-hope-dark hover:text-hope-primary flex items-center gap-1 transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">
              About
            </Link>
            <Link to="/#impact" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">
              Impact
            </Link>
            <Link to="/#causes" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">
              Causes
            </Link>
            <Link to="/contact" className="font-medium text-hope-dark hover:text-hope-primary transition-colors">
              Contact
            </Link>
            <Link to='/#donation' className="bg-hope-primary hover:bg-hope-secondary transition-all">
              Donate Now
            </Link>
          </nav>

          <button
            className="md:hidden text-hope-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-5 bg-white absolute left-0 right-0 top-full shadow-md animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="font-medium text-hope-dark hover:text-hope-primary flex items-center gap-1 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home size={18} className="mb-0.5" /> Home
              </Link>
              <Link
                to="/about"
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#impact"
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                to="/#causes"
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Causes
              </Link>
              <Link
                to="/contact"
                className="font-medium text-hope-dark hover:text-hope-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
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
