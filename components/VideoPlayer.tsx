'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isDirectVideo =
    src && (src.endsWith('.mp4') || src.includes('.mp4') || src.includes('cloudinary'));

  // Synchronous DOM node callback ref to configure muted properties before browser renders
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (node) {
      node.muted = true;
      node.defaultMuted = true;
      node.playsInline = true;
      node.setAttribute('muted', '');
      node.setAttribute('playsinline', '');
      node.setAttribute('autoplay', '');
      node.setAttribute('loop', '');
      const playPromise = node.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Will be picked up by IntersectionObserver and gesture listeners
        });
      }
    }
  }, []);

  // Multi-tier Autoplay Engine
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isDirectVideo) return;

    // 1. Force muted properties
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    attemptPlay();

    // 2. Play on media event triggers
    const onLoadedData = () => attemptPlay();
    const onCanPlay = () => attemptPlay();

    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('canplay', onCanPlay);

    // 3. Intersection Observer: Play as soon as visible
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              attemptPlay();
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(video);
    }

    // 4. Global window interaction triggers: any scroll/touch/pointer starts unblocked video playback
    const onUserInteraction = () => {
      if (video.paused) {
        attemptPlay();
      }
    };

    window.addEventListener('scroll', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });
    window.addEventListener('pointerdown', onUserInteraction, { passive: true });
    window.addEventListener('click', onUserInteraction, { passive: true });

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('canplay', onCanPlay);
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('pointerdown', onUserInteraction);
      window.removeEventListener('click', onUserInteraction);
    };
  }, [src, isDirectVideo]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Helper for YouTube embeds if used
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    if (!videoId) return url;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 group select-none ${
        aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
      } ${className}`}
    >
      {/* Native HTML5 Video - Direct live autoplay, zero cover image, zero tap-to-play blocking */}
      {isDirectVideo ? (
        <video
          ref={setVideoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
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
      ) : (
        <div className="w-full h-full bg-[#141414] flex items-center justify-center text-white/30 text-xs font-mono">
          VIDEO READY
        </div>
      )}

      {/* Floating Category/Client Badge */}
      {label && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-anton text-white tracking-wider uppercase pointer-events-none">
          {label}
        </div>
      )}

      {/* Floating Audio & Fullscreen Controls - Appears cleanly on hover */}
      {isDirectVideo && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
            className="p-1.5 rounded-lg bg-black/80 hover:bg-[#00AAFF] text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-md"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Fullscreen view"
            className="p-1.5 rounded-lg bg-black/80 hover:bg-[#00AAFF] text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-md"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Live Indicator Pulse */}
      <div className="pointer-events-none absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold uppercase text-white/90">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00AAFF] animate-pulse" />
        <span>Live</span>
      </div>
    </div>
  );
}
