// Writes one real HTML file per page, after `vite build` and the server build.
//
// Why: the site is a single-page app, so every address used to send the same
// empty page and the words only appeared once JavaScript ran. ChatGPT, Claude
// and Perplexity don't run JavaScript, so they read nothing. This renders each
// route once at build time and puts its words, its own title and its own
// description into that route's file. Netlify serves /offer from offer.html.
//
// The browser experience is unchanged: main.tsx still draws the app fresh, and
// the built-in copy is kept unpainted until it has (see READY_GUARD below).
//
// Adding a page: add its <Route> in client/src/App.tsx AND a line in PAGES
// here. The build fails if the two lists disagree, because an address with no
// file now answers "not found".

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "public");
const SITE = "https://revitk.com";

// Titles and descriptions are the words each page already carries: the title
// its own code sets, or its main heading, and a line from its opening.
// `hidden` pages stay out of search indexes, as their notes in App.tsx say.
const PAGES = [
  {
    route: "/",
    file: "index.html",
    // title and description stay as client/index.html has them
  },
  {
    route: "/offer",
    file: "offer.html",
    title: "The Sync Selling System | Revitk",
    description:
      "Close one in every two prospects you quote. Inside eight weeks. We find where your sales process leaks money. We build the fix. We stay until it works.",
  },
  {
    route: "/answers",
    file: "answers.html",
    title: "B2B Sales Remediation: Expert Answers | Revitk",
    description:
      "Definitive answers from Joe Milnes, founder of Revitk and creator of the Sync Selling System.",
  },
  {
    route: "/sales-faq",
    file: "sales-faq.html",
    title: "Sales FAQs - Why Deals Stall and How to Fix Them | Revitk",
    description:
      "Answers to the sales questions founders ask most. Why deals go quiet, why price comes up as an objection, how to qualify properly, and why messaging breaks down.",
  },
  {
    route: "/articles",
    file: "articles.html",
    title: "Sales Strategy Articles | Revitk",
    description:
      "Advanced frameworks and playbooks for founders building high-performance sales systems.",
  },
  {
    route: "/articles/building-a-sales-process",
    file: "articles/building-a-sales-process.html",
    title: "How to Build a Sales Process That Closes One in Two Prospects | Revitk",
    description:
      "A deep dive into the 5-stage framework that took a sales team from zero to £1.2M a month.",
  },
  {
    route: "/proof",
    file: "proof.html",
    title: "Will Sync Selling Work For My Business? | Revitk",
    description: "300+ founders. 60 industries. £185M+ in revenue generated.",
  },
  {
    route: "/privacy",
    file: "privacy.html",
    title: "Privacy Policy | Revitk",
    description:
      "Privacy Policy for Revitk LTD. How and why we might collect, store, use, and/or share your information when you use our services.",
  },
  {
    route: "/terms",
    file: "terms.html",
    title: "Terms & Conditions | Revitk",
    description:
      "Please read these terms and conditions carefully before using Our Service.",
  },
  {
    route: "/learn",
    file: "learn.html",
    title: "Should I Book A Call? — Revitk",
    description:
      "Below is everything you need to know about Sync Selling. How we work, what it costs, and whether it will work for your business.",
    hidden: true, // the page's own code already sets noindex, nofollow
  },
  {
    route: "/venture",
    file: "venture.html",
    title:
      "A systemised way to acquire customers. The strongest signal you can send to investors. | Revitk",
    description:
      "The only sales programme designed for busy founders who need a systemised, efficient way to scale.",
    hidden: true, // "Hidden Venture Community Accelerator page" in App.tsx
  },
  {
    route: "/legacy",
    file: "legacy.html",
    hidden: true, // the old homepage, "preserved at /legacy for safety"
  },
  {
    route: "/404",
    file: "404.html",
    title: "Page Not Found | Revitk",
    description:
      "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.",
    hidden: true,
    notFound: true,
  },
];

// Before the app is on screen the built-in copy is not painted, so a visitor
// sees what they saw before this change: nothing, then the app. A reader with
// no JavaScript never gets the "js" class, so nothing is held back from it.
const READY_GUARD =
  '<script>document.documentElement.classList.add("js")</script>' +
  "<style>.js #root[data-prerendered]{visibility:hidden}</style>";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function fail(message) {
  console.error(`\nprerender: ${message}\n`);
  process.exit(1);
}

// 1. The route list in App.tsx and PAGES here must name the same addresses.
const appSource = fs.readFileSync(path.join(root, "client", "src", "App.tsx"), "utf8");
const appRoutes = [...appSource.matchAll(/<Route\s+path=\{?"([^"]+)"\}?/g)].map((m) => m[1]);
const listed = PAGES.map((p) => p.route);
const missing = appRoutes.filter((r) => !listed.includes(r));
const extra = listed.filter((r) => !appRoutes.includes(r));
if (missing.length) fail(`App.tsx has routes with no line in PAGES: ${missing.join(", ")}`);
if (extra.length) fail(`PAGES names routes App.tsx doesn't have: ${extra.join(", ")}`);

// 2. Render.
const templatePath = path.join(outDir, "index.html");
if (!fs.existsSync(templatePath)) fail("dist/public/index.html is missing. Run `vite build` first.");
const template = fs.readFileSync(templatePath, "utf8");
if (!template.includes('<div id="root"></div>')) fail('the built page has no empty <div id="root"></div> to fill.');

const serverEntry = path.join(root, "dist", "server", "entry-server.js");
if (!fs.existsSync(serverEntry)) fail("dist/server/entry-server.js is missing. Run the server build first.");
const { render } = await import(pathToFileURL(serverEntry).href);

// React logs harmless attribute warnings from the old /legacy page while it
// renders. Keep real errors, drop those.
const realError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && args[0].startsWith("Invalid DOM property")) return;
  realError(...args);
};

const written = [];
for (const page of PAGES) {
  let body = render(page.route);

  // Players and embeds are for people. Leaving them in the built-in copy would
  // start each one twice in a browser, once here and once when the app draws.
  body = body
    .replace(/<iframe\b[\s\S]*?<\/iframe>/g, "")
    .replace(/<wistia-player\b[\s\S]*?<\/wistia-player>/g, "");

  const text = body
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const isNotFound = text.includes("Page Not Found");
  if (page.notFound && !isNotFound) fail(`${page.route} should render the not-found page and didn't.`);
  if (!page.notFound && isNotFound) fail(`${page.route} rendered the not-found page. Check its route in App.tsx.`);
  if (!page.notFound && text.length < 300) fail(`${page.route} rendered only ${text.length} characters of text.`);

  // Function replacers throughout: a "$" in the page's own words must not be
  // read as a replacement pattern.
  let html = template.replace(
    '<div id="root"></div>',
    () => `<div id="root" data-prerendered>${body}</div>`
  );
  if (page.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(page.title)}</title>`);
  }
  if (page.description) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      () => `<meta name="description" content="${esc(page.description)}" />`
    );
  }
  const headExtras = [READY_GUARD];
  if (page.hidden) {
    headExtras.push('<meta name="robots" content="noindex, nofollow" />');
  } else {
    headExtras.push(`<link rel="canonical" href="${SITE}${page.route === "/" ? "/" : page.route}" />`);
  }
  html = html.replace("</head>", () => `    ${headExtras.join("\n    ")}\n  </head>`);

  const target = path.join(outDir, page.file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  written.push({ route: page.route, file: page.file, words: text.split(" ").length, hidden: !!page.hidden });
}

console.error = realError;
console.log("\nprerender: wrote a real page for each address");
for (const w of written) {
  console.log(`  ${w.route.padEnd(38)} ${w.file.padEnd(42)} ${String(w.words).padStart(5)} words${w.hidden ? "  (kept out of search)" : ""}`);
}
