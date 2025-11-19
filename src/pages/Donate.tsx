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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Validation schemas for different payment methods
const cardPaymentSchema = z.object({
  cardNumber: z.string().min(15, "Card number must be at least 15 digits").max(19, "Card number is too long"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date format (MM/YY)"),
  cvv: z.string().min(3, "CVV must be 3 or 4 digits").max(4, "CVV must be 3 or 4 digits"),
  cardholderName: z.string().min(2, "Cardholder name is required").max(100, "Name is too long"),
});

const bankPaymentSchema = z.object({
  accountHolderName: z.string().min(2, "Account holder name is required").max(100, "Name is too long"),
  accountNumber: z.string().min(8, "Account number must be at least 8 digits").max(17, "Account number is too long"),
  routingNumber: z.string().min(9, "Routing number must be 9 digits").max(9, "Routing number must be 9 digits"),
  bankName: z.string().min(2, "Bank name is required").max(100, "Bank name is too long"),
});

const mobilePaymentSchema = z.object({
  mobileProvider: z.enum(["mpesa", "airtel"], { required_error: "Please select a mobile payment provider" }),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
});

const donorInfoSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
});

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

  // Dynamic schema based on payment method
  const getFormSchema = () => {
    let paymentSchema;
    if (paymentMethod === "card") {
      paymentSchema = cardPaymentSchema;
    } else if (paymentMethod === "bank") {
      paymentSchema = bankPaymentSchema;
    } else {
      paymentSchema = mobilePaymentSchema;
    }
    return donorInfoSchema.merge(paymentSchema);
  };

  const form = useForm<z.infer<ReturnType<typeof getFormSchema>>>({
    resolver: zodResolver(getFormSchema()),
    mode: "onBlur",
  });

  const handleSubmit = (data: any) => {
    const selectedAmount = customAmount || amount;
    const donationAmount = parseFloat(selectedAmount);

    if (!donationAmount || donationAmount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount of at least $1.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Donation Successful! 🎉",
      description: `Thank you for your ${donationType === "monthly" ? "monthly" : "one-time"} donation of $${donationAmount}. You will receive a confirmation email shortly.`,
      duration: 6000,
    });

    // Reset form
    form.reset();
    setCustomAmount("");
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
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
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
                            <FormField
                              control={form.control}
                              name="cardNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Card Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="1234 5678 9012 3456" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="expiry"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Expiry Date</FormLabel>
                                    <FormControl>
                                      <Input placeholder="MM/YY" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="cvv"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>CVV</FormLabel>
                                    <FormControl>
                                      <Input placeholder="123" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormField
                              control={form.control}
                              name="cardholderName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Cardholder Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TabsContent>

                          <TabsContent value="bank" className="space-y-4 mt-6">
                            <FormField
                              control={form.control}
                              name="accountHolderName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Account Holder Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="accountNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Account Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="1234567890" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="routingNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Routing Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123456789" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="bankName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Bank Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your Bank Name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TabsContent>

                          <TabsContent value="mobile" className="space-y-4 mt-6">
                            <FormField
                              control={form.control}
                              name="mobileProvider"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Select Mobile Payment Provider</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="space-y-2"
                                    >
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
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phoneNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+254 700 000000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TabsContent>
                        </Tabs>
                      </div>

                      {/* Donor Information */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold">Your Information</Label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
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
                    </Form>
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
