'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { Building2, Rocket, GraduationCap, Mic, Ban, ArrowRight } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Companies & Brands',
    desc: 'High-production case studies, product updates, and brand documentaries that respect your visual identity.',
  },
  {
    icon: Rocket,
    title: 'Founders Starting Out',
    desc: 'Turn raw talking-head footage into an authoritative YouTube presence and thought-leadership reels.',
  },
  {
    icon: GraduationCap,
    title: 'Coaches, Educators & Finance Creators',
    desc: 'Structured long-form lectures and high-retention shorts with clear diagrams, charts, and key takeaways.',
  },
  {
    icon: Mic,
    title: 'Podcasts & Studios',
    desc: 'Multi-cam studio cutdowns, seamless audio mastering, and high-volume short-form distribution systems.',
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#00AAFF]/7 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
            Client Profile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            Who We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
              Work With.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
            We partner with teams where quality, consistency, and viewer retention directly impact bottom-line growth.
          </p>
        </ScrollReveal>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <ScrollReveal key={aud.title} delay={index * 100}>
                <div className="glass-card glass-card-hover rounded-3xl p-7 md:p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF] mb-6 group-hover:scale-110 group-hover:border-[#00AAFF]/40 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00AAFF] transition-colors">
                      {aud.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Honest "What we don't take on" block */}
        <ScrollReveal delay={250}>
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0 mt-1">
                <Ban className="w-5 h-5 text-white/60" />
              </div>
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-1">
                  Disciplined Focus
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                  What we don't take on:
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Ad management, daily vlogs, flashy hype-style edits, or fitness content. <span className="text-white font-medium">Saying no is how we stay good at what we do.</span>
                </p>
              </div>
            </div>

            <CTAButton
              variant="secondary"
              size="sm"
              href="#contact"
              className="shrink-0"
            >
              Samples available on request
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
