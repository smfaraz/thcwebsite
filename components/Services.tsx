import React from 'react';
import { UserCheck, Users, Briefcase, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { FadeIn } from './FadeIn';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Executive Search",
      description: "Our extensive network and database of highly qualified professionals offer clients the chance of finding the most suitable candidate for C-level, unique roles, or managerial positions. Proactive processes ensure efficiency.",
      icon: UserCheck
    },
    {
      title: "Technical Manpower",
      description: "From Engineers to Supervisors, our expertise across many sectors brings value to each engagement. We combine cultural diversity and industry knowledge to find the candidate behind the CV.",
      icon: Users
    },
    {
      title: "MSP & Contingent Workforce",
      description: "We pride ourselves on innovation and have evolved to create an MSP service that works to meet our clients' exact needs. We make sure managing your contingent workforce is as easy as possible.",
      icon: Briefcase
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-thc-orange font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-thc-navy mb-6">
               Comprehensive Workforce Solutions
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              From the boardroom to the field, we provide specialized talent acquisition services tailored to the unique demands of the Oil & Gas and Engineering sectors.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeIn key={idx} delay={idx * 150} className="h-full">
                <div className="group h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col relative transform hover:-translate-y-2">
                  {/* Top accent line */}
                  <div className="h-1.5 w-full bg-gray-100 group-hover:bg-thc-orange transition-colors duration-300"></div>
                  
                  <div className="p-8 flex flex-col h-full relative">
                    <div className="mb-6 inline-flex p-4 rounded-xl bg-thc-navy/5 text-thc-navy group-hover:bg-thc-navy group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm ring-1 ring-black/5">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-thc-navy mb-4 group-hover:text-thc-orange transition-colors">{service.title}</h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <a href="#contact" className="inline-flex items-center text-sm font-bold text-gray-500 group-hover:text-thc-orange transition-colors mt-auto uppercase tracking-wide group/btn">
                      Get Started 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};