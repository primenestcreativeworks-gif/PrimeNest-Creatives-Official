'use client';

import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-full tracking-tight transition-all duration-300 active:scale-95 cursor-pointer select-none';

  const variantStyles = {
    // V0-Compute High Contrast White Pill Button
    primary:
      'bg-white text-black font-semibold hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0',
    // Translucent Dark Glass Pill
    secondary:
      'bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0',
    // Electric Sky Blue Accent Pill
    glow:
      'bg-[#00AAFF] text-[#030303] font-semibold shadow-[0_0_30px_rgba(0,170,255,0.4)] hover:shadow-[0_0_40px_rgba(0,170,255,0.6)] hover:bg-[#33BBFF] hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3 text-sm sm:text-base font-semibold',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={finalClassName}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          if (href.startsWith('#')) {
            e.preventDefault();
            const elem = document.querySelector(href);
            if (elem) {
              elem.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {children}
    </button>
  );
}
