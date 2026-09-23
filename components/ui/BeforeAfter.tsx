"use client";

import Image from "next/image";
import { useState } from "react";

type Img = { src: string; alt: string; label: string };

/** Comparateur avant / après, piloté par un curseur natif (souris, tactile et clavier). */
export function BeforeAfter({ before, after }: { before: Img; after: Img }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[3/2] select-none overflow-hidden rounded-md bg-mist">
      <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgb(0_0_0/.15)]" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
        </div>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-night/80 px-2.5 py-1 text-sm font-semibold text-white">{before.label}</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-night/80 px-2.5 py-1 text-sm font-semibold text-white">{after.label}</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Comparer : ${before.label} et ${after.label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-0"
      />
    </div>
  );
}
