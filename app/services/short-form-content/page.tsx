'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { CTAButton } from '@/components/CTAButton';
import { Check } from 'lucide-react';

const shortFormFeatures = [
  'Aggressive 3-second hook openings that stop the scroll',
  'Platform-native 9:16 vertical framing for Shorts, Reels, and TikTok',
  'Dynamic animated captions, keyword highlights, and sound effects',
  'Strategic cutdowns from your long-form recordings or raw mobile clips',
  'Pattern interrupts and zooms to keep viewer retention above 85%',
  'High-conversion outro CTAs driving followers to your core offer',
];

export default function ShortFormContentPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay">
      <Header />

      <main className="w-full overflow-x-hidden pt-32 pb-24 relative">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#00AAFF]/8 rounded-full blur-[140px]" />

        <section className="px-4 md:px-8 lg:px-12 pt-6 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00AAFF] block">
                Post-Production · Short-Form & Reels
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase">
                Short Clips That Stop The Scroll{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  & Actually Convert.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
                We design Shorts, Reels, and TikToks around strong retention hooks, fast pacing, and animated typography, instead of just cutting random highlights from your long footage.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <CTAButton variant="primary" size="lg" href="/#contact">
                  Get a Free Trial Edit
                </CTAButton>
                <CTAButton variant="secondary" size="lg" href="/#work">
                  View Showcase
                </CTAButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5 flex justify-center">
              <div className="glass-card rounded-3xl p-4 shadow-2xl relative group w-64 sm:w-72">
                <div className="flex items-center justify-between text-xs text-white/60 mb-3 px-1">
                  <span className="font-semibold text-white">Viral Cut</span>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 border border-white/10 text-[10px] text-[#00AAFF]">
                    Vertical 9:16
                  </span>
                </div>
                <VideoPlayer
                  src="https://www.youtube.com/embed/JmV2EddK77w"
                  thumbnail="/Short Edits.jpg"
                  title="PrimeNest Short-form edit"
                  aspectRatio="9:16"
                  autoplayPreview={true}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features & Deliverables */}
        <section className="px-4 md:px-8 lg:px-12 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
              <div className="max-w-2xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00AAFF] block mb-2">
                  Retention Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase">
                  Inside Your Short-Form Pipeline
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {shortFormFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/[0.03] border border-white/10 p-5"
                  >
                    <Check className="w-5 h-5 text-[#00AAFF] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
