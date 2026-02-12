import React from 'react';
import { Check, X } from 'lucide-react';

export const ValueStack: React.FC = () => {
  const rows = [
    { title: "Phase 1: Foundation & Strategy", isHeader: true },
    { name: "1-on-1 GTM Deep Dive & Sales Style Assessment", dwy: "Done With You", dfy: "Done With You" },
    { name: "AI-Powered Prospect Mind Map", dwy: "DIY (Prompts provided)", dfy: "Done For You", boldDFY: true },
    { name: "\"Category of One\" Positioning Dossier", dwy: "DIY (Framework provided)", dfy: "Done For You", boldDFY: true },
    { name: "Full Competitive Landscape Analysis", dwy: "DIY (Framework provided)", dfy: "Done For You", boldDFY: true },
    { name: "LinkedIn Profile Optimisation Guide", dwy: "Included", dfy: "Done For You", boldDFY: true },
    { name: "Founder's Mindset Masterclass", dwy: "Included", dfy: "Included", boldDFY: true },

    { title: "Phase 2: Sales Arsenal & System Build", isHeader: true },
    { name: "CRM Pipeline Setup & Stage Guide", dwy: "Included", dfy: "Done For You", boldDFY: true },
    { name: "CRM Automation Health Check", dwy: "Checklist Provided", dfy: "Done For You", boldDFY: true },
    { name: "The Cold Email Bible (15+ templates)", dwy: "DIY (Full library)", dfy: "DFY (Audience-tailored)", boldDFY: true },
    { name: "AI Cold Email Writing Prompts", dwy: "Included (Prompt pack)", dfy: "DFY (Pre-tuned)", boldDFY: true },
    { name: "Hook Generators (Ads, Emails, Social)", dwy: "Included (Templates)", dfy: "DFY (Pre-written variants)", boldDFY: true },
    { name: "Cold Call Script Pack", dwy: "DIY (Scripts & notes)", dfy: "DFY (Calibrated to your offer)", boldDFY: true },
    { name: "Appointment-Setter Script", dwy: "DIY (Scripts & notes)", dfy: "DFY (Aligned to your calendar)", boldDFY: true },
    { name: "Pre-Meeting Nurture Sequence", dwy: "DIY (Templates)", dfy: "DFY (Installed in your CRM)", boldDFY: true },
    { name: "Post-Call Follow-Up Pack", dwy: "DIY (Templates)", dfy: "DFY (Pre-written scenarios)", boldDFY: true },
    { name: "Discovery Framework & Scripts", dwy: "DIY (Prompts)", dfy: "DFY (Word-for-word scripts)", boldDFY: true },
    { name: "Stakeholder Engagement Pack", dwy: "DIY (Prompts)", dfy: "DFY (Ready-to-send assets)", boldDFY: true },
    { name: "Demo Framework & Script", dwy: "DIY (Prompts)", dfy: "DFY (Custom-built for you)", boldDFY: true },
    { name: "Proposal Framework That Closes", dwy: "DIY (Prompts)", dfy: "DFY (Designed for your offer)", boldDFY: true },
    { name: "Champion Enablement Toolkit", dwy: "DIY (Prompts)", dfy: "DFY (ROI + Effort + Political)", boldDFY: true },
    { name: "Objection Handling Toolkit", dwy: "Included", dfy: "DFY (Custom responses)", boldDFY: true },

    { title: "Phase 3: Execution & Elite Support", isHeader: true },
    { name: "8 Weeks of Group Coaching & Deal Clinics", dwy: "Included", dfy: "Included", boldDFY: true },
    { name: "Strategic 1-on-1 Consultations (x2)", dwy: "Not Included", dfy: "Included", boldDFY: true, isCross: true },
    { name: "Proposal & Asset Feedback", dwy: "Not Included", dfy: "1/week", boldDFY: true, isCross: true },
    { name: "1-on-1 Sales Call Reviews", dwy: "Not Included", dfy: "1/week", boldDFY: true, isCross: true },
    { name: "Direct 1-on-1 WhatsApp Access to Joe", dwy: "Not Included", dfy: "INCLUDED", boldDFY: true, isCross: true },
  ];

  return (
    <section className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Happens After Week 1: Your Programme Options</h2>
        <p className="text-lg max-w-3xl mx-auto">
          If you decide to continue, you have two options. A 'Done With You' programme, or for founders who need results now, the 'Done For You' Accelerator.
        </p>
      </div>

      {/* Desktop Table View - Hidden on Mobile */}
      <div className="hidden md:block overflow-x-auto shadow-xl rounded-xl border border-gray-200">
        <table className="w-full min-w-[800px] bg-white text-left border-collapse">
          <thead>
            <tr className="bg-brand-dark text-white text-lg">
              <th className="p-6 w-1/3">Deliverable & Transformation Asset</th>
              <th className="p-6 w-1/3 border-l border-gray-700">Standard 'DWY' Programme</th>
              <th className="p-6 w-1/3 border-l border-gray-700 bg-brand-accent text-white">
                'DFY' Accelerator
                <div className="text-xs font-normal mt-1 opacity-90 uppercase tracking-widest">Recommended</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              if (row.isHeader) {
                return (
                  <tr key={idx} className="bg-gray-100">
                    <td colSpan={3} className="p-4 font-bold text-gray-600 uppercase tracking-wider text-sm">
                      {row.title}
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="p-4 font-medium text-gray-800">{row.name}</td>
                  <td className="p-4 text-gray-600 border-l border-gray-200">
                    {row.isCross ? <span className="flex items-center text-red-400 gap-2"><X size={16}/> {row.dwy}</span> : (row.dwy === 'Included' || row.dwy === 'Done With You' ? <span className="flex items-center text-green-600 gap-2"><Check size={16}/> {row.dwy}</span> : row.dwy)}
                  </td>
                  <td className="p-4 border-l border-gray-200 bg-red-50/30">
                     <span className={`flex items-center gap-2 ${row.boldDFY ? 'font-bold text-brand-dark' : 'text-gray-800'}`}>
                        <Check className="text-brand-accent w-4 h-4" />
                        {row.dfy}
                     </span>
                  </td>
                </tr>
              );
            })}
            {/* Price Row */}
             <tr className="bg-gray-900 text-white">
                <td className="p-6 font-bold text-xl">Programme Investment</td>
                <td className="p-6 font-bold text-xl border-l border-gray-700">£7,500</td>
                <td className="p-6 font-bold text-2xl border-l border-gray-700 bg-brand-accent">£15,000</td>
             </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - Visible Only on Mobile */}
      <div className="md:hidden space-y-6">
        {rows.map((row, idx) => {
          if (row.isHeader) {
            return (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold text-gray-600 uppercase tracking-wider text-sm">
                  {row.title}
                </h3>
              </div>
            );
          }
          return (
            <div key={idx} className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-brand-dark text-white p-4 font-medium">
                {row.name}
              </div>
              
              <div className="p-4 space-y-3">
                {/* DWY Option */}
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Done With You (DWY)</div>
                  <div className="text-sm">
                    {row.isCross ? (
                      <span className="flex items-center text-red-400 gap-2">
                        <X size={16}/> {row.dwy}
                      </span>
                    ) : (row.dwy === 'Included' || row.dwy === 'Done With You' ? (
                      <span className="flex items-center text-green-600 gap-2">
                        <Check size={16}/> {row.dwy}
                      </span>
                    ) : (
                      row.dwy
                    ))}
                  </div>
                </div>

                {/* DFY Option */}
                <div className="bg-red-50 p-3 rounded border-2 border-brand-accent">
                  <div className="text-sm uppercase tracking-wider text-brand-accent mb-2 font-bold">
                    Done For You (DFY) ⭐ Recommended
                  </div>
                  <div className="text-sm">
                    <span className={`flex items-center gap-2 ${row.boldDFY ? 'font-bold text-brand-dark' : 'text-gray-800'}`}>
                      <Check className="text-brand-accent w-4 h-4" />
                      {row.dfy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile Price Cards */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <div className="text-sm uppercase tracking-wider mb-2">Standard 'DWY' Programme</div>
            <div className="text-3xl font-bold">£7,500</div>
          </div>
          <div className="bg-brand-accent text-white p-6 rounded-lg shadow-lg">
            <div className="text-sm uppercase tracking-wider mb-2">'DFY' Accelerator (Recommended)</div>
            <div className="text-4xl font-bold">£15,000</div>
          </div>
        </div>
      </div>
    </section>
  );
};
