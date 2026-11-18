'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CTAButton } from './CTAButton';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { href: '/#services', label: 'Core Services' },
  { href: '/services/long-form-edit', label: 'Long-form Editing' },
  { href: '/services/short-form-content', label: 'Short-form & Reels' },
  { href: '/services/podcast-editing', label: 'Podcast Editing' },
  { href: '/services/youtube-channel-management', label: 'YouTube Packaging' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services', isDropdown: true },
    { label: 'Showcase', href: '#work' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Results', href: '#results' },
    { label: 'How We Work', href: '#process' },
    { label: 'About', href: '#founder' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 md:h-11 w-auto flex items-center">
            <img
              src="/Extremist - 9 Typography Designs_ Powerful Words-Photoroom.png"
              alt="PrimeNest Creatives"
              className="h-full w-auto transition-transform duration-300 group-hover:scale-105 filter invert brightness-200 opacity-95"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            <span className="font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-[#00AAFF] transition-colors">
              PrimeNest <span className="text-[#00AAFF]">Creatives</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with animated hover underline */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium">
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
                  className="relative py-1 text-white/80 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-white/50 group-hover:text-[#00AAFF] ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00AAFF] transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#121212]/95 border border-white/10 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Agency Capabilities
                    </p>
                    <div className="flex flex-col gap-1">
                      {serviceLinks.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="px-3 py-2 rounded-lg text-xs font-medium text-white/80 hover:bg-white/5 hover:text-[#00AAFF] transition-colors"
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
                className="relative py-1 text-white/80 hover:text-white transition-colors group"
              >
                <span>{item.label}</span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00AAFF] transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <CTAButton
            variant="primary"
            size="sm"
            href="#contact"
          >
            Get a Free Trial Edit
          </CTAButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#00AAFF] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-[#00AAFF] transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <CTAButton
              variant="primary"
              size="md"
              href="#contact"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Trial Edit
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
