import { useEffect, useRef } from "react";
import { Link } from "wouter";

import { NavBar, Footer } from "@/components/NavBar";
import { PixelCircuit } from "@/components/brand/Circuit";
import { BUTTON, Card, Section, T } from "@/components/brand/ui";

/* ─── VIDEO + FAQ DATA ─── */

interface VideoFAQ {
  question: string;
  wistiaId: string;
  answer: string[];
}

const videoFaqs: VideoFAQ[] = [
  {
    question: "Will This Work For My Business?",
    wistiaId: "qvwddctrhd",
    answer: [
      "Sync Selling works for B2B and B2C businesses that sell over the phone, on Zoom, or in person. Consultancies, agencies, service businesses, SaaS, technical, industrial, niche, and high-ticket. If you're selling to sophisticated buyers and deals involve conversations, this was built for you.",
      "It works whether you're a founder doing the sales yourself or managing a sales team.",
      "It probably isn't right if the majority of your revenue is e-commerce, you sell low-margin products, or you resell other people's products.",
      "To get the most from the programme you need to be having regular sales conversations, or be about to invest in lead generation or a salesperson. If you're about to spend money on leads or hiring, now is exactly the right time. Getting the process right first means neither gets wasted.",
      "We don't generate leads. We make your conversations convert. If you're not sure whether you're the right fit, book a call. You'll know within 10 minutes.",
    ],
  },
  {
    question: "What is Sync Selling?",
    wistiaId: "zfwiqkw1tc",
    answer: [
      "Most sales programmes teach you what to say on a call. That's 20% of the problem.",
      "The other 80% is everything your prospect sees, hears, and reads between conversations. The proposals. The follow-up emails. The assets they share internally. How decisions get made when you're not in the room.",
      "Sync Selling is the only sales methodology that covers everything you say, send, and show to a prospect — from first contact to signed contract. Built over 25 years. Refined with 300+ founders. £185M in client outcomes.",
      "What makes it different is the technology layer that runs underneath it. Sync Selling AI sits alongside every part of the process — the assets it builds, the coaching it delivers, the visibility it gives you. Every email, every proposal, every conversation. It tells you what's working, what's at risk, and exactly what to do next.",
      "A complete sales system backed by an AI companion that works with you permanently. Not just for 90 days.",
    ],
  },
  {
    question: "Who Are You and Why Should I Listen?",
    wistiaId: "w34zme05l6",
    answer: [
      "My name is Joe Milnes. I'm the founder of Revitk.",
      "I've spent 25 years obsessing over one problem: why deals don't close. Not leads. Not branding. Not strategy decks. The specific moment where a qualified prospect goes quiet, ghosts, stalls, or says they need to think about it.",
      "I've coached over 300 founders across B2B and B2C businesses. The clients I've worked with have collectively closed over £185M in revenue as a direct result of implementing the Sync Selling methodology.",
      "I'm not a keynote speaker who's never run a sales team. I've built sales processes from scratch, managed sales teams, and sat in the rooms where deals are won and lost.",
      "Everything I teach comes from what actually works. Not theory. Not a framework borrowed from a book. A methodology built deal by deal, client by client, over 25 years.",
    ],
  },
  {
    question: "What Do You Do?",
    wistiaId: "pn2kmih97k",
    answer: [
      "We build your complete sales system in 90 days.",
      "It starts with a 90-minute onboarding workshop where we extract everything we need. Then we build everything: scripts, discovery frameworks, proposal templates, follow-up sequences, objection handling playbooks. Built for your business, handed to you to review, yours to keep forever.",
      "You get weekly group coaching calls covering the Sync Selling methodology and deal reviews. Unlimited 1:1 Slack support — questions answered, copy reviewed, deals sense-checked. Unlimited deal reviews — bring any live deal at any point.",
      "Plus Sync Selling AI: a sales expert companion that sits alongside everything you do. Permanently. Open the dashboard and you see exactly where your pipeline is leaking. Which deals are at risk. What needs to happen next.",
      "At the end, every asset, every playbook, every framework is yours to keep and use forever — whether you continue working with us or not.",
    ],
  },
  {
    question: "How Much Does It Cost?",
    wistiaId: "3jud616vp2",
    answer: [
      "The first step is free. You get a full diagnostic workshop — normally £3,500 — at no charge. You see exactly how we think, where the bottlenecks are, and what your new process would look like before you spend a penny.",
      "If you want to continue, full programmes run for three months. The entry programme starts at £7,500. Bespoke team engagements run to £25,000 and above depending on scope.",
      "Every programme comes with a 30-day money-back guarantee. Your capital is not at risk.",
      "Most clients recover the cost within the first 60 days. Fixing one or two deal failures at their average deal value covers it. We'll walk through what that looks like for your specific numbers on the call.",
    ],
  },
  {
    question: "How Long Does It Take To Get Results?",
    wistiaId: "7w60usi946",
    answer: [
      "Week one: you'll have things in your hands you can use immediately. On live calls. On deals sitting stalled in your pipeline right now.",
      "Month one: your core sales assets are built and in use.",
      "Month two: most clients are already seeing a measurable difference in close rate and pipeline conversion.",
      "A 90-day process build. The assets exist at the end of it whether you continue working with us or not. Most clients describe month one as the first time their sales process has felt like a system rather than a guess.",
    ],
  },
  {
    question: "How Much Of My Time Would It Take?",
    wistiaId: "5jf0o04l74",
    answer: [
      "We've designed this so we do the heavy lifting.",
      "It starts with one 90-minute onboarding session. That single call, combined with any existing sales and marketing materials you have, gives us everything we need to build your process. We build it. We pass it to you to review. You make final tweaks. The build phase is done.",
      "After that, the programme runs around you. The weekly group calls are the backbone. Outside of those you have unlimited Slack access and deal reviews on demand.",
      "Some clients are heads-down and mostly self-sufficient, checking in when a deal needs a second opinion. Others want closer involvement throughout. The programme flexes to what you need.",
    ],
  },
  {
    question: "I've Tried Sales Training Before And It Didn't Work — Why Are You Different?",
    wistiaId: "w1yyc9hlrg",
    answer: [
      "Most sales training fails for the same reason every time. It focuses on the hardest thing to change: human behaviour. You attend a workshop. You feel motivated. Three weeks later you're back to doing it the way you always did. Nothing changed because nothing was actually built.",
      "Sync Selling doesn't rely on behaviour change. We build a process that does the work. You don't need to become a better closer. You don't need to get comfortable with pressure tactics. Your team doesn't need a personality overhaul.",
      "80% of your sales results come from the process you take a prospect through — not the ability of the person running it. We focus on the 80%. We build it once and it works whether you're having a good day or a bad one, whether it's you on the call or someone you hired last month.",
      "Clients start closing more within 30 days. Not because they've become better salespeople. Because the process they're running is better.",
    ],
  },
];

/* ─── WISTIA LOADER ─── */
function useWistia() {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const s = document.createElement("script");
    s.src = "https://fast.wistia.com/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);
}

/* ─── WISTIA VIDEO COMPONENT ─── */
function WistiaVideo({ mediaId }: { mediaId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    s.async = true;
    s.type = "module";
    document.head.appendChild(s);
  }, [mediaId]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-black"
      style={{ paddingTop: "56.25%" }}
    >
      <div
        className="absolute inset-0"
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${mediaId}" aspect="1.7777777777777777" player-color="1F3FBF" style="width:100%;height:100%;position:absolute;top:0;left:0;"></wistia-player>`,
        }}
      />
    </div>
  );
}

/* ─── INLINE VIDEO FAQ BLOCK ─── */
function VideoFAQBlock({ item }: { item: VideoFAQ }) {
  return (
    <div className="space-y-6">
      {/* Question heading */}
      <h2 className="text-2xl md:text-3xl leading-[1.12] font-extrabold tracking-[-0.02em] text-white text-balance">
        {item.question}
      </h2>

      {/* Video, then the written answer on the same sheet */}
      <Card className="overflow-hidden">
        <WistiaVideo mediaId={item.wistiaId} />

        {/* Written answer */}
        {item.answer.length > 0 && (
          <div className="px-6 py-7 md:px-9 md:py-8 space-y-4">
            {item.answer.map((p, j) => (
              <p
                key={j}
                className="text-base md:text-[17px] text-ss-muted-paper leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}


/* ─── HERO ─── */
function Hero() {
  const section = useRef<HTMLElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const lead = useRef<HTMLParagraphElement>(null);
  const words = useRef<HTMLDivElement>(null);
  return (
    <section ref={section} className="relative overflow-hidden bg-ss-ink">
      <PixelCircuit
        container={section}
        targets={[
          { ref: h1, line: 0 },
          { ref: lead, line: 0 },
        ]}
        keepClear={[words]}
      />
      <div ref={words} className="relative max-w-3xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-20 text-center">
        <h1 ref={h1} className={`${T.h1} mb-6`}>
          Should I Book A{" "}
          <span className={T.accent}>
            Call?
          </span>
        </h1>
        <p ref={lead} className={`${T.lead} max-w-2xl mx-auto mb-4`}>
          Of course you want to close more sales. But are we the right partner for you?
        </p>
        <p className={`${T.body} max-w-2xl mx-auto`}>
          Below is everything you need to know about Sync Selling. How we work, what it costs, and whether it will work for your business. Watch the videos. Read the answers. Then decide.
        </p>
      </div>
    </section>
  );
}

/* ─── CLIENT STORIES ───
 * Added to the live page in Manus on 11 Nov 2026 ("Rebrand call decision
 * resources") and carried over word for word, in the Sync Selling look. */
const clientVideos = [
  { name: "Jordan, FE Growth Partner", id: "wpge7ym6pc" },
  { name: "Vohkus", id: "h4akkgj8si" },
  { name: "Matěj Otýs", id: "iyot7g3u08" },
  { name: "Steve", id: "iu0mwb1pri" },
];

const reviewExcerpts = [
  {
    name: "Sean Longden",
    quote: "the attention to detail he applied across every part of our funnel made a big difference to our conversion.",
  },
  {
    name: "Aidan mc closkey",
    quote: "My conversations with customers have improved a lot and the sales conversion rate is steadily climbing.",
  },
  {
    name: "Matěj Otýs",
    quote: "Joe helped me build a process that makes that expertise a central part of how I sell.",
  },
];

function ClientStories() {
  return (
    <Section id="client-stories">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className={`${T.h2} mb-10 text-center`}>Hear from our clients.</h2>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {clientVideos.map(v => (
            <Card key={v.id} className="overflow-hidden">
              <WistiaVideo mediaId={v.id} />
              <div className="px-6 py-5">
                <h3 className="text-xl font-extrabold tracking-[-0.01em] text-ss-ink">{v.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <h2 className={`${T.h2} mt-20 mb-8 text-center`}>A few words from our clients</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reviewExcerpts.map(r => (
            <Card key={r.name} className="p-6 md:p-7 flex flex-col">
              <figure className="flex flex-col h-full">
                <div aria-label="5 out of 5 stars" className="text-lg tracking-[0.2em] text-ss-biro mb-4">
                  ★★★★★
                </div>
                <blockquote className="text-base md:text-[17px] text-ss-ink leading-relaxed mb-6">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-auto border-t border-ss-feint pt-4 font-bold text-ss-ink">
                  {r.name}
                  <span className="block text-xs font-normal mt-1 text-ss-muted-paper">Google review · excerpt</span>
                </figcaption>
              </figure>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── CTA ─── */
function FinalCTA() {
  const section = useRef<HTMLElement>(null);
  const h2 = useRef<HTMLHeadingElement>(null);
  const words = useRef<HTMLDivElement>(null);
  return (
    <section ref={section} className="relative overflow-hidden bg-ss-ink border-t border-ss-hairline">
      <PixelCircuit
        container={section}
        targets={[{ ref: h2, line: 0 }]}
        keepClear={[words]}
        seed={31}
        dust={60}
      />
      <div ref={words} className="relative max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 ref={h2} className={`${T.h2} mb-6`}>
          Ready to{" "}
          <span className={T.accent}>
            talk?
          </span>
        </h2>
        <p className={`${T.body} mb-4`}>
          Book your free strategy session. If we can help, you'll know. If we can't, we'll tell you.
        </p>
        <p className="text-sm text-ss-muted-ink mb-8">
          Or explore{" "}
          <Link href="/offer" className={T.linkOnInk}>
            the full programme
          </Link>{" "}
          to see exactly what's included.
        </p>
        <a
          href="https://book.revitk.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON}
        >
          Book Your Free Strategy Session
        </a>
      </div>
    </section>
  );
}

/* ─── PAGE ASSEMBLY ─── */
export default function Learn() {
  useWistia();

  useEffect(() => {
    // noindex — hidden page
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");

    document.title = "Should I Book A Call? — Revitk";

    return () => {
      meta?.setAttribute("content", "");
    };
  }, []);

  return (
    <>
      <NavBar resourcePage />

      {/* Hero */}
      <Hero />

      {/* Inline Video FAQ Sections */}
      <Section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="space-y-16 md:space-y-20">
            {videoFaqs.map((item, i) => (
              <VideoFAQBlock key={i} item={item} />
            ))}
          </div>
        </div>
      </Section>

      {/* Client stories */}
      <ClientStories />

      {/* CTA */}
      <FinalCTA />

      <Footer resourcePage />
    </>
  );
}
