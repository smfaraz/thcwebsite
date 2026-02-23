import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Specializations', href: '#specializations' },
    { name: 'Regional Expertise', href: '#regions' },
    { name: 'Services', href: '#services' },
    { name: 'AI Tools', href: '#ai-tools' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-thc-navy shadow-lg py-2' : 'bg-transparent py-4'}`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Container - Semantic Anchor for accessibility */}
            <a href="#" className="px-0 py-2 block group" aria-label="Talent Hunters Consulting Home">
              <div className="flex flex-col">
                <div className="flex items-center border-b-2 border-white pb-0 leading-none">
                  <span className="font-serif text-3xl font-black text-white tracking-tight">THC</span>
                  <div className="flex space-x-[-6px] ml-1 items-center" aria-hidden="true">
                    <ChevronRight className="w-6 h-6 text-[#2ECC40] stroke-[4]" />
                    <ChevronRight className="w-6 h-6 text-[#0074D9] stroke-[4]" />
                    <ChevronRight className="w-6 h-6 text-[#FF851B] stroke-[4]" />
                  </div>
                </div>
                <span className="text-[0.6rem] font-sans text-white font-bold tracking-wide mt-0.5 uppercase group-hover:text-thc-orange transition-colors">
                  Consulting Services!
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-thc-orange px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-thc-orange focus:ring-offset-2 focus:ring-offset-thc-navy"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-thc-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-thc-navy"
              >
                Hire Talent <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-thc-navy/95 backdrop-blur-md absolute w-full border-t border-gray-700 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:bg-gray-700 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="text-white bg-thc-orange block px-3 py-2 rounded-md text-base font-bold mt-4 focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(false)}
            >
              Hire Talent
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};