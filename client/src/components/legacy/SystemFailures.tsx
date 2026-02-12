import React from 'react';

export const SystemFailures: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <hr className="w-24 border-t-4 border-brand-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Here's What's Actually Happening
          </h2>
          <p className="text-xl mt-6">
            You don't have a <span className="font-bold">sales problem.</span><br/>
            You have <span className="font-bold">four system failures</span>:
          </p>
        </div>

        <div className="space-y-12">
          {/* Failure 1 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-brand-accent">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #1: Your Champions Can't Sell UP
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>Your demos are brilliant. Champions love you.</p>
              <p>Then they disappear.</p>
              <p>Because they can't sell it to the CFO.</p>
              <p>Your proposal shows features and ROI.</p>
              <div className="bg-blue-50 p-6 rounded-md my-6">
                <p className="font-bold mb-2">The CFO cares about:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-bold">EFFORT</span> <em>(How much work? Who's doing it? We're stretched thin.)</em></li>
                  <li><span className="font-bold">POLITICS</span> <em>(IT will push back. How do I handle that?)</em></li>
                  <li><span className="font-bold">PROOF</span> <em>(Why should I believe you'll deliver?)</em></li>
                  <li><span className="font-bold">RISK</span> <em>(What if this fails?)</em></li>
                </ul>
              </div>
              <p>Your pitch deck doesn't answer those questions.</p>
              <p>So the CFO pushes back. Your champion stumbles. The deal dies.</p>
            </div>
          </div>

          {/* Failure 2 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-brand-dark">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #2: You're Treating Quotes Like Boomerangs (They Won't Come Back)
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>You send the proposal. You follow up once. Twice. Three times.</p>
              <p className="italic">"Still reviewing it internally."</p>
              <p>Translation: It's sitting in someone's inbox, forgotten.</p>
              <p>Because there's no next step. No walk-through. No meeting booked.</p>
              <p className="text-2xl font-bold text-brand-accent py-4">
                IF THERE IS NO NEXT STEP, THERE IS NO NEXT STEP.
              </p>
              <p className="font-bold">Your quotes aren't boomerangs. They don't come back on their own.</p>
              <p>You say: "Have a look and let me know."</p>
              <p>They say: "Looks great, I'll take it to the team."</p>
              <p>Then they disappear—IT teams, security managers, budget committees.</p>
              <p>And you gave them nothing to help. No technical FAQ. No security brief. No business case.</p>
              <p>Of course they ghost you. You made it impossible to move forward without you.</p>
            </div>
          </div>

          {/* Failure 3 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-gray-400">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #3: You Have No Idea When Deals Are at Risk
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>End of the month. Your rep says: "Yeah, it's all good. Should close this week."</p>
              <p>It doesn't.</p>
              <p>Last day of the quarter. Your forecast says £250K.</p>
              <p>You hit £80K.</p>
              <p>Because you can't tell when a deal is at risk.</p>
              <p>Your reps say it's "looking good" because that's what the prospect said.</p>
              <div className="bg-blue-50 p-6 rounded-md my-6">
                <p className="font-bold mb-2">But you don't know if they've got seven critical pieces locked down:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Who the economic buyer is (and if you've spoken to them)</li>
                  <li>The QUANTIFIED cost of inaction</li>
                  <li>Their budget and who approves it</li>
                  <li>Why they should take action NOW</li>
                  <li>Technical requirements and who signs off</li>
                  <li>Decision making criteria</li>
                  <li>Agreed next steps</li>
                </ol>
              </div>
              <p className="font-bold text-xl">Without all seven, the deal is at risk. You just don't know it yet.</p>
              <p>So you forecast deals that were never real. They slip. You blame the rep.</p>
              <p>But the rep was just repeating what the prospect said because you never gave them a way to qualify properly.</p>
            </div>
          </div>

          {/* Failure 4 */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-l-8 border-red-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Failure #4: You're Hiring People to Execute a System That Doesn't Exist
            </h3>
            <div className="space-y-4 text-lg text-gray-800">
              <p>Day one: "What's the sales process?"</p>
              <p>Your answer: "Shadow me. Here's the pitch deck. You'll figure it out."</p>
              <p>So they talk features for 20 minutes.</p>
              <p className="font-bold text-xl italic border-l-4 border-brand-accent pl-4 my-4">Telling isn't selling.</p>
              <p>But that's all you gave them.</p>
              <p>No discovery questions. No demo script. Just a PDF.</p>
              <p>When you hire someone, they fail. Because they can't copy your gut feel.</p>
              <p className="font-bold text-xl text-brand-accent">You can't scale gut feel. You can't train it. It doesn't convert at 50%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
