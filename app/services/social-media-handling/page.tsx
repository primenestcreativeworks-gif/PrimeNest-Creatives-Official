'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { Check } from 'lucide-react';

const socialMediaFeatures = [
  'Cross-platform distribution across YouTube Shorts, Instagram Reels, and LinkedIn',
  'Tailored hook variations and caption copy matching each platform algorithm',
  'Publishing calendar management and optimal posting time scheduling',
  'Comment engagement systems and audience feedback synthesis',
  'Weekly analytics breakdowns highlighting high-retention topics and formats',
];

export default function SocialMediaHandlingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay">
      <Header />

      <main className="w-full overflow-x-hidden pt-32 pb-24 relative">
        <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#00AAFF]/8 rounded-full blur-[140px]" />

        <section className="px-4 md:px-8 lg:px-12 pt-6 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00AAFF] block mb-2">
                Services · Social Media Handling
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight uppercase mb-4">
                Your Content Engine On{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  Autopilot.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
                We manage the daily distribution, scheduling, and upload mechanics across platforms so your edited content compounds reach without you managing files.
              </p>
              <div className="flex justify-center gap-4">
                <CTAButton variant="primary" size="lg" href="/#contact">
                  Get a Free Trial Edit
                </CTAButton>
                <CTAButton variant="secondary" size="lg" href="/#work">
                  View Showcase
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-4 md:px-8 lg:px-12 py-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
              <div className="max-w-xl mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00AAFF] block mb-2">
                  Daily Operations
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase">
                  Included in Social Distribution
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialMediaFeatures.map((item) => (
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
