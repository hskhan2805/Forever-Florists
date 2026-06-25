"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-flower flex items-center justify-center">
            <span className="text-white font-bold text-lg">✿</span>
          </div>
          <span className="hidden sm:inline text-xl font-display font-semibold text-primary-900">
            Forever Florists
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-gray-700 font-medium hover:text-accent-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="text-gray-700 font-medium hover:text-accent-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#about"
            className="text-gray-700 font-medium hover:text-accent-600 transition-colors"
          >
            About
          </Link>
          <a
            href="tel:+12509622323"
            className="button-primary text-sm"
          >
            Call Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-wide py-4 flex flex-col gap-4">
            <a href="#services" className="text-gray-700 font-medium hover:text-accent-600">
              Services
            </a>
            <a href="#gallery" className="text-gray-700 font-medium hover:text-accent-600">
              Gallery
            </a>
            <a href="#about" className="text-gray-700 font-medium hover:text-accent-600">
              About
            </a>
            <a href="tel:+12509622323" className="button-primary text-sm">
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
