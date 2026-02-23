import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-thc-navy w-full h-1/2 z-0"></div>
      
      <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12">
          <div className="text-center mb-10">
            <h2 id="contact-heading" className="text-3xl font-heading font-bold text-thc-navy mb-4">Partner With Us</h2>
            <p className="text-gray-600">
              Tell us about your workforce needs. Our consultants respond within 24 hours.
            </p>
          </div>

          <div aria-live="polite">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-thc-navy mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We will be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="mt-6 text-thc-orange font-bold underline hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-thc-orange"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input type="text" id="company" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="Aramco, ADNOC..." />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select id="interest" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all bg-white">
                      <option>Technical Manpower</option>
                      <option>Executive Search</option>
                      <option>Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="Describe your project requirements..."></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="inline-flex justify-center items-center px-8 py-4 bg-thc-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-thc-orange disabled:opacity-70 disabled:hover:transform-none"
                  >
                    {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};