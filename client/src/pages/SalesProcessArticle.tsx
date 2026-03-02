import React, { useEffect } from 'react';

import { NavBar, Footer } from './NewHome';
import { Button } from '../components/ui/button';
import { Calendar, Clock, User, ArrowLeft, PlayCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

const SalesProcessArticle: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Build a Sales Process That Closes One in Two Prospects",
    "description": "A deep dive into the 5-stage framework that took a sales team from zero to £1.2M a month.",
    "image": "https://img.youtube.com/vi/r1wea1evlgk/maxresdefault.jpg",
    "author": {
      "@type": "Person",
      "name": "Joe Milnes",
      "url": "https://revitk.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Revitk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://revitk.com/logo.png"
      }
    },
    "datePublished": "2026-03-01",
    "video": {
      "@type": "VideoObject",
      "name": "How to Build a Sales Process That Closes One in Two Prospects",
      "description": "Joe Milnes walks through the 5-stage sales process framework.",
      "thumbnailUrl": "https://img.youtube.com/vi/r1wea1evlgk/maxresdefault.jpg",
      "uploadDate": "2026-03-01",
      "contentUrl": "https://youtu.be/r1wea1evlgk",
      "embedUrl": "https://www.youtube.com/embed/r1wea1evlgk"
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1923] text-[#F5F0EB] font-sans selection:bg-[#C5A572] selection:text-[#0F1923]">


      <NavBar />

      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#C5A572] mb-8">
            <Link to="/articles" className="hover:underline">Articles</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F5F0EB]/50">Building a Sales Process</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              How to Build a Sales Process That Closes One in Two Prospects
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#F5F0EB]/60 border-y border-[#C5A572]/20 py-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center text-[#C5A572]">
                  <User className="w-5 h-5" />
                </div>
                <span>By Joe Milnes</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C5A572]" />
                <span>1 March 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A572]" />
                <span>9 min read</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-[#F5F0EB]/80 prose-strong:text-white prose-a:text-[#C5A572] hover:prose-a:text-[#C5A572]/80 transition-colors">
            <p className="text-xl leading-relaxed mb-8 text-[#F5F0EB]">
              When I took over the sales team at Vohkus Academy, there was no pipeline. No playbook. No repeatable anything. Just a group of people making calls and hoping something would stick. Ten months later that team was generating £1.2 million a month. The product didn't change. The market didn't change. What changed was we installed a process.
            </p>

            <p className="mb-8">
              That same process went on to take the wider Vohkus business from £40 million to £100 million in revenue before their exit. After dealing with over 300 founders who are trying to break free of networking, word of mouth and referrals as their only source of revenue, the patterns are impossible to ignore. The ones who install a process scale. The ones who keep winging it stay stuck. Every time.
            </p>

            <p className="mb-8 font-bold text-white">So here it is. Five stages. No fluff.</p>

            <h2 className="text-3xl mt-16 mb-6">Most Founders Sell on Conviction Alone</h2>
            <p className="mb-6">
              If you started your business, chances are you closed your first few deals on pure product knowledge. Someone came through your network, you talked passionately about what you do, they bought. Brilliant. But then you tried going outbound. Cold emails. Ads. LinkedIn. And the same pitch that worked on warm referrals fell completely flat with strangers.
            </p>
            <p className="mb-6">
              There's a reason for that. Referrals come pre-loaded with trust. The prospect already believes you can deliver because someone they respect vouched for you. Cold traffic has zero trust. None. And no amount of expertise compensates for that gap if you haven't got a way to build credibility from scratch.
            </p>
            <p className="mb-6">
              This is where most founders get stuck. They try to hire a salesperson thinking that will fix it. Except the salesperson arrives, finds no process, no content, no structure, and fails. The founder blames the hire. Wastes thousands. Tries again. Same result.
            </p>

            <div className="bg-[#16222E] border-l-4 border-[#C5A572] p-8 my-12 italic text-xl text-white">
              "The hire was never the problem. The missing process was."
            </div>

            <h2 className="text-3xl mt-16 mb-6">Stage One: Start With Your Customers, Not Your Product</h2>
            <p className="mb-6">
              Before you write a single piece of copy or build a single slide deck, talk to the people who already pay you. This is the highest leverage activity a founder can do and almost nobody bothers.
            </p>
            <p className="mb-6">
              Get your best customers on a call. Ask them why they chose you. What were they struggling with before? What were they worried about when they were deciding whether to invest? What changed after working with you? What would they say to someone considering it now?
            </p>
            <p className="mb-6">
              You'll get two things from these conversations. First, <strong>language</strong>. The exact words your buyers use to describe their problems, which are almost certainly different from the words you use. Second, <strong>case studies</strong>. Real stories with real outcomes that you can put in front of future prospects as proof you can do the thing you say you can do.
            </p>
            <p className="mb-6">
              If you haven't got customers yet or you've only got a handful, run voice-of-the-customer research. Use deep research tools to understand what your target market is talking about, what frustrates them, what they've tried before, what their concerns are about solutions like yours. It won't replace actual customer interviews, but it gives you a foundation to build messaging on.
            </p>
            <p className="mb-6">
              There's a second piece to this stage that most founders miss entirely. You need a <strong>front-end offer</strong>. Something that lets a completely cold audience pay you a small amount for a genuinely useful result. Something you can over-deliver on without it costing you the earth. The magic of a good front-end offer is what happens after they buy it. By solving the problem your front-end addresses, you automatically create awareness of the bigger problem that your main offer solves. They experience a quick win, realise there's a deeper issue underneath, and now they're coming to you already trusting that you can deliver. You've compressed months of credibility-building into a single transaction.
            </p>
            <p className="mb-8">
              Most founders try to sell the big thing to cold traffic straight away. It rarely works because the trust isn't there yet. A front-end offer builds that trust with cash on the table, not just content. And once they've paid you once and got a result, the second purchase is infinitely easier.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Stage Two: Pick Your Channel and Commit</h2>
            <p className="mb-6">
              There are four ways to reach prospects. One-to-one when they know you, which is networking and referrals. One-to-one when they don't, which is cold calling, cold email, LinkedIn outreach. One-to-many paid, which is advertising. One-to-many organic, which is content.
            </p>
            <p className="mb-6">
              Each has trade-offs. Referrals are high-converting but impossible to scale predictably. Cold outreach is cheap but slow to build momentum. Paid ads are fast but expensive to learn. Organic content is free but takes months to compound.
            </p>
            <p className="mb-6">
              Pick the one that matches your situation right now. Not the one that sounds best in a podcast. If you're bootstrapped and have more time than money, you're doing outbound. If you've got budget and want speed, paid ads on Meta are producing results for B2B that most people don't expect. 72% of B2B decision-makers are active on Meta and Instagram. That number surprises people, but the data is clear.
            </p>
            <p className="mb-8">
              We've used most channels at different stages. Right now, Meta ads are our primary acquisition channel because the targeting is absurdly precise and the cost per qualified conversation is lower than anything else we've tested. But I've cold called for years and it works too. The channel matters less than the process you run once someone enters your world.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Stage Three: The Discovery Framework</h2>
            <p className="mb-6">
              This is where most sales fall apart. And it's where the biggest opportunity sits.
            </p>
            <p className="mb-6">
              Discovery is not a pitch meeting. You're not there to present your credentials or walk through your deck. If a prospect agrees to get on a call with you, the worst thing you can do is spend that time talking about yourself. They don't care about your logo wall or your founding story. They care about whether you can help them get what they want.
            </p>
            <p className="mb-6">
              And you can't know that until you understand three things: <strong>where they are now, where they want to get to, and what's stopping them from getting there on their own.</strong>
            </p>
            <p className="mb-6">
              That's it. Current state. Desired state. The gap between them. And whether there's enough motivation to close that gap.
            </p>
            <p className="mb-6">
              Now, I'll be honest. I've spent years working on this and I still find it challenging. Discovery is a skill that takes real practice. Some of the questions you need to ask feel uncomfortable, especially around money. Revenue numbers. Budget. What inaction is costing them. Founders in particular tend to shy away from those questions because it feels impolite.
            </p>
            <p className="mb-6">
              A technique I picked up from Thomas Freeze's Question Based Selling has been invaluable here. He calls them <strong>humbling disclaimers</strong>. Before asking anything that feels bold, you simply say "Do you mind if I ask?" That's it. Nine times out of ten the prospect says "Of course, go ahead." And the one time they push back, you haven't lost anything because you asked permission first.
            </p>
            <p className="mb-8">
              Think of it like being a dressmaker. You wouldn't ask someone their measurements at a dinner party. But if someone walks into your shop wanting a suit made, you'd be failing them if you didn't take precise measurements. Discovery works the same way. If you're there to diagnose whether you can help, asking direct questions isn't rude. It's your job.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Stage Four: Match Your Solution to Their Problem</h2>
            <p className="mb-6">
              Once you've done proper discovery, the next stage becomes almost mechanical. Whether you're building a proposal, running a demo, or presenting a recommendation, the content should be built entirely around what the prospect told you in the previous conversation.
            </p>
            <p className="mb-6">
              Don't demo the product. Demo the ability to solve their specific problem. Don't lead with your credentials. Lead with what you heard.
            </p>
            <p className="mb-6">
              The first pages of any proposal should reflect the prospect's world back to them. "We understand your business does this. You're trying to get here. Right now, this is stopping you. It's costing you this much every month you don't act. The rest of this document shows how we'd get you there." Simple. Everything after that becomes a logical next step rather than a hard sell.
            </p>
            <p className="mb-6">
              Back it up with relevant case studies. Not every case study you've got. The ones that match. If you're talking to a SaaS founder doing £2 million in revenue, don't show them the enterprise case study. Show them the founder at a similar stage who had a similar problem and got a specific result. Irrelevant proof does more damage than no proof at all.
            </p>
            <p className="mb-8">
              And here's the thing about closing that most people overcomplicate. If you've done the discovery properly and matched your solution to what they actually need, closing is just confirming there's no reason not to proceed. "Given what we've discussed, can you see anything missing from this?" No. "Is there any reason we wouldn't be able to get started?" No. "What would you suggest as appropriate next steps?" Let them tell you. They're in control. That's how you close without being a closer.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Stage Five: Automate the Bits That Don't Need You</h2>
            <p className="mb-6">
              Once your process is working and you can see what objections come up repeatedly, you start front-loading those answers into content that prospects consume before they ever speak to you.
            </p>
            <p className="mb-6">
              If prospects keep saying you're expensive, address it in your marketing. "We're a premium service. This isn't for founders looking for the cheapest option." If they keep comparing you to a competitor, create content explaining the difference. Not defensively. Factually. The earlier you handle an objection, the less power it has later in the conversation.
            </p>
            <p className="mb-6">
              Use automation to deliver social proof in the gap between booking a call and showing up. Testimonials, case studies, relevant content. Every touchpoint between first contact and first conversation should be building confidence that you can do what you claim.
            </p>
            <p className="mb-8">
              And record every call. We use Fathom because it's cheap and the transcripts are good enough to feed into AI tools for proposal drafting and follow-up notes. But whatever tool you pick, the recording habit alone will improve your sales. You'll catch things you missed. You'll spot patterns. You'll get better faster because you can actually review the tape instead of relying on memory.
            </p>

            <h2 className="text-3xl mt-16 mb-6">What Actually Matters</h2>
            <p className="mb-12">
              The framework is five stages: research your customers, pick your channel, run a proper discovery, match your solution to their problem, then automate the repetitive bits. That sequence has worked across 60+ industries and over £185 million in revenue. Not because it's clever or complicated. Because it forces you to understand the buyer before you try to sell to them. And that, honestly, is what 90% of founders skip.
            </p>

            {/* Video Section */}
            <div className="my-20 bg-[#16222E] border border-[#C5A572]/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 text-[#C5A572] mb-6">
                <PlayCircle className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm font-bold">Watch the Full Breakdown</span>
              </div>
              <h3 className="text-3xl font-serif text-white mb-8">Deep Dive: Building Your Sales Engine</h3>
              <div className="aspect-video rounded-xl overflow-hidden border border-[#C5A572]/30 shadow-2xl mb-8">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/r1wea1evlgk" 
                  title="How to Build a Sales Process" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-[#F5F0EB]/70 italic">
                This article is based on a deep dive from my YouTube channel where I walk through each stage with live examples.
              </p>
            </div>

            {/* CTA Section */}
            <div className="my-20 bg-gradient-to-br from-[#16222E] to-[#0F1923] border border-[#C5A572]/30 rounded-2xl p-10 text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Want This Built For Your Business?</h3>
              <p className="text-xl text-[#F5F0EB]/80 mb-10 max-w-2xl mx-auto">
                If you're a founder doing the sales yourself and you want a process that converts one in every two prospects you quote, let's talk.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="https://app.revitk.com/widget/bookings/syncselling" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#C5A572] hover:bg-[#D4B98B] text-[#0F1923] px-10 py-7 text-lg font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#C5A572]/20">
                    Book Your Free Consultation
                  </Button>
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F5F0EB]/50 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A572]" /> No results, no pay guarantee.
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <footer className="mt-20 pt-10 border-t border-[#C5A572]/20 flex justify-between items-center">
            <Link to="/articles" className="flex items-center gap-2 text-[#C5A572] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
            <div className="flex gap-4">
              {/* Social Share Placeholders */}
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SalesProcessArticle;
