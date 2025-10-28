export type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

export const NAV: NavItem[] = [
  { title: "Media", href: "/media-devotions" },
  { title: "Events", href: "/events" },
  { title: "Contact", href: "/contact" },
  { title: "Institutions", href: "/institutions" },
  { title: "Governance", href: "/governance" },
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Our Story", href: "/about" },
      { title: "Member Profiles", href: "/about/leadership" },
      { title: "AGC", href: "/about/agc" },
      { title: "Churches", href: "/churches" },
    ],
  },
];



