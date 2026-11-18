'use client';

import { useEffect, useState } from 'react';

export function LogoLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated Electric Blue Spinner */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#00AAFF"
              strokeWidth="4"
              strokeDasharray="90 180"
              strokeLinecap="round"
            />
          </svg>
          <div className="w-3 h-3 rounded-full bg-[#00AAFF] shadow-[0_0_15px_#00AAFF]" />
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <p className="text-white font-bold text-base tracking-tight">
            PrimeNest <span className="text-[#00AAFF]">Creatives</span>
          </p>
          <p className="text-white/40 text-xs mt-1 tracking-wider uppercase">
            Post-Production
          </p>
        </div>
      </div>
    </div>
  );
}
