import { Button } from "@/components/ui/button";
import { Heart, ArrowDown, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 flex items-center min-h-screen py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Heart className="w-4 h-4 mr-2 text-brand-orange" />
                Serving widows and orphans since 2012
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Extending God's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-300">
                  Tender Mercy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light">
                Providing holistic care, support, and empowerment to widows and orphans in need through Christ's compassionate love.
              </p>
              
              <blockquote className="border-l-4 border-brand-orange pl-4 md:pl-6 text-white/80 italic text-base md:text-lg">
                "Religion that God our Father accepts as pure and faultless is this: 
                to look after orphans and widows in their distress..."
                <cite className="block text-xs md:text-sm font-medium mt-2 text-brand-orange">— James 1:27</cite>
              </blockquote>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-brand-orange">200</div>
                <div className="text-xs md:text-sm text-white/70">Widows Served</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-brand-orange">500</div>
                <div className="text-xs md:text-sm text-white/70">Orphans Cared For</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-4 col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-brand-orange">12</div>
                <div className="text-xs md:text-sm text-white/70">Years of Service</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/get-involved" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold shadow-glow"
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Donate Now
                </Button>
              </Link>
              
              <Link to="/programs" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up mt-8 lg:mt-0">
            <div className="relative">
              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <img 
                  src={heroImage}
                  alt="Community of widows and children receiving care and support"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                    <div className="text-center space-y-3 md:space-y-4">
                      <div className="flex justify-center items-center space-x-3 md:space-x-4">
                        <div className="bg-brand-orange/20 p-2 md:p-3 rounded-full">
                          <Users className="w-4 h-4 md:w-6 md:h-6 text-brand-orange" />
                        </div>
                        <div className="text-2xl md:text-4xl text-brand-orange animate-gentle-bounce">♥</div>
                        <div className="bg-brand-orange/20 p-2 md:p-3 rounded-full">
                          <Home className="w-4 h-4 md:w-6 md:h-6 text-brand-orange" />
                        </div>
                      </div>
                      
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base md:text-xl font-semibold">Our Mission in Action</h3>
                        <p className="text-white/90 text-xs md:text-sm">
                          See the real impact of your support in the lives of families across East Africa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;