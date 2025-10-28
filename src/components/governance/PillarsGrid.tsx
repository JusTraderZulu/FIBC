"use client";

import { useState } from "react";
import { pillars } from "@/data/governance/pillars";
import PillarCard from "./PillarCard";
import PillarDetail from "./PillarDetail";

export default function PillarsGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      <header className="text-center space-y-6 mb-12">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand))]/80 flex items-center justify-center shadow-lg">
            <span className="text-2xl">🏛️</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[hsl(var(--ink))]">
            Governance Pillars of the 
            <span className="block text-[hsl(var(--brand))]">Holy Synod</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-[hsl(var(--accent))]"></div>
            <p className="text-[hsl(var(--ink))]/60 px-3">
              Click a pillar to explore its organizational structure
            </p>
            <div className="w-8 h-px bg-[hsl(var(--accent))]"></div>
          </div>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pillars.map((p, i) => (
          <PillarCard key={i} pillar={p} onOpen={() => setOpenIndex(i)} />
        ))}
      </div>

      {openIndex !== null && (
        <PillarDetail pillar={pillars[openIndex]} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}
