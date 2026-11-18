'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Quote } from 'lucide-react';

interface FounderProps {
  photoSrc?: string;
}

export function Founder({ photoSrc }: FounderProps) {
  // Only render photo if an actual image is provided (never show a placeholder box or "YOUR PHOTO HERE")
  const hasPhoto = Boolean(photoSrc && photoSrc.trim().length > 0);

  return (
    <section id="founder" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Ambient corner light */}
            <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#00AAFF]/10 rounded-full blur-3xl" />

            <div className={`grid grid-cols-1 ${hasPhoto ? 'md:grid-cols-12 gap-8 md:gap-12' : ''} items-center`}>
              {/* Photo Column - ONLY rendered if photoSrc exists */}
              {hasPhoto && (
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={photoSrc}
                      alt="Lakshya Saxena"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              )}

              {/* Text / Quote Column */}
              <div className={`${hasPhoto ? 'md:col-span-7' : 'max-w-3xl mx-auto text-center'} space-y-6`}>
                <div className={`flex ${hasPhoto ? 'justify-start' : 'justify-center'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF]">
                    <Quote className="w-6 h-6" />
                  </div>
                </div>

                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  “Good content shouldn't die in the edit. My job is to make sure it doesn't.”
                </blockquote>

                <div className="pt-2 border-t border-white/5">
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Lakshya Saxena
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#00AAFF] tracking-wide mt-0.5">
                    Founder & Creative Director · PrimeNest Creatives
                  </p>
                  <p className="text-xs text-white/50 mt-3 max-w-lg leading-relaxed">
                    Dedicated post-production studio partnering with ambitious creators and brands worldwide to compound audience retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
