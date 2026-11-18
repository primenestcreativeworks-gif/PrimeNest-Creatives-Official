'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  thumbnail?: string;
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
}: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isDirectVideo = src && (src.endsWith('.mp4') || src.includes('.mp4') || src.includes('cloudinary'));

  // Extract YouTube ID if it is an embed URL
  const getYouTubeEmbedUrl = (url?: string) => {
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

    // Autoplay live muted, loop infinitely
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&playsinline=1`;
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: ensure muted and retry
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 group select-none ${
        aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
      } ${className}`}
    >
      {/* Live Video Playing Automatically without cover image */}
      {isDirectVideo ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          controls={false}
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : src ? (
        <iframe
          src={getYouTubeEmbedUrl(src)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0 absolute inset-0 pointer-events-auto"
        />
      ) : thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-[#121212] flex items-center justify-center text-white/30 text-xs">
          Video Preview
        </div>
      )}

      {/* Subtle overlay gradient at the bottom for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Floating Audio & Fullscreen Controls for direct videos */}
      {isDirectVideo && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className="p-1.5 rounded-lg bg-black/70 hover:bg-[#00AAFF] text-white hover:text-[#0A0A0A] backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
            className="p-1.5 rounded-lg bg-black/70 hover:bg-[#00AAFF] text-white hover:text-[#0A0A0A] backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Live Indicator Badge */}
      <div className="pointer-events-none absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white/90">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00AAFF] animate-pulse" />
        <span>Live</span>
      </div>
    </div>
  );
}
