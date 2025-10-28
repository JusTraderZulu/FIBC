import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { CHURCHES, REGIONS } from "@/lib/data/churches";

export const metadata = {
  title: "Worldwide Church Directory",
  description: "Find member churches of Faith International Baptist Convention Inc. worldwide.",
};

export default function ChurchDirectoryPage() {
  // Group churches by region
  const churchesByRegion = REGIONS.map(region => ({
    region,
    churches: CHURCHES.filter(church => church.region === region)
  })).filter(group => group.churches.length > 0);

  return (
    <div>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
        <Section className="pt-2 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Worldwide Church Directory
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-4">
              Discover Faith International Baptist Convention Inc. churches worldwide - a fellowship committed to apostolic governance, biblical education, and community service.
            </p>
            <div className="w-16 h-1 bg-[hsl(var(--brand))] mx-auto rounded-full mb-6"></div>
            
            {/* Church Directory Content - Right underneath the line */}
            <div className="mt-8">
              {CHURCHES.length > 0 ? (
                <>
                  {/* Search and Filters */}
                  <div className="mb-8 flex flex-col sm:flex-row gap-4">
                    <input
                      type="search"
                      placeholder="Search churches by name, city, or pastor..."
                      className="flex-1 px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                    />
                    <select className="px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]">
                      <option value="">All Regions</option>
                      {REGIONS.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Churches by Region */}
                  <div className="space-y-12">
                    {churchesByRegion.map(({ region, churches }) => (
                      <div key={region}>
                        <div className="flex items-center justify-center gap-3 mb-6">
                          <h2 className="text-2xl font-serif tracking-tight text-[hsl(var(--brand))]">{region}</h2>
                          <Badge className="bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]">
                            {churches.length} church{churches.length !== 1 ? 'es' : ''}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {churches.map((church) => (
                            <Card
                              key={church.id}
                              title={church.name}
                              description={`${church.address.city}, ${church.address.state} • ${church.pastor || 'Pastor TBA'}`}
                              href={`/churches/${church.slug}`}
                              className="h-full"
                            >
                              <div className="mt-4 space-y-2 text-sm text-black/70">
                                {church.serviceTimes.sunday && (
                                  <div className="flex items-center gap-2">
                                    <span>📅</span>
                                    <span>Sunday: {church.serviceTimes.sunday}</span>
                                  </div>
                                )}
                                {church.contact.phone && (
                                  <div className="flex items-center gap-2">
                                    <span>📞</span>
                                    <span>{church.contact.phone}</span>
                                  </div>
                                )}
                                {church.specialties && church.specialties.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-3">
                                    {church.specialties.slice(0, 2).map(specialty => (
                                      <Badge key={specialty} className="bg-black/5 text-black/70 text-xs">
                                        {specialty}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <EmptyState
                  title="Church Directory Coming Soon"
                  description="We're building a comprehensive directory of member churches worldwide. Check back soon to find a FIBC fellowship near you."
                  action={{
                    label: "Contact Us to List Your Church",
                    href: "/contact"
                  }}
                  icon="🏛️"
                />
              )}
            </div>
          </div>
        </Section>
      </div>
      
      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Join Our Fellowship</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Is your church interested in becoming a member of Faith International Baptist Convention Inc.? 
            We welcome congregations that share our commitment to apostolic governance and biblical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Contact Us About Membership
            </a>
            <a
              href="/governance"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Learn About Our Governance
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}