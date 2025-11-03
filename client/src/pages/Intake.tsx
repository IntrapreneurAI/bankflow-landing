import { useState } from 'react';
import { supabase, type Client } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Link } from 'wouter';

export default function Intake() {
  const [formData, setFormData] = useState<Client>({
    name: '',
    email: '',
    company: '',
    note: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('clients')
        .insert([formData]);

      if (error) throw error;

      setIsSuccess(true);
      toast.success('✅ Client saved successfully. Thank you!');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          note: ''
        });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('⚠️ There was an error saving the client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev: Client) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <Link href="/">
            <img 
              src="/BankFlowlong.jpg" 
              alt="BankFlow" 
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-4" style={{ fontWeight: 900 }}>
              Client Intake
            </h1>
            <p className="text-xl text-gray-600">
              Please provide your information to get started
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-cyan-50 border-4 border-cyan-600 p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontWeight: 900 }}>
                Thank You!
              </h2>
              <p className="text-xl text-gray-700">
                Your information has been saved successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-lg font-bold text-gray-900 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
                  placeholder="Your bank or company name"
                />
              </div>

              <div>
                <label htmlFor="note" className="block text-lg font-bold text-gray-900 mb-3">
                  Note <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-6 px-8 text-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          )}

          <div className="mt-12 text-center">
            <Link href="/">
              <a className="text-cyan-600 hover:text-cyan-700 font-bold">
                ← Back to Home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
