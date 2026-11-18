'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { Film, Image as ImageIcon, Zap, Lightbulb, Check, X, ArrowUpRight } from 'lucide-react';

const coreServices = [
  {
    icon: Film,
    title: 'Long-Form Editing',
    description:
      'Consistent, story-driven YouTube edits with high retention pacing, custom B-roll integration, and motion graphics where the video needs them.',
    features: ['Retention curve optimization', 'Dynamic pacing & rhythm', 'Sound design & atmospheric mix', 'Color grading & branded assets'],
    number: '01',
  },
  {
    icon: ImageIcon,
    title: 'Thumbnails & Packaging',
    description:
      'Click-worthy thumbnails plus titles and descriptions engineered to win the browse and suggestion algorithms for your channel.',
    features: ['High-CTR visual concepts', 'Expressive facial composite & grading', 'Optimized YouTube titles & tags', 'A/B testing-ready variants'],
    number: '02',
  },
  {
    icon: Zap,
    title: 'Short-Form Content',
    description:
      'Reels and Shorts cut from every long video, structured with aggressive 3-second hooks, dynamic subtitles, and fast-paced micro-storytelling.',
    features: ['Strategic hook extraction', 'Animated captions & highlights', 'Re-framed 9:16 vertical cuts', 'Re-hooking for multiple platforms'],
    number: '03',
  },
  {
    icon: Lightbulb,
    title: 'Content Ideation',
    description:
      'Proven topics, hooks, and a structured monthly content calendar so your idea pipeline and publishing schedule never run dry.',
    features: ['Niche & competitor gap analysis', 'Proven video hook frameworks', 'Quarterly content calendar', 'Title & angle brainstorms'],
    number: '04',
  },
];

const alsoAvailable = [
  { name: 'Podcast Editing', desc: 'Multi-cam video podcasts + clean audio mastering' },
  { name: 'YouTube Channel Management', desc: 'Metadata, scheduling, and upload pipeline' },
  { name: 'Gen AI Content', desc: 'AI visual generation & synthesized voice pacing' },
  { name: 'AI UGC Ads', desc: 'High-converting ad creatives cut for paid media' },
];

const comparisonData = [
  {
    metric: 'Scope',
    hiringOne: 'Limited to one skill set (usually basic cuts without advanced motion design)',
    primeNest: 'Complete post-pipeline: story editor, motion designer, audio mixer & packaging specialist',
  },
  {
    metric: 'Capacity',
    hiringOne: 'Strict bottleneck of 1 person’s daily hours; output stalls during busy cycles',
    primeNest: 'Elastic capacity that scales with your volume and guaranteed publishing slots',
  },
  {
    metric: 'Continuity',
    hiringOne: 'Single point of failure; work pauses on sickness, vacations, or sudden churn',
    primeNest: 'Uninterrupted studio continuity with team redundancy and zero missed uploads',
  },
  {
    metric: 'Cost & Overhead',
    hiringOne: 'Salary, equipment, plugins, hardware upgrades, and onboarding management overhead',
    primeNest: 'Predictable monthly flat rate, zero payroll tax, zero hardware or software costs',
  },
  {
    metric: 'Creative Energy',
    hiringOne: 'Editor burns out doing thumbnails, captions, audio, and color correction alone',
    primeNest: 'Specialists focused on what they do best, keeping creative quality compounding',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay">
      {/* Background soft ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#00AAFF]/8 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
              Post-Production Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
              Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                Audience Retention.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-normal">
              We handle the entire post-production lifecycle so you can stay in your creative zone.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between group relative overflow-hidden">
                  {/* Subtle card corner glow on hover */}
                  <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 bg-[#00AAFF]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Number and Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#00AAFF]/40">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-white/20 font-bold text-sm tracking-widest uppercase">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00AAFF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="border-t border-white/5 pt-6 mt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-white/70">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#00AAFF] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* "Also Available" Section */}
        <ScrollReveal className="mb-20">
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00AAFF] block mb-1">
                  Flexible Scope
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  Also Available On Request
                </h4>
              </div>
              <CTAButton
                variant="secondary"
                size="sm"
                href="#contact"
                className="self-start md:self-auto"
              >
                Samples available on request
              </CTAButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {alsoAvailable.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 hover:border-[#00AAFF]/30 transition-all duration-300"
                >
                  <p className="font-semibold text-white text-sm mb-1">{item.name}</p>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Block: Hiring one editor vs Working with PrimeNest */}
        <ScrollReveal className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-2">
              The Production Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              Hiring One Editor vs Working with PrimeNest
            </h3>
            <p className="text-sm md:text-base text-white/60 mt-3">
              Why fast-growing channels outgrow solo editors and transition to a dedicated studio model.
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-white/[0.04] border-b border-white/10 text-xs uppercase tracking-widest font-bold">
              <div className="hidden md:block md:col-span-3 p-4 md:p-6 text-white/50">
                Evaluation Factor
              </div>
              <div className="md:col-span-4 p-4 md:p-6 text-white/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                Hiring One Editor
              </div>
              <div className="md:col-span-5 p-4 md:p-6 text-[#00AAFF] bg-[#00AAFF]/5 border-l border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AAFF] shadow-[0_0_8px_#00AAFF]" />
                Working with PrimeNest Creatives
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <div key={row.metric} className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-white/[0.02]">
                  {/* Metric Label */}
                  <div className="md:col-span-3 p-4 md:p-6 font-semibold text-white flex items-center">
                    {row.metric}
                  </div>
                  {/* Hiring One */}
                  <div className="md:col-span-4 p-4 md:p-6 text-white/60 border-t md:border-t-0 border-white/5 flex items-start gap-2">
                    <X className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                    <span>{row.hiringOne}</span>
                  </div>
                  {/* PrimeNest */}
                  <div className="md:col-span-5 p-4 md:p-6 text-white font-medium bg-[#00AAFF]/[0.02] border-t md:border-t-0 md:border-l border-white/10 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#00AAFF] shrink-0 mt-0.5" />
                    <span>{row.primeNest}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
