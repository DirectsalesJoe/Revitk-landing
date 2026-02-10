/*
 * DESIGN: "Dark Institutional" — Bain & Company Meets Rolls Royce
 * Colors: Navy #0F1923, Red #E63946, Gold #C5A572, Warm White #F5F0EB
 * Fonts: Playfair Display (display), DM Sans (body)
 * Layout: Full-bleed alternating dark/white sections, asymmetric, editorial
 */

import { IMAGES, CTA_URL } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Target,
  Crosshair,
  Handshake,
  Users,
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
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

function SectionImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm shadow-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
}

function CTAButton({ children, variant = 'primary', className = '' }: { children: React.ReactNode; variant?: 'primary' | 'secondary'; className?: string }) {
  const base = variant === 'primary'
    ? 'bg-[#E63946] hover:bg-[#E63946]/90 text-white'
    : 'bg-transparent border-2 border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0B1120]';
  return (
    <a
      href={CTA_URL}
      className={`inline-flex items-center gap-2 px-8 py-4 font-body font-semibold text-sm tracking-wider uppercase transition-all duration-300 ${base} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      {/* Red top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ backgroundColor: '#E63946' }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,17,32,0.8), rgba(11,17,32,0.6), rgba(11,17,32,1))' }} />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        {/* Nav bar */}
        <div className="absolute top-0 left-0 right-0 py-6 px-4 md:px-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-body text-lg font-bold tracking-[0.15em] text-white uppercase">REVITK</span>
              <span style={{ color: 'rgba(197,165,114,0.6)' }}>|</span>
              <span className="font-body text-sm tracking-wide" style={{ color: 'rgba(197,165,114,0.8)' }}>The Sync Selling System</span>
            </div>
            <a
              href={CTA_URL}
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-white font-body text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#E63946' }}
            >
              Book Your Call
            </a>
          </div>
        </div>

        <div className="max-w-4xl mt-16 md:mt-0">
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.2s',
            }}
          >
            <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase mb-6" style={{ color: '#C5A572' }}>
              The Sync Selling System
            </p>
          </div>

          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.4s',
            }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
              Every Sales Bottleneck{' '}
              <span className="italic" style={{ color: '#C5A572' }}>Solved</span>{' '}
              in 8 Weeks
            </h1>
          </div>

          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.6s',
            }}
          >
            <p className="font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: 'rgba(245,240,235,0.8)' }}>
              Built for your business. No generic templates. No fill-in-the-blanks.
              Your complete sales system — from diagnostic to close.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.8s',
            }}
          >
            <CTAButton>Book Your Qualification Call</CTAButton>
            <CTAButton variant="secondary">See What's Included</CTAButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '1.5s' }}
        >
          <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: 'rgba(197,165,114,0.5)' }} />
        </div>
      </div>
    </section>
  );
}

// ─── Three-Phase Overview ──────────────────────────────────────────

function PhaseOverview() {
  const phases: Array<{number: string; title: string; question: string; answer: string; icon: React.ComponentType<{className?: string; style?: React.CSSProperties}>}> = [
    {
      number: '01',
      title: 'Clarity & Foundation',
      question: '"Do I even know what\'s broken?"',
      answer: 'Without clarity, you\'re guessing. We give you absolute clarity before anything else.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Sales Arsenal & Training',
      question: '"Will I know what to do?"',
      answer: 'Every script, every framework, every playbook — built for your business. No generic templates.',
      icon: Crosshair,
    },
    {
      number: '03',
      title: 'Coaching & Implementation',
      question: '"Will I actually execute this?"',
      answer: 'We don\'t leave you to figure it out. We coach, review, and workshop your live deals until it\'s embedded.',
      icon: Handshake,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative grain-overlay" style={{ backgroundColor: '#0F1923' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <div className="text-center mb-20 scroll-reveal">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
              The Programme
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Three Phases. One System.
            </h2>
            <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: 'rgba(245,240,235,0.6)' }}>
              Each phase answers the question you're asking — and builds on the last.
            </p>
          </div>
        </div>

        <div>
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
                <h3 className="font-display text-xl md:text-2xl text-white mb-4">
                  {phase.title}
                </h3>
                <p className="font-body text-sm italic mb-4" style={{ color: 'rgba(245,240,235,0.5)' }}>
                  {phase.question}
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.7)' }}>
                  {phase.answer}
                </p>
              </div>
            ))}
          </div>
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
        <div>
          <div >
            <PhaseLabel number="01" />
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B1120' }}>
                  Without clarity, you're{' '}
                  <span className="italic" style={{ color: '#E63946' }}>just guessing.</span>
                </h2>
                <p className="font-body text-lg leading-relaxed mb-8" style={{ color: 'rgba(11,17,32,0.7)' }}>
                  Before we build anything, we give you absolute clarity on what's broken,
                  what's working, and the fastest path to more revenue.
                </p>
              </div>
              <div className="lg:col-span-2 flex items-start justify-end">
                <span className="font-display text-[10rem] md:text-[14rem] leading-none select-none" style={{ color: 'rgba(11,17,32,0.04)' }}>
                  01
                </span>
              </div>
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* Deliverable 1: GTM Diagnostic */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                  <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>1</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                  The 90-Minute GTM Diagnostic Workshop
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.6)' }}>
                25+ years of experience. 35 pressure points tested across your entire sales and marketing process. This isn't a generic audit.
              </p>
              <div className="space-y-3">
                {[
                  'Where deals are dying (and why)',
                  'Which stage is bleeding revenue',
                  'What your champions need to sell you internally',
                  'The exact objections killing deals in rooms you\'re not in',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                    <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-base font-medium mt-6 pl-4 border-l-2" style={{ color: 'rgba(11,17,32,0.9)', borderColor: '#C5A572' }}>
                You walk out knowing the three highest-leverage changes that will move the needle fastest.
              </p>
            </div>
            <SectionImage
              src={IMAGES.diagnosticScorecard}
              alt="GTM Diagnostic Scorecard showing Hook, Wedge, Match assessment"
            />
          </div>
        </div>

        {/* Deliverable 2: Full Diagnostic Report */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <SectionImage
                src={IMAGES.salesPlaybookFlowchart}
                alt="Strategic Sales Process Blueprint showing Hook, Wedge, Match flow"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                  <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>2</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                  The Full Diagnostic Report
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.6)' }}>
                McKinsey-level output. Scorecard showing red/amber/green across every area of your sales process.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { label: 'Hook', desc: 'Are you attracting the right leads?' },
                  { label: 'Wedge', desc: 'Are you uncovering cost of inaction?' },
                  { label: 'Match', desc: 'Are your proposals closing or collecting dust?' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-body font-bold text-xs tracking-wider uppercase mt-1 w-14 flex-shrink-0" style={{ color: '#E63946' }}>{item.label}</span>
                    <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.7)' }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deliverable 3: Market Research */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                  <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>3</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                  80+ Hours of Market Research
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.6)' }}>
                We don't guess what your prospects care about. We know.
              </p>
              <div className="space-y-3">
                {[
                  'Voice of Customer analysis — the exact words they use when describing their pain',
                  'Competitive landscape teardown — how to position against every alternative',
                  'Objection mapping — every reason they say "no" and how to pre-empt it',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                    <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <SectionImage
              src={IMAGES.marketResearchCover}
              alt="Voice of Customer Analysis report cover"
            />
          </div>
        </div>

        {/* Deliverable 4: Wireframed Sales Playbook */}
        <div>
          <div >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>4</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                Wireframed Sales Playbook
              </h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6 max-w-2xl" style={{ color: 'rgba(11,17,32,0.6)' }}>
              Your complete sales process mapped. Every stage. Every asset you need. Every transition point. This is your blueprint for what to build.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Hook → Wedge → Match', desc: 'What happens at each stage' },
                { title: 'Scripts & Frameworks', desc: 'What assets are required' },
                { title: 'Exit Criteria', desc: 'When to move forward, when to walk away' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border" style={{ borderColor: 'rgba(11,17,32,0.1)' }}>
                  <h4 className="font-body font-semibold text-sm mb-2" style={{ color: '#0B1120' }}>{item.title}</h4>
                  <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Phase 2: Sales Arsenal & Training ─────────────────────────────

function Phase2Section() {
  const playbooks = [
    {
      title: 'The Discovery Call Playbook',
      image: IMAGES.discoveryPlaybook,
      points: [
        'Word-for-word questions that uncover cost of inaction',
        'The framework for going "below the waterline"',
        'How to qualify in 15 minutes or walk away from bad fits',
      ],
      includes: 'Physical playbook (40+ pages) · Training video (45 mins) · Live coaching session',
    },
    {
      title: 'The Demo Framework & Playbook',
      image: IMAGES.demoPlaybook,
      points: [
        'The Pain → Proof → Tie-In structure',
        'How to demo their solution (not your product)',
        'Scripts for handling objections mid-demo',
      ],
      includes: 'Physical playbook (35+ pages) · Training video (40 mins) · Demo script templates',
    },
    {
      title: 'The Proposal That Closes',
      image: IMAGES.proposalPlaybook,
      points: [
        'The 9-checkpoint proposal structure',
        'Return on Effort calculator (not just ROI)',
        'Champion enablement assets for the CFO',
      ],
      includes: 'Proposal template · One-page business case · Training video (30 mins)',
    },
    {
      title: 'Stakeholder Engagement Pack',
      image: IMAGES.stakeholderPlaybook,
      points: [
        'One-page business case your champion uses internally',
        'Technical FAQ (pre-empts IT pushback)',
        'Risk mitigation plan & effort breakdown',
      ],
      includes: 'Ready-to-send templates · Customisation guide · Training video (20 mins)',
    },
    {
      title: 'Hook Scripts & Frameworks',
      image: IMAGES.hookScriptsPlaybook,
      points: [
        'Cold email templates (15+ variations)',
        'Cold call scripts (The Pattern Interrupt Framework)',
        'LinkedIn outreach sequences & pre-meeting nurture',
      ],
      includes: 'Script library · AI email writing prompts · Training video (25 mins)',
    },
    {
      title: 'Objection Handling Toolkit',
      image: IMAGES.objectionPlaybook,
      points: [
        'The 12 most common objections (and how to handle them)',
        'Root cause questioning (understanding the real objection)',
        'How to turn objections into closing opportunities',
      ],
      includes: 'Objection scripts · Training video (30 mins)',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative grain-overlay" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <div className="mb-20 scroll-reveal">
            <PhaseLabel number="02" />
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
              Every script. Every framework.{' '}
              <span className="italic" style={{ color: '#C5A572' }}>Every playbook.</span>
            </h2>
            <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              No generic templates. No "fill in the blanks." This is your complete sales system — built for your business.
            </p>
          </div>
        </div>

        {/* Playbook Grid */}
        <div>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {playbooks.map((book, i) => (
              <div
                key={i}
                className="group border overflow-hidden transition-all duration-500"
                style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(197,165,114,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl md:text-2xl text-white mb-4">
                    {book.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {book.points.map((point, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                        <span className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.7)' }}>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p className="font-body text-xs tracking-wide" style={{ color: 'rgba(197,165,114,0.7)' }}>
                      <span className="font-semibold" style={{ color: '#C5A572' }}>Includes:</span> {book.includes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Videos Grid */}
        <div>
          <div className="mb-20">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-8 text-center">
              Training Video Library
            </h3>
            <SectionImage
              src={IMAGES.trainingThumbnails}
              alt="Training video library with 6 courses"
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        {/* The Vault - AI Tools */}
        <div>
          <div >
            <div className="text-center mb-8">
              <p className="font-body text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#E63946' }}>
                Bonus
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                The Vault — AI Tools <span style={{ color: '#E63946' }}>(Beta Access)</span>
              </h3>
              <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(245,240,235,0.6)' }}>
                Access to all Sync Selling masterclasses, weekly group coaching calls, and our AI tools library.
              </p>
            </div>
            <SectionImage
              src={IMAGES.aiDashboard}
              alt="The Vault AI Tools Dashboard"
              className="max-w-4xl mx-auto"
            />
          </div>
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
        <div>
          <div className="mb-20 scroll-reveal">
            <PhaseLabel number="03" />
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight" style={{ color: '#0B1120' }}>
              We don't leave you to{' '}
              <span className="italic" style={{ color: '#E63946' }}>figure it out.</span>
            </h2>
            <p className="font-body text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(11,17,32,0.7)' }}>
              Most programmes dump assets on you and disappear. We stay until it's embedded in your business.
            </p>
          </div>
        </div>

        {/* Unlimited Deal Reviews */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                  <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>1</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                  Unlimited Deal Reviews
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.6)' }}>
                Send us your live deals. Get expert feedback within 48 hours.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Discovery call recordings — where did you miss cost of inaction?',
                  'Demo recordings — did you prove value or feature-dump?',
                  'Proposals — will this close or collect dust?',
                  'Stuck deals — what\'s the real blocker?',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                    <span className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-l-2" style={{ backgroundColor: 'rgba(11,17,32,0.05)', borderColor: '#E63946' }}>
                <p className="font-body text-sm font-medium" style={{ color: '#0B1120' }}>
                  Loom video feedback (5-10 mins per review). Specific fixes, not vague advice. Scripts you can copy-paste.
                </p>
                <p className="font-body text-sm font-bold mt-2" style={{ color: '#E63946' }}>
                  No limit. Send as many as you need.
                </p>
              </div>
            </div>
            <SectionImage
              src={IMAGES.loomReview}
              alt="Loom video deal review with annotations"
            />
          </div>
        </div>

        {/* Group Coaching Calls */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <SectionImage
                src={IMAGES.coachingCall}
                alt="Group coaching call with participants and shared dashboard"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                  <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>2</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                  Two Group Coaching Calls Per Week
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.6)' }}>
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
                  <p className="font-body text-sm" style={{ color: 'rgba(11,17,32,0.6)' }}>Deep-dive on one skill per week: Discovery, Demo, Proposal, Objection handling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slack Support */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                  <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>3</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                  One-on-One Slack Support
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(11,17,32,0.6)' }}>
                Direct access to Joe. Need a gut-check before a big call? Message us. Need a script tweaked? Send it over. Stuck on a deal? We've got you.
              </p>
              <div className="flex items-center gap-3 p-4 border-l-2" style={{ backgroundColor: 'rgba(11,17,32,0.05)', borderColor: '#C5A572' }}>
                <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#C5A572' }} />
                <p className="font-body text-sm font-medium" style={{ color: '#0B1120' }}>
                  Response time: Same day (usually within 2 hours).
                </p>
              </div>
            </div>
            <SectionImage
              src={IMAGES.slackSupport}
              alt="Slack support conversation with actionable advice"
            />
          </div>
        </div>

        {/* Strategic Consultations */}
        <div>
          <div >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}>
                <span className="font-body font-bold text-sm" style={{ color: '#E63946' }}>4</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl" style={{ color: '#0B1120' }}>
                Two Strategic One-on-One Consultations
              </h3>
            </div>
            <p className="font-body text-base leading-relaxed mb-6 max-w-2xl" style={{ color: 'rgba(11,17,32,0.6)' }}>
              60-minute deep-dive sessions with Joe at Week 2 and Week 6.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Target, title: 'Pipeline Review', desc: 'Which deals are real, which are fantasy' },
                { icon: Users, title: 'Hiring Strategy', desc: 'When to bring on a salesperson, what to look for' },
                { icon: Zap, title: 'Process Refinement', desc: 'What\'s working, what\'s not' },
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
      </div>
    </section>
  );
}

// ─── Pricing Section ───────────────────────────────────────────────

function PricingSection() {
  return (
    <section className="py-24 md:py-32 relative grain-overlay" id="book-call" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <div className="text-center mb-16 scroll-reveal">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
              Programme Investment
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Founding Member Offer
            </h2>
          </div>
        </div>

        <div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {/* Standard Price */}
            <div className="p-8 md:p-10 border opacity-60" style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}>
              <p className="font-body text-sm tracking-wider uppercase mb-4" style={{ color: 'rgba(245,240,235,0.5)' }}>Standard Programme</p>
              <div className="mb-6">
                <span className="font-display text-4xl md:text-5xl line-through" style={{ color: 'rgba(245,240,235,0.4)' }}>£15,000</span>
              </div>
              <p className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.4)' }}>
                Full programme price after founding cohort closes.
              </p>
            </div>

            {/* Founding Member Price */}
            <div className="relative p-8 md:p-10 border-2" style={{ background: 'linear-gradient(135deg, rgba(26,34,51,0.5), rgba(26,34,51,0.3))', borderColor: 'rgba(197,165,114,0.4)' }}>
              <div className="absolute -top-4 right-6">
                <img src={IMAGES.foundingBadge} alt="Founding Member Badge" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-body text-sm tracking-wider uppercase mb-4" style={{ color: '#C5A572' }}>Founding Member</p>
              <div className="mb-6">
                <span className="font-display text-4xl md:text-5xl text-white">£7,500</span>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  'Lifetime beta access to all AI tools',
                  'Locked-in pricing on ongoing support (£400/month)',
                  'First access to new playbooks & frameworks',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C5A572' }} />
                    <span className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 border" style={{ backgroundColor: 'rgba(230,57,70,0.1)', borderColor: 'rgba(230,57,70,0.2)' }}>
                <p className="font-body text-sm font-semibold text-center" style={{ color: '#E63946' }}>
                  Only 3 spots remaining
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="font-display text-2xl text-white mb-4">Why This Price Won't Last</h3>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,235,0.6)' }}>
              We're capping this cohort at 20 founders. Once the AI app is live, we can scale delivery.
              Right now, every founder gets hands-on, high-touch support from Joe directly.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '18', label: 'Calls booked this week' },
                { number: '3', label: 'Spots remaining' },
                { number: '£15K', label: 'Price after cohort fills' },
              ].map((stat, i) => (
                <div key={i} className="p-4">
                  <p className="font-display text-3xl md:text-4xl mb-1" style={{ color: '#E63946' }}>{stat.number}</p>
                  <p className="font-body text-xs" style={{ color: 'rgba(245,240,235,0.5)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* How It Works - 3 Steps */}
        <div>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-white text-center mb-12">
              How It Works
            </h3>
            <div className="space-y-8">
              {[
                {
                  num: '1',
                  title: 'Secure Your Spot for £1',
                  desc: "Confirm you're ready. We'll send you a link to register your card. You won't be charged £7,500 until after Week 1.",
                },
                {
                  num: '2',
                  title: 'Week 1 Diagnostic (£1 Charged)',
                  desc: 'The 90-Minute GTM Workshop. The Full Diagnostic Report. Access to Week 1 Group Calls. The Wireframed Sales Playbook. Your blueprint for what to build.',
                },
                {
                  num: '3',
                  title: 'You Decide',
                  desc: "Not convinced? Walk away. No charge beyond the £1. You keep the diagnostic report. Convinced? We charge the remaining £7,499 and start building your system.",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E63946' }}>
                    <span className="font-body text-white font-bold">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-white mb-2">{step.title}</h4>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border text-center" style={{ backgroundColor: 'rgba(26,34,51,0.3)', borderColor: 'rgba(197,165,114,0.2)' }}>
              <h4 className="font-display text-2xl text-white mb-3">You Cannot Lose.</h4>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
                Either you get free insights that improve your sales process, or you get the full programme and solve the problem completely.
              </p>
            </div>
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
      q: "What if I've tried sales training before?",
      a: "This isn't training. We don't teach you theory and hope you apply it. We build your entire sales system — scripts, frameworks, playbooks, proposals — customised to your business. Then we coach you through live deals until it's embedded. It's the difference between reading a recipe and having a chef cook beside you.",
    },
    {
      q: 'Will this work for my niche industry?',
      a: "We've worked with 300+ founders across SaaS, professional services, tech, consulting, and more. The Sync Selling System is built around buyer psychology — not industry jargon. We customise every deliverable to your specific market, prospects, and competitive landscape.",
    },
    {
      q: "What's the time commitment?",
      a: "Two group calls per week (60 mins each), plus your own implementation time. Most founders spend 3-5 hours per week on the programme. The ROI on that time is typically visible within the first 2-3 weeks.",
    },
    {
      q: 'What happens after the 8 weeks?',
      a: "You keep everything — all playbooks, scripts, frameworks, templates, and training videos. Founding members also get locked-in pricing on ongoing support at £400/month (this will increase to £600/month for non-founding members). Plus lifetime beta access to all AI tools.",
    },
  ];

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="container mx-auto px-4">
        <div>
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
      </div>
    </section>
  );
}

// ─── Final CTA Section ─────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative grain-overlay overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div>
          <div className="max-w-3xl mx-auto scroll-reveal">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-6" style={{ color: '#C5A572' }}>
              Limited to 20 Founding Members
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Secure Your Founding{' '}
              <span className="italic" style={{ color: '#C5A572' }}>Member Spot</span>
            </h2>
            <p className="font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              Start with £1. Get the full diagnostic and Week 1 access. Only continue if you're convinced.
            </p>
            <CTAButton className="mx-auto">
              Book Your £1 Diagnostic Call
            </CTAButton>
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
      <FinalCTA />
      <Footer />
    </div>
  );
}
