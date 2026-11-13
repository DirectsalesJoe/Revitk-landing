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
/* resourcePage: the pre-booking pages (/learn) book through book.revitk.com
 * as a strategy session. Added in Manus on 11 Nov 2026 and carried over here. */
const RESOURCE_BOOKING_URL = "https://book.revitk.com/";

export function NavBar({ resourcePage = false }: { resourcePage?: boolean } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaHref = resourcePage ? RESOURCE_BOOKING_URL : BOOKING_URL;
  const ctaLabel = resourcePage ? "Book Your Strategy Session" : "Book a Call";
  return (
    <nav className="sticky top-0 z-50 bg-ss-ink border-b border-ss-hairline">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img
            src="/brand/sync-selling-on-ink.png"
            alt="Sync Selling by Joe Milnes"
            className="h-11 md:h-12 w-auto cursor-pointer -ml-3"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-ss-muted-ink font-[family-name:var(--font-body)] text-[15px] font-medium hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/offer" className="text-ss-muted-ink font-[family-name:var(--font-body)] text-[15px] font-medium hover:text-white transition-colors">
            The Programme
          </Link>
          <a href="/#about" className="text-ss-muted-ink font-[family-name:var(--font-body)] text-[15px] font-medium hover:text-white transition-colors">
            About
          </a>
          <Link href="/articles" className="text-ss-muted-ink font-[family-name:var(--font-body)] text-[15px] font-medium hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/sales-faq" className="text-ss-muted-ink font-[family-name:var(--font-body)] text-[15px] font-medium hover:text-white transition-colors">
            Sales FAQ
          </Link>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ss-biro text-white font-[family-name:var(--font-body)] font-bold text-[15px] px-5 py-2.5 rounded-[4px] hover:bg-ss-biro-hover transition-colors"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
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

      {/* Mobile menu: a hairline above it so it reads as its own panel */}
      {menuOpen && (
        <div className="md:hidden bg-ss-ink border-t border-ss-hairline px-6 pt-4 pb-6 flex flex-col gap-1">
          <Link href="/" className="text-white font-[family-name:var(--font-body)] text-base py-3 border-b border-ss-hairline" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/offer" className="text-white font-[family-name:var(--font-body)] text-base py-3 border-b border-ss-hairline" onClick={() => setMenuOpen(false)}>
            The Programme
          </Link>
          <a href="/#about" className="text-white font-[family-name:var(--font-body)] text-base py-3 border-b border-ss-hairline" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <Link href="/articles" className="text-white font-[family-name:var(--font-body)] text-base py-3 border-b border-ss-hairline" onClick={() => setMenuOpen(false)}>
            Articles
          </Link>
          <Link href="/sales-faq" className="text-white font-[family-name:var(--font-body)] text-base py-3 border-b border-ss-hairline" onClick={() => setMenuOpen(false)}>
            Sales FAQ
          </Link>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ss-biro text-white font-[family-name:var(--font-body)] font-bold text-base px-5 py-3 rounded-[4px] text-center mt-3"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── SHARED FOOTER ─────────────────────────────────────────────────
 * Full footer with legal links and contact. Use on every page.
 * ─────────────────────────────────────────────────────────────────── */
export function Footer({ resourcePage = false }: { resourcePage?: boolean } = {}) {
  void resourcePage; // same footer either way; kept so /learn matches the live page's API
  return (
    <footer className="bg-ss-ink py-12 border-t border-ss-hairline">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src="/brand/sync-selling-on-ink.png" alt="Sync Selling by Joe Milnes" className="h-10 w-auto -ml-2.5" />
        <div className="flex gap-8">
          <Link href="/privacy" className="text-ss-muted-ink text-sm hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-ss-muted-ink text-sm hover:text-white transition-colors">Terms & Conditions</Link>
          <a href="mailto:joe@revitk.com" className="text-ss-muted-ink text-sm hover:text-white transition-colors">Contact Us</a>
        </div>
        <p className="text-ss-muted-ink/70 text-sm">
          © {new Date().getFullYear()} Revitk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
