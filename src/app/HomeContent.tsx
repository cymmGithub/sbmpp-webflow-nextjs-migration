"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { VideoBackground } from "@/components/ui/VideoBackground";
import styles from "./page.module.css";

export function HomeContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll("[data-animate]");
            targets.forEach((el) => el.classList.add(styles.visible));
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className={styles.heroSection} style={{ paddingTop: "var(--nav-height)" }}>
        <VideoBackground
          poster="/videos/Homepage-hero_poster.jpg"
          mp4Src="/videos/Homepage-hero.mp4"
          webmSrc="/videos/Homepage-hero.webm"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroWrapper}>
            <p className={styles.heroLabel}>
              <span className={styles.heroHighlight}>
                Jesteśmy najstarszą spółdzielnią mieszkaniową w Lublinie.
              </span>{" "}
              16 czerwca 1925 r. urzędnicy Urzędu Wojewódzkiego, Starostwa, Izby
              Skarbowej, Powiatowego Urzędu Ziemskiego, Okręgowego Urzędu
              Miejskiego, Dyrekcji Poczty i Telegrafu oraz wielu innych urzędów z
              Lublina powołało do życia Spółdzielcze Stowarzyszenie
              Budowlano-Mieszkaniowe Urzędników Państwowych w Lublinie.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.darkSection} ref={sectionRef}>
        <div className={styles.darkContainer}>
          <div className={styles.collageTitleWrapper} data-animate>
            <div>
              <p className={styles.whiteText}>
                Od pokoleń działamy na rzecz naszych mieszkańców, kontynuując misję
                założycieli (1925-2025).
              </p>
            </div>
          </div>

          <div className={styles.collageWrapper} data-animate>
            <Image
              src="/images/chopina-8.png"
              alt="Chopina 8"
              width={600}
              height={600}
              className={styles.collageSmall}
            />
            <div className={styles.collageCenterWrapper}>
              <Image
                src="/images/narutowicza-71-v2.png"
                alt="Narutowicza 71"
                width={600}
                height={400}
                className={styles.collageCenter}
              />
            </div>
            <Image
              src="/images/solna-5.png"
              alt="Solna 5"
              width={600}
              height={600}
              className={styles.collageSmall}
            />
          </div>

          <div className={styles.descriptionWrapper} data-animate>
            <p className={styles.descriptionText}>
              Chopina 8, Narutowicza 71 i Solna 5 były pierwszymi kamienicami które
              Spółdzielnia wybudowała i oddała do użytku w latach 1925 - 1933.
            </p>
          </div>

          <div className={styles.ctaWrapper} data-animate>
            <Link href="/historia" className={styles.ctaButton}>
              Dowiedz się Więcej
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
