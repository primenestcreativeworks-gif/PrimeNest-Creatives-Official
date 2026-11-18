'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VideoPlayer } from '@/components/VideoPlayer';
import { showcaseItems, ShowcaseItem } from '@/data/videos';
import { AnimatePresence, motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';

type FilterCategory = 'shorts' | 'long-form' | 'podcasts' | 'thumbnails' | 'ai';

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: 'shorts', label: 'Shorts & Reels (9:16)' },
  { id: 'long-form', label: 'Long-Form (16:9)' },
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
      className="relative w-full aspect-video rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/10"
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
      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-[#00AAFF] border border-[#00AAFF]/30 pointer-events-none">
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
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-white/70 border border-white/20 pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Divider Line with handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,170,255,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#00AAFF] text-[#0A0A0A] flex items-center justify-center shadow-lg border-2 border-white pointer-events-none">
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

/**
 * Pinned to Wall Thumbnail Card with realistic 3D metallic nail
 */
function WallPinnedThumbnailCard({
  item,
  index,
}: {
  item: ShowcaseItem;
  index: number;
}) {
  const [viewMode, setViewMode] = useState<'slider' | 'image'>(
    item.beforeAfter ? 'slider' : 'image'
  );

  // Subtle natural angle for each pinned item on the gallery wall
  const rotations = ['-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'];
  const rotationClass = rotations[index % rotations.length];

  return (
    <div
      className={`relative pt-4 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02] ${rotationClass}`}
    >
      {/* 3D Metallic Nail Pinned to Wall */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
        {/* Nail Head: Polished steel stud */}
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-700 border border-slate-300/80 shadow-[0_3px_8px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.8)]" />
        {/* Shadow of nail head on wall */}
        <div className="w-1 h-2 bg-gradient-to-b from-slate-700/80 to-transparent -mt-0.5" />
      </div>

      {/* Frame / Photo Canvas hanging on wall */}
      <div className="relative bg-[#141416] border-2 border-white/15 rounded-2xl p-3 shadow-[0_22px_45px_rgba(0,0,0,0.95),0_6px_15px_rgba(0,0,0,0.7)] group">
        {/* Switch for Before/After if available */}
        {item.beforeAfter && (
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/10 text-[9px] font-bold">
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#00AAFF] text-[#0A0A0A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Compare
            </button>
            <button
              type="button"
              onClick={() => setViewMode('image')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                viewMode === 'image'
                  ? 'bg-[#00AAFF] text-[#0A0A0A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Full
            </button>
          </div>
        )}

        {/* Visual Content */}
        <div className="rounded-xl overflow-hidden bg-black/80">
          {viewMode === 'slider' && item.beforeAfter ? (
            <BeforeAfterSlider
              beforeImage={item.beforeAfter.beforeImage}
              afterImage={item.beforeAfter.afterImage}
              beforeLabel={item.beforeAfter.beforeLabel}
              afterLabel={item.beforeAfter.afterLabel}
            />
          ) : (
            <div className="relative aspect-video overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Thumbnail Details */}
        <div className="pt-3 px-1">
          <div className="flex items-center justify-between text-[10px] text-white/50 mb-1">
            <span className="font-semibold text-[#00AAFF] uppercase tracking-wider">
              {item.categoryLabel}
            </span>
            <span>{item.clientName}</span>
          </div>
          <h4 className="font-bold text-sm text-white group-hover:text-[#00AAFF] transition-colors leading-snug">
            {item.title}
          </h4>
          {item.description && (
            <p className="text-white/50 text-xs mt-1.5 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function WorkShowcase() {
  // Default active tab is 'shorts' per user request
  const [activeTab, setActiveTab] = useState<FilterCategory>('shorts');

  const filteredItems = showcaseItems.filter(
    (item) => item.category === activeTab
  );

  return (
    <section
      id="work"
      className="w-full bg-[#0A0A0A] px-4 md:px-8 lg:px-12 py-20 md:py-28 relative overflow-hidden grain-overlay border-t border-white/5"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#00AAFF]/7 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00AAFF] block mb-3">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
                Content That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                  Converts & Retains.
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                Explore our post-production work across viral shorts, high-retention long-form, podcasts, and packaging. All videos are live and running.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-[#00AAFF] animate-pulse" />
              <span>Autoplaying live · Sound on hover</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Navigation Tabs (All Work removed, Shorts default) */}
        <ScrollReveal className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 custom-scrollbar select-none">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
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

        {/* Content Showcase Grid */}
        <motion.div
          layout
          className={`grid gap-6 md:gap-8 ${
            activeTab === 'shorts'
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'thumbnails' ? (
                  /* Pinned to wall with metallic nail design */
                  <WallPinnedThumbnailCard item={item} index={index} />
                ) : (
                  /* Live Playing Video Card */
                  <div className="glass-card glass-card-hover rounded-2xl p-3 md:p-4 h-full flex flex-col justify-between group">
                    {/* Live Video - No cover image, always playing */}
                    <div className="mb-3 relative">
                      <VideoPlayer
                        src={item.videoUrl}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        aspectRatio={item.aspectRatio}
                      />
                    </div>

                    {/* Metadata */}
                    <div className="pt-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-[#00AAFF]">
                          {item.categoryLabel}
                        </span>
                        {item.clientName && (
                          <span className="text-[10px] font-medium text-white/40 truncate">
                            {item.clientName}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-sm md:text-base text-white group-hover:text-[#00AAFF] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-white/50 text-xs mt-1.5 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
