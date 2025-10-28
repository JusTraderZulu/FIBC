import type { MetadataRoute } from "next";

import { PILLARS } from "@/lib/data/pillars";
import { SECRETARIATS } from "@/lib/data/secretariats";
import { COUNCILS } from "@/lib/data/councils";
import { CHIEFS } from "@/lib/data/chiefs";
import { LEADERSHIP } from "@/lib/data/leadership";
import { EVENTS } from "@/lib/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://fibc.org";
  
  const staticRoutes = [
    "",
    "/about",
    "/about/leadership",
    "/governance",
    "/governance/seven-pillars",
    "/governance/secretariats", 
    "/governance/chiefs-of-staff",
    "/governance/councils-commissions",
    "/institutions",
    "/media-devotions",
    "/media-devotions/archive",
    "/events",
    "/contact",
    "/give",
    "/search",
    "/legal/privacy",
    "/legal/terms",
  ];
  
  // Dynamic governance routes
  const governanceRoutes = [
    ...PILLARS.map(item => `/governance/${item.slug}`),
    ...SECRETARIATS.map(item => `/governance/${item.slug}`),
    ...COUNCILS.map(item => `/governance/${item.slug}`),
    ...CHIEFS.map(item => `/governance/${item.slug}`),
  ];
  
  // Dynamic leadership routes
  const leadershipRoutes = LEADERSHIP.map(person => `/about/leadership/${person.slug}`);
  
  // Dynamic event routes
  const eventRoutes = EVENTS.map(event => `/events/${event.slug}`);
  
  const allRoutes = [...staticRoutes, ...governanceRoutes, ...leadershipRoutes, ...eventRoutes];
  
  return allRoutes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route.includes('[slug]') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('/governance/') ? 0.8 : 0.7,
  }));
}



