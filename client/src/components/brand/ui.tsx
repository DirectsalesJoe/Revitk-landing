import React from "react";
import { BOOKING_URL } from "@/components/NavBar";

/* ─── SYNC SELLING ON THE SITE ───────────────────────────────────────
 * Skin D (locked 11 Oct 2026) in its ink look, with the pixel circuit
 * look (6 Nov 2026). Joe picked the all-ink version on 12 Nov 2026.
 *
 *  - The ground is ink everywhere. Sections are parted by a hairline.
 *  - Reading that needs a sheet sits on a white card, ink type on it.
 *  - Yellow is light on ink only: one word in a title, a subheading on
 *    the ink, the circuit lines. Never a fill, never inside a card.
 *  - Biro for anything you press. Red is the dot in the mark only.
 *  - Schibsted Grotesk. 4 px corners, no shadows, no pills.
 *
 * The brand book: _brand-assets/README.md and pixel-circuit/BRIEF.md in
 * the Sync Selling folder, and the revitk-brand skill.
 * ─────────────────────────────────────────────────────────────────── */

export const T = {
  /** Page title on ink. */
  h1: "text-[40px] leading-[1.04] md:text-6xl lg:text-[68px] font-black tracking-[-0.03em] text-white text-balance",
  /** A smaller page title, for article and legal pages. */
  h1Page: "text-4xl md:text-5xl leading-[1.06] font-black tracking-[-0.03em] text-white text-balance",
  /** Section title on ink. */
  h2: "text-3xl md:text-[44px] leading-[1.08] font-extrabold tracking-[-0.02em] text-white text-balance",
  /** A heading on ink, smaller than a section title. */
  h3: "text-xl md:text-2xl font-extrabold tracking-[-0.015em] text-white",
  /** A heading inside a white card. */
  cardH3: "text-xl md:text-2xl font-extrabold tracking-[-0.015em] text-ss-ink",
  /** Lead paragraph on ink. */
  lead: "text-lg md:text-xl text-ss-muted-ink leading-relaxed",
  /** Reading text on ink. */
  body: "text-base md:text-[17px] text-ss-muted-ink leading-relaxed",
  /** Reading text inside a white card. */
  cardBody: "text-base text-ss-muted-paper leading-relaxed",
  /** Strong text inside a white card: bold ink, never yellow. */
  cardStrong: "font-semibold text-ss-ink",
  /** A subheading on the ink: small capitals in yellow. */
  kicker: "text-xs md:text-sm font-bold tracking-[0.08em] uppercase text-ss-yellow",
  /** A label inside a white card: small capitals in biro. */
  cardKicker: "text-xs font-bold tracking-[0.08em] uppercase text-ss-biro",
  /** A link on ink: white, underlined. Biro is too faint on ink. */
  linkOnInk: "text-white font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white",
  /** A link inside a white card or on paper. */
  linkOnPaper: "text-ss-biro font-semibold underline underline-offset-4 decoration-ss-biro/40 hover:decoration-ss-biro",
  /** The one yellow word in a title. */
  accent: "text-ss-yellow",
};

/** A band of the page. Every band is ink; all but the first carry a hairline on top. */
export function Section({
  children,
  className = "",
  first = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  first?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`bg-ss-ink ${first ? "" : "border-t border-ss-hairline"} ${className}`}>
      {children}
    </section>
  );
}

/** A white sheet with one job. */
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-[4px] ${className}`}>{children}</div>;
}

/** The booking button: biro, white type, 4 px corners, no shadow. */
export function BookButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center min-h-[48px] bg-ss-biro text-white font-bold text-base px-7 py-3.5 rounded-[4px] hover:bg-ss-biro-hover transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

/** The class string for any other button or link styled as the biro button. */
export const BUTTON =
  "inline-flex items-center justify-center min-h-[48px] bg-ss-biro text-white font-bold text-base px-7 py-3.5 rounded-[4px] hover:bg-ss-biro-hover transition-colors";

/** The Wistia player colour, biro without the hash, for player-color="". */
export const PLAYER_COLOR = "1F3FBF";
