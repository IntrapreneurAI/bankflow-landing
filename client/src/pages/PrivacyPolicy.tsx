import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PrivacyPolicy() {
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
        <h1 className="text-5xl font-extrabold text-black mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">
          <strong>Effective Date:</strong> November 3, 2024 | <strong>Last Updated:</strong> November 3, 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BankFlow.ai ("BankFlow," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://bankflow.ai) and use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Personal Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you fill out contact forms, request information about our services, schedule discovery calls, or communicate with us.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>The personal information we collect may include:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Name</strong> - Your full name</li>
              <li><strong>Email Address</strong> - Your business or personal email</li>
              <li><strong>Company/Bank Name</strong> - Your employer or organization</li>
              <li><strong>Job Title</strong> - Your role or position</li>
              <li><strong>Phone Number</strong> - Your contact number (if provided)</li>
              <li><strong>Message Content</strong> - Any information you include in forms or communications</li>
            </ul>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              When you visit our website, we may automatically collect certain information about your device and usage patterns:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Device Information</strong> - IP address, browser type, operating system</li>
              <li><strong>Usage Data</strong> - Pages visited, time spent on pages, click patterns</li>
              <li><strong>Referral Information</strong> - How you arrived at our website</li>
              <li><strong>Cookies and Tracking Technologies</strong> - See our Cookie Policy for details</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            
            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Service Delivery and Communication</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Respond to your inquiries and requests</li>
              <li>Schedule and conduct discovery calls</li>
              <li>Provide information about our AI governance and fraud education services</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
            </ul>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Business Operations</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Maintain and improve our website</li>
              <li>Analyze website usage and user behavior</li>
              <li>Develop new services and offerings</li>
              <li>Conduct market research and analysis</li>
            </ul>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Legal and Compliance</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Comply with applicable laws and regulations</li>
              <li>Protect our legal rights and interests</li>
              <li>Prevent fraud, abuse, or security incidents</li>
              <li>Respond to legal requests and enforce our Terms of Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:
            </p>

            <h3 className="text-2xl font-bold text-black mb-3 mt-6">Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Supabase</strong> - Database and data storage</li>
              <li><strong>Notion</strong> - Customer relationship management (CRM)</li>
              <li><strong>Email Service Providers</strong> - For sending communications (if applicable)</li>
              <li><strong>Analytics Providers</strong> - For website analytics (if applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Retention Periods:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Lead Information</strong> - Retained for up to 3 years from last contact</li>
              <li><strong>Client Information</strong> - Retained for duration of engagement plus 7 years</li>
              <li><strong>Marketing Communications</strong> - Retained until you unsubscribe or opt out</li>
              <li><strong>Website Analytics</strong> - Retained for up to 26 months</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You may request deletion of your personal information at any time by contacting us at privacy@bankflow.ai.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Access and Portability</strong> - Request access to your personal information</li>
              <li><strong>Correction and Update</strong> - Request correction of inaccurate information</li>
              <li><strong>Deletion</strong> - Request deletion of your personal information</li>
              <li><strong>Opt-Out</strong> - Opt out of marketing communications</li>
              <li><strong>Restriction</strong> - Request restriction of processing</li>
              <li><strong>Withdrawal of Consent</strong> - Withdraw consent to processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>To exercise these rights, contact us at:</strong><br />
              Email: privacy@bankflow.ai<br />
              Subject Line: "Privacy Rights Request"
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Security Measures Include:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure database storage (Supabase with encryption)</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>BankFlow.ai</strong><br />
              Email: privacy@bankflow.ai<br />
              Website: https://bankflow.ai
            </p>
          </section>

          <section className="mb-12 bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-bold text-black mb-4">Disclaimer</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              This Privacy Policy is provided for informational purposes and should be reviewed by legal counsel before publication. BankFlow.ai recommends having this policy reviewed by a qualified attorney to ensure compliance with all applicable laws and regulations.
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
