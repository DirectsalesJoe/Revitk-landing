import React from 'react';
import { Check } from 'lucide-react';

export const Week1Value: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gold border-y-4 border-brand-goldBorder">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark">What You Get in Week 1</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-accent leading-tight">
            (We Used to Charge £3,500 for This. You're Getting It for £1.)
          </h3>
        </div>

        <div className="text-lg text-gray-800 space-y-6 mb-12">
          <p>The GTM Diagnostic Workshop used to be a standalone consulting offer we charged £3,500 for.</p>
          <p>We'd spend a full day with a founder, audit their entire sales process, and deliver a comprehensive diagnostic report.</p>
          <p>Founders would walk away with absolute clarity on what was broken and how to fix it.</p>
          <p className="font-bold text-2xl">Now, it's your Week 1. And you're getting it for £1.</p>
        </div>

        <div className="space-y-10 bg-white p-8 md:p-12 rounded-xl shadow-md">
          <div className="space-y-4">
            <h4 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Complete GTM Diagnostic Report
            </h4>
            <p className="ml-11">
              We'll analyse your entire sales process—CRM, messaging, workflows, pipeline—to uncover every single chance to increase revenue. Not vague observations. Specific, actionable opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Voice of Customer Analysis (80+ Hours of Deep Market Research)
            </h4>
            <p className="ml-11">
              We conduct intensive market research to understand the exact language your prospects use, the emotional triggers, objections, and what competitors are doing wrong.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Competitive Analysis & Objection Mitigation Strategy
            </h4>
            <p className="ml-11">
              We'll identify every reason why prospects might choose NOT to buy from you and how to position against competitors without mentioning them.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              AI-Enhanced Persona Models (v2)
            </h4>
            <p className="ml-11">
              Not just "Dave the CFO". We build psychological profiles that reveal emotional triggers, political dynamics, and career fears.
            </p>
          </div>
          
           <div className="space-y-4">
            <h4 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              AI Prospect Mind Maps
            </h4>
            <p className="ml-11">
              Visual intelligence maps showing the buying committee structure, who influences whom, and where deals typically stall.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center space-y-8">
          <p className="text-xl font-bold">At the End of Week 1, the Choice Is Yours</p>
          <p className="text-lg">If you're not 100% convinced this is the answer you've been looking for, you can walk away with one click. No charge. No questions asked. You keep the full Diagnostic Report.</p>
          
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-wide uppercase py-4">
            You cannot lose.
          </h3>

          <p className="text-lg">But first, you need to qualify.</p>

           <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-brand-accent hover:bg-red-700 text-white font-bold text-xl uppercase tracking-wider py-5 px-10 rounded-md shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Click Here to Book Your 30-Minute Qualification Call
          </button>
        </div>
      </div>
    </section>
  );
};
