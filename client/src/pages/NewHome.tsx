import { useState } from "react";
import { Link } from "wouter";

const BOOKING_URL = "https://app.revitk.com/widget/bookings/syncselling";

/* ─── NAVIGATION BAR ─── */
function NavBar() {
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
          <a href="#about" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
            About
          </a>
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
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F1923] border-t border-white/10 px-6 pb-4 flex flex-col gap-4">
          <Link href="/" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/offer" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>
            The Programme
          </Link>
          <a href="#about" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E63946] text-white font-[family-name:var(--font-body)] font-medium text-sm px-5 py-2.5 rounded text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── SECTION 1: HERO (No photo — clean text only) ─── */
function Hero() {
  return (
    <section className="bg-[#0B1120] border-t-4 border-[#E63946]">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          We offer the <span className="italic" style={{ color: '#C5A572' }}>quickest and easiest</span> way to transform sales performance. <span className="italic" style={{ color: '#C5A572' }}>Risk free.</span>
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#F5F0EB]/80 mb-4 max-w-3xl mx-auto">
          We build complete sales systems for B2B founders and sales teams. Bespoke playbooks, sales assets and training engineered for instant results.
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#C5A572] mb-8">
          300+ founders coached. £185M+ in client revenue.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors"
        >
          Book Your Free Qualification Call
        </a>
      </div>
    </section>
  );
}

/* ─── SECTION 2: PROBLEM IDENTIFICATION ─── */
/* Each problem has a "symptom" (the title + opening) and a "root cause" (bolded) */
const problems = [
  {
    title: "Deals die after great conversations",
    symptom: 'Your demo goes brilliantly. Your champion says "let me get sign-off." Then silence. Weeks pass.',
    rootCause: "The deal dies in a room you were never in, because your champion had no ammunition to sell you internally.",
  },
  {
    title: "Proposals disappear into inboxes",
    symptom: 'You send the quote. Follow up once. Twice. Three times. "Still reviewing it internally."',
    rootCause: "A quote is not a boomerang. If you lose control of the sales process, you can't win.",
  },
  {
    title: "Your pipeline is full of maybes",
    symptom: "Nobody's actually saying no, but nobody's signing either. You might say \"yeah, we're still looking into it\" or \"I think we're still on for that,\" but you've got no way of telling which deals are closing this week.",
    rootCause: "You didn't ask the questions you needed to build the case for the cost of inaction, so the prospect has no idea how much it's costing them to stay in their own muck.",
  },
  {
    title: "You've wasted thousands on sales hires that didn't work out",
    symptom: "",
    rootCause: "If you haven't got a proven process and a way to measure how salespeople are performing on each and every part of it, how are you ever going to know where to coach, where to enable, and whether you've got the right people in the right seats?",
  },
];

function ProblemIdentification() {
  return (
    <section className="bg-[#F5F0EB]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-[#0F1923] mb-12 text-center">
          Sound Familiar?
        </h2>
        <div className="space-y-10">
          {problems.map((p, i) => (
            <div key={i}>
              <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-[#0F1923] mb-3">
                {p.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/80 leading-relaxed">
                {p.symptom}{p.symptom ? " " : ""}
                <span className="font-semibold text-[#0F1923]">{p.rootCause}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: HOW YOU CAN WORK WITH US ─── */
const phases = [
  {
    label: "Phase 01",
    title: "Diagnose",
    body: "We audit your entire sales process: messaging, pipeline, CRM, qualification criteria, demo structure, proposals, follow-up. You get a diagnostic report showing exactly where revenue is leaking and what to fix first.",
  },
  {
    label: "Phase 02",
    title: "Build",
    body: "We create every asset your team needs. Discovery scripts, demo frameworks, proposals that close, objection handling toolkits, and champion enablement packs. Built for your business, your market, your buyers.",
  },
  {
    label: "Phase 03",
    title: "Coach",
    body: "Group coaching calls, deal clinics, call reviews, and direct support until the system runs without us. We stay with you through live deals so the methodology sticks.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#0F1923]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mb-8" />
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-6 text-center">
          How You Can Work With Us
        </h2>
        <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 text-center max-w-3xl mx-auto mb-12">
          We're selective about who we work with. If we don't think we can help, we'll tell you. If we do think we can help, we'll offer Phase 1 of our diagnostic, valued at well over £5,000, for £1.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-8">
              <span className="font-[family-name:var(--font-body)] text-sm text-[#C5A572] font-medium tracking-wider uppercase">
                {phase.label}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mt-2 mb-4">
                {phase.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/70 leading-relaxed">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
        <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 text-center mb-8">
          Want the full breakdown of what's included?{" "}
          <Link href="/offer" className="text-[#E63946] hover:underline">
            See the programme →
          </Link>
        </p>
        <div className="text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors"
          >
            Book Your Free Qualification Call
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3.5: MEET JOE — INTRODUCTION VIDEO ─── */
function MeetJoe() {
  return (
    <section className="bg-[#0F1923]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mb-8" />
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-8 text-center">
          Meet Joe Milnes
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden border border-[#C5A572]/30">
          {/* @ts-ignore */}
          <wistia-player media-id="vf22l691dk" aspect="1.7777777777777777"></wistia-player>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: RESULTS & SOCIAL PROOF ─── */
/* CORRECTED MAPPING: wpge7ym6pc=Jordan, h4akkgj8si=Vohkus, iyot7g3u08=Matej, iu0mwb1pri=Steve */
const testimonials = [
  {
    name: "Jordan, FE Growth Partner",
    result: "Chose Joe to coach hundreds of founders at his £50M agency.",
    mediaId: "wpge7ym6pc",
  },
  {
    name: "Vohkus",
    result: "Took a team of graduates with zero experience to £1.2M monthly revenue in under a year. Including a £1M+ deal with oil and gas.",
    mediaId: "h4akkgj8si",
  },
  {
    name: "Matej",
    result: "Closed over £500K. Increased close rate and prices sixfold.",
    mediaId: "iyot7g3u08",
  },
  {
    name: "Steve",
    result: "£100K in new business. £50K profit from four new clients.",
    mediaId: "iu0mwb1pri",
  },
];

function SocialProof() {
  return (
    <section className="bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-[#0F1923] mb-4 text-center">
          Results From Founders Like You
        </h2>
        <p className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/70 text-center mb-12">
          300+ founders. £185M+ in revenue generated using this system.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-[#0F1923]/10 rounded-lg overflow-hidden">
              <div className="aspect-video">
                {/* @ts-ignore */}
                <wistia-player media-id={t.mediaId} aspect="1.7777777777777777"></wistia-player>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#0F1923] mb-2">
                  {t.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#0F1923]/70 leading-relaxed">
                  {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: ABOUT JOE ─── */
function AboutJoe() {
  return (
    <section id="about" className="bg-[#0F1923]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="/joe-about.png"
              alt="Joe Milnes"
              className="w-64 md:w-80 rounded-full"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-6">
              About Joe Milnes — Founder of Revitk
            </h2>
            <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-4">
              25 years in B2B sales. Built and scaled the sales engine at Vohkus as they went from £50M to £100M in under five years. Coached 300+ founders across SaaS, consultancies, agencies, and technical services. Trained teams of graduates who outsold experienced reps within months.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-4">
              The Sync Selling system grew out of one observation: most deals die because the buyer can't get to "yes," and by not being able to decide, they default to "no." The salesperson hasn't given them the tools to decide. Every script, framework, and playbook we build is designed to eliminate "maybe" and help buyers decide. Sync Selling works across everything you say, show, or send to your prospects.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-8">
              If you're frustrated and feel something isn't quite right, we should talk.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors"
            >
              Book Your Call With Joe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: WHO THIS IS FOR ─── */
const forYou = [
  "You're a B2B founder or sales leader doing £500K-£5M in revenue",
  "You're generating leads but your close rate is painful",
  "Deals stall after demos and proposals disappear into inboxes",
  "You've tried hiring salespeople and they can't replicate your results",
  "You want a system your team can follow, not just more advice",
];

const notForYou = [
  "You don't have leads yet (we fix conversion, not lead generation)",
  "You're looking for a generic sales course or motivational training",
  "You want someone to make cold calls for you",
];

function WhoThisIsFor() {
  return (
    <section className="bg-[#F5F0EB]">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-[#0F1923] mb-12 text-center">
          Is This Right for You?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-[#0F1923] mb-6">
              This is for you if:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 text-xl mt-0.5">✓</span>
                  <span className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-[#0F1923] mb-6">
              This isn't for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E63946] text-xl mt-0.5">✗</span>
                  <span className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: THE £1 DIAGNOSTIC ─── */
function Diagnostic() {
  return (
    <section className="bg-[#0F1923]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mb-8" />
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-8">
          Start With a £1 Diagnostic. Decide After.
        </h2>
        <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-4">
          Before you commit to anything, we'll diagnose your entire sales process for £1.
        </p>
        <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-4">
          You get a 90-minute workshop with Joe, a full diagnostic report, 80+ hours of market research on your buyers and competitors, and a wireframed sales playbook showing exactly what needs to happen at each stage.
        </p>
        <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-4">
          If you're not convinced, walk away. Keep the report. No charge beyond the £1.
        </p>
        <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-8">
          85% of people who take the diagnostic continue into the full programme. We let the work speak for itself.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors"
        >
          Book Your Qualification Call
        </a>
      </div>
    </section>
  );
}

/* ─── SECTION 8: FAQ ─── */
const faqs = [
  {
    q: "My industry is super niche. Will this work?",
    a: "We've built systems for commercial solar, roofing, SaaS, recruitment, agencies, HVAC, and industrial equipment. The methodology works because it's built on how buyers make decisions, and buyers in every industry follow the same decision-making patterns.",
  },
  {
    q: "What's the time commitment?",
    a: "The diagnostic takes 90 minutes. The full programme requires 3-4 hours per week for 8-12 weeks. Most founders tell us it saves them time because they stop chasing dead deals.",
  },
  {
    q: "What if I want to hire a salesperson after this?",
    a: "That's the point. The system we build is a complete playbook. Day one, your new hire has discovery scripts, demo frameworks, proposal templates, and objection handling toolkits. No more \"shadow me and figure it out.\"",
  },
  {
    q: "What does the call involve?",
    a: "30 minutes with Joe. We'll work out if we can help. If we can, you'll know exactly what the first step looks like. If we can't, we'll tell you. No pressure, no hard sell.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#F5F0EB]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-[#0F1923] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#0F1923]/10 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-[family-name:var(--font-body)] text-base font-bold text-[#0F1923] pr-4">
                  {faq.q}
                </span>
                <span className="text-[#0F1923]/50 text-xl flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 bg-white">
                  <p className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 9: FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="bg-[#0B1120]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-8">
          If deals are stalling after great conversations, we should talk.
        </h2>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors mb-6"
        >
          Book Your Free Qualification Call
        </a>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/60">
          30 minutes. No obligation. If we can help, you'll know. If we can't, we'll tell you.
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-[#0F1923] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/50 mb-2">
          Revitk Ltd | Company No. 15929263 | 107 Louth Road, Sheffield, S11 7AU
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/50 mb-2">
          <Link href="/privacy" className="hover:text-[#F5F0EB]/80 transition-colors">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="/terms" className="hover:text-[#F5F0EB]/80 transition-colors">
            Terms & Conditions
          </Link>
          {" | "}
          <a href="mailto:joe@revitk.com" className="hover:text-[#F5F0EB]/80 transition-colors">
            Contact Us
          </a>
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/50">
          © 2026 Revitk. All rights reserved. The Sync Selling System.
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ASSEMBLY ─── */
export default function NewHome() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProblemIdentification />
      <HowItWorks />
      <MeetJoe />
      <SocialProof />
      <AboutJoe />
      <WhoThisIsFor />
      <Diagnostic />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
