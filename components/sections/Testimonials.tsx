'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Quote, Star } from 'lucide-react';
import { SparkleDoodle } from '@/components/Doodles';

interface Testimonial {
  name: string;
  role: string;
  channel: string;
  quote: string;
  metric: string;
  metricColor: 'blue' | 'purple' | 'emerald' | 'amber';
  avatarBg: string;
  initials: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    name: 'Harsh Tiwari',
    role: 'Creator & Influencer',
    channel: 'Personal Brand · 180K+ reach',
    quote:
      'PrimeNest took my raw, messy video files and turned them into reels that consistently pull 50K-200K views. I focus on speaking, they handle the rest.',
    metric: '50K-200K VIEWS/REEL',
    metricColor: 'blue',
    avatarBg: 'from-[#00AAFF] to-[#0066AA]',
    initials: 'HT',
  },
  {
    name: 'G.S. Vision IAS Team',
    role: 'Educational Institute',
    channel: 'UPSC Coaching · 45K+ Subs',
    quote:
      'Our student enrollment surged after PrimeNest revamped our daily educational reels. Pacing, graphics, and clarity are 10/10.',
    metric: '10K → 60K SUBS',
    metricColor: 'emerald',
    avatarBg: 'from-[#10B981] to-[#047857]',
    initials: 'GS',
  },
  {
    name: 'Vittshala Institute',
    role: 'Financial Education',
    channel: 'Investment & Finance Channel',
    quote:
      'The custom motion graphics and retention edits they build for our financial explainers increased our average watch time from 35% to 68%.',
    metric: '+68% AVG RETENTION',
    metricColor: 'purple',
    avatarBg: 'from-[#A855F7] to-[#6B21A8]',
    initials: 'VI',
  },
  {
    name: 'Paradise Yatra',
    role: 'Travel Media Company',
    channel: 'Documentary & Destination Series',
    quote:
      'Cinematic color grading and atmospheric sound design that rivals full television productions. They never miss our weekly upload schedule.',
    metric: '4K CINEMATIC MASTER',
    metricColor: 'amber',
    avatarBg: 'from-[#FFB800] to-[#D97706]',
    initials: 'PY',
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    name: 'Phil C.',
    role: 'Marketing Agency Founder',
    channel: 'Growth Agency · Multi-Client',
    quote:
      'They built a reliable pipeline from long-form video podcasts into 30+ clips every month. Our content output 3xed without hiring in-house editors.',
    metric: '3X CONTENT OUTPUT',
    metricColor: 'emerald',
    avatarBg: 'from-[#00F5A0] to-[#059669]',
    initials: 'PC',
  },
  {
    name: 'Supriya Singh',
    role: 'Wellness & Yoga Coach',
    channel: 'Lifestyle & Wellness Creator',
    quote:
      'The beat cuts and clean typography in their reels made my workouts look incredible. My Instagram following doubled in under 60 days.',
    metric: '2X INSTAGRAM GROWTH',
    metricColor: 'blue',
    avatarBg: 'from-[#00AAFF] to-[#3B82F6]',
    initials: 'SS',
  },
  {
    name: 'Nolan M.',
    role: 'YouTube Creator',
    channel: 'Education Channel · 250K+ Subs',
    quote:
      'Fast turnaround, clean communication on Slack, and edits that match our channel guidelines perfectly. It feels like an elite in-house team.',
    metric: '250K+ SUBSCRIBERS',
    metricColor: 'purple',
    avatarBg: 'from-[#EC4899] to-[#BE185D]',
    initials: 'NM',
  },
  {
    name: 'Divya & Team',
    role: 'Founder Storyteller',
    channel: 'Startup & Tech Documentaries',
    quote:
      'PrimeNest understands narrative arc. They don’t just cut clips—they craft stories that keep viewers hooked till the very last second.',
    metric: '92% REVISION-FREE',
    metricColor: 'amber',
    avatarBg: 'from-[#FFB800] to-[#EA580C]',
    initials: 'DT',
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  const badgeClasses = {
    blue: 'bg-[#00AAFF]/15 text-[#00AAFF] border-[#00AAFF]/30',
    purple: 'bg-[#A855F7]/15 text-[#C084FC] border-[#A855F7]/30',
    emerald: 'bg-[#00F5A0]/15 text-[#00F5A0] border-[#00F5A0]/30',
    amber: 'bg-[#FFB800]/15 text-[#FFB800] border-[#FFB800]/30',
  };

  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-[#0d0d0d] border border-white/10 p-6 flex flex-col justify-between hover:border-[#00AAFF]/50 hover:shadow-[0_15px_35px_rgba(0,170,255,0.12)] transition-all duration-300 group select-none">
      <div>
        {/* Top Header: Stars & Metric Pill */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#FFB800]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <span
            className={`font-montserrat font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
              badgeClasses[item.metricColor]
            }`}
          >
            {item.metric}
          </span>
        </div>

        {/* Quote text */}
        <p className="font-montserrat text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5 italic">
          “{item.quote}”
        </p>
      </div>

      {/* Creator Profile */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-white font-montserrat font-bold text-xs shadow-md shrink-0`}
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <h4 className="font-montserrat font-bold text-sm text-white truncate group-hover:text-[#00AAFF] transition-colors">
            {item.name}
          </h4>
          <p className="font-montserrat text-xs text-[#00AAFF] truncate font-medium">
            {item.channel}
          </p>
          <p className="font-montserrat text-[10px] text-neutral-400 uppercase tracking-wider truncate font-semibold">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Seamless double array for continuous loop marquee
  const row1Doubled = [...testimonialsRow1, ...testimonialsRow1];
  const row2Doubled = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#030303] py-20 md:py-28 relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00AAFF]/6 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 mb-12 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#00AAFF]">
              Creator Signals // Testimonials
            </span>
            <SparkleDoodle className="w-4 h-4 text-[#FFB800]" />
          </div>

          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-none mb-4">
            What Our Partners <span className="text-[#00AAFF]">Say.</span>
          </h2>

          <p className="font-montserrat text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Real feedback from creators, founders, and institutes whose content pipelines we power every single week.
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Horizontal Scrolling Track (Marquee with pause on hover) */}
      <div className="w-full overflow-hidden mask-marquee-horizontal space-y-5">
        {/* Row 1 (Leftward scroll) */}
        <div className="animate-marquee flex gap-5 items-stretch">
          {row1Doubled.map((item, idx) => (
            <TestimonialCard key={`r1-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2 (Rightward scroll) */}
        <div className="animate-marquee-reverse flex gap-5 items-stretch">
          {row2Doubled.map((item, idx) => (
            <TestimonialCard key={`r2-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
