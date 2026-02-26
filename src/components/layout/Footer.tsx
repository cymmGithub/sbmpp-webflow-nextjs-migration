import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.email}>zarzad@sbmpp.lublin.pl</div>
          <div className={styles.copyright}>
            <p className={styles.text}>
              <a
                href="https://www.linkedin.com/in/przemyslawswiercz/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.creditLink}
              >
                Strona została wykonana z okazji Jubileuszu 100-lecia
                Spółdzielni.{" "}
              </a>
              © <strong>SBMPP.</strong>
            </p>
          </div>
          <div className={styles.copyright}>
            <p className={styles.text}>Lublin 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
