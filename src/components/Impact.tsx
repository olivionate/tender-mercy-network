import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Target, 
  MapPin, 
  Calendar,
  DollarSign,
  Award,
  Globe,
  Home
} from "lucide-react";

const Impact = () => {
  const currentStats = [
    {
      icon: Users,
      number: "200",
      label: "Widows Empowered",
      description: "Currently receiving support and training",
      color: "text-brand-teal"
    },
    {
      icon: Heart,
      number: "500", 
      label: "Orphans Cared For",
      description: "In education and mentorship programs",
      color: "text-brand-orange"
    },
    {
      icon: Home,
      number: "15",
      label: "Support Groups",
      description: "Active community circles across regions",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      number: "60%",
      label: "Income Increase",
      description: "Average improvement for program graduates",
      color: "text-green-600"
    }
  ];

  const shortTermGoals = [
    { goal: "Serve 200 widows with direct aid", progress: 87, year: "2025" },
    { goal: "Support 500 orphans in education", progress: 76, year: "2025" },
    { goal: "Train 200 widows in vocational skills", progress: 65, year: "2026" },
    { goal: "Build 2 community centers", progress: 40, year: "2027" }
  ];

  const longTermVision = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operate in 10 countries serving 20,000 widows and 50,000 orphans by 2035"
    },
    {
      icon: TrendingUp,
      title: "Poverty Reduction", 
      description: "Reduce poverty rates among beneficiaries by 50% through empowerment programs"
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Establish as a global leader in Christian care for widows and orphans"
    }
  ];

  const achievements = [
    { year: "2012", milestone: "Organization Founded", location: "Nairobi, Kenya" },
    { year: "2015", milestone: "First 100 Widows Served", location: "Kenya" },
    { year: "2018", milestone: "Educational Program Launch", location: "Kenya & Uganda" },
    { year: "2020", milestone: "1,000th Orphan Enrolled", location: "East Africa" },
    { year: "2022", milestone: "Microfinance Program Expansion", location: "3 Countries" },
    { year: "2024", milestone: "Community Centers Opening", location: "Kenya & Malawi" }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-gentle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Impact & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measuring success through transformed lives, sustainable empowerment, and growing communities of hope. 
            See how God is working through Tender Mercy Network to create lasting change.
          </p>
        </div>

        {/* Current Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {currentStats.map((stat, index) => (
            <Card key={index} className="bg-white shadow-soft border-0 text-center animate-slide-up group hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className={`${stat.color} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Short-term Goals Progress */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Short-Term Goals Progress</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tracking our commitment to expand services and reach more families in need across East Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {shortTermGoals.map((item, index) => (
              <Card key={index} className="bg-white shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-primary">{item.goal}</h4>
                    <Badge variant="outline" className="text-brand-orange border-brand-orange">
                      {item.year}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-brand-teal">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Long-term Vision */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Long-Term Vision (2031-2035)</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our ambitious goals for creating sustainable, global impact in the lives of widows and orphans.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {longTermVision.map((vision, index) => (
              <Card key={index} className="bg-white shadow-soft border-0 text-center group hover:shadow-strong transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-teal/20 transition-colors">
                    <vision.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    {vision.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {vision.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline of Achievements */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Journey of Impact</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to serve widows and orphans with Christ's love.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-teal/20"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative flex items-center space-x-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center shadow-soft">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 bg-white shadow-soft border-0">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="text-2xl font-bold text-brand-orange mb-2">
                            {achievement.year}
                          </div>
                          <h4 className="text-lg font-semibold text-primary mb-2">
                            {achievement.milestone}
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            {achievement.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-primary rounded-2xl p-8 text-white animate-fade-in">
          <Target className="w-16 h-16 text-brand-orange mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Be Part of Our Growing Impact
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Every donation, every volunteer hour, every prayer contributes to these transformative results. 
            Join us in creating lasting change in the lives of widows and orphans.
          </p>
          <div className="text-sm text-white/70">
            "But God chose the foolish things of the world to shame the wise; God chose the weak things 
            of the world to shame the strong." — 1 Corinthians 1:27
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;