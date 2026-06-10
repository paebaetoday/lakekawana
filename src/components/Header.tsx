"use client";

import Link from "next/link";
import { useState } from "react";
import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/dining", label: "Dining" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-[var(--accent)]">Lake Kawana</span>{" "}
              <span className="font-light text-gray-700">Hotel</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={TRIP_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
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

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={TRIP_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold px-6 py-2.5 rounded-lg text-sm text-center transition-colors"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
