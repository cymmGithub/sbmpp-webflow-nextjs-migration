import type { Metadata } from "next";
import { DokumentyContent } from "./DokumentyContent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dokumenty",
  description:
    "Dokumenty, regulaminy i statuty Spółdzielni Budowlano-Mieszkaniowej Pracowników Państwowych w Lublinie. Pobierz potrzebne formularze i regulaminy.",
};

export default function DokumentyPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.heading}>Dokumenty</h1>
          <p className={styles.subtitle}>
            Poniżej znajdziesz regulaminy, statuty oraz inne dokumenty
            Spółdzielni dostępne do pobrania i podglądu.
          </p>
        </div>
        <DokumentyContent />
      </div>
    </section>
  );
}
