import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { EventMeta } from "@/components/ui/EventMeta";
import { EmptyState } from "@/components/ui/EmptyState";
import { EVENTS } from "@/lib/data/events";

export const metadata = {
  title: "Events & General Assembly",
  description: "Upcoming events and assemblies from Faith International Baptist Convention Inc.",
};

export default function EventsPage() {
  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming' || e.status === 'tba');
  const pastEvents = EVENTS.filter(e => e.status === 'completed');

  return (
    <div>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
        <Section className="pt-2 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Events & General Assembly
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-4">
              Join us for General Assemblies, conferences, and special gatherings that strengthen our fellowship and advance our mission.
            </p>
            <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
            
            {/* Events Content - Right underneath the line */}
            <div className="mt-8">
              {/* Upcoming Events */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif tracking-tight mb-6 text-center">Upcoming Events</h2>
                
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcomingEvents.map((event) => (
                      <Card
                        key={event.id}
                        title={event.title}
                        description={event.description}
                        href={`/events/${event.slug}`}
                      >
                        <div className="mt-4">
                          <EventMeta event={event} />
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title="No Upcoming Events"
                    description="We're planning exciting gatherings for our fellowship. Check back soon for announcements about assemblies and special events."
                    action={{
                      label: "Learn About General Assembly",
                      href: "/about"
                    }}
                    icon="📅"
                  />
                )}
              </div>
              
              {/* Past Events */}
              {pastEvents.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-serif tracking-tight mb-6 text-center">Past Events</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pastEvents.map((event) => (
                      <Card
                        key={event.id}
                        title={event.title}
                        description={event.description}
                        href={`/events/${event.slug}`}
                      >
                        <div className="mt-4">
                          <EventMeta event={event} />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
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
            Don&apos;t miss important announcements about our General Assembly and special events. 
            Connect with Faith International Baptist Convention Inc. and stay informed about gatherings that unite believers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Contact Us
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