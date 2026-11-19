'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SquigDoodle, SparkleDoodle } from '@/components/Doodles';
import { ChevronDown, Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Who is this for?',
    answer:
      'Creators, founders, podcasters, coaching institutes, and businesses who publish video online and want reliable, cinema-grade post-production. We focus on coaching, talking-head, informative, finance, and podcast content.',
  },
  {
    question: 'Do you film or shoot footage?',
    answer:
      'No. We only do post-production. You film, we edit. Drop your raw files into a shared Google Drive, Dropbox, or Frame.io folder. We handle cutting, pacing, sound design, motion graphics, and delivery on schedule.',
  },
  {
    question: 'Can I try before committing?',
    answer:
      'Yes! Send us one clip and we’ll do a 100% free trial edit on your own footage. If you love the cut quality, communication rhythm, and speed, we run a one-month pilot before any ongoing retainer.',
  },
  {
    question: 'How many revisions do I get?',
    answer:
      'Two revision rounds on every deliverable, with one dedicated point of contact throughout. Because we dial in your editing style guide during onboarding, over 85% of our cuts are approved on v1 or v2.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer:
      'For short-form reels and shorts: 24 to 48 hours from receiving raw footage. For full long-form YouTube episodes and podcasts: 48 to 72 hours depending on motion graphics intensity and runtime.',
  },
  {
    question: 'How do we communicate and send raw files?',
    answer:
      'You get a dedicated Slack or WhatsApp channel with your lead editor and producer. Upload raw footage to Google Drive or Dropbox, and leave timestamped feedback directly on drafts.',
  },
  {
    question: 'What niches do you NOT take on?',
    answer:
      'What we don’t take on: ad management, daily vlogs, flashy hype-style edits, and fitness content. Saying no to those niches is how we stay world-class at educational, finance, talking-head, and brand storytelling.',
  },
  {
    question: 'What if I need something custom?',
    answer:
      'Tell us your publishing volume and channels. We regularly shape custom retainers for multi-channel creators, daily publishing teams, and educational institutes.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#030303] py-20 md:py-28 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00AAFF]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Doodle */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="sticky top-28 space-y-6">
                <SquigDoodle className="w-24 h-4 text-[#00AAFF]" />

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF]">
                    Knowledge Base // Telemetry
                  </span>
                  <SparkleDoodle className="w-4 h-4 text-[#00AAFF]" />
                </div>

                <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-none">
                  Frequently Asked <br />
                  <span className="text-[#00AAFF]">Questions.</span>
                </h2>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md font-normal">
                  Everything you need to know about our post-production pipeline, turnaround timelines, revisions, and the free trial cut on your footage.
                </p>

                <div className="pt-2">
                  <a
                    href="mailto:primenestcreativeworks@gmail.com?subject=Question%20about%20PrimeNest"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-[#00AAFF] transition-colors group"
                  >
                    <span>Have another question? Chat with our team</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 40}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#121212] border-[#00AAFF]/40 shadow-[0_10px_30px_rgba(0,170,255,0.06)]'
                        : 'bg-[#0d0d0d] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-white leading-snug">
                        {faq.question}
                      </span>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#00AAFF] text-[#0A0A0A] border-[#00AAFF] rotate-45'
                            : 'bg-white/[0.04] text-[#00AAFF] border-white/10'
                        }`}
                      >
                        <Plus className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-neutral-400 leading-relaxed font-normal border-t border-white/[0.04]">
                        <p className="mt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
