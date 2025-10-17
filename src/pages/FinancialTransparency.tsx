import { ArrowLeft, PieChart, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinancialTransparency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Financial Transparency
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Transparency</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Tender Mercy Network, we believe that financial transparency is not just a best practice—it's a biblical mandate and moral imperative. As stewards of God's resources and public trust, we are committed to maintaining the highest standards of financial accountability, integrity, and transparency in all our operations. Every donation is a sacred trust, and we honor that trust by ensuring your gifts are used effectively and efficiently to serve widows and orphans.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-6">
                <p className="text-muted-foreground italic">
                  "Moreover, it is required of stewards that they be found faithful." — 1 Corinthians 4:2
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How Your Donations Are Used</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are committed to maximizing the impact of every dollar donated. Here's how your contributions are allocated:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 mr-4">
                      <PieChart className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">85% Program Services</h3>
                      <p className="text-muted-foreground text-sm">
                        Direct support for widows and orphans through emergency relief, education, empowerment, spiritual care, and community development programs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 mr-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">10% Fundraising</h3>
                      <p className="text-muted-foreground text-sm">
                        Donor communication, awareness campaigns, and fundraising activities to sustain and grow our impact.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 mr-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">5% Administration</h3>
                      <p className="text-muted-foreground text-sm">
                        Essential operational costs including accounting, legal compliance, technology, and organizational management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="bg-white/20 rounded-full p-3 mr-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">100% Accountability</h3>
                      <p className="text-sm opacity-90">
                        Every expense is tracked, documented, and regularly audited to ensure compliance and stewardship excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Financial Accountability Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tender Mercy Network adheres to rigorous financial accountability standards:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                <li><strong>Independent Audits:</strong> Annual financial audits conducted by certified independent auditors to verify accuracy and compliance</li>
                <li><strong>Board Oversight:</strong> Active board of directors with financial expertise providing governance and oversight</li>
                <li><strong>Internal Controls:</strong> Robust internal controls including dual authorization for expenditures, segregation of duties, and regular financial reviews</li>
                <li><strong>Transparent Reporting:</strong> Regular financial reports shared with donors, stakeholders, and the public</li>
                <li><strong>Regulatory Compliance:</strong> Full compliance with Kenyan nonprofit regulations and international charitable standards</li>
                <li><strong>Donor Privacy:</strong> Secure handling of donor information and financial data with strict confidentiality protocols</li>
                <li><strong>Budget Discipline:</strong> Careful budget planning, monitoring, and variance analysis to ensure fiscal responsibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Program Impact and Outcomes</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We measure success not just by dollars spent, but by lives transformed. Here's the impact your support creates:
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">2,500+</p>
                    <p className="text-muted-foreground">Widows and orphans served annually</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">850+</p>
                    <p className="text-muted-foreground">Children receiving education support</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">$127</p>
                    <p className="text-muted-foreground">Average cost per beneficiary per year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">45</p>
                    <p className="text-muted-foreground">Communities actively served in Kenya</p>
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-6 mt-6">
                  <h4 className="font-semibold text-foreground mb-4">Recent Program Achievements (2024):</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                      <span>Provided emergency food and medical relief to 1,200+ families facing crisis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                      <span>Enrolled 320 orphans in quality schools with full tuition, uniforms, and supplies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                      <span>Trained 180 widows in income-generating skills and small business development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                      <span>Distributed 2,800 food packages and 1,500 hygiene kits to vulnerable families</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                      <span>Provided spiritual counseling and pastoral care to 950+ individuals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Where Donations Come From</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our ministry is sustained by the generous support of individuals, churches, foundations, and organizations who share our vision. Revenue sources include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted p-5 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Individual Donors</p>
                  <p className="text-3xl font-bold text-primary mb-2">62%</p>
                  <p className="text-sm text-muted-foreground">One-time and recurring gifts from compassionate supporters</p>
                </div>
                <div className="bg-muted p-5 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Churches & Faith Communities</p>
                  <p className="text-3xl font-bold text-primary mb-2">23%</p>
                  <p className="text-sm text-muted-foreground">Partnership with congregations committed to orphan and widow care</p>
                </div>
                <div className="bg-muted p-5 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Grants & Foundations</p>
                  <p className="text-3xl font-bold text-primary mb-2">12%</p>
                  <p className="text-sm text-muted-foreground">Institutional funding from charitable foundations</p>
                </div>
                <div className="bg-muted p-5 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Other Sources</p>
                  <p className="text-3xl font-bold text-primary mb-2">3%</p>
                  <p className="text-sm text-muted-foreground">Corporate partnerships and fundraising events</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Financial Documents</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in radical transparency. The following financial documents are available upon request:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Annual Financial Statements (2023)</p>
                    <p className="text-sm text-muted-foreground">Complete audited financial statements including balance sheet, income statement, and cash flow</p>
                  </div>
                  <button className="ml-4 text-primary hover:text-primary/80 text-sm font-medium">
                    Request
                  </button>
                </div>
                <div className="flex items-center justify-between bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Independent Audit Report (2023)</p>
                    <p className="text-sm text-muted-foreground">Third-party audit verification and opinion letter</p>
                  </div>
                  <button className="ml-4 text-primary hover:text-primary/80 text-sm font-medium">
                    Request
                  </button>
                </div>
                <div className="flex items-center justify-between bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">IRS Form 990 (U.S. Donors)</p>
                    <p className="text-sm text-muted-foreground">Annual information return for tax-exempt organizations</p>
                  </div>
                  <button className="ml-4 text-primary hover:text-primary/80 text-sm font-medium">
                    Request
                  </button>
                </div>
                <div className="flex items-center justify-between bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Current Year Budget</p>
                    <p className="text-sm text-muted-foreground">Detailed budget breakdown by program and expense category</p>
                  </div>
                  <button className="ml-4 text-primary hover:text-primary/80 text-sm font-medium">
                    Request
                  </button>
                </div>
                <div className="flex items-center justify-between bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Program Impact Reports</p>
                    <p className="text-sm text-muted-foreground">Quarterly updates on program outcomes, metrics, and beneficiary stories</p>
                  </div>
                  <button className="ml-4 text-primary hover:text-primary/80 text-sm font-medium">
                    Request
                  </button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                To request any of these documents, please contact us at info@tendermercynetwork.org or call +254 725 252 412
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Donor Recognition and Stewardship</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We deeply value our donors and are committed to excellent stewardship of your partnership:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Immediate Receipts:</strong> Tax-deductible receipts issued within 48 hours of donation</li>
                <li><strong>Regular Updates:</strong> Quarterly newsletters with impact stories, program updates, and financial summaries</li>
                <li><strong>Personal Communication:</strong> Opportunities for personal engagement, site visits, and direct beneficiary communication</li>
                <li><strong>Donor Privacy:</strong> Your information is never sold, shared, or used for purposes beyond our ministry</li>
                <li><strong>Preference Respect:</strong> Honor your communication preferences and giving designations</li>
                <li><strong>Gratitude Culture:</strong> Genuine appreciation expressed through thank-you notes, calls, and recognition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions About Finances?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We welcome your questions about our finances, operations, or impact. Transparency builds trust, and trust strengthens partnership. Please don't hesitate to reach out:
              </p>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Our Finance Team</h3>
                <div className="space-y-3">
                  <p><strong>Email:</strong> finance@tendermercynetwork.org</p>
                  <p><strong>General Inquiries:</strong> info@tendermercynetwork.org</p>
                  <p><strong>Phone:</strong> +254 725 252 412</p>
                  <p><strong>Address:</strong> Nairobi, Kenya</p>
                </div>
                <p className="mt-6 text-sm opacity-90">
                  Our finance team is available Monday-Friday, 9:00 AM - 5:00 PM EAT. We typically respond to inquiries within 2 business days.
                </p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-muted-foreground italic mb-4">
                "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you." — Luke 6:38
              </p>
              <p className="text-muted-foreground">
                Thank you for entrusting us with your generous gifts. We are honored to be stewards of your compassion and committed to using every resource wisely to bring hope, healing, and transformation to widows and orphans in Jesus' name.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialTransparency;