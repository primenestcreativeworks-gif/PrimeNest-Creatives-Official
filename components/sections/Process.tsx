'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { motion } from 'framer-motion';
import { Video, CalendarCheck, ShieldCheck, RefreshCw, Clock, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Video,
    title: 'Trial Edit',
    phase: 'Step 01 // Validation',
    description:
      'Send us a clip. We edit it so you can judge our pacing, sound design, and motion graphics on your own footage before committing.',
    highlight: 'Zero risk · Test our cut quality',
    tilt: 'md:[transform:rotateY(5deg)_rotateX(2deg)]',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Pilot Month',
    phase: 'Step 02 // Calibration',
    description:
      'A full month of your content at real volume, with no long-term lock-in. We build your editing templates, title styles, and communication rhythm.',
    highlight: 'Volume test · Full post-pipeline',
    tilt: 'md:[transform:translateZ(20px)_scale(1.02)]',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Ongoing Partnership',
    phase: 'Step 03 // Scale',
    description:
      'If it works, we move to a monthly retainer with a locked rate and a priority queue for your scheduled uploads.',
    highlight: 'Locked rate · Dedicated queue',
    tilt: 'md:[transform:rotateY(-5deg)_rotateX(2deg)]',
  },
];

const badges = [
  { icon: RefreshCw, label: '2 revision rounds on every deliverable' },
  { icon: Clock, label: 'Predictable turnaround' },
  { icon: UserCheck, label: 'One point of contact' },
];

export function Process() {
  return (
    <section
      id="process"
      className="w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden grain-overlay border-t border-white/[0.06]"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00AAFF]/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF] block mb-2">
            Execution Protocol // 3-Step Flow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] uppercase">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
              Work Together.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            No endless sales cycles. We start with real footage and prove our value on your timeline.
          </p>
        </ScrollReveal>

        {/* 3D Elevated Cards Container */}
        <div className="relative mb-14 md:mb-18 [perspective:1400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 120}>
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      rotateY: 0,
                      rotateX: 0,
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                    className={`relative rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between bg-gradient-to-b from-[#141418] via-[#0E0E12] to-[#0A0A0E] border-2 border-white/10 hover:border-[#00AAFF]/60 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,170,255,0.12)] transition-all duration-500 group [transform-style:preserve-3d] ${step.tilt}`}
                  >
                    {/* Top glossy 3D highlight */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl opacity-70" />

                    {/* Step Corner Glow on hover */}
                    <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-[#00AAFF]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      {/* Step Number & 3D Icon Header */}
                      <div className="flex items-center justify-between mb-6 [transform:translateZ(25px)]">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#1C2533] to-[#0D1522] border border-[#00AAFF]/30 flex items-center justify-center text-[#00AAFF] shadow-[0_8px_20px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_20px_#00AAFF]/40 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-white/15 tracking-tighter group-hover:text-[#00AAFF]/40 transition-colors font-mono">
                          {step.number}
                        </span>
                      </div>

                      {/* Phase tag */}
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#00AAFF] mb-2 [transform:translateZ(20px)]">
                        {step.phase}
                      </p>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#00AAFF] transition-colors leading-snug [transform:translateZ(25px)]">
                        {step.title}
                      </h3>

                      <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 [transform:translateZ(15px)]">
                        {step.description}
                      </p>
                    </div>

                    {/* 3D Floating Pill Highlight */}
                    <div className="border-t border-white/5 pt-4 [transform:translateZ(20px)]">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] group-hover:bg-[#00AAFF]/10 border border-white/10 group-hover:border-[#00AAFF]/30 px-3.5 py-1.5 text-xs text-white/80 transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00AAFF] shadow-[0_0_8px_#00AAFF]" />
                        <span className="font-medium text-[11px]">{step.highlight}</span>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 3 Badges */}
        <ScrollReveal className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 p-3.5 flex items-center justify-center gap-2.5 text-center text-xs text-white/80 hover:border-[#00AAFF]/30 transition-colors shadow-md"
                >
                  <Icon className="w-4 h-4 text-[#00AAFF] shrink-0" />
                  <span className="font-semibold">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Action CTA */}
        <ScrollReveal className="text-center">
          <CTAButton variant="primary" size="lg" href="#contact">
            Send us one video. See what it can become.
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
