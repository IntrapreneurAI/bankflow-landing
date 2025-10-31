import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  FileCheck, 
  Users, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Building2,
  Scale,
  Target
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bank: "",
    title: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send to your CRM/email
    console.log("Form submitted:", formData);
    
    toast.success("Thank you! We'll be in touch within 24 hours.");
    
    // Reset form
    setFormData({ name: "", email: "", bank: "", title: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">BankFlow.ai</span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">AI Governance for Community Banks</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Examiner-Ready AI Governance<br />
              <span className="text-blue-500">In 90 Days</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Regulators are watching. Banks are getting findings. You need AI governance that satisfies examiners without killing innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500">4,500+</div>
                <div className="text-sm text-muted-foreground mt-1">Banks Using AI</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500">90</div>
                <div className="text-sm text-muted-foreground mt-1">Days to Compliant</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Examiner-Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-muted-foreground font-medium">ELFA Member</div>
              <div className="text-muted-foreground font-medium">Insight Investments</div>
              <div className="text-muted-foreground font-medium">KLC Equipment Finance</div>
              <div className="text-muted-foreground font-medium">Consult Disrupt</div>
              <div className="text-muted-foreground font-medium">LeasePath</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Problem Every CRO Faces
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              You're using AI through vendors. Regulators expect governance. But you don't have the resources.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card text-card-foreground border-border">
                <Building2 className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Hidden AI Systems</h3>
                <p className="text-muted-foreground">
                  Your vendors use AI for fraud detection, credit scoring, and customer service. But can you document it?
                </p>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Scale className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Regulatory Pressure</h3>
                <p className="text-muted-foreground">
                  Federal Reserve, OCC, and CFPB have issued guidance. Examiners are asking. Banks are getting findings.
                </p>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Target className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Resource Constraints</h3>
                <p className="text-muted-foreground">
                  Big 4 consultants charge $500/hour. You don't have a model risk team. And you're already stretched thin.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Complete AI Governance in 90 Days
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              We build the framework. You get examiner-ready documentation. No disruption to operations.
            </p>

            <div className="space-y-8">
              {/* Month 1 */}
              <Card className="p-8 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Month 1: Discovery & Inventory</h3>
                    <p className="text-muted-foreground mb-4">
                      We identify every AI system you're using—vendor and internal. Risk-score each one. Build complete documentation.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Complete AI system inventory</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Vendor AI assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Risk tier assignments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Stakeholder interviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Month 2 */}
              <Card className="p-8 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Month 2: Due Diligence & Framework</h3>
                    <p className="text-muted-foreground mb-4">
                      We conduct vendor due diligence, establish model risk management, and test for fair lending compliance.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Vendor due diligence reports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Model risk framework (SR 11-7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Fair lending testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">AI governance policies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Month 3 */}
              <Card className="p-8 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Month 3: Documentation & Training</h3>
                    <p className="text-muted-foreground mb-4">
                      We package everything for examiners, present to your board, train your staff, and hand you a 12-month roadmap.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Examiner-ready documentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Board presentation & approval</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">Staff training (4 levels)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">12-month roadmap</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Complete AI governance program that satisfies regulators and enables innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card text-card-foreground border-border">
                <FileCheck className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Complete Documentation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>AI system inventory with risk tiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Vendor due diligence reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Model validation summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Fair lending test results</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Shield className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Governance Framework</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Board-approved AI governance policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Model risk management framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Third-party risk procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Ongoing monitoring plan</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Users className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Staff Training</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Level 1: All staff (AI awareness)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Level 2: AI users (responsible usage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Level 3: Risk team (governance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Level 4: Committee (strategic oversight)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <TrendingUp className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Ongoing Success</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>12-month roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Quarterly monitoring schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Board reporting templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Optional advisory retainer</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Investment
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Comprehensive AI governance that protects your bank and enables innovation.
            </p>

            <Card className="p-8 bg-card text-card-foreground border-blue-500/50 border-2">
              <div className="text-center mb-6">
                <div className="text-sm text-blue-400 font-medium mb-2">90-Day Pilot Program</div>
                <div className="text-5xl font-bold mb-2">Starting at $100K</div>
                <div className="text-muted-foreground">Custom pricing based on bank size and complexity</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Complete AI governance program</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Examiner-ready documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Board presentation & approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Staff training (all levels)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>12-month roadmap</span>
                </div>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <div className="text-sm text-muted-foreground mb-4">
                  <strong className="text-foreground">Payment Terms:</strong> 50% at start, 25% at Month 2, 25% at completion
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Ongoing Advisory:</strong> $10K-$20K/month (optional, after pilot)
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-center text-sm text-muted-foreground">
                <strong className="text-foreground">ROI:</strong> Avoid $500K+ in regulatory penalties and consultant fees. Get examiner-ready governance in 90 days vs. 18+ months with Big 4 firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Schedule a 30-minute discovery call. We'll discuss your AI usage, regulatory concerns, and how BankFlow.ai can help.
            </p>

            <Card className="p-8 bg-card text-card-foreground border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@bank.com"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bank">Bank Name *</Label>
                  <Input
                    id="bank"
                    required
                    value={formData.bank}
                    onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                    placeholder="Community Bank of Example"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Chief Risk Officer"
                    className="bg-background"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours to schedule your discovery call. No obligation.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span className="text-lg font-bold">BankFlow.ai</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  AI Governance for Community Banks. Examiner-ready in 90 days.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: hello@bankflow.ai</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-blue-500 transition-colors">
                    Federal Reserve SR 11-7
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-blue-500 transition-colors">
                    OCC 2013-29
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-blue-500 transition-colors">
                    CFPB AI Guidance
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>© 2025 BankFlow.ai. All rights reserved.</p>
              <p className="mt-2">Built by The AI CEO</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
