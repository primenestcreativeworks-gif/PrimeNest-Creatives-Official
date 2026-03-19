'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const podcastFeatures = [
  'Remove hesitations, tangents and dead air while keeping the conversation natural',
  'Mixing and mastering so your show sounds consistent in every episode',
  'Visual podcast layouts for YouTube with framing, overlays and title cards',
  'Clip‑ready markers to create highlights and verticals from each recording',
];

export default function PodcastEditingPage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-20 pb-24 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
        <section className="px-4 md:px-8 lg:px-16 pt-10 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_minmax(0,1fr)] gap-10 items-center">
            <ScrollReveal direction="left" className="space-y-6 md:space-y-8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                Services · Podcast editing
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020617] leading-tight">
                Turn long conversations into a show your listeners stay subscribed to.
              </h1>
              <p className="text-sm md:text-base text-[#6B7280] max-w-xl">
                We handle the clean‑up, sound design and visuals so your focus stays on hosting,
                not fixing audio timelines.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-slate-950 text-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.7)]">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                  <span>Podcast before / after</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/10">
                    Audio + Video
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-900 border border-slate-800/80 p-3 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase">
                      Before · Raw track
                    </p>
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
                      <img
                        src="/Screenshot (299).png"
                        alt="Before - Raw podcast audio"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Straight from your recorder or Zoom call.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#22C55E] via-[#0EA5E9] to-[#6366F1] p-[1px]">
                    <div className="h-full rounded-[18px] bg-slate-950 p-3 space-y-2">
                      <p className="text-[11px] font-semibold text-emerald-100 uppercase">
                        After · mastered show
                      </p>
                      <div className="aspect-video rounded-xl overflow-hidden bg-slate-900/40 border border-white/10">
                        <img
                          src="/Screenshot (298).png"
                          alt="After - Mastered podcast"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[11px] text-emerald-100/90">
                        Ready for audio platforms and YouTube on day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What you get */}
        <section className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-[0_18px_50px_rgba(148,163,184,0.22)]">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_minmax(0,1.1fr)] gap-8 items-start">
              <ScrollReveal>
                <div className="space-y-3">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                    Inside your podcast edits
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
                    Audio that sounds studio‑grade, even if you&apos;re recording from home.
                  </h2>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    From intros and ad reads to the final fade‑out, we keep your show sounding
                    consistent across every episode.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#0F172A]">
                  {podcastFeatures.map((item) => (
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

