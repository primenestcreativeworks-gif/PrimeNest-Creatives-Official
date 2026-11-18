'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Phone, Mail, MessageSquare, Globe, Clock, ShieldCheck } from 'lucide-react';

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5"
    >
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-[600px] h-[500px] bg-[#00AAFF]/8 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Side: Agency Contact Coordinates & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
                  Start Your Trial
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
                  Ready To Elevate Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                    Content Engine?
                  </span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
                  Send us your raw footage. We will produce a cinema-grade, high-retention cut so you can experience our quality first-hand.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="pt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                  Direct Studio Access
                </p>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917217207811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-[#00AAFF]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF] group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">WhatsApp</p>
                      <p className="text-xs text-white/50">Fastest response time</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00AAFF] group-hover:translate-x-1 transition-transform">
                    Chat →
                  </span>
                </a>

                {/* Phone Call */}
                <a
                  href="tel:+917217207811"
                  className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-[#00AAFF]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF] group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">+91-7217207811</p>
                      <p className="text-xs text-white/50">Mon–Sat · 9 AM to 9 PM IST</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00AAFF] group-hover:translate-x-1 transition-transform">
                    Call →
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:primenestcreativeworks@gmail.com"
                  className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-[#00AAFF]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF] group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">primenestcreativeworks@gmail.com</p>
                      <p className="text-xs text-white/50">Detailed briefs & inquiries</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00AAFF] group-hover:translate-x-1 transition-transform">
                    Email →
                  </span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#00AAFF]" />
                  2–4 hour response window
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00AAFF]" />
                  NDA & asset privacy protected
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <EnquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
