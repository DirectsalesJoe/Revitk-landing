import { useEffect, useRef } from "react";
import { Link } from "wouter";

import { NavBar, Footer, BOOKING_URL } from "@/components/NavBar";

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
      className="relative rounded-lg overflow-hidden bg-[#0F1923]"
      style={{ paddingTop: "56.25%" }}
    >
      <div
        className="absolute inset-0"
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${mediaId}" aspect="1.7777777777777777" style="width:100%;height:100%;position:absolute;top:0;left:0;"></wistia-player>`,
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
      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
        {item.question}
      </h2>

      {/* Video */}
      <WistiaVideo mediaId={item.wistiaId} />

      {/* Written answer */}
      {item.answer.length > 0 && (
        <div className="space-y-4">
          {item.answer.map((p, j) => (
            <p
              key={j}
              className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/70 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
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
      <NavBar />

      {/* Hero */}
      <section className="bg-[#0B1120] border-t-4 border-[#E63946]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Should I Book A{" "}
            <span className="italic" style={{ color: "#C5A572" }}>
              Call?
            </span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#F5F0EB]/80 max-w-2xl mx-auto mb-4">
            Of course you want to close more sales. But are we the right partner for you?
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/60 max-w-2xl mx-auto">
            Below is everything you need to know about Sync Selling. How we work, what it costs, and whether it will work for your business. Watch the videos. Read the answers. Then decide.
          </p>
        </div>
      </section>

      {/* Inline Video FAQ Sections */}
      <section className="bg-[#0F1923]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <div className="space-y-20">
            {videoFaqs.map((item, i) => (
              <VideoFAQBlock key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1120] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="italic" style={{ color: "#C5A572" }}>
              talk?
            </span>
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
            to see exactly what's included.
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
