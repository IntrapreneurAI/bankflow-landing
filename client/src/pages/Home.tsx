import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Linkedin } from "lucide-react";
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
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/Shield.jpg" alt="BankFlow" className="h-10 w-10 object-contain" />
            <span className="text-xl font-semibold text-gray-900">BankFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#approach" className="text-gray-600 hover:text-gray-900 transition-colors">Approach</a>
            <a href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Call
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            EXAMINER-READY AI GOVERNANCE
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Governance for<br />Community Banks
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            90-day program aligned with SR 11-7 and OCC 2013-29
          </p>
          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 rounded-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Discovery Call
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            THE CHALLENGE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            You didn't choose AI—<br />your vendors did
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              AI is embedded in the vendor systems community banks use every day: fraud detection, credit scoring, loan origination, and customer service platforms. Most banks don't realize how much AI they're using until examiners ask about it.
            </p>
            <p>
              Federal regulators have issued specific requirements for AI governance through SR 11-7 (Model Risk Management), OCC 2013-29 (Third-Party Risk), and Interagency Guidance 2023. Community banks need frameworks to manage vendor AI systems, but lack the resources to build them internally.
            </p>
            <p>
              That's where BankFlow comes in.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
              OUR APPROACH
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Four Phases, 90 Days
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discovery",
                description: "Identify AI systems across your vendor ecosystem and assess risk levels"
              },
              {
                number: "2",
                title: "Due Diligence",
                description: "Conduct vendor assessments for 10-15 critical AI systems"
              },
              {
                number: "3",
                title: "Policy",
                description: "Draft Board-approved AI governance framework aligned with SR 11-7"
              },
              {
                number: "4",
                title: "Monitoring",
                description: "Build ongoing monitoring plan with KPIs and reporting structure"
              }
            ].map((phase) => (
              <div key={phase.number} className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {phase.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
              WHAT YOU GET
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Examiner-Ready Documentation
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "AI System Inventory & Risk Register",
              "Vendor Due Diligence Reports (10-15 vendors)",
              "AI Governance Policy (Board-approved)",
              "Model Risk Management Framework",
              "Ongoing Monitoring Plan (12-month roadmap)",
              "Board Presentation & Approval Documentation",
              "Examiner Response Package"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
              WHO WE ARE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet the Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "RJ",
                title: "Co-Founder & CEO",
                initials: "RJ",
                linkedin: "https://www.linkedin.com/in/rj-example"
              },
              {
                name: "Rose Beverly",
                title: "Co-Founder & Chief AI Strategist",
                initials: "RB",
                linkedin: "https://www.linkedin.com/in/rose-beverly"
              },
              {
                name: "John Sokol",
                title: "Data Scientist & AI Advisor",
                initials: "JS",
                linkedin: "https://www.linkedin.com/in/sokolj/"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-lg text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {member.title}
                </p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Foundation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
              REGULATORY FOUNDATION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built on Federal Reserve<br />and OCC Guidance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "SR 11-7",
                subtitle: "Model Risk Management",
                description: "Federal Reserve guidance on model validation, governance, and ongoing monitoring"
              },
              {
                title: "OCC 2013-29",
                subtitle: "Third-Party Risk",
                description: "OCC bulletin on vendor due diligence, contract standards, and oversight"
              },
              {
                title: "Interagency 2023",
                subtitle: "Third-Party Relationships",
                description: "Updated guidance on concentration risk, contingency planning, and Board oversight"
              }
            ].map((reg) => (
              <div key={reg.title} className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {reg.title}
                </h3>
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  {reg.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {reg.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View Full Methodology
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            FREE RESOURCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Governance Assistant
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Try our free AI assistant to get answers about AI governance, regulatory requirements, and compliance best practices.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
            onClick={() => window.open('https://chatgpt.com/g/g-688d2f668ffc819183ec2e4968e9d6c6-full-scope-ai-regulation-monitor-banking-v1-1-0', '_blank')}
          >
            Try the Assistant
          </Button>
          <p className="text-sm text-gray-500 mt-4 italic">
            For informational purposes only. Not a substitute for professional legal or regulatory advice.
          </p>
        </div>
      </section>

      {/* How Assistant Stays Updated */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How the Assistant Stays Current
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Monitoring",
                description: "Tracks Federal Reserve, OCC, FDIC, and CFPB guidance on AI and model risk management"
              },
              {
                title: "Industry Updates",
                description: "Monitors Treasury Department, NIST AI RMF, and banking industry frameworks"
              },
              {
                title: "Expert Curation",
                description: "Maintained by BankFlow team with regular updates as guidance evolves"
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-12">
            Last updated: November 2024
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            INVESTMENT
          </p>
          <div className="text-6xl md:text-7xl font-bold mb-4">
            $100,000
          </div>
          <p className="text-xl text-gray-300 mb-10">
            Fixed fee • 90-day delivery • No hidden costs
          </p>
          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 rounded-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Proposal
          </Button>
        </div>
      </section>

      {/* Perfect Fit / Not a Fit Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Is BankFlow Right for You?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Perfect Fit */}
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                Perfect Fit
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Community bank or credit union ($10B and under)",
                    description: "Large enough to have AI across multiple systems, small enough to need external governance expertise"
                  },
                  {
                    title: "Using AI through vendor systems",
                    description: "Fraud detection, credit scoring, loan origination, customer service, or risk modeling platforms"
                  },
                  {
                    title: "Regulatory examination within 6-12 months",
                    description: "Need examiner-ready documentation before your next review"
                  },
                  {
                    title: "Limited internal resources for AI governance",
                    description: "No dedicated model risk management team or AI governance expertise"
                  }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Not a Fit
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Banks over $10B in assets",
                    description: "You likely already have dedicated model risk management teams and established governance frameworks"
                  },
                  {
                    title: "Building custom AI models in-house",
                    description: "Our focus is vendor AI systems, not proprietary model development"
                  },
                  {
                    title: "Need immediate (30-day) turnaround",
                    description: "Our program requires 90 days for thorough vendor due diligence and Board approval"
                  },
                  {
                    title: "Looking for ongoing managed services",
                    description: "We deliver the framework; you execute the monitoring (though we offer optional support)"
                  }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="h-6 w-6 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get examiner-ready?
            </h2>
            <p className="text-xl text-gray-300">
              Schedule a 30-minute discovery call
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Bank Name</label>
              <input
                type="text"
                required
                value={formData.bank}
                onChange={(e) => setFormData({...formData, bank: e.target.value})}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6 rounded-lg"
            >
              Schedule Now
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/Shield.jpg" alt="BankFlow" className="h-8 w-8 object-contain" />
              <span className="text-lg font-semibold text-gray-900">BankFlow</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#approach" className="hover:text-gray-900 transition-colors">Approach</a>
              <a href="#team" className="hover:text-gray-900 transition-colors">Team</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 BankFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
