import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function AccessibilityStatement() {
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
        <h1 className="text-5xl font-extrabold text-black mb-4">Accessibility Statement</h1>
        <p className="text-gray-600 mb-12">
          <strong>Effective Date:</strong> November 3, 2024 | <strong>Last Updated:</strong> November 3, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              BankFlow.ai is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Conformance Status</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are working to make our website conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Current Conformance Level:</strong> Partial Conformance
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Accessibility Features</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Clear navigation</strong> - Logical page structure and menus</li>
              <li><strong>Keyboard navigation</strong> - Full keyboard accessibility</li>
              <li><strong>High contrast</strong> - Sufficient color contrast</li>
              <li><strong>Resizable text</strong> - Text can be resized up to 200%</li>
              <li><strong>Alternative text</strong> - Descriptive alt text for images</li>
              <li><strong>Clear language</strong> - Plain language and clear writing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Feedback</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, please contact us:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>BankFlow.ai Accessibility Team</strong><br />
              Email: accessibility@bankflow.ai<br />
              Subject Line: "Accessibility Feedback"
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will respond to accessibility feedback within <strong>5 business days</strong>.
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
