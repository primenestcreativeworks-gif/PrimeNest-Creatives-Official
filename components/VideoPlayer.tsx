'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, VolumeX, X } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  thumbnail: string;
  title: string;
  aspectRatio?: '16:9' | '9:16';
  className?: string;
  autoplayPreview?: boolean;
}

export function VideoPlayer({
  src,
  thumbnail,
  title,
  aspectRatio = '16:9',
  className = '',
  autoplayPreview = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer for mobile auto-preview and lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Format YouTube embed URL safely with full live playback support
  const getEmbedUrl = (url?: string, autoplay = true, muted = false) => {
    if (!url) return '';
    let videoId = '';

    if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }

    if (!videoId) return url;

    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      controls: isPlaying ? '1' : '0',
      playsinline: '1',
      rel: '0',
      modestbranding: '1',
      enablejsapi: '1',
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const showPreview =
    autoplayPreview &&
    !isPlaying &&
    (isHovered || (isInView && typeof window !== 'undefined' && window.innerWidth < 768));

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 group select-none ${
        aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Live Interactive Playback Mode */}
      {isPlaying && src ? (
        <div className="absolute inset-0 z-30 bg-black">
          <iframe
            src={getEmbedUrl(src, true, false)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 absolute inset-0"
          />
          {/* Close / Return button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(false);
            }}
            aria-label="Close video player"
            className="absolute top-3 right-3 z-40 p-2 rounded-full bg-black/80 hover:bg-[#00AAFF] text-white hover:text-[#0A0A0A] transition-colors border border-white/20 shadow-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : showPreview && src ? (
        /* 2. Muted Preview Loop on Hover/Scroll */
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden scale-[1.02]">
          <iframe
            src={getEmbedUrl(src, true, true)}
            title={`${title} Preview`}
            className="w-full h-full border-0 pointer-events-none opacity-90 transition-opacity duration-300"
          />
          {/* Subtle preview indicator */}
          <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-[#00AAFF] border border-[#00AAFF]/30 flex items-center gap-1.5 pointer-events-none">
            <VolumeX className="w-3 h-3" />
            <span>Hover Preview</span>
          </div>
        </div>
      ) : (
        /* 3. High Performance Poster Image */
        <div className="absolute inset-0 z-0">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Play Button Overlay (Click anywhere to trigger Live Play) */}
      {!isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${title} live`}
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer transition-colors"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0A0A0A]/85 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:border-[#00AAFF] group-hover:bg-[#00AAFF]/20 group-hover:shadow-[0_0_35px_rgba(0,170,255,0.5)]">
            <Play className="w-6 h-6 ml-0.5 text-white transition-colors group-hover:text-[#00AAFF]" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  );
}
