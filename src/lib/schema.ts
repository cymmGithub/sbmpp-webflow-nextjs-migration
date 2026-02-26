export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spółdzielnia Budowlano-Mieszkaniowa Pracowników Państwowych w Lublinie",
    alternateName: "SBMPP",
    url: "https://sbmpp.lublin.pl",
    logo: "https://sbmpp.lublin.pl/images/sbmpp-logo-256.png",
    foundingDate: "1925-06-16",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Graniczna 23",
      addressLocality: "Lublin",
      postalCode: "20-010",
      addressCountry: "PL",
    },
    telephone: "+48815328443",
    email: "sekretariat@sbmpp.lublin.pl",
    sameAs: [],
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt - SBMPP",
    url: "https://sbmpp.lublin.pl/kontakt",
    mainEntity: {
      "@type": "Organization",
      name: "SBMPP",
      telephone: "+48815328443",
      email: "sekretariat@sbmpp.lublin.pl",
    },
  };
}
