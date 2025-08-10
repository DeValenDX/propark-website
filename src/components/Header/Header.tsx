"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Quienes Somos", href: "/quienes-somos" },
  { name: "Servicios", href: "/services" },
  { name: "Estacionamientos", href: "/estacionamientos" },
  { name: "Contacto", href: "/contacto" },
  { name: "Bolsa de trabajo", href: "/bolsa-trabajo" },
  { name: "Facturación", href: "/billing" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
         
          <div className={styles.headerLogo}>
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="ProPark Logo"
                width={120}
                height={40}
                className={styles.headerLogoImg}
                priority
              />
            </Link>
          </div>

          
          <nav className={styles.headerNav}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.headerNavLink}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          
          <button
            onClick={toggleMenu}
            className={styles.headerMenuBtn}
            aria-label="Toggle menu"
          >
            <svg className={styles.headerMenuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

       
        <div className={`${styles.headerMobileNav} ${isMenuOpen ? styles.headerMobileNavOpen : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.headerMobileLink}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
