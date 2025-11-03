import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function CookiePolicy() {
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
        <h1 className="text-5xl font-extrabold text-black mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-12">
          <strong>Effective Date:</strong> November 3, 2024 | <strong>Last Updated:</strong> November 3, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how BankFlow.ai uses cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files placed on your device when you visit a website. They help websites remember your actions and preferences over time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">How We Use Cookies</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies</strong> - Required for website functionality</li>
              <li><strong>Analytics Cookies</strong> - Help us understand website usage</li>
              <li><strong>Functional Cookies</strong> - Remember your preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings. Most browsers allow you to view, delete, and block cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>BankFlow.ai</strong><br />
              Email: privacy@bankflow.ai<br />
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
