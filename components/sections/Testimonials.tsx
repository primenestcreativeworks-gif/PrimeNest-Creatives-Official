'use client';

import React, { useEffect, useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { createClient } from '@/utils/supabase/client';
import { Quote } from 'lucide-react';

const defaultTestimonials = [
  {
    role: 'YouTube Creator',
    quote:
      "PrimeNest took my messy raw footage and turned it into episodes my audience actually binges. I'm finally consistent without burning out.",
    name: 'Nolan M.',
    title: 'Education Channel · 250K+ subs',
  },
  {
    role: 'Agency Owner',
    quote:
      'They built a reliable pipeline from long-form videos into clips for every platform. Our content output 3×’d without hiring in‑house.',
    name: 'Phil C.',
    title: 'Marketing Studio Founder',
  },
  {
    role: 'Brand Team',
    quote:
      'Fast turnaround, clean communication, and edits that match our brand guidelines perfectly. It feels like an in‑house team, not an editor.',
    name: 'Michaela L.',
    title: 'Media Lead at DTC Brand',
  },
];

export function Testimonials() {
  const [dynamicTestimonials, setDynamicTestimonials] = useState(defaultTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });
        if (data && data.length > 0) {
          setDynamicTestimonials(data);
        }
      } catch (err) {
        // Fallback gracefully to default testimonials
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="w-full bg-[#030303] px-4 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden grain-overlay border-t border-white/[0.06]">
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AAFF]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF] block mb-2">
            Creator Signals // Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] uppercase">
            What Our Partners{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#00AAFF]">
              Say.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            Real feedback from creators and brand teams who rely on our post-production engine.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {dynamicTestimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 120} className="h-full">
              <div className="compute-card compute-card-hover rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between group relative overflow-hidden">
                {/* Quote Icon */}
                <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#00AAFF] mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Quote className="w-4 h-4" />
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal mb-6 flex-1 italic">
                  “{item.quote}”
                </p>

                <div className="pt-3.5 border-t border-white/[0.06]">
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-[#00AAFF] font-mono mt-0.5">{item.title}</p>
                  {item.role && (
                    <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wider font-mono">{item.role}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
