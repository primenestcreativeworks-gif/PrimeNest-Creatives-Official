'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay">
      <Header />

      <main className="w-full pt-32 pb-24 overflow-hidden relative">
        {/* Abstract Ambient Glows */}
        <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] bg-[#00AAFF]/8 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#00AAFF]/6 rounded-full blur-[140px]" />

        {/* 1. Hero Section */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00AAFF] shadow-[0_0_8px_#00AAFF] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00AAFF]">
                The PrimeNest Story
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 uppercase">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
                Content That Scales.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed">
              We are a premium content production agency based in India — acting as the growth engine for serious creators and ambitious brands worldwide.
            </p>
          </ScrollReveal>
        </section>

        {/* 2. Stats Strip - Floating Glass Cards */}
        <section className="relative w-full z-20 mb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '4+', label: 'Years Experience', sub: 'In the trenches' },
                { number: '2.5M+', label: 'Organic Views Powered', sub: 'Across platforms' },
                { number: '4x', label: 'Avg Watch-Time Lift', sub: 'Retention focused' },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="glass-card glass-card-hover rounded-3xl p-8 text-center border border-white/10 shadow-2xl">
                    <p className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-[#00AAFF] mb-2 font-mono">
                      {stat.number}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs font-medium text-white/40">{stat.sub}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Meet the Founder - Journal Layout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photo Column */}
            <ScrollReveal direction="left" className="lg:col-span-5 relative">
              <div className="glass-card rounded-3xl p-4 md:p-6 shadow-2xl relative group transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-black/60 border border-white/10 shadow-inner">
                  <img
                    src="/IMG_6196.JPG.jpeg"
                    alt="Lakshya Saxena - Founder & Creative Director"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="text-center px-4 pb-2">
                  <h3 className="font-bold text-white text-2xl tracking-tight">Lakshya Saxena</h3>
                  <p className="text-[#00AAFF] text-xs font-bold uppercase tracking-widest mt-1">
                    Founder & Creative Director
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Founder Story Column */}
            <ScrollReveal direction="right" className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Started in Class 11. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  Completely self-taught.
                </span>
              </h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                Lakshya discovered his passion for filmmaking and editing in Class 11 — no mentor, no formal course, just a laptop and an obsession with learning everything from scratch through YouTube.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                What started as creative curiosity turned into 4+ years of real client work spanning coaching institutes, finance creators, influencers, and investment firms. Through every single project, one core belief stayed constant:
              </p>

              <div className="relative pl-6 border-l-2 border-[#00AAFF] py-2">
                <blockquote className="text-lg md:text-xl font-semibold text-white/95 italic leading-snug">
                  "Good content shouldn't die in the edit. My job is to make sure it doesn't. Editing is not just about making videos look good—it's about holding attention, building trust, and making the viewer feel like they're exactly where they need to be."
                </blockquote>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-[#00AAFF]">
                — That belief became the foundation of PrimeNest Creatives.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. The Journey / Evolution Timeline */}
        <section className="w-full py-24 relative overflow-hidden border-t border-white/5 bg-[#05070D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 uppercase">
                The Evolution
              </h2>
              <p className="text-[#00AAFF] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
                Not an accident. Always the plan.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Timeline center line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00AAFF]/30 to-transparent md:-translate-x-1/2" />

            <div className="space-y-16">
              {/* Step 1 */}
              <ScrollReveal className="relative flex flex-col md:flex-row items-start md:justify-end md:w-1/2 ml-16 md:ml-auto md:pl-12">
                <div className="absolute left-[-2.35rem] md:left-[-3.5rem] top-1 h-6 w-6 rounded-full bg-[#00AAFF] border-4 border-[#05070D] shadow-[0_0_15px_#00AAFF] z-10" />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">More than freelance</h4>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    PrimeNest was never a side project. From day one, Lakshya wanted to build a proper agency — a team, a system, and a brand that creators could fully rely on.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal className="relative flex flex-col md:flex-row items-start md:justify-start md:w-1/2 ml-16 md:ml-0 md:pr-12">
                <div className="absolute left-[-2.35rem] md:right-[-3.5rem] md:left-auto top-1 h-6 w-6 rounded-full bg-white border-4 border-[#05070D] z-10 shadow-[0_0_10px_white]" />
                <div className="md:text-right">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">The Nest</h4>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    The name says it all. A nest is where things are built, nurtured, and launched into the world. Prime, because nothing less than absolute best is acceptable.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal className="relative flex flex-col md:flex-row items-start md:justify-end md:w-1/2 ml-16 md:ml-auto md:pl-12">
                <div className="absolute left-[-2.35rem] md:left-[-3.5rem] top-1 h-6 w-6 rounded-full bg-[#00AAFF] border-4 border-[#05070D] shadow-[0_0_15px_#00AAFF] z-10" />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">Early Wins</h4>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    Starting solo, early results spoke for themselves: 4x reel reach for a coaching institute, 10+ hours saved monthly for an investment firm. Every win pointed toward compounding growth.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Pullquote Box */}
            <ScrollReveal className="mt-20 text-center border border-white/10 bg-white/[0.03] rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold italic text-white leading-snug">
                "We are not just editors. We are growth partners for creators who believe their content can do more."
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 5. What We Believe */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
              What We <span className="text-[#00AAFF]">Believe</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              The non-negotiables that guide how we produce content every single day.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ScrollReveal delay={100} className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
              <div className="w-12 h-12 bg-[#00AAFF]/10 border border-[#00AAFF]/30 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#00AAFF] text-xl font-black">1</span>
              </div>
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
                We work with creators who are serious — who show up consistently, who know their audience has potential, and who are ready to invest in output that performs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-xl font-black">2</span>
              </div>
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
                We are still growing. Still hungry. And that aggressive energy is exactly what makes us different from agencies that have gotten lazy, slow, and comfortable.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300} className="mt-16 text-center">
            <CTAButton variant="primary" size="lg" href="/#contact">
              Partner with PrimeNest today
            </CTAButton>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
