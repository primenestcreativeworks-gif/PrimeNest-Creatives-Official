'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const youtubeFeatures = [
  'Channel audits to clean up playlists, branding and positioning',
  'SEO‑driven titles, descriptions and thumbnail direction',
  'Upload routines that keep your channel publishing consistently',
  'Before / after performance snapshots so you see growth clearly',
];

export default function YouTubeChannelManagementPage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden pt-20 pb-24 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
        <section className="px-4 md:px-8 lg:px-16 pt-10 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_minmax(0,1fr)] gap-10 items-center">
            <ScrollReveal direction="left" className="space-y-6 md:space-y-8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6366F1]">
                Services · YouTube channel management
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020617] leading-tight">
                A YouTube channel that feels active, intentional and on‑brand – even when you&apos;re
                busy.
              </h1>
              <p className="text-sm md:text-base text-[#6B7280] max-w-xl">
                We treat your channel like a product: structured playlists, clear hooks and upload
                systems that keep viewers coming back.
              </p>
            </ScrollReveal>

            {/* Before / after channel cards - Sticky Notes approach */}
            <ScrollReveal direction="right" className="relative mt-12 lg:mt-0 pl-10 pr-4">
              
              {/* BEFORE Note - Negative Graph */}
              <div 
                className="relative w-full max-w-[340px] aspect-[4/3] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-500 hover:z-20 hover:scale-105 hover:rotate-0 shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] -rotate-3 z-10 bg-slate-100/80 backdrop-blur-md border border-slate-200"
              >
                {/* Translucent Tape Highlight */}
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-24 h-7 bg-white/40 backdrop-blur-[2px] shadow-sm border border-white/50 rotate-2" />
                
                <div>
                  <h3 className="text-rose-500 text-xs md:text-sm font-bold uppercase tracking-widest border-b border-rose-500/20 pb-2 mb-4">
                    Before · Unstructured Channel
                  </h3>
                  
                  {/* Negative SVG Graph */}
                  <div className="w-full h-24 mt-2">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <path d="M0 10 L100 10" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2,2"/>
                      <path d="M0 25 L100 25" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2,2"/>
                      <path d="M0 40 L100 40" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2,2"/>
                      {/* Chaotic negative trend line */}
                      <polyline 
                        points="5,25 15,35 25,20 35,40 45,30 55,45 65,35 75,45 85,35 95,48" 
                        fill="none" 
                        stroke="#F43F5E" 
                        strokeWidth="3" 
                        strokeLinejoin="round" 
                        strokeLinecap="round" 
                      />
                      <circle cx="95" cy="48" r="3" fill="#F43F5E" />
                    </svg>
                  </div>
                </div>

                <p className="text-slate-500 text-sm font-semibold italic mt-4 pt-2">
                  Mixed thumbnails, irregular uploads, no clear path for new viewers.
                </p>

                {/* Bottom edge shadow fold */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-black/5 to-transparent rounded-tl-full opacity-60 pointer-events-none" />
              </div>

              {/* AFTER Note - Positive Graph */}
              <div 
                className="relative -mt-16 sm:-mt-24 ml-10 sm:ml-20 w-full max-w-[340px] aspect-[4/3] p-6 md:p-8 flex flex-col justify-between transform transition-all duration-500 hover:z-20 hover:scale-105 hover:rotate-0 shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] rotate-2 z-20 bg-[#F0FDF4] border border-[#DCFCE7]"
              >
                {/* Translucent Tape Highlight */}
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-24 h-7 bg-white/40 backdrop-blur-[2px] shadow-sm border border-white/50 -rotate-3" />
                
                <div>
                  <h3 className="text-[#00AEEF] text-xs md:text-sm font-bold uppercase tracking-widest border-b border-[#00AEEF]/20 pb-2 mb-4">
                    After · Managed Channel
                  </h3>
                  
                  {/* Positive SVG Graph */}
                  <div className="w-full h-24 mt-2">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <path d="M0 10 L100 10" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2,2"/>
                      <path d="M0 25 L100 25" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2,2"/>
                      <path d="M0 40 L100 40" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2,2"/>
                      
                      {/* Smooth exponential growth line */}
                      <defs>
                        <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00AEEF" />
                          <stop offset="100%" stopColor="#22C55E" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 5 45 Q 35 45, 60 20 T 95 5" 
                        fill="none" 
                        stroke="url(#growthGrad)" 
                        strokeWidth="4" 
                        strokeLinejoin="round" 
                        strokeLinecap="round" 
                      />
                      <circle cx="95" cy="5" r="4" fill="#22C55E" className="animate-pulse" />
                      
                      {/* Area fill under curve */}
                      <path 
                        d="M 5 45 Q 35 45, 60 20 T 95 5 L 95 50 L 5 50 Z" 
                        fill="url(#growthGrad)" 
                        opacity="0.1" 
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-slate-600 text-sm font-semibold italic mt-4 pt-2">
                  Clear series, optimised home page and uploads supported by data‑driven decisions.
                </p>

                {/* Bottom edge shadow fold */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full opacity-60 pointer-events-none" />
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
                    What we look after
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
                    A partner that thinks about your channel every week.
                  </h2>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    We blend creative decisions with data so your channel doesn&apos;t just look
                    better – it performs better too.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#0F172A]">
                  {youtubeFeatures.map((item) => (
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

