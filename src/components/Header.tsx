import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import tenderMercyLogo from "@/assets/tender-mercy-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-accent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={tenderMercyLogo} 
              alt="Tender Mercy Network Logo" 
              className="h-24 w-24"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Tender Mercy Network</h1>
              <p className="text-sm text-muted-foreground">Caring for widows & orphans</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/programs"
              className="text-foreground hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link 
              to="/get-involved"
              className="text-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </Link>
            <Link 
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Heart className="w-4 h-4 mr-2" />
                Volunteer
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button 
                className="bg-gradient-warm text-white hover:opacity-90 shadow-glow"
              >
                Donate Now
              </Button>
            </Link>
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
              <Link 
                to="/"
                className="block w-full text-left text-foreground hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="block w-full text-left text-foreground hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/programs"
                className="block w-full text-left text-foreground hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/get-involved"
                className="block w-full text-left text-foreground hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link 
                to="/contact"
                className="block w-full text-left text-foreground hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-3">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Volunteer
                  </Button>
                </Link>
                <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-warm text-white hover:opacity-90"
                  >
                    Donate Now
                  </Button>
                </Link>
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