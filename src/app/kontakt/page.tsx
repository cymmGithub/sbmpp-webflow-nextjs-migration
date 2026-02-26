import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { officeHours, contactNumbers, emergencyNumbers, mapCoordinates } from "@/lib/data/contact";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się ze spółdzielnią mieszkaniową SBMPP w Lublinie. Godziny pracy biura, numery telefonów, adresy e-mail oraz numery alarmowe dotyczące wody i prądu.",
};

export default function KontaktPage() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.sideContainer}>
          <h1 className={styles.heading}>Kontakt</h1>
          <p className={styles.paragraph}>
            Skontaktuj się z nami wypełniając formularz lub zadzwoń bezprośrednio,
            godziny pracy biura:
          </p>
          {officeHours.map((h) => (
            <div key={h.day} className={styles.hours}>
              <strong>{h.day}</strong>: {h.hours}
            </div>
          ))}

          <div className={styles.contactList}>
            {contactNumbers.map((c) => (
              <div key={c.value} className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  {c.icon === "email" ? (
                    <EmailIcon />
                  ) : c.icon === "phone" ? (
                    <PhoneIcon />
                  ) : (
                    <strong>{c.label}</strong>
                  )}
                </div>
                {c.href ? (
                  <a href={c.href} className={styles.contactLink}>
                    {c.value}
                  </a>
                ) : (
                  <span className={styles.contactLink}>{c.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <strong>{emergencyNumbers.title}</strong>
            </div>
            {emergencyNumbers.sections.map((section, i) => (
              <div key={i}>
                {section.title && (
                  <div className={styles.sectionTitle}>
                    <strong>{section.title}</strong>
                  </div>
                )}
                {section.hours?.map((h) => (
                  <div key={h.day} className={styles.hours}>
                    <strong>{h.day}</strong>: {h.hours}
                  </div>
                ))}
                {section.phones.map((p) => (
                  <div key={p.value} className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <PhoneIcon />
                    </div>
                    {p.href ? (
                      <a href={p.href} className={styles.contactLink}>
                        {p.value}
                      </a>
                    ) : (
                      <span className={styles.contactLink}>{p.value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formContainer}>
          <ContactForm />
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${mapCoordinates.lng}!3d${mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE0JzMzLjEiTiAyMsKwMzMnMzMuNiJF!5e1!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja SBMPP"
          />
        </div>
      </div>
    </section>
  );
}
