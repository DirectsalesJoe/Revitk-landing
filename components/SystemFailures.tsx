import React from 'react';

export const SystemFailures: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <hr className="w-24 border-t-4 border-brand-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Here's What's Actually Happening <br className="hidden md:block"/>
            (And Why Your Close Rate Is Stuck Under 10%)
          </h2>
          <p className="text-xl mt-6">
            You don't have a <span className="font-bold">sales problem.</span><br/>
            You have <span className="font-bold">three system failures</span> that compound each other:
          </p>
        </div>

        <div className="space-y-12">
          {/* Failure 1 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-brand-accent">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #1: You're Selling to Champions, Not Economic Buyers (And You're Not Equipping Champions to Sell UP)
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>Your demos are brilliant. Your champions love you. They "get it."</p>
              <p>Then they disappear into the approval process and you never hear from them again.</p>
              <p className="font-bold">Because your champion can't sell it to the CFO.</p>
              <p>Sure, you gave them your standard proposal or <span className="font-bold bg-yellow-100 px-1">standard pitch deck.</span></p>
              <p>But the CFO doesn't care about that.</p>
              <div className="bg-blue-50 p-6 rounded-md my-6">
                <p className="font-bold mb-2">They care about:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Return on <span className="font-bold">EFFORT</span> <em>(How much work is this going to take? Who's going to do it? We're already stretched thin.)</em></li>
                  <li>Internal <span className="font-bold">POLITICS</span> <em>(The IT manager is going to push back. How do I handle that?)</em></li>
                  <li><span className="font-bold">CREDIBILITY</span> <em>(Why should I believe you'll actually deliver these results?)</em></li>
                  <li><span className="font-bold">RISK</span> <em>(What happens if this doesn't work? What's the cost of failure?)</em></li>
                </ul>
              </div>
              <p>Your pitch deck addresses none of that.</p>
              <p>So when the CFO pushes back, your champion has no answers. They stumble. They waffle. They fail. And the deal dies.</p>
              <p className="font-bold">Because they couldn't sell UP without the right tools.</p>
            </div>
          </div>

          {/* Failure 2 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-brand-dark">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #2: You Can't Tell Good Leads from Bad Leads
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>You close 60% of your referrals. You close less than 10% of your outbound leads.</p>
              <p>Your first thought: <em>"The leads are rubbish."</em></p>
              <p>But here's the reality: <span className="font-bold">You don't have an objective qualification framework.</span></p>
              <p>You waste 20+ hours a month chasing prospects who were never going to buy because you can't tell the difference between a real buyer and someone who's "just looking."</p>
              <p className="text-2xl font-bold text-brand-accent py-4">
                The truth: 50-60% of your pipeline shouldn't even be there.
              </p>
              <p>But without an objective qualification system, you keep chasing ghosts.</p>
            </div>
          </div>

          {/* Failure 3 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-gray-400">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #3: You're Hiring People to Execute a System That Doesn't Exist
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>On day one they asked: <em>"What's the sales process?"</em></p>
              <p>And you said: <em>"Just shadow me for a week. Here's the pitch deck. You'll pick it up."</em></p>
              <p>So they get on calls and <span className="font-bold bg-yellow-100 px-1">just spout the pitch deck.</span></p>
              <p>They talk for 20 minutes about features, history, and awards.</p>
              <p className="font-bold text-xl italic border-l-4 border-brand-accent pl-4 my-4">"Telling isn't selling."</p>
              <p>But they do it because <span className="font-bold">you gave them nothing else to execute.</span></p>
              <p>No discovery framework. No demo script. Just a PDF and your best wishes.</p>
              <p><span className="font-bold">So when you hire someone, they fail.</span> Because they can't replicate your intuition.</p>
              <p>And improvisation doesn't scale. It doesn't train. It doesn't convert at 50%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
