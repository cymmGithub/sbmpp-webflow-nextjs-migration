"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  const current = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Zamknij">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.5 12l9-9a1.77 1.77 0 00-2.5-2.5l-9 9-9-9A1.77 1.77 0 00.5 3l9 9-9 9a1.77 1.77 0 002.5 2.5l9-9 9 9a1.77 1.77 0 002.5-2.5l-9-9z"
              fill="currentColor"
            />
          </svg>
        </button>
        <Image
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          className={styles.image}
        />
        {images.length > 1 && (
          <>
            <button className={styles.prev} onClick={handlePrev} aria-label="Poprzednie zdjęcie">
              ‹
            </button>
            <button className={styles.next} onClick={handleNext} aria-label="Następne zdjęcie">
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
