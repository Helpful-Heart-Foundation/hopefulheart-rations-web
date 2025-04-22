
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-hope-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-hope-primary flex items-center justify-center">
                <span className="text-white text-xl font-bold">H</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">
                HopefulHeart
              </span>
            </div>
            <p className="mb-6 text-white/70">
              HopefulHeart Foundation is dedicated to supporting widow women through 
              our ration kit program, bringing hope, dignity, and essential supplies to 
              those who need it most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hope-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hope-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hope-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-hope-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-hope-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#impact" className="text-white/70 hover:text-hope-primary transition-colors">Our Impact</a>
              </li>
              <li>
                <a href="#how-we-help" className="text-white/70 hover:text-hope-primary transition-colors">How We Help</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-hope-primary transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-hope-primary transition-colors">Donate</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-white/70">info@hopefulheart.org</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li>
                <address className="text-white/70 not-italic">
                  123 Hope Street<br />
                  Compassion City, CC 12345<br />
                  United States
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} HopefulHeart Foundation. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-white/70 hover:text-hope-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-hope-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-hope-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
