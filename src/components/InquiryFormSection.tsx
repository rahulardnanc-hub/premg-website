import React, { useState } from 'react';

const InquiryFormSection: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, this data would be sent to a server or email service.
    // For now, we'll log it to the console.
    const formData = { businessName, contactPerson, phone, city };
    console.log('Form Submitted:', formData);
    alert('Thank you for your inquiry! We will be in touch shortly.');
    // Reset form fields
    setBusinessName('');
    setContactPerson('');
    setPhone('');
    setCity('');
  };

  return (
    <section className="bg-warm-off-white py-20">
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green"
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green"
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green"
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-heritage-green focus:border-heritage-green"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-premg-yellow text-charcoal-text font-poppins font-semibold py-3 px-12 rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg text-lg"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryFormSection;