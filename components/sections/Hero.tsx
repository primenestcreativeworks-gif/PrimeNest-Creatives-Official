'use client';

import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center justify-center bg-[#030303] px-4 md:px-8 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden grain-overlay"
    >
      {/* V0-Compute Background Grid with Top Radial Mask */}
      <div className="pointer-events-none absolute inset-0 compute-grid mask-radial-top opacity-70" />

      {/* V0-Compute Beacon / Aurora Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] compute-beacon blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00AAFF]/6 blur-[130px] rounded-full" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        {/* Left Column: Headlines & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Status / Positioning Badge */}
          <ScrollReveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-xs font-mono text-neutral-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wide">Post-Production Specialists · Editing, Not Filming</span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal direction="up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[1.05] uppercase">
              Your End-To-End{' '}
              <span className="text-white">Content</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
                Post-Production
              </span>{' '}
              <span className="text-white">Team.</span>
            </h1>
          </ScrollReveal>

          {/* Subtext */}
          <ScrollReveal direction="up" delay={250}>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer high-retention YouTube long-form, viral shorts, podcasts, and click-worthy packaging for brands, founders, creators, coaches, educators, finance creators, and podcasters.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={350}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <CTAButton
                variant="primary"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto"
              >
                Get a Free Trial Edit
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                href="#work"
                className="w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                <span>View Content Showcase</span>
                <ArrowRight className="w-4 h-4 text-[#00AAFF] transition-transform duration-300 group-hover:translate-x-1" />
              </CTAButton>
            </div>
          </ScrollReveal>

          {/* Monospace KPI Metrics Strip */}
          <ScrollReveal direction="up" delay={450}>
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">2.5M+</p>
                <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5">Views Powered</p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">4x</p>
                <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5">Watch-Time Lift</p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-[#00AAFF] tracking-tight">100%</p>
                <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5">Dedicated Studio</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Compute Console Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ScrollReveal direction="right" delay={200} className="w-full max-w-lg">
            <div className="relative group">
              {/* Outer Blue Aura Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00AAFF]/20 to-indigo-500/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Compute Console Card */}
              <div className="relative rounded-3xl bg-[#080808]/90 border border-white/[0.08] p-4 sm:p-5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                {/* Console Top Bar */}
                <div className="flex items-center justify-between pb-3.5 px-1 border-b border-white/[0.06] mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="font-mono text-[11px] text-neutral-400 ml-2">
                      POST-PRODUCTION // ACTIVE
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00AAFF]">
                    16:9 4K CUT
                  </span>
                </div>

                {/* Video Container - Autoplaying Live */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-inner aspect-video">
                  <video
                    src="https://res.cloudinary.com/dkenvppbz/video/upload/v1772545955/videoplayback_p3atg0.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Telemetry Chip */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AVD RETENTION: 68.4%</span>
                  </div>
                </div>

                {/* Bottom Console Status */}
                <div className="pt-3.5 px-1 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">Full-Length Story Cut</p>
                    <p className="text-neutral-500 text-[11px]">Dynamic B-roll · Sound design · Retention pacing</p>
                  </div>
                  <span className="text-[#00AAFF] font-mono text-[10px] uppercase tracking-wider">Live stream</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
