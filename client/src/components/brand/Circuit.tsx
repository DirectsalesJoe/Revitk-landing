import React, { RefObject, useLayoutEffect, useState } from "react";

/* ─── PIXEL CIRCUIT ──────────────────────────────────────────────────
 * The pixel circuit look, signed off 6 Nov 2026 from Joe's LinkedIn
 * banner (_brand-assets/pixel-circuit/BRIEF.md in the Sync Selling
 * folder). Yellow traces on a pixel grid start off the left edge, run
 * right and up in right angles, and end in a hollow square node at the
 * edge of a line of words. Two or three traces, never more. A few faint
 * ink-blue pixels of dust, thinning out before the words.
 *
 * The anchors are measured from the real lines of text, so the nodes
 * land at the start of a line at any screen width.
 * ─────────────────────────────────────────────────────────────────── */

const YELLOW = "#FFE414";
const DUST = "#243476";
const DUST_BRIGHT = "#3C50A0";

type Line = { left: number; right: number; top: number; bottom: number };
type Box = { left: number; top: number; right: number; bottom: number };

/** The rendered lines of an element's text, relative to a container. */
function linesOf(el: HTMLElement, origin: DOMRect): Line[] {
  const range = document.createRange();
  range.selectNodeContents(el);
  const rects = Array.from(range.getClientRects()).filter(r => r.width > 2 && r.height > 2);
  const lines: Line[] = [];
  for (const r of rects) {
    const mid = (r.top + r.bottom) / 2;
    const hit = lines.find(l => mid > l.top + origin.top && mid < l.bottom + origin.top);
    if (hit) {
      hit.left = Math.min(hit.left, r.left - origin.left);
      hit.right = Math.max(hit.right, r.right - origin.left);
    } else {
      lines.push({
        left: r.left - origin.left,
        right: r.right - origin.left,
        top: r.top - origin.top,
        bottom: r.bottom - origin.top,
      });
    }
  }
  return lines.sort((a, b) => a.top - b.top);
}

/** Seeded so the dust lands in the same place on every load. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export type TraceTarget = {
  /** The element whose text a trace leads to. */
  ref: RefObject<HTMLElement | null>;
  /** Which rendered line: 0 is the first, -1 the last. */
  line: number;
};

export function PixelCircuit({
  container,
  targets,
  keepClear,
  cell = 7,
  seed = 7,
  dust = 110,
}: {
  container: RefObject<HTMLElement | null>;
  targets: TraceTarget[];
  /** Areas the dust stays out of (the words, the video). */
  keepClear: RefObject<HTMLElement | null>[];
  cell?: number;
  seed?: number;
  dust?: number;
}) {
  const [geo, setGeo] = useState<{
    w: number;
    h: number;
    anchors: { x: number; y: number }[];
    clear: Box[];
  } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const c = container.current;
      if (!c) return;
      const origin = c.getBoundingClientRect();
      const anchors: { x: number; y: number }[] = [];
      for (const t of targets) {
        const el = t.ref.current;
        if (!el) continue;
        const lines = linesOf(el, origin);
        if (!lines.length) continue;
        const l = lines[t.line < 0 ? lines.length + t.line : Math.min(t.line, lines.length - 1)];
        const y = (l.top + l.bottom) / 2;
        // one trace per line of words: a one-line headline gets one, not two
        if (anchors.some(a => Math.abs(a.y - y) < 12)) continue;
        anchors.push({ x: l.left, y });
      }
      const clear = keepClear
        .map(r => r.current?.getBoundingClientRect())
        .filter((r): r is DOMRect => !!r)
        .map(r => ({
          left: r.left - origin.left,
          top: r.top - origin.top,
          right: r.right - origin.left,
          bottom: r.bottom - origin.top,
        }));
      setGeo({ w: origin.width, h: origin.height, anchors, clear });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (container.current) ro.observe(container.current);
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [container]);

  if (!geo || geo.w === 0) return null;
  const c = cell;
  const snap = (v: number) => Math.round(v / c) * c;
  const wide = geo.w >= 900;

  /* Dust: thicker on the left, thinning out towards the words. */
  const rand = rng(seed);
  const dustRects: { x: number; y: number; fill: string }[] = [];
  const pad = c * 3;
  for (let i = 0; i < dust * 4 && dustRects.length < (wide ? dust : dust / 3); i++) {
    const bias = Math.pow(rand(), wide ? 1.8 : 1);
    const x = snap(bias * geo.w);
    const y = snap(rand() * geo.h);
    const inClear = geo.clear.some(b => x > b.left - pad && x < b.right + pad && y > b.top - pad && y < b.bottom + pad);
    if (inClear) continue;
    dustRects.push({ x, y, fill: rand() < 0.12 ? DUST_BRIGHT : DUST });
  }

  /* Traces: only where there's room beside the words. */
  const traces: React.ReactElement[] = [];
  if (wide) {
    const shapes = [
      { drop: 9, run: 0.42, branch: true },
      { drop: 6, run: 0.66, branch: false },
      { drop: 5, run: 0.25, branch: false },
    ];
    geo.anchors.slice(0, 3).forEach((a, i) => {
      const s = shapes[i % shapes.length];
      const y = snap(a.y - c / 2);
      const nodeRight = snap(a.x - c * 2);
      const nodeLeft = nodeRight - c * 3;
      if (nodeLeft < c * 8) return;
      const startY = y + s.drop * c;
      const turnX = snap(nodeLeft * s.run);
      const parts = [
        // in from off the left edge
        <rect key="h1" x={-c} y={startY} width={turnX + 2 * c} height={c} />,
        // up to the line of words
        <rect key="v" x={turnX} y={y} width={c} height={startY - y + c} />,
        // across to the node
        <rect key="h2" x={turnX} y={y} width={nodeLeft - turnX} height={c} />,
        // the node: a hollow square three cells across
        <path
          key="n"
          fillRule="evenodd"
          d={`M${nodeLeft} ${y - c}h${3 * c}v${3 * c}h${-3 * c}z M${nodeLeft + c} ${y}v${c}h${c}v${-c}z`}
        />,
      ];
      if (s.branch) {
        const bx = snap(turnX + (nodeLeft - turnX) * 0.45);
        parts.push(<rect key="b" x={bx} y={y - 4 * c} width={c} height={4 * c} />);
        parts.push(<rect key="s1" x={bx + 3 * c} y={y - 5 * c} width={c} height={c} />);
      }
      parts.push(<rect key="s2" x={snap(turnX * 0.55)} y={startY + 4 * c} width={c} height={c} />);
      traces.push(<g key={i}>{parts}</g>);
    });
  }

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      width={geo.w}
      height={geo.h}
      viewBox={`0 0 ${geo.w} ${geo.h}`}
      shapeRendering="crispEdges"
    >
      {dustRects.map((d, i) => (
        <rect key={i} x={d.x} y={d.y} width={c} height={c} fill={d.fill} />
      ))}
      <g fill={YELLOW}>{traces}</g>
    </svg>
  );
}

/* ─── TICK BOX ───────────────────────────────────────────────────────
 * Status is a tick box from a form, drawn by hand (skin D).
 * ─────────────────────────────────────────────────────────────────── */
export function TickBox({ ticked = true, crossed = false }: { ticked?: boolean; crossed?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true" className="flex-none mt-[3px]">
      <rect x="1.5" y="2.5" width="13" height="13" rx="1" fill="none" stroke="#111D4A" strokeWidth="1.8" />
      {ticked && !crossed && (
        <path
          d="M4.6 9.6 C5.9 10.8 6.9 12.1 7.6 13.4 C9.3 9.7 11.7 6.4 15 3.9"
          fill="none"
          stroke="#1F3FBF"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {crossed && (
        <path
          d="M4.8 5.6 C6.8 8 9 10.6 11.4 12.6 M11.2 5.4 C9.2 7.9 7 10.3 4.9 12.4"
          fill="none"
          stroke="#4B5680"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
