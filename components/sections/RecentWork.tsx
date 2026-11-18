'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { createClient } from '@/utils/supabase/client';
import { X, Check, ArrowRight, TrendingUp } from 'lucide-react';

const defaultCaseStudies = [
  {
    id: 'gs-vision-ias',
    client: 'G.S Vision IAS',
    label: 'Coaching Institute',
    headline: 'Turned lecture-style videos into a high-converting reel system.',
    before: 'Irregular uploads, low reel completion rate, and no strong first 3 seconds hook.',
    after: 'Consistent weekly reels with strong retention hooks and clear CTAs driving course sign-ups.',
    work: [
      'Hook writing & scripting structure',
      'Branded dynamic lower thirds & motion titles',
      'Bi-weekly performance review & iteration',
    ],
    image: '/G.s Vision Subs.png',
  },
  {
    id: 'paradise-yatra',
    client: 'Paradise Yatra',
    label: 'Travel Content Studio',
    headline: 'Streamlined upload schedules and enriched content with AI visuals.',
    before: 'Risk of inconsistency in both content pacing and upload frequency.',
    after: 'Reliable content engine publishing 2 daily shorts and high-retention long-form travel episodes.',
    work: [
      'Edit & schedule 2 daily shorts (morning/evening)',
      'Long-form travel documentary cuts with AI b-roll',
      'End-to-end publishing pipeline & metadata',
    ],
    image: '/Paradise Yatra Subs.png',
  },
];

function CaseStudyModal({
  item,
  onClose,
}: {
  item: typeof defaultCaseStudies[0];
  onClose: () => void;
}) {
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
    <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content - Cinematic Dark Glass */}
      <div className="relative w-full max-w-4xl min-h-[500px] flex flex-col my-auto bg-[#0E0E0E] border border-white/10 rounded-3xl shadow-[0_30px_100px_rgba(0,170,255,0.25)] animate-in zoom-in-95 duration-200 z-10 overflow-hidden">
        {/* Soft top-right blue glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#00AAFF]/15 rounded-full blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#00AAFF] text-white hover:text-[#0A0A0A] transition-colors border border-white/10 z-20 cursor-pointer shadow-md"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 flex flex-col p-6 sm:p-8 md:p-12 relative z-10">
          {/* Header */}
          <div className="mb-8">
            <p className="font-bold tracking-[0.2em] uppercase text-xs mb-2.5 flex items-center gap-2 text-[#00AAFF]">
              <span className="w-2 h-2 rounded-full bg-[#00AAFF] animate-pulse shadow-[0_0_8px_#00AAFF]" />
              Case Study // {item.client}
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-2xl">
              {item.headline}
            </h3>
          </div>

          {/* Before & After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 flex-1">
            {/* Before Box */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <h4 className="font-bold text-xs tracking-widest uppercase text-white/50">
                  Before PrimeNest
                </h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {item.before}
              </p>
            </div>

            {/* After Box */}
            <div className="rounded-2xl bg-[#00AAFF]/[0.04] border border-[#00AAFF]/30 p-6 flex flex-col shadow-[0_0_30px_rgba(0,170,255,0.1)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00AAFF] shadow-[0_0_8px_#00AAFF]" />
                <h4 className="font-bold text-xs tracking-widest uppercase text-[#00AAFF]">
                  After PrimeNest
                </h4>
              </div>
              <p className="text-white text-sm font-medium leading-relaxed flex-1">
                {item.after}
              </p>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="pt-6 border-t border-white/10 mt-auto">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-[#00AAFF]">
              Our Scope of Work Delivered:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {item.work.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3"
                >
                  <Check className="w-4 h-4 text-[#00AAFF] shrink-0" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium leading-snug">
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

function CaseStudyCard({ item }: { item: typeof defaultCaseStudies[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 group cursor-pointer flex flex-col justify-between transition-all duration-300 max-w-lg w-full mx-auto border border-white/10 hover:border-[#00AAFF]/40 shadow-xl"
        onClick={() => setIsOpen(true)}
      >
        {/* Milestone Visual - Medium size, elegant framed container */}
        <div className="relative rounded-xl overflow-hidden bg-[#121212] border border-white/10 mb-4 h-44 sm:h-48 w-full">
          <img
            src={(item as any).image_url || item.image}
            alt={item.client}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient vignette to blend into dark card */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/10 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-[#00AAFF] border border-[#00AAFF]/30">
            {item.label}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/50">{item.client}</span>
            <span className="text-xs font-bold text-[#00AAFF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Study <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#00AAFF] transition-colors leading-snug line-clamp-2">
            {item.headline}
          </h3>
        </div>
      </div>

      {/* Interactive Modal */}
      {isOpen && (
        <CaseStudyModal
          item={item}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export function RecentWork() {
  const [dynamicStudies, setDynamicStudies] = useState(defaultCaseStudies);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase
          .from('case_studies')
          .select('*')
          .order('created_at', { ascending: false });
        if (data && data.length > 0) {
          setDynamicStudies(data as any);
        }
      } catch (err) {
        // Fallback to default verified case studies
      }
    };
    fetchStudies();
  }, []);

  return (
    <section id="case-studies" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-2">
            In-Depth Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            From Raw Footage To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
              Compounding Reach.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed font-normal">
            Deep dive into real post-production transformations we delivered for our partner channels. Click any case study for the breakdown.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {dynamicStudies.map((study) => (
            <ScrollReveal key={study.id} delay={100}>
              <CaseStudyCard item={study as any} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
