import React from 'react';
import { MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const RegionalExpertise: React.FC = () => {
  const regions = [
    { name: "Saudi Arabia", code: "KSA", desc: "Our primary hub. Located in Jizan with extensive reach across the Kingdom." },
    { name: "United States", code: "USA", desc: "Expertise in the US market, bringing international standards to our talent solutions." },
    { name: "India", code: "IND", desc: "Operations in Hyderabad, accessing a massive pool of skilled technical talent." },
    { name: "International", code: "INT", desc: "A global mindset enabling us to serve clients with international requirements." },
  ];

  return (
    <section id="regions" className="py-24 bg-thc-navy text-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
      
      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-thc-green font-bold tracking-wide uppercase text-sm mb-2">Our Footprint</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Global Expertise,<br/>Local Presence
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Talent Hunters Consulting is a global-minded consulting firm. We combine cultural diversity with varied language skills to find the right candidate behind the CV.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                 <h4 className="font-bold text-2xl text-thc-orange">3+</h4>
                 <p className="text-sm text-gray-300">Key Markets (KSA, USA, IND)</p>
               </div>
               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                 <h4 className="font-bold text-2xl text-thc-orange">100%</h4>
                 <p className="text-sm text-gray-300">Client Satisfaction</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                   <div className="w-10 h-10 rounded-full bg-thc-green/20 flex items-center justify-center text-thc-green">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-bold bg-thc-navy px-2 py-1 rounded text-white border border-gray-600">{region.code}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{region.name}</h4>
                <p className="text-gray-400 text-sm">{region.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </FadeIn>
    </section>
  );
};