import { useState } from "react";
import { Link } from "wouter";

export const BOOKING_URL = "https://app.revitk.com/widget/bookings/syncselling";

/* ─── SHARED NAVIGATION BAR ────────────────────────────────────────
 * Single source of truth for the site nav. Import from here — do not
 * copy-paste this into individual pages.
 *
 * Fixes vs previous per-page copies:
 *  - All five nav items present on every page
 *  - About uses /#about so it works from any route, not just /
 *  - Mobile dropdown has top padding and a darker bg so it reads
 *    as a distinct layer rather than blending with the page body
 * ─────────────────────────────────────────────────────────────────── */
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#0F1923]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img
            src="/revitk-logo-white.png"
            alt="Revitk"
            className="h-12 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
            Home
          </Link>
          <Link href="/offer" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
            The Programme
          </Link>
          <a href="/#about" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
            About
          </a>
          <Link href="/articles" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
            Articles
          </Link>
          <Link href="/sales-faq" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
            Sales FAQ
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E63946] text-white font-[family-name:var(--font-body)] font-medium text-sm px-5 py-2.5 rounded hover:bg-[#d32f3c] transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5F0EB]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — #0a1118 is darker than the nav bg so it reads as a distinct panel */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1118] border-t border-white/15 px-6 pt-4 pb-6 flex flex-col gap-1">
          <Link href="/" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm py-2.5 border-b border-white/5" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/offer" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm py-2.5 border-b border-white/5" onClick={() => setMenuOpen(false)}>
            The Programme
          </Link>
          <a href="/#about" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm py-2.5 border-b border-white/5" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <Link href="/articles" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm py-2.5 border-b border-white/5" onClick={() => setMenuOpen(false)}>
            Articles
          </Link>
          <Link href="/sales-faq" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm py-2.5 border-b border-white/5" onClick={() => setMenuOpen(false)}>
            Sales FAQ
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E63946] text-white font-[family-name:var(--font-body)] font-medium text-sm px-5 py-3 rounded text-center mt-3"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── SHARED FOOTER ─────────────────────────────────────────────────
 * Full footer with legal links and contact. Use on every page.
 * ─────────────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-[#0B1120] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src="/revitk-logo-white.png" alt="Revitk" className="h-10 w-auto opacity-50" />
        <div className="flex gap-8">
          <Link href="/privacy" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572] transition-colors">Terms & Conditions</Link>
          <a href="mailto:joe@revitk.com" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572] transition-colors">Contact Us</a>
        </div>
        <p className="text-[#F5F0EB]/30 text-xs">
          © {new Date().getFullYear()} Revitk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
