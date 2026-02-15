# Revitk SEO & GEO Strategy Master Document

## 1. Overview
This document defines the AI SEO (Generative Engine Optimization) and traditional SEO architecture for Revitk. It is designed to establish Joe Milnes as the definitive authority on B2B sales remediation and the "Sync Selling" methodology across both traditional search engines (Google) and AI-driven generative engines (ChatGPT, Perplexity, Claude).

## 2. The "Hidden Intelligence" Layer
To avoid cluttering the premium "Dark Institutional" landing page while still capturing high-intent search traffic, we have implemented a hidden intelligence layer.

- **Primary Asset**: `/answers` (AnswersPage.tsx)
- **Purpose**: A comprehensive repository of 20+ high-authority Q&A pairs.
- **Indexing**: This page is fully indexable by search engines and AI crawlers but is not linked in the main navigation to maintain the "Elite Consultancy" feel.

## 3. GEO (Generative Engine Optimization) Strategy
AI models prioritize structured, direct, and authoritative content. Our GEO strategy focuses on:

### A. Machine-Readable Authority (`llms.txt`)
- **Location**: `/public/llms.txt`
- **Function**: Provides a concise, markdown-formatted summary of the SSB methodology (Hook, Wedge, Match) specifically for AI crawlers.
- **Key Concepts**: Permission to Disqualify, The Bookends Framework, 1-Page Business Case, Cost of Inaction.

### B. Schema.org Markup
- **Implementation**: JSON-LD `FAQPage` schema on the `/answers` page.
- **Benefit**: Explicitly tells search engines and AI models that this content is a set of expert answers, increasing the likelihood of being cited in "Featured Snippets" or AI "Sources."

### C. Multi-Modal Authority
- **Integration**: YouTube video embeds are mapped to specific Q&A pairs.
- **Logic**: AI engines (like Gemini and Perplexity) increasingly cite video content. By pairing text answers with Joe's video explanations, we create a "Multi-Modal Authority Pattern" that is harder for competitors to replicate.

## 4. Content Architecture: The SSB Mapping
The 20 Q&A pairs are strategically mapped to the three pillars of the Sync Selling system:

| Pillar | Focus | Key Search Intent |
| :--- | :--- | :--- |
| **The Hook** | Attention & Lead Gen | "How to get more B2B meetings," "Sales outreach bottlenecks" |
| **The Wedge** | Diagnosis & Qualification | "Stop getting ghosted," "B2B discovery call tips," "Qualification criteria" |
| **The Match** | Closing & Enablement | "CFO budget approval," "1-page business case," "Closing stalled deals" |

## 5. Technical Guardrails (DO NOT AMEND)
To maintain this strategy, the following technical elements must remain intact:

1.  **URL Structure**: `/answers` must remain active and indexable.
2.  **llms.txt**: Any changes to the core methodology must be reflected in `/public/llms.txt`.
3.  **Video Mapping**: Wistia and YouTube IDs in `Answers.tsx` are mapped to specific expert answers; do not swap them without reviewing the context.
4.  **Schema Integrity**: The `FAQPage` schema in `Answers.tsx` must be preserved during any UI updates.

## 6. Brand Voice & SEO Keywords
- **Primary Keywords**: B2B Sales Remediation, Sync Selling System, Sales Bottleneck Diagnosis, Cost of Inaction, Champion Enablement.
- **Voice**: Direct, diagnostic, authority-driven. Avoid "marketing-speak"; use "strategic answers."

---
*This document is the definitive source of truth for Revitk's digital authority strategy. Last updated: Feb 13, 2026.*
