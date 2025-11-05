import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Shield, FileText, Users, BarChart3 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bank: "",
    title: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('clients')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.bank,
          note: `Title: ${formData.title}`
        });

      if (error) throw error;

      toast.success("Thank you! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", bank: "", title: "" });
    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error("Something went wrong. Please try again or email us directly.");
    }
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
              AI Governance
            </a>
            <a href="#smb-education" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Fraud Shield
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

          {/* Detailed Deliverables and Outcomes */}
          <div className="mt-20">
            <h3 className="text-4xl font-extrabold text-black mb-4 text-center">Comprehensive Deliverables</h3>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Every engagement includes detailed documentation, actionable insights, and ongoing support materials.
            </p>

            {/* Phase 1 Deliverables */}
            <div className="mb-12 bg-white border-l-4 border-cyan-500 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-extrabold text-cyan-500">01</div>
                <div>
                  <h4 className="text-2xl font-bold text-black">Discovery Phase Deliverables</h4>
                  <p className="text-gray-600">Weeks 1-2</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-black mb-3">AI System Inventory</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Complete catalog of 10-15 vendor AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>System purpose and business function mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Data flow diagrams for each AI system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Vendor contact information and contract details</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-black mb-3">Risk Register</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Initial risk assessment for each AI system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Risk scoring (likelihood × impact)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Regulatory compliance gaps identified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Prioritized remediation roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-6">
                <p className="text-sm font-semibold text-black mb-2">Outcome:</p>
                <p className="text-gray-700">Complete visibility into your AI ecosystem with clear understanding of regulatory exposure and priority areas for governance.</p>
              </div>
            </div>

            {/* Phase 2 Deliverables */}
            <div className="mb-12 bg-white border-l-4 border-cyan-500 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-extrabold text-cyan-500">02</div>
                <div>
                  <h4 className="text-2xl font-bold text-black">Due Diligence Phase Deliverables</h4>
                  <p className="text-gray-600">Weeks 3-8</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-black mb-3">Vendor Assessment Reports</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Individual reports for 10-15 critical vendors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Model validation findings (where accessible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Third-party risk management assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Vendor governance and oversight evaluation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-black mb-3">Bias & Fairness Testing</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Fair lending analysis (where applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Disparate impact testing methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Model explainability assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Consumer protection compliance review</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-6">
                <p className="text-sm font-semibold text-black mb-2">Outcome:</p>
                <p className="text-gray-700">Comprehensive vendor risk profiles with specific findings and recommendations aligned to SR 11-7 and OCC 2013-29 requirements.</p>
              </div>
            </div>

            {/* Phase 3 Deliverables */}
            <div className="mb-12 bg-white border-l-4 border-cyan-500 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-extrabold text-cyan-500">03</div>
                <div>
                  <h4 className="text-2xl font-bold text-black">Policy Phase Deliverables</h4>
                  <p className="text-gray-600">Weeks 9-10</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-black mb-3">AI Governance Policy</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Board-ready AI governance policy document</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Roles and responsibilities framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Risk appetite statement for AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Approval and escalation procedures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-black mb-3">Board Materials</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Executive summary presentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>AI risk dashboard for board reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Regulatory compliance summary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Policy approval resolution template</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-6">
                <p className="text-sm font-semibold text-black mb-2">Outcome:</p>
                <p className="text-gray-700">Board-approved AI governance framework with clear policies, procedures, and oversight mechanisms ready for examiner review.</p>
              </div>
            </div>

            {/* Phase 4 Deliverables */}
            <div className="mb-12 bg-white border-l-4 border-cyan-500 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-extrabold text-cyan-500">04</div>
                <div>
                  <h4 className="text-2xl font-bold text-black">Monitoring Phase Deliverables</h4>
                  <p className="text-gray-600">Weeks 11-12</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-black mb-3">Ongoing Monitoring Plan</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>12-month monitoring roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>KPI dashboard with thresholds and triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Quarterly review procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Vendor performance tracking methodology</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-black mb-3">Examiner Response Package</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Comprehensive documentation index</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Regulatory compliance crosswalk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Sample responses to common examiner questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Evidence portfolio for each requirement</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-6">
                <p className="text-sm font-semibold text-black mb-2">Outcome:</p>
                <p className="text-gray-700">Sustainable monitoring framework with clear KPIs and examiner-ready documentation package for ongoing compliance demonstration.</p>
              </div>
            </div>

            {/* Summary Outcomes */}
            <div className="bg-slate-900 text-white p-12">
              <h4 className="text-3xl font-extrabold mb-8 text-center">Program Outcomes</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-cyan-500 mb-4">100%</div>
                  <p className="text-xl font-semibold mb-2">Regulatory Alignment</p>
                  <p className="text-gray-300">Every deliverable mapped to SR 11-7, OCC 2013-29, and NIST AI RMF requirements</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-cyan-500 mb-4">10-15</div>
                  <p className="text-xl font-semibold mb-2">Vendor Assessments</p>
                  <p className="text-gray-300">Comprehensive due diligence on your critical AI vendor systems</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-cyan-500 mb-4">12</div>
                  <p className="text-xl font-semibold mb-2">Months of Monitoring</p>
                  <p className="text-gray-300">Detailed roadmap for ongoing oversight and compliance maintenance</p>
                </div>
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

          {/* 4-column team grid - circular photos, minimal cards */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/rj-grimshaw.png" alt="RJ Grimshaw" className="w-full h-full object-cover" />
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
                  <img src="/rose-beverly.png" alt="Rose Beverly" className="w-full h-full object-cover" />
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
                  <img src="/john-sokol.png" alt="John Sokol" className="w-full h-full object-cover" />
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

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/susan-wagner.png" alt="Susan Wagner" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Susan Wagner</h3>
              <p className="text-lg text-gray-600 mb-4">JD, CRCM, CAMS, APRP</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Banking compliance attorney with expertise in regulatory risk management and anti-money laundering.
              </p>
              <a 
                href="https://www.linkedin.com/in/susan-wagner-jd-crcm-cams-aprp-418a161a/" 
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
                  <img src="/jason-smith.jpeg" alt="Jason Smith" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Jason Smith</h3>
              <p className="text-lg text-gray-600 mb-4">Associate Partner, McKinsey & Company</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                McKinsey Associate Partner with 8+ years experience delivering $10M+ banking technology transformations and large-scale AI systems.
              </p>
              <a 
                href="https://www.linkedin.com/in/jasonhsmith" 
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
                  <img src="/mark-slade.png" alt="Mark Slade" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Mark Slade</h3>
              <p className="text-lg text-gray-600 mb-4">EVP & CFO, Bank of Ann Arbor</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                30+ years financial administration experience. CFO at Bank of Ann Arbor overseeing financial reporting, investments, and strategic planning.
              </p>
              <a 
                href="https://www.bankofannarbor.com/who-we-are/executive-team/mark-slade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section - Navy background */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Comprehensive 90-Day Program
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed mb-16">
            From discovery to examiner-ready governance in 12 weeks. Fixed-fee engagement with transparent deliverables.
          </p>
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
          <p className="text-xl text-gray-300 mb-12">
            For community banks $10B and under. Transparent scope, no hidden fees.
          </p>
          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 font-semibold rounded inline-flex items-center gap-2 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* SMB Fraud Education Section - Navy background */}
      <section id="smb-education" className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Fraud Shield for SMBs
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              White-label fraud education program that helps your SMB clients prevent fraud—and positions your bank as a trusted advisor.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Left: The Problem */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your SMB clients are prime targets for wire fraud, phishing, and BEC attacks. When they lose money, they blame the bank. You want to help, but lack the resources to provide 1-on-1 fraud education at scale.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>1,000-5,000 SMB clients per bank</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Rising fraud losses ($50K-$500K per incident)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Limited staff to provide education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Competitive pressure to add value</span>
                </li>
              </ul>
            </div>

            {/* Right: The Solution */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Solution</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                BankFlow Fraud Shield is a turnkey education platform you can offer to SMB clients under your bank's brand. We provide the content, you get the credit.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span><strong className="text-white">Monthly live webinars</strong> on fraud prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span><strong className="text-white">10-15 video modules</strong> (on-demand library)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span><strong className="text-white">AI prompting training</strong> for fraud detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span><strong className="text-white">Certificate program</strong> for completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span><strong className="text-white">Co-branded materials</strong> (your logo + BankFlow)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Prompting - Unique Differentiator */}
          <div className="bg-slate-800 p-12 mb-16">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-extrabold text-white mb-4">AI Prompting for Fraud Detection</h3>
              <p className="text-xl text-cyan-500 font-semibold">The Unique Differentiator</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              We teach SMBs how to use ChatGPT, Claude, and other AI tools to analyze suspicious emails, verify vendor requests, and detect phishing attacks—before they lose money.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📧</div>
                <h4 className="text-xl font-bold text-white mb-3">Email Analysis</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Use AI to identify phishing attempts, BEC attacks, and social engineering tactics
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💳</div>
                <h4 className="text-xl font-bold text-white mb-3">Vendor Verification</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Validate payment change requests and detect vendor impersonation fraud
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-white mb-3">Real-Time Detection</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Analyze suspicious activity instantly and know when to escalate to the bank
                </p>
              </div>
            </div>
          </div>

          {/* Pricing & Value */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Pricing Options</h3>
              <div className="space-y-6">
                <div className="bg-slate-800 p-6">
                  <h4 className="text-xl font-bold text-cyan-500 mb-2">Per-Bank Subscription</h4>
                  <p className="text-3xl font-extrabold text-white mb-3">$2,500<span className="text-lg text-gray-400">/month</span></p>
                  <p className="text-gray-300 text-sm">Unlimited SMB client access • Best for banks with 1,000+ SMBs</p>
                </div>
                <div className="bg-slate-800 p-6">
                  <h4 className="text-xl font-bold text-cyan-500 mb-2">Per-SMB Pricing</h4>
                  <p className="text-3xl font-extrabold text-white mb-3">$50<span className="text-lg text-gray-400">/SMB/year</span></p>
                  <p className="text-gray-300 text-sm">Pay only for enrolled clients • Best for banks with 100-500 SMBs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Value for Your Bank</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">💰</span>
                  <div>
                    <strong className="text-white">New Revenue Stream</strong>
                    <p className="text-sm">Charge SMBs $100-200/year for fraud protection program</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">🛡️</span>
                  <div>
                    <strong className="text-white">Risk Reduction</strong>
                    <p className="text-sm">Fewer fraud losses = fewer angry customers and liability claims</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">⚡</span>
                  <div>
                    <strong className="text-white">Operational Efficiency</strong>
                    <p className="text-sm">Scales 1-to-many without adding staff or training time</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">🏆</span>
                  <div>
                    <strong className="text-white">Competitive Advantage</strong>
                    <p className="text-sm">Differentiate from competitors with value-added SMB services</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">🤝</span>
                  <div>
                    <strong className="text-white">Stronger Relationships</strong>
                    <p className="text-sm">Position your bank as trusted advisor, not just transaction processor</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 font-semibold rounded inline-flex items-center gap-2 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Fraud Shield
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-gray-400 mt-6 text-sm">Pilot program available • 90-day implementation</p>
          </div>
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
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="/privacy-policy" className="text-gray-500 hover:text-cyan-500 transition-colors text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-cyan-500 transition-colors text-sm">Terms of Service</a>
              <a href="/cookie-policy" className="text-gray-500 hover:text-cyan-500 transition-colors text-sm">Cookie Policy</a>
              <a href="/disclaimer" className="text-gray-500 hover:text-cyan-500 transition-colors text-sm">Disclaimer</a>
              <a href="/accessibility" className="text-gray-500 hover:text-cyan-500 transition-colors text-sm">Accessibility</a>
            </div>
            <p className="text-center text-gray-500 text-sm">© 2025 BankFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
