import type { Metadata } from "next";
import { Merriweather, Jost, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sbmpp.lublin.pl"),
  title: {
    default: "SBMPP | Strona główna",
    template: "SBMPP | %s",
  },
  description:
    "Od 1925 roku działamy na rzecz mieszkańców Lublina. Poznaj historię najstarszej spółdzielni mieszkaniowej w mieście - 100 lat tradycji i zaangażowania.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "SBMPP",
    images: [{ url: "/images/2025-12-07_10-26.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${merriweather.variable} ${jost.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
