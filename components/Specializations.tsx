import React from 'react';
import { Network, Zap, HardHat, Cpu } from 'lucide-react';
import { ExpertiseItem } from '../types';
import { FadeIn } from './FadeIn';

export const Specializations: React.FC = () => {
  // Updated based on Client List: SAR (Rail), Marafiq (Utility), Jacobs (Construction), TCS (Tech)
  const expertise: ExpertiseItem[] = [
    {
      title: "Energy & Utilities",
      description: "Supporting major utility providers and energy giants with specialized engineering talent.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    {
      title: "Solution Architect",
      description: "Designing scalable enterprise solutions and technical roadmaps for complex business challenges.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Construction & Engineering",
      description: "Partnering with global EPC contractors to deliver staff for mega-projects.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Technology & Telecom",
      description: "Sourcing IT professionals and telecom engineers for leading digital service providers.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Zap className="w-6 h-6" />;
      case 1: return <Network className="w-6 h-6" />;
      case 2: return <HardHat className="w-6 h-6" />;
      case 3: return <Cpu className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  }

  return (
    <section id="specializations" className="py-24 bg-white">
      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-thc-orange font-bold tracking-wide uppercase text-sm mb-2">Our Verticals</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-thc-navy mb-4">
            Focused Industry Expertise
          </h3>
          <p className="text-gray-600 text-lg">
            Years of experience and close collaboration enable us to establish expertise in many verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-thc-orange">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="absolute top-40 right-6 w-12 h-12 bg-thc-navy text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-thc-orange transition-colors">
                  {getIcon(index)}
                </div>
                <h4 className="text-xl font-bold text-thc-navy mb-2 mt-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};