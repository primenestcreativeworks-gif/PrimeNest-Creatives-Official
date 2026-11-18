'use client';

import { LogoLoader } from '@/components/LogoLoader';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { RecentWork } from '@/components/sections/RecentWork';
import { Results } from '@/components/sections/Results';
import { Process } from '@/components/sections/Process';
import { WhoWeWorkWith } from '@/components/sections/WhoWeWorkWith';
import { Founder } from '@/components/sections/Founder';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PrimeNest Creatives',
    url: 'https://primenestcreatives.com',
    logo: 'https://primenestcreatives.com/logo.png',
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
      <main className="w-full overflow-x-hidden bg-[#0A0A0A]">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services (4 core cards + Also available chips + Comparison table) */}
        <Services />

        {/* 3. Content Showcase (Filterable showcase, 16:9, 9:16, Before/After, Live Play) */}
        <WorkShowcase />

        {/* 3.1 Case Studies (Deep-dive before/after client breakdowns) */}
        <RecentWork />

        {/* 4. Results (Data-driven count-up cards, hiding unfilled placeholders) */}
        <Results />

        {/* 5. How We Work (3-step timeline + connecting line + 3 badges) */}
        <Process />

        {/* 6. Who We Work With (4 client groups + What we don't take on) */}
        <WhoWeWorkWith />

        {/* 7. Founder (Lakshya Saxena quote, renders photo slot only if file exists) */}
        <Founder />

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
