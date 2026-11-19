'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { Building2, Rocket, GraduationCap, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { SparkleDoodle } from '@/components/Doodles';

const transformationTabs = [
  {
    tag: 'BEFORE',
    tagColor: 'text-neutral-400',
    title: 'Irregular posting',
    description: 'Uploading when you find time, with no clear angle per clip, burnt out editing alone in timelines.',
    tilt: 'md:-rotate-2.5',
    borderColor: 'border-white/15',
    bg: 'bg-[#0E121B]',
  },
  {
    tag: 'AFTER // PRIMENEST',
    tagColor: 'text-[#00AAFF]',
    title: 'Daily clips on autopilot',
    description: 'A structured calendar of hooks, topics and platforms – edited, packaged and scheduled for you.',
    tilt: 'md:rotate-2.5',
    borderColor: 'border-[#00AAFF]/50',
    bg: 'bg-[#0A1628]',
  },
  {
    tag: 'BEFORE',
    tagColor: 'text-neutral-400',
    title: 'Retention cliff at 30s',
    description: 'Monotone talking head footage where 70% of viewers leave before reaching the core valuable takeaway.',
    tilt: 'md:rotate-2',
    borderColor: 'border-white/15',
    bg: 'bg-[#0E121B]',
  },
  {
    tag: 'AFTER // PRIMENEST',
    tagColor: 'text-[#00F5A0]',
    title: 'Compounding 65%+ watch time',
    description: 'Story-driven pacing, custom motion graphics, sound design and high-CTR thumbnail packaging.',
    tilt: 'md:-rotate-2',
    borderColor: 'border-[#00F5A0]/40',
    bg: 'bg-[#091C1B]',
  },
];

const clientProfiles = [
  { icon: Building2, label: 'Companies & Brands', desc: 'Product explainers & founder storytelling' },
  { icon: Rocket, label: 'Founders Starting Out', desc: 'Personal branding & thought leadership cuts' },
  { icon: GraduationCap, label: 'Coaches & Finance', desc: 'High-retention lectures & breakdown reels' },
  { icon: Mic, label: 'Podcasts & Studios', desc: 'Multi-cam studio editing & viral micro-clips' },
];

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden grain-overlay border-t border-white/[0.08]"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00AAFF]/5 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#00AAFF]">
              Client Profile // Impact Transformation
            </span>
            <SparkleDoodle className="w-4 h-4 text-[#FFB800]" />
          </div>

          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase leading-[1.1]">
            Who We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
              Transform.
            </span>
          </h2>
          <p className="mt-3 font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            We partner with teams where quality, consistency, and viewer retention directly impact bottom-line reach.
          </p>
        </ScrollReveal>

        {/* Wavy 3D Tilted Transformation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {transformationTabs.map((tab, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`relative rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 border-2 ${tab.borderColor} ${tab.bg} shadow-[0_22px_50px_rgba(0,0,0,0.95)] transition-all duration-300 group ${tab.tilt}`}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-montserrat font-bold tracking-wider uppercase ${tab.tagColor}`}>
                    {tab.tag}
                  </span>
                  {tab.tag.includes('PRIMENEST') && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00AAFF] animate-pulse shadow-[0_0_8px_#00AAFF]" />
                  )}
                </div>

                {/* Bold Title */}
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                  {tab.title}
                </h3>

                {/* Description */}
                <p className="font-montserrat text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {tab.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Categories Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {clientProfiles.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="p-5 rounded-2xl bg-[#0c0c0c] border border-white/10 hover:border-[#00AAFF]/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00AAFF] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-montserrat font-bold text-sm text-white mb-1">{cat.label}</h4>
                  <p className="font-montserrat text-xs text-neutral-400 font-normal leading-relaxed">{cat.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
