import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { ABOUT } from "@/lib/seed";

export const metadata = {
  title: "About Faith International Baptist Convention Inc.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Our Fellowship"
        description="A worldwide fellowship dedicated to apostolic governance, biblical education, and worldwide ministry since 1857."
        breadcrumbs={[{ label: "About" }]}
        icon="⛪"
      />

      <Section className="pt-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
          </div>
          
          {/* Hero Section with Seal */}
          <div className="bg-gradient-to-br from-white/90 to-[hsl(var(--brand))]/5 rounded-brand p-8 lg:p-12 border border-black/5 shadow-sm mb-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                  <div className="lg:flex-1 text-center lg:text-left">
                    <div className="mb-8">
                      <h2 className="text-3xl font-serif tracking-tight text-[hsl(var(--ink))] mb-4">Our Identity & Mission</h2>
                      <p className="text-lg text-black/80 leading-relaxed mb-6">
                        Faith International Baptist Convention Inc. stands as a beacon of apostolic governance and biblical truth, 
                        uniting believers across nations through worship, formation, and service to advance God's Kingdom.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white/60 rounded-lg p-4 border border-black/5 text-center">
                          <h4 className="font-semibold text-[hsl(var(--brand))] mb-2">📅 Established</h4>
                          <p className="text-black/70">October 4, 1995</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-4 border border-black/5 text-center">
                          <h4 className="font-semibold text-[hsl(var(--brand))] mb-2">🌍 Worldwide</h4>
                          <p className="text-black/70">Worldwide Fellowship</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-4 border border-black/5 text-center">
                          <h4 className="font-semibold text-[hsl(var(--brand))] mb-2">⛪ Heritage</h4>
                          <p className="text-black/70">Spiritual Baptist Tradition</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-4 border border-black/5 text-center">
                          <h4 className="font-semibold text-[hsl(var(--brand))] mb-2">🏛️ Governance</h4>
                          <p className="text-black/70">Apostolic Structure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Organizational Seal */}
                  <div className="lg:flex-shrink-0 text-center">
                    <Image
                      src="/fibc-seal.png"
                      alt="Faith International Baptist Convention Inc. Official Seal"
                      width={250}
                      height={250}
                      className="mx-auto drop-shadow-lg"
                      priority
                    />
                    <div className="mt-4 p-4 bg-[hsl(var(--brand))]/10 rounded-lg">
                      <p className="text-sm font-semibold text-[hsl(var(--brand))] tracking-wide">
                        Official Seal
                      </p>
                      <p className="text-xs text-black/60 mt-1">
                        Faith International Baptist Convention Inc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Areas Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif tracking-tight text-center mb-8 text-[hsl(var(--ink))]">Explore Our Fellowship</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card
                    title="Member Profiles"
                    description="Meet the officers, leaders, and key members entrusted with apostolic oversight, administrative execution, and ecclesiastical order across our worldwide Fellowship."
                    href="/about/leadership"
                    className="h-full"
                  >
                    <div className="mt-4 flex justify-center">
                      <div className="text-4xl mb-2">👥</div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                        Member Profiles
                      </div>
                    </div>
                  </Card>
                  
                  <Card
                    title="Governance Structure"
                    description="Discover our Seven Pillars, Secretariats, Councils, and Chiefs of Staff that ensure biblical governance and corporate excellence."
                    href="/governance"
                    className="h-full"
                  >
                    <div className="mt-4 flex justify-center">
                      <div className="text-4xl mb-2">🏛️</div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                        Apostolic Governance
                      </div>
                    </div>
                  </Card>
                  
                  <Card
                    title="General Assembly"
                    description="Our bi-annual gathering where delegates deliberate, resolve, and commission the Fellowship's next season under Scripture and shared responsibility."
                    href="/events"
                    className="h-full"
                  >
                    <div className="mt-4 flex justify-center">
                      <div className="text-4xl mb-2">🏛️</div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                        Democratic Process
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Core Principles */}
              <div className="bg-gradient-to-br from-white/80 to-[hsl(var(--brand))]/5 rounded-brand p-10 border border-black/5 shadow-sm">
                <h2 className="text-3xl font-serif tracking-tight text-center mb-8 text-[hsl(var(--ink))]">Our Foundation</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white/60 rounded-lg p-6 border border-black/5 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-2xl">📜</span>
                      <h3 className="text-xl font-serif tracking-tight text-[hsl(var(--brand))]">Jethro Principles</h3>
                    </div>
                    <p className="text-black/70 leading-relaxed">{ABOUT.jethroPrinciplesIntro}</p>
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))]">
                        Biblical Governance • Exodus 18
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-6 border border-black/5 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-2xl">🏛️</span>
                      <h3 className="text-xl font-serif tracking-tight text-[hsl(var(--brand))]">General Assembly</h3>
                    </div>
                    <p className="text-black/70 leading-relaxed mb-4">{ABOUT.generalAssemblyIntro}</p>
                    <div className="text-center">
                      <a
                        href="/events"
                        className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-4 py-2 text-sm font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
                      >
                        View Assemblies →
                      </a>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Join Our Worldwide Fellowship</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Faith International Baptist Convention Inc. welcomes believers from all backgrounds to participate in our 
            apostolic mission of worship, formation, and service across the nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/churches"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Find a Church
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}



