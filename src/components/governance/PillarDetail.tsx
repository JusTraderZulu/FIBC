import { PillarBlock } from "@/types/governance";
import { useEffect, useState } from "react";
import { SECRETARIATS_DETAILED, SecretariatDetail } from "@/data/governance/secretariats-detailed";
import { COUNCILS_DETAILED, CouncilDetail } from "@/data/governance/councils-detailed";
import { INSTITUTIONS_DETAILED, InstitutionDetail } from "@/data/governance/institutions-detailed";
import SecretariatDetailModal from "./SecretariatDetail";
import CouncilDetailModal from "./CouncilDetail";
import InstitutionDetailModal from "./InstitutionDetail";

export default function PillarDetail({ pillar, onClose }: { pillar: PillarBlock; onClose: () => void }) {
  const [selectedSecretariat, setSelectedSecretariat] = useState<SecretariatDetail | null>(null);
  const [selectedCouncil, setSelectedCouncil] = useState<CouncilDetail | null>(null);
  const [selectedInstitution, setSelectedInstitution] = useState<InstitutionDetail | null>(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedSecretariat) {
          setSelectedSecretariat(null);
        } else if (selectedCouncil) {
          setSelectedCouncil(null);
        } else if (selectedInstitution) {
          setSelectedInstitution(null);
        } else {
          onClose();
        }
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, selectedSecretariat, selectedCouncil, selectedInstitution]);

  // Function to find secretariat by name match
  const findSecretariat = (secretariatText: string): SecretariatDetail | null => {
    return SECRETARIATS_DETAILED.find(sec => 
      secretariatText.includes(sec.shortName) || 
      sec.shortName.includes(secretariatText.split(' — ')[0]) ||
      secretariatText.toLowerCase().includes(sec.id.replace('-', ' '))
    ) || null;
  };

  // Function to find council by name match
  const findCouncil = (councilText: string): CouncilDetail | null => {
    return COUNCILS_DETAILED.find(council => 
      councilText.includes(council.shortName) || 
      council.shortName.includes(councilText) ||
      councilText.toLowerCase().includes(council.id.replace('-', ' '))
    ) || null;
  };

  // Function to find institution by name match
  const findInstitution = (institutionText: string): InstitutionDetail | null => {
    return INSTITUTIONS_DETAILED.find(inst => 
      institutionText.includes(inst.shortName) || 
      inst.shortName.includes(institutionText) ||
      institutionText.toLowerCase().includes(inst.id.replace('-', ' '))
    ) || null;
  };

  // Get section icon based on title
  const getSectionIcon = (title: string) => {
    const iconMap: Record<string, string> = {
      "Pillar Head": "👑",
      "Key Officers": "🎖️",
      "Administrative Body": "📊",
      "Chief of Staff": "⭐",
      "Secretariats": "📋",
      "Leadership Bodies": "🏛️",
      "Councils & Commissions": "⚖️",
      "Media & Devotions": "📺",
      "Institutions & Foundations": "🏫",
      "Directors": "👨‍💼",
      "Special Advisors": "🎯"
    };
    return iconMap[title] || "📄";
  };

  // Render a section only if content exists - Professional Card Design
  const Section = ({ title, items }: { title: string; items?: string[] }) =>
    items && items.length ? (
      <div className="bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand))]/90 text-white p-4 rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-lg">{getSectionIcon(title)}</span>
            </div>
            <h4 className="font-semibold text-lg">{title}</h4>
            <div className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">
              {items.length} {items.length === 1 ? 'position' : 'positions'}
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            {items.map((item, i) => {
              // Check if item contains a name and title (has —)
              const hasRole = item.includes(' — ');
              const [name, role] = hasRole ? item.split(' — ') : [item, ''];
              
              // Check what type of clickable element this is
              const isSecretariat = title === "Secretariats";
              const isCouncil = title === "Councils & Commissions";
              const isInstitution = title === "Institutions & Foundations";
              
              const secretariatDetail = isSecretariat ? findSecretariat(item) : null;
              const councilDetail = isCouncil ? findCouncil(item) : null;
              const institutionDetail = isInstitution ? findInstitution(item) : null;
              
              const isClickable = secretariatDetail || councilDetail || institutionDetail;
              
              const handleClick = () => {
                if (secretariatDetail) {
                  setSelectedSecretariat(secretariatDetail);
                } else if (councilDetail) {
                  setSelectedCouncil(councilDetail);
                } else if (institutionDetail) {
                  setSelectedInstitution(institutionDetail);
                }
                // Future: Add handlers for people, media, etc.
              };
              
              return (
                <div 
                  key={i} 
                  className={`group p-4 rounded-lg border border-black/5 hover:border-[hsl(var(--brand))]/30 hover:bg-[hsl(var(--brand))]/5 transition-all ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={handleClick}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/80 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      {hasRole ? (
                        <div>
                          <p className="font-semibold text-[hsl(var(--ink))] text-base leading-relaxed mb-2">{role}</p>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${
                            isClickable 
                              ? 'bg-[hsl(var(--accent))]/10 border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20' 
                              : 'bg-[hsl(var(--brand))]/10 border-[hsl(var(--brand))]/20 group-hover:bg-[hsl(var(--brand))]/20'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${isClickable ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--brand))]'}`}></div>
                            <span className={`text-sm font-bold ${isClickable ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--brand))]'}`}>{name}</span>
                            {isClickable && (
                              <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
                          isClickable 
                            ? 'bg-[hsl(var(--accent))]/10 border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20' 
                            : 'bg-[hsl(var(--brand))]/10 border-[hsl(var(--brand))]/20 group-hover:bg-[hsl(var(--brand))]/20'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${isClickable ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--brand))]'}`}></div>
                          <span className={`font-semibold ${isClickable ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--ink))]'}`}>{item}</span>
                          {isClickable && (
                            <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ) : null;

  // Extract pillar number and get icon
  const pillarNumber = pillar.title.match(/Pillar (\d+)/)?.[1] || "1";
  const getPillarIcon = (num: string) => {
    const icons = {
      "1": "👑", "2": "⛪", "3": "🏛️", "4": "📋", 
      "5": "⚖️", "6": "💰", "7": "🎓"
    };
    return icons[num as keyof typeof icons] || "🏛️";
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[800px] max-h-[90vh] overflow-y-auto bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-black/10 focus:outline-none">
        
        {/* Enhanced Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand))]/90 text-white p-6 rounded-t-2xl md:rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
                {getPillarIcon(pillarNumber)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    Pillar {pillarNumber}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {pillar.title.replace(/^Pillar \d+ — /, "")}
                </h3>
                {pillar.subtitle && (
                  <p className="text-white/80 text-sm mt-1">{pillar.subtitle}</p>
                )}
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

        {/* Content Area */}
        <div className="p-6 space-y-6">
          {pillar.pillarHead && (
            <div className="bg-gradient-to-r from-[hsl(var(--accent))]/10 to-[hsl(var(--accent))]/5 rounded-xl border border-[hsl(var(--accent))]/20 overflow-hidden">
              <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent))]/90 text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-lg">👑</span>
                  </div>
                  <h4 className="font-semibold text-lg">Pillar Head</h4>
                  <div className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">
                    Leadership
                  </div>
                </div>
              </div>
              <div className="p-6">
                {Array.isArray(pillar.pillarHead) ? (
                  <div className="space-y-4">
                    {pillar.pillarHead.map((p, i) => {
                      const hasRole = p.includes(' — ');
                      const [name, role] = hasRole ? p.split(' — ') : [p, ''];
                      
                      return (
                        <div key={i} className="group p-4 rounded-lg border border-black/5 hover:border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))]/5 transition-all cursor-pointer">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/80 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                              {i + 1}
                            </div>
                            <div className="flex-1">
                              {hasRole ? (
                                <div>
                                  <p className="font-semibold text-[hsl(var(--ink))] text-base leading-relaxed mb-2">{role}</p>
                                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]"></div>
                                    <span className="text-sm text-[hsl(var(--accent))] font-bold">{name}</span>
                                    <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              ) : (
                                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]"></div>
                                  <span className="text-[hsl(var(--ink))] font-semibold text-base">{p}</span>
                                  <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="group p-4 rounded-lg border border-black/5 hover:border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))]/5 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/80 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]"></div>
                          <span className="text-[hsl(var(--ink))] font-semibold text-base">{pillar.pillarHead}</span>
                          <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <Section title="Key Officers" items={pillar.keyOfficers} />
          <Section title="Administrative Body" items={pillar.administrativeBody} />
          <Section title="Chief of Staff" items={pillar.chiefOfStaff} />
          <Section title="Secretariats" items={pillar.secretariats} />
          <Section title="Leadership Bodies" items={pillar.leadershipBodies} />
          <Section title="Councils & Commissions" items={pillar.councilsAndCommissions} />
          <Section title="Media & Devotions" items={pillar.mediaAndDevotions} />
          <Section title="Institutions & Foundations" items={pillar.institutionsAndFoundations} />
          <Section title="Directors" items={pillar.directors} />

          {pillar.standaloneBody && (
            <div className="bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent))]/90 text-white p-4 rounded-t-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-lg">🏢</span>
                  </div>
                  <h4 className="font-semibold text-lg">{pillar.standaloneBody.name}</h4>
                  <div className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">
                    {pillar.standaloneBody.roles.length} positions
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-4">
                  {pillar.standaloneBody.roles.map((role, i) => {
                    const hasRole = role.includes(' — ');
                    const [name, position] = hasRole ? role.split(' — ') : [role, ''];
                    
                    return (
                      <div key={i} className="group p-4 rounded-lg border border-black/5 hover:border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))]/5 transition-all cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/80 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            {hasRole ? (
                              <div>
                                <p className="font-semibold text-[hsl(var(--ink))] text-base leading-relaxed mb-2">{position}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]"></div>
                                  <span className="text-sm text-[hsl(var(--accent))] font-bold">{name}</span>
                                  <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]"></div>
                                <span className="text-[hsl(var(--ink))] font-semibold">{role}</span>
                                <svg className="w-3 h-3 text-[hsl(var(--accent))]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <Section title="Special Advisors" items={pillar.specialAdvisors} />
        </div>
      </div>
      
      {/* Detail Modals */}
      {selectedSecretariat && (
        <SecretariatDetailModal 
          secretariat={selectedSecretariat} 
          onClose={() => setSelectedSecretariat(null)} 
        />
      )}
      
      {selectedCouncil && (
        <CouncilDetailModal 
          council={selectedCouncil} 
          onClose={() => setSelectedCouncil(null)} 
        />
      )}
      
      {selectedInstitution && (
        <InstitutionDetailModal 
          institution={selectedInstitution} 
          onClose={() => setSelectedInstitution(null)} 
        />
      )}
    </div>
  );
}
