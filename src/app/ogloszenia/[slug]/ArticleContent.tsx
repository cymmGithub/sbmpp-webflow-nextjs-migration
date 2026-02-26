"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Announcement, ContentBlock } from "@/lib/data/announcements";
import { Lightbox } from "@/components/ui/Lightbox";
import styles from "./page.module.css";

interface ArticleContentProps {
  article: Announcement;
  relatedArticles: Announcement[];
}

interface LightboxState {
  open: boolean;
  index: number;
}

export function ArticleContent({ article, relatedArticles }: ArticleContentProps) {
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, index: 0 });

  /* Collect all images from content blocks for lightbox navigation */
  const contentImages = article.content
    .filter((block): block is ContentBlock & { src: string; alt: string } => block.type === "image" && !!block.src)
    .map((block) => ({
      src: block.src,
      alt: block.alt || article.title,
      width: 1000,
      height: 700,
    }));

  const openLightbox = (imageIndex: number) => {
    setLightbox({ open: true, index: imageIndex });
  };

  /* Track image index across the content blocks */
  let imageCounter = 0;

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Banner */}
        <div className={styles.bannerWrapper}>
          <Image
            src={article.bannerImage}
            alt={article.title}
            fill
            className={styles.bannerImage}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>

        {/* Article Header */}
        <div className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.articleMeta}>
            <Image
              src="/images/sbmpp-logo-256.png"
              alt="SBMPP"
              width={36}
              height={36}
              className={styles.authorLogo}
            />
            <div className={styles.metaText}>
              <span className={styles.metaAuthor}>{article.author}</span>
              <span className={styles.metaDate}>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className={styles.content}>
          {article.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h4 key={i} className={styles.contentHeading}>
                  {block.text}
                </h4>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p key={i} className={styles.contentParagraph}>
                  {block.text}
                </p>
              );
            }

            if (block.type === "image" && block.src) {
              const currentImageIndex = imageCounter;
              imageCounter++;
              return (
                <Image
                  key={i}
                  src={block.src}
                  alt={block.alt || article.title}
                  width={768}
                  height={500}
                  className={styles.contentImage}
                  onClick={() => openLightbox(currentImageIndex)}
                />
              );
            }

            return null;
          })}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className={styles.relatedSection}>
            <h3 className={styles.relatedHeading}>Pozostałe ogłoszenia</h3>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/ogloszenia/${related.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImageWrapper}>
                    <Image
                      src={related.bannerImage}
                      alt={related.title}
                      fill
                      className={styles.relatedImage}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 400px"
                    />
                  </div>
                  <div className={styles.relatedBody}>
                    <h4 className={styles.relatedTitle}>{related.title}</h4>
                    <span className={styles.relatedDate}>{related.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightbox.open && contentImages.length > 0 && (
        <Lightbox
          images={contentImages}
          initialIndex={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
        />
      )}
    </section>
  );
}
