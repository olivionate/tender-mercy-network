import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Compass, Home, Sun } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Emulating Christ's love by meeting physical, emotional, and spiritual needs with empathy."
    },
    {
      icon: Shield,
      title: "Faith", 
      description: "Grounding all actions in trust in God's provision and guidance."
    },
    {
      icon: Users,
      title: "Dignity",
      description: "Honoring the inherent worth of every individual as created in God's image."
    },
    {
      icon: Compass,
      title: "Stewardship",
      description: "Responsibly managing resources to maximize impact for those we serve."
    },
    {
      icon: Home,
      title: "Community",
      description: "Fostering connections to build supportive networks for widows and orphans."
    },
    {
      icon: Sun,
      title: "Hope",
      description: "Inspiring resilience and faith in God's promises for a brighter future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-gentle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Heart & Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2012, Tender Mercy Network is a Christian charity committed to extending God's love 
            and compassion to those who need it most - widows and orphans around the world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <Card className="bg-white shadow-soft border-0 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-teal/10 p-3 rounded-full mr-4">
                  <Heart className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                Tender Mercy Network is committed to providing holistic care, support, and empowerment to widows 
                and orphans in need. Rooted in the biblical call to "care for the widow and the fatherless" (James 1:27), 
                we seek to offer practical aid, emotional support, and spiritual encouragement to restore hope and dignity.
              </p>
              <div className="bg-brand-teal/5 p-4 rounded-lg border-l-4 border-brand-teal">
                <p className="text-sm italic text-muted-foreground">
                  "Religion that God our Father accepts as pure and faultless is this: to look after orphans 
                  and widows in their distress and to keep oneself from being polluted by the world."
                </p>
                <cite className="text-xs font-medium text-brand-teal block mt-2">— James 1:27</cite>
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-white shadow-soft border-0 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-orange/10 p-3 rounded-full mr-4">
                  <Sun className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                To create a world where every widow and orphan experiences the tender mercy of God through 
                compassionate care, sustainable support, and a community of love that reflects Christ's heart 
                for the vulnerable.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  <span>Comprehensive care for physical and spiritual needs</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  <span>Sustainable empowerment programs</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  <span>Christ-centered community building</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These foundational principles guide every program, decision, and interaction in our ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-soft border-0 hover:shadow-strong transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <value.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organization Overview */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-soft animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Organization Overview</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-teal mb-2">Founded & Leadership</h4>
                  <p className="text-muted-foreground">
                    Established in 2012 and headquartered in Nairobi, Kenya, we are governed by a Board of Directors 
                    with diverse expertise in ministry, social work, and nonprofit management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-teal mb-2">Mission Focus</h4>
                  <p className="text-muted-foreground">
                    As a non-denominational Christian organization, we collaborate with churches, ministries, 
                    and community organizations to amplify our impact and reach more families in need.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-teal mb-2">Growth & Vision</h4>
                  <p className="text-muted-foreground">
                    With plans for regional hubs, we aim to serve communities both locally and globally, 
                    creating sustainable change in the lives of widows and orphans.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-gentle p-6 rounded-xl">
                <h4 className="font-semibold text-brand-orange mb-4">Biblical Foundation</h4>
                <div className="space-y-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-muted-foreground mb-2">
                      "A father to the fatherless, a defender of widows, is God in his holy dwelling."
                    </p>
                    <cite className="text-xs font-medium text-brand-teal">— Psalm 68:5</cite>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-muted-foreground mb-2">
                      "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow."
                    </p>
                    <cite className="text-xs font-medium text-brand-teal">— Isaiah 1:17</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;