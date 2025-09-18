import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Flower
} from "lucide-react";
import emergencyReliefImage from "@/assets/emergency-relief.jpg";
import widowsEmpowermentImage from "@/assets/widows-empowerment.jpg";
import childrenEducationImage from "@/assets/children-education.jpg";
import spiritualCareImage from "@/assets/spiritual-care.jpg";
import communityDevelopmentImage from "@/assets/community-development.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: "Emergency Relief Program",
      subtitle: "Immediate Aid for Acute Hardships",
      description: "Providing essential support to alleviate immediate suffering and crisis situations.",
      image: emergencyReliefImage,
      services: [
        { icon: Utensils, text: "Monthly food baskets with nutritious staples" },
        { icon: Home, text: "Temporary housing and rent subsidies" },
        { icon: Stethoscope, text: "Mobile clinics and basic medical care" },
        { icon: Heart, text: "Emergency kits with hygiene supplies" }
      ],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      bgColor: "bg-red-600"
    },
    {
      icon: Briefcase,
      title: "Widows Empowerment Initiative", 
      subtitle: "Building Financial Independence & Resilience",
      description: "Equipping widows with skills, resources, and support to achieve sustainable livelihoods.",
      image: widowsEmpowermentImage,
      services: [
        { icon: Briefcase, text: "12-16 week vocational training courses" },
        { icon: DollarSign, text: "Microfinance loans up to $500" },
        { icon: MessageCircle, text: "Trauma-informed counseling services" },
        { icon: Users, text: "Weekly support groups and Bible study" }
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600", 
      bgColor: "bg-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Orphans Education & Care Program",
      subtitle: "Ensuring Access to Education & Nurturing",
      description: "Comprehensive support to ensure orphans receive quality education and caring environments.",
      image: childrenEducationImage,
      services: [
        { icon: GraduationCap, text: "Full scholarships covering fees, uniforms, books" },
        { icon: Users, text: "Christian mentorship programs" },
        { icon: Home, text: "Foster care support and training" },
        { icon: BookOpen, text: "After-school tutoring and activities" }
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      bgColor: "bg-green-600"
    },
    {
      icon: BookOpen,
      title: "Spiritual Nurture Ministry",
      subtitle: "Deepening Faith & Building Community",
      description: "Fostering spiritual growth and community connections among widows and orphans.",
      image: spiritualCareImage,
      services: [
        { icon: BookOpen, text: "Weekly Bible studies on hope and resilience" },
        { icon: Flower, text: "Annual prayer retreats and renewal" },
        { icon: Users, text: "Youth camps for orphans" },
        { icon: MessageCircle, text: "One-on-one pastoral care and counseling" }
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600"
    },
    {
      icon: Building,
      title: "Community Development Projects", 
      subtitle: "Creating Sustainable Infrastructure",
      description: "Building lasting infrastructure to support widows and orphans in their communities.",
      image: communityDevelopmentImage,
      services: [
        { icon: Building, text: "Community centers for training and worship" },
        { icon: Utensils, text: "Agricultural cooperatives for income generation" },
        { icon: Heart, text: "Clean water initiatives and purification systems" },
        { icon: Users, text: "Local labor employment opportunities" }
      ],
      color: "bg-orange-50 border-orange-200", 
      iconColor: "text-orange-600",
      bgColor: "bg-orange-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Programs & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive programs designed to address immediate needs while fostering long-term empowerment. 
            Each program integrates practical support with spiritual care, reflecting Christ's holistic love.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <Card key={index} className={`${program.color} shadow-soft border-2 animate-slide-up group hover:shadow-strong transition-all duration-300 overflow-hidden`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={program.image}
                    alt={`${program.title} - showing our work in action`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/50 lg:to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                    <h4 className="font-semibold text-lg">{program.title}</h4>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`${program.bgColor} p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl text-primary mb-2">
                          {program.title}
                        </CardTitle>
                        <p className={`font-semibold ${program.iconColor} mb-3`}>
                          {program.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {program.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-3 bg-white/50 p-4 rounded-lg">
                          <div className={`${program.iconColor} shrink-0`}>
                            <service.icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{service.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-white/50">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant="outline" 
                          className={`border-current ${program.iconColor} hover:bg-current hover:text-white`}
                        >
                          Learn More
                        </Button>
                        <Button 
                          className={`${program.bgColor} text-white hover:opacity-90`}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          Support This Program
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-gentle p-8 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Transform Lives Through Our Programs
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every donation directly funds these life-changing programs. See how your support creates lasting impact 
            in the lives of widows and orphans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
              <Heart className="w-5 h-5 mr-2" />
              Donate to All Programs
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Users className="w-5 h-5 mr-2" />
              Volunteer With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;