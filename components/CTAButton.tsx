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
    'relative inline-flex items-center justify-center font-medium rounded-xl tracking-tight transition-all duration-300 active:scale-95 cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-[#00AAFF] text-[#0A0A0A] font-semibold hover:bg-[#33BBFF] hover:shadow-[0_0_25px_rgba(0,170,255,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0',
    glow:
      'bg-[#00AAFF] text-[#0A0A0A] font-semibold shadow-[0_0_30px_rgba(0,170,255,0.4)] hover:shadow-[0_0_40px_rgba(0,170,255,0.6)] hover:bg-[#33BBFF] hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs md:text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-3.5 text-base md:text-lg',
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
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
