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
    <section id="testimonials" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background Soft Blue Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AAFF]/6 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
            Client Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            What Our Partners{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
              Say.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
            Real feedback from creators and brand teams who rely on PrimeNest Creatives for their daily content engine.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {dynamicTestimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 120} className="h-full">
              <div className="glass-card glass-card-hover rounded-3xl p-8 md:p-9 h-full flex flex-col justify-between group relative overflow-hidden">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AAFF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-5 h-5" />
                </div>

                <p className="text-sm md:text-base leading-relaxed text-white/80 font-normal mb-8 flex-1 italic">
                  “{item.quote}”
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-white text-base">{item.name}</p>
                  <p className="text-xs text-[#00AAFF] font-medium mt-0.5">{item.title}</p>
                  {item.role && (
                    <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">{item.role}</p>
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
