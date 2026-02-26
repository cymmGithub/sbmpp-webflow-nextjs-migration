"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/kontakt/actions";
import { Toast } from "./Toast";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setToast({
          message:
            "Wiadomość została wysłana pomyślnie! Postaramy się odpowiedzieć na Twoje zgłoszenie w najbliższym czasie.",
          type: "success",
        });
        const form = document.getElementById("contact-form") as HTMLFormElement;
        form?.reset();
      } else {
        setToast({
          message:
            "Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Prosimy spróbować ponownie za chwilę.",
          type: "error",
        });
      }
    } catch {
      setToast({
        message:
          "Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Prosimy spróbować ponownie za chwilę.",
        type: "error",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form id="contact-form" action={handleSubmit} className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="imie" className={styles.label}>
            Imię*
          </label>
          <input
            className={styles.input}
            maxLength={256}
            name="imie"
            placeholder="Jan"
            type="text"
            id="imie"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="nazwisko" className={styles.label}>
            Nazwisko
          </label>
          <input
            className={styles.input}
            maxLength={256}
            name="nazwisko"
            placeholder="Kowalski"
            type="text"
            id="nazwisko"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Adres Mailowy*
          </label>
          <input
            className={styles.input}
            maxLength={256}
            name="email"
            placeholder="jankowalski@gmail.com"
            type="email"
            id="email"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="temat" className={styles.label}>
            Temat *
          </label>
          <input
            className={styles.input}
            maxLength={256}
            name="temat"
            placeholder="Temat"
            type="text"
            id="temat"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="wiadomosc" className={styles.label}>
            Wiadomość *
          </label>
          <textarea
            id="wiadomosc"
            name="wiadomosc"
            maxLength={5000}
            placeholder="Kontaktuję się w sprawie..."
            required
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>
        <div className={styles.field}>
          <button
            type="submit"
            className={styles.submit}
            disabled={pending}
          >
            {pending ? "Wysyłam..." : "Wyślij Wiadomość"}
          </button>
        </div>
      </form>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
