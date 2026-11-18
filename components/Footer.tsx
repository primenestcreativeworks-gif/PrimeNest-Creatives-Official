'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Globe, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-white border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Subtle Aurora Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00AAFF]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-20 pb-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative h-9 md:h-11 w-auto flex items-center">
                <img
                  src="/logo-taskbar.png"
                  alt="Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </Link>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Your end-to-end content post-production team. Dedicated to YouTube long-form, high-retention shorts, video podcasts, and click-worthy thumbnail packaging.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-xs text-neutral-400 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span>India-based studio · Serving global creators</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF]">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="/services/long-form-edit" className="hover:text-white transition-colors">
                  Long-Form YouTube Cuts
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Thumbnails & Packaging
                </a>
              </li>
              <li>
                <a href="/services/short-form-content" className="hover:text-white transition-colors">
                  Short-Form & Viral Reels
                </a>
              </li>
              <li>
                <a href="/services/podcast-editing" className="hover:text-white transition-colors">
                  Video Podcast Production
                </a>
              </li>
              <li>
                <a href="/services/youtube-channel-management" className="hover:text-white transition-colors">
                  Channel Management
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  The PrimeNest Story
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Coordinates (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#00AAFF]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <a
                href="tel:+917217207811"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span className="font-mono">+91-7217207811</span>
              </a>

              <a
                href="mailto:primenestcreativeworks@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span className="truncate font-mono">primenestcreativeworks@gmail.com</span>
              </a>

              <a
                href="https://primenestcreatives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Globe className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span className="font-mono">primenestcreatives.com</span>
              </a>

              <a
                href="https://www.instagram.com/primenestcreatives"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#00AAFF] shrink-0" />
                <span>@primenestcreatives</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio Engine Operational</span>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#00AAFF]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
