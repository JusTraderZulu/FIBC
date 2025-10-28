import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { BLURBS, INSTITUTIONS } from "@/lib/seed";

export const metadata = { title: "Institutions & Foundations" };

const INSTITUTION_SEALS = [
  "/good-shepherd-foundation.jpeg",
  "/seminary-seal.jpeg",
  "/board-of-education-seal.jpeg"
];

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Institutions & Foundations"
        description={BLURBS.institutionsIntro}
        breadcrumbs={[{ label: "Institutions" }]}
        icon="🏫"
      />

      <Section className="pt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INSTITUTIONS.map((institution, index) => (
                <Link 
                  key={institution.name} 
                  href={institution.href || "#"}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-black/5 hover:border-[hsl(var(--brand))]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Official Seal */}
                    <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform">
                      <Image
                        src={INSTITUTION_SEALS[index]}
                        alt={`${institution.name} Official Seal`}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 group-hover:text-[hsl(var(--brand))] transition-colors text-center">
                      {institution.name}
                    </h3>
                    <p className="text-black/60 leading-relaxed text-center mb-6">
                      {institution.blurb}
                    </p>
                    
                    {/* Learn More CTA */}
                    <div className="text-center">
                      <span className="inline-flex items-center text-[hsl(var(--brand))] font-semibold text-sm group-hover:gap-2 transition-all">
                        Learn More <span className="ml-1">→</span>
                      </span>
                    </div>

                    {/* Institution Badge */}
                    <div className="mt-6 pt-4 border-t border-black/5 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                        FIBC Institution
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Educational Excellence</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Our institutions and foundations provide humanitarian services, theological education, and community empowerment, 
            extending the reach of Faith International Baptist Convention Inc. across communities and nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/about"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Learn More About FIBC
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Contact Our Institutions
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}



