'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const longFormFeatures = [
  'Copyright‑safe editing and music selection',
  'Story‑driven structure to keep viewers watching',
  'Clean motion graphics, titles and lower‑thirds',
  'B‑roll and meme moments layered where it matters',
];

export default function LongFormEditPage() {
  const [showLongFormVideo, setShowLongFormVideo] = useState(false);
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-20 pb-24 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
        <section className="px-4 md:px-8 lg:px-16 pt-10 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_minmax(0,1fr)] gap-10 items-center">
            <ScrollReveal direction="left" className="space-y-6 md:space-y-8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                Services · Long‑form editing
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020617] leading-tight">
                Turn one long recording into a polished show your audience loves to finish.
              </h1>
              <p className="text-sm md:text-base text-[#6B7280] max-w-xl">
                We take your full talks, tutorials or interviews and turn them into binge‑worthy
                episodes with hooks, pacing and visuals designed to hold attention from intro to
                outro.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-slate-950 text-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.7)]">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                  <span>Long‑form edit pipeline</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/10">
                    30–90 min episodes
                  </span>
                </div>
                <div className="mt-4">
                  <div className="rounded-2xl bg-slate-900 border border-slate-800/80 p-3 space-y-3">
                    <p className="text-[11px] font-semibold text-slate-300 uppercase">
                      PrimeNest long‑form edit example
                    </p>
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-800 relative">
                      {!showLongFormVideo && (
                        <button
                          type="button"
                          onClick={() => setShowLongFormVideo(true)}
                          className="absolute inset-0 w-full h-full focus:outline-none group"
                        >
                          <img
                            src="/Screenshot%202026-03-08%20204440.png"
                            alt="PrimeNest long-form edit cover"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] md:text-xs font-semibold tracking-wide uppercase shadow-sm transform -rotate-2 group-hover:-rotate-3 group-hover:-translate-y-0.5 transition-transform">
                              tap to play
                            </span>
                            <span className="text-white text-xl md:text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transform -rotate-12 group-hover:-rotate-6 transition-transform">
                              ➜
                            </span>
                          </div>
                        </button>
                      )}
                      {showLongFormVideo && (
                        <iframe
                          src="https://www.youtube.com/embed/bKZGh1adM0o?rel=0&si=J1a6h0VxygK9Z0BH&autoplay=1"
                          title="PrimeNest long-form edit"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      A real client episode showcasing our pacing, visuals and sound design.
                    </p>
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
                See the growth a consistent long‑form show can unlock.
              </h2>
              <p className="text-sm md:text-base text-[#6B7280] max-w-2xl">
                We restructure your episodes around watch‑time and retention, then track the lift in
                views, subscribers and session time month‑over‑month.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={80}>
                <div className="relative rounded-3xl bg-slate-900 text-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.7)] transform -rotate-2">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 mb-2">
                    Before partnering
                  </p>
                  <div className="space-y-3">
                    <p className="text-3xl font-bold text-slate-300">2.3K views / video</p>
                    <p className="text-sm text-slate-400">
                      Inconsistent publishing, weak hooks, viewers dropping off in the first
                      minutes.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <div className="relative rounded-3xl bg-gradient-to-br from-[#00AEEF] via-[#22C55E] to-[#6366F1] p-[1px] transform rotate-2">
                  <div className="h-full rounded-[22px] bg-slate-950 p-6 text-white">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-emerald-200 mb-2">
                      After PrimeNest
                    </p>
                    <div className="space-y-3">
                      <p className="text-3xl font-bold">20K+ views / video</p>
                      <p className="text-sm text-emerald-100/90">
                        Edited for retention, strong pattern‑interrupts and clear calls to action
                        that actually get clicked.
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
                    Inside your long‑form edits
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
                    Everything you need to keep people watching to the end.
                  </h2>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    Think of it as your own editing room: we build episodes that feel premium but
                    still sound like you.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#0F172A]">
                  {longFormFeatures.map((item) => (
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
