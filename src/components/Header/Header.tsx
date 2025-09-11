"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Quienes Somos", href: "quienes-somos" },
  { name: "Servicios", href: "servicios" },
  { name: "Estacionamientos", href: "estacionamientos" },
  { name: "Contacto", href: "contacto" },
  { name: "Bolsa de trabajo", href: "bolsa-trabajo" },
  { name: "Facturación", href: "facturacion" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center h-14">
                <Image
                  src="/logo estatico.png"
                  alt="ProPark Logo"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className="text-[#008FBE] hover:text-[#006d94] transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-[#008FBE] hover:text-[#006d94] focus:outline-none focus:text-[#006d94] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                const section = document.getElementById(item.href);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }
              }}
              className="block w-full text-left px-3 py-2 text-[#008FBE] hover:text-[#006d94] hover:bg-gray-50 rounded-md text-base font-medium cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
