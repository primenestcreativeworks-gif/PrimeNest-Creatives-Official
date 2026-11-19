'use client';

import React from 'react';

const tickerItems = [
  { metric: '90M+', label: 'views', suffix: 'across client profiles', starColor: 'text-[#00AAFF]' },
  { metric: '100+', label: 'shorts', suffix: 'every month', starColor: 'text-[#A855F7]' },
  { metric: '40+', label: 'long-form', suffix: 'videos every month', starColor: 'text-[#00F5A0]' },
  { metric: '10k → 60k', label: 'subs', suffix: 'in 3 months', starColor: 'text-[#FFB800]' },
  { metric: '1,000+', label: 'followers', suffix: 'from 30 shorts', starColor: 'text-[#FF3366]' },
  { metric: '24–48h', label: 'turnaround', suffix: 'predictable delivery', starColor: 'text-[#00AAFF]' },
  { metric: '65%+', label: 'retention', suffix: 'average view duration', starColor: 'text-[#00F5A0]' },
];

export function MarqueeTicker() {
  return (
    <div
      className="w-full bg-[#0d0d0d] border-y border-white/10 py-4 sm:py-5 overflow-hidden select-none relative z-20"
      aria-label="Key numbers ticker"
    >
      <div className="flex animate-marquee items-center gap-10 md:gap-14 whitespace-nowrap">
        {/* Sequence 1 */}
        {tickerItems.map((item, index) => (
          <div key={`s1-${index}`} className="flex items-center gap-4 text-white">
            <span className="font-anton text-2xl sm:text-3xl tracking-wide uppercase">
              {item.metric} <span className="text-[#00AAFF] font-normal">{item.label}</span>{' '}
              <span className="font-montserrat text-white/70 text-base sm:text-lg font-medium lowercase">
                {item.suffix}
              </span>
            </span>
            <span className={`${item.starColor} text-xl font-bold`}>✦</span>
          </div>
        ))}

        {/* Duplicate for Seamless Infinite Loop */}
        {tickerItems.map((item, index) => (
          <div key={`s2-${index}`} className="flex items-center gap-4 text-white">
            <span className="font-anton text-2xl sm:text-3xl tracking-wide uppercase">
              {item.metric} <span className="text-[#00AAFF] font-normal">{item.label}</span>{' '}
              <span className="font-montserrat text-white/70 text-base sm:text-lg font-medium lowercase">
                {item.suffix}
              </span>
            </span>
            <span className={`${item.starColor} text-xl font-bold`}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
