import React from 'react';
import { FadeIn } from './FadeIn';

export const TrustBar: React.FC = () => {
  // Clients listed in the company profile
  const partners = [
    "SAUDI RAILWAYS (SAR)",
    "JACOBS",
    "TCS",
    "MARAFIQ",
    "AZMEEL",
    "ASTRA",
    "ETIHAD ATHEEB"
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">
          Successfully Serviced Clients
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {partners.map((partner, index) => (
            <FadeIn key={index} delay={index * 100} className="flex justify-center items-center">
              <a
                href="#"
                className="text-sm md:text-lg font-heading font-black text-thc-navy text-center px-4 py-2 rounded-lg transition-all duration-200 hover:text-thc-orange hover:shadow-md hover:bg-gray-50 focus:outline-none focus:text-thc-orange focus:shadow-md"
                aria-label={`Visit ${partner}`}
                onClick={(e) => e.preventDefault()}
              >
                {partner}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};