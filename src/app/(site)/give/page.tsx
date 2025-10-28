import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { DONATION_URL } from "@/lib/seed";

export const metadata = { title: "Give & Support Our Mission" };

export default function Page() {
  const isComingSoon = DONATION_URL === "#";
  
  return (
    <div>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
        <Section className="pt-2 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Give & Support Our Mission
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-4">
              Your generosity helps Faith International Baptist Convention Inc. fulfill our mission of worship, formation, service, and worldwide fellowship expansion.
            </p>
            <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
            
            {/* Give Content - Right underneath the line */}
            <div className="mt-8">
              {/* FIBC Seal and Mission */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <Image
                    src="/fibc-seal.png"
                    alt="Faith International Baptist Convention Inc. Official Seal"
                    width={120}
                    height={120}
                    className="mx-auto mb-4 drop-shadow-lg"
                  />
                  <p className="text-lg font-medium text-[hsl(var(--brand))] tracking-wide">
                    Supporting Apostolic Ministry Since 1995
                  </p>
                </div>
              </div>

              {/* Giving Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Tithe & Offerings */}
                <div className="bg-gradient-to-br from-white/80 to-[hsl(var(--brand))]/5 rounded-brand p-6 border border-black/5 shadow-sm text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="text-xl font-serif tracking-tight mb-3 text-[hsl(var(--ink))]">Tithe & Offerings</h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Support ongoing ministry, worship, and Fellowship operations through faithful stewardship.
                  </p>
                  {isComingSoon ? (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))]/20 text-[hsl(var(--brand))]/60 px-4 py-3 font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      href={DONATION_URL}
                      className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))] text-white px-4 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
                    >
                      Give Now
                    </a>
                  )}
                </div>

                {/* Special Projects */}
                <div className="bg-gradient-to-br from-white/80 to-[hsl(var(--brand))]/5 rounded-brand p-6 border border-black/5 shadow-sm text-center">
                  <div className="text-4xl mb-3">🏗️</div>
                  <h3 className="text-xl font-serif tracking-tight mb-3 text-[hsl(var(--ink))]">Special Projects</h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Support capital projects, missions, and strategic initiatives advancing the Fellowship worldwide.
                  </p>
                  {isComingSoon ? (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))]/20 text-[hsl(var(--brand))]/60 px-4 py-3 font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      href={DONATION_URL}
                      className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))] text-white px-4 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
                    >
                      Support Projects
                    </a>
                  )}
                </div>

                {/* Seminary Support */}
                <div className="bg-gradient-to-br from-white/80 to-[hsl(var(--brand))]/5 rounded-brand p-6 border border-black/5 shadow-sm text-center">
                  <div className="text-4xl mb-3">🎓</div>
                  <h3 className="text-xl font-serif tracking-tight mb-3 text-[hsl(var(--ink))]">Seminary Support</h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Invest in theological education and leadership formation at our seminary institutions.
                  </p>
                  {isComingSoon ? (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))]/20 text-[hsl(var(--brand))]/60 px-4 py-3 font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      href={DONATION_URL}
                      className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))] text-white px-4 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
                    >
                      Support Education
                    </a>
                  )}
                </div>
              </div>

              {/* Alternative Giving Methods */}
              <div className="bg-gradient-to-br from-white/90 to-[hsl(var(--brand))]/5 rounded-brand p-8 border border-black/5 shadow-sm">
                <h2 className="text-2xl font-serif tracking-tight mb-6 text-center text-[hsl(var(--ink))]">Other Ways to Give</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">💌</div>
                    <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--brand))]">Mail Your Gift</h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      Send checks payable to &quot;Faith International Baptist Convention Inc.&quot; to our mailing address.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🏦</div>
                    <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--brand))]">Bank Transfer</h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      Contact our offices for wire transfer information and direct bank giving options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Faithful Stewardship</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Every gift supports our mission to strengthen local churches, train leaders, serve communities, and expand 
            Faith International Baptist Convention Inc. across the nations. Thank you for your faithful partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/about"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Learn About Our Mission
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}



