'use client';

import React from 'react';
import Link from 'next/link';

const FRAME_OFFSET = -30;
const FRAMES_VISIBLE_LENGTH = 3;
const SCROLL_THRESHOLD = 40;
const BUFFER_SIZE = 8;

function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(Math.max(value, min), max);
}

const services = [
  {
    title: 'Long‑form Editing',
    description: 'Full episodes, interviews and tutorials edited for watch‑time and retention.',
    href: '/services/long-form-edit',
    image: encodeURI('/Long Form,longform.jpg'),
  },
  {
    title: 'Short‑form Content',
    description: 'Scroll‑stopping Shorts, Reels and TikToks built around strong hooks.',
    href: '/services/short-form-content',
    image: encodeURI('/Short Edits.jpg'),
  },
  {
    title: 'Podcast Editing',
    description: 'Clean audio, balanced levels and video layouts ready for every platform.',
    href: '/services/podcast-editing',
    image: encodeURI('/Podcast.jpg'),
  },
  {
    title: 'Social Media Handling',
    description: 'We run your upload schedule and day‑to‑day publishing across platforms.',
    href: '/services/social-media-handling',
    image: encodeURI('/Social media.jpg'),
  },
  {
    title: 'YouTube Channel Management',
    description: 'Channel audits, SEO and upload systems that keep your channel growing.',
    href: '/services/youtube-channel-management',
    image: encodeURI('/Youtube.jpg'),
  },
];

export function InfiniteScrollServices() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollAccumulator = React.useRef(0);
  const lastUpdateTime = React.useRef(Date.now());
  const touchStartY = React.useRef(0);

  const getVisibleCards = React.useCallback(() => {
    const start = currentIndex - BUFFER_SIZE;
    const end = currentIndex + FRAMES_VISIBLE_LENGTH + BUFFER_SIZE;
    const cards = [];

    for (let i = start; i <= end; i++) {
      cards.push({
        index: i,
        serviceIndex: ((i % services.length) + services.length) % services.length,
      });
    }

    return cards;
  }, [currentIndex]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MIN_UPDATE_INTERVAL = 75;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollAccumulator.current += e.deltaY;

      const now = Date.now();
      const timeSinceLastUpdate = now - lastUpdateTime.current;

      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        if (timeSinceLastUpdate >= MIN_UPDATE_INTERVAL) {
          const delta = scrollAccumulator.current > 0 ? 1 : -1;
          setCurrentIndex((prev) => prev + delta);
          scrollAccumulator.current = 0;
          lastUpdateTime.current = now;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;
      touchStartY.current = touchY;

      scrollAccumulator.current += deltaY;

      const now = Date.now();
      const timeSinceLastUpdate = now - lastUpdateTime.current;

      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        if (timeSinceLastUpdate >= MIN_UPDATE_INTERVAL) {
          const delta = scrollAccumulator.current > 0 ? 1 : -1;
          setCurrentIndex((prev) => prev + delta);
          scrollAccumulator.current = 0;
          lastUpdateTime.current = now;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const visibleCards = getVisibleCards();

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {visibleCards.map((card) => {
          const offsetIndex = card.index - currentIndex;
          const isActive = offsetIndex === 0;
          const blur = currentIndex > card.index ? 2 : 0;
          const opacity = currentIndex > card.index ? 0 : 1;
          const scale = clamp(1 - offsetIndex * 0.08, [0.08, 2]);
          const y = clamp(
            offsetIndex * FRAME_OFFSET,
            [FRAME_OFFSET * FRAMES_VISIBLE_LENGTH, Number.POSITIVE_INFINITY]
          );

          const service = services[card.serviceIndex];

          return (
            <div
              key={card.index}
              className={`absolute w-[85%] max-w-[800px] aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 ease-out ${
                isActive ? '' : 'pointer-events-none'
              }`}
              style={{
                transform: `translateY(${y}px) scale(${scale})`,
                filter: `blur(${blur}px)`,
                opacity,
                transitionProperty: 'opacity, filter, transform',
                transitionDuration: '300ms',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                zIndex: 1000 - card.index,
              }}
            >
              <Link href={service.href} className="block w-full h-full group">
                <div className="relative w-full h-full">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a gradient if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background =
                            'linear-gradient(135deg, #00AEEF 0%, #0096D6 100%)';
                        }
                      }}
                    />
                  </div>

                  {/* Overlay with service info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-4 max-w-md">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00AEEF] group-hover:gap-3 transition-all">
                      View service details
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
