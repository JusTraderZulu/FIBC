import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  const quickLinks = [
    { title: "About", href: "/about" },
    { title: "Member Profiles", href: "/about/leadership" },
    { title: "AGC", href: "/about/agc" },
    { title: "Governance", href: "/governance" },
    { title: "Churches", href: "/churches" },
    { title: "Events", href: "/events" },
    { title: "Media", href: "/media-devotions" },
    { title: "Search", href: "/search" },
  ];

  return (
    <footer className="border-t border-black/10 bg-white/70 backdrop-blur">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Organization Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Image
                  src="/fibc-seal.png"
                  alt="Faith International Baptist Convention Inc. Official Seal"
                  width={48}
                  height={48}
                  className="opacity-80"
                />
                <div>
                  <div className="font-semibold text-[hsl(var(--brand))]">{SITE.shortName}</div>
                  <div className="text-xs text-black/60">Worldwide Fellowship</div>
                </div>
              </div>
              <p className="text-sm text-black/70 leading-relaxed">
                A worldwide fellowship dedicated to apostolic governance, biblical education, and ministry since 1995.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-sm text-black/70 hover:text-[hsl(var(--brand))] transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Actions */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-[hsl(var(--ink))] mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="block text-sm text-[hsl(var(--brand))] font-medium hover:underline"
                >
                  Contact Us
                </a>
                <a
                  href="/give"
                  className="inline-block bg-[hsl(var(--accent))] text-black px-4 py-2 rounded-brand text-sm font-semibold hover:shadow-md transition-all"
                >
                  Give
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-black/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-black/70">
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a className="text-black/70 hover:text-[hsl(var(--brand))] hover:underline" href="/legal/privacy">
                  Privacy
                </a>
                <a className="text-black/70 hover:text-[hsl(var(--brand))] hover:underline" href="/legal/terms">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}



