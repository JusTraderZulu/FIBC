import { notFound } from "next/navigation";
import Image from "next/image";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { PersonCard } from "@/components/ui/PersonCard";
import { PILLARS } from "@/lib/data/pillars";
import { SECRETARIATS } from "@/lib/data/secretariats";
import { COUNCILS } from "@/lib/data/councils";
import { CHIEFS } from "@/lib/data/chiefs";
import { LEADERSHIP } from "@/lib/data/leadership";

// Union of all governance items
const ALL_GOVERNANCE = [...PILLARS, ...SECRETARIATS, ...COUNCILS, ...CHIEFS];

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const item = ALL_GOVERNANCE.find(g => g.slug === resolvedParams.slug);
  if (!item) return { title: "Governance Item Not Found" };
  
  return {
    title: item.name,
    description: item.description || item.blurb,
  };
}

export async function generateStaticParams() {
  return ALL_GOVERNANCE.map((item) => ({
    slug: item.slug,
  }));
}

export default async function GovernanceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const item = ALL_GOVERNANCE.find(g => g.slug === resolvedParams.slug);
  
  if (!item) {
    notFound();
  }

  // Determine parent category for breadcrumb
  const getParentCategory = () => {
    if (PILLARS.find(p => p.slug === resolvedParams.slug)) {
      return { label: "Seven Pillars", href: "/governance/seven-pillars" };
    }
    if (SECRETARIATS.find(s => s.slug === resolvedParams.slug)) {
      return { label: "Secretariats", href: "/governance/secretariats" };
    }
    if (CHIEFS.find(c => c.slug === resolvedParams.slug)) {
      return { label: "Chiefs of Staff", href: "/governance/chiefs-of-staff" };
    }
    if (COUNCILS.find(c => c.slug === resolvedParams.slug)) {
      return { label: "Councils & Commissions", href: "/governance/councils-commissions" };
    }
    return { label: "Governance", href: "/governance" };
  };

  const parentCategory = getParentCategory();
  const leadership = item.leadership?.map(slug => LEADERSHIP.find(p => p.slug === slug)).filter(Boolean) || [];

  // Check if this is a Chiefs of Staff office
  const isChiefOfStaff = CHIEFS.find(c => c.slug === resolvedParams.slug);

  return (
    <div>
      {/* Custom header for Chiefs of Staff */}
      {isChiefOfStaff ? (
        <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
          <Container>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-sm">
                <a href="/governance" className="text-[hsl(var(--brand))] hover:underline">Governance</a>
                <span className="mx-2 text-black/40">/</span>
                <a href="/governance/chiefs-of-staff" className="text-[hsl(var(--brand))] hover:underline">Chiefs of Staff</a>
                <span className="mx-2 text-black/40">/</span>
                <span className="text-black/60">Executive Chairman</span>
              </ol>
            </nav>
            
            {/* Centered Title */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-[hsl(var(--ink))] mb-6">
                {item.name}
              </h1>
              <p className="text-lg sm:text-xl text-black/70 leading-relaxed max-w-3xl mx-auto">
                {item.blurb}
              </p>
            </div>
          </Container>
        </div>
      ) : (
        <DetailHeader
          title={item.name}
          description={item.description || item.blurb}
          image={item.image}
          breadcrumb={[
            { label: "Governance", href: "/governance" },
            parentCategory,
            { label: item.name, href: `/governance/${item.slug}` }
          ]}
        />
      )}
      
      {/* Chiefs of Staff Office Layout */}
      {isChiefOfStaff && (
        <div className="py-4">
          <Container>
            {/* Office Seal at Top */}
            <div className="text-center mb-4">
              {item.seal ? (
                <Image
                  src={item.seal.src}
                  alt={item.seal.alt}
                  width={220}
                  height={220}
                  className="mx-auto mb-2 drop-shadow-lg"
                />
              ) : (
                /* Placeholder for missing seal */
                <div className="w-[220px] h-[220px] mx-auto mb-2 bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center border-2 border-[hsl(var(--brand))]/20">
                  <div className="text-center">
                    <span className="text-6xl mb-2 block">🏛️</span>
                    <span className="text-sm text-black/60">Official Seal<br/>Coming Soon</span>
                  </div>
                </div>
              )}
              <p className="text-lg font-semibold text-[hsl(var(--brand))] tracking-wide">
                {item.name.split('—')[1]?.trim() || 'Office'}
              </p>
              <p className="text-base text-black/60 mt-1">
                Faith International Baptist Convention Inc.
              </p>
            </div>
          </Container>
        </div>
      )}
      
      <Section className="pt-2">
        {/* Chiefs of Staff specific content layout */}
        {isChiefOfStaff ? (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif tracking-tight mb-4 text-[hsl(var(--ink))]">Office Functions</h2>
              <p className="text-xl text-black/80 leading-relaxed max-w-4xl mx-auto">
                The Executive Chief of Staff serves as the primary administrative coordinator for the highest executive office, 
                ensuring seamless strategic implementation and maintaining direct communication channels across all Fellowship operations.
              </p>
            </div>
            
            {item.responsibilities && item.responsibilities.length > 0 && (
              <div className="bg-gradient-to-br from-white/80 to-[hsl(var(--brand))]/5 rounded-brand p-10 border border-black/5 shadow-sm">
                <h3 className="text-2xl font-serif tracking-tight mb-8 text-center text-[hsl(var(--brand))]">Key Responsibilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {item.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                      <span className="text-[hsl(var(--accent))] text-xl mt-1 flex-shrink-0">•</span>
                      <span className="text-black/80 leading-relaxed font-medium">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Standard governance layout for other offices */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {item.description && (
                <Prose>
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </Prose>
              )}
              
              {item.responsibilities && item.responsibilities.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-serif tracking-tight mb-6">Key Responsibilities</h2>
                  <ul className="space-y-3">
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[hsl(var(--accent))] text-lg mt-1">•</span>
                        <span className="text-black/80 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              {/* Departmental Seal - Only show for non-Executive Chairman offices */}
              {item.seal && item.id !== "executive-chief-staff-chairman" && (
                <div className="bg-white/50 rounded-brand p-6 border border-black/5 text-center">
                  <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Official Seal</h3>
                  <Image
                    src={item.seal.src}
                    alt={item.seal.alt}
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                  <p className="mt-3 text-xs text-black/60">
                    Departmental Seal
                  </p>
                </div>
              )}
              
              {/* Contact Information */}
              {item.contact && (
                <div className="bg-[hsl(var(--brand))]/5 rounded-brand p-6">
                  <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Contact</h3>
                  
                  {item.contact.email && (
                    <div className="mb-3">
                      <dt className="text-sm font-medium text-black/60">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${item.contact.email}`}
                          className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                        >
                          {item.contact.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  
                  {item.contact.phone && (
                    <div>
                      <dt className="text-sm font-medium text-black/60">Phone</dt>
                      <dd>
                        <a
                          href={`tel:${item.contact.phone}`}
                          className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                        >
                          {item.contact.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                </div>
              )}
              
              {/* Additional Info */}
              <div className="bg-white/50 rounded-brand p-6 border border-black/5">
                <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Information</h3>
                
                {item.established && (
                  <div className="mb-3">
                    <dt className="text-sm font-medium text-black/60">Established</dt>
                    <dd className="text-sm text-black/80">{item.established}</dd>
                  </div>
                )}
                
                {item.location && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Location</dt>
                    <dd className="text-sm text-black/80">{item.location}</dd>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Chiefs of Staff Profile */}
        {isChiefOfStaff && (
          <div className="mt-20">
            <div className="bg-gradient-to-r from-[hsl(var(--brand))]/5 to-[hsl(var(--accent))]/5 rounded-brand p-12">
              <h2 className="text-3xl font-serif tracking-tight mb-12 text-center text-[hsl(var(--ink))]">
                {item.leaderPhoto?.title || 'Office Leadership'}
              </h2>
              <div className="max-w-md mx-auto">
                <div className="bg-white/90 backdrop-blur border border-black/5 shadow-xl rounded-brand p-8">
                  <div className="text-center">
                    {item.leaderPhoto ? (
                      <Image
                        src={item.leaderPhoto.src}
                        alt={item.leaderPhoto.alt}
                        width={140}
                        height={140}
                        className="mx-auto rounded-full shadow-lg mb-6"
                      />
                    ) : (
                      /* Placeholder for missing photo */
                      <div className="w-[140px] h-[140px] mx-auto mb-6 bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center border-2 border-[hsl(var(--brand))]/20">
                        <span className="text-4xl">👤</span>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-serif tracking-tight text-[hsl(var(--ink))] mb-2">
                      {item.leaderPhoto?.name || 'Leadership Name'}
                    </h3>
                    <p className="text-lg text-[hsl(var(--brand))] font-semibold mb-6">
                      {item.leaderPhoto?.title || 'Chief of Staff'}
                    </p>
                    <p className="text-base text-black/70 leading-relaxed mb-8">
                      {item.id === "executive-chief-staff-chairman" 
                        ? "Leading Faith International Baptist Convention Inc. with apostolic authority and administrative excellence, overseeing the worldwide fellowship's governance and strategic direction."
                        : `Serving as ${item.leaderPhoto?.title || 'Chief of Staff'} with dedicated commitment to the mission and governance of Faith International Baptist Convention Inc.`
                      }
                    </p>
                    
                    {/* Contact Link */}
                    <a
                      href={`mailto:${item.contact?.email || 'contact@fibc.org'}`}
                      className="inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
                    >
                      Contact {item.leaderPhoto?.title || 'Office'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leadership Team */}
        {leadership.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-serif tracking-tight mb-6">Leadership Team</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {leadership.map((person) => (
                 person ? <PersonCard key={person.id} person={person} /> : null
               ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
