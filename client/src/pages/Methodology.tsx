import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Shield, Users, BarChart3 } from "lucide-react";

export default function Methodology() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as Home */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/Shield.jpg" alt="BankFlow" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-black">BankFlow</span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            <a href="/#services" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Services
            </a>
            <a href="/#approach" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Approach
            </a>
            <a href="/methodology" className="text-cyan-500 font-medium border-b-2 border-cyan-500">
              Methodology
            </a>
            <a href="/#team" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Team
            </a>
            <a href="/#contact" className="text-black font-medium hover:text-cyan-500 transition-colors duration-300 border-b-2 border-transparent hover:border-cyan-500">
              Contact
            </a>
          </nav>
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 font-semibold rounded transition-all duration-300"
            onClick={() => window.location.href = '/#contact'}
          >
            Book Discovery Call
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-32 lg:py-40 overflow-hidden">
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
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-8">
              Our Methodology
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              A regulatory-aligned framework built on Federal Reserve SR 11-7, OCC 2013-29, and NIST AI RMF
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our methodology integrates three regulatory frameworks to deliver comprehensive AI governance for community banks. Every deliverable maps to specific regulatory requirements, ensuring examiner-readiness from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Foundation - Navy */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-12 leading-tight">
            Regulatory Foundation
          </h2>
          
          <div className="space-y-16">
            {/* SR 11-7 */}
            <div className="bg-slate-800 p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-cyan-500 rounded flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">SR 11-7: Model Risk Management</h3>
                  <p className="text-cyan-400 text-lg mb-4">Federal Reserve (2011)</p>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Supervisory guidance on model risk management requiring financial institutions to establish governance, validation, and ongoing monitoring frameworks for models—including AI systems.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">Governance</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Board oversight and accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Policies and procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Risk appetite framework</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">Validation</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Conceptual soundness review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Ongoing monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Outcomes analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">Documentation</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Model inventory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Validation reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Issue tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OCC 2013-29 */}
            <div className="bg-slate-800 p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-cyan-500 rounded flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">OCC 2013-29: Third-Party Risk Management</h3>
                  <p className="text-cyan-400 text-lg mb-4">OCC Bulletin (2013)</p>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Guidance on managing risks associated with third-party relationships, requiring banks to conduct due diligence, establish contracts, and implement ongoing monitoring.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">Due Diligence</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Vendor assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Risk categorization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Financial stability review</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">Contracts</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Service level agreements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Termination rights</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">Monitoring</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Incident management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Annual reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NIST AI RMF */}
            <div className="bg-slate-800 p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-cyan-500 rounded flex items-center justify-center">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">NIST AI RMF: AI Risk Management Framework</h3>
                  <p className="text-cyan-400 text-lg mb-4">Treasury-Recommended (2024)</p>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Voluntary framework providing guidance on trustworthy and responsible AI, addressing bias, explainability, and fairness. U.S. Treasury recommends regulators integrate into banking supervision.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 mt-12">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">GOVERN</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>AI governance structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Risk appetite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Accountability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">MAP</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>AI system inventory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Risk identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Context analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">MEASURE</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Bias testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Explainability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-400">MANAGE</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Risk mitigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Incident response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <span>Continuous improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Phase Process - White */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-12 leading-tight">
            Four-Phase Process
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-20 max-w-3xl">
            Our 90-day program integrates all three regulatory frameworks into a cohesive implementation roadmap.
          </p>

          <div className="space-y-20">
            {/* Phase 1 */}
            <div className="border-l-4 border-cyan-500 pl-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl font-extrabold text-cyan-500">01</div>
                <div>
                  <h3 className="text-4xl font-bold text-black">Discovery</h3>
                  <p className="text-xl text-gray-600">Weeks 1-2</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Comprehensive assessment of AI systems across your vendor ecosystem. We identify all AI-powered systems, categorize risk levels, and establish the foundation for governance.
              </p>

              <div className="bg-gray-50 p-8 mb-8">
                <h4 className="text-2xl font-bold text-black mb-6">Deliverables</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">AI System Inventory</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Complete list of 10-15 vendor AI systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>System descriptions and use cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Data inputs and outputs</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">Risk Register</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Risk categorization (High/Medium/Low)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Inherent and residual risk scores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Initial mitigation strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8">
                <h4 className="text-xl font-bold mb-4">Regulatory Alignment</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">SR 11-7</p>
                    <p className="text-gray-300">Model inventory requirement</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">OCC 2013-29</p>
                    <p className="text-gray-300">Vendor identification and categorization</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">NIST AI RMF</p>
                    <p className="text-gray-300">MAP function (system context)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-cyan-500 pl-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl font-extrabold text-cyan-500">02</div>
                <div>
                  <h3 className="text-4xl font-bold text-black">Due Diligence</h3>
                  <p className="text-xl text-gray-600">Weeks 3-8</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Deep-dive assessment of each vendor AI system. We conduct validation reviews, assess model performance, and document findings for examiner review.
              </p>

              <div className="bg-gray-50 p-8 mb-8">
                <h4 className="text-2xl font-bold text-black mb-6">Deliverables</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">Vendor Assessments (10-15)</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Model documentation review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Performance validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Bias and fairness testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Explainability assessment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">Validation Reports</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Conceptual soundness review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Outcomes analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Limitations and assumptions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Recommendations for improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8">
                <h4 className="text-xl font-bold mb-4">Regulatory Alignment</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">SR 11-7</p>
                    <p className="text-gray-300">Model validation requirement</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">OCC 2013-29</p>
                    <p className="text-gray-300">Vendor due diligence</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">NIST AI RMF</p>
                    <p className="text-gray-300">MEASURE function (performance, bias)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-cyan-500 pl-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl font-extrabold text-cyan-500">03</div>
                <div>
                  <h3 className="text-4xl font-bold text-black">Policy</h3>
                  <p className="text-xl text-gray-600">Weeks 9-10</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Formalize governance structure and policies. We draft Board-approved policies, establish risk appetite, and create presentation materials for executive leadership.
              </p>

              <div className="bg-gray-50 p-8 mb-8">
                <h4 className="text-2xl font-bold text-black mb-6">Deliverables</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">AI Governance Policy</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Roles and responsibilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Risk appetite statement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Approval processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Escalation procedures</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">Board Materials</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Executive summary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Risk dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Policy recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Approval resolutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8">
                <h4 className="text-xl font-bold mb-4">Regulatory Alignment</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">SR 11-7</p>
                    <p className="text-gray-300">Governance and oversight requirement</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">OCC 2013-29</p>
                    <p className="text-gray-300">Policies and procedures</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">NIST AI RMF</p>
                    <p className="text-gray-300">GOVERN function (structure, accountability)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="border-l-4 border-cyan-500 pl-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl font-extrabold text-cyan-500">04</div>
                <div>
                  <h3 className="text-4xl font-bold text-black">Monitoring</h3>
                  <p className="text-xl text-gray-600">Weeks 11-12</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Establish ongoing monitoring framework. We create KPI dashboards, define thresholds, and provide a 12-month roadmap for continuous oversight.
              </p>

              <div className="bg-gray-50 p-8 mb-8">
                <h4 className="text-2xl font-bold text-black mb-6">Deliverables</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">Monitoring Plan</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>KPI definitions and thresholds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Reporting frequency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Escalation triggers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Review schedule</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">12-Month Roadmap</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Quarterly review milestones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Annual validation schedule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Policy update timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>Continuous improvement plan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8">
                <h4 className="text-xl font-bold mb-4">Regulatory Alignment</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">SR 11-7</p>
                    <p className="text-gray-300">Ongoing monitoring requirement</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">OCC 2013-29</p>
                    <p className="text-gray-300">Continuous monitoring</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">NIST AI RMF</p>
                    <p className="text-gray-300">MANAGE function (ongoing oversight)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Matrix - Navy */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-12 leading-tight">
            Compliance Matrix
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Every deliverable maps to specific regulatory requirements, ensuring comprehensive compliance.
          </p>

          <div className="bg-slate-800 p-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-4 pr-8 text-lg font-bold">Deliverable</th>
                  <th className="pb-4 pr-8 text-lg font-bold">SR 11-7</th>
                  <th className="pb-4 pr-8 text-lg font-bold">OCC 2013-29</th>
                  <th className="pb-4 text-lg font-bold">NIST AI RMF</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">AI System Inventory</td>
                  <td className="py-4 pr-8">Model Inventory</td>
                  <td className="py-4 pr-8">Vendor Identification</td>
                  <td className="py-4">MAP (Context)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">Risk Register</td>
                  <td className="py-4 pr-8">Risk Assessment</td>
                  <td className="py-4 pr-8">Risk Categorization</td>
                  <td className="py-4">MAP (Risk ID)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">Vendor Assessments</td>
                  <td className="py-4 pr-8">Validation</td>
                  <td className="py-4 pr-8">Due Diligence</td>
                  <td className="py-4">MEASURE (Performance)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">Validation Reports</td>
                  <td className="py-4 pr-8">Conceptual Soundness</td>
                  <td className="py-4 pr-8">Vendor Review</td>
                  <td className="py-4">MEASURE (Bias, Explainability)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">AI Governance Policy</td>
                  <td className="py-4 pr-8">Governance Framework</td>
                  <td className="py-4 pr-8">Policies & Procedures</td>
                  <td className="py-4">GOVERN (Structure)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">Board Materials</td>
                  <td className="py-4 pr-8">Board Oversight</td>
                  <td className="py-4 pr-8">Accountability</td>
                  <td className="py-4">GOVERN (Accountability)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-8 font-semibold">Monitoring Plan</td>
                  <td className="py-4 pr-8">Ongoing Monitoring</td>
                  <td className="py-4 pr-8">Continuous Monitoring</td>
                  <td className="py-4">MANAGE (Oversight)</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 font-semibold">12-Month Roadmap</td>
                  <td className="py-4 pr-8">Periodic Review</td>
                  <td className="py-4 pr-8">Annual Review</td>
                  <td className="py-4">MANAGE (Continuous Improvement)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section - White */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Schedule a no-obligation discovery call to discuss how our methodology can help your bank achieve examiner-ready AI governance.
          </p>
          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-10 py-6 font-semibold rounded inline-flex items-center gap-2 transition-all duration-300"
            onClick={() => window.location.href = '/#contact'}
          >
            Book Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="/" className="flex items-center gap-3">
              <img src="/Shield.jpg" alt="BankFlow" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold">BankFlow</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="/#services" className="text-gray-400 hover:text-cyan-500 transition-colors">Services</a>
              <a href="/#approach" className="text-gray-400 hover:text-cyan-500 transition-colors">Approach</a>
              <a href="/methodology" className="text-cyan-500">Methodology</a>
              <a href="/#team" className="text-gray-400 hover:text-cyan-500 transition-colors">Team</a>
              <a href="/#contact" className="text-gray-400 hover:text-cyan-500 transition-colors">Contact</a>
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
