import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";

const INSTITUTION_SEALS: Record<string, string> = {
  "good-shepherd-foundation": "/good-shepherd-foundation.jpeg",
  "archbishop-harvey-glaud-seminary": "/seminary-seal.jpeg",
  "board-of-education": "/board-of-education-seal.jpeg",
};

const INSTITUTIONS_DETAIL = {
  "good-shepherd-foundation": {
    name: "Good Shepherd Foundation",
    tagline: "Humanitarian & Social Outreach Institution",
    motto: "Faith in Action. Love Without Limits.",
    founded: "August 2004, Sierra Leone, West Africa",
    founder: "Apostolic Bishop Dr. W. B. Primus",
    oversight: "Office of the Executive Chairman",
    description: `The Good Shepherd Foundation is the humanitarian and social development arm of the Faith International Baptist Convention Inc. Worldwide Fellowship, established by Apostolic Bishop Dr. W. B. Primus in August 2004 in Sierra Leone, West Africa.

Founded with the support of Mr. Abdulai Bangura, Dr. Janet Kosia Wurie, and Mr. Emmanuel Musa, among others, the Foundation was born out of a divine conviction that faith must take form in service.

Since its inception, the Foundation has delivered vital programs in education, healthcare, economic empowerment, and humanitarian relief—bringing the compassion of Christ to vulnerable families, orphans, and widows across Africa, the Caribbean, and the diaspora.

Operating under the oversight of the Office of the Executive Chairman, the Foundation collaborates closely with the Secretariat for Social Outreach and Community Development and Empowerment, the Secretariat for Planning and Development, and the Office of the Executive Chiefs of Staff.`,
    programs: [
      "Education support for vulnerable children",
      "Healthcare access and medical relief",
      "Economic empowerment initiatives", 
      "Humanitarian relief programs",
      "Orphan and widow support",
      "Community development projects"
    ],
  },
  "archbishop-harvey-glaud-seminary": {
    name: "Archbishop Harvey Glaud Memorial Bible Seminary",
    tagline: "Apostolic Theological & Ministerial Training Institution",
    shortName: "AHGMBS",
    motto: "Scholarship. Discipleship. Apostolic Stewardship.",
    founded: "In honor of Archbishop Harvey Glaud",
    founder: "Apostolic Bishop Dr. W. B. Primus",
    chancellor: "Apostolic Bishop Dr. W. B. Primus",
    oversight: "Office of the Executive Chairman",
    academicOversight: "Secretariat for Education and Training",
    description: `The Archbishop Harvey Glaud Memorial Bible Seminary (AHGMBS) is the official theological and ministerial training institution of the Faith International Baptist Convention Inc. Worldwide Fellowship, founded by Apostolic Bishop Dr. W. B. Primus in honor of Archbishop Harvey Glaud, a patriarch of the Spiritual Baptist Faith whose legacy of scholarship and discipline shaped modern Apostolic education.

Reconstituted under Apostolic and Patriarchal Decree and pursuant to Act of Parliament No. 27 of 1995, the Seminary is dedicated to cultivating excellence in biblical scholarship, spiritual formation, and Apostolic leadership.

The Seminary will function as a degree-conferring institution as it grows, beginning with Certificates and Diplomas, and expanding to accredited Bachelor's, Master's, and Doctoral programs. AHGMBS is pursuing local, regional, and international accreditation, ensuring academic credibility while maintaining its sacred Apostolic identity.

Its five academic faculties—each named after Elders of the Faith—form a unique theological framework grounded in heritage and innovation.`,
    programs: [
      "Certificate and Diploma programs",
      "Bachelor's degree programs (expanding)",
      "Master's degree programs (planned)",
      "Doctoral programs (future)",
      "Ministerial training and formation",
      "Biblical scholarship programs",
      "Apostolic leadership development"
    ],
  },
  "board-of-education": {
    name: "Spiritual Baptist Board of Education",
    tagline: "Educational and Doctrinal Oversight Body",
    motto: "To educate the saints, equip the servants, and exalt the Savior through truth, learning, and discipline.",
    oversight: "Office of the Executive Chairman and Secretariat for Education and Training",
    description: `The Spiritual Baptist Board of Education functions as the educational and doctrinal authority of the Faith International Baptist Convention Inc. Worldwide Fellowship, ensuring the preservation, propagation, and continual refinement of the Sacred Teachings and Academic Standards of the Faith.

Operating under the Office of the Executive Chairman and the Secretariat for Education and Training, the Board provides oversight for all educational institutions, training programs, and ministerial certification systems within the Fellowship.

It establishes curriculum standards, accreditation pathways, and pedagogical frameworks for seminaries, schools of ministry, and regional training centers.

Through partnerships with the Archbishop Harvey Glaud Memorial Bible Seminary and the FaithVision Digital Learning Platform, the Board ensures consistent theological instruction across the global Fellowship.

The Board also works to document and safeguard the history, liturgy, and evolving theology of the Spiritual Baptist Faith, bridging traditional wisdom with modern scholarship.`,
    responsibilities: [
      "Curriculum standards development",
      "Accreditation pathway establishment",
      "Ministerial certification oversight",
      "Theological instruction consistency",
      "Historical documentation and preservation",
      "Liturgical and theological safeguarding",
      "Partnership with educational institutions"
    ],
  },
};

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const institution = INSTITUTIONS_DETAIL[resolvedParams.slug as keyof typeof INSTITUTIONS_DETAIL];
  
  if (!institution) {
    return { title: "Institution Not Found" };
  }
  
  return {
    title: `${institution.name} | FIBC Institutions`,
    description: institution.description.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return Object.keys(INSTITUTIONS_DETAIL).map((slug) => ({
    slug,
  }));
}

export default async function InstitutionDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const institution = INSTITUTIONS_DETAIL[resolvedParams.slug as keyof typeof INSTITUTIONS_DETAIL];
  
  if (!institution) {
    notFound();
  }

  return (
    <div>
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[hsl(var(--brand))]/10 to-[hsl(var(--brand))]/5">
        <Container>
          <div className="py-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-black/60 mb-6">
              <Link href="/" className="hover:text-[hsl(var(--brand))]">Home</Link>
              <span>/</span>
              <Link href="/institutions" className="hover:text-[hsl(var(--brand))]">Institutions</Link>
              <span>/</span>
              <span className="text-[hsl(var(--brand))]">{institution.name}</span>
            </div>

            {/* Official Seal */}
            <div className="mb-6">
              <Image
                src={INSTITUTION_SEALS[resolvedParams.slug] || "/fibc-seal.png"}
                alt={`${institution.name} Official Seal`}
                width={150}
                height={150}
                className="mx-auto drop-shadow-xl"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[hsl(var(--ink))] mb-4">
              {institution.name}
            </h1>
            
            {institution.tagline && (
              <p className="text-xl text-black/70 mb-6 italic">
                {institution.tagline}
              </p>
            )}

            {institution.motto && (
              <div className="max-w-3xl mx-auto">
                <div className="bg-white/60 rounded-xl px-6 py-4 border border-[hsl(var(--brand))]/20 inline-block">
                  <p className="text-base font-semibold text-[hsl(var(--brand))]">
                    "{institution.motto}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[hsl(var(--ink))] mb-6">
              About Us
            </h2>
            <Prose>
              {institution.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-black/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </Prose>
          </div>

          {/* Key Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {'founder' in institution && institution.founder && (
              <div className="bg-gradient-to-br from-white to-[hsl(var(--brand))]/5 rounded-xl p-6 border border-black/5">
                <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2">
                  Founded By
                </h3>
                <p className="text-black/80">{institution.founder}</p>
              </div>
            )}

            {'founded' in institution && institution.founded && (
              <div className="bg-gradient-to-br from-white to-[hsl(var(--brand))]/5 rounded-xl p-6 border border-black/5">
                <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2">
                  Established
                </h3>
                <p className="text-black/80">{institution.founded}</p>
              </div>
            )}

            {institution.oversight && (
              <div className="bg-gradient-to-br from-white to-[hsl(var(--brand))]/5 rounded-xl p-6 border border-black/5">
                <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2">
                  Oversight
                </h3>
                <p className="text-black/80">{institution.oversight}</p>
              </div>
            )}

            {'chancellor' in institution && institution.chancellor && (
              <div className="bg-gradient-to-br from-white to-[hsl(var(--brand))]/5 rounded-xl p-6 border border-black/5">
                <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2">
                  Chancellor
                </h3>
                <p className="text-black/80">{institution.chancellor}</p>
              </div>
            )}

            {'academicOversight' in institution && institution.academicOversight && (
              <div className="bg-gradient-to-br from-white to-[hsl(var(--brand))]/5 rounded-xl p-6 border border-black/5 md:col-span-2">
                <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2">
                  Academic Oversight
                </h3>
                <p className="text-black/80">{institution.academicOversight}</p>
              </div>
            )}
          </div>

          {/* Programs/Responsibilities */}
          {(('programs' in institution && institution.programs) || ('responsibilities' in institution && institution.responsibilities)) && (
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[hsl(var(--ink))] mb-6">
                {'programs' in institution ? "Programs & Services" : "Responsibilities"}
              </h2>
              <div className="bg-white rounded-xl p-8 border border-black/5 shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(('programs' in institution ? institution.programs : 'responsibilities' in institution ? institution.responsibilities : []))?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[hsl(var(--brand))] text-lg mt-0.5">✓</span>
                      <span className="text-black/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Donation Section */}
          <div className="bg-gradient-to-br from-[hsl(var(--brand))]/10 to-[hsl(var(--brand))]/5 rounded-2xl p-8 md:p-12 border-2 border-[hsl(var(--brand))]/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[hsl(var(--ink))] mb-4">
                Support {'shortName' in institution ? institution.shortName : institution.name}
              </h2>
              <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
                Your generous donation helps us continue our mission of service, education, and community empowerment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/give"
                className="inline-flex items-center justify-center rounded-brand bg-[hsl(var(--accent))] text-black px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[hsl(var(--accent))]/30 transition-all duration-200"
              >
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-brand border-2 border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-8 py-4 text-lg font-semibold hover:bg-[hsl(var(--brand))]/5 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-[hsl(var(--brand))]/20">
              <p className="text-sm text-black/60 text-center">
                {institution.name} is part of Faith International Baptist Convention Inc.
                <br />
                Tax-deductible donations accepted. All contributions support our mission.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Links */}
      <Section className="bg-[hsl(var(--brand))]/5 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-serif tracking-tight text-[hsl(var(--ink))] mb-6">
            Explore More Institutions
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/institutions"
              className="inline-flex items-center rounded-brand bg-white text-[hsl(var(--brand))] border border-[hsl(var(--brand))]/20 px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 transition-colors"
            >
              View All Institutions
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-brand bg-white text-[hsl(var(--brand))] border border-[hsl(var(--brand))]/20 px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 transition-colors"
            >
              About FIBC
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

