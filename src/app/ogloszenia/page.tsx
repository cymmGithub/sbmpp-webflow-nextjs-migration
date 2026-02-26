import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { announcements } from "@/lib/data/announcements";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ogłoszenia",
  description:
    "Aktualności i ogłoszenia Spółdzielni Budowlano-Mieszkaniowej Pracowników Państwowych w Lublinie. Bądź na bieżąco z wydarzeniami SBMPP.",
};

export default function OgloszeniaPage() {
  const featured = announcements[0];
  const others = announcements.slice(1);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Ogłoszenia</h2>
          <p className={styles.subtitle}>
            Najnowsze informacje z życia Spółdzielni. Sprawdzaj komunikaty
            o awariach, pracach konserwacyjnych i sprawach administracyjnych.
          </p>
        </div>

        {/* Featured article */}
        <Link href={`/ogloszenia/${featured.slug}`} className={styles.featured}>
          <div className={styles.featuredImageWrapper}>
            <Image
              src={featured.bannerImage}
              alt={featured.title}
              fill
              className={styles.featuredImage}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
          <div className={styles.featuredOverlay}>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredSubtitle}>{featured.description}</p>
            <div className={styles.authorInfo}>
              <Image
                src="/images/sbmpp-logo-256.png"
                alt="SBMPP"
                width={36}
                height={36}
                className={styles.authorLogo}
              />
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>{featured.author}</span>
                <span className={styles.authorDate}>{featured.date}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Other articles grid */}
        {others.length > 0 && (
          <div className={styles.grid}>
            {others.map((article) => (
              <Link
                key={article.slug}
                href={`/ogloszenia/${article.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={article.bannerImage}
                    alt={article.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>
                    {article.title}
                    <svg
                      className={styles.cardArrow}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                  <div className={styles.cardAuthor}>
                    <Image
                      src="/images/sbmpp-logo-256.png"
                      alt="SBMPP"
                      width={28}
                      height={28}
                      className={styles.authorLogo}
                    />
                    <div>
                      <div className={styles.cardAuthorName}>
                        {article.author}
                      </div>
                      <div className={styles.cardAuthorDate}>
                        {article.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
