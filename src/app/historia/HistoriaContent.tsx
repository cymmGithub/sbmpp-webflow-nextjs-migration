"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { timeline, timelineSideNotes, mapImage, mapDescription } from "@/lib/data/buildings";
import { Lightbox } from "@/components/ui/Lightbox";
import styles from "./page.module.css";

interface LightboxState {
  open: boolean;
  index: number;
}

export function HistoriaContent() {
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, index: 0 });
  const [progressHeight, setProgressHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Build the full list of lightbox-eligible images (timeline + map) */
  const allImages = [
    ...timeline.map((entry) => ({
      src: entry.image,
      alt: entry.title,
      width: 800,
      height: 600,
    })),
    {
      src: mapImage.src,
      alt: mapImage.alt,
      width: 1200,
      height: 800,
    },
  ];

  /* Scroll-based progress bar */
  const handleScroll = useCallback(() => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const timelineTop = rect.top + window.scrollY;
    const timelineHeight = rect.height;
    const scrollPos = window.scrollY + window.innerHeight * 0.5;
    const progress = Math.min(
      Math.max((scrollPos - timelineTop) / timelineHeight, 0),
      1
    );
    setProgressHeight(progress * timelineHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Intersection Observer for fade-in */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRefs = entryRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openLightbox = (index: number) => {
    setLightbox({ open: true, index });
  };

  /* Track which years have already been displayed to avoid duplicate labels */
  const renderedYears = new Set<string>();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.heading}>Historia Spółdzielni</h1>
          <p className={styles.subtitle}>
            Poznaj stuletnią historię spółdzielni mieszkaniowej SBMPP w Lublinie,
            od 1927 roku do chwili obecnej.
          </p>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.progressBarTrack} />
          <div
            className={styles.progressBarFill}
            style={{ height: `${progressHeight}px` }}
          />

          {timeline.map((entry, i) => {
            const showYear = !renderedYears.has(entry.year);
            if (showYear) renderedYears.add(entry.year);
            const sideNote = showYear ? timelineSideNotes[entry.year] : undefined;

            return (
              <div
                key={`${entry.year}-${entry.title}`}
                className={styles.timelineEntry}
                ref={(el) => {
                  entryRefs.current[i] = el;
                }}
              >
                <div className={styles.yearLabel}>
                  {showYear ? entry.year : ""}
                </div>
                <div className={styles.dot} />
                <div className={styles.entryContent}>
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    width={448}
                    height={300}
                    className={styles.entryImage}
                    onClick={() => openLightbox(i)}
                  />
                  <h3 className={styles.entryTitle}>{entry.title}</h3>
                  {entry.description && (
                    <p className={styles.entryDescription}>
                      {entry.description}
                    </p>
                  )}
                  {sideNote && (
                    <div className={styles.sideNote}>{sideNote}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.mapSection}>
          <Image
            src={mapImage.src}
            alt={mapImage.alt}
            width={1200}
            height={800}
            className={styles.mapImage}
            onClick={() => openLightbox(timeline.length)}
          />
          <p className={styles.mapDescription}>{mapDescription}</p>
        </div>
      </div>

      {lightbox.open && (
        <Lightbox
          images={allImages}
          initialIndex={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
        />
      )}
    </section>
  );
}
