'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SquigDoodle, SparkleDoodle } from '@/components/Doodles';

const resultsData = [
  {
    isBig: true,
    metric: '10k → 60k',
    label: 'subscribers in 3 months',
    tag: 'Coaching Institute',
    detail: 'Short-form retention engineering + weekly podcast cutdowns.',
    tagColor: 'text-[#00F5A0] bg-[#00F5A0]/10 border-[#00F5A0]/30',
  },
  {
    isBig: false,
    metric: '90M+',
    label: 'views generated',
    tag: 'Portfolio Aggregate',
    detail: 'Organic impressions across client YouTube & Instagram profiles.',
    tagColor: 'text-[#00AAFF] bg-[#00AAFF]/10 border-[#00AAFF]/30',
  },
  {
    isBig: false,
    metric: '1,000+',
    label: 'followers from 30 shorts',
    tag: 'Finance Creator',
    detail: 'Rapid conversion from 45-second micro-breakdowns.',
    tagColor: 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30',
  },
  {
    isBig: false,
    metric: '100+',
    label: 'shorts cut every month',
    tag: 'Monthly Output',
    detail: 'Engineered for viral velocity and platform distribution.',
    tagColor: 'text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/30',
  },
  {
    isBig: false,
    metric: '40+',
    label: 'long-form videos / month',
    tag: 'Long-Form Pipeline',
    detail: 'Story-driven pacing with custom B-roll & motion graphics.',
    tagColor: 'text-[#EC4899] bg-[#EC4899]/10 border-[#EC4899]/30',
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 border-t border-white/10"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-[#00AAFF]/5 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Doodle */}
        <ScrollReveal className="mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <SquigDoodle className="w-16 h-3.5" />
                <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#00AAFF]">
                  Verified Benchmarks
                </span>
                <SparkleDoodle className="w-4 h-4" />
              </div>
              <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-none">
                What our edits <span className="text-[#00AAFF]">did.</span>
              </h2>
            </div>
            <p className="font-montserrat text-sm md:text-base text-neutral-300 max-w-md font-normal">
              Real results delivered for partner creators, founders, and institutes.
            </p>
          </div>
        </ScrollReveal>

        {/* Prototype Results Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {resultsData.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              className={`h-full ${item.isBig ? 'md:col-span-2' : 'col-span-1'}`}
            >
              <div className="h-full rounded-2xl bg-[#0e0e0e] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#00AAFF]/50 hover:shadow-[0_15px_35px_rgba(0,170,255,0.12)] transition-all duration-300 relative group overflow-hidden">
                {/* Sparkle Doodle on Big Card */}
                {item.isBig && (
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <SparkleDoodle className="w-8 h-8 animate-pulse" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-montserrat font-bold text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <b className="font-anton text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-[#00AAFF] transition-colors block leading-tight tracking-wide">
                    {item.metric}
                  </b>

                  <span className="font-montserrat font-bold text-white text-base sm:text-lg block mt-2">
                    {item.label}
                  </span>
                </div>

                <p className="font-montserrat text-xs sm:text-sm text-neutral-400 mt-4 pt-3 border-t border-white/[0.06] font-normal leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-400 mt-10 tracking-wider font-montserrat font-semibold">
          Data verified from YouTube Studio analytics across active retainer clients.
        </p>
      </div>
    </section>
  );
}
