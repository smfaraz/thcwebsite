import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Specializations } from './components/Specializations';
import { RegionalExpertise } from './components/RegionalExpertise';
import { Services } from './components/Services';
import { JDGenerator } from './components/JDGenerator';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const id = href.substring(1);
          
          if (!id) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', window.location.pathname);
            return;
          }

          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Specializations />
        <RegionalExpertise />
        <Services />
        {/* Integrating the AI Tool as a feature section */}
        <JDGenerator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
