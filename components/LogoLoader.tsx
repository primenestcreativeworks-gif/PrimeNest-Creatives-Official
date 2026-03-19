'use client';

import { useEffect, useState } from 'react';

export function LogoLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center animate-fade-in">
      {/* Animated Loading Container */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Arrow/Aim Icon Loader */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer rotating circle */}
          <svg
            className="absolute inset-0 w-full h-full animate-rotate-logo"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#00AEEF"
              strokeWidth="3"
              strokeDasharray="141 282"
            />
          </svg>

          {/* Rotating arrow icon */}
          <svg
            className="relative z-10 w-12 h-12 animate-rotate-logo"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00AEEF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Arrow pointing upward right */}
            <path d="M7 17l10-10M17 7v10H7" />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-[#00AEEF] font-semibold text-lg">PrimeNest Creative</p>
          <p className="text-[#666666] text-sm mt-1">Initializing...</p>
        </div>
      </div>
    </div>
  );
}
