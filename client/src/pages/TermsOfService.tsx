import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
            onClick={() => setLocation('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <img src="/Shield.jpg" alt="BankFlow" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-black">BankFlow</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-extrabold text-black mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-12">
          <strong>Effective Date:</strong> November 3, 2024 | <strong>Last Updated:</strong> November 3, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of the BankFlow.ai website (https://bankflow.ai) and services (collectively, the "Services") provided by BankFlow.ai ("BankFlow," "we," "us," or "our").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not access or use our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BankFlow provides consulting and education services related to:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>AI Governance Consulting</strong> - Vendor risk management, AI governance frameworks, and regulatory compliance for community banks</li>
              <li><strong>Fraud Shield for SMBs</strong> - White-label fraud education programs for small and medium-sized businesses</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-2">
              Our Services include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Website content and resources</li>
              <li>Discovery calls and consultations</li>
              <li>Documentation and deliverables (upon engagement)</li>
              <li>Educational materials and training programs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Acceptable Use</h2>
            
            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              You may use our Services for lawful purposes only, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Browsing website content</li>
              <li>Requesting information about our services</li>
              <li>Scheduling discovery calls</li>
              <li>Downloading materials we make available</li>
            </ul>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Prohibited Conduct</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated tools (bots, scrapers) without permission</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, threaten, or abuse others</li>
              <li>Use our Services for spam or unsolicited marketing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Violation of these prohibitions may result in immediate termination of your access to our Services and potential legal action.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Intellectual Property Rights</h2>
            
            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including but not limited to text, graphics, logos, images, videos, software, and documentation (collectively, "Content"), is the property of BankFlow or our licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Limited License</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for personal or internal business purposes. This license does not include the right to modify, copy, distribute, sell, or commercially exploit our Content.
            </p>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Trademarks</h3>
            <p className="text-gray-700 leading-relaxed">
              "BankFlow," "BankFlow.ai," and related logos are trademarks of BankFlow. You may not use our trademarks without our prior written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Professional Services and Engagements</h2>
            
            <h3 className="text-2xl font-bold text-black mb-3 mt-6">No Attorney-Client Relationship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nothing on our website or in our Services creates an attorney-client relationship. Our Services are not a substitute for legal, regulatory, or compliance advice. You should consult with qualified legal counsel regarding your specific situation.
            </p>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">No Guarantees</h3>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide high-quality services, we do not guarantee specific outcomes, regulatory approval, or examiner acceptance of our deliverables. Regulatory compliance is ultimately your responsibility.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Disclaimer of Warranties</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
              <p className="text-gray-800 font-semibold mb-2">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, non-infringement, accuracy, availability, and security.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Use of our Services is at your own risk.</strong>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Limitation of Liability</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
              <p className="text-gray-800 font-semibold mb-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BANKFLOW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This includes but is not limited to loss of profits, revenue, data, business opportunities, or regulatory fines.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Our total liability shall not exceed the amount you paid to us in the 12 months preceding the claim, or $100, whichever is greater.</strong>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Informal Resolution:</strong> Before filing a claim, you agree to contact us at hello@bankflow.ai to attempt to resolve the dispute informally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Arbitration:</strong> If informal resolution fails, any dispute arising out of or related to these Terms or our Services shall be resolved through binding arbitration in accordance with the American Arbitration Association (AAA) Commercial Arbitration Rules.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or disputes regarding these Terms, please contact us:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>BankFlow.ai</strong><br />
              Email: hello@bankflow.ai<br />
              Website: https://bankflow.ai
            </p>
          </section>

          <section className="mb-12 bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-bold text-black mb-4">Disclaimer</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              These Terms of Service are provided for informational purposes and should be reviewed by legal counsel before publication. BankFlow.ai recommends having these Terms reviewed by a qualified attorney to ensure compliance with all applicable laws and regulations.
            </p>
          </section>

          <p className="text-gray-500 text-sm italic">
            Last Updated: November 3, 2024
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 BankFlow.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
