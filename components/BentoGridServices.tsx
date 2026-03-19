'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

const services = [
  {
    title: 'Long-form Editing',
    description: 'Full episodes, interviews and tutorials edited for watch-time and retention.',
    href: '/services/long-form-edit',
    image: encodeURI('/Long Form,longform.jpg'),
    className: 'col-span-1 md:col-span-2 row-span-1',
    bg: 'bg-indigo-50',
    text: 'text-indigo-900',
    titleColor: 'text-indigo-800',
  },
  {
    title: 'Short-form Content',
    description: 'Scroll-stopping Shorts, Reels and TikToks built around strong hooks.',
    href: '/services/short-form-content',
    image: encodeURI('/Short Edits.jpg'),
    className: 'col-span-1 md:col-span-1 row-span-2',
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
    titleColor: 'text-emerald-800',
  },
  {
    title: 'Podcast Editing',
    description: 'Clean audio, balanced levels and video layouts ready for every platform.',
    href: '/services/podcast-editing',
    image: encodeURI('/Podcast.jpg'),
    className: 'col-span-1 row-span-1',
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    titleColor: 'text-amber-800',
  },
  {
    title: 'Social Media Handling',
    description: 'We run your upload schedule and day-to-day publishing across platforms.',
    href: '/services/social-media-handling',
    image: encodeURI('/Social media.jpg'),
    className: 'col-span-1 row-span-1',
    bg: 'bg-rose-50',
    text: 'text-rose-900',
    titleColor: 'text-rose-800',
  },
  {
    title: 'YouTube Management',
    description: 'Channel audits, SEO and upload systems that keep your channel growing.',
    href: '/services/youtube-channel-management',
    image: encodeURI('/Youtube.jpg'),
    className: 'col-span-1 md:col-span-2 row-span-1',
    bg: 'bg-sky-50',
    text: 'text-sky-900',
    titleColor: 'text-sky-800',
  },
];

export function BentoGridServices() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-6">
      {services.map((service, index) => (
        <ScrollReveal
          key={service.href}
          delay={index * 100}
          className={`${service.className} relative group overflow-hidden ${service.bg} rounded-[2rem] hover:rounded-[3.5rem] transition-all duration-500 ease-in-out shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] block border border-black/5`}
        >
          <Link href={service.href} className="flex flex-col h-full w-full justify-between p-8 md:p-10 relative z-10 pointer-events-auto cursor-pointer">
            {/* Header Content */}
            <div className="relative z-20 space-y-3">
              <h3 className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${service.titleColor} transition-transform duration-500 group-hover:translate-x-2`}>
                {service.title}
              </h3>
              <p className={`text-sm md:text-base font-medium max-w-[280px] xl:max-w-sm leading-relaxed ${service.text} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                {service.description}
              </p>
            </div>

            {/* View Details Link */}
            <div className="relative z-20 mt-auto pt-4 flex items-center justify-between pointer-events-none">
              <span className={`inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs ${service.titleColor}`}>
                View Details
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>

            {/* Background Graphic */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
