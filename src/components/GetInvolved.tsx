import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Handshake, 
  MessageCircle, 
  DollarSign,
  UserCheck,
  Building2,
  Hand,
  Gift,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";
import volunteersImage from "@/assets/volunteers.jpg";
import donationsImage from "@/assets/donations.jpg";

const GetInvolved = () => {
  const donationOptions = [
    {
      amount: "$30",
      frequency: "monthly",
      impact: "Sponsor an orphan's education",
      description: "Covers school fees, books, uniforms, and meals",
      popular: false
    },
    {
      amount: "$50", 
      frequency: "monthly",
      impact: "Support a widow's empowerment",
      description: "Funds vocational training and microfinance loans",
      popular: true
    },
    {
      amount: "$100",
      frequency: "one-time",
      impact: "Emergency relief for a family",
      description: "Provides food, shelter, and medical care for crisis situations",
      popular: false
    },
    {
      amount: "$250",
      frequency: "one-time", 
      impact: "Fund a community project",
      description: "Supports infrastructure like wells or community centers",
      popular: false
    }
  ];

  const volunteerRoles = [
    {
      icon: UserCheck,
      title: "Mentors & Tutors",
      description: "Guide orphans in their educational journey and life skills development",
      commitment: "2-4 hours/week",
      location: "Remote or On-site"
    },
    {
      icon: Users,
      title: "Program Facilitators",
      description: "Lead vocational training, support groups, and Bible study sessions",
      commitment: "4-8 hours/week", 
      location: "On-site"
    },
    {
      icon: Building2,
      title: "Skills Trainers",
      description: "Teach practical skills like sewing, baking, computer literacy, and agriculture",
      commitment: "Flexible",
      location: "Community Centers"
    },
    {
      icon: Heart,
      title: "Event Organizers",
      description: "Plan fundraising events, prayer retreats, and community gatherings",
      commitment: "Project-based",
      location: "Various"
    }
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Churches",
      description: "Host programs, provide volunteers, and sponsor beneficiaries in your congregation.",
      benefits: ["Regular mission opportunities", "Direct community impact", "Spiritual growth for members"]
    },
    {
      icon: Handshake,
      title: "Organizations",
      description: "Collaborate on resources, expertise sharing, and joint community projects.",
      benefits: ["Expanded program reach", "Shared resources", "Collective impact"]
    },
    {
      icon: Gift,
      title: "Corporates",
      description: "Provide matching gifts, employee volunteering, and in-kind donations.",
      benefits: ["Employee engagement", "Community goodwill", "CSR fulfillment"]
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get Involved & Make a Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us in fulfilling God's call to care for widows and orphans. Your prayers, donations, 
            and time can transform lives, offering hope and healing to those in need.
          </p>
        </div>

        {/* Donation Section */}
        <div className="mb-20" id="donate">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold text-primary mb-4">Donate & Sponsor</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your financial support directly funds life-changing programs. Choose from our sponsorship 
              options or make a one-time donation to support our mission.
            </p>
          </div>

          {/* Donation Hero Image */}
          <div className="relative mb-12 animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={donationsImage}
                alt="Hands showing generosity and charity through donations"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Every Gift Creates Hope</h3>
                  <p className="text-xl text-white/90 max-w-2xl">
                    Your donation transforms lives and brings Christ's love to families in their greatest need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 animate-slide-up">
            {donationOptions.map((option, index) => (
              <Card key={index} className={`relative bg-white shadow-soft border-0 text-center hover:shadow-strong transition-all duration-300 ${option.popular ? 'ring-2 ring-brand-orange' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-bold text-brand-teal mb-2">
                    {option.amount}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {option.frequency}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-primary text-lg">
                    {option.impact}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                  <Link to="/get-involved">
                    <Button 
                      className={`w-full ${option.popular ? 'bg-brand-orange hover:bg-brand-orange-dark text-white' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-gentle p-6 rounded-xl animate-fade-in">
            <p className="text-lg font-semibold text-primary mb-4">
              Custom Donation Amount
            </p>
            <p className="text-muted-foreground mb-6">
              Every donation makes a difference. Choose any amount that feels right for your heart.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <DollarSign className="w-5 h-5 mr-2" />
              Donate Custom Amount
            </Button>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold text-primary mb-4">Volunteer With Us</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use your skills, talents, and time to directly impact the lives of widows and orphans. 
              Join our community of dedicated volunteers serving around the world.
            </p>
          </div>

          {/* Volunteer Hero Image */}
          <div className="relative mb-12 animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={volunteersImage}
                alt="Diverse group of volunteers working together on community projects"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-2">Join Our Volunteer Family</h3>
                  <p className="text-white/90">
                    Experience the joy of serving alongside others who share your heart for helping widows and orphans.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="bg-white shadow-soft border-0 hover:shadow-strong transition-all duration-300 group animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 p-3 rounded-xl shrink-0 transition-colors">
                      <role.icon className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary mb-3">
                        {role.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-brand-teal">
                          <Clock className="w-4 h-4 mr-2" />
                          {role.commitment}
                        </div>
                        <div className="flex items-center text-brand-orange">
                          <MapPin className="w-4 h-4 mr-2" />
                          {role.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white">
                      <Users className="w-4 h-4 mr-2" />
                      Apply to Volunteer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary rounded-xl p-8 text-white text-center animate-fade-in">
            <h4 className="text-2xl font-bold mb-4">Volunteer Training & Support</h4>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              All volunteers receive comprehensive training in trauma-informed care, cultural sensitivity, 
              and Christian service principles. We provide ongoing support and community for our volunteer family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="w-4 h-4 mr-2" />
                View Training Schedule
              </Button>
              <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Volunteer Community
              </Button>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Partner With Us</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Churches, organizations, and businesses can collaborate with us to amplify impact 
              and reach more families in need through strategic partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="bg-white shadow-soft border-0 hover:shadow-strong transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <partnership.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl text-center text-primary">
                    {partnership.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {partnership.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h5 className="font-semibold text-sm text-primary">Partnership Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white">
                    <Handshake className="w-4 h-4 mr-2" />
                    Explore Partnership
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prayer & Stay Connected */}
        <div className="mt-20 bg-gradient-gentle p-8 rounded-2xl animate-fade-in">
          <div className="text-center">
            <Hand className="w-16 h-16 text-brand-teal mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-primary mb-4">
              Pray & Stay Connected
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our prayer community and receive regular updates about the lives being transformed 
              through your support. Prayer is the foundation of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                  <Hand className="w-5 h-5 mr-2" />
                  Join Prayer Network
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark text-white w-full sm:w-auto">
                  <Heart className="w-5 h-5 mr-2" />
                  Subscribe to Updates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;