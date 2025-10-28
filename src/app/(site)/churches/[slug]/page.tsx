import { notFound } from "next/navigation";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CHURCHES } from "@/lib/data/churches";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const church = CHURCHES.find(c => c.slug === params.slug);
  if (!church) return { title: "Church Not Found" };
  
  return {
    title: `${church.name} - FIBC Member Church`,
    description: church.description || `${church.name} is a member church of Faith International Baptist Convention Inc. located in ${church.address.city}, ${church.address.state}.`,
  };
}

export async function generateStaticParams() {
  return CHURCHES.map((church) => ({
    slug: church.slug,
  }));
}

export default function ChurchDetailPage({ params }: Props) {
  const church = CHURCHES.find(c => c.slug === params.slug);
  
  if (!church) {
    notFound();
  }

  const fullAddress = `${church.address.street}, ${church.address.city}, ${church.address.state} ${church.address.postalCode}, ${church.address.country}`;

  return (
    <div>
      <DetailHeader
        title={church.name}
        subtitle={church.pastor ? `Pastor: ${church.pastor}` : undefined}
        description={church.description}
        image={church.image}
        breadcrumb={[
          { label: "Church Directory", href: "/churches" },
          { label: church.name, href: `/churches/${church.slug}` }
        ]}
      />
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {church.description && (
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: church.description }} />
              </div>
            )}
            
            {church.specialties && church.specialties.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-serif tracking-tight mb-4">Ministries & Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {church.specialties.map(specialty => (
                    <Badge key={specialty} className="bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-[hsl(var(--brand))]/5 rounded-brand p-6">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Visit Us</h3>
              
              <div className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-black/60">Address</dt>
                  <dd className="text-sm text-black/80">{fullAddress}</dd>
                </div>
                
                {church.contact.phone && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Phone</dt>
                    <dd>
                      <a
                        href={`tel:${church.contact.phone}`}
                        className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                      >
                        {church.contact.phone}
                      </a>
                    </dd>
                  </div>
                )}
                
                {church.contact.email && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${church.contact.email}`}
                        className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                      >
                        {church.contact.email}
                      </a>
                    </dd>
                  </div>
                )}
                
                {church.contact.website && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Website</dt>
                    <dd>
                      <a
                        href={church.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[hsl(var(--brand))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                      >
                        Visit Website →
                      </a>
                    </dd>
                  </div>
                )}
              </div>
            </div>
            
            {/* Service Times */}
            <div className="bg-white/50 rounded-brand p-6 border border-black/5">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Service Times</h3>
              
              <div className="space-y-3">
                {church.serviceTimes.sunday && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Sunday Worship</dt>
                    <dd className="text-sm text-black/80">{church.serviceTimes.sunday}</dd>
                  </div>
                )}
                
                {church.serviceTimes.wednesday && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Wednesday</dt>
                    <dd className="text-sm text-black/80">{church.serviceTimes.wednesday}</dd>
                  </div>
                )}
                
                {church.serviceTimes.other && church.serviceTimes.other.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Other Services</dt>
                    <dd className="text-sm text-black/80 space-y-1">
                      {church.serviceTimes.other.map((service, index) => (
                        <div key={index}>{service}</div>
                      ))}
                    </dd>
                  </div>
                )}
              </div>
            </div>
            
            {/* Church Info */}
            <div className="bg-white/50 rounded-brand p-6 border border-black/5">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Church Information</h3>
              
              <div className="space-y-3">
                {church.established && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Established</dt>
                    <dd className="text-sm text-black/80">{church.established}</dd>
                  </div>
                )}
                
                {church.membership && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Membership</dt>
                    <dd className="text-sm text-black/80">{church.membership} members</dd>
                  </div>
                )}
                
                {church.region && (
                  <div>
                    <dt className="text-sm font-medium text-black/60">Region</dt>
                    <dd className="text-sm text-black/80">{church.region}</dd>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
