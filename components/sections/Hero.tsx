'use client';

import { CTAButton } from '@/components/CTAButton';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#F4FBFF] to-white px-4 md:px-8 lg:px-16 pt-20 pb-20 md:pt-24 md:pb-28"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.3fr_minmax(0,1fr)] gap-12 md:gap-16 items-center">
        {/* Left Content */}
        <ScrollReveal direction="left" className="space-y-8 md:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D1E9FF] bg-white/80 px-3 py-1 text-xs font-medium text-[#2563EB] shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            <span>Premium edits for fast-growing creators</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.8rem] font-bold leading-tight text-[#020617]">
              We turn your{' '}
              <span className="relative inline-block">
                raw content
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[10px] w-full rounded-full bg-[#A5B4FC]/50 blur-[3px]" />
              </span>
              <br />
              into scroll‑stopping{' '}
              <span className="relative inline-block text-slate-900">
                premium edits.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00AEEF]/30 -z-10 -rotate-2" />
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#4B5563] max-w-xl leading-relaxed">
              PrimeNest Creative handles your long‑form, short‑form, podcasts and channels,
              so you stay focused on filming while we engineer the performance on every platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton
                variant="primary"
                size="lg"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Book a Strategy Call
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                onClick={() =>
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Watch Before / After Reels
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side - Creative stack of cards */}
        <ScrollReveal direction="right" className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#00AEEF]/15 via-[#6366F1]/8 to-transparent blur-3xl" />

            {/* Main video card */}
            <div className="relative rounded-[32px] bg-slate-950 text-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.65)] transform rotate-[-2.5deg]">
              <div className="flex items-center justify-between mb-4 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                  Recording → Edit → Publish
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                  Long‑form episode
                </span>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 relative">
                <video
                  src="https://res.cloudinary.com/dkenvppbz/video/upload/v1772545955/videoplayback_p3atg0.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  defaultMuted
                  playsInline
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-200">
                <span className="font-medium">“From raw talk to cinema‑grade cut.”</span>
                <span className="text-[11px] text-slate-400">Preview edit</span>
              </div>
            </div>

            {/* Secondary vertical reels card */}
            <div className="absolute -right-6 -bottom-8 hidden sm:block">
              <div className="w-24 md:w-28 aspect-[9/16] rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.45)] border border-slate-100 overflow-hidden transform rotate-[8deg]">
                <div className="h-full w-full relative">
                  <video
                    src="https://res.cloudinary.com/dkenvppbz/video/upload/v1772546020/Divya_Reel_fixed_14_jan_oxwkmp.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    defaultMuted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-3">
                    <div className="text-[11px] font-semibold text-white">High‑impact clips</div>
                    <div className="space-y-1 text-[10px] text-white/90">
                      <div className="flex items-center justify-between">
                        <span>Shorts</span>
                        <span className="rounded-full bg-black/40 px-2 py-0.5 text-[9px]">+312%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Reels</span>
                        <span className="rounded-full bg-black/40 px-2 py-0.5 text-[9px]">4x CTR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-6 -top-6 hidden md:block">
              <div className="rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.25)] border border-slate-100 px-4 py-3 text-xs">
                <p className="font-semibold text-[#0F172A]">Done‑for‑you pipeline</p>
                <p className="text-[#6B7280] mt-1">From long‑form episodes to daily clips.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
