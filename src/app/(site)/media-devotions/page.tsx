import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BLURBS, MEDIA_DEVOTIONS } from "@/lib/seed";

export const metadata = { title: "Media & Devotions" };

export default function Page() {
  return (
    <div>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
        <Section className="pt-2 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Media & Devotions
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-4">
              {BLURBS.mediaDevotionsIntro}
            </p>
            <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
            
            {/* Media & Devotions Cards - Right underneath the line */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {MEDIA_DEVOTIONS.map((media) => (
                <Link 
                  key={media.name}
                  href={media.href || "#"}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-black/5 hover:border-[hsl(var(--brand))]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Media Platform Seal/Image Display */}
                    <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform">
                      {media.image ? (
                        <Image
                          src={media.image}
                          alt={`${media.name} Official Seal`}
                          width={128}
                          height={128}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      ) : (
                        <div className="w-full h-full bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center border-2 border-[hsl(var(--brand))]/20">
                          <span className="text-4xl">📺</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 group-hover:text-[hsl(var(--brand))] transition-colors text-center">
                      {media.name}
                    </h3>
                    <p className="text-black/60 leading-relaxed text-center mb-6 text-sm">
                      {media.blurb.replace(/"/g, '')}
                    </p>
                    
                    {/* Explore CTA */}
                    <div className="text-center">
                      <span className="inline-flex items-center text-[hsl(var(--brand))] font-semibold text-sm">
                        Explore <span className="ml-1">→</span>
                      </span>
                    </div>

                    {/* Media Platform Badge */}
                    <div className="mt-6 pt-4 border-t border-black/5 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                        Official Media Platform
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Spiritual Broadcasting</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Experience the life of Faith International Baptist Convention Inc. through our official media platforms, 
            offering worship, teaching, devotions, and assembly proceedings to believers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/media-devotions/archive"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Visit Media Archive
            </a>
            <a
              href="/about"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Learn About FIBC
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}



