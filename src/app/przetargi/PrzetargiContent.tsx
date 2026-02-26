"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { tenders } from "@/lib/data/tenders";
import type { TenderAttachment } from "@/lib/data/tenders";
import styles from "./page.module.css";

export function PrzetargiContent() {
  const [modalImage, setModalImage] = useState<TenderAttachment | null>(null);

  if (tenders.length === 0) {
    return (
      <div className={styles.noTenders}>
        <svg
          className={styles.noTendersIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9.75m3 0h.008v.008H12.75V15Zm0 3H9.75m3 0h.008v.008H12.75V18ZM5.25 6.375V3.75a1.125 1.125 0 0 1 1.125-1.125h3.026a3.375 3.375 0 0 1 2.386.989l4.124 4.123a3.375 3.375 0 0 1 .989 2.386v8.127A1.125 1.125 0 0 1 15.775 19.5H6.375A1.125 1.125 0 0 1 5.25 18.375V6.375Z"
          />
        </svg>
        <p className={styles.noTendersText}>
          Aktualnie nie ma otwartych postępowań przetargowych.
        </p>
      </div>
    );
  }

  return (
    <>
      {tenders.map((tender) => (
        <div key={tender.id} className={styles.tenderCard}>
          <div className={styles.tenderBadge}>
            Przetarg otwarty do: {tender.deadline}
          </div>
          <h3 className={styles.tenderTitle}>{tender.title}</h3>
          <ul className={styles.tenderDescription}>
            {tender.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {tender.attachments.length > 0 && (
            <div className={styles.attachmentsCard}>
              <h3 className={styles.attachmentsHeading}>Załączniki:</h3>
              <div className={styles.attachmentsGrid}>
                {tender.attachments.map((attachment, index) => (
                  <div key={index} className={styles.attachmentCard}>
                    <Image
                      src={attachment.previewImage}
                      alt={`Podgląd: ${attachment.title}`}
                      width={280}
                      height={380}
                      className={styles.attachmentPreview}
                    />
                    <p className={styles.attachmentTitle}>{attachment.title}</p>
                    <div className={styles.buttonGroup}>
                      <button
                        className={styles.previewButton}
                        onClick={() => setModalImage(attachment)}
                        type="button"
                      >
                        Podgląd
                      </button>
                      <a
                        className={styles.downloadButton}
                        href={attachment.downloadUrl}
                        download
                      >
                        Pobierz
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {modalImage && (
        <Modal
          imageSrc={modalImage.previewImage}
          alt={`Podgląd: ${modalImage.title}`}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}
