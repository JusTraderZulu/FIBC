import { notFound } from "next/navigation";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";
import { Badge } from "@/components/ui/Badge";
import { LEADERSHIP } from "@/lib/data/leadership";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const person = LEADERSHIP.find(p => p.slug === params.slug);
  if (!person) return { title: "Leadership Profile Not Found" };
  
  return {
    title: `${person.name} - ${person.title}`,
    description: person.bio || `Learn about ${person.name}, ${person.title} at Faith International Baptist Convention Inc.`,
  };
}

export async function generateStaticParams() {
  return LEADERSHIP.map((person) => ({
    slug: person.slug,
  }));
}

export default function LeadershipDetailPage({ params }: Props) {
  const person = LEADERSHIP.find(p => p.slug === params.slug);
  
  if (!person) {
    notFound();
  }

  return (
    <div>
      <DetailHeader
        title={person.name}
        subtitle={person.title}
        description={person.bio}
        image={person.image}
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Leadership", href: "/about/leadership" },
          { label: person.name, href: `/about/leadership/${person.slug}` }
        ]}
      />
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {person.bio && (
              <Prose>
                <div dangerouslySetInnerHTML={{ __html: person.bio }} />
              </Prose>
            )}
            
            {person.responsibilities && person.responsibilities.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-serif tracking-tight mb-4">Key Responsibilities</h2>
                <ul className="space-y-2">
                  {person.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[hsl(var(--accent))] mt-1">•</span>
                      <span className="text-black/80">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-[hsl(var(--brand))]/5 rounded-brand p-6">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Contact Information</h3>
              
              {person.office && (
                <div className="mb-3">
                  <dt className="text-sm font-medium text-black/60">Office</dt>
                  <dd className="text-sm text-black/80">{person.office}</dd>
                </div>
              )}
              
              {person.email && (
                <div className="mb-3">
                  <dt className="text-sm font-medium text-black/60">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                    >
                      {person.email}
                    </a>
                  </dd>
                </div>
              )}
              
              {person.phone && (
                <div>
                  <dt className="text-sm font-medium text-black/60">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${person.phone}`}
                      className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                    >
                      {person.phone}
                    </a>
                  </dd>
                </div>
              )}
            </div>
            
            {/* Education & Background */}
            {(person.education?.length || person.ordination || person.serviceYears) && (
              <div className="bg-white/50 rounded-brand p-6 border border-black/5">
                <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Background</h3>
                
                {person.serviceYears && (
                  <div className="mb-3">
                    <Badge className="bg-[hsl(var(--accent))] text-black">
                      {person.serviceYears} years of service
                    </Badge>
                  </div>
                )}
                
                {person.ordination && (
                  <div className="mb-3">
                    <dt className="text-sm font-medium text-black/60">Ordination</dt>
                    <dd className="text-sm text-black/80">{person.ordination}</dd>
                  </div>
                )}
                
                {person.education && person.education.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-black/60 mb-2">Education</dt>
                    <dd className="space-y-1">
                      {person.education.map((edu, index) => (
                        <div key={index} className="text-sm text-black/80">
                          {edu}
                        </div>
                      ))}
                    </dd>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
