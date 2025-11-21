import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SyncSolution: React.FC = () => {
  const benefits = [
    "You know exactly what questions to ask in discovery—word for word",
    "Your champions get equipped with everything they need to sell internally: the ROI calculator, the return-on-effort breakdown, the political objection handlers, the credibility proof, the risk mitigation plan",
    "You can qualify a lead in 10 minutes and confidently walk away from bad fits",
    "Your proposals don't get 'sent and forgotten'—they get walked through, objections handled, next steps locked in",
    "Your new hires get handed a complete playbook on day one—discovery frameworks, demo scripts, objection handling, champion enablement tools",
    "Your close rate goes from under 10% to 45%+ because the guesswork is gone"
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
        <p className="font-bold text-2xl">Here's the reality:</p>
        <p>You can't hire your way out of this.</p>
        <p>You can't DIY your way out of this.</p>
        <p>You can't take some <span className="font-bold text-brand-dark bg-yellow-100 px-1">generic sales course from a LinkedIn influencer</span> and hope you're going to magically mould it to your business.</p>
        <p>You can't hire a consultant who'll audit your process, give you a 40-page report, and leave you to implement it yourself.</p>
        
        <div className="bg-brand-dark text-white p-8 rounded-lg my-12 shadow-xl">
          <p className="text-2xl md:text-3xl font-bold mb-6">
            Because you don't need more knowledge. You need a system.
          </p>
          <p className="text-xl opacity-90 mb-4">Not advice. Not templates. Not <em>"here's what you should do."</em></p>
          <p className="text-2xl font-bold text-brand-accent">
            A system that's built FOR you. Documented. Delegatable. Proven.
          </p>
        </div>

        <p className="text-xl mb-6">A system where:</p>
        
        <div className="space-y-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center py-8">
          <h3 className="text-3xl font-bold mb-4">That's what the Sync Selling System does.</h3>
          <p className="text-xl mb-12">
            We don't teach you. We don't coach you. We don't give you templates and wish you luck.<br/>
            <span className="font-bold text-2xl block mt-4">We build it FOR you.</span>
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
