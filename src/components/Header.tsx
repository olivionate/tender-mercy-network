import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone, Mail } from "lucide-react";
import tenderMercyLogo from "@/assets/tender-mercy-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-accent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={tenderMercyLogo} 
              alt="Tender Mercy Network Logo" 
              className="h-14 w-14"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Tender Mercy Network</h1>
              <p className="text-sm text-muted-foreground">Caring for widows & orphans</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('get-involved')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('get-involved')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Heart className="w-4 h-4 mr-2" />
              Volunteer
            </Button>
            <Button 
              onClick={() => scrollToSection('donate')}
              className="bg-gradient-warm text-white hover:opacity-90 shadow-glow"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-accent animate-fade-in">
            <div className="py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('impact')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('get-involved')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
              >
                Get Involved
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
              >
                Contact
              </button>
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection('get-involved')}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Volunteer
                </Button>
                <Button 
                  className="w-full bg-gradient-warm text-white hover:opacity-90"
                  onClick={() => scrollToSection('donate')}
                >
                  Donate Now
                </Button>
              </div>

              <div className="pt-4 border-t border-accent space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  +254 725 252 412
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  info@tendermercynetwork.org
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;