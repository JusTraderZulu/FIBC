import { useEffect } from "react";
import { InstitutionDetail } from "@/data/governance/institutions-detailed";

interface InstitutionDetailProps {
  institution: InstitutionDetail;
  onClose: () => void;
}

export default function InstitutionDetailModal({ institution, onClose }: InstitutionDetailProps) {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-black/10 focus:outline-none">
        
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent))]/90 text-black p-6 rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur flex items-center justify-center text-2xl">
                {institution.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/10 text-black">
                    Institution
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  {institution.shortName}
                </h3>
              </div>
            </div>
            <button 
              onClick={onClose} 
              aria-label="Close" 
              className="rounded-full p-2 hover:bg-black/10 text-black/80 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div className="text-center">
            <p className="text-lg text-[hsl(var(--ink))]/80 leading-relaxed">
              {institution.description}
            </p>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-r from-[hsl(var(--accent))]/5 to-transparent rounded-xl p-6 border border-[hsl(var(--accent))]/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                <span className="text-lg">🎯</span>
              </div>
              <h4 className="font-semibold text-[hsl(var(--brand))] text-lg">Mission & Purpose</h4>
            </div>
            
            <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-sm text-center">
              {institution.purpose}
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[hsl(var(--brand))]/5 rounded-xl p-6 border border-[hsl(var(--brand))]/10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--brand))]/20 flex items-center justify-center">
                <span className="text-lg">📞</span>
              </div>
              <h4 className="font-semibold text-[hsl(var(--brand))] text-lg">Learn More</h4>
            </div>
            
            <p className="text-[hsl(var(--ink))]/70 text-sm mb-4">
              For more information about this institution or to get involved, contact us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/institutions"
                className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-4 py-2 text-sm font-semibold hover:bg-[hsl(var(--brand))]/90 transition-colors"
              >
                View All Institutions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-4 py-2 text-sm font-semibold hover:bg-[hsl(var(--brand))]/5 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

