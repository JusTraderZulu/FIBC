import { useEffect } from "react";
import { SecretariatDetail } from "@/data/governance/secretariats-detailed";

interface SecretariatDetailProps {
  secretariat: SecretariatDetail;
  onClose: () => void;
}

export default function SecretariatDetailModal({ secretariat, onClose }: SecretariatDetailProps) {
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
        <div className="sticky top-0 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent))]/90 text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
                {secretariat.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    Secretariat
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  {secretariat.shortName}
                </h3>
              </div>
            </div>
            <button 
              onClick={onClose} 
              aria-label="Close" 
              className="rounded-full p-2 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
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
              {secretariat.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="bg-gradient-to-r from-[hsl(var(--accent))]/5 to-transparent rounded-xl p-6 border border-[hsl(var(--accent))]/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                <span className="text-lg">📋</span>
              </div>
              <h4 className="font-semibold text-[hsl(var(--brand))] text-lg">Key Responsibilities</h4>
            </div>
            
            <div className="space-y-3">
              {secretariat.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[hsl(var(--accent))]/5 transition-colors group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-sm text-center">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact/Report Section */}
          <div className="bg-[hsl(var(--brand))]/5 rounded-xl p-6 border border-[hsl(var(--brand))]/10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--brand))]/20 flex items-center justify-center">
                <span className="text-lg">📞</span>
              </div>
              <h4 className="font-semibold text-[hsl(var(--brand))] text-lg">Contact This Secretariat</h4>
            </div>
            
            <p className="text-[hsl(var(--ink))]/70 text-sm mb-4">
              For matters related to this secretariat, you can contact them directly or report through the AGC.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/about/agc"
                className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-4 py-2 text-sm font-semibold hover:bg-[hsl(var(--brand))]/90 transition-colors"
              >
                Report to AGC
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-4 py-2 text-sm font-semibold hover:bg-[hsl(var(--brand))]/5 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

