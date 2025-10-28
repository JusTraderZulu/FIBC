import { notFound } from "next/navigation";
import { DetailHeader } from "@/components/ui/DetailHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";
import { EventMeta } from "@/components/ui/EventMeta";
import { PersonCard } from "@/components/ui/PersonCard";
import { EVENTS } from "@/lib/data/events";
import { LEADERSHIP } from "@/lib/data/leadership";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const event = EVENTS.find(e => e.slug === params.slug);
  if (!event) return { title: "Event Not Found" };
  
  return {
    title: event.title,
    description: event.description,
  };
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetailPage({ params }: Props) {
  const event = EVENTS.find(e => e.slug === params.slug);
  
  if (!event) {
    notFound();
  }

  const speakers = event.speakers?.map(slug => LEADERSHIP.find(p => p.slug === slug)).filter(Boolean) || [];

  return (
    <div>
      <DetailHeader
        title={event.title}
        description={event.description}
        image={event.image}
        breadcrumb={[
          { label: "Events", href: "/events" },
          { label: event.title, href: `/events/${event.slug}` }
        ]}
      />
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Event Meta */}
            <div className="mb-8">
              <EventMeta event={event} />
            </div>
            
            {/* Event Details */}
            <Prose>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </Prose>
            
            {/* Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-serif tracking-tight mb-6">Agenda</h2>
                <ul className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-[hsl(var(--brand))] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-black/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Registration */}
            {event.registrationUrl && event.status === 'upcoming' && (
              <div className="bg-[hsl(var(--accent))]/10 rounded-brand p-6 border border-[hsl(var(--accent))]/20">
                <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Registration</h3>
                <p className="text-sm text-black/70 mb-4">
                  Secure your place at this important gathering.
                </p>
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-brand bg-[hsl(var(--accent))] text-black px-4 py-2 font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/50 transition-all"
                >
                  Register Now
                </a>
              </div>
            )}
            
            {/* Event Details */}
            <div className="bg-white/50 rounded-brand p-6 border border-black/5">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Event Details</h3>
              
              {event.date && (
                <div className="mb-3">
                  <dt className="text-sm font-medium text-black/60">Date</dt>
                  <dd className="text-sm text-black/80">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </dd>
                </div>
              )}
              
              {event.location && (
                <div className="mb-3">
                  <dt className="text-sm font-medium text-black/60">Location</dt>
                  <dd className="text-sm text-black/80">{event.location}</dd>
                </div>
              )}
              
              <div>
                <dt className="text-sm font-medium text-black/60">Category</dt>
                <dd className="text-sm text-black/80 capitalize">{event.category || 'General'}</dd>
              </div>
            </div>
          </div>
        </div>
        
        {/* Speakers */}
        {speakers.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-serif tracking-tight mb-6">Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakers.map((speaker) => (
                speaker ? <PersonCard key={speaker.id} person={speaker} /> : null
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
