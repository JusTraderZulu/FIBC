import Image from "next/image";

export default function HolySynodSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand))]/5 via-white to-[hsl(var(--accent))]/5"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[hsl(var(--brand))]"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[hsl(var(--accent))]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[hsl(var(--brand))]"></div>
      </div>
      
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <header className="text-center space-y-6 mb-12">
          {/* Official Seal */}
          <div className="flex justify-center">
            <Image
              src="/apostolic-holy-synod-seal.jpeg"
              alt="Apostolic and Patriarchal Holy Synod Official Seal"
              width={140}
              height={140}
              className="drop-shadow-xl"
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[hsl(var(--ink))] leading-tight">
              THE APOSTOLIC AND PATRIARCHAL
              <span className="block text-[hsl(var(--brand))]">HOLY SYNOD</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-[hsl(var(--ink))]/80 font-medium">
                Faith International Baptist Convention Inc. Worldwide Fellowship
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-px bg-[hsl(var(--accent))]"></div>
                <p className="text-sm text-[hsl(var(--ink))]/60 px-3">
                  Established under Act of Parliament No. 27 of 1995 and the Apostolic Constitution
                </p>
                <div className="w-12 h-px bg-[hsl(var(--accent))]"></div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
              <span className="text-xl">📜</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[hsl(var(--brand))]">About the Holy Synod</h2>
          </div>
          
          <div className="space-y-6 text-[hsl(var(--ink))]/80 leading-relaxed">
            <p className="text-lg">
              The Apostolic and Patriarchal Holy Synod stands as the <strong className="text-[hsl(var(--brand))]">Supreme Ecclesiastical and Canonical Council</strong> of the
              Faith International Baptist Convention Inc. Worldwide Fellowship.
            </p>
            <p>
              It is the highest spiritual and doctrinal authority within the Apostolic and Patriarchal Household — the body
              through which divine wisdom, discipline, and order are preserved across the global Fellowship.
            </p>
            <p>
              Founded by Apostolic Decree of the Apostolic and Patriarchal Household, the Holy Synod functions as the
              central governing tribunal for doctrine, discipline, and canonical interpretation, serving as the guardian of
              Apostolic Truth and the preserver of sacred order within the Worldwide Fellowship.
            </p>
          </div>
        </div>

        {/* Motto */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-[hsl(var(--accent))]/10 via-[hsl(var(--accent))]/5 to-[hsl(var(--accent))]/10 rounded-2xl p-8 text-center border border-[hsl(var(--accent))]/20">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl font-serif italic text-[hsl(var(--brand))] font-bold">
              "Sapientia et Disciplina Regunt"
            </blockquote>
            <p className="text-[hsl(var(--ink))]/70 mt-2 font-medium">
              Wisdom and Order Shall Reign
            </p>
          </div>
        </div>

        {/* Purpose and Function */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[hsl(var(--brand))]">Purpose and Function</h3>
          </div>
          
          <div className="grid gap-4">
            {[
              "Guard and interpret Apostolic Doctrine, ensuring theological purity and unity of faith.",
              "Ratify appointments and consecrations to Apostolic and Patriarchal offices.",
              "Oversee canonical legislation, moral discipline, and ecclesiastical order.",
              "Provide counsel and direction to the Apostolic Bishop and Patriarchal Leader on matters of global faith and governance.",
              "Serve as the final court of appeal in all doctrinal or disciplinary cases within the Fellowship."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[hsl(var(--brand))]/5 transition-colors group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <p className="text-[hsl(var(--ink))]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-[hsl(var(--brand))]/5 rounded-lg border-l-4 border-[hsl(var(--brand))]">
            <p className="text-[hsl(var(--ink))]/80 leading-relaxed">
              <strong className="text-[hsl(var(--brand))]">Process:</strong> All resolutions of the Holy Synod are transmitted through the Worldwide Fellowship Apostolic Governing Council
              and subsequently ratified by the Joint Congregations of the Sacred Congregation of Apostles and the Apostolic
              and Patriarchal Council.
            </p>
          </div>
        </div>

        {/* Governance Principle - Now at the top */}
        <div className="bg-gradient-to-br from-[hsl(var(--brand))]/10 to-[hsl(var(--brand))]/5 rounded-2xl p-8 border border-[hsl(var(--brand))]/20 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/20 flex items-center justify-center">
              <span className="text-xl">🌟</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[hsl(var(--brand))]">Governance Principle</h3>
          </div>
          
          <p className="text-[hsl(var(--ink))]/80 leading-relaxed text-center text-lg">
            The Holy Synod embodies the timeless Apostolic principle that <strong className="text-[hsl(var(--brand))]">spiritual order is sustained by wisdom, discipline, and unity</strong> under divine guidance. It functions not merely as an assembly, but as the <strong className="text-[hsl(var(--brand))]">living expression of Apostolic and Patriarchal continuity</strong> — guiding the Fellowship in faith, governance, and global mission.
          </p>
        </div>

        {/* Structure and Composition */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
                <span className="text-xl">🏛️</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[hsl(var(--brand))]">Structure & Composition</h3>
            </div>
            
            <div className="space-y-3">
              {[
                "The Apostolic Bishop and Patriarchal Leader – Presiding Prelate and Supreme Head",
                "The Sacred Congregation of Apostles",
                "The College of Patriarchs and Matriarchs",
                "The Apostolic Secretary-General and Deputy Secretary-General",
                "The Apostolic Dean, Prefect and Chancellor",
                "Regional Apostolic Bishops and Senior Apostolic Elders"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 group-hover:scale-125 transition-transform"></div>
                  <p className="text-[hsl(var(--ink))]/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-[hsl(var(--accent))]/5 rounded-lg text-xs text-[hsl(var(--ink))]/70">
              <strong>Note:</strong> Associate participants may attend by invitation but do not hold voting privileges.
            </div>
          </div>

          {/* Secretariat */}
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand))]/10 flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[hsl(var(--brand))]">The Secretariat</h3>
            </div>
            
            <p className="text-[hsl(var(--ink))]/80 text-sm leading-relaxed mb-4">
              Administrative and canonical functions carried out under direct supervision of the Apostolic Bishop and Patriarchal Leader.
            </p>
            
            <div className="space-y-3">
              {[
                "Maintaining official records and decrees",
                "Preparing meeting agendas and communications",
                "Managing canonical archives and registries",
                "Liaising with Ecclesiastical Administrative Affairs"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 group-hover:scale-125 transition-transform"></div>
                  <p className="text-[hsl(var(--ink))]/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
