import { useState, useEffect } from "react";
import { Link } from "wouter";

const BOOKING_URL = "https://app.revitk.com/widget/bookings/syncselling";

/* ─── FAQ DATA: Sales Problems ─── */
const salesFaqs = [
  {
    q: `How do I handle the 'we need to think about it' objection in B2B sales?`,
    a: `First response, and most reps get this wrong: 'OK, no problem. When would you like to reschedule?' Not 'take your time.' Not 'I'll follow up next week.' You book the next conversation immediately, because deals that leave without a date in the diary almost never come back. But here's the deeper issue. 'We need to think about it' is not a timing problem. It's a certainty problem. The prospect hasn't got enough information to say yes. They're not stalling for fun. They genuinely don't feel certain enough to commit, and rather than tell you what's missing, they default to the polite exit. Your job is to find out what's creating that uncertainty. The single best question you can ask: 'Let me ask you something. If you decided to not do this, why would the reason be?' That question does something powerful. It gives the prospect permission to voice the real objection without feeling confrontational. Maybe they're worried about implementation. Maybe the CFO won't approve without a clearer business case. Maybe they saw a competitor last week and want to compare. Whatever it is, you can't fix it if you don't know about it. Once the real reason surfaces, you address it directly, then rebook. If they say budget, you walk through the cost of inaction. If they say timing, you quantify what another quarter of delay costs. If they say they need to run it past someone else, you build champion enablement materials on the spot. The worst thing you can do is accept 'think about it' at face value and send a follow-up email three days later. That email goes into the void. Always.`,
  },
  {
    q: `How do I write a B2B sales proposal that actually closes deals?`,
    a: `Your proposal has to sell when you're not in the room. That's the test. It should be able to land on the desk of any stakeholder in your prospect's organisation, someone who has never met you, never seen the demo, and they should be able to pick it up, understand why they need to act, see what problems you're solving, and understand why you're the right people to solve them. Most proposals fail that test completely. They're feature lists dressed up with a logo. They reference the demo. They assume context that only exists in the head of the person you've been talking to. Every other stakeholder looks at it and thinks 'so what?' In Sync Selling, the proposal is a Match-stage asset. It articulates the gap the prospect quantified during discovery, in their words and their numbers. It shows the cost of inaction they calculated themselves. It maps your solution to the specific problems they told you about, not generic capabilities. It includes answers to the objections that other stakeholders will raise. Technical questions for IT. Financial justification for the CFO. Answers to the political concerns from the department head who sees your project as a threat to their priorities. A good proposal also includes a clear decision framework. What happens next, who needs to be involved, what the timeline looks like. You're making it easy for your champion to walk this through their internal approval process without needing to come back to you for every question. Build it like a document that does the selling on your behalf. Because in most B2B deals, the buying happens in rooms you're never invited to.`,
  },
  {
    q: `How do I build a B2B sales process from scratch?`,
    a: `Split it into three parts. In Sync Selling we call them the Hook, the Wedge, and the Match. The Hook is how you generate conversations with new prospects. People who know you and people who don't. Cold calls, cold emails, LinkedIn outreach, referral systems. Whatever channels fit your market. The goal isn't to sell anything at this stage. It's to earn the right to a proper conversation by showing you understand their world. The Wedge is your discovery process. This is where the real selling happens, though it doesn't feel like selling. For deals under £5K to £15K, you can do this in one call. For bigger deals, plan for two calls. For complex or technical sales, three. You need a set of questions that focus on four things: where the prospect is right now, where they're trying to get to, what the cost of inaction is (what it's costing them every month to not solve this problem), and how they're going to make a decision on solving it. Those four areas give you everything you need to build a business case. The Match is proposals and assets that sell for you when you're not in the room. Documents that clearly show the prospect where they are, where they want to be, and exactly how your solution bridges that gap. Something any stakeholder can pick up, even if they've never spoken to you, and see why they need to act. You need playbooks and assets across all three of those stages. Most founders only build one or two pieces and wonder why deals stall. Sync Selling builds the entire system for you. For £1 in a 90-minute workshop, you get a wireframed sales playbook showing every asset you need across Hook, Wedge, and Match. That's the easiest way to build a sales process, because you walk away with the blueprint.`,
  },
  {
    q: `Why do B2B sales reps keep losing deals to 'no decision'?`,
    a: `Research from Jolt shows 44% of B2B deals are lost not to competitors but to indecision. The prospect liked you. Liked the product. Possibly even told you they wanted to move forward. Then nothing happened. The reason is almost always the same. The prospect didn't build enough internal certainty to act. Doing nothing is safe. It's the default. Nobody ever got fired for maintaining the status quo. Buying something new, on the other hand, comes with risk. Implementation risk, political risk, career risk if it doesn't work out. Your job during the sales process is to make the cost of doing nothing more painful than the risk of moving forward. That requires three things most reps never do. First, quantify the gap. Help the prospect calculate, using their own numbers, what inaction costs per month. Lost revenue, wasted hours, deals going dark, missed targets. When they can say 'this is costing us £150K a month,' suddenly doing nothing has a price tag. Second, establish the future state. What does solving this mean for the prospect personally? The promotion. The end of Sunday night anxiety. The chance to actually build something instead of firefighting. If you haven't uncovered what's personally at stake, you're selling to a company, not a person. Companies deliberate. People act. Third, eliminate the objections you can't see. The IT director who worries about integration. The finance lead who thinks the timing is wrong. The colleague who sees your project as a threat to their budget. If any of those people have unaddressed concerns, the deal sits in limbo. In Sync Selling we call this the Lake of Maybe, the place where deals go to die quietly. The Bookends Principle exists specifically to prevent this. Before and after every interaction, you address the concerns of every stakeholder who touches the deal.`,
  },
  {
    q: `How do I stop discounting to close B2B deals?`,
    a: `People aren't rejecting your price. They're telling you they don't see enough value. Stop trying to fix a value problem with a price solution. Value is not one thing. It's built from three components, and if any of them is weak, the prospect will push back on price even if they can afford it. First, the perceived risk of proceeding. What could go wrong? How difficult is implementation? What if it doesn't work? What will their colleagues think? Every unanswered risk reduces the perceived value of your solution. Your job is to surface those risks proactively and address them before the prospect has to ask. Second, the gap between where they are now and where they want to get to. If that gap is vague, if the prospect can't quantify it, then your solution feels like a nice-to-have rather than a must-have. Gap quantification in Sync Selling makes this concrete. When the prospect has calculated that doing nothing costs £150K a month, your £7,500 solution looks like the obvious choice. Nobody needs a discount when the alternative is haemorrhaging cash. Third, the effort and sacrifice involved in getting to the future state. Implementation burden. Internal politics. Change management. Learning curves. Even if the destination looks attractive, a painful journey makes people hesitate. You need to show that the effort is manageable, that you've done this before with similar companies, and that you'll carry most of the weight. When all three of those are strong, price becomes a detail rather than a dealbreaker. The prospect isn't comparing your price to their budget. They're comparing it to the cost of staying where they are. If you're getting pushed on price consistently, look at which of those three areas is weakest in your sales process. That's where the fix is. Not in your pricing.`,
  },
];

/* ─── FAQ DATA: Methodology & Frameworks ─── */
const methodologyFaqs = [
  {
    q: `What is the Bookends Principle in sales?`,
    a: `The Bookends Principle is a cross-stage concept in Sync Selling. It means that before and after every significant interaction, you address the concerns of all the stakeholders who touch the deal. Not just the person sitting in front of you. Most sales teams sell brilliantly to their main contact and then wonder why the deal stalls. It stalls because the technical buyer had integration questions nobody answered. The financial decision-maker wanted to know about return on effort, not just ROI. And a department head somewhere saw your project as a threat to their budget and killed it quietly in a meeting you weren't invited to. The Bookends Principle forces you to think about technical buyers, financial decision-makers, and political influencers at every stage. Before the demo, you prepare materials that address all three. After the demo, you equip your champion with answers to the questions those stakeholders will ask. If you haven't covered every angle before your champion takes the proposal upstairs, you've left the deal's fate in someone else's hands.`,
  },
  {
    q: `What is BAMFAM in sales?`,
    a: `BAMFAM stands for Book A Meeting From A Meeting. It's a non-negotiable in Sync Selling. The rule is simple: you never end any interaction without the next step locked in the diary. After a cold call, you book the discovery. After discovery, you book the demo. After the demo, you book the proposal walk-through. After the proposal, you book the decision meeting. No exceptions. Most deals don't die because the prospect said no. They die in the gaps between meetings. The prospect gets busy. Other priorities take over. That urgent problem you discussed on Tuesday feels less urgent by Friday. BAMFAM eliminates those gaps entirely. If the prospect leaves an interaction without knowing exactly what happens next and when, there is no next step. That's not pessimism. That's pattern recognition from hundreds of deals.`,
  },
  {
    q: `What is the Problem Trifecta cold calling technique?`,
    a: `The Problem Trifecta is Module 3 of the Sync Selling Cold Calling Framework. After earning 30 seconds of attention with a pattern interrupt intro, you demonstrate that you understand the prospect's world by naming three specific problems you solve. Not in your language. In theirs. The structure goes: 'We typically work with [their job title or company type] when they're dealing with one of three frustrating problems...' Then you lay out three pain points with emotional weight. Not corporate jargon. Actual words the prospect would use when complaining to a colleague. You end with: 'I don't suppose any of those sound familiar to you?' The technique works for a few reasons. Three problems is easy to hold in working memory. The word 'frustrating' uses emotional language rather than business speak. And 'I don't suppose' is deliberately soft and non-pushy, which makes it safe for the prospect to engage. Each problem has to be a genuine trigger or symptom you solve. Not a feature of your product. A frustration the prospect actually experiences.`,
  },
  {
    q: `What is the Hypothetical Bridge technique?`,
    a: `The Hypothetical Bridge is Module 6 of the Sync Selling Cold Calling Framework. It tests whether the prospect is interested in a solution without asking them to commit to anything. The script: 'Hypothetically, if there was a way to [core outcome they want] without [the main pain of the alternatives you just named], that might be something you wouldn't be dead against exploring?' It works because the word 'hypothetically' signals zero commitment. The prospect is free to say yes without feeling like they've agreed to a pitch. 'Wouldn't be dead against' is intentionally soft language. Compare it to 'would you be interested?' which sounds like every other sales call they've had this week. And it contrasts directly with the painful alternatives you described earlier in the call, which makes the hypothetical path feel significantly more attractive by comparison. You wait for the yes before moving to the value-packed next step. If they hesitate, you don't push. You probe: 'What would need to be different?'`,
  },
  {
    q: `What is the best B2B sales qualification framework?`,
    a: `The best qualification framework tests whether the deal can actually close, not just whether the prospect seems keen. Most frameworks stop at budget and authority. That's not qualification. That's box-ticking. In Sync Selling, qualification runs across four areas simultaneously. Business case: can the prospect describe where they are now, where they need to be, and what the gap is costing them? Not in your words. In theirs. If they can't explain to their CFO why doing nothing costs more than buying, the deal is dead regardless of how much they liked your demo. Future state and business impact: what does solving this actually mean for them? Not just the company metric. What does it mean for the person. Professionally. Personally. Getting promoted. Stopping the Sunday night dread. Proving to the board they made the right call. If you don't understand what's really at stake for the individual, you don't understand the deal. Decision process: who makes the final call, what criteria will they use, what's the timeline, and have you mapped every person who touches the decision? More importantly, do you have control of the process or is the prospect running the show? Objections and alternatives: do you know what they'll do if they don't choose you? A competitor? Building in-house? Doing nothing? Each alternative has a weakness, and your job is to surface it before the prospect finds out the hard way. MEDDIC gives you a checklist. Sync Selling gives you a diagnostic. A deal that ticks every box on a checklist can still collapse if the prospect can't sell it internally.`,
  },
  {
    q: `How should I qualify B2B sales deals?`,
    a: `Qualifying deals properly means going beyond 'do they have budget and authority,' which is where most frameworks lose the plot. In Sync Selling, you qualify across four deal risk areas throughout discovery. For business case qualification, the prospect needs to articulate three things in their own words: where they are now, where they need to be, and what the gap between those two points is costing them. If they can't say 'doing nothing is costing us £X per month,' you don't have a qualified business case. You have someone who thought the demo was interesting. For future state qualification, you need to understand what solving this means for the prospect personally and professionally. The company ROI matters, but the real driver is often something unspoken. A promotion. Job security. The chance to stop firefighting and actually build something. If you don't uncover the personal stakes, you're selling to a job title, not a person. For decision process qualification, you need to know who the economic buyer is, whether you've spoken to them directly, what criteria they're using, what the approval process looks like, and when a decision has to be made. You also need to know whether you're controlling the process or just following their lead. For objections and alternatives, you need to map what happens if they don't choose you. A competitor. An internal build. Doing nothing. Every alternative has a failure point. A competitor can't solve the specific problem the way you can. An internal build will take twice as long and cost four times as much. Doing nothing costs £X per month, which they've already quantified. Your job is to make those weaknesses visible before the prospect makes a decision based on incomplete information.`,
  },
  {
    q: `What is Voice of Customer research in B2B sales?`,
    a: `Voice of Customer research means finding out the exact words your prospects use when they describe their problems. Not your marketing department's words. Their words. Because there's a gap between what companies think their customers say and what they actually say. Your website might say 'we help businesses optimise their revenue operations.' Your prospect says 'we're generating loads of leads but the close rate is painful. Lots of proposals going out, not enough coming back signed.' Those are completely different sentences describing the same problem. The second one sells. The first one doesn't. VoC research involves pulling language from sales call transcripts, support tickets, review sites, forum discussions, and competitor complaints. You're mining for the specific vocabulary, the emotional phrases, and the frustrations that come up repeatedly. In Sync Selling, VoC research feeds directly into cold calling scripts, discovery questions, proposal language, and FAQ content. When your sales materials use the prospect's own words, they feel understood. And people buy from people who understand their world. The GTM Diagnostic in Week 1 includes 80+ hours of this research, which is why the scripts it produces sound like a salesperson who's been in the industry for twenty years.`,
  },
  {
    q: `What is the Consistency Principle in Sync Selling?`,
    a: `The Consistency Principle states that every touchpoint has to tell the same story using the same language. Your cold call, your website, your emails, your proposals, your onboarding docs. All of them. If your cold call talks about 'eliminating guesswork from your sales process' but your proposal talks about 'optimising revenue operations,' you've broken consistency. The prospect's brain has to do extra work to connect those two statements. Confused prospects don't buy. In practice, this means using the same problems, the same outcome language, and the same proof points across every stage of the sales process. A prospect who heard you describe their problem a certain way on the cold call should see that exact same framing in the proposal. Not a fancied-up corporate version of it. The same words. Sync Selling covers everything you say, show, and send. The Consistency Principle is what ties those three together. When your scripts, your materials, and your follow-up all sound like they came from the same person who genuinely understands the prospect's situation, trust compounds with every interaction. When they don't match, doubt creeps in. And doubt kills deals.`,
  },
];

/* ─── SCHEMA INJECTION ─── */
function SchemaInjection() {
  useEffect(() => {
    // FAQ Schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://revitk.com/sales-faq#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I handle the 'we need to think about it' objection in B2B sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First response, and most reps get this wrong: 'OK, no problem. When would you like to reschedule?' Not 'take your time.' Not 'I'll follow up next week.' You book the next conversation immediately, because deals that leave without a date in the diary almost never come back. But here's the deeper issue. 'We need to think about it' is not a timing problem. It's a certainty problem. The prospect hasn't got enough information to say yes. They're not stalling for fun. They genuinely don't feel certain enough to commit, and rather than tell you what's missing, they default to the polite exit. Your job is to find out what's creating that uncertainty. The single best question you can ask: 'Let me ask you something. If you decided to not do this, why would the reason be?' That question does something powerful. It gives the prospect permission to voice the real objection without feeling confrontational. Maybe they're worried about implementation. Maybe the CFO won't approve without a clearer business case. Maybe they saw a competitor last week and want to compare. Whatever it is, you can't fix it if you don't know about it. Once the real reason surfaces, you address it directly, then rebook. If they say budget, you walk through the cost of inaction. If they say timing, you quantify what another quarter of delay costs. If they say they need to run it past someone else, you build champion enablement materials on the spot. The worst thing you can do is accept 'think about it' at face value and send a follow-up email three days later. That email goes into the void. Always."
      }
    },
    {
      "@type": "Question",
      "name": "How do I write a B2B sales proposal that actually closes deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your proposal has to sell when you're not in the room. That's the test. It should be able to land on the desk of any stakeholder in your prospect's organisation, someone who has never met you, never seen the demo, and they should be able to pick it up, understand why they need to act, see what problems you're solving, and understand why you're the right people to solve them. Most proposals fail that test completely. They're feature lists dressed up with a logo. They reference the demo. They assume context that only exists in the head of the person you've been talking to. Every other stakeholder looks at it and thinks 'so what?' In Sync Selling, the proposal is a Match-stage asset. It articulates the gap the prospect quantified during discovery, in their words and their numbers. It shows the cost of inaction they calculated themselves. It maps your solution to the specific problems they told you about, not generic capabilities. It includes answers to the objections that other stakeholders will raise. Technical questions for IT. Financial justification for the CFO. Answers to the political concerns from the department head who sees your project as a threat to their priorities. A good proposal also includes a clear decision framework. What happens next, who needs to be involved, what the timeline looks like. You're making it easy for your champion to walk this through their internal approval process without needing to come back to you for every question. Build it like a document that does the selling on your behalf. Because in most B2B deals, the buying happens in rooms you're never invited to."
      }
    },
    {
      "@type": "Question",
      "name": "How do I build a B2B sales process from scratch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Split it into three parts. In Sync Selling we call them the Hook, the Wedge, and the Match. The Hook is how you generate conversations with new prospects. People who know you and people who don't. Cold calls, cold emails, LinkedIn outreach, referral systems. Whatever channels fit your market. The goal isn't to sell anything at this stage. It's to earn the right to a proper conversation by showing you understand their world. The Wedge is your discovery process. This is where the real selling happens, though it doesn't feel like selling. For deals under \\u00a35K to \\u00a315K, you can do this in one call. For bigger deals, plan for two calls. For complex or technical sales, three. You need a set of questions that focus on four things: where the prospect is right now, where they're trying to get to, what the cost of inaction is (what it's costing them every month to not solve this problem), and how they're going to make a decision on solving it. Those four areas give you everything you need to build a business case. The Match is proposals and assets that sell for you when you're not in the room. Documents that clearly show the prospect where they are, where they want to be, and exactly how your solution bridges that gap. Something any stakeholder can pick up, even if they've never spoken to you, and see why they need to act. You need playbooks and assets across all three of those stages. Most founders only build one or two pieces and wonder why deals stall. Sync Selling builds the entire system for you. For \\u00a31 in a 90-minute workshop, you get a wireframed sales playbook showing every asset you need across Hook, Wedge, and Match. That's the easiest way to build a sales process, because you walk away with the blueprint."
      }
    },
    {
      "@type": "Question",
      "name": "Why do B2B sales reps keep losing deals to 'no decision'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research from Jolt shows 44% of B2B deals are lost not to competitors but to indecision. The prospect liked you. Liked the product. Possibly even told you they wanted to move forward. Then nothing happened. The reason is almost always the same. The prospect didn't build enough internal certainty to act. Doing nothing is safe. It's the default. Nobody ever got fired for maintaining the status quo. Buying something new, on the other hand, comes with risk. Implementation risk, political risk, career risk if it doesn't work out. Your job during the sales process is to make the cost of doing nothing more painful than the risk of moving forward. That requires three things most reps never do. First, quantify the gap. Help the prospect calculate, using their own numbers, what inaction costs per month. Lost revenue, wasted hours, deals going dark, missed targets. When they can say 'this is costing us \\u00a3150K a month,' suddenly doing nothing has a price tag. Second, establish the future state. What does solving this mean for the prospect personally? The promotion. The end of Sunday night anxiety. The chance to actually build something instead of firefighting. If you haven't uncovered what's personally at stake, you're selling to a company, not a person. Companies deliberate. People act. Third, eliminate the objections you can't see. The IT director who worries about integration. The finance lead who thinks the timing is wrong. The colleague who sees your project as a threat to their budget. If any of those people have unaddressed concerns, the deal sits in limbo. In Sync Selling we call this the Lake of Maybe, the place where deals go to die quietly. The Bookends Principle exists specifically to prevent this. Before and after every interaction, you address the concerns of every stakeholder who touches the deal."
      }
    },
    {
      "@type": "Question",
      "name": "How do I stop discounting to close B2B deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "People aren't rejecting your price. They're telling you they don't see enough value. Stop trying to fix a value problem with a price solution. Value is not one thing. It's built from three components, and if any of them is weak, the prospect will push back on price even if they can afford it. First, the perceived risk of proceeding. What could go wrong? How difficult is implementation? What if it doesn't work? What will their colleagues think? Every unanswered risk reduces the perceived value of your solution. Your job is to surface those risks proactively and address them before the prospect has to ask. Second, the gap between where they are now and where they want to get to. If that gap is vague, if the prospect can't quantify it, then your solution feels like a nice-to-have rather than a must-have. Gap quantification in Sync Selling makes this concrete. When the prospect has calculated that doing nothing costs \\u00a3150K a month, your \\u00a37,500 solution looks like the obvious choice. Nobody needs a discount when the alternative is haemorrhaging cash. Third, the effort and sacrifice involved in getting to the future state. Implementation burden. Internal politics. Change management. Learning curves. Even if the destination looks attractive, a painful journey makes people hesitate. You need to show that the effort is manageable, that you've done this before with similar companies, and that you'll carry most of the weight. When all three of those are strong, price becomes a detail rather than a dealbreaker. The prospect isn't comparing your price to their budget. They're comparing it to the cost of staying where they are. If you're getting pushed on price consistently, look at which of those three areas is weakest in your sales process. That's where the fix is. Not in your pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Bookends Principle in sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Bookends Principle is a cross-stage concept in Sync Selling. It means that before and after every significant interaction, you address the concerns of all the stakeholders who touch the deal. Not just the person sitting in front of you. Most sales teams sell brilliantly to their main contact and then wonder why the deal stalls. It stalls because the technical buyer had integration questions nobody answered. The financial decision-maker wanted to know about return on effort, not just ROI. And a department head somewhere saw your project as a threat to their budget and killed it quietly in a meeting you weren't invited to. The Bookends Principle forces you to think about technical buyers, financial decision-makers, and political influencers at every stage. Before the demo, you prepare materials that address all three. After the demo, you equip your champion with answers to the questions those stakeholders will ask. If you haven't covered every angle before your champion takes the proposal upstairs, you've left the deal's fate in someone else's hands."
      }
    },
    {
      "@type": "Question",
      "name": "What is BAMFAM in sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BAMFAM stands for Book A Meeting From A Meeting. It's a non-negotiable in Sync Selling. The rule is simple: you never end any interaction without the next step locked in the diary. After a cold call, you book the discovery. After discovery, you book the demo. After the demo, you book the proposal walk-through. After the proposal, you book the decision meeting. No exceptions. Most deals don't die because the prospect said no. They die in the gaps between meetings. The prospect gets busy. Other priorities take over. That urgent problem you discussed on Tuesday feels less urgent by Friday. BAMFAM eliminates those gaps entirely. If the prospect leaves an interaction without knowing exactly what happens next and when, there is no next step. That's not pessimism. That's pattern recognition from hundreds of deals."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Problem Trifecta cold calling technique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Problem Trifecta is Module 3 of the Sync Selling Cold Calling Framework. After earning 30 seconds of attention with a pattern interrupt intro, you demonstrate that you understand the prospect's world by naming three specific problems you solve. Not in your language. In theirs. The structure goes: 'We typically work with [their job title or company type] when they're dealing with one of three frustrating problems...' Then you lay out three pain points with emotional weight. Not corporate jargon. Actual words the prospect would use when complaining to a colleague. You end with: 'I don't suppose any of those sound familiar to you?' The technique works for a few reasons. Three problems is easy to hold in working memory. The word 'frustrating' uses emotional language rather than business speak. And 'I don't suppose' is deliberately soft and non-pushy, which makes it safe for the prospect to engage. Each problem has to be a genuine trigger or symptom you solve. Not a feature of your product. A frustration the prospect actually experiences."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Hypothetical Bridge technique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Hypothetical Bridge is Module 6 of the Sync Selling Cold Calling Framework. It tests whether the prospect is interested in a solution without asking them to commit to anything. The script: 'Hypothetically, if there was a way to [core outcome they want] without [the main pain of the alternatives you just named], that might be something you wouldn't be dead against exploring?' It works because the word 'hypothetically' signals zero commitment. The prospect is free to say yes without feeling like they've agreed to a pitch. 'Wouldn't be dead against' is intentionally soft language. Compare it to 'would you be interested?' which sounds like every other sales call they've had this week. And it contrasts directly with the painful alternatives you described earlier in the call, which makes the hypothetical path feel significantly more attractive by comparison. You wait for the yes before moving to the value-packed next step. If they hesitate, you don't push. You probe: 'What would need to be different?'"
      }
    },
    {
      "@type": "Question",
      "name": "What is the best B2B sales qualification framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best qualification framework tests whether the deal can actually close, not just whether the prospect seems keen. Most frameworks stop at budget and authority. That's not qualification. That's box-ticking. In Sync Selling, qualification runs across four areas simultaneously. Business case: can the prospect describe where they are now, where they need to be, and what the gap is costing them? Not in your words. In theirs. If they can't explain to their CFO why doing nothing costs more than buying, the deal is dead regardless of how much they liked your demo. Future state and business impact: what does solving this actually mean for them? Not just the company metric. What does it mean for the person. Professionally. Personally. Getting promoted. Stopping the Sunday night dread. Proving to the board they made the right call. If you don't understand what's really at stake for the individual, you don't understand the deal. Decision process: who makes the final call, what criteria will they use, what's the timeline, and have you mapped every person who touches the decision? More importantly, do you have control of the process or is the prospect running the show? Objections and alternatives: do you know what they'll do if they don't choose you? A competitor? Building in-house? Doing nothing? Each alternative has a weakness, and your job is to surface it before the prospect finds out the hard way. MEDDIC gives you a checklist. Sync Selling gives you a diagnostic. A deal that ticks every box on a checklist can still collapse if the prospect can't sell it internally."
      }
    },
    {
      "@type": "Question",
      "name": "How should I qualify B2B sales deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Qualifying deals properly means going beyond 'do they have budget and authority,' which is where most frameworks lose the plot. In Sync Selling, you qualify across four deal risk areas throughout discovery. For business case qualification, the prospect needs to articulate three things in their own words: where they are now, where they need to be, and what the gap between those two points is costing them. If they can't say 'doing nothing is costing us \\u00a3X per month,' you don't have a qualified business case. You have someone who thought the demo was interesting. For future state qualification, you need to understand what solving this means for the prospect personally and professionally. The company ROI matters, but the real driver is often something unspoken. A promotion. Job security. The chance to stop firefighting and actually build something. If you don't uncover the personal stakes, you're selling to a job title, not a person. For decision process qualification, you need to know who the economic buyer is, whether you've spoken to them directly, what criteria they're using, what the approval process looks like, and when a decision has to be made. You also need to know whether you're controlling the process or just following their lead. For objections and alternatives, you need to map what happens if they don't choose you. A competitor. An internal build. Doing nothing. Every alternative has a failure point. A competitor can't solve the specific problem the way you can. An internal build will take twice as long and cost four times as much. Doing nothing costs \\u00a3X per month, which they've already quantified. Your job is to make those weaknesses visible before the prospect makes a decision based on incomplete information."
      }
    },
    {
      "@type": "Question",
      "name": "What is Voice of Customer research in B2B sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voice of Customer research means finding out the exact words your prospects use when they describe their problems. Not your marketing department's words. Their words. Because there's a gap between what companies think their customers say and what they actually say. Your website might say 'we help businesses optimise their revenue operations.' Your prospect says 'we're generating loads of leads but the close rate is painful. Lots of proposals going out, not enough coming back signed.' Those are completely different sentences describing the same problem. The second one sells. The first one doesn't. VoC research involves pulling language from sales call transcripts, support tickets, review sites, forum discussions, and competitor complaints. You're mining for the specific vocabulary, the emotional phrases, and the frustrations that come up repeatedly. In Sync Selling, VoC research feeds directly into cold calling scripts, discovery questions, proposal language, and FAQ content. When your sales materials use the prospect's own words, they feel understood. And people buy from people who understand their world. The GTM Diagnostic in Week 1 includes 80+ hours of this research, which is why the scripts it produces sound like a salesperson who's been in the industry for twenty years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Consistency Principle in Sync Selling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Consistency Principle states that every touchpoint has to tell the same story using the same language. Your cold call, your website, your emails, your proposals, your onboarding docs. All of them. If your cold call talks about 'eliminating guesswork from your sales process' but your proposal talks about 'optimising revenue operations,' you've broken consistency. The prospect's brain has to do extra work to connect those two statements. Confused prospects don't buy. In practice, this means using the same problems, the same outcome language, and the same proof points across every stage of the sales process. A prospect who heard you describe their problem a certain way on the cold call should see that exact same framing in the proposal. Not a fancied-up corporate version of it. The same words. Sync Selling covers everything you say, show, and send. The Consistency Principle is what ties those three together. When your scripts, your materials, and your follow-up all sound like they came from the same person who genuinely understands the prospect's situation, trust compounds with every interaction. When they don't match, doubt creeps in. And doubt kills deals."
      }
    }
  ]
}`;
    document.head.appendChild(faqScript);

    // Breadcrumb Schema
    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.text = `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://revitk.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sales FAQ",
      "item": "https://revitk.com/sales-faq"
    }
  ]
}`;
    document.head.appendChild(bcScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(bcScript);
    };
  }, []);
  return null;
}

/* ─── NAVIGATION BAR ─── */
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#0F1923]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/revitk-logo-white.png" alt="Revitk" className="h-12 w-auto cursor-pointer" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">Home</Link>
          <Link href="/offer" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm hover:text-[#C5A572] transition-colors">The Programme</Link>
          <Link href="/sales-faq" className="text-[#C5A572] font-[family-name:var(--font-body)] text-sm font-medium">Sales FAQ</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-[#E63946] text-white font-[family-name:var(--font-body)] font-medium text-sm px-5 py-2.5 rounded hover:bg-[#d32f3c] transition-colors">Book a Call</a>
        </div>
        <button className="md:hidden text-[#F5F0EB]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0F1923] border-t border-white/10 px-6 pb-4 flex flex-col gap-4">
          <Link href="/" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/offer" className="text-[#F5F0EB] font-[family-name:var(--font-body)] text-sm" onClick={() => setMenuOpen(false)}>The Programme</Link>
          <Link href="/sales-faq" className="text-[#C5A572] font-[family-name:var(--font-body)] text-sm font-medium" onClick={() => setMenuOpen(false)}>Sales FAQ</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-[#E63946] text-white font-[family-name:var(--font-body)] font-medium text-sm px-5 py-2.5 rounded text-center">Book a Call</a>
        </div>
      )}
    </nav>
  );
}

/* ─── BREADCRUMB ─── */
function Breadcrumb() {
  return (
    <nav className="bg-[#0B1120] border-b border-white/5 py-3">
      <div className="max-w-6xl mx-auto px-6">
        <ol className="flex items-center gap-2 text-sm font-[family-name:var(--font-body)]">
          <li><Link href="/" className="text-[#F5F0EB]/50 hover:text-[#C5A572]">Home</Link></li>
          <li className="text-[#F5F0EB]/30">/</li>
          <li className="text-[#C5A572]">Sales FAQ</li>
        </ol>
      </div>
    </nav>
  );
}

/* ─── FAQ ACCORDION COMPONENT ─── */
function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/10">
          <button
            className="w-full py-6 flex items-center justify-between text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white pr-4">
              {faq.q}
            </span>
            <span className="text-2xl text-[#C5A572] flex-shrink-0">
              {openIndex === i ? "\u2212" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-6">
              <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/70 leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-[#0B1120] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src="/revitk-logo-white.png" alt="Revitk" className="h-10 w-auto opacity-50" />
        <div className="flex gap-8">
          <Link href="/privacy" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]">Privacy Policy</Link>
          <Link href="/terms" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]">Terms & Conditions</Link>
          <a href="mailto:joe@revitk.com" className="text-[#F5F0EB]/40 text-xs hover:text-[#C5A572]">Contact Us</a>
        </div>
        <p className="text-[#F5F0EB]/30 text-xs">
          \u00a9 {new Date().getFullYear()} Revitk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ASSEMBLY ─── */
export default function SalesFAQ() {
  return (
    <>
      <SchemaInjection />
      <NavBar />
      <Breadcrumb />

      {/* Hero */}
      <section className="bg-[#0B1120] border-t-4 border-[#E63946]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Sales Problems <span className="italic" style={{ color: "#C5A572" }}>Answered</span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#F5F0EB]/80 max-w-3xl mx-auto mb-4">
            Practical answers to the questions B2B founders and sales leaders ask most. Every answer is grounded in the Sync Selling methodology and backed by results from 300+ founders.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-8" />
        </div>
      </section>

      {/* Sales Problems Section */}
      <section className="bg-[#0F1923]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Common Sales Problems
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/60 mb-12">
            The objections, stalls, and frustrations that cost B2B companies the most revenue.
          </p>
          <FAQAccordion faqs={salesFaqs} />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-[#0B1120]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Sync Selling Methodology & Frameworks
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/60 mb-12">
            The principles, techniques, and frameworks behind the system.
          </p>
          <FAQAccordion faqs={methodologyFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1923] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-6">
            Still have questions? Let\u2019s talk.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#F5F0EB]/70 mb-8">
            Book a 30-minute qualification call. No obligation. If we can help, you\u2019ll know. If we can\u2019t, we\u2019ll tell you.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63946] text-white font-[family-name:var(--font-body)] font-semibold text-base px-8 py-4 rounded hover:bg-[#d32f3c] transition-colors"
          >
            Book Your Free Qualification Call
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
