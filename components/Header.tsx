'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { label: 'Long-Form YouTube Cuts', href: '/services/long-form-edit' },
    { label: 'Viral Shorts & Reels', href: '/services/short-form-content' },
    { label: 'Thumbnails & Packaging', href: '#work' },
    { label: 'Podcast Production', href: '/services/podcast-editing' },
    { label: 'YouTube Management', href: '/services/youtube-channel-management' },
  ];

  const navItems = [
    { label: 'Services', href: '#services', isDropdown: true },
    { label: 'Work', href: '#work' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo Only - No text */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-8 md:h-10 w-auto flex items-center">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-xs sm:text-sm font-medium">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-1 group"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 group-hover:text-white ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </a>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#090909]/95 border border-white/[0.08] p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <p className="px-3 py-1.5 text-[10px] font-montserrat font-bold uppercase tracking-widest text-neutral-400">
                      Capabilities
                    </p>
                    <div className="flex flex-col gap-1">
                      {serviceLinks.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="px-3 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:bg-white/[0.06] hover:text-[#00AAFF] transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right Action / CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Live Studio Status Pill */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] font-montserrat font-semibold text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span>Accepting Channels</span>
          </div>

          <CTAButton
            variant="primary"
            size="sm"
            href="#contact"
          >
            Get a Free Trial Edit
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/[0.03] border border-white/10 text-white"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/98 border-b border-white/[0.08] px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-white py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <CTAButton
              variant="primary"
              size="md"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center"
            >
              Get a Free Trial Edit
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
