'use client';

import { Timeline } from '@/components/ui/timeline';

// ... existing steps array ...
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
  const data = steps.map((step, index) => ({
    title: (
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-[#00AEEF] uppercase tracking-widest pl-1">
          Step {step.number}
        </span>
      </div>
    ),
    content: (
      <div 
        className={`group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/80 shadow-[0_8px_32px_0_rgba(0,174,239,0.05)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-white/80 hover:border-[#00AEEF]/20 mb-8 w-full`}
      >
        {/* Background massive number */}
        <div className="absolute -top-6 -right-4 md:-top-10 md:-right-8 text-[8rem] md:text-[12rem] font-black text-slate-50 opacity-60 mix-blend-multiply select-none pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-out">
          {step.number}
        </div>

        {/* Top-right subtle gradient glow that expands on hover */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${step.accent} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-white border border-slate-100/50 shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-all duration-500 ease-out z-10">
            {step.icon}
          </div>
          
          <div className="pt-2 w-full">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-2 flex-wrap">
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
    )
  }));

  return (
    <section className="w-full bg-[#FAFBFC] py-24 md:py-32 relative overflow-hidden font-sans">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00AEEF]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#00AEEF]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="px-4 md:px-8 lg:px-16 mb-20 flex flex-col items-center text-center">
          <span className="inline-block text-sm font-semibold text-[#00AEEF] uppercase tracking-widest mb-4">
            How we work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-6 leading-[1.1] max-w-3xl">
            A proven formula for growth.
          </h2>
          <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-8 max-w-2xl">
            We don't just edit videos. We build a streamlined, collaborative pipeline designed to elevate your brand and capture attention at scale.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent rounded-full opacity-50" />
        </div>

        <Timeline data={data} />
      </div>
    </section>
  );
}
