'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Film, Image as ImageIcon, Zap, Lightbulb, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const coreServices = [
  {
    icon: Film,
    title: 'Long-Form Editing',
    description:
      'Consistent, story-driven YouTube edits with high retention pacing, custom B-roll integration, and motion graphics.',
    features: ['Retention pacing', 'Sound design & mix', 'Color grading'],
    number: 'SYS_01',
    link: '/services/long-form-edit',
  },
  {
    icon: ImageIcon,
    title: 'Thumbnails & Packaging',
    description:
      'Click-worthy thumbnails, titles, and descriptions engineered to win the YouTube browse and suggestion algorithms.',
    features: ['High-CTR visual concepts', 'A/B testing variants', 'Title & tag optimization'],
    number: 'SYS_02',
    link: '#work',
  },
  {
    icon: Zap,
    title: 'Short-Form Content',
    description:
      'Reels and Shorts cut from every long video, structured with aggressive 3-second hooks and dynamic subtitles.',
    features: ['Hook extraction', 'Animated captions', 'Re-framed 9:16 cuts'],
    number: 'SYS_03',
    link: '/services/short-form-content',
  },
  {
    icon: Lightbulb,
    title: 'Content Ideation',
    description:
      'Proven topics, hooks, and a structured monthly content calendar so your idea pipeline never runs dry.',
    features: ['Competitor gap analysis', 'Video hook frameworks', 'Monthly calendar'],
    number: 'SYS_04',
    link: '/services/youtube-channel-management',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden grain-overlay border-t border-white/[0.06]"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[#00AAFF]/5 blur-[130px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF] block mb-2">
              Capabilities // Bento
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] uppercase">
              Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
                Audience Retention.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              High-performance post-production built to turn raw footage into compounding channel growth.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Compact Animated Bento Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 80}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="compute-card compute-card-hover rounded-2xl p-5 md:p-6 h-full flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
                >
                  {/* Subtle top shine */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  {/* Corner Glow on Hover */}
                  <div className="pointer-events-none absolute -top-16 -right-16 w-32 h-32 bg-[#00AAFF]/12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Header: Icon & Monospace Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00AAFF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#00AAFF]/10 group-hover:border-[#00AAFF]/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#00AAFF] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist & Link */}
                  <div className="border-t border-white/[0.06] pt-3.5 mt-2">
                    <ul className="space-y-1.5 text-[11px] text-neutral-400 mb-3">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#00AAFF] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={service.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#00AAFF] hover:text-white transition-colors pt-1 group/link"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
