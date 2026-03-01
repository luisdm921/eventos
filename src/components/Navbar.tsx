"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-1"
            >
              <span
                className={`transition-colors duration-300 ${isScrolled ? "text-primary-600" : "text-white"}`}
              >
                Premium
              </span>
              <span
                className={`transition-colors duration-300 ${isScrolled ? "text-secondary-700" : "text-primary-300"}`}
              >
                Events
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 hover:text-primary-500 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? "text-secondary-600" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {/* CTA Button */}
              <a
                href="https://wa.me/528445841876?text=Hola%2C%20quiero%20cotizar%20un%20evento%20corporativo"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25"
                }`}
              >
                <FaWhatsapp className="text-sm" />
                Cotiza Gratis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl relative z-[60]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars
                  className={`transition-colors ${isScrolled ? "text-secondary-700" : "text-white"}`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-secondary-950/98 backdrop-blur-lg z-[55] transition-opacity duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 z-[60] text-white/80 hover:text-white transition-colors text-2xl bg-white/10 rounded-full p-2"
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-3xl font-bold transition-all hover:text-primary-400"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/528445841876?text=Hola%2C%20quiero%20cotizar%20un%20evento%20corporativo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp className="text-xl" />
              Cotiza Gratis Ahora
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
