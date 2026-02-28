import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
        .then(() => {
          setStatus('success');
          form.current?.reset();
        }, (error) => {
          console.error('Email sending failed:', error.text);
          setStatus('idle');
          alert('Failed to send message. Please try again or contact us directly.');
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-thc-navy w-full h-1/2 z-0"></div>

      <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12">
          <div className="text-center mb-10">
            <h2 id="contact-heading" className="text-3xl font-heading font-bold text-thc-navy mb-4">Partner With Us</h2>
            <p className="text-gray-600 mb-6">
              Tell us about your workforce needs. Our consultants respond within 24 hours.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-700 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-thc-orange/10 flex items-center justify-center text-thc-orange shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-thc-navy">USA Office</p>
                  <p>1425 Greenway Dr, Suite 160, Irving, TX 75038</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-10 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-thc-orange/10 flex items-center justify-center text-thc-orange shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-thc-navy">Direct Line</p>
                  <p>+91 97039 06880</p>
                </div>
              </div>
            </div>
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
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="user_name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <input type="email" id="email" name="user_email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input type="text" id="company" name="company_name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="Aramco, ADNOC..." />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select id="interest" name="interest" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all bg-white">
                      <option value="Technical Manpower">Technical Manpower</option>
                      <option value="Executive Search">Executive Search</option>
                      <option value="Consultancy">Consultancy</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-thc-navy focus:bg-white outline-none transition-all" placeholder="Describe your project requirements..."></textarea>
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