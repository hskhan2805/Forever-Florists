"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-forest-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-rose opacity-80 group-hover:opacity-100 transition-opacity" />
            <svg className="relative w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.5 2 8 4.5 8 4.5S6.5 2 4 2C1.5 2 0 4 0 6c0 4 4 7 8 10 .7.5 1.3 1 2 1.5V20h4v-2.5c.7-.5 1.3-1 2-1.5 4-3 8-6 8-10 0-2-1.5-4-4-4C17.5 2 16 4.5 16 4.5S14.5 2 12 2z" />
            </svg>
          </div>
          <div>
            <span className="block font-display font-semibold text-lg leading-none text-cream">
              Forever Florists
            </span>
            <span className="block text-xs tracking-widest text-champagne-400 uppercase leading-none mt-0.5">
              Boutique
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200 tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-rose group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="tel:+12509622323" className="btn-primary text-sm">
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass-card"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-forest-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="container-wide py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-cream/80 font-medium hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+12509622323" className="btn-primary text-center">
              Call: (250) 962-2323
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
