// The Sync Selling System offer page.
// Rebuilt 10 Jul 2026: Clarity / Build / Embed structure, Sync Intel positioning,
// flat pricing (Founders £9,000 / Teams £15,000), no CTAs by design.
// This page is shown to prospects around the sales call; the ad promise
// ("we diagnose and solve your biggest sales bottleneck, free") is the front end.
import { useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/constants';
import { NavBar, Footer } from '@/components/NavBar';
import { PixelCircuit } from '@/components/brand/Circuit';

const styles = `
  /* Sync Selling skin D, ink look (Joe, 12 Nov 2026). Every band is ink, reading
     sits on white cards, yellow is light on ink only, biro for anything pressed. */
  .ofr {
    --ink: #111D4A;
    --biro: #1F3FBF;
    --feint: #C9D8EE;
    --yellow: #FFE414;
    --proof: #AAB6DC;
    --muted-ink: #AEB8DC;
    --muted-paper: #4B5680;
    --hairline: #1A2760;
    --dust-bright: #3C50A0;
    font-family: 'Schibsted Grotesk', -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    background: var(--ink);
    color: #fff;
    line-height: 1.6;
    font-size: 17px;
  }
  .ofr h1, .ofr h2, .ofr h3, .ofr h4 { font-family: inherit; text-wrap: balance; letter-spacing: -0.02em; }
  .ofr .wrap { max-width: 1060px; margin: 0 auto; padding: 0 24px; position: relative; }
  .ofr .narrow { max-width: 760px; margin-left: auto; margin-right: auto; }
  .ofr section { padding: 96px 0; border-top: 1px solid var(--hairline); }
  .ofr .eyebrow {
    font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
    font-weight: 700; color: var(--yellow); margin-bottom: 18px;
  }
  .ofr .accent { color: var(--yellow); }

  .ofr .hero { background: var(--ink); padding: 112px 0 96px; position: relative; overflow: hidden; }
  .ofr .hero h1 { font-size: clamp(38px, 6vw, 66px); font-weight: 900; line-height: 1.04; letter-spacing: -0.03em; max-width: 17ch; color: #fff; }
  .ofr .hero .lede { font-size: clamp(18px, 2.4vw, 21px); color: var(--muted-ink); max-width: 50ch; margin: 26px 0 8px; }
  .ofr .proofbar {
    display: flex; flex-wrap: wrap; gap: 14px 44px; margin-top: 56px;
    padding-top: 28px; border-top: 1px solid var(--hairline);
  }
  .ofr .proofbar > div { font-size: 15px; font-weight: 600; color: var(--proof); }
  .ofr .proofbar strong { display: block; font-size: 24px; font-weight: 800; letter-spacing: -0.01em; color: #fff; }

  .ofr .light, .ofr .dark { background: var(--ink); color: #fff; }
  /* the FAQ runs straight on from Fit, so no rule between them */
  .ofr section.light + section.light { border-top: 0; }
  .ofr h2 { font-size: clamp(30px, 4.4vw, 44px); font-weight: 800; line-height: 1.08; margin-bottom: 14px; color: #fff; }
  .ofr .sub { font-size: 18px; max-width: 62ch; color: var(--muted-ink); }

  .ofr .steps { display: grid; gap: 24px; margin-top: 52px; }
  .ofr .step {
    background: #fff; color: var(--ink); padding: 40px 38px; border-radius: 4px;
    display: grid; grid-template-columns: 92px 1fr; gap: 28px; align-items: start;
  }
  .ofr .step-no { font-size: 56px; font-weight: 900; color: var(--biro); line-height: 1; letter-spacing: -0.03em; }
  .ofr .step-week { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; color: var(--muted-paper); margin-top: 10px; }
  .ofr .step h3 { font-size: 28px; font-weight: 800; color: var(--ink); margin-bottom: 6px; }
  .ofr .step .promise { font-size: 18px; font-weight: 600; color: var(--ink); margin-bottom: 18px; }
  .ofr .step ul { list-style: none; display: grid; margin: 0; padding: 0; border-top: 1px solid var(--feint); }
  .ofr .step li { padding: 12px 0 12px 26px; position: relative; color: var(--muted-paper); font-size: 16px; border-bottom: 1px solid var(--feint); }
  .ofr .step li::before { content: ""; position: absolute; left: 0; top: 24px; width: 12px; height: 2px; background: var(--biro); }
  .ofr .step li strong { color: var(--ink); font-weight: 700; }

  .ofr .shot { margin-top: 28px; }
  .ofr .shot img { width: 100%; height: auto; display: block; border-radius: 4px; border: 1px solid var(--feint); }
  .ofr .shot-label {
    font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--muted-paper); font-weight: 700; margin-top: 12px;
  }
  .ofr .dark .shot img { border-color: var(--hairline); }
  .ofr .dark .shot-label { color: var(--proof); }

  .ofr .si-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 56px; align-items: start; margin-top: 48px; }
  .ofr .si-comps { display: grid; gap: 22px; }
  .ofr .si-comp { background: #fff; border-radius: 4px; padding: 28px 28px 22px; }
  .ofr .comp-for { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; color: var(--biro); margin: 0 0 12px; }
  .ofr .si-comp ul { list-style: none; display: grid; margin: 0; padding: 0; }
  .ofr .si-comp li { padding: 10px 0 10px 22px; position: relative; font-size: 16px; color: var(--ink); border-top: 1px solid var(--feint); }
  .ofr .si-comp li::before { content: ""; position: absolute; left: 0; top: 22px; width: 11px; height: 2px; background: var(--biro); }
  .ofr .si-footnote { margin-top: 44px; font-size: 17px; color: var(--muted-ink); max-width: 60ch; }
  .ofr .si-footnote strong { color: #fff; }

  .ofr .proof-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 22px; margin-top: 48px; }
  .ofr .proof-card { background: #fff; border-radius: 4px; padding: 32px 28px; }
  .ofr .proof-card .big { font-size: 30px; font-weight: 900; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 10px; line-height: 1.1; }
  .ofr .proof-card p { font-size: 16px; color: var(--muted-paper); }
  .ofr .vohkus { margin-top: 22px; padding: 30px 34px; background: #fff; color: var(--ink); border-radius: 4px; display: flex; gap: 28px; align-items: center; flex-wrap: wrap; }
  .ofr .vohkus .big { font-size: 30px; font-weight: 900; letter-spacing: -0.02em; white-space: nowrap; color: var(--biro); }
  .ofr .vohkus p { font-size: 16px; color: var(--muted-paper); max-width: 56ch; }

  .ofr .price-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; margin: 52px 0 12px; }
  .ofr .price-card { background: #fff; color: var(--ink); border-radius: 4px; padding: 38px 34px; }
  .ofr .price-card .tier { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; color: var(--biro); margin-bottom: 8px; }
  .ofr .price-card .amount { font-size: 52px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.05; color: var(--ink); }
  .ofr .price-card .for { margin: 14px 0 18px; font-size: 16px; color: var(--muted-paper); }
  .ofr .price-card ul { list-style: none; display: grid; margin: 0; padding: 0; border-top: 1px solid var(--feint); }
  .ofr .price-card li { padding: 11px 0 11px 24px; position: relative; font-size: 16px; color: var(--ink); border-bottom: 1px solid var(--feint); }
  .ofr .price-card li::before { content: ""; position: absolute; left: 0; top: 23px; width: 11px; height: 2px; background: var(--biro); }
  .ofr .guarantee {
    margin-top: 40px; border: 1px solid var(--dust-bright); border-radius: 4px;
    padding: 30px 34px; max-width: 760px;
  }
  .ofr .guarantee h4 { font-size: 22px; font-weight: 800; margin-bottom: 8px; color: #fff; }
  .ofr .guarantee p { font-size: 16px; color: var(--muted-ink); }
  .ofr .after-line { margin-top: 32px; font-size: 16px; color: var(--muted-ink); max-width: 62ch; }

  .ofr .fit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; margin-top: 44px; }
  .ofr .fit { background: #fff; border-radius: 4px; padding: 34px 32px; }
  .ofr .fit h4 { font-size: 22px; font-weight: 800; color: var(--ink); margin-bottom: 10px; }
  .ofr .fit ul { list-style: none; display: grid; margin: 0; padding: 0; }
  .ofr .fit li { padding: 12px 0 12px 32px; position: relative; font-size: 16px; color: var(--ink); border-top: 1px solid var(--feint); }
  .ofr .fit.no li { color: var(--muted-paper); }
  .ofr .fit li::before { content: ""; position: absolute; left: 0; top: 14px; width: 20px; height: 20px; background-size: 20px 20px; background-repeat: no-repeat; }
  .ofr .fit.yes li::before { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Crect x='1.5' y='2.5' width='13' height='13' rx='1' fill='none' stroke='%23111D4A' stroke-width='1.8'/%3E%3Cpath d='M4.6 9.6 C5.9 10.8 6.9 12.1 7.6 13.4 C9.3 9.7 11.7 6.4 15 3.9' fill='none' stroke='%231F3FBF' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
  .ofr .fit.no li::before { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Crect x='1.5' y='2.5' width='13' height='13' rx='1' fill='none' stroke='%23111D4A' stroke-width='1.8'/%3E%3Cpath d='M4.8 5.6 C6.8 8 9 10.6 11.4 12.6 M11.2 5.4 C9.2 7.9 7 10.3 4.9 12.4' fill='none' stroke='%234B5680' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E"); }

  .ofr .faq { margin-top: 40px; display: grid; gap: 0; background: #fff; border-radius: 4px; }
  .ofr .faq details { border-bottom: 1px solid var(--feint); }
  .ofr .faq details:last-child { border-bottom: 0; }
  .ofr .faq summary {
    cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 24px;
    padding: 22px 28px; min-height: 64px; font-weight: 700; font-size: 18px; color: var(--ink);
  }
  .ofr .faq summary::-webkit-details-marker { display: none; }
  .ofr .faq summary::after { content: "+"; font-size: 26px; line-height: 1; color: var(--biro); font-weight: 400; }
  .ofr .faq details[open] summary::after { content: "–"; }
  .ofr .faq .a { padding: 0 28px 26px; font-size: 16px; color: var(--muted-paper); max-width: 66ch; }

  .ofr .final { background: var(--ink); text-align: center; padding: 120px 0; border-top: 1px solid var(--hairline); position: relative; overflow: hidden; }
  .ofr .final h2 { font-size: clamp(34px, 5.4vw, 58px); font-weight: 900; letter-spacing: -0.03em; }

  @media (max-width: 720px) {
    .ofr section { padding: 64px 0; }
    .ofr .hero { padding: 64px 0 60px; }
    .ofr .step { grid-template-columns: 1fr; gap: 10px; padding: 30px 24px; }
    .ofr .si-grid { grid-template-columns: 1fr; gap: 36px; }
    .ofr .price-card, .ofr .fit, .ofr .vohkus { padding: 28px 24px; }
    .ofr .faq summary { padding: 18px 20px; font-size: 17px; }
    .ofr .faq .a { padding: 0 20px 22px; }
    .ofr .final { padding: 80px 0; }
  }
`;

export default function Offer() {
  useEffect(() => {
    document.title = 'The Sync Selling System | Revitk';
  }, []);

  // The pixel circuit lines find the headline lines through these
  const heroBox = useRef<HTMLDivElement>(null);
  const heroH1 = useRef<HTMLHeadingElement>(null);
  const heroLede = useRef<HTMLParagraphElement>(null);
  const heroWords = useRef<HTMLDivElement>(null);
  const finalBox = useRef<HTMLDivElement>(null);
  const finalH2 = useRef<HTMLHeadingElement>(null);
  const finalSub = useRef<HTMLParagraphElement>(null);
  const finalWords = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBar />
      <div className="ofr">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ================= HERO ================= */}
      <div className="hero" ref={heroBox}>
        <PixelCircuit
          container={heroBox}
          targets={[
            { ref: heroH1, line: 0 },
            { ref: heroH1, line: -1 },
            { ref: heroLede, line: 0 },
          ]}
          keepClear={[heroWords]}
          seed={11}
        />
        <div className="wrap" ref={heroWords}>
          <div className="eyebrow">Revitk · The Sync Selling System</div>
          <h1 ref={heroH1}>
            Close one in every two prospects you quote. <span className="accent">Inside eight weeks.</span>
          </h1>
          <p className="lede" ref={heroLede}>We find where your sales process leaks money. We build the fix. We stay until it works.</p>
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
            A sales consultant and a sales admin in your pocket. <span className="accent">24/7.</span>
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
                <li>You run a founder-led B2C or B2B business doing £500k to £10M</li>
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
      <div className="final" ref={finalBox}>
        <PixelCircuit
          container={finalBox}
          targets={[
            { ref: finalH2, line: 0 },
            { ref: finalSub, line: 0 },
          ]}
          keepClear={[finalWords]}
          seed={23}
          dust={60}
        />
        <div className="wrap" ref={finalWords}>
          <div className="eyebrow">The Sync Selling System</div>
          <h2 ref={finalH2}>
            Clarity. Build. <span className="accent">Embed.</span>
          </h2>
          <p className="sub" ref={finalSub} style={{ maxWidth: '48ch', margin: '18px auto 0' }}>
            Eight weeks. Six sessions with Joe. A system that sells the way you do when you are not in the room.
          </p>
        </div>
      </div>

      </div>
      <Footer />
    </>
  );
}
