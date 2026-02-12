import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SyncSolution: React.FC = () => {
  const benefits = [
    "You know exactly what to ask in discovery—word for word",
    "Your champions get everything they need: ROI calculator PLUS return on effort calculator PLUS cost of inaction, objection answers, proof, risk plan",
    "You pre-empt every objection UPFRONT so nothing takes you by surprise later",
    "You can qualify a lead in 10 minutes and walk away from bad fits",
    "Your proposals get walked through—objections handled, next steps booked",
    "New hires get a complete playbook on day one",
    "Your close rate goes from under 10% to 45%+ because the guesswork is gone"
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
        <p className="font-bold text-2xl md:text-3xl">Here's the Reality</p>
        <p>You can't hire your way out of this.</p>
        <p>You can't DIY your way out of this.</p>
        <p>You can't take a generic sales course and make it fit your business.</p>
        <p>You can't hire a consultant who gives you a report and leaves.</p>
        
        <div className="bg-brand-dark text-white p-8 rounded-lg my-12 shadow-xl">
          <p className="text-2xl md:text-3xl font-bold mb-6">
            You don't need more knowledge. You need a system.
          </p>
          <p className="text-xl opacity-90 mb-4">Not advice. Not templates.</p>
          <p className="text-2xl font-bold text-brand-accent">
            A system built FOR you.
          </p>
        </div>

        <p className="text-xl font-bold mb-6">A system where:</p>
        
        <div className="space-y-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center py-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">That's what the Sync Selling System does.</h3>
          <p className="text-xl md:text-2xl mb-4 text-gray-800">
            We don't teach you. We don't coach you.
          </p>
          <p className="font-bold text-2xl md:text-3xl text-brand-accent mb-12">
            We build it FOR you.
          </p>
          
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-brand-accent hover:bg-red-700 text-white font-bold text-xl uppercase tracking-wider py-5 px-10 rounded-md shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Click Here to Book Your Qualification Call
          </button>
        </div>
      </div>
    </section>
  );
};
