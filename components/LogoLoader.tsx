'use client';

import { useEffect, useState } from 'react';

export function LogoLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center justify-center gap-5">
        {/* New Taskbar Logo in Loader */}
        <div className="relative h-12 w-auto flex items-center justify-center">
          <img
            src="/logo-taskbar.png"
            alt="Logo"
            className="h-10 w-auto object-contain animate-pulse"
          />
        </div>

        {/* Minimalist Monospace Status */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>INITIALIZING // STUDIO</span>
        </div>
      </div>
    </div>
  );
}
