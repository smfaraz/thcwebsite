import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Globe } from 'lucide-react';
import { FadeIn } from './FadeIn';

const TYPEWRITER_WORDS = [
  "Executive Search",
  "Technical Manpower",
  "C-Level Placements",
  "Engineering Talent",
  "Project Managers",
  "Solution Architects",
  "Drilling Engineers",
  "Geoscientists",
  "Operations Managers",
  "Petroleum Engineers",
  "Safety Experts",
  "Supply Chain Leads",
  "Procurement Specialists",
  "Construction Managers",
  "Commissioning Engineers",
  "HSE Managers",
  "Site Supervisors",
  "Pipeline Engineers",
  "Maintenance Planners",
  "Structural Engineers",
  "Rig Supervisors",
  "Onshore Specialists",
  "Offshore Crew",
  "Reservoir Engineers"
];

export const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length <= 1) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }, 30);
    } else {
      timeout = setTimeout(() => {
        const nextText = currentWord.substring(0, typedText.length + 1);
        setTypedText(nextText);
        if (nextText === currentWord) {
          setIsPaused(true);
        }
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex, isPaused]);

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
        <FadeIn delay={0}>
          <span className="inline-block py-1 px-3 rounded-full bg-thc-orange/20 border border-thc-orange text-thc-orange font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">
            Talent Hunters Consulting
          </span>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-0 max-w-5xl h-[120px] sm:h-[180px] md:h-[180px]">
            Talent Advisory & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-thc-orange to-yellow-400">
              {typedText}
            </span>
            <span className="animate-pulse text-thc-orange font-light">|</span>
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <h2 className="text-xl sm:text-2xl md:text-2xl text-white font-serif italic mb-6">
            "International professionals with a personal touch"
          </h2>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-300 font-light mb-10 leading-relaxed mx-auto sm:mx-0">
            Talent Hunters Consulting is a global-minded talent consulting firm with deep expertise in the <strong>Oil and Gas</strong> sector across the <strong>KSA, USA, UAE, and International markets</strong>. We understand what it takes to build sustainable relationships.
          </p>
        </FadeIn>

        <FadeIn delay={800}>
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
        </FadeIn>

        {/* Quick Stats */}
        <FadeIn delay={1000}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto sm:mx-0">
            <div>
              <p className="text-xl font-bold text-white mb-1">Global Mindset</p>
              <p className="text-sm text-gray-400">KSA, USA, UAE & International</p>
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
        </FadeIn>
      </div>
    </div>
  );
};