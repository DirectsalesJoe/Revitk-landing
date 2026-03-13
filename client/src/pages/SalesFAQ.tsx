import { useState, useEffect } from "react";
import { Link } from "wouter";

const BOOKING_URL = "https://app.revitk.com/widget/bookings/syncselling";

/* ─── FAQ DATA: Sales Problems ─── */
const salesFaqs = [
  {
    q: `Why do prospects say 'we need to think about it' and what should I do?`,
    a: [
      `It's not a timing problem. It's a certainty problem. They don't have enough information to say yes, so they default to the polite exit.`,
      `Your move: 'If you decided not to do this, why would the reason be?' That gives them permission to voice the real objection without it feeling confrontational.`,
      `Once the real reason surfaces, address it directly and rebook the next conversation before they leave. Deals without a date in the diary almost never come back.`,
    ],
  },
  {
    q: `Why do my proposals keep getting ignored?`,
    a: [
      `Your proposal has to sell when you're not in the room. Most fail because they're feature lists that assume context only your main contact has. Every other stakeholder looks at it and thinks 'so what?'`,
      `A good proposal articulates the gap in the prospect's own words, shows the cost of inaction they calculated, and maps your solution to their specific problems.`,
      `It also pre-answers objections from stakeholders you'll never meet. Build it like a document that does the selling on your behalf.`,
    ],
  },
  {
    q: `How do I build a sales process that actually works?`,
    a: [
      `Three stages. The Hook: how you start conversations with new prospects. The Wedge: your discovery process where you uncover the real problems and build a business case. The Match: proposals and assets that sell for you when you're not in the room.`,
      `Most founders only build one or two pieces and wonder why deals stall. You need all three working together.`,
    ],
  },
  {
    q: `Why do deals stall when the prospect seemed interested?`,
    a: [
      `44% of B2B deals are lost to indecision, not competitors. Doing nothing is safe. Nobody gets fired for maintaining the status quo.`,
      `To beat indecision, you need three things: quantify what inaction costs per month using their numbers, uncover what solving this means for the person (not just the company), and eliminate objections from stakeholders you can't see.`,
      `If any decision-maker has an unaddressed concern, the deal sits in limbo.`,
    ],
  },
  {
    q: `Why do prospects always push back on my price?`,
    a: [
      `They're not rejecting your price. They're telling you they don't see enough value.`,
      `Value has three components: the perceived risk of proceeding, the size of the gap between where they are and where they want to be, and the effort involved in getting there.`,
      `When the prospect has calculated that doing nothing costs them six figures a month, your solution looks like the obvious choice. Fix the value, not the price.`,
    ],
  },
];

/* ─── FAQ DATA: Scaling & Execution ─── */
const methodologyFaqs = [
  {
    q: `How do I stop getting ghosted after sending a proposal?`,
    a: [
      `Ghosting happens when stakeholders you've never spoken to have concerns nobody addressed. The technical buyer worries about integration. The CFO wants return on effort. A department head sees your project as a threat to their budget.`,
      `Before your champion takes the proposal upstairs, you need to have covered every angle. If you haven't, you've left the deal's fate in someone else's hands.`,
    ],
  },
  {
    q: `How do I stop deals going dark between meetings?`,
    a: [
      `Never end any interaction without the next step locked in the diary. After a cold call, book the discovery. After discovery, book the demo. After the demo, book the proposal walk-through. No exceptions.`,
      `Most deals don't die because the prospect said no. They die in the gaps between meetings when other priorities take over. That urgent problem you discussed on Tuesday feels less urgent by Friday.`,
    ],
  },
  {
    q: `How do I cold call without sounding like every other salesperson?`,
    a: [
      `After earning attention with a pattern interrupt, name three specific problems you solve. In their language, not yours. Use the words they'd use when complaining to a colleague.`,
      `End with: 'I don't suppose any of those sound familiar to you?' Three problems is easy to remember. Emotional language beats corporate jargon. And the soft close makes it safe for them to engage.`,
    ],
  },
  {
    q: `How do I get a prospect to agree to a next step on a cold call?`,
    a: [
      `Test interest without asking for commitment. 'Hypothetically, if there was a way to [solve their problem] without [the painful alternative], that might be something you wouldn't be dead against exploring?'`,
      `'Hypothetically' signals zero commitment. 'Wouldn't be dead against' is deliberately soft. You wait for the yes before moving to the next step. If they hesitate, you probe — you don't push.`,
    ],
  },
  {
    q: `How do I know if a deal is actually going to close?`,
    a: [
      `Most qualification frameworks stop at budget and authority. That's box-ticking, not qualification.`,
      `Qualify across four areas: can they articulate the business case in their own words? Do you understand what solving this means for the person, not just the company? Have you mapped every person who touches the decision? And do you know what they'll do if they don't choose you?`,
    ],
  },
  {
    q: `What questions should I ask to qualify a deal properly?`,
    a: [
      `Qualify across four risk areas. Business case: can they quantify the cost of doing nothing? Future state: what does solving this mean for them personally?`,
      `Decision process: who decides, what criteria, and are you controlling the process? Alternatives: competitor, internal build, or doing nothing — each has a weakness you need to surface before they decide.`,
    ],
  },
  {
    q: `Why does my sales messaging not land with prospects?`,
    a: [
      `Your website says 'optimise revenue operations.' Your prospect says 'loads of proposals going out, not enough coming back signed.' Those are completely different sentences describing the same problem. The second one sells.`,
      `Voice of Customer research pulls the exact words your prospects use from call transcripts, review sites, and forums. When your sales materials use their own words, they feel understood. And people buy from people who understand their world.`,
    ],
  },
  {
    q: `Why do prospects lose trust between the first call and the proposal?`,
    a: [
      `Because your touchpoints don't match. If your cold call talks about 'eliminating guesswork' but your proposal talks about 'optimising revenue operations,' you've broken consistency. The prospect's brain has to do extra work to connect those two statements.`,
      `Use the same problems, the same outcome language, and the same proof points across every stage. When everything sounds like it came from the same person who understands their situation, trust compounds with every interaction.`,
    ],
  },
];

/* ─── SCHEMA INJECTION ─── */
function SchemaInjection() {
  useEffect(() => {
    // FAQ Schema — join paragraphs for schema text
    const allFaqs = [...salesFaqs, ...methodologyFaqs];
    const faqEntities = allFaqs
      .map(
        (faq) => `    {
      "@type": "Question",
      "name": ${JSON.stringify(faq.q)},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ${JSON.stringify(faq.a.join(" "))}
      }
    }`
      )
      .join(",\n");

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://revitk.com/sales-faq#faq",
  "mainEntity": [
${faqEntities}
  ]
}`;
    document.head.appendChild(faqScript);

    // Breadcrumb Schema
    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.text = `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://revitk.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sales FAQ",
      "item": "https://revitk.com/sales-faq"
    }
  ]
}`;
    document.head.appendChild(bcScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(bcScript);
    };
  }, []);
  return null;
}

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
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/offer"
            className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors"
          >
            The Programme
          </Link>
          <Link
            href="/sales-faq"
            className="text-[#C5A572] font-[family-name:var(--font-body)] text-sm font-medium"
          >
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
        <button
          className="md:hidden text-[#F5F0EB]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
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
      {menuOpen && (
        <div className="md:hidden bg-[#0F1923] border-t border-white/10 px-6 pb-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/offer"
            className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm"
            onClick={() => setMenuOpen(false)}
          >
            The Programme
          </Link>
          <Link
            href="/sales-faq"
            className="text-[#C5A572] font-[family-name:var(--font-body)] text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
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

/* ─── BREADCRUMB ─── */
function Breadcrumb() {
  return (
    <nav className="bg-[#0B1120] border-b border-white/5 py-3">
      <div className="max-w-6xl mx-auto px-6">
        <ol className="flex items-center gap-2 text-sm font-[family-name:var(--font-body)]">
          <li>
            <Link href="/" className="text-[#F5F0EB]/50 hover:text-[#C5A572]">
              Home
            </Link>
          </li>
          <li className="text-[#F5F0EB]/30">/</li>
          <li className="text-[#C5A572]">Sales FAQ</li>
        </ol>
      </div>
    </nav>
  );
}

/* ─── FAQ ACCORDION COMPONENT ─── */
function FAQAccordion({
  faqs,
}: {
  faqs: { q: string; a: string[] }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/10">
          <button
            className="w-full py-6 flex items-center justify-between text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white pr-4">
              {faq.q}
            </span>
            <span className="text-2xl text-[#C5A572] flex-shrink-0">
              {openIndex === i ? "\u2212" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-6 space-y-4">
              {faq.a.map((paragraph, j) => (
                <p
                  key={j}
                  className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-[#0B1120] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img
          src="/revitk-logo-white.png"
          alt="Revitk"
          className="h-10 w-auto opacity-50"
        />
        <div className="flex gap-8">
          <Link
            href="/privacy"
            className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]"
          >
            Terms & Conditions
          </Link>
          <a
            href="mailto:joe@revitk.com"
            className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]"
          >
            Contact Us
          </a>
        </div>
        <p className="text-[#F5F0EB]/30 text-xs">
          &copy; {new Date().getFullYear()} Revitk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ASSEMBLY ─── */
export default function SalesFAQ() {
  return (
    <>
      <SchemaInjection />
      <NavBar />
      <Breadcrumb />

      {/* Hero */}
      <section className="bg-[#0B1120] border-t-4 border-[#E63946]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Sales Problems{" "}
            <span className="italic" style={{ color: "#C5A572" }}>
              Answered
            </span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#F5F0EB]/80 max-w-3xl mx-auto mb-4">
            Practical answers to the questions B2B founders and sales leaders
            ask most. Every answer is grounded in the Sync Selling methodology
            and backed by results from 300+ founders.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-8" />
        </div>
      </section>

      {/* Sales Problems Section */}
      <section className="bg-[#0F1923]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Common Sales Problems
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/60 mb-12">
            The objections, stalls, and frustrations that cost B2B companies the
            most revenue.
          </p>
          <FAQAccordion faqs={salesFaqs} />
        </div>
      </section>

      {/* Scaling & Execution Section */}
      <section className="bg-[#0B1120]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Scaling & Execution
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/60 mb-12">
            How to build a repeatable sales process that doesn't depend on you.
          </p>
          <FAQAccordion faqs={methodologyFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1923] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-6">
            Still have questions? Let's talk.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/70 mb-8">
            Book a 30-minute qualification call. No obligation. If we can help,
            you'll know. If we can't, we'll tell you.
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

      <Footer />
    </>
  );
}
