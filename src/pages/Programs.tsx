import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Building, 
  Utensils,
  Home,
  Stethoscope,
  Users,
  DollarSign,
  MessageCircle,
  Flower,
  CheckCircle,
  Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emergencyReliefImage from "@/assets/emergency-relief.jpg";
import widowsEmpowermentImage from "@/assets/widows-empowerment.jpg";
import childrenEducationImage from "@/assets/authentic-african-children.jpg";
import spiritualCareImage from "@/assets/spiritual-care.jpg";
import communityDevelopmentImage from "@/assets/community-development.jpg";

const ProgramsPage = () => {
  const programs = [
    {
      icon: Heart,
      title: "Emergency Relief Program",
      subtitle: "Immediate Aid for Acute Hardships",
      description: "Providing essential support to alleviate immediate suffering and crisis situations through comprehensive emergency assistance.",
      image: emergencyReliefImage,
      objective: "Provide immediate aid to alleviate acute hardships and crisis situations.",
      implementation: "Delivered through local church partnerships and mobile outreach teams across affected communities.",
      services: [
        { icon: Utensils, text: "Monthly food baskets with nutritious staples (rice, beans, oil)" },
        { icon: Home, text: "Temporary housing and rent subsidies for families at risk" },
        { icon: Stethoscope, text: "Mobile clinics offering free check-ups and medications" },
        { icon: Heart, text: "Emergency kits with hygiene supplies and clothing" }
      ],
      outcomes: [
        "Immediate relief to 150+ families monthly",
        "95% reduction in acute malnutrition cases",
        "100% coverage of emergency medical needs"
      ],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      bgColor: "bg-red-600"
    },
    {
      icon: Briefcase,
      title: "Widows Empowerment Initiative", 
      subtitle: "Building Financial Independence & Resilience",
      description: "Equipping widows with skills, resources, and support to achieve sustainable livelihoods and emotional healing.",
      image: widowsEmpowermentImage,
      objective: "Equip widows for financial independence and emotional resilience through comprehensive support programs.",
      implementation: "Partners with local vocational schools and microfinance institutions to provide holistic empowerment.",
      services: [
        { icon: Briefcase, text: "12-16 week vocational training courses in tailoring, baking, agriculture" },
        { icon: DollarSign, text: "Low-interest microfinance loans up to $500 for business startup" },
        { icon: MessageCircle, text: "Trauma-informed grief and financial literacy counseling" },
        { icon: Users, text: "Weekly support groups with peer support and Bible study" }
      ],
      outcomes: [
        "85% of graduates achieve sustainable income",
        "Average 60% increase in monthly earnings",
        "90% report improved emotional wellbeing"
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600", 
      bgColor: "bg-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Orphans Education & Care Program",
      subtitle: "Ensuring Access to Education & Nurturing",
      description: "Comprehensive support ensuring orphans receive quality education in nurturing environments with mentorship and care.",
      image: childrenEducationImage,
      objective: "Ensure orphans access quality education and nurturing environments that support their holistic development.",
      implementation: "Collaborates with schools, child welfare organizations, and trained foster families for comprehensive care.",
      services: [
        { icon: GraduationCap, text: "Full scholarships covering fees, uniforms, books, and transport" },
        { icon: Users, text: "Christian mentorship programs for academic and life guidance" },
        { icon: Home, text: "Foster care support with training and stipends for families" },
        { icon: BookOpen, text: "After-school tutoring and life skills development" }
      ],
      outcomes: [
        "90% school retention rate for sponsored orphans",
        "85% pass rate in national examinations",
        "100% placement in stable, loving homes"
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      bgColor: "bg-green-600"
    },
    {
      icon: BookOpen,
      title: "Spiritual Nurture Ministry",
      subtitle: "Deepening Faith & Building Community",
      description: "Fostering spiritual growth and community connections among beneficiaries through biblical teaching and pastoral care.",
      image: spiritualCareImage,
      objective: "Deepen faith and foster community among widows and orphans through spiritual growth and biblical foundation.",
      implementation: "Led by trained pastors and lay leaders from partner churches with culturally sensitive approaches.",
      services: [
        { icon: BookOpen, text: "Weekly Bible studies exploring hope, resilience, and God's love" },
        { icon: Flower, text: "Annual prayer retreats for spiritual renewal and worship" },
        { icon: Users, text: "Youth camps for orphans building faith and friendships" },
        { icon: MessageCircle, text: "One-on-one pastoral care and spiritual counseling" }
      ],
      outcomes: [
        "95% active participation in Bible studies",
        "Strong Christian community formation",
        "Measurable growth in hope and resilience"
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600"
    },
    {
      icon: Building,
      title: "Community Development Projects", 
      subtitle: "Creating Sustainable Infrastructure",
      description: "Building lasting infrastructure and community resources that support long-term development and sustainability.",
      image: communityDevelopmentImage,
      objective: "Create sustainable infrastructure to support widows and orphans while strengthening entire communities.",
      implementation: "Funded through grants and donor campaigns, built with local labor to ensure community ownership.",
      services: [
        { icon: Building, text: "Community centers for training, worship, and childcare services" },
        { icon: Utensils, text: "Agricultural cooperatives managed by widows for income generation" },
        { icon: Heart, text: "Clean water initiatives with wells and purification systems" },
        { icon: Users, text: "Local employment opportunities in construction and maintenance" }
      ],
      outcomes: [
        "5 community centers operational",
        "Clean water access for 2,000+ people",
        "300+ jobs created through projects"
      ],
      color: "bg-orange-50 border-orange-200", 
      iconColor: "text-orange-600",
      bgColor: "bg-orange-600"
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
              Our Programs & Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
              We offer comprehensive programs designed to address immediate needs while fostering long-term empowerment. 
              Each program integrates practical support with spiritual care, reflecting Christ's holistic love for the vulnerable.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {programs.map((program, index) => (
                <div key={index} className="animate-slide-up">
                  <Card className={`${program.color} shadow-soft border-2 hover:shadow-strong transition-all duration-300 overflow-hidden`}>
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className={`relative h-80 lg:h-full ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                        <img 
                          src={program.image}
                          alt={`${program.title} - showing our work in action`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/50 lg:to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                        <CardHeader className="p-0 pb-6">
                          <div className="flex items-start space-x-4">
                            <div className={`${program.bgColor} p-4 rounded-xl shrink-0 hover:scale-110 transition-transform duration-300`}>
                              <program.icon className="w-10 h-10 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-3xl md:text-4xl text-primary mb-3">
                                {program.title}
                              </CardTitle>
                              <p className={`font-semibold ${program.iconColor} text-lg mb-4`}>
                                {program.subtitle}
                              </p>
                              <p className="text-muted-foreground text-lg leading-relaxed">
                                {program.description}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          {/* Objective */}
                          <div className="mb-6">
                            <div className="flex items-center space-x-2 mb-3">
                              <Target className={`w-5 h-5 ${program.iconColor}`} />
                              <h4 className="font-bold text-lg text-foreground">Objective</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{program.objective}</p>
                          </div>

                          {/* Services */}
                          <div className="mb-6">
                            <h4 className="font-bold text-lg text-foreground mb-4">Key Services</h4>
                            <div className="grid gap-3">
                              {program.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="flex items-start space-x-3 bg-white/70 p-4 rounded-lg">
                                  <div className={`${program.iconColor} shrink-0 mt-0.5`}>
                                    <service.icon className="w-5 h-5" />
                                  </div>
                                  <span className="text-sm font-medium text-foreground leading-relaxed">{service.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Outcomes */}
                          <div className="mb-8">
                            <h4 className="font-bold text-lg text-foreground mb-4">Program Outcomes</h4>
                            <div className="space-y-2">
                              {program.outcomes.map((outcome, outcomeIndex) => (
                                <div key={outcomeIndex} className="flex items-center space-x-2">
                                  <CheckCircle className={`w-4 h-4 ${program.iconColor} shrink-0`} />
                                  <span className="text-sm text-muted-foreground">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Implementation */}
                          <div className="p-4 bg-white/50 rounded-lg mb-6">
                            <h4 className="font-bold text-sm text-foreground mb-2">Implementation Strategy</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{program.implementation}</p>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                              variant="outline" 
                              className={`border-current ${program.iconColor} hover:bg-current hover:text-white`}
                            >
                              Learn More Details
                            </Button>
                            <Button 
                              className={`${program.bgColor} text-white hover:opacity-90`}
                            >
                              <Heart className="w-4 h-4 mr-2" />
                              Support This Program
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Program Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See the measurable difference our programs make in the lives of widows and orphans.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft text-center p-8">
                <div className="text-4xl font-bold text-brand-teal mb-2">200</div>
                <div className="text-lg font-semibold text-primary mb-2">Widows Empowered</div>
                <div className="text-muted-foreground">Currently receiving support and training</div>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft text-center p-8">
                <div className="text-4xl font-bold text-brand-orange mb-2">500</div>
                <div className="text-lg font-semibold text-primary mb-2">Orphans Cared For</div>
                <div className="text-muted-foreground">In education and mentorship programs</div>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft text-center p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-lg font-semibold text-primary mb-2">Success Rate</div>
                <div className="text-muted-foreground">Program graduates achieving independence</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center bg-gradient-gentle p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Transform Lives Through Our Programs
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every donation directly funds these life-changing programs. See how your support creates lasting impact 
                in the lives of widows and orphans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
                  <Heart className="w-5 h-5 mr-2" />
                  Support All Programs
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer With Us
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

export default ProgramsPage;