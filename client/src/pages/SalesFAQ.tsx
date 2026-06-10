import { useState, useEffect } from "react";
import { Link } from "wouter";
import { NavBar, Footer, BOOKING_URL } from "@/components/NavBar";

/* ─── FAQ DATA ─── */

type FAQ = { q: string; a: string[] };

interface Section {
  id: string;
  heading: string;
  faqs: FAQ[];
}

const sections: Section[] = [
  /* ── Section 1: Why are your deals stalling? ── */
  {
    id: "deals-stalling",
    heading: "Why are your deals stalling?",
    faqs: [
      {
        q: `Why do prospects say "we need to think about it" — and what does it actually mean?`,
        a: [
          `It's a certainty problem, not a timing problem.`,
          `When a prospect says they need to think about it, they don't have enough information to say yes. So they take the polite exit instead.`,
          `The real reason is almost never what they say it is. It's usually an unspoken concern — about risk, about internal buy-in, about whether the timing works for someone else in the business. They don't voice it because it feels confrontational. So they give you the safe answer and disappear.`,
          `The fix is to give them permission to tell you the real reason before they leave. Ask: "If you decided not to go ahead with this, what would the reason be?" That question surfaces the actual objection without making either side feel uncomfortable.`,
          `Once you know the real reason, you can address it. And before they go anywhere, lock in the next conversation. Deals without a date in the diary almost never come back.`,
        ],
      },
      {
        q: `Why are prospects going quiet after a great conversation?`,
        a: [
          `Because stakeholders you've never spoken to have concerns nobody addressed.`,
          `You had a brilliant call with your contact. They were engaged, enthusiastic, asked all the right questions. Then silence.`,
          `What happened: they took your proposal to someone else. The technical buyer worried about integration. The finance director wanted to understand the return. A department head saw it as a threat to their budget. None of those people were in the room with you. None of their concerns got addressed. The deal stalled in a conversation you weren't part of.`,
          `Ghosting is almost always a champion problem. Your contact believed in it. They just couldn't sell it internally because you hadn't equipped them to.`,
          `Before anyone takes anything upstairs, every angle needs to be covered. Every likely objection from every likely stakeholder needs an answer they can give confidently without you in the room.`,
        ],
      },
      {
        q: `Why is price coming up as an objection?`,
        a: [
          `They're not rejecting the price. They're telling you the value isn't clear enough yet.`,
          `Value has three components: the perceived risk of going ahead, the size of the gap between where they are and where they want to be, and the effort involved in getting there. When any one of those is fuzzy, price feels too high.`,
          `When a prospect has genuinely calculated what staying where they are costs them every month — using their own numbers, not yours — a clear solution to that problem stops feeling like a cost. It becomes the obvious move.`,
          `Price objections are a signal to go back to the problem, not to discount.`,
        ],
      },
    ],
  },

  /* ── Section 2: Why are deals getting lost before they start? ── */
  {
    id: "deals-lost-early",
    heading: "Why are deals getting lost before they start?",
    faqs: [
      {
        q: `Why do so many B2B deals get lost to indecision rather than competitors?`,
        a: [
          `44% of B2B deals are lost to indecision. The prospect doesn't choose a competitor. They choose to do nothing.`,
          `Doing nothing feels safe. Nobody gets criticised for maintaining the status quo. Change carries risk. Your solution, however good, requires someone to stick their neck out.`,
          `To shift that, three things need to happen. First, the cost of doing nothing has to be quantified in their numbers — not estimates, not industry averages, but the actual monthly cost of the problem sitting unsolved. Second, the person championing you internally needs a personal reason to move, not just a business case. Third, every stakeholder who touches the decision needs their concern addressed before they become a blocker.`,
          `If any one of those three is missing, the deal sits in limbo until something more urgent takes its place.`,
        ],
      },
      {
        q: `Why do deals die between meetings?`,
        a: [
          `Because there's no next step.`,
          `Most deals don't die because the prospect said no. They die in the gaps between meetings when other priorities take over. The urgent problem you discussed on Tuesday feels less urgent by Friday. A new crisis lands on their desk. Your deal gets deprioritised.`,
          `The only way to stop that is to never end any interaction without the next conversation locked in the diary.`,
          `After a cold call, book the discovery. After discovery, book the demo. After the demo, book the proposal walk-through. No exceptions. Every interaction ends with a committed next step or a clear reason why one isn't possible yet.`,
        ],
      },
      {
        q: `What are the three stages every sales process needs?`,
        a: [
          `Most founders build one or two parts and wonder why deals stall.`,
          `The Hook is how you start conversations with new prospects. It's the opening that earns attention and creates enough curiosity to get the next step.`,
          `The Wedge is your discovery process. This is where you uncover the real problems, quantify what they're costing, and build the business case that makes saying yes the obvious decision.`,
          `The Match is your proposals and sales assets — the materials that sell for you when you're not in the room. Proposals, follow-up sequences, the tools your champion uses to get internal buy-in.`,
          `All three need to work together. A strong Hook with a weak Wedge means you start conversations you can't convert. A strong Wedge with a weak Match means you do great discovery and still lose the deal on paper.`,
        ],
      },
    ],
  },

  /* ── Section 3: Why aren't you qualifying the right deals? ── */
  {
    id: "qualifying-deals",
    heading: "Why aren't you qualifying the right deals?",
    faqs: [
      {
        q: `Why do most qualification frameworks miss the point?`,
        a: [
          `Budget and authority are the starting point, not the finish line.`,
          `Most qualification stops there. You know they have money and someone can sign. That's box-ticking, not qualification.`,
          `Real qualification means knowing whether your prospect can articulate the business case in their own words. It means understanding what solving this means for the person, not just the company. It means mapping every person who touches the decision — not just your main contact. And it means knowing what they'll do if they don't choose you, because that tells you who you're really competing against.`,
          `A prospect who can't explain why they need this internally will never close. A prospect whose internal stakeholders you haven't mapped will ghost you. Qualification is about understanding the full picture, not just checking boxes.`,
        ],
      },
      {
        q: `What are the four risk areas you need to qualify across?`,
        a: [
          `Most deals that fall apart do so because one of four things was never properly established.`,
          `The business case: can the prospect quantify what doing nothing costs them? If they can't put a number on the problem, there's no urgency to solve it.`,
          `The future state: what does solving this mean for them personally, not just for the company? People make decisions emotionally and justify them commercially. You need both.`,
          `The decision process: who decides, on what criteria, and what does the process look like from here to a signature? If you don't know this, you're not in control of the deal.`,
          `The alternatives: are they comparing you to a competitor, an internal build, or doing nothing? Each one has a weakness. Each one needs to be surfaced before they make their decision, not after.`,
        ],
      },
    ],
  },

  /* ── Section 4: Why aren't your cold calls converting? ── */
  {
    id: "cold-calls",
    heading: "Why aren't your cold calls converting?",
    faqs: [
      {
        q: `How do you get a prospect's attention on a cold call?`,
        a: [
          `After earning attention with a pattern interrupt, name three specific problems you solve. In their language, not yours. Use the words they'd use when complaining to a colleague — not the polished version you'd put in a brochure.`,
          `Then ask: "I don't suppose any of those sound familiar to you?"`,
          `Three problems is easy to process. Emotional, specific language lands differently to corporate speak. And the soft close makes it easy for them to engage without feeling cornered. If none of the three land, you've also just learned something useful.`,
        ],
      },
      {
        q: `How do you test interest without asking for commitment too early?`,
        a: [
          `Ask hypothetically.`,
          `"Hypothetically, if there was a way to solve [their problem] without [the painful alternative they're stuck with] — that might be something you wouldn't be dead against exploring?"`,
          `Hypothetically signals zero commitment. "Wouldn't be dead against" is deliberately soft. It gives them room to say yes without feeling like they've agreed to anything.`,
          `You wait for the yes before moving forward. If they hesitate, you ask a question. You don't push.`,
        ],
      },
    ],
  },

  /* ── Section 5: Why isn't your messaging landing? ── */
  {
    id: "messaging",
    heading: "Why isn't your messaging landing?",
    faqs: [
      {
        q: `What is Voice of Customer and why does it matter for sales?`,
        a: [
          `Your website probably says something like "optimise revenue operations."`,
          `Your prospect tells their colleague: "loads of proposals going out, nothing coming back signed."`,
          `Same problem. Completely different sentences. One sells. One doesn't.`,
          `Voice of Customer research pulls the exact words your prospects use to describe their problems — from call recordings, review sites, forums, and conversations. When your sales materials use those words back at them, something shifts. They feel understood. They stop filtering what you're saying and start hearing it.`,
          `People buy from people who understand their world. The fastest way to prove you understand it is to use their words, not yours.`,
        ],
      },
      {
        q: `Why does inconsistent messaging lose deals?`,
        a: [
          `Because your prospect's brain has to work too hard.`,
          `If your cold call talks about "eliminating guesswork" but your proposal talks about "optimising revenue operations," you've introduced a gap. The prospect's brain has to connect those two statements. That extra work creates doubt.`,
          `The same problems, the same language, and the same proof points need to run across every stage — cold outreach, discovery, demo, proposal, follow-up. When everything sounds like it came from the same person who genuinely understands the situation, trust builds with every interaction.`,
          `Inconsistency signals that something doesn't add up. Consistency signals that you know exactly who you're talking to and what they need.`,
        ],
      },
    ],
  },
];

/* ─── SCHEMA + META INJECTION ─── */
function SchemaInjection() {
  useEffect(() => {
    // Meta tags
    document.title =
      "Sales FAQs - Why Deals Stall and How to Fix Them | Revitk";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Answers to the sales questions founders ask most. Why deals go quiet, why price comes up as an objection, how to qualify properly, and why messaging breaks down."
      );
    }

    // FAQ Schema
    const allFaqs = sections.flatMap((s) => s.faqs);
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
      "name": "Sales FAQs",
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
          <li className="text-[#C5A572]">Sales FAQs</li>
        </ol>
      </div>
    </nav>
  );
}

/* ─── FAQ ACCORDION COMPONENT ─── */
function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
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

/* ─── SECTION CTA ─── */
function SectionCTA() {
  return (
    <div className="mt-12 text-center">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors"
      >
        Book a Call
      </a>
    </div>
  );
}


/* ─── PAGE ASSEMBLY ─── */
export default function SalesFAQ() {
  const bgColors = ["#0F1923", "#0B1120"];

  return (
    <>
      <SchemaInjection />
      <NavBar />
      <Breadcrumb />

      {/* Hero */}
      <section className="bg-[#0B1120] border-t-4 border-[#E63946]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Sales{" "}
            <span className="italic" style={{ color: "#C5A572" }}>
              FAQs
            </span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#F5F0EB]/80 max-w-3xl mx-auto mb-4">
            Answers to the sales questions founders ask most. Why deals go
            quiet, why price comes up as an objection, how to qualify properly,
            and why messaging breaks down.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/50 max-w-2xl mx-auto">
            Every answer is grounded in the{" "}
            <Link href="/" className="text-[#C5A572] hover:underline">
              Sync Selling methodology
            </Link>{" "}
            and backed by results from 300+ founders.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-8" />
        </div>
      </section>

      {/* FAQ Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          style={{ backgroundColor: bgColors[idx % 2] }}
        >
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-12">
              {section.heading}
            </h2>
            <FAQAccordion faqs={section.faqs} />
            <SectionCTA />
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="bg-[#0F1923] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-6">
            Still have questions? Let's talk.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/70 mb-4">
            Book a 30-minute qualification call. No obligation. If we can help,
            you'll know. If we can't, we'll tell you.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#F5F0EB]/50 mb-8">
            Or explore{" "}
            <Link href="/offer" className="text-[#C5A572] hover:underline">
              the full programme
            </Link>{" "}
            to see how the{" "}
            <Link href="/" className="text-[#C5A572] hover:underline">
              Sync Selling system
            </Link>{" "}
            works.
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
