'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { showcaseItems, ShowcaseItem } from '@/data/videos';
import { AnimatePresence, motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';

type FilterCategory = 'all' | 'long-form' | 'shorts' | 'podcasts' | 'thumbnails' | 'ai';

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'long-form', label: 'Long-Form (16:9)' },
  { id: 'shorts', label: 'Shorts & Reels (9:16)' },
  { id: 'podcasts', label: 'Podcasts' },
  { id: 'thumbnails', label: 'Thumbnails & Packaging' },
  { id: 'ai', label: 'AI Content' },
];

/**
 * Interactive Before/After slider for thumbnails & edits
 */
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After Edit',
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, rect);
    }
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/10"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Base) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#00AAFF] border border-[#00AAFF]/30 pointer-events-none">
        {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          draggable={false}
        />
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white/70 border border-white/20 pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Divider Line with handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,170,255,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#00AAFF] text-[#0A0A0A] flex items-center justify-center shadow-lg border-2 border-white pointer-events-none">
          <SlidersHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

function ShowcaseCardVisual({ item }: { item: ShowcaseItem }) {
  const [viewMode, setViewMode] = useState<'slider' | 'video'>(item.beforeAfter ? 'slider' : 'video');

  return (
    <div className="relative">
      {item.beforeAfter && item.videoUrl && (
        <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/10 text-[10px] font-bold">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('slider');
            }}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'slider' ? 'bg-[#00AAFF] text-[#0A0A0A]' : 'text-white/60 hover:text-white'
            }`}
          >
            Compare
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('video');
            }}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'video' ? 'bg-[#00AAFF] text-[#0A0A0A]' : 'text-white/60 hover:text-white'
            }`}
          >
            Live Play
          </button>
        </div>
      )}

      {viewMode === 'slider' && item.beforeAfter ? (
        <BeforeAfterSlider
          beforeImage={item.beforeAfter.beforeImage}
          afterImage={item.beforeAfter.afterImage}
          beforeLabel={item.beforeAfter.beforeLabel}
          afterLabel={item.beforeAfter.afterLabel}
        />
      ) : (
        <VideoPlayer
          src={item.videoUrl}
          thumbnail={item.thumbnail}
          title={item.title}
          aspectRatio={item.aspectRatio}
          autoplayPreview={true}
        />
      )}
    </div>
  );
}

export function WorkShowcase() {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');

  const filteredItems = showcaseItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="work" className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-24 md:py-32 relative overflow-hidden grain-overlay border-t border-white/5">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#00AAFF]/7 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
                Content That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  Converts & Retains.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
                Explore our post-production work across long-form YouTube cuts, viral reels, video podcasts, and high-CTR thumbnail packaging. Click any card to play live.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-[#00AAFF]" />
              <span>Hover for muted preview · Click to play live</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Navigation Tabs */}
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar select-none">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#00AAFF] text-[#0A0A0A] shadow-[0_0_20px_rgba(0,170,255,0.4)]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Content Showcase Grid with Animated Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col ${
                  item.aspectRatio === '9:16' && activeTab !== 'shorts'
                    ? 'lg:col-span-1'
                    : ''
                }`}
              >
                <div className="glass-card glass-card-hover rounded-3xl p-4 md:p-5 h-full flex flex-col justify-between group">
                  {/* Visual Container (Live Play or Comparison) */}
                  <div className="mb-4 relative">
                    <ShowcaseCardVisual item={item} />
                  </div>

                  {/* Metadata */}
                  <div className="flex-1 flex flex-col justify-between pt-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#00AAFF]">
                          {item.categoryLabel}
                        </span>
                        {item.clientName && (
                          <span className="text-[11px] font-medium text-white/40">
                            {item.clientName}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-base md:text-lg text-white group-hover:text-[#00AAFF] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
