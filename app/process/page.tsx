'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Lightbulb, PenTool, Film, Rocket, CheckCircle2, Clock, RotateCcw, UserCheck, ArrowRight } from 'lucide-react';
import { SquigDoodle, SparkleDoodle } from '@/components/Doodles';

const steps = [
  {
    number: '1',
    title: '1. Ideation',
    icon: Lightbulb,
    description: "We research trends and develop unique concepts tailored to your brand's voice and audience.",
    details: ['Niche & competitor gap analysis', 'Proven video hook frameworks', 'Quarterly content calendar'],
    color: 'text-[#FFB800]',
    bg: 'bg-[#FFB800]/10 border-[#FFB800]/30',
    borderColor: 'hover:border-[#FFB800]/50',
  },
  {
    number: '2',
    title: '2. Scripting',
    icon: PenTool,
    description: 'Our writers craft compelling scripts that hook viewers instantly and keep them engaged till the end.',
    details: ['3-second retention hooks', 'Tight storytelling structure', 'Audience retention pacing'],
    color: 'text-[#A855F7]',
    bg: 'bg-[#A855F7]/10 border-[#A855F7]/30',
    borderColor: 'hover:border-[#A855F7]/50',
  },
  {
    number: '3',
    title: '3. Production',
    icon: Film,
    description: 'High-end editing with motion graphics, sound design, and color grading for a premium finish.',
    details: ['Cinema-grade color grading', 'Atmospheric sound beds & SFX', 'Custom branded motion graphics'],
    color: 'text-[#00AAFF]',
    bg: 'bg-[#00AAFF]/10 border-[#00AAFF]/30',
    borderColor: 'hover:border-[#00AAFF]/50',
  },
  {
    number: '4',
    title: '4. Delivery',
    icon: Rocket,
    description: 'Fast turnaround and strategic publishing advice to maximize your reach and engagement.',
    details: ['24-48h turnaround for shorts', 'Platform-ready render packages', 'High-CTR thumbnail packaging'],
    color: 'text-[#00F5A0]',
    bg: 'bg-[#00F5A0]/10 border-[#00F5A0]/30',
    borderColor: 'hover:border-[#00F5A0]/50',
  },
];

const guarantees = [
  {
    icon: RotateCcw,
    title: '2 Revision Rounds',
    desc: 'Structured feedback rounds with frame-accurate notes on every cut.',
  },
  {
    icon: Clock,
    title: 'Predictable Turnaround',
    desc: 'Never miss an upload window. We deliver files on a locked timeline.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Producer',
    desc: 'One point of contact across Slack or WhatsApp for effortless communication.',
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay flex flex-col justify-between">
      <Header />

      <main className="w-full pt-32 pb-24 overflow-hidden relative flex-1">
        {/* Soft Background Ambient Glows */}
        <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#00AAFF]/5 blur-[160px] rounded-full" />

        {/* Hero Section */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00AAFF] shadow-[0_0_8px_#00AAFF] animate-pulse" />
              <span className="font-montserrat font-bold text-[11px] tracking-widest uppercase text-[#00AAFF]">
                Streamlined Post-Production System
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wide leading-[1.08] mb-4 uppercase">
              Our Process
            </h1>

            <p className="font-montserrat text-base sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
              A streamlined workflow designed to take your content from concept to viral success.
            </p>
          </ScrollReveal>
        </section>

        {/* 4 Steps Grid */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={idx * 100}>
                  <div
                    className={`glass-card glass-card-hover rounded-3xl p-7 h-full flex flex-col justify-between border border-white/10 relative group transition-all duration-300 ${step.borderColor} hover:-translate-y-1`}
                  >
                    <div>
                      {/* Step Icon in colorful glow */}
                      <div
                        className={`w-14 h-14 rounded-2xl ${step.bg} border flex items-center justify-center ${step.color} mb-6 shadow-inner group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-montserrat text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Sub-points */}
                    <div className="pt-4 border-t border-white/[0.08] space-y-2">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-montserrat text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Workflow Guarantees */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0d0d0d] border border-white/10 p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00AAFF]/10 text-[#00AAFF] flex items-center justify-center shrink-0 border border-[#00AAFF]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-white mb-1">{item.title}</h4>
                    <p className="font-montserrat text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111927] to-[#0a0f18] border border-white/15 p-10 md:p-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
              {/* Radial Top Glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#00AAFF]/15 blur-[90px] rounded-full" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
                  Ready to start the process?
                </h2>

                <p className="font-montserrat text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
                  Book a free strategy session and let's discuss how we can scale your brand or personal profile.
                </p>

                <div className="pt-4 flex justify-center">
                  <a
                    href="mailto:primenestcreativeworks@gmail.com?subject=Inquiry:%20Start%20the%20Process%20with%20PrimeNest"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-montserrat font-bold text-sm hover:bg-[#00AAFF] hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
                  >
                    <span>Book A Call 📅</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
