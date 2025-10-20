import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Toast from './Toast';

const InquiryFormSection: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          business_name: businessName,
          contact_person: contactPerson,
          phone,
          email: email || null,
          city,
          message: message || null,
        },
      ]);

      if (error) throw error;

      setToast({
        message: 'Thank you for your inquiry! We will be in touch shortly.',
        type: 'success',
      });

      setBusinessName('');
      setContactPerson('');
      setPhone('');
      setEmail('');
      setCity('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setToast({
        message: 'Something went wrong. Please try again or contact us directly.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <section id="inquiry-form" className="bg-warm-off-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-text">
            Start Your Partnership Today
          </h2>
          <p className="text-lg font-lato text-gray-600 mt-2">
            Fill out the form below, and our partnership team will contact you shortly.
          </p>
        </div>
        <div className="max-w-xl mx-auto mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="businessName" className="block text-sm font-poppins font-medium text-charcoal-text">Business Name</label>
              <input
                type="text"
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-poppins font-medium text-charcoal-text">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                required
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-poppins font-medium text-charcoal-text">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-poppins font-medium text-charcoal-text">Email <span className="text-gray-500 font-normal">(Optional)</span></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-poppins font-medium text-charcoal-text">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-poppins font-medium text-charcoal-text">Additional Message <span className="text-gray-500 font-normal">(Optional)</span></label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                placeholder="Tell us about your business needs..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-premg-yellow text-charcoal-text font-poppins font-semibold py-3 px-12 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default InquiryFormSection;