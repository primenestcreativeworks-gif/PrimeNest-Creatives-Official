'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Understand your brand, goals, and content style. We dig deep to find the unique angle that sets you apart.',
    icon: '💬',
    accent: 'from-blue-500/20 to-cyan-400/20',
    borderHover: 'hover:border-blue-400/50 hover:shadow-blue-500/10'
  },
  {
    number: '02',
    title: 'Content Strategy',
    description: 'Create a distinct roadmap tailored to your audience. We plan the hooks, pacing, and visual style.',
    icon: '🗺️',
    accent: 'from-purple-500/20 to-pink-400/20',
    borderHover: 'hover:border-purple-400/50 hover:shadow-purple-500/10'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Bring your vision to life with premium, high-retention editing, captivating graphics, and flawless sound design.',
    icon: '🎬',
    accent: 'from-orange-500/20 to-red-400/20',
    borderHover: 'hover:border-orange-400/50 hover:shadow-orange-500/10'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Fine-tune every millisecond for maximum engagement, CTR, and algorithmic reach across platforms.',
    icon: '⚡',
    accent: 'from-green-500/20 to-emerald-400/20',
    borderHover: 'hover:border-emerald-400/50 hover:shadow-emerald-500/10'
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Deploy content, analyze the results, and provide ongoing iteration support to ensure compounding growth.',
    icon: '🚀',
    accent: 'from-[#00AEEF]/20 to-blue-400/20',
    borderHover: 'hover:border-[#00AEEF]/50 hover:shadow-[#00AEEF]/10'
  },
];

export function Process() {
  return (
    <section className="w-full bg-[#FAFBFC] px-4 md:px-8 lg:px-16 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00AEEF]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold text-[#00AEEF] uppercase tracking-widest mb-4">
                How we work
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-6 leading-[1.1]">
                A proven formula for growth.
              </h2>
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-8">
                We don't just edit videos. We build a streamlined, collaborative pipeline designed to elevate your brand and capture attention at scale.
              </p>
              
              <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-transparent rounded-full" />
            </ScrollReveal>
          </div>

          {/* Scrolling Right Column (Cards) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div 
                  className={`group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${step.borderHover}`}
                >
                  {/* Background massive number */}
                  <div className="absolute -top-6 -right-4 md:-top-10 md:-right-8 text-[8rem] md:text-[12rem] font-black text-slate-50 opacity-60 mix-blend-multiply select-none pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-out">
                    {step.number}
                  </div>

                  {/* Top-right subtle gradient glow that expands on hover */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${step.accent} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FAFBFC] border border-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:bg-white group-hover:scale-110 transition-all duration-500 ease-out">
                      {step.icon}
                    </div>
                    
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-sm font-bold text-[#00AEEF]">Step {step.number}</span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
