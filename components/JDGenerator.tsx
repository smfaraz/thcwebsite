import React, { useState } from 'react';
import { Sparkles, Loader2, FileText, Copy, Check } from 'lucide-react';
import { generateJobDescription } from '../services/geminiService';
import { FadeIn } from './FadeIn';

export const JDGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    level: 'Mid-Senior',
    location: 'Riyadh, KSA',
    skills: ''
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const jd = await generateJobDescription(formData);
    setResult(jd);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tools" className="py-24 bg-white" aria-labelledby="ai-tools-heading">
      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-5 min-h-[600px]">
            
            {/* Form Side */}
            <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                AI Powered
              </div>
              <h3 id="ai-tools-heading" className="text-2xl sm:text-3xl font-heading font-bold text-thc-navy mb-4">
                Smart JD Generator
              </h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Hiring? Let our AI consultant draft a perfect Oil & Gas job description for you in seconds.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="jd-title" className="block text-sm font-medium text-gray-700 mb-1">Role Title</label>
                  <input 
                    id="jd-title"
                    type="text" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thc-navy focus:border-transparent outline-none transition-all"
                    placeholder="e.g. Senior Drilling Engineer"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jd-level" className="block text-sm font-medium text-gray-700 mb-1">Seniority</label>
                    <select 
                      id="jd-level"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none bg-white focus:ring-2 focus:ring-thc-navy"
                      value={formData.level}
                      onChange={(e) => setFormData({...formData, level: e.target.value})}
                    >
                      <option>Junior</option>
                      <option>Mid-Senior</option>
                      <option>Executive</option>
                      <option>Contractor</option>
                    </select>
                  </div>
                  <div>
                     <label htmlFor="jd-location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                     <input 
                      id="jd-location"
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-thc-navy"
                      placeholder="e.g. Dubai"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="jd-skills" className="block text-sm font-medium text-gray-700 mb-1">Key Requirements / Skills</label>
                  <textarea 
                    id="jd-skills"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thc-navy outline-none h-24 resize-none"
                    placeholder="e.g. 10 years experience, Offshore safety certs, fluent in Arabic..."
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full bg-thc-navy text-white font-bold py-3 rounded-lg hover:bg-[#003366] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-thc-navy"
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5" aria-hidden="true" /> : <Sparkles className="w-5 h-5" aria-hidden="true" />}
                  {loading ? 'Generating...' : 'Generate Description'}
                </button>
              </form>
            </div>

            {/* Result Side */}
            <div 
              className="lg:col-span-3 bg-white p-6 sm:p-8 lg:p-12 relative min-h-[400px] lg:min-h-auto"
              aria-live="polite"
            >
               {result ? (
                 <div className="h-full flex flex-col">
                   <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                     <h4 className="font-bold text-gray-800 flex items-center gap-2">
                       <FileText className="w-5 h-5 text-thc-orange" aria-hidden="true" /> Generated Draft
                     </h4>
                     <button 
                       onClick={handleCopy}
                       aria-label={copied ? "Copied to clipboard" : "Copy text to clipboard"}
                       className="text-sm font-medium text-gray-500 hover:text-thc-navy flex items-center gap-1 transition-colors focus:outline-none focus:text-thc-navy"
                     >
                       {copied ? <Check className="w-4 h-4 text-green-500" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                       {copied ? 'Copied' : 'Copy Text'}
                     </button>
                   </div>
                   <div className="prose prose-sm max-w-none flex-grow overflow-y-auto pr-4 text-gray-600 space-y-4 whitespace-pre-line max-h-[500px] lg:max-h-full" tabIndex={0}>
                     {result}
                   </div>
                 </div>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-gray-300" aria-hidden="true" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-400">Ready to Draft</h4>
                    <p className="text-gray-400 max-w-sm mt-2 text-sm sm:text-base">
                      Fill out the form on the left to generate a tailored job description powered by Gemini AI.
                    </p>
                 </div>
               )}
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
};