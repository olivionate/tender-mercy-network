import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  CreditCard, 
  Building2, 
  Smartphone,
  Heart,
  Shield,
  CheckCircle2,
  Globe,
  Lock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DonatePage = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const predefinedAmounts = [
    { value: "30", label: "$30", description: "Sponsor one orphan's education" },
    { value: "50", label: "$50", description: "Support one widow's empowerment" },
    { value: "100", label: "$100", description: "Emergency relief for one family" },
    { value: "250", label: "$250", description: "Fund vocational training" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: "Your donation is being processed. Thank you for your generosity!",
    });
  };

  const selectedAmount = customAmount || amount;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20">
          <div className="container mx-auto px-6 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your generous donation provides hope, care, and transformation to widows and orphans in East Africa.
            </p>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 bg-background border-y">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>85% Goes Directly to Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>Tax-Deductible</span>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl">Complete Your Donation</CardTitle>
                    <CardDescription>Choose your donation type and payment method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Donation Type */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold">Donation Type</Label>
                        <RadioGroup value={donationType} onValueChange={setDonationType}>
                          <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary">
                            <RadioGroupItem value="one-time" id="one-time" />
                            <Label htmlFor="one-time" className="flex-1 cursor-pointer">
                              <div className="font-semibold">One-Time Donation</div>
                              <div className="text-sm text-muted-foreground">Make a single gift today</div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <Label htmlFor="monthly" className="flex-1 cursor-pointer">
                              <div className="font-semibold">Monthly Donation</div>
                              <div className="text-sm text-muted-foreground">Provide consistent support</div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Amount Selection */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold">Select Amount</Label>
                        <div className="grid grid-cols-2 gap-4">
                          {predefinedAmounts.map((preset) => (
                            <button
                              key={preset.value}
                              type="button"
                              onClick={() => {
                                setAmount(preset.value);
                                setCustomAmount("");
                              }}
                              className={`p-4 border-2 rounded-lg text-left transition-all ${
                                amount === preset.value && !customAmount
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="text-2xl font-bold text-foreground">{preset.label}</div>
                              <div className="text-sm text-muted-foreground mt-1">{preset.description}</div>
                            </button>
                          ))}
                        </div>
                        <div>
                          <Label htmlFor="custom-amount">Or Enter Custom Amount</Label>
                          <div className="relative mt-2">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="custom-amount"
                              type="number"
                              min="1"
                              placeholder="Enter amount"
                              className="pl-8"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold">Payment Method</Label>
                        <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="card">
                              <CreditCard className="w-4 h-4 mr-2" />
                              Card
                            </TabsTrigger>
                            <TabsTrigger value="bank">
                              <Building2 className="w-4 h-4 mr-2" />
                              Bank
                            </TabsTrigger>
                            <TabsTrigger value="mobile">
                              <Smartphone className="w-4 h-4 mr-2" />
                              Mobile
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="card" className="space-y-4 mt-6">
                            <div className="space-y-2">
                              <Label htmlFor="card-number">Card Number</Label>
                              <Input id="card-number" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="card-name">Cardholder Name</Label>
                              <Input id="card-name" placeholder="John Doe" />
                            </div>
                          </TabsContent>

                          <TabsContent value="bank" className="space-y-4 mt-6">
                            <div className="space-y-2">
                              <Label htmlFor="account-name">Account Holder Name</Label>
                              <Input id="account-name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="account-number">Account Number</Label>
                              <Input id="account-number" placeholder="1234567890" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="routing">Routing Number</Label>
                              <Input id="routing" placeholder="123456789" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="bank-name">Bank Name</Label>
                              <Input id="bank-name" placeholder="Your Bank Name" />
                            </div>
                          </TabsContent>

                          <TabsContent value="mobile" className="space-y-4 mt-6">
                            <div className="space-y-2">
                              <Label>Select Mobile Payment Provider</Label>
                              <RadioGroup defaultValue="mpesa">
                                <div className="flex items-center space-x-2 border rounded-lg p-4">
                                  <RadioGroupItem value="mpesa" id="mpesa" />
                                  <Label htmlFor="mpesa" className="flex-1 cursor-pointer font-medium">
                                    M-Pesa
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-lg p-4">
                                  <RadioGroupItem value="airtel" id="airtel" />
                                  <Label htmlFor="airtel" className="flex-1 cursor-pointer font-medium">
                                    Airtel Money
                                  </Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="+254 700 000000" />
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      {/* Donor Information */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold">Your Information</Label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button type="submit" size="lg" className="w-full bg-gradient-warm text-white shadow-glow">
                        <Heart className="w-5 h-5 mr-2" />
                        Complete ${selectedAmount} {donationType === "monthly" ? "Monthly " : ""}Donation
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By proceeding, you agree to our terms and privacy policy. Your donation is tax-deductible to the extent allowed by law.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Impact Summary */}
              <div className="space-y-6">
                <Card className="shadow-elegant sticky top-6">
                  <CardHeader>
                    <CardTitle>Your Impact</CardTitle>
                    <CardDescription>Here's how your donation helps</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-6 bg-gradient-warm rounded-lg">
                      <div className="text-4xl font-bold text-white mb-2">
                        ${selectedAmount}
                      </div>
                      <div className="text-white/90">
                        {donationType === "monthly" ? "per month" : "one-time"}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-semibold">Direct Impact</div>
                          <div className="text-sm text-muted-foreground">85% goes to programs</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-semibold">Tax Receipt</div>
                          <div className="text-sm text-muted-foreground">Emailed immediately</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-semibold">Updates</div>
                          <div className="text-sm text-muted-foreground">Regular impact reports</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t text-sm text-muted-foreground">
                      <p className="mb-2 font-semibold text-foreground">Questions?</p>
                      <p>Contact us at donations@tendermercy.org or call +254 700 000000</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Your Security is Our Priority</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All transactions are encrypted and secure. We never store your complete payment information on our servers.
              Your generosity is handled with the utmost care and security.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DonatePage;
