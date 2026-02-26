"use server";

export async function submitContactForm(formData: FormData) {
  const data = {
    imie: formData.get("imie") as string,
    nazwisko: formData.get("nazwisko") as string,
    email: formData.get("email") as string,
    temat: formData.get("temat") as string,
    wiadomosc: formData.get("wiadomosc") as string,
  };

  // Validate required fields
  if (!data.imie || !data.email || !data.temat || !data.wiadomosc) {
    return { success: false, error: "Wypełnij wszystkie wymagane pola." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Podaj poprawny adres email." };
  }

  // Log to console (Turnstile and email integration skipped for now)
  console.log("Contact form submission:", data);

  return { success: true };
}
