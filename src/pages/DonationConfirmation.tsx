import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Download,
  Mail,
  Share2,
  Heart,
  ArrowRight,
  FileText,
} from "lucide-react";

interface DonationData {
  firstName: string;
  lastName: string;
  email: string;
  amount: string;
  donationType: string;
  paymentMethod: string;
  transactionId: string;
  date: string;
}

const DonationConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const donationData = location.state as DonationData;

  useEffect(() => {
    // Redirect to donate page if no donation data
    if (!donationData) {
      navigate("/donate");
    }
  }, [donationData, navigate]);

  if (!donationData) {
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "I just donated to Tender Mercy Network!",
          text: "Join me in supporting widows and orphans in East Africa.",
          url: window.location.origin + "/donate",
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-subtle">
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Thank You for Your Generosity!
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your {donationData.donationType === "monthly" ? "monthly" : "one-time"} donation of{" "}
                <span className="font-bold text-primary">${donationData.amount}</span> will make a
                profound difference in the lives of widows and orphans.
              </p>
            </div>

            {/* Receipt Card */}
            <Card className="shadow-elegant mb-8">
              <CardHeader className="bg-gradient-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Donation Receipt
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* Receipt Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Donor Name</p>
                    <p className="font-semibold text-foreground">
                      {donationData.firstName} {donationData.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold text-foreground">{donationData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Transaction ID</p>
                    <p className="font-mono text-sm text-foreground">{donationData.transactionId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="font-semibold text-foreground">{donationData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Donation Type</p>
                    <p className="font-semibold text-foreground capitalize">
                      {donationData.donationType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
                    <p className="font-semibold text-foreground capitalize">
                      {donationData.paymentMethod}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Amount Summary */}
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Donation Amount</span>
                    <span className="text-2xl font-bold text-foreground">
                      ${donationData.amount}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This donation is tax-deductible to the extent allowed by law. Tax ID: XX-XXXXXXX
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" onClick={handlePrint} className="flex-1 min-w-[140px]">
                    <Download className="w-4 h-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button variant="outline" onClick={handleShare} className="flex-1 min-w-[140px]">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="shadow-elegant mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Confirmation</h3>
                      <p className="text-muted-foreground">
                        A detailed receipt has been sent to <strong>{donationData.email}</strong>.
                        Please check your inbox (and spam folder).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Impact Updates</h3>
                      <p className="text-muted-foreground">
                        You'll receive regular updates about how your donation is making a difference
                        in the lives of widows and orphans in East Africa.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Tax Documentation</h3>
                      <p className="text-muted-foreground">
                        At the end of the year, you'll receive a consolidated statement of all your
                        donations for tax purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Involved Further */}
            <Card className="shadow-elegant bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Want to Do More?</h3>
                <p className="mb-6 opacity-90">
                  There are many ways to support our mission beyond financial donations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="secondary"
                    asChild
                    size="lg"
                  >
                    <Link to="/get-involved">
                      Explore More Ways
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Link to="/programs">View Our Programs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center mt-8">
              <Button variant="ghost" asChild>
                <Link to="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DonationConfirmation;
