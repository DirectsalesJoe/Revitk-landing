import { useState, useEffect } from "react";
import { Link } from "wouter";

const BOOKING_URL = "https://app.revitk.com/widget/bookings/syncselling";

/* ─── NAVIGATION BAR ─── */
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
          <a href="#about" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">
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
          <Link href="/articles" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>
            Articles
          </Link>
          <Link href="/sales-faq" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>
            Sales FAQ
          </Link>
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

/* ─── SECTION 1: HERO (With Integrated Video) ─── */
function Hero() {
  return (
    <section className="bg-[#0B1120] border-t-4 border-[#E63946]">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Transform Your Sales Performance. <span className="italic" style={{ color: '#C5A572' }}>Risk Free.</span>
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#F5F0EB]/80 mb-4 max-w-3xl mx-auto">
          We build complete sales systems for B2B founders and sales teams. Bespoke playbooks, sales assets and training engineered for instant results.
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#C5A572] mb-12">
          300+ founders coached. £185M+ in client revenue.
        </p>
        
        {/* Integrated Introduction Video */}
        <div className="max-w-3xl mx-auto mb-12 aspect-video rounded-lg overflow-hidden border border-[#C5A572]/30 shadow-2xl">
          {/* @ts-ignore */}
          <wistia-player media-id="vf22l691dk" aspect="1.7777777777777777"></wistia-player>
        </div>

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
          We're selective about who we work with. If we don't think we can help, we'll tell you. If we do think we can help, we'll offer Phase 1 of our diagnostic, valued at well over £5,000, completely risk-free.
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
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0F1923] mb-6">
              This is for you if:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1">✓</span>
                  <span className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0F1923] mb-6">
              This isn't for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E63946] mt-1">✗</span>
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

/* ─── SECTION 7: THE DIAGNOSTIC OFFER ─── */
function Diagnostic() {
  return (
    <section className="bg-[#0F1923]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-6">
          Start With a Risk-Free Diagnostic. Decide After.
        </h2>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#F5F0EB]/80 mb-8">
          Before you commit to anything, we'll diagnose your entire sales process — completely risk-free.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-10 text-left">
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-6">
            You get a 90-minute workshop with Joe, a full diagnostic report, 80+ hours of market research on your buyers and competitors, and a wireframed sales playbook showing exactly what needs to happen at each stage.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-6">
            If you're not convinced, walk away. Keep the report. No charge. No awkward conversation.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed">
            85% of people who take the diagnostic continue into the full programme. We let the work speak for itself.
          </p>
        </div>
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
const faqs: { q: string; a: string[] }[] = [
  {
    q: `What is Sync Selling?`,
    a: [
      `A B2B sales system built by Joe Milnes. The idea is simple: 75% of sales success comes from the system, not the person. So we build the entire process for you instead of teaching techniques and hoping you figure it out.`,
      `It follows three stages. Hook: earn the right to a conversation. Wedge: help the prospect calculate what their problem is costing them. Match: position your solution as the obvious fix.`,
      `You get word-for-word scripts, discovery frameworks, proposal templates, and CRM automation. The lot. At Vohkus, people with zero sales experience hit £1.2M a month using this system. They weren't talented. They were well-equipped.`,
    ],
  },
  {
    q: `How is Sync Selling different from MEDDIC, Sandler, or Challenger?`,
    a: [
      `Most methodologies teach you a framework and leave you to figure out the rest. MEDDIC gives you a checklist but doesn't tell you what to say. Sandler teaches psychology but expects you to build your own materials. Challenger tells you to "teach, tailor, take control" then waves goodbye.`,
      `Sync Selling builds everything for you. Scripts, discovery frameworks, proposals, CRM sequences. It also borrows the best bits from other methodologies and weaves them into something you can actually use on Monday morning.`,
      `MEDDIC falls apart on short sales cycles. Gap Selling needs deep access you often don't have. BANT breaks when prospects aren't actively shopping. Sync Selling was built for all of those situations.`,
    ],
  },
  {
    q: `What results has Sync Selling achieved?`,
    a: [
      `Over £185M in revenue across 300+ founders. Steve Williams used it to scale Vohkus from £40M to £100M. Graduates with no sales experience were billing £1.2M a month within their first year.`,
      `Matej increased his close rate and prices sixfold. Brooks Van Norman called it the most valuable resource he'd ever invested in. Steve closed £100K from four new clients.`,
      `Close rates typically move from under 10% to north of 45% within eight weeks. When 75% of the result comes from the playbook, you stop needing rockstar salespeople.`,
    ],
  },
  {
    q: `What is Hook, Wedge, Match?`,
    a: [
      `Three stages. Each one has a specific job.`,
      `Hook earns you a conversation. You prove you understand the prospect's world better than the ten other salespeople who called that week. No pitching. Just credibility and curiosity.`,
      `Wedge builds the business case. You help the prospect calculate what their current situation is costing them — in their numbers, not yours. When they can see the gap in pounds and pence, your solution becomes the obvious bridge.`,
      `Match presents your solution as the answer to the gap you've just built together. By this point, they're not being sold to. They're buying.`,
    ],
  },
  {
    q: `Why do deals go dark after a great demo?`,
    a: [
      `Three reasons. First, your champion can't sell upwards. The CFO asked questions your pitch deck doesn't answer. Your champion had no ROI calculator, no cost-of-inaction analysis, no answers to the political objections.`,
      `Second, you showed features instead of solving their specific problem. A feature demo feels impressive in the room but is forgettable an hour later.`,
      `Third, you didn't create enough certainty. Buyers default to "no." Doing nothing is safe. If you haven't eliminated every reason to hesitate, the deal sits in limbo.`,
    ],
  },
  {
    q: `What is gap quantification?`,
    a: [
      `Instead of telling prospects what your product does, you help them calculate what their problem is costing them. In actual numbers.`,
      `If they're losing three deals a month to ghosting at £50K each, that's £150K per month. £1.8M a year. That number changes everything. Price objections disappear. Urgency becomes real. And their champion can tell the CFO "we're losing £150K a month doing nothing."`,
      `The key: the prospect calculates this number themselves. If you hand them a number, it's a sales pitch. If they arrive at it through your questions, it's their business case.`,
    ],
  },
  {
    q: `How much does the programme cost?`,
    a: [
      `Week 1 is a full GTM Diagnostic Workshop — risk-free. Normally a £3,500 standalone service. You get a sales process audit, wireframed playbook, 80+ hours of voice-of-customer research, competitive analysis, and AI persona models. If it's not for you, walk away. You keep everything.`,
      `If you continue, the Done-For-You Accelerator is £7,500 for founding members (normally £15,000). That includes every script, CRM setup, discovery frameworks, demo scripts, champion toolkits, and 12 weeks of direct support with WhatsApp access to Joe.`,
      `There's also a Done-With-You programme at £7,500 where you build the system with coaching guidance.`,
    ],
  },
  {
    q: `What do you get in Week 1?`,
    a: [
      `A full GTM Diagnostic Workshop. Completely risk-free. Five deliverables:`,
      `A complete sales process audit showing where you're leaving money on the table. A wireframed playbook mapping every stage and asset. Voice-of-customer research based on 80+ hours of analysis. A competitive analysis and objection plan. And AI-enhanced persona models with buying triggers and career fears.`,
      `If you look at all of that and decide it's not for you, walk away. No charge. No questions. You keep everything.`,
    ],
  },
  {
    q: `How do I improve my close rate?`,
    a: [
      `Accept that 50-70% of your pipeline was never going to buy. They're polite. They'll take your calls. But they were never going to sign. The fastest fix is to disqualify them earlier.`,
      `Qualify on four things. Can they explain what the problem is costing them? Do you know what solving it means for them personally? Have you mapped every decision-maker? And do you know what they'll do if they don't pick you?`,
      `If any of those answers are unclear, the deal isn't qualified. It's just a conversation.`,
    ],
  },
  {
    q: `What's the best sales methodology for founders?`,
    a: [
      `You don't need to be a good salesperson. You need an effective sales process. Most founders hear "sales methodology" and picture role plays and closing tricks. That's technique. It only improves how you say things.`,
      `What matters more is what you say. Get the playbook right and you're 75% of the way there. Sync Selling builds the entire system for you — scripts, discovery questions, proposals, follow-up sequences, champion toolkits.`,
      `At Vohkus, people with zero experience hit £1.2M a month. Not because they were naturals. Because the system did the heavy lifting.`,
    ],
  },
  {
    q: `What is champion enablement?`,
    a: [
      `Your champion is the person inside the prospect's company who wants to buy. They liked the demo. They believe in the product. But wanting to buy and being able to buy are completely different things.`,
      `Champion enablement means giving them everything they need to sell your solution to the people who control the budget and have the power to say no. ROI calculator. Cost-of-inaction analysis. Technical FAQ. Answers to political objections.`,
      `If your champion can't sell it internally, your demo was theatre.`,
    ],
  },
  {
    q: `What is the cost of inaction?`,
    a: [
      `The price a prospect pays every month they don't solve their problem. It's different from ROI. ROI is a future promise. The cost of inaction is a present reality they're already paying.`,
      `The prospect calculates this number themselves during discovery. If they're losing three deals a month at £50K each, that's £150K per month. £1.8M a year. Their number, not yours.`,
      `44% of B2B deals are lost to indecision, not competitors. The cost of inaction is how you turn indecision into action.`,
    ],
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
            <div key={i} className="border-b border-[#0F1923]/10">
              <button
                className="w-full py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[#0F1923]">
                  {faq.q}
                </span>
                <span className="text-2xl text-[#C5A572]">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-6 space-y-3">
                  {faq.a.map((paragraph, j) => (
                    <p
                      key={j}
                      className="font-[family-name:var(--font-body)] text-base text-[#0F1923]/70 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
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
    <section className="bg-[#0F1923] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
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
export function Footer() {
  return (
    <footer className="bg-[#0B1120] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src="/revitk-logo-white.png" alt="Revitk" className="h-10 w-auto opacity-50" />
        <div className="flex gap-8">
          <Link href="/privacy" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]">Privacy Policy</Link>
          <Link href="/terms" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]">Terms & Conditions</Link>
          <a href="mailto:joe@revitk.com" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]">Contact Us</a>
        </div>
        <p className="text-[#F5F0EB]/30 text-xs">
          © {new Date().getFullYear()} Revitk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── FAQ SCHEMA INJECTION ─── */
function HomepageFAQSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "homepage-faq-schema";
    // Dynamically build from visible FAQ content
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://revitk.com/#faq",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("homepage-faq-schema");
      if (el) el.remove();
    };
  }, []);
  return null;
}

/* ─── PAGE ASSEMBLY ─── */
export default function NewHome() {
  return (
    <>
      <HomepageFAQSchema />
      <NavBar />
      <Hero />
      <ProblemIdentification />
      <HowItWorks />
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
