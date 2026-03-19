'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

export function About() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                We're <span className="text-[#00AEEF]">not just</span> a content agency.
              </h2>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
                Founded by Lakshya, PrimeNest Creative was born from a simple observation: most
                creators had amazing ideas but lacked the resources to bring them to life. We
                started because we believed content creation shouldn't require a massive team or
                budget.
              </p>

              {/* Mission */}
              <div className="pt-8 border-t border-[#E8E8E8]">
                <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                  Today, we partner with creators who are serious about growth. We handle the boring
                  back-end—editing, graphics, optimization—so you can focus on what you do best:
                  creating amazing content and connecting with your audience.
                </p>
              </div>
            </div>

            {/* Right Side - Founder Info */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <div className="w-20 h-20 bg-[#00AEEF] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6 mx-auto lg:mx-0 shadow-lg">
                  L
                </div>
                <p className="font-bold text-[#1A1A1A] text-xl mb-2">Lakshya</p>
                <p className="text-[#666666] text-base">Co-founder & Creative Director</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
