import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "./NavbarClient";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/przetargi", label: "Przetargi" },
  { href: "/dokumenty", label: "Dokumenty" },
  { href: "/ogloszenia", label: "Ogłoszenia" },
  { href: "/kontakt", label: "Kontakt" },
];

const dropdownLinks = [
  { href: "/historia", label: "Historia Spółdzielni" },
  { href: "/schemat-organizacyjny", label: "Schemat organizacyjny" },
];

export function Navbar() {
  return (
    <nav className={styles.navbar} role="banner">
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/sbmpp-logo.svg"
            alt="SBMPP Logo"
            width={80}
            height={64}
            priority
            className={styles.logoImage}
          />
        </Link>
        <Link href="/ogloszenia/jubileusz" className={styles.badgeLink}>
          <Image
            src="/images/jubileusz.svg"
            alt="100-lecie Jubileusz"
            width={150}
            height={150}
            priority
            className={styles.badge}
          />
        </Link>
        <NavbarClient navLinks={navLinks} dropdownLinks={dropdownLinks} />
      </div>
    </nav>
  );
}
