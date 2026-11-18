'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { motion } from 'framer-motion';
import { Video, CalendarCheck, ShieldCheck, RefreshCw, Clock, UserCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Video,
    title: 'Trial Edit',
    description:
      'Send us a clip. We edit it so you can judge our work on your own footage before committing to any package.',
    highlight: 'Zero risk · Test our cut quality',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Pilot Month',
    description:
      'A full month of your content at real volume, with no long-term lock-in. We build your editing templates and communication rhythm.',
    highlight: 'Volume test · Full post-pipeline',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Ongoing Partnership',
    description:
      'If it works, we move to a monthly retainer with a locked rate and a priority queue for your scheduled uploads.',
    highlight: 'Locked rate · Dedicated queue',
  },
];

const badges = [
  { icon: RefreshCw, label: '2 revision rounds on every deliverable' },
  { icon: Clock, label: 'Predictable turnaround' },
  { icon: UserCheck, label: 'One point of contact' },
];

export function Process() {
  return (
    <section id="process" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
            Onboarding & Execution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
              Work Together.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
            No endless sales cycles. We start with real footage and prove our value on your timeline.
          </p>
        </ScrollReveal>

        {/* 3-Step Timeline with Animated Connecting Line */}
        <div className="relative mb-16 md:mb-20">
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-[2px] z-0">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(0, 170, 255, 0.4)"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 150}>
                  <div className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between group relative overflow-hidden">
                    {/* Step Number Badge */}
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#00AAFF] shadow-lg group-hover:border-[#00AAFF]/40 group-hover:scale-105 transition-all duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-3xl font-black text-white/20 tracking-tighter group-hover:text-[#00AAFF]/40 transition-colors">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00AAFF] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <span className="text-xs font-semibold text-[#00AAFF] tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00AAFF]" />
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 3 Trust Badges */}
        <ScrollReveal delay={200} className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {badges.map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 flex items-center justify-center text-center gap-3"
                >
                  <BadgeIcon className="w-4 h-4 text-[#00AAFF] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white/80">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Section CTA */}
        <ScrollReveal delay={300} className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-2 sm:pl-6 backdrop-blur-md">
            <span className="text-sm md:text-base font-semibold text-white">
              Send us one video. See what it can become.
            </span>
            <CTAButton
              variant="primary"
              size="md"
              href="#contact"
              className="w-full sm:w-auto"
            >
              Get a Free Trial Edit
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
