'use client';

import { LogoLoader } from '@/components/LogoLoader';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { MarqueeTicker } from '@/components/sections/MarqueeTicker';
import { Services } from '@/components/sections/Services';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { Results } from '@/components/sections/Results';
import { WhoWeWorkWith } from '@/components/sections/WhoWeWorkWith';
import { FAQ } from '@/components/sections/FAQ';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PrimeNest Creatives',
    url: 'https://primenestcreatives.com',
    logo: 'https://primenestcreatives.com/logo-taskbar.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7217207811',
      contactType: 'customer service',
      email: 'primenestcreativeworks@gmail.com',
    },
    sameAs: ['https://www.instagram.com/primenestcreatives'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LogoLoader />
      <Header />

      {/* Main Content assembled in exact specified sequence */}
      <main className="w-full overflow-x-hidden bg-[#030303]">
        {/* 1. Hero with Anton typography, tilted reels, and hand-drawn doodles */}
        <Hero />

        {/* 2. Marquee Ticker Strip: Infinite scrolling metrics & Anton punchlines */}
        <MarqueeTicker />

        {/* 3. Services (4 core cards + Also available chips + Comparison table) */}
        <Services />

        {/* 4. The Work Showcase (Shorts, Long-form, Podcasts, Wall-pinned Thumbnails, AI) */}
        <WorkShowcase />

        {/* 5. Results (Prototype 3-column layout, 2-column wide big stat, Anton numbers) */}
        <Results />

        {/* 6. Who We Work With (Wavy 3D tilted transformation tabs per client reference) */}
        <WhoWeWorkWith />

        {/* 7. FAQ (Prototype 2-column accordion with electric sky blue accents) */}
        <FAQ />

        {/* 8. Testimonials (Redesigned dark glassmorphism cards per user instruction) */}
        <Testimonials />

        {/* 9. Contact / CTA (Primary CTA + Enquiry form + direct contact coordinates) */}
        <FinalCTA />
      </main>

      {/* 10. Footer */}
      <Footer />
    </>
  );
}
