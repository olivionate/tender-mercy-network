import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Globe } from "lucide-react";
import tenderMercyLogo from "@/assets/tender-mercy-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Impact & Vision", href: "#impact" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Emergency Relief", href: "#programs" },
    { name: "Widows Empowerment", href: "#programs" },
    { name: "Orphans Education", href: "#programs" },
    { name: "Spiritual Nurture", href: "#programs" },
    { name: "Community Development", href: "#programs" }
  ];

  const getInvolved = [
    { name: "Donate Now", href: "/get-involved" },
    { name: "Volunteer", href: "/contact" },
    { name: "Partner With Us", href: "/get-involved" },
    { name: "Prayer Network", href: "/get-involved" },
    { name: "Sponsor a Child", href: "/get-involved" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={tenderMercyLogo} 
                alt="Tender Mercy Network Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">Tender Mercy Network</h3>
                <p className="text-sm text-white/70">Caring for widows & orphans</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              A Christian charity committed to extending God's love and compassion by providing 
              holistic care, support, and empowerment to widows and orphans in need.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-white/70">
                <Phone className="w-4 h-4 mr-3 shrink-0" />
                +254 725 252 412
              </div>
              <div className="flex items-center text-sm text-white/70">
                <Mail className="w-4 h-4 mr-3 shrink-0" />
                info@tendermercynetwork.org
              </div>
              <div className="flex items-center text-sm text-white/70">
                <MapPin className="w-4 h-4 mr-3 shrink-0" />
                Nairobi, Kenya
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(program.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3 mb-6">
              {getInvolved.map((action, index) => (
                <li key={index}>
                  <a
                    href={action.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {action.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-white/10 p-4 rounded-lg">
              <h5 className="font-semibold text-brand-orange mb-2">Biblical Foundation</h5>
              <p className="text-xs text-white/80 italic mb-2">
                "Religion that God our Father accepts as pure and faultless is this: 
                to look after orphans and widows in their distress..."
              </p>
              <cite className="text-xs text-brand-orange">— James 1:27</cite>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/70">
                © 2024 Tender Mercy Network. All rights reserved.
              </p>
              <p className="text-xs text-white/60 mt-1">
                Registered nonprofit organization serving widows and orphans since 2012
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-white/60">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors">
                Financial Transparency
              </button>
              <button className="hover:text-white transition-colors">
                Annual Reports
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/80 mb-2">
              Join us in fulfilling God's call to care for widows and orphans
            </p>
            <div className="flex items-center justify-center text-brand-orange">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Made with love in service to Christ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;