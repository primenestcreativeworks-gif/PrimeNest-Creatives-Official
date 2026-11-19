'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Volume2, VolumeX, Maximize2, ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  thumbnail?: string;
  title: string;
  aspectRatio?: '16:9' | '9:16';
  className?: string;
  label?: string;
}

export function VideoPlayer({
  src,
  title,
  aspectRatio = '16:9',
  className = '',
  label,
}: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract YouTube ID reliably
  const youtubeId = useMemo(() => {
    if (!src) return '';
    if (src.includes('/embed/')) return src.split('/embed/')[1].split(/[?&]/)[0];
    if (src.includes('v=')) return src.split('v=')[1].split('&')[0];
    if (src.includes('youtu.be/')) return src.split('youtu.be/')[1].split(/[?&]/)[0];
    return '';
  }, [src]);

  const isDirectMp4 = src && (src.endsWith('.mp4') || src.includes('.mp4')) && !src.includes('cloudinary');

  // Optimized YouTube Embed URL for guaranteed muted continuous autoplay
  const embedUrl = useMemo(() => {
    if (!youtubeId) return src || '';
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`;
  }, [youtubeId, src]);

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current && containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
  };

  const openOnYouTube = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 group select-none shadow-lg ${
        aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
      } ${className}`}
    >
      {/* 1. YouTube Live Embed (Guaranteed smooth stream, no 401 error, zero bandwidth blockage) */}
      {youtubeId ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="w-full h-full border-0 absolute inset-0 pointer-events-auto"
        />
      ) : isDirectMp4 ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-[#111111] flex items-center justify-center text-white/30 text-xs font-montserrat uppercase tracking-wider">
          LIVE PREVIEW
        </div>
      )}

      {/* Floating Category/Client Badge in Montserrat */}
      {label && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-montserrat font-bold text-white tracking-wider uppercase pointer-events-none shadow-md">
          {label}
        </div>
      )}

      {/* Live Indicator Pulse */}
      <div className="pointer-events-none absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-montserrat font-bold uppercase tracking-wider text-white shadow-md">
        <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse shadow-[0_0_8px_#00F5A0]" />
        <span>Live</span>
      </div>

      {/* Hover Control Overlay */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {youtubeId && (
          <button
            type="button"
            onClick={openOnYouTube}
            aria-label="Open on YouTube"
            className="p-1.5 rounded-lg bg-black/80 hover:bg-[#00AAFF] text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-md"
            title="Watch in high resolution"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        )}
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Fullscreen view"
          className="p-1.5 rounded-lg bg-black/80 hover:bg-[#00AAFF] text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-md"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
