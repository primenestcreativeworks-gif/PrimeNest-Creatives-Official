'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { getActiveResults, ResultMetric } from '@/data/results';
import { TrendingUp, Award, Calendar, CheckCircle } from 'lucide-react';

function ResultMetricCard({ item, index }: { item: ResultMetric; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const primaryCount = useCountUp(item.numericCount || 0, { shouldStart: isVisible });
  const secondaryCount = useCountUp(item.secondaryCount || 0, { shouldStart: isVisible });

  return (
    <div
      ref={ref}
      className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
    >
      {/* Background glow accent on hover */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-36 h-36 bg-[#00AAFF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header client & service label */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#00AAFF]">
            {item.clientType}
          </span>
          <span className="text-[11px] font-medium text-white/40">
            {item.serviceType}
          </span>
        </div>

        {/* Animated Key Metric in White */}
        <div className="my-4">
          {item.numericCount !== undefined ? (
            <div className="flex flex-wrap items-baseline gap-2 text-white font-extrabold tracking-tight">
              <span className="text-4xl sm:text-5xl md:text-6xl text-white">
                {primaryCount}
                <span className="text-[#00AAFF] text-3xl sm:text-4xl">{item.numericSuffix}</span>
              </span>
              {item.secondaryCount !== undefined && (
                <span className="text-3xl sm:text-4xl md:text-5xl text-white/90 ml-1">
                  + {secondaryCount}
                  <span className="text-[#00AAFF] text-2xl sm:text-3xl">{item.secondarySuffix}</span>
                </span>
              )}
            </div>
          ) : (
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {item.metricText}
            </p>
          )}
        </div>

        {item.note && (
          <p className="text-sm text-white/60 mt-3 leading-relaxed">
            {item.note}
          </p>
        )}
      </div>

      <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-white/50">
        <CheckCircle className="w-3.5 h-3.5 text-[#00AAFF]" />
        <span>Verified post-production cadence</span>
      </div>
    </div>
  );
}

export function Results() {
  const activeResults = getActiveResults();

  return (
    <section id="results" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
            Production Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            Quantifiable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
              Volume & Performance.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
            Real publishing velocity and retention outcomes delivered across client partnerships.
          </p>
        </ScrollReveal>

        {/* Results Cards (Only active cards with verified stats shown) */}
        {activeResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {activeResults.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 120}>
                <ResultMetricCard item={item} index={index} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-white/50 text-sm">
            Verified case statistics available on request.
          </div>
        )}

        {/* Footer Note */}
        <ScrollReveal delay={200} className="text-center pt-6">
          <p className="text-xs sm:text-sm text-white/40 tracking-wide font-medium">
            Details and references available on request.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
