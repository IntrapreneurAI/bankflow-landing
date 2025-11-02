import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Shield, FileText, Users, BarChart3 } from "lucide-react";
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
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", bank: "", title: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Sticky, minimal, professional */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/Shield.jpg" alt="BankFlow" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-black">BankFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Services
            </a>
            <a href="#approach" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Approach
            </a>
            <a href="/methodology" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Methodology
            </a>
            <a href="#team" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Team
            </a>
            <a href="#contact" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Contact
            </a>
          </nav>
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 font-semibold rounded transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Discovery Call
          </Button>
        </div>
      </header>

      {/* Hero Section - Asymmetric, bold, with diagonal line pattern */}
      <section className="relative bg-white py-32 lg:py-40 overflow-hidden">
        {/* Diagonal line pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              #00D4D4 0px,
              #00D4D4 2px,
              transparent 2px,
              transparent 40px
            )`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Bold headline */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-light text-black leading-tight mb-4">
                AI IS EVERYWHERE
              </h1>
              <h1 className="text-6xl lg:text-7xl font-extrabold text-black leading-tight">
                YOUR GOVERNANCE<br />ISN'T
              </h1>
            </div>
            
            {/* Right: Supporting content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Community banks use AI in 10-15 critical vendor systems—fraud detection, credit scoring, loan origination. But most lack the governance frameworks examiners expect under SR 11-7 and OCC 2013-29.
              </p>
              <p className="text-xl font-semibold text-black">
                BankFlow delivers examiner-ready AI governance in 90 days.
              </p>
              <Button 
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 font-semibold rounded inline-flex items-center gap-2 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - White background, generous spacing */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">
              You Didn't Choose AI—<br />Your Vendors Did
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              AI is embedded in the vendor systems community banks use every day. Most banks don't realize how much AI they're using until examiners ask about it.
            </p>
          </div>

          {/* 3-column grid: Vendor AI examples */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 transition-transform duration-300 hover:-translate-y-1">
              <Shield className="w-16 h-16 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Fraud Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Machine learning models analyze transaction patterns to flag suspicious activity in real-time.
              </p>
            </div>

            <div className="bg-white p-10 transition-transform duration-300 hover:-translate-y-1">
              <BarChart3 className="w-16 h-16 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Credit Scoring</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered underwriting systems assess borrower risk and recommend credit decisions.
              </p>
            </div>

            <div className="bg-white p-10 transition-transform duration-300 hover:-translate-y-1">
              <FileText className="w-16 h-16 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Loan Origination</h3>
              <p className="text-gray-600 leading-relaxed">
                Automated document processing and decisioning engines streamline loan applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Expectations - Navy background, white text */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              What Examiners Expect
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Federal regulators have issued specific requirements for AI governance. Community banks must demonstrate compliance.
            </p>
          </div>

          {/* 3-column grid: Regulatory frameworks */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-10 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">SR 11-7</h3>
              <p className="text-sm text-cyan-400 mb-4 font-semibold">Federal Reserve</p>
              <p className="text-gray-300 leading-relaxed">
                Model Risk Management guidance requiring governance, validation, and ongoing monitoring of AI models.
              </p>
            </div>

            <div className="bg-slate-800 p-10 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">OCC 2013-29</h3>
              <p className="text-sm text-cyan-400 mb-4 font-semibold">OCC Bulletin</p>
              <p className="text-gray-300 leading-relaxed">
                Third-Party Risk Management requiring due diligence, contracts, and continuous monitoring of vendors.
              </p>
            </div>

            <div className="bg-slate-800 p-10 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">NIST AI RMF</h3>
              <p className="text-sm text-cyan-400 mb-4 font-semibold">Treasury-Recommended</p>
              <p className="text-gray-300 leading-relaxed">
                AI Risk Management Framework addressing trustworthiness, bias, and explainability (Dec 2024).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - White background */}
      <section id="approach" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">
              Examiner-Ready in 90 Days
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              Our four-phase program delivers comprehensive AI governance documentation aligned with Federal Reserve and OCC requirements.
            </p>
          </div>

          {/* 4-column timeline */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 border-l-4 border-cyan-500">
              <div className="text-6xl font-extrabold text-cyan-500 mb-4">01</div>
              <h3 className="text-2xl font-bold text-black mb-4">Discovery</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI System Inventory, Risk Register, Vendor Identification
              </p>
              <p className="text-sm text-gray-500">Weeks 1-2</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-cyan-500">
              <div className="text-6xl font-extrabold text-cyan-500 mb-4">02</div>
              <h3 className="text-2xl font-bold text-black mb-4">Due Diligence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vendor Assessments, Model Validation, Risk Analysis
              </p>
              <p className="text-sm text-gray-500">Weeks 3-8</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-cyan-500">
              <div className="text-6xl font-extrabold text-cyan-500 mb-4">03</div>
              <h3 className="text-2xl font-bold text-black mb-4">Policy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI Governance Policy, Board Materials, Risk Appetite
              </p>
              <p className="text-sm text-gray-500">Weeks 9-10</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-cyan-500">
              <div className="text-6xl font-extrabold text-cyan-500 mb-4">04</div>
              <h3 className="text-2xl font-bold text-black mb-4">Monitoring</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ongoing Monitoring Plan, KPI Dashboard, 12-Month Roadmap
              </p>
              <p className="text-sm text-gray-500">Weeks 11-12</p>
            </div>
          </div>

          {/* Deliverables summary */}
          <div className="mt-20 bg-gray-50 p-12">
            <h3 className="text-3xl font-bold text-black mb-8">What You Receive</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Documentation</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>AI System Inventory (10-15 vendor systems)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Vendor Due Diligence Reports (10-15 vendors)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>AI Governance Policy (Board-approved)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Risk Register with mitigation strategies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Ongoing Support</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>12-month monitoring roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>KPI dashboard with thresholds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Board presentation materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Examiner response package</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Foundation - Navy background */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Built on Federal Reserve<br />and OCC Guidance
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Our methodology integrates three regulatory frameworks to ensure comprehensive compliance.
            </p>
          </div>

          <div className="bg-slate-800 p-12">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">SR 11-7</h3>
                <p className="text-sm text-cyan-400 mb-4">Federal Reserve (2011)</p>
                <p className="text-gray-300 leading-relaxed">
                  Model Risk Management guidance requiring governance, validation, and ongoing monitoring.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">OCC 2013-29</h3>
                <p className="text-sm text-cyan-400 mb-4">OCC Bulletin (2013)</p>
                <p className="text-gray-300 leading-relaxed">
                  Third-Party Risk Management requiring due diligence and continuous monitoring.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">NIST AI RMF</h3>
                <p className="text-sm text-cyan-400 mb-4">Treasury-Recommended (2024)</p>
                <p className="text-gray-300 leading-relaxed">
                  AI-specific framework addressing trustworthiness, bias, and explainability.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                U.S. Treasury Department recommends financial regulators clarify how NIST AI RMF fits within prudential risk-management expectations (December 2024)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - White background */}
      <section id="team" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              Experienced professionals with deep expertise in banking regulations and AI governance.
            </p>
          </div>

          {/* 3-column team grid - circular photos, minimal cards */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/api/placeholder/200/200" alt="RJ" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">RJ</h3>
              <p className="text-lg text-gray-600 mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Banking and regulatory experience with focus on AI governance frameworks for community banks.
              </p>
              <a 
                href="https://www.linkedin.com/in/rj-bankflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/api/placeholder/200/200" alt="Rose Beverly" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Rose Beverly</h3>
              <p className="text-lg text-gray-600 mb-4">Co-Founder & Chief AI Strategist</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI ethics and governance specialist with expertise in NIST AI RMF and responsible AI implementation.
              </p>
              <a 
                href="https://www.linkedin.com/in/rose-beverly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/api/placeholder/200/200" alt="John Sokol" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">John Sokol</h3>
              <p className="text-lg text-gray-600 mb-4">Data Scientist & AI Advisor</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                5+ years data science experience with expertise in AI model validation and performance monitoring.
              </p>
              <a 
                href="https://www.linkedin.com/in/sokolj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section - Navy background */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Fixed-Fee Investment
          </h2>
          <div className="mb-12">
            <div className="text-7xl font-extrabold text-cyan-500 mb-4">$100,000</div>
            <p className="text-2xl text-gray-300">90-Day Program</p>
          </div>
          <div className="bg-slate-800 p-12 mb-12">
            <h3 className="text-2xl font-bold mb-8">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Complete AI system inventory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Vendor due diligence (10-15 vendors)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Board-approved AI governance policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Risk register and mitigation plans</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>12-month monitoring roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>KPI dashboard with thresholds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Board presentation materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Examiner response package</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            For community banks $10B and under. No hidden fees, no scope creep.
          </p>
        </div>
      </section>

      {/* AI Assistant Section - White background */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">
            Try Our AI Governance Assistant
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Get instant answers about AI regulations, compliance requirements, and governance best practices. Free to use, no signup required.
          </p>
          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 font-semibold rounded inline-flex items-center gap-2 transition-all duration-300"
            onClick={() => window.open('https://chatgpt.com/g/g-688d2f668ffc819183ec2e4968e9d6c6-full-scope-ai-regulation-monitor-banking-v1-1-0', '_blank')}
          >
            Try the Assistant
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-6">
            For informational purposes only. Not a substitute for professional legal or regulatory advice.
          </p>

          {/* How It Stays Updated */}
          <div className="mt-20 bg-gray-50 p-12 text-left">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">How the Assistant Stays Current</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Regulatory Monitoring</h4>
                <p className="text-gray-600 leading-relaxed">
                  Tracks Federal Reserve, OCC, FDIC, and CFPB guidance on AI and model risk management.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Industry Updates</h4>
                <p className="text-gray-600 leading-relaxed">
                  Monitors Treasury Department reports, NIST frameworks, and banking industry developments.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Expert Curation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Maintained by BankFlow team with ongoing updates as regulations evolve.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-8 text-center">
              Last updated: November 2024
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Navy background */}
      <section id="contact" className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Ready to Get<br />Examiner-Ready?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Schedule a no-obligation discovery call to discuss your AI governance needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800 p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="bank" className="block text-sm font-semibold mb-2">Bank Name</label>
              <input
                type="text"
                id="bank"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                value={formData.bank}
                onChange={(e) => setFormData({...formData, bank: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6 font-semibold rounded transition-all duration-300"
            >
              Submit
            </Button>
          </form>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Or reach us directly:</p>
            <p className="text-xl text-white">
              <a href="mailto:hello@bankflow.ai" className="hover:text-cyan-500 transition-colors">hello@bankflow.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Navy background */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/Shield.jpg" alt="BankFlow" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold">BankFlow</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#services" className="text-gray-400 hover:text-cyan-500 transition-colors">Services</a>
              <a href="#approach" className="text-gray-400 hover:text-cyan-500 transition-colors">Approach</a>
              <a href="/methodology" className="text-gray-400 hover:text-cyan-500 transition-colors">Methodology</a>
              <a href="#team" className="text-gray-400 hover:text-cyan-500 transition-colors">Team</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-500 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
            <p>© 2025 BankFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
