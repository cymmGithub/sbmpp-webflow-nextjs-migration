"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";

interface ModalProps {
  imageSrc: string;
  alt: string;
  onClose: () => void;
}

export function Modal({ imageSrc, alt, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageSrc}
          alt={alt}
          width={590}
          height={800}
          className={styles.image}
        />
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Zamknij podgląd"
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M14.5,12l9-9c0.7-0.7,0.7-1.8,0-2.5c-0.7-0.7-1.8-0.7-2.5,0l-9,9l-9-9c-0.7-0.7-1.8-0.7-2.5,0 c-0.7,0.7-0.7,1.8,0,2.5l9,9l-9,9c-0.7,0.7-0.7,1.8,0,2.5c0.7,0.7,1.8,0.7,2.5,0l9-9l9,9c0.7,0.7,1.8,0.7,2.5,0 c0.7-0.7,0.7-1.8,0-2.5L14.5,12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
