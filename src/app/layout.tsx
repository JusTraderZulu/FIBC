import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import "@/styles/theme.css";
import Nav from "@/components/header/Nav";
import SiteFooter from "@/components/footer/SiteFooter";
import { SITE } from "@/lib/site";

const heading = Playfair_Display({ variable: "--font-heading", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: "%s — Faith International Baptist Convention Inc.",
  },
  description: `${SITE.name} — official website.`,
  metadataBase: new URL('https://fibc.org'),
  openGraph: {
    title: SITE.name,
    description: `${SITE.name} — official website.`,
    url: "https://fibc.org", // Update with actual domain
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg", // Default OpenGraph image
        width: 1200,
        height: 630,
        alt: `${SITE.name} - Official Website`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: `${SITE.name} — official website.`,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased bg-[hsl(var(--paper))] text-[hsl(var(--ink))] overflow-x-hidden`}>
        <Nav />
        <main id="main" className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
