import { PillarBlock } from "@/types/governance";
import { PILLARS } from "@/lib/data/pillars";
import Image from "next/image";

export default function PillarCard({ pillar, onOpen }: { pillar: PillarBlock; onOpen: () => void }) {
  // Extract pillar number from title
  const pillarNumber = pillar.title.match(/Pillar (\d+)/)?.[1] || "1";
  
  // Get pillar icon based on number
  const getPillarIcon = (num: string) => {
    const icons = {
      "1": "👑", // Apostolic & Patriarchal Household
      "2": "⛪", // Sacred Congregation of Apostles  
      "3": "🏛️", // Office of the Executive Chairman
      "4": "📋", // Office of the Apostolic Secretary-General
      "5": "⚖️", // Ecclesiastical Administrative Affairs
      "6": "💰", // Economy, Governance Integrity & Sustainability
      "7": "🎓", // Formation, Education & Digital Transformation
    };
    return icons[num as keyof typeof icons] || "🏛️";
  };

  // Get the seal from PILLARS data if available
  const pillarIndex = parseInt(pillarNumber) - 1;
  const pillarData = PILLARS[pillarIndex];
  const hasSeal = pillarData?.seal?.src;

  return (
    <button
      onClick={onOpen}
      className="group w-full text-left rounded-2xl border border-black/10 bg-gradient-to-br from-white via-white to-[hsl(var(--brand))]/5 p-6 hover:shadow-lg hover:shadow-[hsl(var(--brand))]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 active:scale-[0.98] hover:border-[hsl(var(--brand))]/20"
    >
      <div className="space-y-4">
        {/* Pillar Header */}
        <div className="flex items-start gap-4">
          {hasSeal && pillarData.seal ? (
            <div className="flex-shrink-0 w-16 h-16 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={pillarData.seal.src}
                alt={pillarData.seal.alt}
                width={64}
                height={64}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          ) : (
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand))]/80 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              {getPillarIcon(pillarNumber)}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                Pillar {pillarNumber}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--ink))] leading-tight group-hover:text-[hsl(var(--brand))] transition-colors">
              {pillar.title.replace(/^Pillar \d+ — /, "")}
            </h3>
          </div>
        </div>

        {/* Subtitle */}
        {pillar.subtitle && (
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--ink))]/60">
            <svg className="w-4 h-4 text-[hsl(var(--brand))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {pillar.subtitle}
          </div>
        )}

        {/* Action */}
        <div className="flex items-center justify-between pt-2 border-t border-black/5">
          <span className="text-xs text-[hsl(var(--ink))]/50 group-hover:text-[hsl(var(--brand))]/70 transition-colors">
            View organizational structure
          </span>
          <svg className="w-4 h-4 text-[hsl(var(--brand))]/60 group-hover:text-[hsl(var(--brand))] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
