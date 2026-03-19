'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const serviceLinks = [
  { href: '/services/long-form-edit', label: 'Long-form Editing' },
  { href: '/services/short-form-content', label: 'Short-form Content' },
  { href: '/services/podcast-editing', label: 'Podcast Editing' },
  { href: '/services/social-media-handling', label: 'Social Media Handling' },
  { href: '/services/youtube-channel-management', label: 'YouTube Management' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isServicesOpen && !target.closest('[data-services-dropdown]')) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isServicesOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm border-b border-gray-100' : ''
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#00AEEF] text-white px-4 py-2 text-center text-[13px] font-medium flex items-center justify-center">
        <span>Premium edits for fast-growing creators!</span>
      </div>

      {/* Main Nav */}
      <nav className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative h-8 md:h-10 lg:h-12 w-auto">
            <img
              src="/Extremist - 9 Typography Designs_ Powerful Words-Photoroom.png"
              alt="PrimeNest"
              className="h-full w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'brightness(0) opacity(0.8)' }}
            />
          </div>
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:gap-10 text-[14px]">
          <Link
            href="/#home"
            className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Home
          </Link>
          <div data-services-dropdown className="relative">
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors flex items-center gap-1"
            >
              <span>Services</span>
              <span className={`transition-transform duration-200 text-xs ${isServicesOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {isServicesOpen && (
              <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 min-w-[260px] rounded-2xl bg-white border border-[#E5E7EB] shadow-xl p-3 z-[100]">
                <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Services
                </p>
                <div className="flex flex-col gap-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#00AEEF] transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="text-[11px] text-slate-400">View</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/#work"
            className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Work
          </Link>
          <Link
            href="/#results"
            className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Results
          </Link>
          <Link
            href="/about"
            className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* CTA Button & Contact - Right */}
        <div className="hidden md:flex items-center justify-end shrink-0 gap-4">
          <Link
            href="/#contact"
            className="text-sm font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact
          </Link>
          <button
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0096D6] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span>Book a Call</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors shrink-0"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <Link
              href="/#home"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                Services
              </p>
              <div className="space-y-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#00AEEF]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#work"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  setTimeout(() => {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              Work
            </Link>
            <Link
              href="/#results"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  setTimeout(() => {
                    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              Results
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              About
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50"
            >
              Contact
            </Link>
            <div className="pt-4 px-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-4 py-3.5 rounded-full text-base font-bold bg-[#00AEEF] text-white shadow-md hover:bg-[#0096D6] active:scale-95 transition-all"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
