import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Eye, 
  Shield, 
  Coins, 
  Users, 
  ChevronRight,
  BookOpen,
  Lightbulb,
  Award,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import missionImage from "@/assets/mission-african-community.jpg";
import visionImage from "@/assets/vision-african-woman.jpg";
import valuesImage from "@/assets/values-african-families.jpg";

const AboutPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Emulating Christ's love by meeting physical, emotional, and spiritual needs with empathy.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: BookOpen,
      title: "Faith",
      description: "Grounding all actions in trust in God's provision and guidance.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Dignity",
      description: "Honoring the inherent worth of every individual as created in God's image.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Coins,
      title: "Stewardship",
      description: "Responsibly managing resources to maximize impact for those we serve.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "Community",
      description: "Fostering connections to build supportive networks for widows and orphans.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Lightbulb,
      title: "Hope",
      description: "Inspiring resilience and faith in God's promises for a brighter future.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const organizationHighlights = [
    {
      icon: Award,
      title: "Founded in 2012",
      description: "Over a decade of faithful service to widows and orphans"
    },
    {
      icon: Globe,
      title: "Headquartered in Nairobi, Kenya",
      description: "With plans for regional hubs across Africa"
    },
    {
      icon: Users,
      title: "Non-denominational Christian",
      description: "Collaborating with churches and ministries globally"
    },
    {
      icon: Shield,
      title: "Registered Nonprofit",
      description: "Committed to transparency and accountability"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-gentle">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 animate-fade-in">
              About Tender Mercy Network
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Learn about our heart, our history, and our commitment to serving widows and orphans with Christ's love.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-gradient-subtle shadow-soft border-primary/20 hover:shadow-strong transition-all duration-300 group overflow-hidden max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 sm:h-80 lg:h-full order-2 lg:order-1">
                  <img 
                    src={missionImage}
                    alt="African community members representing our mission to serve widows and orphans"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12 order-1 lg:order-2 flex flex-col justify-center">
                  <CardHeader className="p-0 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-warm p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-4xl text-primary">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      Tender Mercy Network is a Christian charity committed to extending God's love and compassion by providing 
                      holistic care, support, and empowerment to widows and orphans in need.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Rooted in the biblical call to "care for the widow and the fatherless" (James 1:27), we seek to offer 
                      practical aid, emotional support, and spiritual encouragement to restore hope and dignity.
                    </p>
                    <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
                      <Heart className="w-5 h-5 mr-2" />
                      See Our Programs
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-soft border-primary/20 hover:shadow-strong transition-all duration-300 group overflow-hidden max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full">
                  <img 
                    src={visionImage}
                    alt="African woman representing our vision for hope and future"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-warm p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-4xl text-primary">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                      To create a world where every widow and orphan experiences the tender mercy of God through 
                      compassionate care, sustainable support, and a community of love that reflects Christ's 
                      heart for the vulnerable.
                    </p>
                    <Link to="/programs">
                      <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Eye className="w-5 h-5 mr-2" />
                        Programs
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These foundational principles guide every aspect of our work and ministry, 
                ensuring we reflect Christ's love in all we do.
              </p>
            </div>

            {/* Values Hero Image */}
            <div className="relative h-80 md:h-96 mb-16 rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={valuesImage}
                alt="African families demonstrating our core values of compassion, faith, and community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Living Our Values Every Day</h3>
                <p className="text-xl opacity-90">Compassion, Faith, and Community in Action</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className={`${value.bgColor} shadow-soft border-2 border-primary/10 hover:shadow-strong transition-all duration-300 group`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`${value.color} bg-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                        <value.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl text-primary">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Overview */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Organization Overview</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Learn more about our history, leadership, and organizational structure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {organizationHighlights.map((highlight, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft border-primary/20 hover:shadow-strong transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-warm p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <highlight.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{highlight.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Leadership & Governance */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-soft border-primary/20 max-w-4xl mx-auto">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl text-primary">Leadership & Governance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Tender Mercy Network is governed by a dedicated Board of Directors with diverse expertise in 
                  ministry, social work, and nonprofit management. Our Executive Director leads the organization 
                  with a passionate commitment to biblical justice for the marginalized.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We maintain full transparency through annual reports and third-party audits, ensuring 85% of 
                  funds go directly to programs while maintaining operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center bg-gradient-gentle p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Join Us in Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your support helps us extend God's tender mercy to those who need it most. 
                Together, we can transform lives and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Work
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Users className="w-5 h-5 mr-2" />
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;