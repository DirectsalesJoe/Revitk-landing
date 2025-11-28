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
          <p>The GTM Diagnostic Workshop was a £3,500 offer.</p>
          <p className="font-bold text-2xl">Now it's your Week 1. For £1.</p>
        </div>

        {/* GTM Dossier Image */}
        <div className="mb-12">
          <img 
            src="/gtm-dossier.png" 
            alt="GO-TO-MARKET DOSSIER - Diagnostic Scorecard showing critical flaws identified" 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        <div className="space-y-10 bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h4 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">What's Included:</h4>
          
          <div className="space-y-4">
            <h5 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Complete GTM Diagnostic Report
            </h5>
            <p className="ml-11">
              We look at your entire sales process—CRM, messaging, workflows, pipeline. We find every way to increase revenue. Specific. Actionable.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Wireframed Sales Playbook PDF
            </h5>
            <p className="ml-11">
              Your complete sales process mapped: every stage, every asset you need, every transition point. This is your blueprint for what to build.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Voice of Customer Analysis
            </h5>
            <p className="ml-11">
              80+ hours of research to understand the exact words prospects use, what triggers them, what they object to, where competitors are weak.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              Competitive Analysis & Objection Plan
            </h5>
            <p className="ml-11">
              Every reason prospects might say no, and how to position against competitors without naming them.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-brand-dark">
              <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600 w-6 h-6" /></div>
              AI-Enhanced Persona Models
            </h5>
            <p className="ml-11">
              Not just "Dave the CFO." Psychology—what triggers them, political dynamics, career fears.
            </p>
          </div>
          

        </div>

        <div className="mt-16 text-center space-y-8">
          <p className="text-xl md:text-2xl font-bold">At the End of Week 1, the Choice Is Yours</p>
          <p className="text-lg">Not convinced? Walk away. No charge. No questions. You keep the full report.</p>
          
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
