'use client';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
const testimonials = [
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
  const [dynamicTestimonials, setDynamicTestimonials] = useState(testimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        setDynamicTestimonials(data);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="w-full bg-[#F9FAFB] px-4 md:px-8 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-10 md:mb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#00AEEF] mb-3">
            Feedback from clients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#020617]">
            Creators who trust PrimeNest.
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto">
            A small sample of the teams we support behind the scenes with editing, formats and
            day‑to‑day content operations.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-8 items-stretch justify-center">
            {dynamicTestimonials.map((item, index) => (
              <div
                key={item.name}
                className={`flex-1 max-w-md mx-auto md:mx-0 transform ${
                  index === 0
                    ? '-rotate-1 md:-rotate-2'
                    : index === testimonials.length - 1
                    ? 'rotate-1 md:rotate-2'
                    : ''
                }`}
              >
                <article className="h-full rounded-3xl border border-[#E5E7EB] bg-white p-6 md:p-7 shadow-[0_22px_50px_rgba(15,23,42,0.08)] flex flex-col">
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#111827] flex-1 mb-5">
                    “{item.quote}”
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-[#020617]">{item.name}</p>
                    <p className="text-xs text-[#6B7280]">{item.title}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

