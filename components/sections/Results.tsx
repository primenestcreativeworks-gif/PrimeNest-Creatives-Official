'use client';

import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ScrollReveal } from '@/components/ScrollReveal';

const noteStyles = [
  {
    bg: 'bg-[#0E1A2B]',
    border: 'border-[#00AAFF]/35',
    rotate: '-rotate-2',
    tapeRotate: 'rotate-2',
    glow: 'shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,170,255,0.15)]',
  },
  {
    bg: 'bg-[#141B2B]',
    border: 'border-white/20',
    rotate: 'rotate-3',
    tapeRotate: '-rotate-2',
    glow: 'shadow-[0_15px_40px_rgba(0,0,0,0.8)]',
  },
  {
    bg: 'bg-[#0D2238]',
    border: 'border-[#00AAFF]/40',
    rotate: '-rotate-1',
    tapeRotate: 'rotate-1',
    glow: 'shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,170,255,0.18)]',
  },
  {
    bg: 'bg-[#151D2A]',
    border: 'border-white/20',
    rotate: 'rotate-2',
    tapeRotate: '-rotate-3',
    glow: 'shadow-[0_15px_40px_rgba(0,0,0,0.8)]',
  },
];

const results = [
  {
    title: 'Video Views',
    before: 'Up from 2,000 views',
    after: 200,
    suffix: 'K+',
  },
  {
    title: 'Subscribers',
    before: 'Grew from just 500',
    after: 50,
    suffix: 'K+',
  },
  {
    title: 'Engagement',
    before: 'Was stuck at 2%',
    after: 45,
    suffix: '%',
  },
  {
    title: 'Content Output',
    before: 'From 2 videos/month',
    after: 15,
    suffix: '/mo',
  },
];

function StickyNoteCard({
  title,
  before,
  after,
  suffix,
  delay,
  index,
}: {
  title: string;
  before: string;
  after: number;
  suffix?: string;
  delay: number;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  const count = useCountUp(after, { shouldStart: isVisible });
  const style = noteStyles[index % noteStyles.length];

  return (
    <ScrollReveal delay={delay} className="w-full flex justify-center py-4">
      {/* The Sticky Note */}
      <div
        ref={ref}
        className={`relative w-full max-w-[270px] sm:max-w-[290px] aspect-square p-6 md:p-8 flex flex-col items-center justify-center transform transition-all duration-500 hover:z-20 hover:scale-105 hover:rotate-0 rounded-lg border ${style.bg} ${style.border} ${style.glow} ${style.rotate}`}
      >
        {/* Translucent Frosted Tape Highlight */}
        <div
          className={`absolute -top-3.5 w-24 h-7 bg-white/25 backdrop-blur-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-white/40 rounded-sm pointer-events-none z-20 ${style.tapeRotate}`}
        />

        {/* Note Content */}
        <div className="text-center space-y-3 z-10 w-full">
          <h3 className="text-[#00AAFF] text-xs sm:text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-2 mb-3">
            {title}
          </h3>

          <div className="relative">
            <span className="text-5xl sm:text-6xl font-black text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              {count}
              <span className="text-[#00AAFF]">{suffix}</span>
            </span>
          </div>

          <p className="text-white/60 text-xs sm:text-sm font-medium italic mt-3 pt-1">
            {before}
          </p>
        </div>

        {/* Bottom edge curl shadow block */}
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-black/60 to-transparent rounded-tl-full opacity-80 pointer-events-none" />
      </div>
    </ScrollReveal>
  );
}

export function Results() {
  return (
    <section
      id="results"
      className="relative w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 overflow-hidden grain-overlay border-t border-white/[0.06]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AAFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 shadow-sm font-mono text-[10px] md:text-xs uppercase text-[#00AAFF]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Wall of Wins // Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-[-0.03em] uppercase">
            Proof is in the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
              numbers.
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            See how we've transformed content for creators and brands—turning raw talk into compounding organic reach.
          </p>
        </ScrollReveal>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {results.map((result, index) => (
            <StickyNoteCard
              key={result.title}
              index={index}
              title={result.title}
              before={result.before}
              after={result.after}
              suffix={result.suffix}
              delay={index * 120}
            />
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-white/35 mt-12 tracking-wide">
          Details and references available on request.
        </p>
      </div>
    </section>
  );
}
