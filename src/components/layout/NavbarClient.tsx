"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarClientProps {
  navLinks: NavLink[];
  dropdownLinks: NavLink[];
}

export function NavbarClient({ navLinks, dropdownLinks }: NavbarClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isDropdownActive = dropdownLinks.some((l) => pathname === l.href);

  return (
    <>
      <div className={`${styles.menu} ${mobileOpen ? styles.menuOpen : ""}`}>
        <div className={styles.innerContainer}>
          <div
            ref={dropdownRef}
            className={styles.dropdown}
            onMouseEnter={() => {
              if (window.innerWidth > 991) setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 991) setDropdownOpen(false);
            }}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownToggle} ${isDropdownActive ? styles.navLinkActive : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              type="button"
            >
              <span>O Nas</span>
              <span
                className={`${styles.arrow} ${dropdownOpen ? styles.arrowOpen : ""}`}
              />
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownList}>
                <div className={styles.dropdownGrid}>
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={styles.dropdownCard}
                    >
                      <span className={styles.dropdownTitle}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <Link href="/strefa-mieszkanca" className={styles.ctaButton}>
            Strefa Mieszkańca
          </Link>
        </div>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
        type="button"
      >
        <span
          className={`${styles.hamburgerIcon} ${mobileOpen ? styles.hamburgerOpen : ""}`}
        />
      </button>
    </>
  );
}
