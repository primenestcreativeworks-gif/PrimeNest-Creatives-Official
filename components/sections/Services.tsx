'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Film, Image as ImageIcon, Zap, Lightbulb, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SparkleDoodle } from '@/components/Doodles';

const coreServices = [
  {
    icon: Film,
    title: 'Long-Form Editing',
    description:
      'Consistent, story-driven YouTube edits with high retention pacing, custom B-roll integration, and motion graphics.',
    features: ['Retention pacing', 'Sound design & mix', 'Color grading'],
    number: '01',
    color: 'from-[#00AAFF]/20 to-transparent',
    iconColor: 'text-[#00AAFF]',
    iconBg: 'bg-[#00AAFF]/10 border-[#00AAFF]/30',
    borderColor: 'group-hover:border-[#00AAFF]/50',
    link: '/services/long-form-edit',
  },
  {
    icon: ImageIcon,
    title: 'Thumbnails & Packaging',
    description:
      'Click-worthy thumbnails, titles, and descriptions engineered to win the YouTube browse and suggestion algorithms.',
    features: ['High-CTR visual concepts', 'A/B testing variants', 'Title & tag optimization'],
    number: '02',
    color: 'from-[#FFB800]/20 to-transparent',
    iconColor: 'text-[#FFB800]',
    iconBg: 'bg-[#FFB800]/10 border-[#FFB800]/30',
    borderColor: 'group-hover:border-[#FFB800]/50',
    link: '#work',
  },
  {
    icon: Zap,
    title: 'Short-Form Content',
    description:
      'Reels and Shorts cut from every long video, structured with aggressive 3-second hooks and dynamic subtitles.',
    features: ['Hook extraction', 'Animated captions', 'Re-framed 9:16 cuts'],
    number: '03',
    color: 'from-[#A855F7]/20 to-transparent',
    iconColor: 'text-[#A855F7]',
    iconBg: 'bg-[#A855F7]/10 border-[#A855F7]/30',
    borderColor: 'group-hover:border-[#A855F7]/50',
    link: '/services/short-form-content',
  },
  {
    icon: Lightbulb,
    title: 'Content Ideation',
    description:
      'Proven topics, hooks, and a structured monthly content calendar so your idea pipeline never runs dry.',
    features: ['Competitor gap analysis', 'Video hook frameworks', 'Monthly calendar'],
    number: '04',
    color: 'from-[#00F5A0]/20 to-transparent',
    iconColor: 'text-[#00F5A0]',
    iconBg: 'bg-[#00F5A0]/10 border-[#00F5A0]/30',
    borderColor: 'group-hover:border-[#00F5A0]/50',
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
            <div className="flex items-center gap-2 mb-2">
              <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#00AAFF]">
                Core Capabilities // Bento
              </span>
              <SparkleDoodle className="w-4 h-4 text-[#FFB800]" />
            </div>

            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.1]">
              Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
                Audience Retention.
              </span>
            </h2>
            <p className="mt-3 font-montserrat text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
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
                  className={`compute-card rounded-2xl p-5 md:p-6 h-full flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border border-white/10 ${service.borderColor} hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]`}
                >
                  {/* Subtle top shine */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  {/* Corner Glow on Hover */}
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div>
                    {/* Header: Icon & Monospace Number in Montserrat */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl ${service.iconBg} border flex items-center justify-center ${service.iconColor} transition-all duration-300 group-hover:scale-110 shadow-md`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-montserrat font-bold text-xs text-neutral-400 tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-montserrat font-bold text-lg md:text-xl text-white mb-2 group-hover:text-[#00AAFF] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-montserrat text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist & Link */}
                  <div className="border-t border-white/[0.08] pt-3.5 mt-2">
                    <ul className="space-y-1.5 text-xs text-neutral-300 mb-3 font-montserrat">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={service.link}
                      className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-[#00AAFF] hover:text-white transition-colors pt-1 group/link"
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
