// The Sync Selling System offer page.
// Rebuilt 10 Jul 2026: Clarity / Build / Embed structure, Sync Intel positioning,
// flat pricing (Founders £9,000 / Teams £15,000), no CTAs by design.
// This page is shown to prospects around the sales call; the ad promise
// ("we diagnose and solve your biggest sales bottleneck, free") is the front end.
import { useEffect } from 'react';
import { IMAGES } from '@/lib/constants';

const styles = `
  .ofr {
    --navy: #0F1923;
    --red: #E63946;
    --gold: #C5A572;
    --cream: #F5F0EB;
    --black: #0B1120;
    --ink: #1A2530;
    --cream-dim: rgba(245, 240, 235, 0.72);
    --navy-dim: rgba(15, 25, 35, 0.66);
    font-family: 'DM Sans', -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    background: var(--navy);
    color: var(--cream);
    line-height: 1.6;
    font-size: 17px;
  }
  .ofr h1, .ofr h2, .ofr h3 { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; text-wrap: balance; }
  .ofr .wrap { max-width: 1060px; margin: 0 auto; padding: 0 24px; }
  .ofr .narrow { max-width: 720px; margin-left: auto; margin-right: auto; }
  .ofr section { padding: 88px 0; }
  .ofr .eyebrow {
    font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase;
    font-weight: 700; color: var(--gold); margin-bottom: 20px;
  }
  .ofr .gold-i { color: var(--gold); font-style: italic; }

  .ofr .hero { background: var(--black); padding: 110px 0 96px; }
  .ofr .hero h1 { font-size: clamp(38px, 6vw, 62px); font-weight: 800; line-height: 1.12; max-width: 17ch; }
  .ofr .hero .lede { font-size: clamp(18px, 2.4vw, 21px); color: var(--cream-dim); max-width: 50ch; margin: 26px 0 8px; }
  .ofr .proofbar {
    display: flex; flex-wrap: wrap; gap: 12px 40px; margin-top: 56px;
    padding-top: 28px; border-top: 1px solid rgba(197, 165, 114, 0.35);
  }
  .ofr .proofbar > div { font-size: 14px; color: var(--cream-dim); }
  .ofr .proofbar strong { display: block; font-size: 22px; color: var(--cream); font-variant-numeric: tabular-nums; }

  .ofr .light { background: var(--cream); color: var(--ink); }
  .ofr .light .eyebrow { color: #A8834B; }
  .ofr .light h2 { color: var(--navy); }
  .ofr h2 { font-size: clamp(30px, 4.4vw, 44px); font-weight: 800; line-height: 1.15; margin-bottom: 14px; }
  .ofr .sub { font-size: 18px; max-width: 62ch; }
  .ofr .light .sub { color: var(--navy-dim); }
  .ofr .dark .sub { color: var(--cream-dim); }

  .ofr .steps { display: grid; gap: 28px; margin-top: 56px; }
  .ofr .step {
    background: #fff; border: 1px solid rgba(15, 25, 35, 0.08);
    border-top: 3px solid var(--gold); padding: 36px 34px; border-radius: 4px;
    display: grid; grid-template-columns: 92px 1fr; gap: 28px; align-items: start;
  }
  .ofr .step-no { font-family: 'Playfair Display', Georgia, serif; font-size: 54px; font-weight: 800; color: var(--gold); line-height: 1; }
  .ofr .step-week { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--navy-dim); margin-top: 8px; }
  .ofr .step h3 { font-size: 26px; color: var(--navy); margin-bottom: 6px; }
  .ofr .step .promise { font-size: 17px; font-weight: 500; color: var(--ink); margin-bottom: 16px; }
  .ofr .step ul { list-style: none; display: grid; gap: 10px; margin: 0; padding: 0; }
  .ofr .step li { padding-left: 26px; position: relative; color: var(--navy-dim); font-size: 16px; }
  .ofr .step li::before { content: ""; position: absolute; left: 0; top: 9px; width: 12px; height: 2px; background: var(--gold); }
  .ofr .step li strong { color: var(--ink); font-weight: 700; }

  .ofr .shot { margin-top: 28px; }
  .ofr .shot img {
    width: 100%; height: auto; display: block; border-radius: 10px;
    border: 1px solid rgba(197, 165, 114, 0.5);
    box-shadow: 0 22px 48px rgba(11, 17, 32, 0.28);
  }
  .ofr .shot-label {
    font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
    color: #A8834B; font-weight: 700; margin-top: 14px;
  }
  .ofr .dark .shot img { box-shadow: 0 26px 64px rgba(0, 0, 0, 0.55); }
  .ofr .dark .shot-label { color: var(--gold); }

  .ofr .dark { background: var(--navy); }
  .ofr .si-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 56px; align-items: start; margin-top: 48px; }
  .ofr .si-comps { display: grid; gap: 34px; }
  .ofr .si-comp { border-left: 2px solid var(--gold); padding-left: 22px; }
  .ofr .comp-for { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--gold); margin: 4px 0 14px; }
  .ofr .si-comp ul { list-style: none; display: grid; gap: 8px; margin: 0; padding: 0; }
  .ofr .si-comp li { padding-left: 22px; position: relative; font-size: 15px; color: var(--cream-dim); }
  .ofr .si-comp li::before { content: ""; position: absolute; left: 0; top: 10px; width: 11px; height: 2px; background: var(--gold); }
  .ofr .si-footnote { margin-top: 40px; font-size: 16px; color: var(--cream-dim); max-width: 60ch; }
  .ofr .si-footnote strong { color: var(--cream); }

  .ofr .proof-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-top: 48px; }
  .ofr .proof-card { background: #fff; border: 1px solid rgba(15, 25, 35, 0.08); border-radius: 4px; padding: 30px 28px; }
  .ofr .proof-card .big { font-family: 'Playfair Display', Georgia, serif; font-size: 30px; font-weight: 800; color: var(--navy); margin-bottom: 10px; line-height: 1.15; }
  .ofr .proof-card p { font-size: 15px; color: var(--navy-dim); }
  .ofr .vohkus { margin-top: 44px; padding: 30px 34px; background: var(--navy); color: var(--cream); border-radius: 4px; display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
  .ofr .vohkus .big { font-family: 'Playfair Display', Georgia, serif; font-size: 26px; font-weight: 800; white-space: nowrap; }
  .ofr .vohkus p { font-size: 15px; color: var(--cream-dim); max-width: 52ch; }

  .ofr .price-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin: 52px 0 12px; }
  .ofr .price-card { background: var(--black); border: 1px solid rgba(197, 165, 114, 0.3); border-radius: 8px; padding: 36px 34px; }
  .ofr .price-card .tier { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700; color: var(--gold); margin-bottom: 10px; }
  .ofr .price-card .amount { font-family: 'Playfair Display', Georgia, serif; font-size: 46px; font-weight: 800; color: var(--cream); font-variant-numeric: tabular-nums; }
  .ofr .price-card .for { margin: 14px 0 20px; font-size: 15px; color: var(--cream-dim); }
  .ofr .price-card ul { list-style: none; display: grid; gap: 9px; margin: 0; padding: 0; }
  .ofr .price-card li { padding-left: 24px; position: relative; font-size: 15px; color: var(--cream); }
  .ofr .price-card li::before { content: ""; position: absolute; left: 0; top: 9px; width: 11px; height: 2px; background: var(--gold); }
  .ofr .guarantee {
    margin-top: 44px; border: 1px solid rgba(197, 165, 114, 0.4); border-radius: 8px;
    padding: 30px 34px; background: rgba(197, 165, 114, 0.06); max-width: 760px;
  }
  .ofr .guarantee h4 { font-family: 'Playfair Display', Georgia, serif; font-size: 21px; margin-bottom: 8px; color: var(--cream); }
  .ofr .guarantee p { font-size: 15px; color: var(--cream-dim); }
  .ofr .after-line { margin-top: 36px; font-size: 15px; color: var(--cream-dim); max-width: 62ch; }

  .ofr .fit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 44px; }
  .ofr .fit { background: #fff; border-radius: 4px; padding: 32px 30px; border: 1px solid rgba(15, 25, 35, 0.08); }
  .ofr .fit h4 { font-family: 'Playfair Display', Georgia, serif; font-size: 21px; color: var(--navy); margin-bottom: 16px; }
  .ofr .fit ul { list-style: none; display: grid; gap: 10px; margin: 0; padding: 0; }
  .ofr .fit li { padding-left: 26px; position: relative; font-size: 15px; color: var(--navy-dim); }
  .ofr .fit.yes li::before { content: "✓"; position: absolute; left: 0; color: #2E7D4F; font-weight: 700; }
  .ofr .fit.no li::before { content: "✕"; position: absolute; left: 0; color: var(--red); font-weight: 700; }

  .ofr .faq { margin-top: 44px; display: grid; gap: 0; border-top: 1px solid rgba(15, 25, 35, 0.12); }
  .ofr .faq details { border-bottom: 1px solid rgba(15, 25, 35, 0.12); }
  .ofr .faq summary {
    cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;
    padding: 22px 4px; font-weight: 700; font-size: 17px; color: var(--navy);
  }
  .ofr .faq summary::-webkit-details-marker { display: none; }
  .ofr .faq summary::after { content: "+"; font-size: 24px; color: var(--gold); font-weight: 400; }
  .ofr .faq details[open] summary::after { content: "–"; }
  .ofr .faq .a { padding: 0 4px 24px; font-size: 16px; color: var(--navy-dim); max-width: 66ch; }

  .ofr .final { background: var(--black); text-align: center; padding: 110px 0; }
  .ofr .final h2 { font-size: clamp(32px, 5vw, 52px); }

  .ofr footer { background: var(--black); border-top: 1px solid rgba(245, 240, 235, 0.08); padding: 28px 0; font-size: 13px; color: var(--cream-dim); }

  @media (max-width: 720px) {
    .ofr section { padding: 64px 0; }
    .ofr .hero { padding: 72px 0 64px; }
    .ofr .step { grid-template-columns: 1fr; gap: 10px; }
    .ofr .si-grid { grid-template-columns: 1fr; }
  }
`;

export default function Offer() {
  useEffect(() => {
    document.title = 'The Sync Selling System | Revitk';
  }, []);

  return (
    <div className="ofr">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="wrap">
          <div className="eyebrow">Revitk · The Sync Selling System</div>
          <h1>
            Close one in every two prospects you quote. <span className="gold-i">Inside eight weeks.</span>
          </h1>
          <p className="lede">We find where your sales process leaks money. We build the fix. We stay until it works.</p>
          <div className="proofbar">
            <div><strong>300+</strong>businesses benchmarked</div>
            <div><strong>£185M+</strong>closed by people we trained</div>
            <div><strong>£40M → £100M</strong>the Vohkus growth Joe ran sales enablement for</div>
          </div>
        </div>
      </div>

      {/* ================= WHAT YOU GET ================= */}
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h2>What you get</h2>
          <p className="sub">Three phases over eight weeks. Here is what happens in each one.</p>

          <div className="steps">
            <div className="step">
              <div>
                <div className="step-no">1</div>
                <div className="step-week">Week 1</div>
              </div>
              <div>
                <h3>Clarity</h3>
                <p className="promise">We find where your sales process leaks money and what each leak costs.</p>
                <ul>
                  <li><strong>Your numbers, benchmarked.</strong> You see your funnel next to 300+ businesses. You know which stages are normal and which are bleeding.</li>
                  <li><strong>Your market, researched.</strong> What your buyers say. What your competitors promise. Where the gaps are.</li>
                  <li><strong>One report.</strong> Every bottleneck, what it costs you a month, and the order to fix them in.</li>
                </ul>
                <div className="shot">
                  <img src={IMAGES.diagnosticReport} alt="The Sales Diagnostic Report: red, amber and green scores, revenue leakage by stage, priority recommendations" loading="lazy" />
                  <p className="shot-label">The diagnostic report · Every stage scored red, amber or green · Yours to keep</p>
                </div>
                <div className="shot">
                  <img src={IMAGES.salesBlueprintPremium} alt="The sales process blueprint: every stage mapped, every missing asset flagged" loading="lazy" />
                  <p className="shot-label">The blueprint · Your process mapped, every gap flagged</p>
                </div>
              </div>
            </div>

            <div className="step">
              <div>
                <div className="step-no">2</div>
                <div className="step-week">Weeks 2–4</div>
              </div>
              <div>
                <h3>Build</h3>
                <p className="promise">We bottle the way you sell. Deals keep closing when you are not in the room.</p>
                <ul>
                  <li><strong>Assets that sell for you.</strong> The proposal your buyer shows their boss. The follow-up that wakes a quiet deal. The WhatsApp that books the meeting. All written from your best calls.</li>
                  <li><strong>Training that makes your team sell like you.</strong> Short videos, scripts and frameworks. New hires learn your way of selling in days, not years.</li>
                  <li><strong>Yours to keep.</strong> Everything we build belongs to you. Walk away at the end and it still works.</li>
                </ul>
                <div className="shot">
                  <img src={IMAGES.playbookCollection} alt="Nine bound Revitk sales playbooks: discovery, demo, proposals, cold email, cold calling, appointment setting, lead nurture, objection handling" loading="lazy" />
                  <p className="shot-label">Your nine playbooks · Discovery call to objection handling</p>
                </div>
                <div className="shot">
                  <img src={IMAGES.trainingThumbnails} alt="The Revitk training academy: a video library your team works through" loading="lazy" />
                  <p className="shot-label">Your training library · A video for every playbook</p>
                </div>
              </div>
            </div>

            <div className="step">
              <div>
                <div className="step-no">3</div>
                <div className="step-week">Weeks 1–8</div>
              </div>
              <div>
                <h3>Embed</h3>
                <p className="promise">We stay until it works.</p>
                <ul>
                  <li><strong>Four strategic workshops with Joe.</strong> The 90-minute go-to-market diagnostic, the sales workshop, the launch, and the presentation. Dates booked before we start.</li>
                  <li><strong>Two accelerator sessions.</strong> We review, tweak and make sure it has stuck.</li>
                  <li><strong>A weekly group call, plus a webinar.</strong> Each week covers a different part of the sales process. Bring a live deal, leave with the exact next move.</li>
                  <li><strong>Sync Intel on every call your team makes.</strong> More below.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SYNC INTEL ================= */}
      <section className="dark">
        <div className="wrap">
          <div className="eyebrow">Sync Intel</div>
          <h2>
            A sales consultant and a sales admin in your pocket. <span className="gold-i">24/7.</span>
          </h2>
          <p className="sub">Sync Intel works every deal with you, through the eight weeks and beyond.</p>

          <div className="si-grid">
            <div className="si-comps">
              <div className="si-comp">
                <div className="comp-for">For you, the founder</div>
                <ul>
                  <li>See where deals are at risk</li>
                  <li>Know whether a deal should be in your pipeline at all</li>
                  <li>Every call scored against your playbook</li>
                </ul>
              </div>
              <div className="si-comp">
                <div className="comp-for">For your sales team</div>
                <ul>
                  <li>Know what to do on the next deal</li>
                  <li>Know what to say</li>
                  <li>Your emails written for you</li>
                  <li>Business cases drafted. Proposals written.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="shot" style={{ marginTop: 0 }}>
                <img src="/images/sync-intel-risk.jpg" alt="Sync Intel on a laptop: Bridgewater Ltd flagged at risk, no next meeting booked, with the follow-up email ready to send" loading="lazy" />
                <p className="shot-label">The deal flagged. The email already written. One click.</p>
              </div>
              <div className="shot">
                <img src="/images/sync-intel-coach.jpg" alt="A Sync Intel coaching note from Joe: the Finance Director was mentioned at 14:32 and never picked up, with the message to send before Thursday" loading="lazy" />
                <p className="shot-label">A coaching note from your last call. Tactical, timestamped, done for you.</p>
              </div>
            </div>
          </div>

          <p className="si-footnote">
            <strong>"It is like having me sit next to you and walk through every single deal."</strong> Your reps get better between sessions. You see what is real before you trust the forecast.
          </p>
        </div>
      </section>

      {/* ================= PROOF ================= */}
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Proof</div>
          <h2>The results</h2>
          <div className="proof-cards">
            <div className="proof-card">
              <div className="big">£1.2M a month</div>
              <p>Graduates with zero sales experience ran the system. They hit £1.2M a month, including a £1M+ oil and gas deal.</p>
            </div>
            <div className="proof-card">
              <div className="big">6x close rate and prices</div>
              <p>One founder put his close rate and his prices up sixfold. Same product. Same market.</p>
            </div>
            <div className="proof-card">
              <div className="big">25 years in, still learning</div>
              <p>A 25-year B2B veteran picked up million-pound questions he now uses every day.</p>
            </div>
          </div>
          <div className="vohkus">
            <div className="big">£40M → £100M</div>
            <p>Joe ran sales enablement at Vohkus while it grew from £40M to £100M. He built the academy that trained sellers from zero. This is the same system, built for founder-led businesses.</p>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="dark">
        <div className="wrap">
          <div className="eyebrow">Investment</div>
          <h2>What it costs</h2>
          <p className="sub">No modules. No add-ons. The difference is how many people we train.</p>

          <div className="price-cards">
            <div className="price-card">
              <div className="tier">Founders</div>
              <div className="amount">£9,000</div>
              <p className="for">You, plus up to two people who sell.</p>
              <ul>
                <li>The full eight weeks: Clarity, Build, Embed</li>
                <li>Every asset and training video, yours to keep</li>
                <li>Four workshops and two accelerator sessions with Joe</li>
                <li>The weekly group call and webinar</li>
                <li>Sync Intel throughout</li>
              </ul>
            </div>
            <div className="price-card">
              <div className="tier">Teams</div>
              <div className="amount">£15,000</div>
              <p className="for">You and your sales team. Everything in Founders, plus:</p>
              <ul>
                <li>Team workshops, run for your reps</li>
                <li>Sync Intel for every rep</li>
                <li>Onboarding for your next sales hire</li>
              </ul>
            </div>
          </div>

          <div className="guarantee">
            <h4>The day-14 promise</h4>
            <p>By day 14 you have your leak map and your first assets. If you are not convinced, say stop. You keep the work. You owe nothing more.</p>
          </div>

          <p className="after-line">After eight weeks everything we built is yours. Most clients keep Sync Intel and the group call going. That part is optional. Cancel any time.</p>
        </div>
      </section>

      {/* ================= FIT ================= */}
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Fit</div>
          <h2>Who it's for</h2>
          <div className="fit-grid">
            <div className="fit yes">
              <h4>This is for you if</h4>
              <ul>
                <li>You run a founder-led B2B business doing £500k to £10M</li>
                <li>You have leads, but too few become customers</li>
                <li>You are still the best salesperson in the business</li>
                <li>You want deals to close without you on every call</li>
              </ul>
            </div>
            <div className="fit no">
              <h4>This is not for you if</h4>
              <ul>
                <li>You need more leads, not better conversion</li>
                <li>You have nothing to sell yet</li>
                <li>You want someone else to do the selling forever</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="light" style={{ paddingTop: 0 }}>
        <div className="wrap narrow">
          <div className="eyebrow">Straight answers</div>
          <h2>Questions</h2>
          <div className="faq">
            <details>
              <summary>Is this a course?</summary>
              <div className="a">No. A course teaches someone else's sales process. We bottle yours. You get the assets that sell for you and the training that teaches your team to sell like you. At the end you own your company's sales manual, in your voice.</div>
            </details>
            <details>
              <summary>My business is different. Will this fit?</summary>
              <div className="a">The questions that win B2B deals are the same everywhere. The answers are yours. That is why week one is diagnosis. We have built systems for security firms, dentists, financial advisers, manufacturers, care companies and estate agents. Same method. Different playbook every time.</div>
            </details>
            <details>
              <summary>How much of my time does it take?</summary>
              <div className="a">The 90-minute diagnostic in week one. Three more workshops and two accelerator sessions across the eight weeks, booked up front. We do the building. If you cannot find the sessions in eight weeks, we will say so before we take your money.</div>
            </details>
            <details>
              <summary>What happens after the eight weeks?</summary>
              <div className="a">Every asset and video is yours forever, whether we ever speak again. Most clients keep Sync Intel and the weekly call going because the coaching compounds. That part is optional. Cancel any time.</div>
            </details>
            <details>
              <summary>Who actually delivers it?</summary>
              <div className="a">Joe runs every session himself. His team and the research engine do the building. Between sessions, Sync Intel works every call your team makes. You will never be handed to a junior consultant you have never met.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <div className="final">
        <div className="wrap">
          <div className="eyebrow">The Sync Selling System</div>
          <h2>
            Clarity. Build. <span className="gold-i">Embed.</span>
          </h2>
          <p className="sub" style={{ color: 'var(--cream-dim)', maxWidth: '48ch', margin: '18px auto 0' }}>
            Eight weeks. Six sessions with Joe. A system that sells the way you do when you are not in the room.
          </p>
        </div>
      </div>

      <footer>
        <div className="wrap">Revitk Ltd · The Sync Selling System · © 2026</div>
      </footer>
    </div>
  );
}
