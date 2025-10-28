import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BLURBS } from "@/lib/seed";
import { COUNCILS } from "@/lib/data/councils";

export const metadata = { title: "Governance Councils & Commissions" };

export default function Page() {
  return (
    <div>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
        <Section className="pt-2 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Governance Councils & Commissions
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-4">
              {BLURBS.councilsCommissionsIntro}
            </p>
            <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
            
            {/* Councils Cards - Right underneath the line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {COUNCILS.map((council) => (
                <div key={council.id} className="group">
                  <Card 
                    title={council.name} 
                    description={council.blurb} 
                    href={`/governance/${council.slug}`}
                    className="h-full"
                  >
                    {/* Council Seal Display */}
                    <div className="mt-4 flex justify-center">
                      {council.seal ? (
                        <Image
                          src={council.seal.src}
                          alt={council.seal.alt}
                          width={80}
                          height={80}
                          className="opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        /* Placeholder for missing seal */
                        <div className="w-[80px] h-[80px] bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center border-2 border-[hsl(var(--brand))]/20 group-hover:border-[hsl(var(--brand))]/40 transition-colors">
                          <div className="text-center">
                            <span className="text-2xl block mb-1">🏛️</span>
                            <span className="text-xs text-black/60 leading-tight">Seal<br/>Coming</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Council Status */}
                    <div className="mt-3 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                        Advisory Council
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Expert Guidance</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Commissions and Councils provide expert guidance and due process in worship, doctrine, ethics, 
            and societal engagement, ensuring integrity and unity across our worldwide body.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/governance"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Explore All Governance
            </Link>
            <a
              href="/contact"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Contact Leadership
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}



