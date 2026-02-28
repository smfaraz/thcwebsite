import React from 'react';
import { Linkedin, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-thc-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block px-0 py-0 mb-6">
              <div className="flex flex-col">
                <div className="flex items-center border-b-2 border-white pb-0 leading-none">
                  <span className="font-serif text-3xl font-black text-white tracking-tight">THC</span>
                  <div className="flex space-x-[-6px] ml-1 items-center" aria-hidden="true">
                    <ChevronRight className="w-6 h-6 text-[#2ECC40] stroke-[4]" />
                    <ChevronRight className="w-6 h-6 text-[#0074D9] stroke-[4]" />
                    <ChevronRight className="w-6 h-6 text-[#FF851B] stroke-[4]" />
                  </div>
                </div>
                <span className="text-[0.6rem] font-sans text-white font-bold tracking-wide mt-0.5 uppercase">
                  Consulting Services!
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Talent Hunters Consulting. Your trusted Oil and Gas recruitment partner. Challenge us to find your next international recruit.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/talent-hunters-consulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#0077b5] transition-colors focus:outline-none focus:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-thc-orange focus:text-thc-orange focus:outline-none">Executive Search</a></li>
              <li><a href="#services" className="hover:text-thc-orange focus:text-thc-orange focus:outline-none">Technical Manpower</a></li>
              <li><a href="#contact" className="hover:text-thc-orange focus:text-thc-orange focus:outline-none">Contact Us</a></li>
              <li><a href="#ai-tools" className="hover:text-thc-orange focus:text-thc-orange focus:outline-none">JD Generator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-thc-orange shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong>KSA:</strong> Malik Abdullah Street, P.O. Box #295089, Jizan – 11351
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-thc-orange shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong>INDIA:</strong> 11-4-641/A/3/1, 2nd Floor, Opp. PTI Building, Lakdi ka pul, Hyderabad
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-thc-orange shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong>USA:</strong> 1425 Greenway Dr, Suite 160, Irving, TX 75038
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-thc-orange" aria-hidden="true" />
                <span>
                  <a href="tel:+966597644711" className="hover:text-white transition-colors">+966 597 644 711</a> / <a href="tel:+919703906880" className="hover:text-white transition-colors">+91 97039 06880</a>
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-thc-orange" aria-hidden="true" />
                <a href="mailto:info@talhuntconsult.com" className="hover:text-white focus:text-white focus:outline-none">info@talhuntconsult.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Talent Hunters Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="http://www.talenthuntersconsulting.com" className="hover:text-white focus:text-white focus:outline-none">www.talhuntconsult.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};