'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#020617] text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-14 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-auto">
                <img
                  src="/Extremist - 9 Typography Designs_ Powerful Words-Photoroom.png"
                  alt="PrimeNest"
                  className="h-full w-auto"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400">
                  PrimeNest Creative
                </p>
                <p className="font-semibold text-base text-white">
                  Strategic content, done‑for‑you.
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              We partner with creators and brands to build long‑form episodes, short‑form clips,
              and channel systems that compound views month after month.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Currently onboarding new clients</span>
              </span>
              <span className="text-slate-500">Based in India · Working worldwide</span>
            </div>
          </div>

          {/* Services & Company */}
          <div>
            <h4 className="font-semibold text-xs tracking-[0.22em] uppercase text-slate-400 mb-4">
              Company & Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="font-bold text-white hover:text-[#00AEEF] transition-colors"
                >
                  About PrimeNest
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="font-bold text-white hover:text-[#00AEEF] transition-colors"
                >
                  Questions / FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-bold text-white hover:text-[#00AEEF] transition-colors"
                >
                  Insights / Blog
                </Link>
              </li>
              <li className="pt-2 pb-1 mb-2 border-b border-slate-800" />
              <li>
                <Link
                  href="/services/long-form-edit"
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Long‑form video editing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/short-form-content"
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Short‑form content & reels
                </Link>
              </li>
              <li>
                <Link
                  href="/services/podcast-editing"
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Podcast editing & repurposing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-handling"
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Social media handling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/youtube-channel-management"
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  YouTube channel management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs tracking-[0.22em] uppercase text-slate-400 mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="https://web.whatsapp.com/send?phone=917217207811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <span>WhatsApp us</span>
                <span className="text-xs text-slate-500">Fastest response</span>
              </a>
              <a
                href="tel:+917217207811"
                className="flex items-center justify-between gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <span>Book a quick call</span>
                <span className="text-xs text-slate-500">9 AM – 9 PM IST</span>
              </a>
              <a
                href="mailto:primenestcreativesworks@gmail.com"
                className="flex items-center justify-between gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <span>Email our team</span>
                <span className="text-xs text-slate-500">We reply within 24 hours</span>
              </a>
              <p className="pt-3 text-xs text-slate-500">India · Remote‑first studio</p>

              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://www.instagram.com/primenestcreatives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-[13px] hover:bg-[#00AEEF] transition-colors"
                  aria-label="Instagram"
                >
                  ig
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PrimeNest Creative. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-300 transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
