import React from 'react';
import { Users, Calendar } from 'lucide-react';

export const FoundingMembers: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-20 px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-brand-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Limited Availability
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
            For a Very Limited Time:<br/> The Founding Members Offer
        </h2>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            The full 'Done For You' Accelerator is a £15,000 investment.<br/>
            But right now, we're building our <span className="text-brand-accent font-bold">Founding Members cohort.</span>
        </p>

        <div className="bg-brand-accent/20 border-2 border-brand-accent rounded-xl p-6 md:p-8 mb-8">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            GET EVERYTHING IN THE DFY PROGRAMME FOR £7,500
          </p>
          <p className="text-xl md:text-2xl mb-2">
            Save £7,500 AND Get Started for £1
          </p>
          <p className="text-lg md:text-xl font-bold text-brand-accent">
            PLUS 12 WEEKS FULL SUPPORT INCLUDED!!!
          </p>
        </div>

        <h3 className="text-4xl md:text-6xl font-extrabold text-brand-accent mb-12 tracking-tight">
            Save £7,500 This Week.
        </h3>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 mb-12">
            <h4 className="text-2xl font-bold mb-8">Why This Price Will Never Be Available Again</h4>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                
                {/* Spots Remaining Box - Made to look distinctive */}
                <div className="bg-brand-light text-brand-dark rounded-xl p-6 min-w-[260px] w-full md:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:scale-105 transition-transform duration-300 border-4 border-brand-goldBorder">
                    <p className="text-gray-500 text-sm uppercase tracking-wider font-extrabold mb-2">Spots Remaining</p>
                    <div className="flex items-center justify-center gap-2">
                        <Users className="w-10 h-10 text-brand-accent" />
                        <span className="text-7xl font-black text-brand-dark tracking-tighter">3</span>
                    </div>
                </div>

                {/* Calls Booked Box - With pulsating effect */}
                <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 min-w-[260px] w-full md:w-auto flex flex-col justify-center relative overflow-hidden">
                     {/* Red glow effect */}
                     <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 opacity-20 rounded-full filter blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
                     
                     <p className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-3">Current Demand</p>
                     <div className="flex items-center justify-center gap-3 mb-4">
                        <Calendar className="w-8 h-8 text-gray-300" />
                        <span className="text-5xl font-bold text-white">18</span>
                     </div>
                     <div className="inline-flex items-center justify-center gap-2 bg-red-900/50 border border-red-500/50 rounded-full px-4 py-1.5 mx-auto">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span className="text-red-100 font-bold text-xs uppercase tracking-wide">Calls Booked In</span>
                    </div>
                </div>
            </div>
            
            <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
                We're capping the cohort at 20 founders because of the extreme level of 1-on-1 support included. 
                <br/><br/>
                <span className="font-bold text-brand-accent">The Math:</span> We have 18 calls booked this week for the final 3 spots.
            </p>
            
            <p className="text-sm opacity-60 mt-6">Once we hit 20, the price returns to £15,000.</p>
        </div>

        <div className="text-left max-w-2xl mx-auto space-y-4 mb-16">
            <p className="font-bold text-xl">You get:</p>
            <ul className="space-y-3">
                <li className="flex items-center gap-3"><span className="text-green-400">✅</span> The entire £15,000 'Done For You' Accelerator for £7,500</li>
                <li className="flex items-center gap-3"><span className="text-green-400">✅</span> Every script written for you</li>
                <li className="flex items-center gap-3"><span className="text-green-400">✅</span> Direct access to Joe via WhatsApp for 12 weeks</li>
                <li className="flex items-center gap-3"><span className="text-green-400">✅</span> Week 1 GTM Diagnostic (normally £3,500) for £1</li>
            </ul>
        </div>

         <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-brand-accent hover:bg-red-700 text-white font-bold text-xl md:text-2xl uppercase tracking-wider py-6 px-12 rounded-md shadow-2xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/20"
          >
            Book Your Qualification Call & Secure Your Spot
          </button>
      </div>
    </section>
  );
};
