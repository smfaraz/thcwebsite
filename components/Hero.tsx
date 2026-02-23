import React from 'react';
import { ArrowRight, Search, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Corporate Skyscrapers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-thc-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-thc-navy via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full py-24 sm:py-32">
        <span className="inline-block py-1 px-3 rounded-full bg-thc-orange/20 border border-thc-orange text-thc-orange font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">
          Talent Hunters Consulting
        </span>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6 max-w-5xl">
          Talent Advisory & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-thc-orange to-yellow-400">
            Executive Search
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-serif italic mb-6">
          "International professionals with a personal touch"
        </h2>

        <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-300 font-light mb-10 leading-relaxed mx-auto sm:mx-0">
          Talent Hunters Consulting is a global-minded talent consulting firm with expertise & experience in the <strong>KSA, USA, and International markets</strong>. We understand what it takes to build sustainable relationships.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-thc-orange hover:bg-orange-600 md:text-lg transition-transform hover:scale-105 shadow-lg shadow-orange-500/20 w-full sm:w-auto"
          >
            Find Talent
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#services" 
            className="inline-flex justify-center items-center px-8 py-4 border border-white text-base font-bold rounded-md text-white hover:bg-white hover:text-thc-navy md:text-lg transition-all w-full sm:w-auto"
          >
            <Globe className="mr-2 w-5 h-5" />
            Our Services
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto sm:mx-0">
          <div>
            <p className="text-xl font-bold text-white mb-1">Global Mindset</p>
            <p className="text-sm text-gray-400">KSA, USA & International</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white mb-1">Proven Track Record</p>
            <p className="text-sm text-gray-400">Successful International Placements</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white mb-1">Above & Beyond</p>
            <p className="text-sm text-gray-400">Matching suitable staff with every job</p>
          </div>
        </div>
      </div>
    </div>
  );
};