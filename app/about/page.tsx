'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#00AEEF]/20">
      <Header />
      
      <main className="w-full pt-32 pb-20 overflow-hidden">
        
        {/* Abstract Hero Background */}
        <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#00AEEF]/10 via-indigo-500/5 to-transparent rounded-full blur-[120px]" />
          <div className="absolute top-[20%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-rose-400/5 to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Hero Section */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 text-center z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-600">
                The PrimeNest Story
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-[#1A1A1A] tracking-tighter leading-[1.1] mb-8">
              We engineer <br className="hidden md:block"/>
              <span className="relative inline-block">
                content <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00AEEF]/20 -z-10 -rotate-1" />
              </span> that scales.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              We are a premium content production agency based in India — acting as the growth engine for serious creators worldwide.
            </p>
          </ScrollReveal>
        </section>

        {/* Stats Strip - Floating Glass Cards */}
        <section className="relative w-full z-20 -mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '4+', label: 'Years Experience', sub: 'In the trenches' },
                { number: '2.5M+', label: 'Organic Views Powered', sub: 'Across platforms' },
                { number: '4x', label: 'Avg Watch-Time Lift', sub: 'Retention focused' }
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="bg-white/60 backdrop-blur-md border border-white shadow-xl shadow-slate-200/50 rounded-3xl p-8 text-center transform transition-transform duration-500 hover:-translate-y-2">
                    <p className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#00AEEF] to-[#6366F1] mb-2">{stat.number}</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-1">{stat.label}</p>
                    <p className="text-xs font-medium text-slate-400">{stat.sub}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Founder - Journal Layout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Placeholder/Graphic */}
            <ScrollReveal direction="left" className="lg:col-span-5 relative">
              <div className="w-full bg-white rounded-3xl p-4 md:p-6 transform -rotate-3 transition-transform duration-500 hover:rotate-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative group z-10">
                {/* The Photo Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-inner">
                  <img 
                    src="/IMG_6196.JPG.jpeg" 
                    alt="Lakshya - Founder & Director" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00AEEF]/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                {/* Name and Position below frame */}
                <div className="text-center px-4 pb-2">
                  <h3 className="font-bold text-slate-900 text-2xl tracking-tight">Lakshya</h3>
                  <p className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest mt-1">Founder & Director</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#00AEEF]/20 to-indigo-500/20 rounded-full blur-3xl" />
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal direction="right" className="lg:col-span-7 prose prose-lg prose-slate max-w-none">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Started in Class 11. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-400">Completely self-taught.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                Lakshya discovered his passion for filmmaking and editing in Class 11 — no mentor, no formal course, just a laptop and an obsession with learning everything from scratch through YouTube.
              </p>
              <p className="leading-relaxed text-slate-600 mb-8">
                What started as creative curiosity turned into 4+ years of real client work spanning coaching institutes, fitness creators, influencers, and investment firms. Through every single project, one core belief stayed constant:
              </p>
              
              <div className="relative pl-8 md:pl-10">
                <span className="absolute left-0 top-0 text-6xl text-[#00AEEF]/20 font-serif leading-none">"</span>
                <blockquote className="text-2xl font-bold text-slate-800 italic leading-snug">
                  Editing is not just about making videos look good. It's about holding attention, building trust, and making the viewer feel like they're exactly where they need to be.
                </blockquote>
              </div>
              
              <p className="mt-8 font-bold text-[#00AEEF] uppercase tracking-widest text-sm">
                — That belief became the foundation of PrimeNest Creatives.
              </p>
            </ScrollReveal>

          </div>
        </section>

        {/* How PrimeNest Began - Timeline */}
        <section className="w-full bg-[#050816] text-white py-24 lg:py-40 relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00AEEF]/10 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
           
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
             <ScrollReveal>
               <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">The Evolution</h2>
               <p className="text-[#00AEEF] font-bold text-sm md:text-base uppercase tracking-[0.2em]">Not an accident. Always the plan.</p>
             </ScrollReveal>
           </div>
           
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             {/* Timeline track */}
             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />
             
             <div className="space-y-24">
               {/* Step 1 */}
               <ScrollReveal className="relative flex flex-col md:flex-row items-center md:items-start md:justify-end md:w-1/2 ml-16 md:ml-auto md:pl-12">
                 <div className="absolute left-[-2.35rem] md:left-[-3.5rem] top-1 h-6 w-6 rounded-full bg-[#00AEEF] border-4 border-[#050816] shadow-[0_0_15px_rgba(0,174,239,0.5)] z-10" />
                 <div>
                   <h4 className="text-2xl font-bold mb-3">More than freelance</h4>
                   <p className="text-slate-400 leading-relaxed text-lg">
                     PrimeNest was never a side project. From day one, Lakshya wanted to build a proper agency — a team, a system, and a brand that creators could fully rely on.
                   </p>
                 </div>
               </ScrollReveal>
                 
               {/* Step 2 */}
               <ScrollReveal className="relative flex flex-col md:flex-row items-center md:items-start md:justify-start md:w-1/2 ml-16 md:ml-0 md:pr-12">
                 <div className="absolute left-[-2.35rem] md:right-[-3.5rem] md:left-auto top-1 h-6 w-6 rounded-full bg-white border-4 border-[#050816] z-10" />
                 <div className="md:text-right">
                   <h4 className="text-2xl font-bold mb-3">The Nest</h4>
                   <p className="text-slate-400 leading-relaxed text-lg">
                     The name says it all. A nest is where things are built, nurtured, and launched into the world. Prime, because nothing less than absolute best is acceptable.
                   </p>
                 </div>
               </ScrollReveal>

               {/* Step 3 */}
               <ScrollReveal className="relative flex flex-col md:flex-row items-center md:items-start md:justify-end md:w-1/2 ml-16 md:ml-auto md:pl-12">
                 <div className="absolute left-[-2.35rem] md:left-[-3.5rem] top-1 h-6 w-6 rounded-full bg-indigo-500 border-4 border-[#050816] shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />
                 <div>
                   <h4 className="text-2xl font-bold mb-3">Early Wins</h4>
                   <p className="text-slate-400 leading-relaxed text-lg">
                     Starting solo, early results spoke for themselves: 4x reel reach for a coaching institute, 10+ hours saved monthly for an investment firm. Every win pointed toward this.
                   </p>
                 </div>
               </ScrollReveal>
             </div>
             
             <ScrollReveal className="mt-32 text-center border border-white/10 bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-extrabold italic text-white leading-snug">
                  "We are not just editors. We are growth partners for creators who believe their content can do more."
                </p>
             </ScrollReveal>
           </div>
        </section>

        {/* What We Believe */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">
              What We <span className="text-[#00AEEF]">Believe</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal delay={100} className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center transform transition-transform duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-[#00AEEF] text-2xl font-bold">1</span>
              </div>
              <p className="text-xl text-slate-700 font-semibold leading-relaxed">
                We work with creators who are serious — who show up consistently, who know their audience has potential, and who are ready to invest in output that performs.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="bg-slate-900 rounded-3xl p-10 shadow-xl shadow-slate-900/20 border border-slate-800 flex flex-col justify-center transform transition-transform duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <p className="text-xl text-slate-300 font-semibold leading-relaxed">
                We are still growing. Still hungry. And that aggressive energy is exactly what makes us different from agencies that have gotten lazy and comfortable.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={300} className="mt-20 text-center">
             <button
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-white bg-gradient-to-r from-[#00AEEF] to-indigo-600 hover:scale-105 shadow-[0_10px_30px_rgba(0,174,239,0.3)] transition-all duration-300"
              onClick={() => {
                 window.location.href = '/#contact';
              }}
            >
              Partner with PrimeNest today
              <span className="bg-white/20 p-1.5 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
