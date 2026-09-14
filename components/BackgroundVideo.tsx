'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface BackgroundVideoProps {
  src: string;
  className?: string;
  title?: string;
}

export function BackgroundVideo({ src, className = '', title }: BackgroundVideoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-full h-full bg-black/10 ${className}`} />;
  }

  // Extract video ID from embed URL if needed
  let url = src;
  if (src.includes('/embed/')) {
    const videoId = src.split('/embed/')[1].split('?')[0];
    url = `https://www.youtube.com/watch?v=${videoId}`;
  }

  return (
    <div className={`w-full h-full relative pointer-events-none ${className}`}>
      <ReactPlayer
        url={url}
        playing={true}
        loop={true}
        muted={true}
        playsinline={true}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              showinfo: 0,
              rel: 0,
              modestbranding: 1,
              iv_load_policy: 3,
              disablekb: 1,
            },
          },
        }}
      />
    </div>
  );
}
