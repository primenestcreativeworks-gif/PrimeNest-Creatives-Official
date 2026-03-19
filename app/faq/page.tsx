'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const faqCategories = [
  {
    title: "💰 Pricing & Packages",
    faqs: [
      {
        question: "How much do your services cost?",
        answer: "We offer flexible packages based on your content needs. Indian creators typically start from ₹20,000/month and international clients from $799/month. Every project is unique — book a free strategy call and we'll put together a custom quote based on your content volume and goals."
      },
      {
        question: "Do you charge per video or on a monthly retainer?",
        answer: "We work primarily on monthly retainers — this means consistent delivery, consistent pricing, and a dedicated editor who understands your brand deeply. We find this works far better than per-video pricing for creators who upload regularly."
      },
      {
        question: "Is there a minimum contract period?",
        answer: "We ask for a minimum of 1 month to get started. Most of our clients stay with us long-term because the results speak for themselves. There is no lock-in after the first month — you can scale up, scale down, or pause with 15 days notice."
      },
      {
        question: "Do you offer a trial before I commit?",
        answer: "Yes! For serious prospects, we offer one complimentary trial edit so you can see the quality of our work firsthand. No commitment required. If you love it, we talk packages. If not, no hard feelings."
      }
    ]
  },
  {
    title: "⚡ Turnaround Time",
    faqs: [
      {
        question: "How quickly will I receive my edited videos?",
        answer: "For short-form content (Reels, Shorts, TikToks) — we deliver within 24 hours of receiving raw footage. For long-form videos (YouTube, podcasts) — delivery is within 48–72 hours depending on length and complexity. We always communicate clearly if timelines shift."
      },
      {
        question: "What if I need something urgently?",
        answer: "We understand content is time-sensitive. For urgent deliveries (same-day or next few hours), we offer rush editing at an additional charge. Reach out on WhatsApp and we'll do our best to accommodate."
      },
      {
        question: "Do you work on weekends and Indian holidays?",
        answer: "We work Monday to Friday, 9 AM – 9 PM IST. For weekend uploads, we plan ahead — all weekend content is pre-edited and ready to go by Friday evening. This means your audience never waits, and our team stays fresh and focused all week. It’s a system that works better for everyone."
      }
    ]
  },
  {
    title: "🎬 Quality & Style",
    faqs: [
      {
        question: "How do you match my editing style and brand?",
        answer: "Before we begin, we spend time understanding your brand — your tone, colour palette, fonts, music taste, and the creators you admire. We study your existing content and reference videos you share. Most clients say it feels like their editor has been with them for years — from month one."
      },
      {
        question: "What editing software do you use?",
        answer: "We primarily work in Adobe Premiere Pro and After Effects for professional-grade output. We also work with DaVinci Resolve for colour-heavy projects. Final deliverables are in whatever format and resolution you need."
      },
      {
        question: "Can I see examples of your past work?",
        answer: "Absolutely. Visit the Work section of our website to see reels and case studies from our existing clients across coaching, fitness, and business niches. You can also request a niche-specific portfolio on our strategy call."
      },
      {
        question: "Do you also write captions, hooks, and scripts?",
        answer: "Yes — scripting and hook writing is part of our offering. We can help you write punchy hooks, structure your video for maximum watch-time, and suggest caption formats that drive saves and shares. This is available as an add-on or as part of full-service packages."
      }
    ]
  },
  {
    title: "💬 Communication & Revisions",
    faqs: [
      {
        question: "How many revisions are included?",
        answer: "Every video comes with 2 rounds of minor revisions included — things like music change, colour tweak, text edit, or trimming. Major revisions (restructuring the entire edit or changing the concept) are quoted separately. We define this clearly in your onboarding agreement so there are no surprises."
      },
      {
        question: "How do we communicate during the project?",
        answer: "We keep things simple. Primary communication is over WhatsApp for quick updates and approvals. For file sharing we use Google Drive or WeTransfer. You'll always know the status of your content — no chasing required."
      },
      {
        question: "What if I'm not happy with the final edit?",
        answer: "We work until you're satisfied within the agreed revision rounds. If something isn't right, tell us specifically what to change and we'll fix it — fast. Our goal is a long-term relationship, not a one-time transaction."
      },
      {
        question: "Will I be working with the same editor every time?",
        answer: "Yes. When you onboard with PrimeNest, you get one dedicated editor who learns your brand inside out. You won't be passed around between different people. Consistency is the foundation of great content."
      },
      {
        question: "I'm an international creator — will time zones be an issue?",
        answer: "Not at all. We work with creators across the US, UK, Australia, and the Middle East. We operate 9 AM – 9 PM IST and structure delivery schedules around your upload times. Most international clients find our turnaround actually faster than local editors they've worked with."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (categoryId: number, faqId: number) => {
    const id = `${categoryId}-${faqId}`;
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#00AEEF]/20">
      <Header />
      
      <main className="w-full pt-32 pb-24 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header Section */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-600">Client FAQ</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] tracking-tighter mb-6 leading-[1.1]">
              Frequently Asked{' '}
              <span className="relative inline-block text-slate-900">
                Questions. 
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00AEEF]/30 -z-10 -rotate-2" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about partnering with PrimeNest Creatives before we jump on a call.
            </p>
          </ScrollReveal>
        </section>

        {/* FAQ Categories & Accordions */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="space-y-16">
            {faqCategories.map((category, catIndex) => (
              <ScrollReveal key={catIndex} delay={catIndex * 100}>
                <div className="mb-8 pl-2 border-l-4 border-[#00AEEF]">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 ml-4">
                    {category.title}
                  </h2>
                </div>
                
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden divide-y divide-slate-100">
                  {category.faqs.map((faq, faqIndex) => {
                    const id = `${catIndex}-${faqIndex}`;
                    const isOpen = openIndex === id;
                    
                    return (
                      <div key={faqIndex} className="w-full">
                        <button
                          onClick={() => toggleAccordion(catIndex, faqIndex)}
                          className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors group"
                        >
                          <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-[#00AEEF]' : 'text-slate-800 group-hover:text-[#00AEEF]'}`}>
                            {faq.question}
                          </span>
                          <span className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00AEEF] text-white shadow-md shadow-[#00AEEF]/20 rotate-45' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="px-6 md:px-8 pb-8 text-slate-600 font-medium leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={300} className="mt-24 text-center">
             <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#00AEEF] to-indigo-600">
               <div className="bg-white rounded-full px-10 py-8 flex flex-col items-center">
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">Still have a question?</p>
                 <button
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white bg-[#1A1A1A] hover:bg-black shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                     window.location.href = '/#contact';
                  }}
                >
                  Book a Strategy Call
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
               </div>
             </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
