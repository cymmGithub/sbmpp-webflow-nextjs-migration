import type { MetadataRoute } from "next";

const BASE_URL = "https://sbmpp.lublin.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/historia`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/przetargi`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/dokumenty`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/ogloszenia`, lastModified: new Date(), priority: 0.7 },
    {
      url: `${BASE_URL}/ogloszenia/jubileusz`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ogloszenia/nowy-rok-2026`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/schemat-organizacyjny`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/strefa-mieszkanca`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
