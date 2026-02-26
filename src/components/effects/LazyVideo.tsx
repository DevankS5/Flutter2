"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export function LazyVideo({ src, className, poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting && !loaded) {
            videoEl.src = src;
            videoEl.load();
            try {
              await videoEl.play();
              setLoaded(true);
            } catch {
              // Autoplay blocked
            }
          } else if (!entry.isIntersecting && loaded) {
            videoEl.pause();
          } else if (entry.isIntersecting && loaded) {
            try {
              await videoEl.play();
            } catch {
              // ignore
            }
          }
        });
      },
      { rootMargin: "80px", threshold: 0.15 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [src, loaded]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
    />
  );
}
