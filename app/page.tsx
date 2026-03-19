'use client';

import { LogoLoader } from '@/components/LogoLoader';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { RecentWork } from '@/components/sections/RecentWork';
import { Results } from '@/components/sections/Results';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LogoLoader />
      <Header />
      
      {/* Main Content */}
      <main className="w-full overflow-x-hidden pt-16">
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="work">
          <WorkShowcase />
        </div>
        <RecentWork />
        <div id="results">
          <Results />
        </div>
        <div id="process">
          <Process />
        </div>
        <Testimonials />
        <div id="contact">
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
