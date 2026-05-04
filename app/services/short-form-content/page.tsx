'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const shortFormFeatures = [
  'Hook‑first openings that stop the scroll',
  'Platform‑native framing for Reels, Shorts and TikTok',
  'Captions, emojis and overlays optimised for mobile',
  'Repurposed from long‑form episodes or standalone clips',
];

export default function ShortFormContentPage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-20 pb-24 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
        <section className="px-4 md:px-8 lg:px-16 pt-10 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_minmax(0,1fr)] gap-10 items-center">
            <ScrollReveal direction="left" className="space-y-6 md:space-y-8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                Services · Short‑form content
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020617] leading-tight">
                Short clips that feel native to every feed – and actually convert.
              </h1>
              <p className="text-sm md:text-base text-[#6B7280] max-w-xl">
                We design Shorts, Reels and TikToks around strong hooks, fast pacing and clear
                offers, instead of just cutting random highlights from your episodes.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-slate-950 text-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.7)]">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                  <span>Short‑form edit stack</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/10">
                    15–60 sec clips
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-900 border border-slate-800/80 p-3 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase">
                      Before · Plain crop
                    </p>
                    <div className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-800 relative pointer-events-none">
                      <div className="absolute inset-0 scale-[1.3] origin-center">
                        <iframe
                          src="https://www.youtube.com/embed/6y5yYnHwE3E?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=6y5yYnHwE3E&playsinline=1"
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          title="Before video"
                        />
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      No captions, no structure, quick drop‑off.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#F97316] via-[#E11D48] to-[#6366F1] p-[1px]">
                    <div className="h-full rounded-[18px] bg-slate-950 p-3 space-y-2">
                      <p className="text-[11px] font-semibold text-orange-100 uppercase">
                        After · scroll‑stopping clip
                      </p>
                      <div className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-900/40 border border-white/10 relative pointer-events-none">
                        <div className="absolute inset-0 scale-[1.3] origin-center">
                          <iframe
                            src="https://www.youtube.com/embed/ji7qPlcx-m8?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=ji7qPlcx-m8&playsinline=1"
                            className="w-full h-full object-cover"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="After video"
                          />
                        </div>
                      </div>
                      <p className="text-[11px] text-orange-100/90">
                        Built to win the first 3 seconds and push viewers to your link.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Growth before / after */}
        <section className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto space-y-10">
            <ScrollReveal className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
                From random posts to a predictable short‑form engine.
              </h2>
              <p className="text-sm md:text-base text-[#6B7280] max-w-2xl">
                We batch‑produce clips so you always have a content buffer ready, with performance
                reports on what hooks and angles work best.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={80}>
                <div className="relative rounded-3xl bg-slate-900 text-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.7)] transform -rotate-2">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 mb-2">
                    Before
                  </p>
                  <div className="space-y-3">
                    <p className="text-3xl font-bold text-slate-300">Irregular posting</p>
                    <p className="text-sm text-slate-400">
                      Uploading when you find time, with no clear angle per clip.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <div className="relative rounded-3xl bg-gradient-to-br from-[#22C55E] via-[#0EA5E9] to-[#6366F1] p-[1px] transform rotate-2">
                  <div className="h-full rounded-[22px] bg-slate-950 p-6 text-white">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-emerald-200 mb-2">
                      After
                    </p>
                    <div className="space-y-3">
                      <p className="text-3xl font-bold">Daily clips on autopilot</p>
                      <p className="text-sm text-emerald-100/90">
                        A calendar of hooks, topics and platforms – edited and scheduled for you.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="px-4 md:px-8 lg:px-16 pb-10 md:pb-16">
          <div className="max-w-6xl mx-auto rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-[0_18px_50px_rgba(148,163,184,0.22)]">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_minmax(0,1.1fr)] gap-8 items-start">
              <ScrollReveal>
                <div className="space-y-3">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                    Inside your short‑form edits
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
                    Clips that feel native to every platform.
                  </h2>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    We match the pacing, style and language your audience expects on each app,
                    while keeping your brand consistent.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#0F172A]">
                  {shortFormFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-slate-50/60 px-4 py-3"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00AEEF]/10 text-[#00AEEF] text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
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

