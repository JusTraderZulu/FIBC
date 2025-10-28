import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { CONTACT } from "@/lib/seed";

export const metadata = { title: "Contact & Visit Us" };

export default function Page() {
  const addr = `${CONTACT.addressLine1}, ${CONTACT.city}, ${CONTACT.state} ${CONTACT.postalCode}, ${CONTACT.country}`;
  
  return (
    <div>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-b from-[hsl(var(--brand))]/5 to-transparent">
        <Section className="pt-2 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[hsl(var(--ink))] mb-3 drop-shadow-sm bg-gradient-to-b from-[hsl(var(--ink))] to-[hsl(var(--brand))] bg-clip-text text-transparent">
              Contact & Visit Us
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-4">
              We&apos;d love to hear from you. Reach out with questions, prayer requests, or to plan a visit to Faith International Baptist Convention Inc.
            </p>
            <div className="w-16 h-1 bg-[hsl(var(--accent))] mx-auto rounded-full mb-6"></div>
            
            {/* Contact Content - Right underneath the line */}
            <div className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-white/80 to-[hsl(var(--brand))]/5 rounded-brand p-8 border border-black/5 shadow-sm space-y-8">
                  {/* FIBC Seal */}
                  <div className="text-center mb-6">
                    <Image
                      src="/fibc-seal.png"
                      alt="Faith International Baptist Convention Inc. Official Seal"
                      width={80}
                      height={80}
                      className="mx-auto mb-3 drop-shadow-sm"
                    />
                    <p className="text-sm font-medium text-[hsl(var(--brand))] tracking-wide">
                      Faith International Baptist Convention Inc.
                    </p>
                    <p className="text-xs text-black/60 mt-1">
                      Established 1995
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif tracking-tight mb-6 text-center text-[hsl(var(--ink))]">Visit Our Fellowship</h2>
                    <div className="space-y-6">
                      <div className="bg-white/60 rounded-lg p-4 border border-black/5">
                        <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span>📍</span> Address
                        </h3>
                        <p className="text-black/80 leading-relaxed">{addr}</p>
                      </div>
                      
                      <div className="bg-white/60 rounded-lg p-4 border border-black/5">
                        <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span>⏰</span> Service Times
                        </h3>
                        <p className="text-black/80 leading-relaxed">{CONTACT.serviceTimes}</p>
                      </div>
                      
                      <div className="bg-white/60 rounded-lg p-4 border border-black/5">
                        <h3 className="text-sm font-semibold text-[hsl(var(--brand))] uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span>📞</span> Contact Information
                        </h3>
                        <div className="space-y-2">
                          <p>
                            <a 
                              href={`tel:${CONTACT.phone}`}
                              className="text-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]/80 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] rounded transition-colors"
                            >
                              {CONTACT.phone}
                            </a>
                          </p>
                          <p>
                            <a 
                              href={`mailto:${CONTACT.email}`}
                              className="text-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]/80 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] rounded transition-colors"
                            >
                              {CONTACT.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interactive Map */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-serif tracking-tight text-[hsl(var(--ink))]">Our Location</h2>
                      <a
                        href={`https://maps.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addr)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90 transition-colors"
                      >
                        <span>🧭</span>
                        Get Directions
                      </a>
                    </div>
                    {CONTACT.mapEmbedSrc ? (
                      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-black/5 hover:border-[hsl(var(--brand))]/30 transition-colors">
                        <iframe
                          src={CONTACT.mapEmbedSrc}
                          title="Faith International Baptist Convention Inc. Location"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full aspect-video"
                          allowFullScreen
                        />
                        {/* Map overlay for better branding */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                          <p className="text-xs font-semibold text-[hsl(var(--brand))]">FIBC Trinidad</p>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-[hsl(var(--brand))]/10 to-[hsl(var(--brand))]/5 flex items-center justify-center text-black/60 border-2 border-black/10 shadow-lg">
                        <div className="text-center">
                          <div className="text-5xl mb-4">🗺️</div>
                          <p className="text-lg font-medium text-[hsl(var(--brand))]">Interactive Map</p>
                          <p className="text-sm text-black/60 mt-2">Loading location...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Quick Actions */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white/60 hover:bg-white/80 rounded-lg border border-black/5 text-sm font-medium text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))] transition-colors"
                      >
                        <span>📞</span>
                        Call Us
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white/60 hover:bg-white/80 rounded-lg border border-black/5 text-sm font-medium text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))] transition-colors"
                      >
                        <span>📍</span>
                        View Larger
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-gradient-to-br from-white/90 to-[hsl(var(--brand))]/5 rounded-brand p-8 border border-black/5 shadow-sm">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-serif tracking-tight text-[hsl(var(--ink))] mb-2">Send Us a Message</h2>
                    <p className="text-black/70">We&apos;d love to hear from you and will respond promptly.</p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Call to Action */}
      <Section className="bg-[hsl(var(--brand))]/5 pt-12 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Join Our Worldwide Fellowship</h2>
          <p className="text-black/70 mb-6 leading-relaxed">
            Faith International Baptist Convention Inc. welcomes believers from all backgrounds. 
            Connect with us to learn more about our fellowship, find a local church, or get involved in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/about"
              className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Learn About FIBC
            </a>
            <Link
              href="/churches"
              className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
            >
              Find a Church
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}



