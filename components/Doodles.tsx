'use client';

import React from 'react';

/**
 * Vibrant Colorful Hand-drawn SVG Doodles & Graphics
 * Incorporating multi-stop electric gradients and dynamic highlights
 */

export function SquigDoodle({ className = 'w-24 h-4 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 16"
      fill="none"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="squigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00AAFF" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#00F5A0" />
        </linearGradient>
      </defs>
      <path
        d="M3 12 C13 2, 20 2, 28 10 S 45 14, 55 6 S 75 2, 87 10"
        stroke="url(#squigGrad)"
        strokeWidth="3.5"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = 'w-10 h-8 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 54 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00AAFF" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      {/* Hand-drawn curved swoop */}
      <path
        d="M6 34 C16 4, 34 2, 44 26"
        stroke="url(#arrowGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M36 28 L45 28 L46 17"
        stroke="#FFB800"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScissorsDoodle({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00AAFF" />
          <stop offset="100%" stopColor="#00F5A0" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3366" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      {/* Left Blade */}
      <path d="M12 16 L27 6" stroke="url(#bladeGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right Blade */}
      <path d="M12 16 L27 26" stroke="url(#bladeGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pivot screw */}
      <circle cx="13" cy="16" r="2" fill="#FFB800" stroke="#FFFFFF" strokeWidth="1" />
      {/* Top Handle Ring */}
      <circle cx="7" cy="10" r="4.5" stroke="url(#handleGrad)" strokeWidth="2.5" />
      {/* Bottom Handle Ring */}
      <circle cx="7" cy="22" r="4.5" stroke="url(#handleGrad)" strokeWidth="2.5" />
    </svg>
  );
}

export function SparkleDoodle({ className = 'w-5 h-5 text-[#FFB800]' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#FF3366" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 C12 7.5, 16.5 12, 22 12 C16.5 12, 12 16.5, 12 22 C12 16.5, 7.5 12, 2 12 C7.5 12, 12 7.5, 12 2 Z"
        fill="url(#sparkleGrad)"
      />
    </svg>
  );
}

export function FilmWaveDoodle({ className = 'w-20 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="filmWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#00AAFF" />
          <stop offset="100%" stopColor="#FF3366" />
        </linearGradient>
      </defs>
      <path
        d="M2 9 C 14 1, 26 17, 38 9 C 50 1, 62 17, 78 9"
        stroke="url(#filmWaveGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TiltBadge({
  text,
  color = 'blue',
  rotate = '-rotate-3',
}: {
  text: string;
  color?: 'blue' | 'purple' | 'amber' | 'emerald' | 'pink';
  rotate?: string;
}) {
  const colorMap = {
    blue: 'bg-gradient-to-r from-[#00AAFF] to-[#0088CC] text-[#001018] shadow-[0_0_15px_rgba(0,170,255,0.4)]',
    purple: 'bg-gradient-to-r from-[#A855F7] to-[#7E22CE] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    amber: 'bg-gradient-to-r from-[#FFB800] to-[#F59E0B] text-black shadow-[0_0_15px_rgba(255,184,0,0.4)]',
    emerald: 'bg-gradient-to-r from-[#00F5A0] to-[#10B981] text-black shadow-[0_0_15px_rgba(0,245,160,0.4)]',
    pink: 'bg-gradient-to-r from-[#FF3366] to-[#E11D48] text-white shadow-[0_0_15px_rgba(255,51,102,0.4)]',
  };

  return (
    <span
      className={`inline-block font-montserrat font-extrabold text-[11px] tracking-wider uppercase px-3 py-1 rounded-md transform ${rotate} ${colorMap[color]} select-none`}
    >
      {text}
    </span>
  );
}
