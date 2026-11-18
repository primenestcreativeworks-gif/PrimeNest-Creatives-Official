'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { Building2, Rocket, GraduationCap, Mic, Ban } from 'lucide-react';
import { motion } from 'framer-motion';

const transformationTabs = [
  {
    tag: 'BEFORE',
    tagColor: 'text-white/50',
    title: 'Irregular posting',
    description: 'Uploading when you find time, with no clear angle per clip, burnt out editing alone.',
    tilt: 'md:-rotate-3',
    borderColor: 'border-white/15',
    bg: 'bg-[#0E121B]',
  },
  {
    tag: 'AFTER // PRIMENEST',
    tagColor: 'text-[#00AAFF]',
    title: 'Daily clips on autopilot',
    description: 'A calendar of hooks, topics and platforms – edited, packaged and scheduled for you.',
    tilt: 'md:rotate-2.5',
    borderColor: 'border-[#00AAFF]/40',
    bg: 'bg-[#0A1628]',
  },
  {
    tag: 'BEFORE',
    tagColor: 'text-white/50',
    title: 'Retention cliff at 30s',
    description: 'Monotone talking head footage where 70% of viewers leave before reaching the core message.',
    tilt: 'md:rotate-2',
    borderColor: 'border-white/15',
    bg: 'bg-[#0E121B]',
  },
  {
    tag: 'AFTER // PRIMENEST',
    tagColor: 'text-[#00AAFF]',
    title: 'Compounding 65%+ watch time',
    description: 'Story-driven pacing, custom motion graphics, sound design and high-CTR thumbnail packaging.',
    tilt: 'md:-rotate-2.5',
    borderColor: 'border-[#00AAFF]/40',
    bg: 'bg-[#0A1628]',
  },
];

const clientProfiles = [
  { icon: Building2, label: 'Companies & Brands' },
  { icon: Rocket, label: 'Founders Starting Out' },
  { icon: GraduationCap, label: 'Coaches & Finance Creators' },
  { icon: Mic, label: 'Podcasts & Studios' },
];

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden grain-overlay border-t border-white/[0.06]"
    >
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00AAFF]/5 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF] block mb-2">
            Client Profile // Impact Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] uppercase">
            Who We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
              Transform.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            We partner with teams where quality, consistency, and viewer retention directly impact bottom-line reach.
          </p>
        </ScrollReveal>

        {/* Wavy 3D Tilted Pill Tabs (Directly inspired by Image 7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {transformationTabs.map((tab, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`relative rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 border-2 ${tab.borderColor} ${tab.bg} shadow-[0_22px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(0,170,255,0.12)] transition-all duration-300 group ${tab.tilt}`}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase ${tab.tagColor}`}>
                    {tab.tag}
                  </span>
                  {tab.tag.includes('PRIMENEST') && (
                    <span className="w-2 h-2 rounded-full bg-[#00AAFF] animate-pulse shadow-[0_0_8px_#00AAFF]" />
                  )}
                </div>

                {/* Bold Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-[#00AAFF] transition-colors">
                  {tab.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {tab.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Category Chips */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clientProfiles.map((client) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/80 hover:border-[#00AAFF]/40 transition-colors shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00AAFF]" />
                  <span>{client.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Honest "What we don't take on" block */}
        <ScrollReveal delay={200}>
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                <Ban className="w-4 h-4 text-white/60" />
              </div>
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-0.5">
                  Disciplined Focus
                </span>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  <span className="text-white font-bold">What we don't take on: </span>
                  Ad management, daily vlogs, flashy hype-style edits, or fitness content. <span className="text-[#00AAFF] font-medium">Saying no is how we stay good at what we do.</span>
                </p>
              </div>
            </div>

            <CTAButton
              variant="secondary"
              size="sm"
              href="#contact"
              className="shrink-0 text-xs"
            >
              Samples on request
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
