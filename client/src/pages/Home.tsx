/*
 * DESIGN: "Dark Institutional" — Bain & Company Meets Rolls Royce
 * Colors: Navy #0F1923, Red #E63946, Gold #C5A572, Warm White #F5F0EB
 * Fonts: Playfair Display (display), DM Sans (body)
 * Tone: Alex Hormozi directness. Clarity over cleverness. Short sentences.
 * No CTAs. This is a presentation/send piece.
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
} from 'lucide-react';

// ─── Reusable Components ───────────────────────────────────────────

function GoldDivider() {
  return <div className="gold-divider w-full my-12 md:my-16" />;
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

function SectionImage({ src, alt, className = '', maxH = 'max-h-[500px]' }: { src: string; alt: string; className?: string; maxH?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm shadow-2xl border ${className}`} style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <img src={src} alt={alt} className={`w-full h-auto object-cover object-top ${maxH}`} loading="lazy" />
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
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${IMAGES.heroBg})` }} />
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ backgroundColor: '#E63946' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,17,32,0.85), rgba(11,17,32,0.6), rgba(11,17,32,1))' }} />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        {/* Nav */}
        <div className="absolute top-0 left-0 right-0 py-6 px-4 md:px-8">
          <div className="container mx-auto flex items-center gap-3">
            <span className="font-body text-lg font-bold tracking-[0.15em] text-white uppercase">REVITK</span>
            <span style={{ color: 'rgba(197,165,114,0.6)' }}>|</span>
            <span className="font-body text-sm tracking-wide" style={{ color: 'rgba(197,165,114,0.8)' }}>The Sync Selling System</span>
          </div>
        </div>

        <div className="max-w-4xl mt-16 md:mt-0">
          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.2s' }}>
            <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase mb-6" style={{ color: '#C5A572' }}>
              The Sync Selling System
            </p>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '0.4s' }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
              Double your close rate in 8 weeks{' '}
              <span className="italic" style={{ color: '#C5A572' }}>(and don't pay more than £1 until you get results).</span>
            </h1>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.6s' }}>
            <p className="font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: 'rgba(245,240,235,0.8)' }}>
              A complete sales system diagnosed, built, and coached into your team.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000" style={{ opacity: visible ? 1 : 0, transitionDelay: '1.5s' }}>
          <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: 'rgba(197,165,114,0.5)' }} />
        </div>
      </div>
    </section>
  );
}

// ─── Three-Phase Overview ──────────────────────────────────────────

function PhaseOverview() {
  const phases = [
    {
      number: '01',
      title: 'Clarity & Foundation',
      answer: 'You get absolute clarity on what is broken, what it is costing you, and the fastest path to more revenue.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Sales Arsenal & Training',
      answer: 'Every script, framework, and playbook your team needs. Built for your business, your market, your buyers.',
      icon: Crosshair,
    },
    {
      number: '03',
      title: 'Coaching & Implementation',
      answer: 'Live coaching, deal reviews, and direct support until the system runs without us.',
      icon: Handshake,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative grain-overlay" style={{ backgroundColor: '#0F1923' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
            The Programme
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Three phases. Each one builds on the last.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 stagger-children">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="group relative p-8 md:p-10 border transition-all duration-500 scroll-reveal"
              style={{ backgroundColor: 'rgba(26,34,51,0.5)', borderColor: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(197,165,114,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
            >
              <span className="absolute top-4 right-6 font-display text-7xl leading-none select-none" style={{ color: 'rgba(255,255,255,0.03)' }}>
                {phase.number}
              </span>
              <phase.icon className="w-8 h-8 mb-6" style={{ color: '#E63946' }} />
              <p className="font-body text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#C5A572' }}>
                Phase {phase.number}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-white mb-4">{phase.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.7)' }}>
                {phase.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Phase 1: Clarity & Foundation ─────────────────────────────────

function Phase1Section() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <PhaseLabel number="01" />

        {/* Intro */}
        <div className="mb-16 scroll-reveal">
          <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B1120' }}>
            Before we build anything, you get{' '}
            <span className="italic" style={{ color: '#E63946' }}>absolute clarity.</span>
          </h2>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>
            What is broken. What it is costing you. The fastest path to more revenue.
          </p>
        </div>

        {/* 1. The 90-Minute GTM Diagnostic Workshop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <div className="scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>1</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                The 90-Minute GTM Diagnostic Workshop
              </h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.7)' }}>
              One-on-one. 25+ years of experience. 35 pressure points tested across your entire sales and marketing process.
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Where deals are dying and why',
                'Which stage is bleeding revenue',
                'What your champions need to sell you internally',
                'The exact objections killing deals in rooms you are not in',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                  <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-base font-medium" style={{ color: '#0B1120' }}>
              You walk out knowing the three highest-leverage changes that will move the needle fastest.
            </p>
          </div>
          <div className="scroll-reveal">
            <SectionImage src={IMAGES.diagnosticWorkshopScene} alt="Premium consulting diagnostic workshop with professional scorecards" maxH="max-h-[420px]" />
          </div>
        </div>

        {/* 2. The Full Diagnostic Report + Market Research (merged) */}
        <div className="mb-20">
          <div className="scroll-reveal mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>2</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                The Diagnostic Report & Market Research
              </h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6 max-w-3xl" style={{ color: 'rgba(11,17,32,0.7)' }}>
              Absolute clarity with external-backed confidence. The diagnostic report gives you temperature gauges, pie charts, RAG status, and written recommendations across every area of your sales process. The market research is 80+ hours of deep analysis packed into one physical dossier.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Diagnostic Report */}
            <div className="scroll-reveal">
              <div className="p-6 bg-white border mb-4" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <h4 className="font-display text-lg mb-3" style={{ color: '#0B1120' }}>The Diagnostic Report</h4>
                <div className="space-y-2">
                  {[
                    'Scorecard showing red, amber, green across every area',
                    'Where you are losing revenue right now',
                    'What we are fixing first and why',
                    'The ROI of each fix',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                      <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.7)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <SectionImage src={IMAGES.diagnosticReport} alt="GTM Diagnostic Report with gauges, pie charts, and recommendations" />
            </div>

            {/* Market Research */}
            <div className="scroll-reveal">
              <div className="p-6 bg-white border mb-4" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <h4 className="font-display text-lg mb-3" style={{ color: '#0B1120' }}>The Market Research Dossier</h4>
                <div className="space-y-2">
                  {[
                    'Buyer personas with real demographic and psychographic detail',
                    'Voice of Customer analysis from forums, Reddit, LinkedIn',
                    'Competitive landscape teardown and positioning strategy',
                    'Objection mapping with pre-emption scripts',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                      <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.7)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <SectionImage src={IMAGES.researchDossier} alt="80+ hours of market research dossier with personas, VoC, competitive analysis" />
            </div>
          </div>
        </div>

        {/* 3. Wireframed Sales Playbook */}
        <div className="mb-8 scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
              <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>3</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
              Wireframed Sales Playbook
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed mb-6 max-w-3xl" style={{ color: 'rgba(11,17,32,0.7)' }}>
            Your complete sales process mapped out. Every stage: starting conversations, talking to customers, putting proposals together. Scripts, frameworks, and playbooks. Entry and exit criteria. An objective view of what deals should be in the pipeline, when, and where deal risk sits.
          </p>
          <div className="space-y-3 mb-8">
            {[
              'What happens at each stage of the sales process',
              'What assets are required: scripts, frameworks, proposals',
              'Entry and exit criteria so you know when to move forward and when to walk away',
              'An objective view of pipeline health and deal risk',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</span>
              </div>
            ))}
          </div>
          <SectionImage src={IMAGES.salesBlueprintPremium} alt="Strategic Sales Process Blueprint — modular architecture from Prospect to Close" className="max-w-5xl mx-auto" maxH="max-h-[520px]" />
        </div>
      </div>
    </section>
  );
}

// ─── Phase 2: Sales Arsenal & Training ────────────────────────────

function Phase2Section() {
  const playbooks = [
    {
      title: 'Discovery Call Playbook',
      desc: 'Word-for-word questions that uncover the real cost of doing nothing and help you build the business case needed to get the deal over the line.',
    },
    {
      title: 'Demo Framework',
      desc: 'Show prospects exactly why they need you. No feature dumping. The Pain-Proof-Tie-In framework: lead with their problem, prove you solve it, tie it back to their goals.',
    },
    {
      title: 'The Proposal That Closes',
      desc: 'A 9-point proposal template that requires minimal customisation and sells for you when you are not in the room.',
    },
    {
      title: 'Stakeholder Engagement Pack',
      desc: 'The one-page business case your champion uses to sell you internally. Technical FAQ, risk plan, and effort breakdown included.',
    },
    {
      title: 'Cold Email Bible',
      desc: '15+ cold email templates, LinkedIn outreach sequences, and AI email prompts tuned to your messaging. Everything you need to start conversations.',
    },
    {
      title: 'Cold Calling Playbook',
      desc: 'The Pattern Interrupt Framework. Get past gatekeepers. Earn 30 more seconds. Book the meeting in under 3 minutes.',
    },
    {
      title: 'Appointment Setting Playbook',
      desc: 'Turn cold leads into booked meetings. Multi-channel sequences combining email, phone, and LinkedIn with follow-up cadences that get replies.',
    },
    {
      title: 'Lead Nurture Playbook',
      desc: 'What to do with leads who are not ready to buy yet. Email and SMS sequences that keep you top of mind and re-engage cold leads.',
    },
    {
      title: 'Objection Handling Toolkit',
      desc: 'The 12 most common objections and how to handle each one. Root cause questioning to find the real objection and turn it into a close.',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative grain-overlay" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 scroll-reveal">
          <PhaseLabel number="02" />
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
            Every script. Every framework.{' '}
            <span className="italic" style={{ color: '#C5A572' }}>Every playbook.</span>
          </h2>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
            Built for your business, your market, your buyers. Nine playbooks covering every stage of the sales process.
          </p>
        </div>

        {/* Hero image of all playbooks */}
        <div className="mb-16 scroll-reveal">
          <SectionImage src={IMAGES.playbookCollection} alt="Complete collection of 9 sales playbooks" className="max-w-5xl mx-auto" />
        </div>

        {/* Playbook Grid - compact, benefit-driven, no "includes" */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {playbooks.map((book, i) => (
            <div
              key={i}
              className="group p-5 border transition-all duration-500 scroll-reveal"
              style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(197,165,114,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
            >
              <h3 className="font-display text-lg text-white mb-2">{book.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.65)' }}>
                {book.desc}
              </p>
            </div>
          ))}
        </div>

        <GoldDivider />

        {/* Training Video Library */}
        <div className="mb-20 scroll-reveal">
          <h3 className="font-display text-2xl md:text-3xl text-white mb-4 text-center">
            Training Video Library
          </h3>
          <p className="font-body text-base text-center mb-8 max-w-xl mx-auto" style={{ color: 'rgba(245,240,235,0.6)' }}>
            Each playbook comes with a training video. Watch it, apply it, bring questions to the group call.
          </p>
          <SectionImage src={IMAGES.trainingThumbnails} alt="Training video library" className="max-w-4xl mx-auto" />
        </div>

        <GoldDivider />

        {/* Bonus: 20 Masterclass Webinars */}
        <div className="mb-20 scroll-reveal">
          <div className="text-center mb-8">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#E63946' }}>
              Bonus
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              Access to 20 Masterclass Webinars
            </h3>
            <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(245,240,235,0.6)' }}>
              20+ hours of tactical and strategic sales training. Live group sessions covering discovery, demos, proposals, objection handling, and more.
            </p>
          </div>
          <SectionImage src={IMAGES.webinarMasterclass} alt="Group masterclass webinar" className="max-w-4xl mx-auto" />
        </div>

        <GoldDivider />

        {/* Bonus: AI Tools (Beta Access) */}
        <div className="scroll-reveal">
          <div className="text-center mb-8">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#E63946' }}>
              Beta Access Bonus
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4 flex items-center justify-center gap-3">
              <Bot className="w-8 h-8" style={{ color: '#C5A572' }} />
              AI Tools Library
            </h3>
            <p className="font-body text-base max-w-xl mx-auto mb-6" style={{ color: 'rgba(245,240,235,0.6)' }}>
              AI agents built to save you hours every week. Included as a bonus for programme members.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Business Case Generator', 'Pipeline Auditor', 'Cold Email Writer', 'Deal Coach', 'Proposal Doctor', 'Follow-Up Email Writer', 'Call Analyser'].map((tool, i) => (
                <span key={i} className="px-4 py-2 font-body text-sm border" style={{ color: 'rgba(245,240,235,0.8)', borderColor: 'rgba(197,165,114,0.2)', backgroundColor: 'rgba(26,34,51,0.4)' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <SectionImage src={IMAGES.aiDashboard} alt="AI Tools Dashboard with Business Case Generator, Pipeline Auditor, and Cold Email Writer" className="max-w-4xl mx-auto" />
        </div>
      </div>
    </section>
  );
}

// ─── Phase 3: Coaching & Implementation ────────────────────────────

function Phase3Section() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <div className="mb-20 scroll-reveal">
          <PhaseLabel number="03" />
          <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B1120' }}>
            We stay until it is{' '}
            <span className="italic" style={{ color: '#E63946' }}>embedded in your business.</span>
          </h2>
          <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>
            Most programmes hand you assets and disappear. We coach you through live deals until the system runs without us.
          </p>
        </div>

        {/* 1. Unlimited Deal Reviews */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>1</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>Unlimited Deal Reviews</h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.7)' }}>
              Send us your live deals. Get expert feedback within 48 hours.
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Discovery call recordings: where did you miss the real problem?',
                'Demo recordings: did you prove value or just show features?',
                'Proposals: will this close or collect dust?',
                'Stuck deals: what is the real blocker?',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                  <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 border-l-2" style={{ backgroundColor: 'rgba(11,17,32,0.05)', borderColor: '#E63946' }}>
              <p className="font-body text-sm" style={{ color: '#0B1120' }}>
                Loom video feedback. 5-10 minutes per review. Specific fixes, not vague advice. Scripts you can copy-paste into your next call.
              </p>
              <p className="font-body text-sm font-bold mt-2" style={{ color: '#E63946' }}>
                No limit. Send as many as you need.
              </p>
            </div>
          </div>
          <div className="scroll-reveal">
            <SectionImage src={IMAGES.loomReview} alt="Loom video deal review with Joe" />
          </div>
        </div>

        {/* 2. Group Coaching Calls */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 scroll-reveal">
            <SectionImage src={IMAGES.webinarMasterclass} alt="Group coaching call" />
          </div>
          <div className="order-1 lg:order-2 scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>2</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>Two Group Coaching Calls Per Week</h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.7)' }}>
              Live coaching. Real deals. Real feedback. 16 calls total.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <p className="font-body font-semibold text-xs tracking-wider uppercase mb-2" style={{ color: '#E63946' }}>Tuesday</p>
                <h4 className="font-display text-lg mb-2" style={{ color: '#0B1120' }}>Deal Clinics</h4>
                <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>Bring your stuck deals. We workshop them live. Walk away with your next move.</p>
              </div>
              <div className="p-5 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <p className="font-body font-semibold text-xs tracking-wider uppercase mb-2" style={{ color: '#E63946' }}>Thursday</p>
                <h4 className="font-display text-lg mb-2" style={{ color: '#0B1120' }}>Tactical Training</h4>
                <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>Deep-dive on one skill per week. Discovery, demos, proposals, objection handling.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Slack Support */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>3</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>One-on-One Slack Support</h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.7)' }}>
              Direct access to Joe. Need a gut-check before a big call? Message us. Need a script tweaked? Send it over. Stuck on a deal? We are there.
            </p>
            <div className="flex items-center gap-3 p-4 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
              <img src={IMAGES.joeHeadshot} alt="Joe" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-body text-sm font-semibold" style={{ color: '#0B1120' }}>Joe</p>
                <p className="font-body text-xs" style={{ color: 'rgba(11,17,32,0.5)' }}>Response time: same day, usually within 2 hours</p>
              </div>
            </div>
          </div>
          <div className="scroll-reveal">
            <SectionImage src={IMAGES.slackSupport} alt="Slack support conversation with Joe" />
          </div>
        </div>

        {/* 4. Strategic One-on-One Consultations */}
        <div className="scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
              <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>4</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>Two Strategic One-on-One Consultations</h3>
          </div>
          <p className="font-body text-base leading-relaxed mb-6 max-w-2xl" style={{ color: 'rgba(11,17,32,0.7)' }}>
            60-minute deep-dive sessions with Joe at Week 2 and Week 6.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Pipeline Review', desc: 'Which deals are real. Which are fantasy.' },
              { icon: Users, title: 'Hiring Strategy', desc: 'When to bring on a salesperson. What to look for.' },
              { icon: Zap, title: 'Process Refinement', desc: 'What is working. What is not.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <item.icon className="w-6 h-6 mb-3" style={{ color: '#E63946' }} />
                <h4 className="font-body font-semibold text-sm mb-2" style={{ color: '#0B1120' }}>{item.title}</h4>
                <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Section ───────────────────────────────────────────────

function PricingSection() {
  return (
    <section className="py-24 md:py-32 relative grain-overlay" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
            Programme Investment
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Two Packages. Pick the One That Fits.
          </h2>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(245,240,235,0.5)' }}>
            Limited to the first 20.
          </p>
        </div>

        {/* Two-tier pricing */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Essentials Package */}
          <div className="p-8 md:p-10 border" style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="font-body text-sm tracking-wider uppercase mb-4" style={{ color: 'rgba(245,240,235,0.5)' }}>Essentials Package</p>
            <div className="mb-2">
              <span className="font-display text-4xl md:text-5xl text-white">£7,500</span>
            </div>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(197,165,114,0.8)' }}>
              8-week support
            </p>
            <p className="font-body text-sm mb-6 leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              The core programme. Group coaching, up to 3 playbooks, and group Slack support.
            </p>
            <div className="space-y-3 mb-6">
              {[
                'GTM Diagnostic Workshop (one-on-one)',
                'Full Diagnostic Report + Market Research',
                'Wireframed Sales Playbook',
                'Up to 3 playbooks (Discovery, Proposal, + 1 more)',
                'Group coaching calls (16 total)',
                'Group Slack support',
                'Training video library',
                'Access to 20 masterclass webinars',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'rgba(245,240,235,0.4)' }} />
                  <span className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.7)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                'Done-for-you asset creation',
                'All 9 playbooks',
                'Unlimited deal reviews',
                'One-on-one Slack support',
                'Deal clinics',
                'Strategic one-on-one consultations',
                'AI tools beta access',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 opacity-40">
                  <span className="w-4 h-4 mt-0.5 flex-shrink-0 text-center font-body text-xs" style={{ color: 'rgba(245,240,235,0.3)' }}>&#x2715;</span>
                  <span className="font-body text-sm line-through" style={{ color: 'rgba(245,240,235,0.3)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Done-For-You Package */}
          <div className="relative p-8 md:p-10 border-2" style={{ background: 'linear-gradient(135deg, rgba(26,34,51,0.5), rgba(26,34,51,0.3))', borderColor: 'rgba(197,165,114,0.4)' }}>
            <div className="absolute -top-3 left-6 px-4 py-1" style={{ backgroundColor: '#E63946' }}>
              <span className="font-body text-xs font-bold text-white tracking-wider uppercase">Recommended</span>
            </div>
            <p className="font-body text-sm tracking-wider uppercase mb-4" style={{ color: '#C5A572' }}>Done-For-You Package</p>
            <div className="mb-2">
              <span className="font-display text-4xl md:text-5xl text-white">£15,000</span>
            </div>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(197,165,114,0.8)' }}>
              12-week support
            </p>
            <p className="font-body text-sm mb-6 leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              Everything built for you. Every asset created. Every playbook customised. Full hands-on support.
            </p>
            <div className="space-y-3">
              {[
                'Everything in the Essentials package',
                'All 9 playbooks, fully customised to your business',
                'Done-for-you asset creation (proposals, scripts, templates)',
                'Unlimited deal reviews with Loom feedback',
                'One-on-one Slack support with Joe directly',
                'Deal clinics: live workshopping of your stuck deals',
                'Two strategic one-on-one consultations (Week 2 + Week 6)',
                'Training video library',
                'Access to 20 masterclass webinars',
                'AI tools beta access',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C5A572' }} />
                  <span className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* Done-For-You Expanded Section */}
        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              What the Done-For-You Package Looks Like
            </h3>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              12 weeks of hands-on support. Everything built, customised, and coached into your team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { week: 'Week 1', title: 'Diagnostic + Blueprint', desc: 'GTM workshop, full diagnostic report, market research, wireframed sales playbook.' },
              { week: 'Weeks 2-4', title: 'Core Playbooks Built', desc: 'Discovery, Demo, and Proposal playbooks. Fully customised. Scripts, frameworks, templates.' },
              { week: 'Weeks 5-8', title: 'Full Arsenal Delivered', desc: 'Cold Email Bible, Cold Calling, Appointment Setting, Lead Nurture, Stakeholder, Objection Handling.' },
              { week: 'Weeks 9-12', title: 'Coaching + Refinement', desc: 'Live deal reviews, group coaching, strategic consultation. Refine everything based on real results.' },
            ].map((item, i) => (
              <div key={i} className="p-6 border" style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}>
                <p className="font-body text-xs tracking-wider uppercase mb-2" style={{ color: '#E63946' }}>{item.week}</p>
                <h4 className="font-display text-lg text-white mb-2">{item.title}</h4>
                <p className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.6)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Special Offer */}
          <div className="p-8 md:p-10 border-2 text-center" style={{ borderColor: 'rgba(197,165,114,0.4)', background: 'linear-gradient(135deg, rgba(26,34,51,0.5), rgba(26,34,51,0.3))' }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#E63946' }}>
              + For a Very Limited Time
            </p>
            <h4 className="font-display text-2xl md:text-3xl text-white mb-4">
              Get the full Done-For-You package for £7,500
            </h4>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,235,0.7)' }}>
              Everything in the £15,000 package. All 9 playbooks. All assets built for you. 12 weeks of hands-on support. One-on-one Slack. Deal clinics. Strategic consultations.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(197,165,114,0.9)' }}>
              This pricing is available until we release the beta-tested version of the AI tools. Once the tools are live, the price goes back to £15,000.
            </p>
          </div>
        </div>

        <GoldDivider />

        {/* How It Works */}
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h3 className="font-display text-2xl md:text-3xl text-white text-center mb-12">
            How It Works
          </h3>
          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Secure Your Spot for £1',
                desc: 'Register your card. You will not be charged the full amount until after Week 1.',
              },
              {
                num: '2',
                title: 'Week 1: The Diagnostic',
                desc: 'The 90-minute GTM workshop. The full diagnostic report. Access to Week 1 group calls. The wireframed sales playbook. Your blueprint for what to build.',
              },
              {
                num: '3',
                title: 'You Decide',
                desc: 'Not convinced? Walk away. No charge beyond the £1. You keep the diagnostic report. Convinced? We charge the remaining balance and start building your system.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E63946' }}>
                  <span className="font-body text-white font-bold">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-display text-xl text-white mb-2">{step.title}</h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border text-center" style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(197,165,114,0.2)' }}>
            <h4 className="font-display text-2xl text-white mb-3">You cannot lose.</h4>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              Either you get free insights that improve your sales process, or you get the full programme and solve the problem completely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ───────────────────────────────────────────────────

function FAQSection() {
  const faqs = [
    {
      q: 'What if I have tried sales training before?',
      a: 'This is not training. We build your entire sales system. Scripts, frameworks, playbooks, proposals. All customised to your business. Then we coach you through live deals until it sticks.',
    },
    {
      q: 'Will this work for my industry?',
      a: 'We have worked with 300+ founders across SaaS, professional services, tech, and consulting. The system is built around buyer psychology. Every deliverable is customised to your specific market, prospects, and competitive landscape.',
    },
    {
      q: 'What is the time commitment?',
      a: 'Two group calls per week (60 minutes each), plus your own implementation time. Most founders spend 3-5 hours per week. The ROI on that time is typically visible within the first 2-3 weeks.',
    },
    {
      q: 'What happens after the programme?',
      a: 'You keep everything. All playbooks, scripts, frameworks, templates, and training videos. Done-For-You members also get ongoing support options and continued access to the AI tools.',
    },
  ];

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12" style={{ color: '#0B1120' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-body font-semibold text-base pr-4" style={{ color: '#0B1120' }}>{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform flex-shrink-0" style={{ color: 'rgba(11,17,32,0.4)' }} />
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
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

export default function Home() {
  const scrollRef = useScrollAnimation();
  return (
    <div ref={scrollRef} className="min-h-screen" style={{ backgroundColor: '#0B1120' }}>
      <HeroSection />
      <PhaseOverview />
      <Phase1Section />
      <Phase2Section />
      <Phase3Section />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
