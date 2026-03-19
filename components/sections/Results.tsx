'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ScrollReveal } from '@/components/ScrollReveal';

const noteStyles = [
  { bg: '#FEF08A', rotate: '-rotate-2', tapeRotate: 'rotate-2' }, // Yellow pastel
  { bg: '#BBF7D0', rotate: 'rotate-3', tapeRotate: '-rotate-2' }, // Green pastel
  { bg: '#BAE6FD', rotate: '-rotate-1', tapeRotate: 'rotate-1' }, // Blue pastel
  { bg: '#FBCFE8', rotate: 'rotate-2', tapeRotate: '-rotate-3' }, // Pink pastel
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

function ResultCard({
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
  const { ref: refAfter, isVisible: visibleAfter } = useScrollReveal();
  const count = useCountUp(after, { shouldStart: visibleAfter });

  const style = noteStyles[index % noteStyles.length];

  return (
    <ScrollReveal delay={delay} className="w-full flex justify-center py-4">
      {/* The Sticky Note */}
      <div 
        ref={refAfter}
        className={`relative w-full max-w-[280px] sm:max-w-xs aspect-square p-6 md:p-8 flex flex-col items-center justify-center transform transition-all duration-500 hover:z-10 hover:scale-105 hover:rotate-0 shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] ${style.rotate}`}
        style={{ backgroundColor: style.bg }}
      >
        {/* Translucent Tape Highlight */}
        <div 
          className={`absolute top-[-14px] w-24 h-7 bg-white/40 backdrop-blur-[2px] shadow-sm border border-white/50 ${style.tapeRotate}`}
        />
        
        {/* Content */}
        <div className="text-center space-y-3 z-10 w-full">
          <h3 className="text-black/80 text-sm md:text-base font-bold uppercase tracking-widest border-b border-black/10 pb-2 mb-4">
            {title}
          </h3>
          
          <div className="relative">
            <span className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 tracking-tighter drop-shadow-sm">
              {count}{suffix}
            </span>
          </div>

          <p className="text-slate-600 text-sm font-semibold italic mt-4 pt-2">
            {before}
          </p>
        </div>
        
        {/* Bottom edge curl shadow block */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-black/5 to-transparent rounded-tl-full opacity-60 pointer-events-none" />
      </div>
    </ScrollReveal>
  );
}

export function Results() {
  return (
    <section id="results" className="relative w-full bg-slate-50 px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
             <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
               Wall of Wins
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
            Proof is in the{' '}
            <span className="relative inline-block text-slate-900">
              numbers.
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#00AEEF]/30 -z-10 -rotate-2" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
            See how we've transformed content for creators and brands—turning crickets into loyal audiences.
          </p>
        </ScrollReveal>

        {/* Results Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {results.map((result, index) => (
            <ResultCard
              key={result.title}
              index={index}
              title={result.title}
              before={result.before}
              after={result.after}
              suffix={result.suffix}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
