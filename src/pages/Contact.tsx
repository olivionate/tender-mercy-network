import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  Heart,
  Users,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@tendermercynetwork.org",
      secondary: "For general inquiries and information",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+254 725 252 412",
      secondary: "Monday - Friday, 8:00 AM - 5:00 PM EAT",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Nairobi, Kenya",
      secondary: "Headquarters with regional hubs planned",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Website",
      primary: "www.tendermercynetwork.org",
      secondary: "Online resources and donation portal",
      color: "text-purple-600"
    }
  ];

  const departmentContacts = [
    {
      department: "Program Inquiries",
      email: "programs@tendermercynetwork.org",
      description: "Questions about our widows and orphans programs"
    },
    {
      department: "Volunteer Coordination",
      email: "volunteer@tendermercynetwork.org",
      description: "Information about volunteer opportunities"
    },
    {
      department: "Donations & Sponsorship",
      email: "giving@tendermercynetwork.org",
      description: "Donation questions and sponsorship programs"
    },
    {
      department: "Partnership Opportunities",
      email: "partnerships@tendermercynetwork.org",
      description: "Church and corporate partnership inquiries"
    },
    {
      department: "Media & Press",
      email: "media@tendermercynetwork.org",
      description: "Press releases and media kit requests"
    }
  ];

  const socialMediaLinks = [
    { platform: "Facebook", handle: "@TenderMercyNet", icon: Facebook, color: "text-blue-600" },
    { platform: "Twitter/X", handle: "@TenderMercyNet", icon: Twitter, color: "text-blue-400" },
    { platform: "Instagram", handle: "@TenderMercyNet", icon: Instagram, color: "text-pink-600" }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM EAT" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM EAT" },
    { day: "Sunday", hours: "Closed (Emergency only)" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              We'd love to hear from you! Whether you have questions about our programs, want to get involved, 
              or need assistance, we're here to help connect you with our mission.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multiple ways to reach us for any questions, partnership opportunities, or support needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className={`${method.color} bg-gray-50 p-4 rounded-xl mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">{method.primary}</p>
                    <p className="text-sm text-muted-foreground">{method.secondary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours during business days.
                </p>

                <Card className="bg-white/80 backdrop-blur-sm shadow-soft">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Your last name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+254 xxx xxx xxx" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="What is this regarding?" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us how we can help you..." 
                          className="min-h-[120px]" 
                          required 
                        />
                      </div>

                      <Button size="lg" className="w-full bg-gradient-warm text-white shadow-glow">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Information */}
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Office Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is available during regular business hours to assist with your inquiries.
                </p>

                {/* Office Hours */}
                <Card className="bg-white/80 backdrop-blur-sm shadow-soft mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                      <Clock className="w-6 h-6" />
                      <span>Office Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <span className="font-medium text-foreground">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="bg-red-50 border-red-200 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 p-3 rounded-xl shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Contact</h3>
                        <p className="text-red-700 mb-2">
                          For urgent matters outside office hours, please call our emergency line.
                        </p>
                        <p className="font-semibold text-red-800">+254 700 000 000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Department Contacts</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reach out directly to specific departments for faster, more targeted assistance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentContacts.map((dept, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-warm p-3 rounded-xl shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-2">{dept.department}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                        <a 
                          href={`mailto:${dept.email}`}
                          className="text-brand-teal font-medium hover:underline"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-gradient-gentle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Follow Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay connected with our mission through social media for updates, testimonies, and ways to get involved.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {socialMediaLinks.map((social, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-strong transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className={`${social.color} bg-gray-50 p-4 rounded-xl mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{social.platform}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{social.handle}</p>
                    <Button variant="outline" className={`border-current ${social.color} hover:bg-current hover:text-white`}>
                      Follow Us
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Join our online community and see the daily impact of God's tender mercy in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-warm text-white shadow-glow w-full sm:w-auto">
                    <Heart className="w-5 h-5 mr-2" />
                    Subscribe to Updates
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join Our Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Card className="bg-gradient-gentle shadow-soft max-w-4xl mx-auto text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Have Questions?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Check out our frequently asked questions or reach out directly. We're here to help 
                  you understand our mission and find the best way to get involved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    View FAQ
                  </Button>
                  <Button size="lg" className="bg-gradient-warm text-white shadow-glow">
                    <Users className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;