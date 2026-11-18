'use client';

import React from 'react';
import { VideoPlayer } from './VideoPlayer';

interface BackgroundVideoProps {
  src: string;
  className?: string;
  title?: string;
  thumbnail?: string;
}

export function BackgroundVideo({
  src,
  className = '',
  title = 'Video preview',
  thumbnail = '/Long Form,longform.jpg',
}: BackgroundVideoProps) {
  return (
    <VideoPlayer
      src={src}
      thumbnail={thumbnail}
      title={title}
      className={className}
      autoplayPreview={true}
    />
  );
}
