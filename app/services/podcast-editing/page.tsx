'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { CTAButton } from '@/components/CTAButton';
import { Check } from 'lucide-react';

const podcastFeatures = [
  'Multi-camera active speaker switching and visual podcast framing',
  'Noise cancellation, voice leveling, and audio mastering across platforms',
  'Removal of dead air, stutters, and tangents while keeping conversation organic',
  'Branded lower thirds, guest intro animations, and topic timestamp chapters',
  'Extraction of viral vertical clips and audiograms for social distribution',
  'Full packaging: YouTube title, show notes, and Spotify/Apple podcast tags',
];

export default function PodcastEditingPage() {
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
                Post-Production · Podcast Editing
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase">
                Turn Raw Conversations Into A{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  Compelling Show.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
                We handle the multi-cam switching, audio clean-up, and visual design so your focus stays on hosting top-tier guests, not fixing audio timelines.
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

            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-5 shadow-2xl relative group">
                <div className="flex items-center justify-between text-xs text-white/60 mb-3 px-1">
                  <span className="font-semibold text-white">Video Podcast Cut</span>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 border border-white/10 text-[10px] text-[#00AAFF]">
                    Multi-Cam 16:9
                  </span>
                </div>
                <VideoPlayer
                  src="https://www.youtube.com/embed/j0fsCUTOFwo"
                  thumbnail="/Podcast.jpg"
                  title="PrimeNest Podcast edit"
                  aspectRatio="16:9"
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
                  Studio Standards
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase">
                  Everything Included In Your Podcast Suite
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {podcastFeatures.map((item) => (
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
