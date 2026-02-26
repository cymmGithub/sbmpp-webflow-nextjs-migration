"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { documents } from "@/lib/data/documents";
import type { Document } from "@/lib/data/documents";
import styles from "./page.module.css";

export function DokumentyContent() {
  const [search, setSearch] = useState("");
  const [modalDoc, setModalDoc] = useState<Document | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return documents;
    const query = search.toLowerCase();
    return documents.filter(
      (doc) =>
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <>
      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Szukaj dokumentu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Szukaj dokumentu"
        />
      </div>

      <div className={styles.documentsGrid}>
        {filtered.length === 0 ? (
          <div className={styles.noResults}>
            <p className={styles.noResultsText}>
              Nie znaleziono dokumentów pasujących do wyszukiwania.
            </p>
          </div>
        ) : (
          filtered.map((doc) => (
            <div key={doc.id} className={styles.documentCard}>
              <Image
                src={doc.previewImage}
                alt={`Podgląd: ${doc.title}`}
                width={280}
                height={380}
                className={styles.documentPreview}
              />
              <h2 className={styles.documentTitle}>{doc.title}</h2>
              <p className={styles.documentDescription}>{doc.description}</p>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.previewButton}
                  onClick={() => setModalDoc(doc)}
                  type="button"
                >
                  Podgląd
                </button>
                <a
                  className={styles.downloadButton}
                  href={doc.downloadUrl}
                  download
                >
                  Pobierz
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {modalDoc && (
        <Modal
          imageSrc={modalDoc.previewImage}
          alt={`Podgląd: ${modalDoc.title}`}
          onClose={() => setModalDoc(null)}
        />
      )}
    </>
  );
}
