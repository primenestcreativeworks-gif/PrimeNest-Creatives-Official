'use client';

import Link from 'next/link';
import { Mail, Phone, Globe, MessageSquare, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#070707] text-white border-t border-white/10 relative overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-20 pb-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-10 w-auto">
                <img
                  src="/Extremist - 9 Typography Designs_ Powerful Words-Photoroom.png"
                  alt="PrimeNest Creatives"
                  className="h-full w-auto filter invert brightness-200 opacity-95 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#00AAFF] transition-colors">
                PrimeNest <span className="text-[#00AAFF]">Creatives</span>
              </span>
            </Link>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Your end-to-end content post-production team. Post-production specialists dedicated to YouTube long-form, high-retention shorts, video podcasts, and high-CTR packaging.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#00AAFF]" />
              <span>India-based studio · Serving global creators</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#00AAFF]">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-[#00AAFF] transition-colors">
                  Long-form YouTube Editing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00AAFF] transition-colors">
                  Thumbnails & Packaging
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00AAFF] transition-colors">
                  Short-form Content & Reels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00AAFF] transition-colors">
                  Content Ideation Systems
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#00AAFF] transition-colors">
                  Content Showcase
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#00AAFF] transition-colors">
                  How We Work
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Coordinates (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#00AAFF]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <a
                href="tel:+917217207811"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span>+91-7217207811</span>
              </a>

              <a
                href="mailto:primenestcreativeworks@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span className="break-all">primenestcreativeworks@gmail.com</span>
              </a>

              <a
                href="https://primenestcreatives.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Globe className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span>primenestcreatives.com</span>
              </a>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/primenestcreatives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00AAFF] hover:border-[#00AAFF]/40 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/917217207811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00AAFF] hover:border-[#00AAFF]/40 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PrimeNest Creatives. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#00AAFF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
