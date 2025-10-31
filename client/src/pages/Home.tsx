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
            <Shield className="h-8 w-8 text-cyan-600" />
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
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-600/10 border border-cyan-600/20 rounded-full">
              <span className="text-cyan-500 text-sm font-medium">AI Governance for Community Banks</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Examiner-Ready AI Governance<br />
              <span className="text-cyan-600">In 90 Days</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI showed up in your vendor contracts. Now regulators are asking questions. We help you understand what you have, document it, and build the governance framework examiners expect.
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
                <div className="text-3xl md:text-4xl font-bold text-cyan-600">4,500+</div>
                <div className="text-sm text-muted-foreground mt-1">Banks Using AI</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600">90</div>
                <div className="text-sm text-muted-foreground mt-1">Days to Compliant</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600">100%</div>
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

      {/* Who Is This For Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Is This Program Right for Your Bank?
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              BankFlow.ai is purpose-built for community banks and credit unions navigating AI governance for the first time.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Perfect Fit */}
              <Card className="p-8 bg-card text-card-foreground border-cyan-600/50 border-2">
                <h3 className="text-2xl font-bold mb-6 text-cyan-600">Perfect Fit If You:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block">Community bank or credit union</strong>
                      <span className="text-sm text-muted-foreground">$500M to $10B in assets</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block">Use AI through vendors</strong>
                      <span className="text-sm text-muted-foreground">Fraud detection, credit scoring, chatbots, or core systems</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block">Facing regulatory questions</strong>
                      <span className="text-sm text-muted-foreground">Examiners asking about AI governance or model risk</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block">Don't have a model risk team</strong>
                      <span className="text-sm text-muted-foreground">Need external expertise without Big 4 fees</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block">Want it done in 90 days</strong>
                      <span className="text-sm text-muted-foreground">Need governance framework before next exam</span>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Not a Fit */}
              <Card className="p-8 bg-muted/30 text-card-foreground border-border">
                <h3 className="text-2xl font-bold mb-6">Probably Not a Fit If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs">✕</span>
                    </div>
                    <div>
                      <strong className="block">Large regional or national bank</strong>
                      <span className="text-sm text-muted-foreground">$10B+ assets with existing model risk teams</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs">✕</span>
                    </div>
                    <div>
                      <strong className="block">Not using AI yet</strong>
                      <span className="text-sm text-muted-foreground">No vendor or internal AI systems in production</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs">✕</span>
                    </div>
                    <div>
                      <strong className="block">Already have full governance</strong>
                      <span className="text-sm text-muted-foreground">Complete model risk framework and documentation</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs">✕</span>
                    </div>
                    <div>
                      <strong className="block">Just want a policy template</strong>
                      <span className="text-sm text-muted-foreground">Looking for DIY solution without implementation support</span>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Key Roles */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Key decision makers:</strong> Chief Risk Officers, Chief Information Officers, CEOs, Compliance Officers, and Vendor Managers
              </p>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-cyan-600">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90">
                Schedule a 30-minute discovery call. We'll assess your current state and show you exactly how we can help.
              </p>
            </div>

            <Card className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Chief Risk Officer"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@yourbank.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bank">Bank/Credit Union Name *</Label>
                    <Input
                      id="bank"
                      type="text"
                      placeholder="First Community Bank"
                      value={formData.bank}
                      onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Schedule Your Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  We'll respond within 24 hours to schedule your call. No pressure, no obligation.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              You Didn't Choose AI—Your Vendors Did
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Your fraud detection, credit scoring, and customer service tools already use AI. Now you need to document it, govern it, and prove it to examiners.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card text-card-foreground border-border">
                <Building2 className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Discovery First</h3>
                <p className="text-muted-foreground">
                  We start by finding every AI system in your environment—vendor and internal. You can't govern what you can't see.
                </p>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Scale className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Examiner-Ready Documentation</h3>
                <p className="text-muted-foreground">
                  We translate what you have into the documentation examiners expect—model risk frameworks, vendor due diligence, and ongoing monitoring.
                </p>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Target className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">No Big 4 Required</h3>
                <p className="text-muted-foreground">
                  We deliver the same quality governance Big 4 firms provide, but faster, more affordably, and built specifically for community banks.
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
              We partner with you to build a governance framework that works for your bank. Practical, thorough, and ready for examiners.
            </p>

            <div className="space-y-8">
              {/* Month 1 */}
              <Card className="p-8 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Month 1: Discovery & Inventory</h3>
                    <p className="text-muted-foreground mb-4">
                      We identify every AI system you're using—vendor and internal. Risk-score each one. Build complete documentation.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Complete AI system inventory</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Vendor AI assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Risk tier assignments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Stakeholder interviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Month 2 */}
              <Card className="p-8 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Month 2: Due Diligence & Framework</h3>
                    <p className="text-muted-foreground mb-4">
                      We conduct vendor due diligence, establish model risk management, and test for fair lending compliance.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Vendor due diligence reports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Model risk framework (SR 11-7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Fair lending testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">AI governance policies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Month 3 */}
              <Card className="p-8 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-600/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Month 3: Documentation & Training</h3>
                    <p className="text-muted-foreground mb-4">
                      We package everything for examiners, present to your board, train your staff, and hand you a 12-month roadmap.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Examiner-ready documentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Board presentation & approval</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">Staff training (4 levels)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
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

      {/* Detailed 90-Day Rollout Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Your Week-by-Week Roadmap
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Here's exactly what happens each week. No surprises. No delays. Just steady progress toward examiner-ready governance.
            </p>

            <div className="space-y-6">
              {/* Weeks 1-2 */}
              <Card className="p-6 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">1-2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Weeks 1-2: Discovery & Kickoff</h3>
                    <p className="text-muted-foreground mb-4">We start by understanding your current state and building the foundation.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Kickoff meeting with stakeholders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Vendor contract review</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Internal AI system discovery</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Stakeholder interviews (CRO, IT, Ops)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Initial AI inventory created</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weeks 3-4 */}
              <Card className="p-6 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">3-4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Weeks 3-4: Vendor Due Diligence</h3>
                    <p className="text-muted-foreground mb-4">We assess every vendor using AI and document their risk profiles.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Send vendor questionnaires</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Risk scoring for each vendor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Model validation assessment</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Data flow mapping</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Fair lending review (if applicable)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weeks 5-6 */}
              <Card className="p-6 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">5-6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Weeks 5-6: Policy Development</h3>
                    <p className="text-muted-foreground mb-4">We draft your AI governance policies and model risk framework.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI Governance Policy draft</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Model Risk Management framework</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Vendor Management Policy update</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Data Governance standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Review sessions with your team</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weeks 7-8 */}
              <Card className="p-6 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">7-8</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Weeks 7-8: Documentation & Training</h3>
                    <p className="text-muted-foreground mb-4">We finalize all documentation and train your team on the new framework.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Complete vendor due diligence files</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Model inventory documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Risk assessment reports</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Staff training sessions (2-3 hours)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Internal controls testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weeks 9-10 */}
              <Card className="p-6 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">9-10</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Weeks 9-10: Board Presentation & Approval</h3>
                    <p className="text-muted-foreground mb-4">We prepare and present the governance framework to your Board.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Board presentation deck</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Executive summary report</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Board meeting attendance (optional)</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Policy approval process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Final revisions based on feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weeks 11-12 */}
              <Card className="p-6 bg-card text-card-foreground border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-600">11-12</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Weeks 11-12: Implementation & Handoff</h3>
                    <p className="text-muted-foreground mb-4">We finalize everything and hand off a complete, examiner-ready program.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Ongoing monitoring schedule</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Quarterly review templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Examiner response playbook</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Complete documentation handoff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">30-day post-launch support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Weekly check-ins</strong> keep you informed. <strong>No surprises.</strong> Just steady progress.
              </p>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your 90-Day Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
                <FileCheck className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Complete Documentation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>AI system inventory with risk tiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Vendor due diligence reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Model validation summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Fair lending test results</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Shield className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Governance Framework</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Board-approved AI governance policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Model risk management framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Third-party risk procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing monitoring plan</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <Users className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Staff Training</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Level 1: All staff (AI awareness)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Level 2: AI users (responsible usage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Level 3: Risk team (governance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Level 4: Committee (strategic oversight)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border-border">
                <TrendingUp className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Ongoing Success</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>12-month roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Quarterly monitoring schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Board reporting templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Optional advisory retainer</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-600/10 border border-cyan-600/20 rounded-full">
                <span className="text-cyan-500 text-sm font-medium">Try Our AI Governance Assistant</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Instant AI Governance Guidance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our regulatory-grade AI assistant provides immediate answers on AI oversight, compliance, model governance, and fraud risk. Built on The AI CEO framework.
              </p>
            </div>

            <Card className="p-8 bg-card text-card-foreground border-cyan-600/50 border-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What You Can Ask:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Get a 90-day AI governance rollout plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Fraud risk integration strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Regulatory exam and RFI readiness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>AI compliance audit plans</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="mb-6">
                    <Shield className="h-24 w-24 text-cyan-600 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Grounded in 2024 Treasury AI reports, FRB/OCC/FDIC guidance, and NIST frameworks
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-lg"
                    onClick={() => window.open('https://chatgpt.com/g/YOUR-GPT-LINK', '_blank')}
                  >
                    Try the Assistant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    Free to use. No signup required. Opens in ChatGPT.
                  </p>
                </div>
              </div>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              <strong>Note:</strong> Update the GPT link in Settings → Code → <code className="text-xs bg-muted px-1 py-0.5 rounded">client/src/pages/Home.tsx</code>
            </p>
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

            <Card className="p-8 bg-card text-card-foreground border-cyan-600/50 border-2">
              <div className="text-center mb-6">
                <div className="text-sm text-cyan-500 font-medium mb-2">90-Day Pilot Program</div>
                <div className="text-5xl font-bold mb-2">Starting at $100K</div>
                <div className="text-muted-foreground">Custom pricing based on bank size and complexity</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Complete AI governance program</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Examiner-ready documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Board presentation & approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Staff training (all levels)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
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

            <Card className="p-2 bg-card text-card-foreground border-border overflow-hidden">
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/YOUR-USERNAME/discovery-call?hide_gdpr_banner=1&primary_color=3b82f6"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </Card>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              <strong>Note:</strong> Update the Calendly URL in the code with your actual link.
              <br />
              Go to Settings → Code panel → Edit <code className="text-xs bg-muted px-1 py-0.5 rounded">client/src/pages/Home.tsx</code> and replace <code className="text-xs bg-muted px-1 py-0.5 rounded">YOUR-USERNAME</code>
            </p>
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
                  <Shield className="h-6 w-6 text-cyan-600" />
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
                  <a href="#" className="block text-muted-foreground hover:text-cyan-600 transition-colors">
                    Federal Reserve SR 11-7
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-cyan-600 transition-colors">
                    OCC 2013-29
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-cyan-600 transition-colors">
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
