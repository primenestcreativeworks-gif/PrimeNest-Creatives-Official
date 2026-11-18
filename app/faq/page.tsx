'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTAButton } from '@/components/CTAButton';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
  {
    title: 'Pricing & Retainers',
    faqs: [
      {
        question: 'How do you charge for your services?',
        answer:
          'We work on transparent, predictable monthly retainers tailored to your upload frequency. This guarantees a locked rate, dedicated queue slots, and a specialized team that knows your brand inside out. No surprise invoices.',
      },
      {
        question: 'Do you offer a trial before committing?',
        answer:
          'Yes. We offer a 100% free trial edit on your own footage. You send us a raw clip, we edit it to your desired standard, and you judge the quality and turnaround before signing up for a pilot month.',
      },
      {
        question: 'Is there a long-term lock-in?',
        answer:
          'No lock-in. Engagements begin with a trial edit and a one-month pilot at real volume. If you love the workflow, we transition to an ongoing monthly retainer that you can pause or adjust with 15 days notice.',
      },
    ],
  },
  {
    title: 'Turnaround & Volume',
    faqs: [
      {
        question: 'What is your typical turnaround time?',
        answer:
          'For short-form reels and shorts: 24 to 48 hours from receiving raw footage. For full long-form YouTube episodes and podcasts: 48 to 72 hours depending on motion graphics intensity and runtime.',
      },
      {
        question: 'How many revision rounds are included?',
        answer:
          'Every deliverable comes with 2 structured revision rounds. Because we dial in your brand guidelines and editing templates during the trial cut, most deliverables are approved on v1 or v2.',
      },
      {
        question: 'How do we communicate and send footage?',
        answer:
          'You get one dedicated point of contact. We communicate via a streamlined Slack or WhatsApp channel, and footage is shared via Google Drive, Dropbox, or Frame.io with time-stamped feedback.',
      },
    ],
  },
  {
    title: 'Style & Niche Focus',
    faqs: [
      {
        question: 'How do you match my channel’s pacing and aesthetic?',
        answer:
          'During onboarding, we break down your best-performing past videos, study benchmark reference channels you admire, and build a channel style guide covering typography, pacing, color grading, sound beds, and hook structure.',
      },
      {
        question: 'What niches do you specialize in?',
        answer:
          'We specialize in post-production for brands, founders, creators, coaches, educators, finance creators, and podcasters. We deliberately do not take on daily vlogs, flashy hype edits, or fitness content.',
      },
    ],
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const toggleAccordion = (catIndex: number, faqIndex: number) => {
    const id = `${catIndex}-${faqIndex}`;
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay">
      <Header />

      <main className="w-full pt-32 pb-24 relative overflow-hidden">
        {/* Soft Background Glows */}
        <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#00AAFF]/8 blur-[120px] rounded-full" />
        <div className="pointer-events-none absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />

        {/* Header Section */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00AAFF]">
                Client Knowledge Base
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 uppercase leading-[1.1]">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                Questions.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Clear answers on how PrimeNest Creatives works, our delivery turnaround, retainers, and trial cut process.
            </p>
          </ScrollReveal>
        </section>

        {/* FAQ Categories & Accordions */}
        <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <ScrollReveal key={catIndex} delay={catIndex * 80}>
                <div className="mb-4 pl-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00AAFF]" />
                  <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                    {category.title}
                  </h2>
                </div>

                <div className="glass-card rounded-3xl overflow-hidden divide-y divide-white/5 border border-white/10">
                  {category.faqs.map((faq, faqIndex) => {
                    const id = `${catIndex}-${faqIndex}`;
                    const isOpen = openIndex === id;

                    return (
                      <div key={faqIndex} className="w-full">
                        <button
                          type="button"
                          onClick={() => toggleAccordion(catIndex, faqIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors cursor-pointer group"
                        >
                          <span
                            className={`text-base sm:text-lg font-bold pr-6 transition-colors ${
                              isOpen ? 'text-[#00AAFF]' : 'text-white group-hover:text-[#00AAFF]'
                            }`}
                          >
                            {faq.question}
                          </span>
                          <span
                            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 ${
                              isOpen
                                ? 'bg-[#00AAFF] text-[#0A0A0A] rotate-180 border-[#00AAFF]'
                                : 'bg-white/5 text-white/60 group-hover:border-[#00AAFF]/40'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/70 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA block */}
          <ScrollReveal delay={250} className="mt-20 text-center">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AAFF] mb-2">
                Have footage ready?
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Test our editing quality on your own footage.
              </h3>
              <p className="text-sm text-white/60 max-w-md mb-6">
                Send us one raw video. We will edit it for free so you can see the difference before committing.
              </p>
              <CTAButton variant="primary" size="lg" href="/#contact">
                Get a Free Trial Edit
              </CTAButton>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FAQPage;
