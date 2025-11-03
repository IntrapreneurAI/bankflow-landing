import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Disclaimer() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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

      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-extrabold text-black mb-4">Disclaimer</h1>
        <p className="text-gray-600 mb-12">
          <strong>Effective Date:</strong> November 3, 2024 | <strong>Last Updated:</strong> November 3, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">General Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The information provided on BankFlow.ai is for <strong>informational purposes only</strong> and does not constitute professional advice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">No Professional Advice</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
              <p className="text-gray-800 font-semibold mb-2">Not Legal Advice</p>
              <p className="text-gray-700 leading-relaxed">
                We are not a law firm. Nothing on our website creates an attorney-client relationship. You should consult with a qualified attorney regarding your specific legal questions.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-4">
              <p className="text-gray-800 font-semibold mb-2">Not Regulatory Advice</p>
              <p className="text-gray-700 leading-relaxed">
                While we provide information about regulatory frameworks, our content is not a substitute for professional regulatory or compliance advice. Consult with qualified compliance professionals.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">No Guarantees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not guarantee specific outcomes, results, or regulatory approval from using our services. We cannot guarantee that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Examiners will accept our deliverables</li>
              <li>You will pass regulatory examinations</li>
              <li>You will avoid regulatory enforcement actions</li>
              <li>Our frameworks will meet all your compliance needs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">AI Governance Assistant</h2>
            <p className="text-gray-700 leading-relaxed">
              Our AI Governance Assistant is an <strong>informational tool only</strong>. Do not rely solely on AI-generated responses for regulatory compliance decisions. Always verify information with qualified professionals.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>BankFlow.ai</strong><br />
              Email: hello@bankflow.ai<br />
              Website: https://bankflow.ai
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 BankFlow.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
