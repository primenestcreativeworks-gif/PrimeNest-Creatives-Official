import React from 'react';

/**
 * Hand-drawn SVG wave squiggle from prototype
 */
export function SquigDoodle({ className = 'w-24 h-4 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
    >
      <path d="M3 12 C13 2, 20 2, 28 10 S45 14, 55 6 S75 2, 87 10" />
    </svg>
  );
}

/**
 * Curved Hand-drawn Arrow pointing to CTA
 */
export function ArrowDoodle({ className = 'w-16 h-12 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Curved loop pointing right-down */}
      <path d="M10 10 Q 25 35, 55 28" />
      <path d="M44 20 L 56 28 L 47 38" />
    </svg>
  );
}

/**
 * Video Editing Scissors Doodle
 */
export function ScissorsDoodle({ className = 'w-8 h-8 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8" cy="8" r="4" stroke="#00AAFF" />
      <circle cx="8" cy="24" r="4" stroke="#38BDF8" />
      <line x1="11" y1="11" x2="26" y2="26" stroke="#00AAFF" />
      <line x1="11" y1="21" x2="26" y2="6" stroke="#38BDF8" />
    </svg>
  );
}

/**
 * Colorful Sparkle / Star Doodle
 */
export function SparkleDoodle({ className = 'w-6 h-6 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

/**
 * Film Clapper / Timeline Wave Doodle
 */
export function FilmWaveDoodle({ className = 'w-20 h-6 text-[#00AAFF]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <line x1="4" y1="12" x2="4" y2="12.01" strokeWidth="4" stroke="#00AAFF" />
      <line x1="12" y1="6" x2="12" y2="18" stroke="#38BDF8" />
      <line x1="20" y1="2" x2="20" y2="22" stroke="#00AAFF" />
      <line x1="28" y1="8" x2="28" y2="16" stroke="#38BDF8" />
      <line x1="36" y1="4" x2="36" y2="20" stroke="#00AAFF" />
      <line x1="44" y1="9" x2="44" y2="15" stroke="#38BDF8" />
      <line x1="52" y1="1" x2="52" y2="23" stroke="#00AAFF" />
      <line x1="60" y1="7" x2="60" y2="17" stroke="#38BDF8" />
      <line x1="68" y1="10" x2="68" y2="14" stroke="#38BDF8" />
      <line x1="76" y1="12" x2="76" y2="12.01" strokeWidth="4" stroke="#00AAFF" />
    </svg>
  );
}

/**
 * Tilted Badge Pill like prototype
 */
export function TiltBadge({
  text,
  rotate = '-rotate-3',
  className = '',
}: {
  text: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block bg-[#00AAFF] text-[#001018] font-anton text-xs sm:text-sm px-3 py-1 rounded-md tracking-wider uppercase shadow-md ${rotate} ${className}`}
    >
      {text}
    </span>
  );
}
