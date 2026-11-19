'use client';

import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { SquigDoodle, ArrowDoodle, ScissorsDoodle, SparkleDoodle, TiltBadge } from '@/components/Doodles';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center justify-center bg-[#030303] px-4 md:px-8 lg:px-12 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Soft Multi-Color Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#00AAFF]/8 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#A855F7]/7 blur-[140px] rounded-full" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Column: Headlines & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Positioning Badge in Montserrat */}
          <ScrollReveal direction="up" delay={50}>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121212] px-4 py-1.5 text-xs text-white/90 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_10px_#00F5A0] animate-pulse" />
                <span className="font-montserrat font-bold tracking-wider uppercase text-[11px] text-white/90">
                  Post-Production Specialists · You Film, We Edit
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Headline in Anton Font */}
          <ScrollReveal direction="up" delay={150}>
            <div className="relative inline-block text-left">
              <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] tracking-tight text-white leading-[0.98] uppercase">
                You film.<br />
                We handle the <span className="text-[#00AAFF]">edit.</span>
              </h1>
              {/* Colorful Scissors Doodle floating near the word edit */}
              <div className="hidden sm:block absolute -top-4 -right-10 transform rotate-12 pointer-events-none animate-bounce">
                <ScissorsDoodle className="w-9 h-9" />
              </div>
            </div>
          </ScrollReveal>

          {/* Subheading in Montserrat / Archivo */}
          <ScrollReveal direction="up" delay={250}>
            <p className="font-montserrat text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              PrimeNest is your end-to-end post-production team for creators, founders, coaching institutes, and brands. You send raw footage. Finished content comes back on schedule.
            </p>
          </ScrollReveal>

          {/* CTA Buttons with Hand-drawn Arrow Doodle */}
          <ScrollReveal direction="up" delay={350}>
            <div className="relative pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <CTAButton
                variant="glow"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto font-montserrat font-bold shadow-[0_0_30px_rgba(0,170,255,0.4)]"
              >
                Get a free trial edit
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                href="#work"
                className="w-full sm:w-auto flex items-center justify-center gap-2 font-montserrat font-semibold"
              >
                <span>View work</span>
                <ArrowRight className="w-4 h-4 text-[#00AAFF]" />
              </CTAButton>

              {/* Hand-drawn Arrow Doodle pointing to CTA button */}
              <div className="hidden xl:flex items-center gap-1.5 absolute -bottom-10 left-64 text-[#FFB800] pointer-events-none">
                <ArrowDoodle className="w-10 h-7" />
                <span className="font-montserrat font-bold text-[11px] uppercase tracking-wider text-[#FFB800]">No commitment</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 3 Tilted Floating 9:16 Video Reels (Prototype Layout) */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[440px] sm:min-h-[480px]">
          <ScrollReveal direction="right" delay={200} className="w-full max-w-md relative h-[440px]">
            {/* Colorful Sparkle Doodles */}
            <div className="absolute -top-7 left-8 pointer-events-none z-30">
              <SparkleDoodle className="w-7 h-7" />
            </div>
            <div className="absolute bottom-1 -right-3 pointer-events-none z-30">
              <SparkleDoodle className="w-6 h-6" />
            </div>

            {/* Reel 1 (Left, Tilted -6deg) */}
            <div className="absolute left-0 top-10 w-40 sm:w-48 aspect-[9/16] rounded-2xl overflow-hidden border-2 border-white/15 shadow-[0_22px_50px_rgba(0,0,0,0.9)] transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 bg-[#0d1520]">
              <VideoPlayer
                src="https://www.youtube.com/embed/JmV2EddK77w"
                title="Creator Short"
                aspectRatio="9:16"
                label="Creator Short"
              />
            </div>

            {/* Reel 2 (Center, Main Elevated, Tilted +2deg) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-44 sm:w-52 aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#00AAFF]/50 shadow-[0_28px_65px_rgba(0,170,255,0.3)] transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 bg-[#121212]">
              <VideoPlayer
                src="https://www.youtube.com/embed/A9vcsGSf6yc"
                title="Coaching Reel"
                aspectRatio="9:16"
                label="Coaching Reel"
              />
            </div>

            {/* Reel 3 (Right, Tilted +8deg) */}
            <div className="absolute right-0 top-14 w-40 sm:w-48 aspect-[9/16] rounded-2xl overflow-hidden border-2 border-white/15 shadow-[0_22px_50px_rgba(0,0,0,0.9)] transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 bg-[#0d1520]">
              <VideoPlayer
                src="https://www.youtube.com/embed/05XAb947Oys"
                title="Finance Short"
                aspectRatio="9:16"
                label="Finance Short"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
