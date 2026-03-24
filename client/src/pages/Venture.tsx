/*
 * VENTURE COMMUNITY ACCELERATOR — Exclusive Programme Page
 * Hidden page at /venture — not linked from main navigation
 * Design: "Dark Institutional" — heavy dark navy, minimal sections
 * Audience: Pre-seed startups — busy founders who need a system, not a course
 */

import { IMAGES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Shield,
  Quote,
  BookOpen,
  Bot,
  Users,
  CheckCircle2,
} from 'lucide-react';

// ─── Hero Section ──────────────────────────────────────────────────

function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMAGES.heroBg})` }} />
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ backgroundColor: '#E63946' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,17,32,0.9), rgba(11,17,32,0.7), rgba(11,17,32,1))' }} />

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
                Available Through Your Venture Community Expert Add-Ons
              </span>
            </div>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '0.3s' }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
              A systemised way to acquire customers.{' '}
              <span className="italic" style={{ color: '#C5A572' }}>The strongest signal you can send to investors.</span>
            </h1>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.5s' }}>
            <p className="font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: 'rgba(245,240,235,0.8)' }}>
              The only sales programme designed for busy founders who need a systemised, efficient way to scale. Over 90% off. Normally £7,500–£15,000.
            </p>
          </div>

          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.7s' }}>
            <a
              href="https://app.revitk.com/widget/bookings/syncselling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 font-body font-semibold text-sm tracking-wider uppercase text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#E63946' }}
            >
              Book Your Workshop
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000" style={{ opacity: visible ? 1 : 0, transitionDelay: '1.5s' }}>
          <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: 'rgba(197,165,114,0.5)' }} />
        </div>
      </div>
    </section>
  );
}

// ─── The Problem Section (dark) ──────────────────────────────────

function ProblemSection() {
  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0F1923' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-8 leading-tight">
            You are building the product, pitching investors, and doing the sales.{' '}
            <span className="italic" style={{ color: '#E63946' }}>All at once.</span>
          </h2>

          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,235,0.7)' }}>
            There is no better indicator for investors than profitable acquisition of customers. But you have no process, no playbook, and no time to figure it out from scratch.
          </p>

          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,240,235,0.7)' }}>
            The Sync Selling Programme gives you everything you need to build your first sales motion. Nothing you don't.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── What You Get — 3 Simple Deliverables (dark) ─────────────────

function WhatYouGetSection() {
  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#E63946' }}>
            Everything Included
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
            The complete programme.{' '}
            <span className="italic" style={{ color: '#E63946' }}>Over 90% off.</span>
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
            Venture Community Accelerator members get access to the full Sync Selling Programme — the same system used by 300+ B2B founders generating £185M+ in revenue.
          </p>
        </div>

        {/* Three deliverables */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-reveal">
          {/* 1. Workshop */}
          <div className="p-8 border text-center" style={{ backgroundColor: 'rgba(26,34,51,0.5)', borderColor: 'rgba(197,165,114,0.15)' }}>
            <Users className="w-10 h-10 mx-auto mb-5" style={{ color: '#C5A572' }} />
            <h3 className="font-display text-xl text-white mb-3">1-Hour Workshop</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              One-on-one with Joe Milnes. We diagnose your sales process, identify the gaps, and build your action plan. You walk out knowing exactly what to do.
            </p>
          </div>

          {/* 2. Playbooks */}
          <div className="p-8 border text-center" style={{ backgroundColor: 'rgba(26,34,51,0.5)', borderColor: 'rgba(197,165,114,0.15)' }}>
            <BookOpen className="w-10 h-10 mx-auto mb-5" style={{ color: '#C5A572' }} />
            <h3 className="font-display text-xl text-white mb-3">Up to 5 Playbooks</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              The playbooks you actually need — chosen based on your stage, your market, and your gaps. Discovery, outreach, proposals, objection handling, lead nurture. No filler.
            </p>
          </div>

          {/* 3. AI Tools */}
          <div className="p-8 border text-center" style={{ backgroundColor: 'rgba(26,34,51,0.5)', borderColor: 'rgba(197,165,114,0.15)' }}>
            <Bot className="w-10 h-10 mx-auto mb-5" style={{ color: '#C5A572' }} />
            <h3 className="font-display text-xl text-white mb-3">AI Sales Tools</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,240,235,0.6)' }}>
              Write proposals, review sales calls, identify deal risk, draft follow-up emails. Purpose-built AI agents trained on the Sync Selling methodology.
            </p>
          </div>
        </div>

        {/* Simple summary line */}
        <div className="text-center mt-12 scroll-reveal">
          <p className="font-body text-sm" style={{ color: 'rgba(245,240,235,0.4)' }}>
            Everything you need to build your sales engine. Nothing you don't.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Case Study Section (slightly lighter dark) ──────────────────

function CaseStudySection() {
  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0F1923' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
            Case Study — Cohort 1
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            AddParts — From Cohort 1 (Successfully Raised £300k){' '}
            <span className="italic" style={{ color: '#C5A572' }}>Share Their Experience With The Sync Selling Programme.</span>
          </h2>
        </div>

        {/* Video Embed */}
        <div className="max-w-3xl mx-auto mb-14 scroll-reveal">
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

        {/* Two key quotes only */}
        <div className="max-w-3xl mx-auto space-y-6 scroll-reveal">
          <div className="p-6 border-l-2" style={{ borderColor: '#C5A572', backgroundColor: 'rgba(26,34,51,0.3)' }}>
            <Quote className="w-5 h-5 mb-3" style={{ color: 'rgba(197,165,114,0.4)' }} />
            <p className="font-display text-lg text-white mb-3 italic leading-relaxed">
              "On virtually every customer, it's now become so much more clear. We could handle it this way, we could do it this way — and why we'd gone wrong in the first place."
            </p>
            <p className="font-body text-sm font-semibold" style={{ color: '#C5A572' }}>
              — Tom, Co-Founder, AddParts
            </p>
          </div>

          <div className="p-6 border-l-2" style={{ borderColor: '#C5A572', backgroundColor: 'rgba(26,34,51,0.3)' }}>
            <Quote className="w-5 h-5 mb-3" style={{ color: 'rgba(197,165,114,0.4)' }} />
            <p className="font-display text-lg text-white mb-3 italic leading-relaxed">
              "Not just telling us how we could go about it, but actually showing us the process and showing us how we could make it our own process in-house."
            </p>
            <p className="font-body text-sm font-semibold" style={{ color: '#C5A572' }}>
              — Tom, Co-Founder, AddParts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Value Summary (dark) ────────────────────────────────────────

function ValueSummarySection() {
  const items = [
    { item: '1-Hour Diagnostic Workshop (1-on-1 with Joe)', value: '£1,500' },
    { item: 'Up to 5 Sales Playbooks (tailored to your stage)', value: '£4,500' },
    { item: 'Training Videos for Each Playbook', value: '£500' },
    { item: 'AI Sales Tools (proposals, call reviews, deal risk, emails)', value: '£500' },
    { item: 'Access to Weekly Group Calls', value: '£1,000' },
  ];

  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C5A572' }}>
              Available Through Your Venture Community Expert Add-Ons
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4 leading-tight">
              Over <span className="italic" style={{ color: '#E63946' }}>90% off</span> the standard programme.
            </h2>
          </div>

          {/* Value Stack Table */}
          <div className="border overflow-hidden mb-8" style={{ borderColor: 'rgba(197,165,114,0.15)', backgroundColor: 'rgba(26,34,51,0.3)' }}>
            <div className="p-4 flex justify-between items-center" style={{ backgroundColor: 'rgba(197,165,114,0.1)' }}>
              <span className="font-body text-sm font-semibold text-white tracking-wider uppercase">What You Get</span>
              <span className="font-body text-sm font-semibold tracking-wider uppercase" style={{ color: '#C5A572' }}>Standard Value</span>
            </div>
            {items.map((row, i) => (
              <div key={i} className="flex justify-between items-start p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="flex items-start gap-3 flex-1 pr-4">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E63946' }} />
                  <span className="font-body text-sm text-white">{row.item}</span>
                </div>
                <span className="font-body text-sm font-semibold whitespace-nowrap" style={{ color: 'rgba(245,240,235,0.35)', textDecoration: 'line-through' }}>{row.value}</span>
              </div>
            ))}
            <div className="p-6 text-center" style={{ backgroundColor: 'rgba(230,57,70,0.08)' }}>
              <p className="font-body text-xs mb-2" style={{ color: 'rgba(245,240,235,0.5)' }}>Total standard value</p>
              <p className="font-display text-2xl mb-3" style={{ color: 'rgba(245,240,235,0.4)', textDecoration: 'line-through', textDecorationColor: '#E63946' }}>£8,000+</p>
              <p className="font-body text-sm font-semibold" style={{ color: '#E63946' }}>Over 90% off — exclusive to Venture Community Accelerator members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Joe (dark) ────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0F1923' }}>
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
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,235,0.7)' }}>
              25 years in B2B sales. 300+ founders coached. £185M+ in client revenue. Built the system that took a team from zero pipeline to £1.2M a month.
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

// ─── CTA Section (dark) ──────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-6" style={{ color: '#C5A572' }}>
            Available Through Your Venture Community Expert Add-Ons
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Ready to build your{' '}
            <span className="italic" style={{ color: '#C5A572' }}>sales engine?</span>
          </h2>
          <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,235,0.6)' }}>
            Book a workshop with Joe to get started.
          </p>
          <a
            href="https://app.revitk.com/widget/bookings/syncselling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 font-body font-semibold text-sm tracking-wider uppercase text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#E63946' }}
          >
            Book Your Workshop
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: '#0B1120', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
      <WhatYouGetSection />
      <CaseStudySection />
      <ValueSummarySection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
