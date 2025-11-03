import { useState } from 'react';
import { supabase, type Client } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function LeadCaptureForm() {
  const [formData, setFormData] = useState<Client>({
    name: '',
    email: '',
    company: '',
    note: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('clients')
        .insert([formData]);

      if (error) throw error;

      toast.success('✅ Thank you! We\'ll be in touch soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        note: ''
      });

      // Optional: Redirect to Calendly after 2 seconds
      // setTimeout(() => {
      //   window.open('https://calendly.com/your-link', '_blank');
      // }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('⚠️ There was an error. Please try again or email us directly.');
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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
            placeholder="john.smith@bank.com"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
            Bank / Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
            placeholder="Community Bank"
          />
        </div>
      </div>

      <div>
        <label htmlFor="note" className="block text-sm font-bold text-gray-900 mb-2">
          How can we help?
        </label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-cyan-600 focus:outline-none transition-colors"
          placeholder="Tell us about your vendor AI governance needs..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 text-lg"
      >
        {isSubmitting ? 'Submitting...' : 'Schedule Discovery Call'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        We'll review your information and reach out within 24 hours.
      </p>
    </form>
  );
}
