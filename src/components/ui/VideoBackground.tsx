"use client";

import { useRef, useEffect } from "react";
import styles from "./VideoBackground.module.css";

interface VideoBackgroundProps {
  poster: string;
  mp4Src: string;
  webmSrc: string;
}

export function VideoBackground({ poster, mp4Src, webmSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      // Autoplay blocked by browser - poster will show
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        poster={poster}
        className={styles.video}
      >
        <source src={mp4Src} type="video/mp4" />
        <source src={webmSrc} type="video/webm" />
      </video>
    </div>
  );
}
