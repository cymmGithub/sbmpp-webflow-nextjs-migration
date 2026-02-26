import type { Metadata } from "next";
import { PrzetargiContent } from "./PrzetargiContent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Przetargi",
  description:
    "Aktualne postępowania przetargowe Spółdzielni Budowlano-Mieszkaniowej Pracowników Państwowych w Lublinie. Pobierz dokumentację przetargową i złóż ofertę.",
};

export default function PrzetargiPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.heading}>Postępowania przetargowe</h1>
          <p className={styles.subtitle}>
            Poniżej znajdują się aktualne postępowania przetargowe prowadzone
            przez Spółdzielnię Budowlano-Mieszkaniową Pracowników Państwowych
            w Lublinie. Zapoznaj się z dokumentacją i złóż swoją ofertę.
          </p>
        </div>
        <PrzetargiContent />
      </div>
    </section>
  );
}
