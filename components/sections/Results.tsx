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
    detail: 'Short-form retention engineering + 3 monthly podcasts.',
  },
  {
    isBig: false,
    metric: '90M+',
    label: 'views generated',
    tag: 'Portfolio Aggregate',
    detail: 'Organic impressions across client YouTube & Instagram profiles.',
  },
  {
    isBig: false,
    metric: '1,000+',
    label: 'followers from 30 shorts',
    tag: 'Finance Creator',
    detail: 'Rapid conversion from 45-second micro-breakdowns.',
  },
  {
    isBig: false,
    metric: '100+',
    label: 'shorts cut every month',
    tag: 'Monthly Output',
    detail: 'Engineered for viral velocity and platform distribution.',
  },
  {
    isBig: false,
    metric: '40+',
    label: 'long-form videos / month',
    tag: 'Long-Form Pipeline',
    detail: 'Story-driven pacing with custom B-roll & motion graphics.',
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative w-full bg-[#0a0a0a] px-4 md:px-8 lg:px-12 py-16 md:py-24 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Doodle */}
        <ScrollReveal className="mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <SquigDoodle className="w-16 h-3.5 text-[#00AAFF]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF]">
                  Verified Benchmarks
                </span>
              </div>
              <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
                What our edits <span className="text-[#00AAFF]">did.</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-neutral-400 max-w-md">
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
              <div className="h-full rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#00AAFF]/40 hover:shadow-[0_15px_35px_rgba(0,170,255,0.1)] transition-all duration-300 relative group overflow-hidden">
                {/* Sparkle Doodle on Big Card */}
                {item.isBig && (
                  <div className="absolute top-4 right-4 text-[#00AAFF]/30 group-hover:text-[#00AAFF] transition-colors pointer-events-none">
                    <SparkleDoodle className="w-6 h-6 animate-pulse" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#00AAFF] bg-[#00AAFF]/10 px-2.5 py-0.5 rounded-full border border-[#00AAFF]/20">
                      {item.tag}
                    </span>
                  </div>

                  <b className="font-anton text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-[#00AAFF] transition-colors block leading-tight tracking-wide">
                    {item.metric}
                  </b>

                  <span className="font-semibold text-white/90 text-base sm:text-lg block mt-2">
                    {item.label}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 mt-4 pt-3 border-t border-white/5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-neutral-500 mt-10 tracking-wide font-mono">
          Details and references available on request.
        </p>
      </div>
    </section>
  );
}
