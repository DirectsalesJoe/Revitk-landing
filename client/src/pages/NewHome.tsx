import { useState, useEffect } from "react";
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
          We offer the <span className="italic" style={{ color: '#C5A572' }}>quickest and easiest</span> way to transform sales performance. <span className="italic" style={{ color: '#C5A572' }}>Risk free.</span>
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
          Start With a £1 Diagnostic. Decide After.
        </h2>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#F5F0EB]/80 mb-8">
          Before you commit to anything, we'll diagnose your entire sales process for £1.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-10 text-left">
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-6">
            You get a 90-minute workshop with Joe, a full diagnostic report, 80+ hours of market research on your buyers and competitors, and a wireframed sales playbook showing exactly what needs to happen at each stage.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/80 leading-relaxed mb-6">
            If you're not convinced, walk away. Keep the report. No charge beyond the £1.
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
const faqs = [
  {
    q: `What is Sync Selling?`,
    a: `Sync Selling is a B2B sales methodology created by Joe Milnes. It works on a simple premise: 75% of sales success comes from the system, not the individual. So instead of teaching you techniques and hoping you figure it out, Sync Selling builds your entire sales process for you. It follows a three-stage framework called Hook, Wedge, and Match. Hook earns you the right to a conversation by proving you understand the prospect's world. Wedge builds the business case by getting the prospect to quantify the gap between where they are and where they need to be. Match positions your solution as the logical way across that gap. The output is a complete Done-For-You system covering everything you say, show, and send. Word-for-word scripts. Discovery frameworks. Champion enablement toolkits. CRM automation. The lot. At Vohkus, graduates with zero sales experience hit £1.2 million monthly using this system. They weren't talented. They were well-equipped.`,
  },
  {
    q: `How is Sync Selling different from other sales methodologies like MEDDIC, Sandler, or Challenger?`,
    a: `Most methodologies teach you a framework and leave you to work out how to apply it. MEDDIC gives you a qualification checklist but doesn't tell you what to actually say on a call. Sandler teaches psychology principles but expects you to build your own materials. Challenger tells you to teach, tailor, and take control, then sends you off without a script. Sync Selling is different because it covers everything you say, show, and send. You get word-for-word scripts, not theory. Discovery frameworks you can follow step by step. Proposal templates. Champion enablement toolkits. CRM sequences. It also doesn't pretend to be the only methodology worth knowing. It takes the best from all of them and builds something practical. MEDDIC's qualification rigour is in there. Sandler's psychology is in there. But they're woven into a system you can actually execute on Monday morning. MEDDIC falls apart on shorter sales cycles where you can't run a full discovery marathon. Gap Selling assumes you've got the time and access to do deep problem exploration, which founders selling to busy prospects often don't. BANT doesn't work when leads aren't actively looking for a solution yet. Sync Selling was built to handle all of those situations.`,
  },
  {
    q: `What results has Sync Selling achieved?`,
    a: `Sync Selling has generated over £185 million in revenue across 300+ founders. Steve Williams at Vohkus used it to scale from £40 million to £100 million. Graduates with no prior sales experience were billing £1.2 million a month within their first year, including one deal worth over £1 million with an oil and gas company. Matej increased his close rate and his prices sixfold. Brooks Van Norman called it the most valuable resource he'd ever invested in. Steve closed £100K in new business from four new clients. These aren't outliers. Close rates typically move from under 10% to north of 45% within eight weeks. The reason is straightforward: when 75% of the result comes from the playbook rather than the person, you stop being dependent on hiring rockstar salespeople. You build a system that makes ordinary people consistently effective.`,
  },
  {
    q: `What is the Hook/Wedge/Match framework?`,
    a: `Hook, Wedge, and Match are the three stages of the Sync Selling methodology. Each stage has a specific job. The Hook earns you a conversation. You do this by demonstrating that you understand the prospect's world better than the ten other salespeople who called that week. You show credibility, create curiosity, and offer a low-friction next step. You're not pitching. You're proving you get it. The Wedge builds the business case. This is where gap quantification happens. You help the prospect calculate what their current situation is actually costing them, using their numbers, not yours. Revenue lost per month. Hours wasted. Deals that went dark. When they can see the gap in pounds and pence, your solution becomes the obvious bridge. The Match stage presents your solution as the answer to the gap you've just quantified together. By this point, the prospect isn't being sold to. They're buying, because they've already done the maths. The framework also builds in champion enablement at every stage, so your buyer has everything they need to sell the deal internally without coming back to you.`,
  },
  {
    q: `Why do B2B deals go dark after a great demo?`,
    a: `Three reasons, and most sales teams only ever think about one of them. First, your champion can't sell upwards. The demo went brilliantly. They loved it. Then they took it to the CFO, who asked questions your pitch deck doesn't answer. What's the return on effort? What's the implementation burden on our already stretched team? Who's going to push back internally? Your champion had no answers because you only gave them features and a case study. You didn't give them an ROI calculator, a cost-of-inaction analysis, or answers to the political objections they'd face from colleagues who see your project as a threat. Second, you demoed features instead of demonstrating your ability to solve the problem. The prospect saw what your product does but never connected it to the specific gap they're trying to close. A feature-led demo feels impressive in the room but forgettable an hour later. Third, and this is the one nobody talks about: you didn't create enough certainty. Buyers don't default to yes. They default to no. Doing nothing is safe. Buying something new is risky. If you haven't eliminated every possible reason to hesitate, the prospect sits in what we call the Lake of Maybe, where deals go to die quietly. In Sync Selling, we call the fix the Bookends Principle. Before and after every interaction, you address the concerns of every stakeholder who touches the deal. Technical buyers. Financial decision-makers. Political influencers. If you leave any of them out, the deal stalls.`,
  },
  {
    q: `What is gap quantification in sales?`,
    a: `Gap quantification is the core technique in the Wedge stage of Sync Selling. Instead of telling the prospect what your product does, you help them calculate the distance between where they are now and where they need to be. Not in abstract terms. In actual numbers. If a prospect is losing three deals a month to ghosting at an average deal value of £50K, the cost of inaction is £150K per month. £1.8 million a year. That number changes the conversation completely. Price objections disappear because doing nothing costs more than buying your solution. Urgency becomes real because every month of delay has a measurable cost attached. And your champion can sell upwards, because telling the CFO 'it's costing us £150K a month to do nothing' lands differently than 'the team really liked the demo.' The critical piece: the prospect has to calculate this number themselves, using their own data, in their own words. If you hand them a number, it's a sales pitch. If they arrive at the number through your questions, it's their business case. That's what makes gap quantification different from standard ROI selling. ROI is a future promise. The cost of inaction is a present reality they're already paying.`,
  },
  {
    q: `How much does the Sync Selling programme cost?`,
    a: `Week 1 costs £1. That's a full GTM Diagnostic Workshop, which is normally a £3,500 standalone service. You get a complete sales process audit, a wireframed sales playbook, 80+ hours of voice-of-customer research, competitive analysis, and AI-enhanced persona models. If you look at the diagnostic and think it's not for you, walk away. No further cost. No awkward conversation. You keep the entire report. If you continue, the Done For You Accelerator is £7,500 for founding members, normally £15,000. That includes every script written for you, CRM setup, discovery frameworks, demo scripts, champion enablement toolkits, and 12 weeks of direct one-to-one support with WhatsApp access to Joe Milnes. There's also a Done With You programme at £7,500 where you build the system with coaching guidance rather than having it built entirely for you.`,
  },
  {
    q: `What do you get in Week 1 of the Sync Selling programme?`,
    a: `Week 1 is a full GTM Diagnostic Workshop for £1. You walk away with five deliverables. A Complete GTM Diagnostic Report auditing your entire sales process with specific findings on every area where you're leaving money on the table. A Wireframed Sales Playbook PDF mapping your complete process with every stage, every asset needed, and every transition point. A Voice of Customer Analysis based on 80+ hours of research into the exact words your prospects use, what triggers them to buy, what they object to, and where your competitors fall short. A Competitive Analysis and Objection Plan covering every reason a prospect might say no, and how to position against alternatives without naming competitors directly. And AI-Enhanced Persona Models with deep psychological profiles including buying triggers, political dynamics, and career fears. If you look at all of that and decide it's not for you, no charge. No questions. You keep everything.`,
  },
  {
    q: `How do I improve my B2B close rate?`,
    a: `Start by accepting that 50 to 70 percent of the people in your pipeline were never going to buy. They're polite. They'll take your calls. They'll say the demo was great. But they were never going to sign. The fastest way to improve your close rate is to disqualify these people earlier so you stop wasting time on deals that were dead from the start. In Sync Selling, qualification runs on four checks. First, the business case. Can the prospect articulate where they are, where they need to be, and what the gap is costing them? If they can't explain the cost of inaction in their own words, you haven't got a business case. You've got someone who thinks your product sounds interesting. Second, the future state. What does solving this problem actually mean for them, personally and professionally? If you can't answer that, you don't understand what's really driving the decision. Third, the decision process. Who makes the final call? What criteria will they use? When does a decision need to happen? Have you mapped every person who touches this, and do you have control of the process or is the prospect running it? Fourth, objections and alternatives. Do you know what they'll do if they don't go with you? Are they looking at a competitor? Building something in-house? Just living with the pain? Each alternative has a weakness. Your job is to surface it before they discover it the hard way.`,
  },
  {
    q: `What is the best B2B sales methodology for founders?`,
    a: `You don't need to be a good salesperson. You just need an effective sales process. Most founders hear 'sales methodology' and picture themselves doing role plays and learning closing tricks. That's sales technique, and it only improves the way you say things. What matters far more is what you say. Get the playbook right, and you're 75% of the way there before technique even enters the picture. That's why Sync Selling was built for founders specifically. Instead of handing you a framework and wishing you luck, it builds the entire system for you. Word-for-word scripts. Discovery questions you read from a page. Proposal templates. Follow-up sequences. Champion enablement toolkits that do the internal selling when you're not in the room. The philosophy is that sales success comes from the system, not the individual. At Vohkus, people with zero experience hit £1.2 million a month using this methodology. Not because they were naturals. Because the system did the heavy lifting. MEDDIC assumes you've got seasoned reps who can translate a qualification checklist into live conversations. BANT breaks down when prospects aren't actively shopping. Gap Selling needs deep access and long cycles. Sync Selling works when you've got limited leads, short windows, and a founder who'd rather be building product than pitching.`,
  },
  {
    q: `What is champion enablement and why does it matter?`,
    a: `Your champion is the person inside the prospect's organisation who wants to buy. They liked the demo. They believe in the product. But wanting to buy and being able to buy are completely different things. Champion enablement means giving that person everything they need to sell your solution to the people who control the budget, manage the risk, and have the power to say no. Most sales teams send their champion off with a proposal and a case study. That's not enough. A proper champion enablement toolkit includes an ROI calculator showing financial return, a return-on-effort calculator showing exactly how much work falls on the internal team, a cost-of-inaction analysis showing what doing nothing costs every month, a technical FAQ that pre-answers whatever IT is going to raise, and answers to the political objections from colleagues who see your project as a threat to their priorities. In Sync Selling, champion enablement is built into the system from the start. Every proposal goes out with the tools your champion needs to get sign-off from stakeholders you've never met. Because if your champion can't sell it internally, your demo was theatre.`,
  },
  {
    q: `What is the cost of inaction in B2B sales?`,
    a: `The cost of inaction is the measurable price a prospect is paying every month they don't solve their problem. It's different from ROI. ROI is a future promise: buy our product and you'll save X. The cost of inaction is a present reality: you're already losing X by doing nothing. In Sync Selling, the prospect calculates this number themselves during discovery. If they're losing three deals a month to ghosting at £50K average deal value, that's £150K per month. £1.8 million a year. That's not your number. It's theirs. They arrived at it through your questions, using their own data. Once a prospect can say that number out loud, the dynamic shifts. Price objections lose their power because inaction costs more than your solution. The urgency becomes real because every month of delay has a cost they've just calculated. And their champion can sell upwards, because 'we're haemorrhaging £150K a month doing nothing' is a sentence that makes CFOs pay attention. Research from Jolt shows that 44% of B2B deals are lost not to competitors but to indecision. The prospect liked you, liked the product, but couldn't build enough internal certainty to pull the trigger. The cost of inaction is how you turn indecision into action. If your prospect can't articulate what doing nothing costs, you haven't built a business case.`,
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
                <div className="pb-6">
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
function Footer() {
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
