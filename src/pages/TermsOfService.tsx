import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Tender Mercy Network. By accessing or using our website, making donations, volunteering, or engaging with our services in any way, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, please do not use our services. These Terms reflect our commitment to operating with integrity and transparency in accordance with our Christian values and nonprofit mission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">About Tender Mercy Network</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tender Mercy Network is a registered Christian nonprofit organization dedicated to caring for widows and orphans in Kenya. We operate under Kenyan law and international nonprofit standards. Our mission is rooted in the biblical mandate found in James 1:27: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Our Website</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Permitted Use</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use our website for lawful purposes only, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Learning about our mission, programs, and impact</li>
                <li>Making charitable donations to support our work</li>
                <li>Applying to volunteer or partner with us</li>
                <li>Accessing resources, newsletters, and updates</li>
                <li>Contacting us for information or support</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Prohibited Use</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use our website for any unlawful purpose or in violation of these Terms</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the operation of our website</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Impersonate Tender Mercy Network or our representatives</li>
                <li>Harvest or collect information about users without consent</li>
                <li>Use our content, images, or materials without permission</li>
                <li>Engage in fraudulent activities or misrepresent donations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Donations</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Donation Policy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All donations made to Tender Mercy Network are:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Voluntary:</strong> Made freely without coercion or undue influence</li>
                <li><strong>Non-refundable:</strong> Once processed, donations cannot be refunded except in cases of processing errors or fraud</li>
                <li><strong>Tax-deductible:</strong> Eligible for tax deduction to the extent allowed by law (official receipts provided)</li>
                <li><strong>Unrestricted:</strong> Unless designated for a specific program, donations support our general operations and mission</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Use of Donations</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to stewardship and transparency in using donations. While we honor donor intent and preferences, we reserve the right to redirect funds if a specific program is overfunded, discontinued, or circumstances change. We will make reasonable efforts to use restricted donations as specified, but retain discretion in allocation to best serve our mission and beneficiaries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on our website, including text, images, logos, videos, graphics, and software, is the property of Tender Mercy Network or our licensors and is protected by copyright, trademark, and other intellectual property laws. Our logo, name, and branding are protected trademarks.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Limited License</h3>
              <p className="text-muted-foreground leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may share our content on social media or link to our website, but you may not reproduce, distribute, modify, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User-Generated Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you submit testimonials, prayer requests, comments, photos, or other content to us, you grant Tender Mercy Network a worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content for our ministry purposes, including fundraising, awareness, and program promotion. You represent that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You own or have the right to submit the content</li>
                <li>The content does not violate any third-party rights</li>
                <li>The content is accurate and not misleading</li>
                <li>You consent to our use of the content as described</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Volunteer Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you volunteer with Tender Mercy Network:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You acknowledge that volunteering is unpaid and at-will</li>
                <li>You agree to comply with our volunteer policies and code of conduct</li>
                <li>You consent to necessary background checks and screening</li>
                <li>You understand that we may terminate your volunteer relationship at any time</li>
                <li>You agree to maintain confidentiality of beneficiary information</li>
                <li>You will conduct yourself in a manner consistent with our Christian values</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Website Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our website is provided "as is" without warranties of any kind. We do not guarantee that our website will be uninterrupted, error-free, or secure. We reserve the right to modify, suspend, or discontinue any aspect of our website at any time without notice.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Tender Mercy Network, its directors, officers, staff, and volunteers shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount of donations you have made to us in the past 12 months.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Third-Party Links</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of service of these external sites. Your use of third-party websites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Tender Mercy Network and its representatives from any claims, damages, losses, or expenses (including legal fees) arising from your violation of these Terms, your use of our website, or your infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these Terms or your use of our services shall be resolved through:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Good faith negotiation and mediation in accordance with Christian principles of reconciliation</li>
                <li>If mediation fails, arbitration in Nairobi, Kenya under Kenyan arbitration law</li>
                <li>As a last resort, the courts of Kenya shall have exclusive jurisdiction</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Tender Mercy Network</p>
                <p className="text-muted-foreground">Email: info@tendermercynetwork.org</p>
                <p className="text-muted-foreground">Phone: +254 725 252 412</p>
                <p className="text-muted-foreground">Address: Nairobi, Kenya</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-muted-foreground italic">
                "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." — Colossians 3:23
              </p>
              <p className="text-muted-foreground mt-4">
                These Terms of Service reflect our commitment to operating with integrity, transparency, and excellence in service to God and the vulnerable populations we serve.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;