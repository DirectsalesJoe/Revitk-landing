/*
 * VENTURE COMMUNITY ACCELERATOR — Exclusive Programme Page
 * Hidden page at /venture — not linked from main navigation
 * Design: Sync Selling, all ink (12 Nov 2026). Was "Dark Institutional".
 * Audience: Pre-seed startups — busy founders who need a system, not a course
 */

import { IMAGES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ChevronDown,
  Shield,
  Quote,
} from 'lucide-react';
import { PixelCircuit, TickBox } from '@/components/brand/Circuit';
import { BUTTON, Card, Section, T } from '@/components/brand/ui';

// ─── Shared pieces for this page ─────────────────────────────────

/** A deliverable's closing line: a yellow rule on the ink, then the line. */
function RuleNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-stretch gap-4">
      <div className="w-1 min-h-[40px] flex-shrink-0 bg-ss-yellow" />
      <p className="text-[15px] font-semibold text-white leading-relaxed py-1">
        {children}
      </p>
    </div>
  );
}

const deliverableImage = 'w-full rounded-[4px]';
const deliverableTitle = 'text-2xl md:text-3xl leading-[1.12] font-extrabold tracking-[-0.02em] text-white mb-4';

// ─── Hero Section ──────────────────────────────────────────────────

function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);
  const section = useRef<HTMLElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const words = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    // The circuit is measured from the words, so it waits for them to finish moving in
    const s = setTimeout(() => setSettled(true), 1700);
    return () => { clearTimeout(t); clearTimeout(s); };
  }, []);

  return (
    <section ref={section} className="relative min-h-screen flex items-center overflow-hidden bg-ss-ink">
      {settled && (
        <div className="absolute inset-0 animate-in fade-in duration-700">
          <PixelCircuit
            container={section}
            targets={[
              { ref: h1, line: 0 },
              { ref: h1, line: -1 },
            ]}
            keepClear={[words]}
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="absolute top-0 left-0 right-0 py-6 px-4 md:px-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-black tracking-[0.15em] text-white uppercase">REVITK</span>
              <span className="text-ss-muted-ink/60">|</span>
              <span className="text-sm tracking-wide text-ss-muted-ink">The Sync Selling System</span>
            </div>
          </div>
        </div>

        <div ref={words} className="max-w-4xl mt-16 md:mt-0">
          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-ss-hairline rounded-[4px]">
              <Shield className="w-4 h-4 flex-shrink-0 text-ss-muted-ink" />
              <span className={T.kicker}>
                Available Through Your Venture Community Expert Add-Ons
              </span>
            </div>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '0.3s' }}>
            <h1 ref={h1} className={`${T.h1} mb-8`}>
              A systemised way to acquire customers.{' '}
              <span>The strongest signal you can send to investors.</span>
            </h1>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.5s' }}>
            <p className={`${T.lead} max-w-2xl mb-10`}>
              The only sales programme designed for busy founders who need a systemised, efficient way to scale. Over 90% off. Normally £7,500–£15,000.
            </p>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.7s' }}>
            <a
              href="https://app.revitk.com/widget/booking/bSmPMYL8QhG7ZDIwDmg9"
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON}
            >
              Book Your Workshop
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000" style={{ opacity: visible ? 1 : 0, transitionDelay: '1.5s' }}>
          <ChevronDown className="w-6 h-6 animate-bounce text-ss-muted-ink" />
        </div>
      </div>
    </section>
  );
}

// ─── The Problem Section ──────────────────────────────────────────

function ProblemSection() {
  return (
    <Section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h2 className={`${T.h2} mb-8`}>
            You are building the product, pitching investors, and doing the sales.{' '}
            <span className={T.accent}>All at once.</span>
          </h2>

          <p className={`${T.body} mb-6`}>
            There is no better indicator for investors than profitable acquisition of customers. But you have no process, no playbook, and no time to figure it out from scratch.
          </p>

          <p className={T.body}>
            The Sync Selling Programme gives you everything you need to build your first sales motion. Nothing you don't.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── What You Get — Section Header ───────────────────────────────

function WhatYouGetHeader() {
  return (
    <Section className="pt-20 md:pt-28 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center scroll-reveal">
          <p className={`${T.kicker} mb-4`}>
            Everything Included
          </p>
          <h2 className={`${T.h2} mb-6`}>
            The complete programme.{' '}
            <span className={T.accent}>Over 90% off.</span>
          </h2>
          <p className={`${T.body} max-w-2xl mx-auto`}>
            Venture Community Accelerator members get access to the full Sync Selling Programme — the same system used by 300+ B2B founders generating £185M+ in revenue.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── Deliverable 1: 1-Hour Workshop ──────────────────────────────

function WorkshopDeliverable() {
  return (
    <Section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center scroll-reveal">
          <div>
            <p className={`${T.kicker} mb-3`}>Deliverable 01</p>
            <h3 className={deliverableTitle}>1-Hour Workshop</h3>
            <p className={`${T.body} mb-6`}>
              One-on-one with Joe Milnes. We diagnose your sales process, identify the gaps, and build your action plan. You walk out knowing exactly what to do.
            </p>
            <RuleNote>
              Most founders spend months guessing. This gives you clarity in 60 minutes.
            </RuleNote>
          </div>
          <div className="relative">
            <img
              src={IMAGES.diagnosticWorkshopScene}
              alt="Workshop with Joe Milnes"
              className={deliverableImage}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Deliverable 2: Up to 5 Playbooks ───────────────────────────

function PlaybooksDeliverable() {
  return (
    <Section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center scroll-reveal">
          <div className="order-2 md:order-1">
            <img
              src={IMAGES.playbookCollection}
              alt="Sales Playbook Collection"
              className={deliverableImage}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className={`${T.kicker} mb-3`}>Deliverable 02</p>
            <h3 className={deliverableTitle}>Up to 5 Playbooks</h3>
            <p className={`${T.body} mb-6`}>
              The playbooks you actually need — chosen based on your stage, your market, and your gaps. Discovery, outreach, proposals, objection handling, lead nurture. No filler.
            </p>
            <RuleNote>
              Each playbook is built for your business. Not generic templates.
            </RuleNote>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Deliverable 3: 20 Hours of Masterclass Sales Webinars ──────

function MasterclassDeliverable() {
  return (
    <Section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center scroll-reveal">
          <div>
            <p className={`${T.kicker} mb-3`}>Deliverable 03</p>
            <h3 className={deliverableTitle}>20 Hours of Masterclass Sales Webinars</h3>
            <p className={`${T.body} mb-6`}>
              20 recorded masterclasses covering every stage of the sales process. Discovery, cold calling, objection handling, closing, negotiation, pipeline management, and more. Watch on your schedule.
            </p>
            <RuleNote>
              The same training library used by every Sync Selling client.
            </RuleNote>
          </div>
          <div className="relative">
            <img
              src={IMAGES.trainingThumbnails}
              alt="20 Masterclass Sales Webinars"
              className={deliverableImage}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Deliverable 4: Weekly Growth Coaching ──────────────────────

function CoachingDeliverable() {
  return (
    <Section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center scroll-reveal">
          <div className="order-2 md:order-1">
            <img
              src={IMAGES.webinarMasterclass}
              alt="Weekly Group Coaching Calls"
              className={deliverableImage}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className={`${T.kicker} mb-3`}>Deliverable 04</p>
            <h3 className={deliverableTitle}>Weekly Growth Coaching</h3>
            <p className={`${T.body} mb-6`}>
              2x group calls per week. Bring your real deals, your real questions, your real scenarios. Get answers and coaching live from Joe and the wider cohort.
            </p>
            <RuleNote>
              You are never stuck. Every week, you have access to live coaching.
            </RuleNote>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Deliverable 5: AI Sales Tools ──────────────────────────────

function AIToolsDeliverable() {
  return (
    <Section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center scroll-reveal">
          <div>
            <p className={`${T.kicker} mb-3`}>Deliverable 05</p>
            <h3 className={deliverableTitle}>AI Sales Tools</h3>
            <p className={`${T.body} mb-6`}>
              Write proposals, review sales calls, identify deal risk, draft follow-up emails. Purpose-built AI agents trained on the Sync Selling methodology.
            </p>
            <RuleNote>
              Your sales team in your pocket. Available 24/7.
            </RuleNote>
          </div>
          <div className="relative">
            <img
              src={IMAGES.aiDashboard}
              alt="AI Sales Tools Dashboard"
              className={deliverableImage}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Case Study Section ──────────────────────────────────────────

function CaseStudySection() {
  return (
    <Section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 scroll-reveal">
          <p className={`${T.kicker} mb-4`}>
            Case Study — Cohort 1
          </p>
          <h2 className="text-3xl md:text-4xl leading-[1.1] font-extrabold tracking-[-0.02em] text-white text-balance mb-4">
            AddParts — From Cohort 1 (Successfully Raised £300k){' '}
            <span>Share Their Experience With The Sync Selling Programme.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="relative w-full rounded-[4px] overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://share.descript.com/embed/Umc4G5bdekp"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 scroll-reveal">
          <Card className="p-6 md:p-8">
            <Quote className="w-5 h-5 mb-3 text-ss-biro" />
            <p className="text-lg font-semibold text-ss-ink mb-3 leading-relaxed">
              "On virtually every customer, it's now become so much more clear. We could handle it this way, we could do it this way — and why we'd gone wrong in the first place."
            </p>
            <p className="text-sm font-bold text-ss-muted-paper">
              — Tom, Co-Founder, AddParts
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <Quote className="w-5 h-5 mb-3 text-ss-biro" />
            <p className="text-lg font-semibold text-ss-ink mb-3 leading-relaxed">
              "Not just telling us how we could go about it, but actually showing us the process and showing us how we could make it our own process in-house."
            </p>
            <p className="text-sm font-bold text-ss-muted-paper">
              — Tom, Co-Founder, AddParts
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

// ─── Value Summary ───────────────────────────────────────────────

function ValueSummarySection() {
  const items = [
    '1-Hour Diagnostic Workshop (1-on-1 with Joe)',
    'Up to 5 Sales Playbooks (tailored to your stage)',
    '20 Hours of Masterclass Sales Webinars',
    'Weekly Growth Coaching (2x group calls per week)',
    'AI Sales Tools (proposals, call reviews, deal risk, emails)',
  ];

  return (
    <Section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="text-center mb-12">
            <p className={`${T.kicker} mb-4`}>
              Available Through Your Venture Community Expert Add-Ons
            </p>
            <h2 className={`${T.h2} mb-4`}>
              3 months of support.
            </h2>
            <p className="text-4xl md:text-6xl leading-[1.05] font-black tracking-[-0.03em] text-white mb-6">
              <span className={T.accent}>1.5 days of credits.</span>
            </p>
          </div>

          <Card className="overflow-hidden mb-8">
            <div className="px-5 py-4 md:px-6 border-b border-ss-feint">
              <span className={T.cardKicker}>Everything Included</span>
            </div>
            <div className="divide-y divide-ss-feint">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-4 md:px-6">
                  <TickBox ticked />
                  <span className="text-base text-ss-ink">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

// ─── About Joe ───────────────────────────────────────────────────

function AboutSection() {
  return (
    <Section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center scroll-reveal">
          <div className="md:col-span-2">
            {/* Joe's profile picture, the pixel split (5 Nov 2026), shown whole in its circle */}
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-white">
              <img src="/joe-profile.jpg" alt="Joe Milnes" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className={`${T.kicker} mb-4`}>
              Your Coach
            </p>
            <h3 className={deliverableTitle}>Joe Milnes</h3>
            <p className={`${T.body} mb-6`}>
              25 years in B2B sales. 300+ founders coached. £185M+ in client revenue. Built the system that took a team from zero pipeline to £1.2M a month.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-ss-hairline pt-6">
              {[
                { stat: '300+', label: 'Founders coached' },
                { stat: '£185M+', label: 'Client revenue' },
                { stat: '60+', label: 'Industries' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black tracking-[-0.02em] text-white">{item.stat}</p>
                  <p className="text-xs text-ss-muted-ink mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────

function CTASection() {
  return (
    <Section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <p className={`${T.kicker} mb-6`}>
            Available Through Your Venture Community Expert Add-Ons
          </p>
          <h2 className={`${T.h2} mb-6`}>
            Ready to build your{' '}
            <span className={T.accent}>sales engine?</span>
          </h2>
          <p className={`${T.body} mb-10`}>
            Book a workshop with Joe to get started.
          </p>
          <a
            href="https://app.revitk.com/widget/booking/bSmPMYL8QhG7ZDIwDmg9"
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON}
          >
            Book Your Workshop
          </a>
          <p className="mt-8">
            <a
              href="/answers"
              className={`text-sm ${T.linkOnInk}`}
            >
              Want more info? Your questions answered here.
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 bg-ss-ink border-t border-ss-hairline">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-black tracking-[0.15em] text-white uppercase">REVITK</span>
            <span className="text-ss-muted-ink/60">|</span>
            <span className="text-xs text-ss-muted-ink">The Sync Selling System</span>
          </div>
          <p className="text-xs text-ss-muted-ink/70">
            &copy; {new Date().getFullYear()} Revitk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───────────────────────────────────────────────────

export default function Venture() {
  const scrollRef = useScrollAnimation();
  return (
    <div ref={scrollRef} className="min-h-screen bg-ss-ink">
      <HeroSection />
      <ProblemSection />
      <WhatYouGetHeader />
      <WorkshopDeliverable />
      <PlaybooksDeliverable />
      <MasterclassDeliverable />
      <CoachingDeliverable />
      <AIToolsDeliverable />
      <CaseStudySection />
      <ValueSummarySection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
