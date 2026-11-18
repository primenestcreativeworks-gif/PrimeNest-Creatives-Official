'use client';

import { CTAButton } from '@/components/CTAButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center justify-center bg-[#0A0A0A] px-4 md:px-8 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden grain-overlay"
    >
      {/* Cinematic Floating Soft Blue Glow Backgrounds */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[500px] rounded-full bg-[#00AAFF]/12 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#00AAFF]/8 blur-[100px]" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        {/* Left Column: Headlines & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Positioning Badge */}
          <ScrollReveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#00AAFF] shadow-[0_0_10px_#00AAFF]" />
              <span className="tracking-wide">Post-Production Specialists · Editing, Not Filming</span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal direction="up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] uppercase">
              Your End-To-End{' '}
              <span className="relative inline-block text-white">
                Content
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
                Post-Production
              </span>{' '}
              Team.
            </h1>
          </ScrollReveal>

          {/* Subtext */}
          <ScrollReveal direction="up" delay={250}>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer high-retention YouTube long-form, viral shorts, podcasts, and click-worthy packaging for brands, founders, creators, coaches, educators, finance creators, and podcasters.
            </p>
          </ScrollReveal>

          {/* Value Badges */}
          <ScrollReveal direction="up" delay={320}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-xs sm:text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00AAFF]" />
                Dedicated Post-Team
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00AAFF]" />
                Predictable Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00AAFF]" />
                Retention-First Edits
              </span>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={400}>
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
        </div>

        {/* Right Column: Hero Video Showcase Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ScrollReveal direction="right" delay={200} className="w-full max-w-lg">
            <div className="relative group">
              {/* Soft electric blue glow behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00AAFF]/30 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Glass Card Container */}
              <div className="relative rounded-3xl bg-[#121212]/80 border border-white/10 p-4 md:p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3.5 px-1 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00AAFF] animate-ping" />
                    <span className="font-semibold text-white tracking-wide">Featured Edit</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/80">
                    YouTube 16:9
                  </span>
                </div>

                {/* Lazy Video Player */}
                <VideoPlayer
                  src="https://www.youtube.com/embed/j0fsCUTOFwo"
                  thumbnail="/Long Form,longform.jpg"
                  title="PrimeNest Creatives Long-form Edit"
                  aspectRatio="16:9"
                  className="rounded-2xl shadow-inner"
                  autoplayPreview={true}
                />

                {/* Card Caption */}
                <div className="pt-4 px-1 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">Full-Length Story Cut</p>
                    <p className="text-white/50 text-[11px]">Retention pacing · Dynamic B-roll · Sound design</p>
                  </div>
                  <span className="text-[#00AAFF] font-medium text-[11px]">Hover to preview</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
