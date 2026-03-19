'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { BentoGridServices } from '@/components/BentoGridServices';

export function Services() {
  return (
    <section id="services" className="w-full bg-white px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
              Services built for{' '}
              <span className="relative inline-block text-slate-900">
                modern creators.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#00AEEF]/30 -z-10 -rotate-1" />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
              Five comprehensive content production services designed to elevate your brand and
              engage your audience.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Services */}
        <BentoGridServices />
      </div>
    </section>
  );
}
