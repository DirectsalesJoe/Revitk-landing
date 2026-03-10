/*
 * VENTURE COMMUNITY ACCELERATOR — Exclusive Programme Page
 * Hidden page at /venture — not linked from main navigation
 * Design: "Dark Institutional" — matches existing Revitk brand
 * Audience: Pre-revenue startups going for investment, building first sales motion
 */

import { IMAGES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Target,
  Crosshair,
  Handshake,
  CheckCircle2,
  Clock,
  Users,
  Zap,
  Bot,
  Rocket,
  TrendingUp,
  Shield,
  Quote,
} from 'lucide-react';

// ─── Reusable Components ───────────────────────────────────────────

function GoldDivider() {
  return <div className="w-full my-12 md:my-16 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(197,165,114,0.4), transparent)' }} />;
}

function PhaseLabel({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[#E63946] font-body text-sm font-semibold tracking-[0.2em] uppercase">
        Phase {number}
      </span>
      <div className="h-px flex-1 bg-[#C5A572]/30" />
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────

function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMAGES.heroBg})` }} />
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ backgroundColor: '#E63946' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,17,32,0.85), rgba(11,17,32,0.6), rgba(11,17,32,1))' }} />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        {/* Nav */}
        <div className="absolute top-0 left-0 right-0 py-6 px-4 md:px-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-body text-lg font-bold tracking-[0.15em] text-white uppercase">REVITK</span>
              <span style={{ color: 'rgba(197,165,114,0.6)' }}>|</span>
              <span className="font-body text-sm tracking-wide" style={{ color: 'rgba(197,165,114,0.8)' }}>The Sync Selling System</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mt-16 md:mt-0">
          {/* Exclusive badge */}
          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border" style={{ borderColor: 'rgba(197,165,114,0.3)', backgroundColor: 'rgba(197,165,114,0.08)' }}>
              <Shield className="w-4 h-4" style={{ color: '#C5A572' }} />
              <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: '#C5A572' }}>
                Exclusive for Venture Community Accelerator Members
              </span>
            </div>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.2s' }}>
            <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase mb-6" style={{ color: '#C5A572' }}>
              The Sync Selling System
            </p>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '0.4s' }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
              Build your first sales motion{' '}
              <span className="italic" style={{ color: '#C5A572' }}>before you run out of runway.</span>
            </h1>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.6s' }}>
            <p className="font-body text-lg md:text-xl max-w-2xl mb-6 leading-relaxed" style={{ color: 'rgba(245,240,235,0.8)' }}>
              A complete sales system — diagnosed, built, and coached into your startup. Over 90% off the standard programme. Normally £7,500–£15,000.
            </p>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.8s' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3" style={{ backgroundColor: 'rgba(230,57,70,0.15)', border: '1px solid rgba(230,57,70,0.3)' }}>
              <span className="font-body text-sm font-semibold text-white">Over 90% off</span>
              <span style={{ color: 'rgba(245,240,235,0.3)' }}>|</span>
              <span className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.7)' }}>£7,500+ of value included in your accelerator membership</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000" style={{ opacity: visible ? 1 : 0, transitionDelay: '1.5s' }}>
          <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: 'rgba(197,165,114,0.5)' }} />
        </div>
      </div>
    </section>
  );
}

// ─── The Problem Section ──────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#E63946' }}>
            The Reality
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight" style={{ color: '#0B1120' }}>
            You have raised the money.{' '}
            <span className="italic" style={{ color: '#E63946' }}>Now you need to sell.</span>
          </h2>

          <div className="space-y-6 mb-12">
            {[
              'You have been to trade shows, got contacts, followed up — but nothing converts.',
              'You are making it up as you go. No process. No playbook. No system.',
              'Investors want to see traction. You need pipeline, not just product.',
              'You cannot afford to hire a sales team yet — but you cannot afford to wait either.',
              'Every month without revenue is runway burning.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#E63946' }} />
                <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="p-6 border-l-2" style={{ backgroundColor: 'rgba(11,17,32,0.03)', borderColor: '#C5A572' }}>
            <p className="font-body text-base leading-relaxed" style={{ color: '#0B1120' }}>
              The Sync Selling Programme gives you the complete sales system that most startups spend 12–18 months figuring out on their own. You get it in 8 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Case Study Section ───────────────────────────────────────────

function CaseStudySection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#0F1923' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
            Case Study — Cohort 1
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            AddParts: From No Sales Process to{' '}
            <span className="italic" style={{ color: '#C5A572' }}>£320K Raise</span>
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245,240,235,0.7)' }}>
            AddParts joined the Sync Selling Programme as a pre-revenue startup in digital spare parts manufacturing. Here is what happened.
          </p>
        </div>

        {/* Video Embed */}
        <div className="max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://share.descript.com/embed/Umc4G5bdekp"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              style={{ border: '1px solid rgba(197,165,114,0.2)' }}
            />
          </div>
        </div>

        {/* Key Results */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 scroll-reveal">
          {[
            { metric: '£320,000', label: 'Raised from a single UK VC', icon: TrendingUp },
            { metric: '10%', label: 'Equity given — strong valuation', icon: Shield },
            { metric: '8 weeks', label: 'From no process to investor-ready', icon: Rocket },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border" style={{ backgroundColor: 'rgba(26,34,51,0.5)', borderColor: 'rgba(255,255,255,0.05)' }}>
              <item.icon className="w-8 h-8 mx-auto mb-4" style={{ color: '#C5A572' }} />
              <p className="font-display text-3xl md:text-4xl text-white mb-2">{item.metric}</p>
              <p className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.6)' }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="max-w-3xl mx-auto space-y-8 scroll-reveal">
          {[
            {
              quote: "We've already got an awful lot of momentum on that from your help.",
              context: 'On building their sales engine after the programme',
              speaker: 'Ben Smith, Co-Founder, AddParts',
            },
            {
              quote: "On virtually every customer, it's now become so much more clear. We could handle it this way, we could do it this way — and why we'd gone wrong in the first place.",
              context: 'On gaining clarity with difficult customers',
              speaker: 'Tom, Co-Founder, AddParts',
            },
            {
              quote: "I can certainly see what the difference is and I now feel like there's an awful lot more control.",
              context: 'On moving from accidental sales to a repeatable process',
              speaker: 'Tom, Co-Founder, AddParts',
            },
            {
              quote: "Not just telling us how we could go about it, but actually showing us the process and showing us how we could make it our own process in-house.",
              context: 'On the programme approach',
              speaker: 'Tom, Co-Founder, AddParts',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border-l-2" style={{ borderColor: '#C5A572', backgroundColor: 'rgba(26,34,51,0.3)' }}>
              <Quote className="w-5 h-5 mb-3" style={{ color: 'rgba(197,165,114,0.4)' }} />
              <p className="font-display text-lg md:text-xl text-white mb-3 italic leading-relaxed">
                "{item.quote}"
              </p>
              <p className="font-body text-xs" style={{ color: 'rgba(245,240,235,0.5)' }}>
                {item.context}
              </p>
              <p className="font-body text-sm font-semibold mt-1" style={{ color: '#C5A572' }}>
                — {item.speaker}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What You Get Section ─────────────────────────────────────────

function WhatYouGetSection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#E63946' }}>
            Everything Included
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B1120' }}>
            The complete programme.{' '}
            <span className="italic" style={{ color: '#E63946' }}>Over 90% off.</span>
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>
            Venture Community Accelerator members get access to the full Sync Selling Programme — the same system used by 300+ B2B founders generating £185M+ in revenue.
          </p>
        </div>

        {/* Phase 01 */}
        <div className="mb-20">
          <PhaseLabel number="01" />
          <h3 className="font-display text-2xl md:text-3xl mb-8" style={{ color: '#0B1120' }}>
            Clarity & Foundation
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The 90-Minute GTM Diagnostic Workshop',
                desc: 'One-on-one with Joe Milnes. 25+ years of B2B sales experience. 35 pressure points tested across your sales process. You walk out knowing exactly what to fix first.',
                outcome: 'Know where your deals will die before they start',
              },
              {
                title: 'The Diagnostic Report & Market Research',
                desc: '80+ hours of deep analysis. Buyer personas, voice of customer research, competitive landscape, objection mapping. All packed into one dossier.',
                outcome: 'Understand your buyers better than they understand themselves',
              },
              {
                title: 'Wireframed Sales Playbook',
                desc: 'Your complete sales process mapped out. Every stage, every script, every framework. Entry and exit criteria so you know when to move forward and when to walk away.',
                outcome: 'A repeatable process your team can follow from day one',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border scroll-reveal" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                    <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>{i + 1}</span>
                  </div>
                  <h4 className="font-display text-lg" style={{ color: '#0B1120' }}>{item.title}</h4>
                </div>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'rgba(11,17,32,0.7)' }}>{item.desc}</p>
                <div className="flex items-start gap-2 p-3" style={{ backgroundColor: 'rgba(230,57,70,0.05)' }}>
                  <Rocket className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                  <p className="font-body text-xs font-semibold" style={{ color: '#E63946' }}>{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 02 */}
        <div className="mb-20">
          <PhaseLabel number="02" />
          <h3 className="font-display text-2xl md:text-3xl mb-4" style={{ color: '#0B1120' }}>
            Sales Arsenal & Training
          </h3>
          <p className="font-body text-base mb-8 max-w-2xl leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>
            Nine playbooks covering every stage of the sales process. Built for your business, your market, your buyers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              { title: 'Discovery Call Playbook', desc: 'Questions that uncover the real cost of doing nothing. Build the business case needed to close.' },
              { title: 'Demo Framework', desc: 'The Pain-Proof-Tie-In framework. Lead with their problem, prove you solve it, tie it back to their goals.' },
              { title: 'The Proposal That Closes', desc: 'A 9-point template that sells for you when you are not in the room. Minimal customisation required.' },
              { title: 'Stakeholder Engagement Pack', desc: 'The one-page business case your champion uses to sell you internally. Risk plan and effort breakdown included.' },
              { title: 'Cold Email Bible', desc: '15+ templates, LinkedIn sequences, and AI prompts tuned to your messaging. Start conversations at scale.' },
              { title: 'Cold Calling Playbook', desc: 'The Pattern Interrupt Framework. Get past gatekeepers. Book the meeting in under 3 minutes.' },
              { title: 'Appointment Setting Playbook', desc: 'Multi-channel sequences combining email, phone, and LinkedIn. Follow-up cadences that get replies.' },
              { title: 'Lead Nurture Playbook', desc: 'Email and SMS sequences that keep you top of mind and re-engage cold leads when they are ready.' },
              { title: 'Objection Handling Toolkit', desc: 'The 12 most common objections and how to handle each one. Root cause questioning to find the real blocker.' },
            ].map((book, i) => (
              <div
                key={i}
                className="p-5 bg-white border transition-all duration-300 scroll-reveal"
                style={{ borderColor: 'rgba(11,17,32,0.1)' }}
              >
                <h4 className="font-display text-base mb-2" style={{ color: '#0B1120' }}>{book.title}</h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(11,17,32,0.6)' }}>{book.desc}</p>
              </div>
            ))}
          </div>

          {/* Training Videos + Masterclasses */}
          <div className="grid md:grid-cols-2 gap-6 scroll-reveal">
            <div className="p-6 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
              <Clock className="w-6 h-6 mb-3" style={{ color: '#E63946' }} />
              <h4 className="font-display text-lg mb-2" style={{ color: '#0B1120' }}>Training Video Library</h4>
              <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>Each playbook comes with a training video. Watch it, apply it, bring questions to the group call.</p>
            </div>
            <div className="p-6 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
              <Users className="w-6 h-6 mb-3" style={{ color: '#E63946' }} />
              <h4 className="font-display text-lg mb-2" style={{ color: '#0B1120' }}>20 Masterclass Webinars</h4>
              <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>20+ hours of tactical and strategic sales training. Discovery, demos, proposals, objection handling, and more.</p>
            </div>
          </div>
        </div>

        {/* Phase 03 */}
        <div className="mb-20">
          <PhaseLabel number="03" />
          <h3 className="font-display text-2xl md:text-3xl mb-4" style={{ color: '#0B1120' }}>
            Coaching & Implementation
          </h3>
          <p className="font-body text-base mb-8 max-w-2xl leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>
            We stay until the system runs without us. Live coaching, deal reviews, and direct support.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Unlimited Deal Reviews',
                desc: 'Send us your live deals. Get Loom video feedback within 48 hours. Discovery calls, demos, proposals, stuck deals — no limit.',
                icon: Target,
              },
              {
                title: 'Two Group Coaching Calls Per Week',
                desc: 'Tuesday Deal Clinics: bring your stuck deals, workshop them live. Thursday Tactical Training: deep-dive on one skill per week.',
                icon: Users,
              },
              {
                title: 'One-on-One Slack Support',
                desc: 'Direct access to Joe. Need a gut-check before a big call? Need a script tweaked? Same day response, usually within 2 hours.',
                icon: Zap,
              },
              {
                title: 'Two Strategic One-on-One Consultations',
                desc: '60-minute deep-dive sessions at Week 2 and Week 6. Pipeline review, process refinement, hiring strategy.',
                icon: Crosshair,
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border scroll-reveal" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <item.icon className="w-6 h-6 mb-3" style={{ color: '#E63946' }} />
                <h4 className="font-display text-lg mb-2" style={{ color: '#0B1120' }}>{item.title}</h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(11,17,32,0.6)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beta Access: AI Tools */}
        <div className="scroll-reveal">
          <div className="p-8 border" style={{ backgroundColor: 'rgba(11,17,32,0.03)', borderColor: 'rgba(197,165,114,0.3)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6" style={{ color: '#C5A572' }} />
              <p className="font-body text-sm tracking-[0.2em] uppercase" style={{ color: '#C5A572' }}>Beta Access Bonus</p>
            </div>
            <h4 className="font-display text-xl md:text-2xl mb-4" style={{ color: '#0B1120' }}>
              Sync Selling AI — Five Purpose-Built Sales Agents
            </h4>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.7)' }}>
              Trained on your voice, your brand, your customers, your solution, and the Sync Selling methodology. Like having a sales coach sit next to you on every deal.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {['Proposal Writer', 'Business Case Generator', 'Email Follow-Up Generator', 'Deal Coach', 'Copywriter'].map((tool, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                  <Bot className="w-4 h-4 flex-shrink-0" style={{ color: '#C5A572' }} />
                  <span className="font-body text-xs font-semibold" style={{ color: '#0B1120' }}>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why This Matters for Startups ────────────────────────────────

function WhyStartupsSection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
            Built for Where You Are
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Why this works for{' '}
            <span className="italic" style={{ color: '#C5A572' }}>early-stage startups.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-reveal">
          {[
            {
              title: 'You are the salesperson right now',
              desc: 'Most founders are selling without a system. This programme gives you the process, the scripts, and the confidence to convert — so you stop winging it.',
            },
            {
              title: 'Investors want traction, not just product',
              desc: 'A clear go-to-market strategy and sales process makes your pitch stronger. AddParts built theirs on the programme — then raised £320K.',
            },
            {
              title: 'You cannot afford to get sales wrong',
              desc: 'Every month without revenue is runway burning. This programme compresses 12–18 months of sales learning into 8 weeks.',
            },
            {
              title: 'You need a system your first hire can follow',
              desc: 'When you do hire a salesperson, they need a playbook — not "figure it out." This programme builds that playbook before you hire.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border" style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}>
              <h4 className="font-display text-lg text-white mb-3">{item.title}</h4>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Value Summary Section ────────────────────────────────────────

function ValueSummarySection() {
  const items = [
    { item: 'GTM Diagnostic Workshop (1-on-1)', value: '£1,500' },
    { item: 'Diagnostic Report & Market Research', value: '£3,000' },
    { item: 'Wireframed Sales Playbook', value: '£1,000' },
    { item: '9 Sales Playbooks (Discovery, Demo, Proposal, Cold Email, Cold Calling, Appointment Setting, Lead Nurture, Stakeholder, Objection Handling)', value: '£4,500' },
    { item: 'Training Video Library', value: '£500' },
    { item: '20 Masterclass Webinars (20+ hours)', value: '£1,000' },
    { item: 'Unlimited Deal Reviews (Loom video feedback)', value: '£1,500' },
    { item: '16 Group Coaching Calls', value: '£1,000' },
    { item: 'One-on-One Slack Support', value: '£500' },
    { item: '2x Strategic One-on-One Consultations', value: '£500' },
    { item: 'Beta Access: 5 AI Sales Agents', value: '£500' },
  ];

  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#E63946' }}>
              Your Accelerator Benefit
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B1120' }}>
              Over <span className="italic" style={{ color: '#E63946' }}>90% off</span> the standard programme.
            </h2>
          </div>

          {/* Value Stack Table */}
          <div className="bg-white border overflow-hidden mb-8" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
            <div className="p-4 flex justify-between items-center" style={{ backgroundColor: '#0B1120' }}>
              <span className="font-body text-sm font-semibold text-white tracking-wider uppercase">What You Get</span>
              <span className="font-body text-sm font-semibold tracking-wider uppercase" style={{ color: '#C5A572' }}>Standard Value</span>
            </div>
            {items.map((row, i) => (
              <div key={i} className="flex justify-between items-start p-4 border-b" style={{ borderColor: 'rgba(11,17,32,0.06)' }}>
                <div className="flex items-start gap-3 flex-1 pr-4">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                  <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{row.item}</span>
                </div>
                <span className="font-body text-sm font-semibold whitespace-nowrap" style={{ color: 'rgba(11,17,32,0.4)', textDecoration: 'line-through' }}>{row.value}</span>
              </div>
            ))}
            <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ backgroundColor: 'rgba(230,57,70,0.05)' }}>
              <div>
                <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.5)' }}>Total standard value</p>
                <p className="font-display text-2xl" style={{ color: '#0B1120', textDecoration: 'line-through', textDecorationColor: '#E63946' }}>£15,500+</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="font-body text-sm font-semibold" style={{ color: '#E63946' }}>Included with your Venture Community membership</p>
                <p className="font-body text-xs mt-1" style={{ color: 'rgba(11,17,32,0.5)' }}>Over 90% off — exclusive to accelerator members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Joe Section ────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#0F1923' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center scroll-reveal">
          <div className="md:col-span-2">
            <img src={IMAGES.joeHeadshot} alt="Joe Milnes" className="w-48 h-48 rounded-full object-cover mx-auto border-2" style={{ borderColor: 'rgba(197,165,114,0.3)' }} />
          </div>
          <div className="md:col-span-3">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
              Your Coach
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">Joe Milnes</h3>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'rgba(245,240,235,0.7)' }}>
              25 years in B2B sales. Took over a sales team with no pipeline, no playbook, and no process. Ten months later they were generating £1.2 million a month — including a £1M+ deal with oil and gas.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,235,0.7)' }}>
              Helped scale a business from £40M to £100M before exit. Coached 300+ founders across 60+ industries. Generated over £185M in client revenue.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: '300+', label: 'Founders coached' },
                { stat: '£185M+', label: 'Client revenue' },
                { stat: '60+', label: 'Industries' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-xl text-white">{item.stat}</p>
                  <p className="font-body text-xs" style={{ color: 'rgba(245,240,235,0.5)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-6" style={{ color: '#C5A572' }}>
            Exclusive for Venture Community Accelerator Members
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Ready to build your{' '}
            <span className="italic" style={{ color: '#C5A572' }}>sales engine?</span>
          </h2>
          <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,235,0.6)' }}>
            Book a call with Joe to get started. Mention your Venture Community membership to unlock the exclusive rate.
          </p>
          <a
            href="https://app.revitk.com/widget/bookings/syncselling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 font-body font-semibold text-sm tracking-wider uppercase text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#E63946' }}
          >
            Book Your Diagnostic Call
          </a>
          <p className="font-body text-xs mt-6" style={{ color: 'rgba(245,240,235,0.3)' }}>
            Limited spots available per cohort
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#0B1120', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-body text-sm font-bold tracking-[0.15em] text-white uppercase">REVITK</span>
            <span style={{ color: 'rgba(197,165,114,0.4)' }}>|</span>
            <span className="font-body text-xs" style={{ color: 'rgba(245,240,235,0.4)' }}>The Sync Selling System</span>
          </div>
          <p className="font-body text-xs" style={{ color: 'rgba(245,240,235,0.3)' }}>
            &copy; {new Date().getFullYear()} Revitk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────

export default function Venture() {
  const scrollRef = useScrollAnimation();
  return (
    <div ref={scrollRef} className="min-h-screen" style={{ backgroundColor: '#0B1120' }}>
      <HeroSection />
      <ProblemSection />
      <CaseStudySection />
      <WhatYouGetSection />
      <WhyStartupsSection />
      <ValueSummarySection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
