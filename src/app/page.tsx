import { HeroHome } from "@/components/ui/HeroHome";
import { QuickLinksBar } from "@/components/ui/QuickLinksBar";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HOME_MISSION } from "@/lib/seed";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <QuickLinksBar />
      
      {/* Our Mission */}
      <Section className="bg-gradient-to-b from-white to-[hsl(var(--brand))]/5 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[hsl(var(--ink))] mb-4">Our Mission</h2>
              <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
                Since 1995, Faith International Baptist Convention Inc. has guided believers worldwide through three foundational pillars.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {HOME_MISSION.map((mission, index) => (
              <ScrollReveal key={mission.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand))]/20 to-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{['✝️', '📖', '🤝'][index]}</span>
                  </div>
                  <h3 className="text-xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3">{mission.name}</h3>
                  <p className="text-black/60 leading-relaxed">{mission.blurb}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-12 flex-wrap text-center">
              <div>
                <div className="text-4xl font-bold text-[hsl(var(--brand))] mb-1">30</div>
                <div className="text-sm text-black/60">Years</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">∞</div>
                <div className="text-sm text-black/60">Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-1">7</div>
                <div className="text-sm text-black/60">Pillars</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Connect Section */}
      <Section className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[hsl(var(--ink))] mb-8">
              Connect With Us
            </h2>
            <p className="text-lg text-black/60 mb-12">
              Join us for worship, watch services online, or find a church near you
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/churches"
                className="inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))] text-white px-8 py-4 text-lg font-semibold hover:bg-[hsl(var(--brand))]/90 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Find a Church
              </Link>
              <Link
                href="/media-devotions"
                className="inline-flex items-center justify-center rounded-brand border-2 border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-8 py-4 text-lg font-semibold hover:bg-[hsl(var(--brand))]/5 hover:scale-105 transition-all duration-200"
              >
                Watch Online
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-brand border-2 border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-8 py-4 text-lg font-semibold hover:bg-[hsl(var(--brand))]/5 hover:scale-105 transition-all duration-200"
              >
                View Events
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand))]/90 text-white py-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight mb-4">
              Join Our Faith Community
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Whether you're seeking a church home or wanting to serve, there's a place for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-brand bg-[hsl(var(--accent))] text-black px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Plan a Visit
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-brand bg-white/10 text-white border-2 border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
}
