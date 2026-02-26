import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Strefa Mieszkańca",
  description:
    "Strefa Mieszkańca Spółdzielni Budowlano-Mieszkaniowej Pracowników Państwowych w Lublinie. Zaloguj się, aby uzyskać dostęp do informacji o swoim lokalu.",
};

export default function StrefaMieszkancaPage() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/strefa-mieszkanca.jpg"
            alt="Budynek mieszkalny SBMPP"
            width={640}
            height={480}
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.infoCard}>
          <h1 className={styles.infoHeading}>Strefa Mieszkańca</h1>
          <p className={styles.infoText}>
            Dla osób, które wyraziły chęć dostępu do Strefy Mieszkańca
            i zostały zweryfikowane, na adres mailowy przesłaliśmy dane
            do logowania.
          </p>
          <a
            href="https://www.sb-mpp.lublin.pl/login.php"
            className={styles.loginButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Przejdź do logowania
          </a>

          <div className={styles.contactInfo}>
            <span className={styles.contactLabel}>
              Osoby zainteresowane uzyskaniem dostępu prosimy o kontakt z biurem Spółdzielni:
            </span>
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <a href="tel:+48815328443" className={styles.contactLink}>
                81 532 84 43
              </a>
            </div>
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <a href="mailto:sekretariat@sbmpp.lublin.pl" className={styles.contactLink}>
                sekretariat@sbmpp.lublin.pl
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
