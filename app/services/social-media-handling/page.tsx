'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const socialFeatures = [
  'Planning your upload calendar across YouTube, Instagram, TikTok and more',
  'Uploading, titles, descriptions and thumbnail coordination done for you',
  'Comment monitoring and basic community management so nothing gets missed',
  'Light analytics reporting so you know what to double‑down on next month',
];

export default function SocialMediaHandlingPage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-20 pb-24 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
        <section className="px-4 md:px-8 lg:px-16 pt-10 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_minmax(0,1fr)] gap-10 items-center">
            <ScrollReveal direction="left" className="space-y-6 md:space-y-8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                Services · Social media handling
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020617] leading-tight">
                We run your socials in the background so you can stay in creator mode.
              </h1>
              <p className="text-sm md:text-base text-[#6B7280] max-w-xl">
                From upload scheduling to basic community management, we handle the moving pieces
                that keep your brand active across platforms.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-slate-950 text-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.7)]">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                  <span>Day‑to‑day management</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 border border-white/10">
                    Multi‑platform
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-900 border border-slate-800/80 p-3 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase">
                      Before · You handle it
                    </p>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
                      <img
                        src="/insta-before.jpeg"
                        alt="Before - Manual social media management"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#0EA5E9] via-[#6366F1] to-[#A855F7] p-[1px]">
                    <div className="h-full rounded-[18px] bg-slate-950 p-3 space-y-2">
                      <p className="text-[11px] font-semibold text-sky-100 uppercase">
                        After · handled by us
                      </p>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/40 border border-white/10">
                        <img
                          src="/Insta-after.jpeg"
                          alt="After - Managed social media"
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                    What we manage for you
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
                    A calm back‑end so you can stay focused on making.
                  </h2>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    We operate like a lightweight social team plugged into your brand, without you
                    needing to build it from scratch.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#0F172A]">
                  {socialFeatures.map((item) => (
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

