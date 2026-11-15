import { useLayoutEffect, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// Each page's words are already in its HTML, for readers that don't run
// JavaScript (scripts/prerender.mjs). The browser draws the app fresh over
// that copy, and the copy stays unpainted until the app is on screen, so a
// visitor sees exactly what they saw before: nothing, then the app.
function Ready({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    container.removeAttribute("data-prerendered");
  }, []);
  return children;
}

createRoot(container).render(
  <Ready>
    <App />
  </Ready>
);
