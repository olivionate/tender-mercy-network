import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  HandHeart,
  Church,
  Building,
  Calendar,
  DollarSign,
  Mail,
  Phone,
  Globe,
  Gift,
  Briefcase,
  GraduationCap,
  MessageCircle,
  UserPlus,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import volunteersImage from "@/assets/volunteers.jpg";
import donationsImage from "@/assets/donations.jpg";

const GetInvolvedPage = () => {
  const involvementOptions = [
    {
      icon: Heart,
      title: "Monthly Giving",
      description: "Become a monthly partner and provide consistent support for ongoing programs.",
      commitment: "Monthly",
      impact: "Sustains all programs",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: UserPlus,
      title: "Child Sponsorship",
      description: "Sponsor an orphan's education, nutrition, and care with personal updates.",
      commitment: "$30/month",
      impact: "Transform one child's life",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Briefcase,
      title: "Widow Empowerment Sponsor",
      description: "Fund vocational training and microfinance for a widow's independence.",
      commitment: "$50/month",
      impact: "Empower one widow to thrive",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Volunteer Mentor",
      description: "Provide guidance and support to beneficiaries through mentorship.",
      commitment: "2-4 hours/week",
      impact: "Personal life transformation",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Church,
      title: "Church Partnership",
      description: "Partner your congregation with our mission through collaborative programs.",
      commitment: "Ongoing partnership",
      impact: "Community-wide transformation",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: HandHeart,
      title: "Mission Trips",
      description: "Join short-term mission trips to serve directly in our communities.",
      commitment: "1-2 weeks annually",
      impact: "Hands-on community impact",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  const volunteerRoles = [
    {
      role: "Program Facilitator",
      skills: "Teaching, group leadership, cultural sensitivity",
      time: "4-6 hours/week"
    },
    {
      role: "Mentor & Counselor",
      skills: "Life coaching, emotional support, patience",
      time: "2-4 hours/week"
    },
    {
      role: "Skills Trainer",
      skills: "Vocational expertise (tailoring, baking, etc.)",
      time: "3-5 hours/week"
    },
    {
      role: "Administrative Support",
      skills: "Organization, computer literacy, communication",
      time: "Flexible schedule"
    },
    {
      role: "Event Coordinator",
      skills: "Event planning, networking, fundraising",
      time: "Project-based"
    },
    {
      role: "Medical Volunteer",
      skills: "Healthcare background, compassion",
      time: "Monthly clinics"
    }
  ];

  const donationImpacts = [
    { amount: "$30", impact: "Sponsors one orphan's monthly education and care" },
    { amount: "$50", impact: "Supports one widow's monthly empowerment program" },
    { amount: "$100", impact: "Provides emergency relief to one family for a month" },
    { amount: "$250", impact: "Funds vocational training for one widow" },
    { amount: "$500", impact: "Supports community development project materials" },
    { amount: "$1,000", impact: "Sponsors a mobile medical clinic for one month" }
  ];

  const fundraisingIdeas = [
    {
      title: "Charity Walk/Run",
      description: "Organize a 5K run or charity walk in your community",
      potential: "$2,000-$10,000"
    },
    {
      title: "Benefit Dinner",
      description: "Host a dinner with testimonials and silent auction",
      potential: "$5,000-$25,000"
    },
    {
      title: "Bake Sale",
      description: "Coordinate bake sales at churches, schools, or offices",
      potential: "$500-$2,000"
    },
    {
      title: "Birthday Fundraiser",
      description: "Ask friends to donate to TMN instead of birthday gifts",
      potential: "$200-$1,500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Get Involved & Make a Difference
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Join us in extending God's tender mercy to widows and orphans. Your prayers, time, talents, and resources 
              can transform lives and reflect Christ's love to the vulnerable.
            </p>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ways to Get Involved</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether through giving, volunteering, or partnering, there's a meaningful way for you to join our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {involvementOptions.map((option, index) => (
                <Card key={index} className={`${option.bgColor} shadow-soft border-2 border-primary/10 hover:shadow-strong transition-all duration-300 group`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`${option.color} bg-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                        <option.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl text-primary">{option.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{option.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Commitment:</span>
                        <Badge variant="secondary" className={`${option.color} bg-white`}>
                          {option.commitment}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Impact:</span>
                        <span className="text-sm text-muted-foreground">{option.impact}</span>
                      </div>
                    </div>
                    <Button className={`w-full ${option.color.replace('text-', 'bg-')} text-white hover:opacity-90`}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Make a Donation</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Your financial support directly funds life-changing programs for widows and orphans. 
                  See exactly how your donation makes a difference.
                </p>

                <div className="space-y-4 mb-8">
                  {donationImpacts.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/80 p-4 rounded-lg">
                      <div className="bg-gradient-warm text-white font-bold px-3 py-2 rounded-lg min-w-[80px] text-center">
                        {item.amount}
                      </div>
                      <span className="text-muted-foreground">{item.impact}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-involved">
                    <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Calendar className="w-5 h-5 mr-2" />
                    Set Up Monthly Giving
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={donationsImage}
                  alt="Hands holding donations representing the impact of giving"
                  className="w-full h-96 object-cover rounded-2xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Every Gift Matters</h3>
                  <p className="text-lg opacity-90">85% of donations go directly to programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src={volunteersImage}
                  alt="Volunteers working with community members"
                  className="w-full h-96 object-cover rounded-2xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Serve with Purpose</h3>
                  <p className="text-lg opacity-90">Use your skills to transform lives</p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Volunteer Opportunities</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Join our team of dedicated volunteers and use your skills, passion, and time to serve 
                  widows and orphans with Christ's love.
                </p>

                <div className="space-y-4 mb-8">
                  {volunteerRoles.slice(0, 4).map((role, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-primary">{role.role}</h4>
                        <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal">
                          {role.time}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{role.skills}</p>
                    </Card>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-warm text-white shadow-glow w-full sm:w-auto">
                      <Users className="w-5 h-5 mr-2" />
                      Apply to Volunteer
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Calendar className="w-5 h-5 mr-2" />
                    Attend Info Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Partnership Opportunities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Churches, businesses, and organizations can partner with us to multiply impact and reach more communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-warm p-4 rounded-xl mx-auto mb-4 w-fit">
                    <Church className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Church Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 shrink-0"></div>
                      <span>Host "Widows & Orphans Sunday" campaigns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 shrink-0"></div>
                      <span>Organize mission trips and volunteer teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 shrink-0"></div>
                      <span>Sponsor specific programs or communities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-warm p-4 rounded-xl mx-auto mb-4 w-fit">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Corporate Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 shrink-0"></div>
                      <span>Employee giving and matching gift programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 shrink-0"></div>
                      <span>In-kind donations and supply drives</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 shrink-0"></div>
                      <span>Skills-based volunteering initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-warm p-4 rounded-xl mx-auto mb-4 w-fit">
                    <HandHeart className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Community Groups</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Fundraising events and awareness campaigns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Educational presentations and outreach</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Adopt-a-program sponsorship opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fundraising Ideas */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Fundraising Ideas</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get creative in raising funds for our mission. Here are some proven ideas to get you started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fundraisingIdeas.map((idea, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-warm p-3 rounded-xl shrink-0">
                        <Gift className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-2">{idea.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{idea.description}</p>
                        <Badge variant="secondary" className="bg-green-50 text-green-600">
                          Potential: {idea.potential}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Next Steps */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Contact us to discuss how you can best contribute to our mission of serving widows and orphans.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft text-center p-8">
                <Mail className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@tendermercynetwork.org</p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft text-center p-8">
                <Phone className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground">+254 725 252 412</p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft text-center p-8">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Visit Online</h3>
                <p className="text-muted-foreground">www.tendermercynetwork.org</p>
              </Card>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Making a Difference
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule a Consultation
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

export default GetInvolvedPage;