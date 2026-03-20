'use client';

import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { createClient } from '@/utils/supabase/client';

const caseStudies = [
  {
    id: 'gs-vision-ias',
    client: 'G.S Vision IAS',
    label: 'Coaching Institute',
    headline: 'Turned lecture-style videos into a high-converting reel system.',
    before: 'Irregular uploads, low reel completion rate, no strong first 3 seconds.',
    after: 'Consistent weekly reels with strong hooks and clear CTAs driving sign‑ups.',
    work: [
      'Hook writing + scripting support',
      'Template for branded lower thirds & titles',
      'Monthly performance review and iteration',
    ],
    image: '/G.s Vision Subs.png',
  },
  {
    id: 'paradise-yatra',
    client: 'Paradise Yatra',
    label: 'Travel Content',
    headline: 'Streamlined upload schedules and enriched content with AI visuals.',
    before: 'Risk of inconsistency in both content quality and upload frequency.',
    after: 'Reliable content engine publishing 2 daily shorts and high-quality long-form videos.',
    work: [
      'Edit & schedule 2 daily shorts (morning/evening)',
      'Edit long-form travel videos with AI visuals',
      'End-to-end upload and schedule management',
    ],
    image: '/Paradise Yatra Subs.png',
  },
];

import { createPortal } from 'react-dom';

const BRAND_COLOR = '#00AEEF';

function CaseStudyModal({ item, onClose }: { item: typeof caseStudies[0]; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 sm:p-6 md:p-10 lg:p-16 overflow-y-auto custom-scrollbar">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#050816]/60 backdrop-blur-md transition-opacity animate-in fade-in cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Modal Content - White Background */}
      <div className="relative w-full max-w-4xl min-h-[70vh] md:min-h-[600px] flex flex-col my-auto bg-white border border-gray-200 rounded-2xl md:rounded-[2rem] shadow-[0_30px_100px_rgba(0,174,239,0.2)] animate-in zoom-in-95 duration-300">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-[#00AEEF] transition-colors z-20 shadow-sm"
        >
          ✕
        </button>

        <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-12 mt-6 md:mt-0 relative z-10">
          <div className="mb-6 md:mb-10">
              <p className="font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2" style={{ color: BRAND_COLOR }}>
                <span className="w-2 h-2 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: BRAND_COLOR }}></span>
                Case Study // {item.client}
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight max-w-2xl text-slate-900">
                {item.headline}
              </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10 flex-1">
            {/* Before Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col shadow-sm relative overflow-hidden group hover:bg-slate-100 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
              <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full border-2 border-slate-400"></span>
                  <h4 className="font-bold text-xs tracking-widest uppercase text-slate-500">
                    Before
                  </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 font-medium">
                {item.before}
              </p>
            </div>

            {/* After Box */}
            <div className="bg-[#00AEEF]/[0.05] border border-[#00AEEF]/20 rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col shadow-sm relative overflow-hidden group hover:bg-[#00AEEF]/10 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: BRAND_COLOR }}></div>
              <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(0,174,239,0.5)]" style={{ backgroundColor: BRAND_COLOR }}></span>
                  <h4 className="font-bold text-xs tracking-widest uppercase" style={{ color: BRAND_COLOR }}>
                    After PrimeNest
                  </h4>
              </div>
              <p className="text-slate-800 text-sm leading-relaxed flex-1 font-semibold">
                {item.after}
              </p>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="pt-6 md:pt-8 border-t border-gray-200 mt-auto">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-4 pl-1" style={{ color: BRAND_COLOR }}>
              Our scope of work
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {item.work.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 bg-white border border-gray-200 py-4 px-5 rounded-xl transition-colors hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/[0.02] shadow-sm"
                >
                  <span className="h-5 w-5 md:h-6 md:w-6 shrink-0 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold bg-[#00AEEF]/10" style={{ color: BRAND_COLOR }}>
                    ✓
                  </span>
                  <span className="text-slate-700 text-sm leading-snug font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function CaseStudyCard({ item }: { item: typeof caseStudies[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto open on hover for desktop, manual click for mobile
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isHovered) {
      // Small delay so it doesn't trigger accidentally while moving mouse fast
      timeout = setTimeout(() => setIsOpen(true), 150);
    }
    return () => clearTimeout(timeout);
  }, [isHovered]);

  return (
    <>
      <div
        className="group relative inline-flex flex-col rounded-[1.25rem] md:rounded-[1.75rem] p-2 md:p-3 bg-gradient-to-b from-white/[0.08] to-white/[0.01] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-pointer transform -rotate-1 transition-all duration-500 ease-out hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(56,189,248,0.15)]"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Inner Image Container - conforms to the image size */}
        <div className="relative rounded-[1rem] overflow-hidden bg-[#050816] border border-white/5 shadow-inner">
          <img
            src={(item as any).image_url || item.image}
            alt={item.client}
            className="block w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] max-w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Render the full-screen modal when open */}
      {isOpen && <CaseStudyModal item={item} onClose={() => { setIsOpen(false); setIsHovered(false); }} />}
    </>
  );
}

export function RecentWork() {
  const [dynamicStudies, setDynamicStudies] = useState(caseStudies);

  useEffect(() => {
    const fetchStudies = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        setDynamicStudies(data as any);
      }
    };
    fetchStudies();
  }, []);

  return (
    <section className="relative w-full bg-[#050816] px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-[#38BDF8]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
              Recent wins
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 md:mb-6 tracking-tight">
            Wanna see what we<br className="hidden md:block" /> did recently?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Scroll through a quick snapshot of how we&apos;ve helped creators grow,
            from first draft to measurable results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full px-2 md:px-0">
            {dynamicStudies.map((item) => (
               <CaseStudyCard key={item.id} item={item as any} />
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </section>
  );
}
