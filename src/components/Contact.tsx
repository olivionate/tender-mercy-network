import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Globe,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+254 725 252 412",
      secondary: "Call us during business hours",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@tendermercynetwork.org",
      secondary: "We respond within 24 hours",
      color: "text-blue-600", 
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      primary: "Nairobi, Kenya",
      secondary: "Serving communities across East Africa",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Mon - Fri: 8:00 AM - 5:00 PM",
      secondary: "EAT (East Africa Time)",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      name: "Facebook", 
      handle: "@TenderMercyNet",
      color: "text-blue-600 hover:text-blue-700"
    },
    { 
      icon: Instagram, 
      name: "Instagram", 
      handle: "@TenderMercyNet",
      color: "text-pink-600 hover:text-pink-700"
    },
    { 
      icon: Twitter, 
      name: "Twitter/X", 
      handle: "@TenderMercyNet",
      color: "text-gray-800 hover:text-gray-900"
    },
    { 
      icon: Globe, 
      name: "Website", 
      handle: "www.tendermercynetwork.org",
      color: "text-brand-teal hover:text-brand-teal-dark"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact & Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you want to get involved, have questions about our programs, 
            or need prayer support, our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-white shadow-soft border-0 hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`${method.bgColor} p-3 rounded-xl shrink-0`}>
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {method.title}
                          </h4>
                          <p className="text-foreground font-medium mb-1">
                            {method.primary}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {method.secondary}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="animate-slide-up">
              <h3 className="text-xl font-bold text-primary mb-4">Follow Our Journey</h3>
              <p className="text-muted-foreground mb-6">
                Stay connected and see daily updates about the lives being transformed through your support.
              </p>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-gentle rounded-lg hover:bg-white hover:shadow-soft transition-all duration-300 cursor-pointer">
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                    <div>
                      <p className="font-medium text-primary">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-strong border-0 animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-teal/10 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Send Us a Message</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-primary">
                        First Name *
                      </Label>
                      <Input 
                        id="firstName"
                        placeholder="Your first name"
                        className="border-gray-200 focus:border-brand-teal focus:ring-brand-teal"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-primary">
                        Last Name *
                      </Label>
                      <Input 
                        id="lastName"
                        placeholder="Your last name"
                        className="border-gray-200 focus:border-brand-teal focus:ring-brand-teal"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-primary">
                      Email Address *
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-200 focus:border-brand-teal focus:ring-brand-teal"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-primary">
                      Subject *
                    </Label>
                    <Input 
                      id="subject"
                      placeholder="What is your message about?"
                      className="border-gray-200 focus:border-brand-teal focus:ring-brand-teal"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-primary">
                      Message *
                    </Label>
                    <Textarea 
                      id="message"
                      placeholder="Please share your questions, thoughts, or how you'd like to get involved..."
                      className="min-h-[120px] border-gray-200 focus:border-brand-teal focus:ring-brand-teal resize-none"
                      required
                    />
                  </div>

                  <div className="bg-gradient-gentle p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong className="text-primary">How can we help you today?</strong>
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></div>
                        Volunteer opportunities
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></div>
                        Donation questions
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></div>
                        Partnership inquiries
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></div>
                        Prayer requests
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold shadow-soft"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from Tender Mercy Network. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-primary rounded-2xl p-8 text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Don't wait to be part of God's work in the lives of widows and orphans. 
            Every action, no matter how small, creates ripples of hope and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;