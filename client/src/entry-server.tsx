// Build-time only. scripts/prerender.mjs calls render() once per route after
// `vite build`, and writes the result into that route's own HTML file, so a
// reader that doesn't run JavaScript (ChatGPT, Claude, Perplexity) gets the
// page's words. The browser still starts the app from main.tsx as before.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render(path: string): string {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>
  );
}
