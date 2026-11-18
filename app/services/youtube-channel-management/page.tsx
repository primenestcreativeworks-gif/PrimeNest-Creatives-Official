'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { Check } from 'lucide-react';

const youtubeFeatures = [
  'Channel audits to clean up playlists, branding and positioning',
  'SEO‑driven titles, descriptions and thumbnail direction',
  'Upload routines that keep your channel publishing consistently',
  'Before / after performance snapshots so you see growth clearly',
];

export default function YouTubeChannelManagementPage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-28 pb-24 bg-[#0A0A0A] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00AAFF]/7 rounded-full blur-[140px]" />

        <section className="px-4 md:px-8 lg:px-16 pt-10 pb-16 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_minmax(0,1fr)] gap-10 items-center">
            <ScrollReveal direction="left" className="space-y-6 md:space-y-8">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#00AAFF] block">
                Services // YouTube Channel Management
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase">
                A YouTube channel that feels{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  active, intentional and on‑brand.
                </span>
              </h1>
              <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
                We treat your channel like a product: structured playlists, high-CTR thumbnail packaging, clear retention hooks, and upload systems that keep viewers coming back.
              </p>

              <div>
                <CTAButton variant="primary" size="lg" href="/#contact">
                  Get a Free Trial Edit
                </CTAButton>
              </div>
            </ScrollReveal>

            {/* Before / after channel cards - Graph Designs Preserved */}
            <ScrollReveal direction="right" className="relative mt-12 lg:mt-0 pl-6 pr-4">
              {/* BEFORE Note - Negative Graph */}
              <div className="relative w-full max-w-[340px] aspect-[4/3] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-500 hover:z-20 hover:scale-105 hover:rotate-0 shadow-[0_15px_35px_rgba(0,0,0,0.8)] -rotate-3 z-10 bg-[#140F14] border border-rose-500/20 rounded-2xl">
                {/* Translucent Tape Highlight */}
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-24 h-7 bg-white/20 backdrop-blur-[3px] shadow-sm border border-white/30 rotate-2 rounded-sm" />

                <div>
                  <h3 className="text-rose-400 text-xs md:text-sm font-bold uppercase tracking-widest border-b border-rose-500/20 pb-2 mb-4">
                    Before · Unstructured Channel
                  </h3>

                  {/* Negative SVG Graph */}
                  <div className="w-full h-24 mt-2">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path d="M0 10 L100 10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M0 25 L100 25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M0 40 L100 40" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                      <polyline
                        points="5,25 15,35 25,20 35,40 45,30 55,45 65,35 75,45 85,35 95,48"
                        fill="none"
                        stroke="#F43F5E"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <circle cx="95" cy="48" r="3" fill="#F43F5E" />
                    </svg>
                  </div>
                </div>

                <p className="text-white/50 text-xs sm:text-sm font-semibold italic mt-4 pt-2">
                  Mixed thumbnails, irregular uploads, no clear path for new viewers.
                </p>

                <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-black/60 to-transparent rounded-tl-full opacity-60 pointer-events-none" />
              </div>

              {/* AFTER Note - Positive Growth Graph */}
              <div className="relative -mt-16 sm:-mt-24 ml-8 sm:ml-16 w-full max-w-[340px] aspect-[4/3] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-500 hover:z-20 hover:scale-105 hover:rotate-0 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,170,255,0.15)] rotate-2 z-20 bg-[#0B1A2C] border border-[#00AAFF]/40 rounded-2xl">
                {/* Translucent Tape Highlight */}
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-24 h-7 bg-white/20 backdrop-blur-[3px] shadow-sm border border-white/30 -rotate-3 rounded-sm" />

                <div>
                  <h3 className="text-[#00AAFF] text-xs md:text-sm font-bold uppercase tracking-widest border-b border-[#00AAFF]/30 pb-2 mb-4">
                    After · Managed Channel
                  </h3>

                  {/* Positive Growth SVG Graph */}
                  <div className="w-full h-24 mt-2">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path d="M0 10 L100 10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M0 25 L100 25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M0 40 L100 40" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />

                      <defs>
                        <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00AAFF" />
                          <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 5 45 Q 35 45, 60 20 T 95 5"
                        fill="none"
                        stroke="url(#growthGrad)"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <circle cx="95" cy="5" r="4" fill="#00AAFF" className="animate-pulse shadow-[0_0_8px_#00AAFF]" />
                      <path
                        d="M 5 45 Q 35 45, 60 20 T 95 5 L 95 50 L 5 50 Z"
                        fill="url(#growthGrad)"
                        opacity="0.1"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-white/70 text-xs sm:text-sm font-semibold italic mt-4 pt-2">
                  Clear series, optimized packaging and uploads backed by retention data.
                </p>

                <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-black/60 to-transparent rounded-tl-full opacity-60 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What you get */}
        <section className="px-4 md:px-8 lg:px-16 py-16 relative z-10">
          <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 glass-card p-6 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_minmax(0,1.1fr)] gap-8 items-start">
              <ScrollReveal>
                <div className="space-y-3">
                  <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#00AAFF] block">
                    What We Look After
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                    A partner that thinks about your channel every week.
                  </h2>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">
                    We blend creative decisions with retention data so your channel doesn&apos;t just look better — it performs better.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
                  {youtubeFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-[#00AAFF]/30 transition-colors"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00AAFF]/20 text-[#00AAFF] text-xs">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
