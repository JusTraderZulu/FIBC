// src/lib/seed.ts
// Authoritative Phase-1 content for Faith International Baptist Convention Inc.
// This file renders verbatim copy provided by the client (no lorem ipsum).

export type Item = {
  name: string;
  blurb: string;
  href?: string;
  icon?: string;
  image?: string;
};

export const BLURBS = {
  sevenPillarsIntro:
    "The Seven Pillars form the Apostolic-Patriarchal backbone of the Worldwide Fellowship, safeguarding doctrine, order, and sustainable growth through biblical governance and corporate discipline.",
  secretariatsIntro:
    "Our Secretariats translate Apostolic vision into administrative execution—specialized teams entrusted with stewardship, planning, outreach, formation, enterprise, and compliance.",
  chiefsOfStaffIntro:
    "These offices ensure operational excellence, coordination, and discipline across Apostolic governance.",
  institutionsIntro:
    "The Fellowship's institutions embody our mission in action—training leaders, serving the vulnerable, broadcasting truth, and advancing Spiritual Baptist education worldwide.",
  councilsCommissionsIntro:
    "Commissions and Councils provide expert guidance and due process in worship, doctrine, ethics, and societal engagement, ensuring integrity and unity across our worldwide body.",
  mediaDevotionsIntro:
    "Official platforms to equip, inspire, and broadcast the life of the Fellowship.",
  aboutMemberProfilesIntro:
    "Service through fellowship. Meet the officers, leaders, and key members entrusted with apostolic oversight, administrative execution, ecclesiastical order, and day-to-day coordination across the Fellowship.",
  generalAssemblyIntro:
    "The Bi-Annual General Assembly convenes delegates to deliberate, resolve, and commission the Fellowship's next season—under Scripture, order, and shared responsibility.",
  jethroPrinciplesIntro:
    "Guided by Exodus 18, we practice delegation, accountability, and capacity-building—so that governance is both biblical in spirit and excellent in administration.",
};

// Governance — Seven Pillars of Governance
export const SEVEN_PILLARS: Item[] = [
  {
    name: "The Apostolic and Patriarchal Household",
    blurb: "Supreme guardianship of doctrine, succession, and heritage.",
  },
  {
    name: "The Sacred Congregation of Apostles",
    blurb: "Apostolic council of oversight and theological direction.",
  },
  {
    name: "Office of the Executive Chairman",
    blurb: "Executive leadership and corporate governance of the Fellowship.",
  },
  {
    name: "Office of the Apostolic Secretary-General",
    blurb: "Administrative execution, communication, and Secretariat coordination.",
  },
  {
    name: "Department of Ecclesiastical Administrative Affairs",
    blurb: "Protocols, appointments, and ecclesiastical governance.",
  },
  {
    name: "Secretariat for Economy and Sustainability",
    blurb: "Finance, audits, and enterprise development.",
  },
  {
    name: "Secretariat for Education and Training",
    blurb: "Formation, moderator training, and theological education.",
  },
];

// Governance — Secretariats of the Fellowship
export const SECRETARIATS: Item[] = [
  {
    name: "Restoration, Healing, and Reconciliation Ministries",
    blurb: "Pastoral care, reconciliation, and healing ministries.",
  },
  {
    name: "Social Outreach, Community Involvement, and Development",
    blurb: "Social programs, empowerment, and outreach.",
  },
  {
    name: "Planning, Development, and Protocol Management",
    blurb: "Strategic planning, project management, and Assembly protocols.",
  },
  {
    name: "ICT, AI, and Digital Transformation",
    blurb:
      "Digital innovation, systems, and Apostolic Digital Integration (Project Genesis).",
  },
  {
    name: "Innovative Business Enterprise and Development",
    blurb: "Entrepreneurship, investments, and worldwide business expansion.",
  },
  {
    name: "Finance, Budgeting, and Reporting",
    blurb: "Budgets, financial statements, and accountability.",
  },
  {
    name: "Compliance and Governance",
    blurb: "Integrity, compliance, and transparency in administration.",
  },
  {
    name: "General Assembly and Protocol Affairs",
    blurb: "Organising bi-annual General Assemblies and governance sessions.",
  },
  {
    name: "Chaplaincy Administration",
    blurb:
      "Training, commissioning, and oversight of chaplains in hospitals, schools, and civic spaces.",
  },
];

// Governance — Chiefs of Staff Offices
export const CHIEFS_OF_STAFF: Item[] = [
  {
    name: "Executive Chief of Staff — Apostolic Secretary-General's Office",
    blurb: "Administrative execution and Secretariat coordination.",
  },
  {
    name: "Executive Chief of Staff — Office of the Executive Chairman",
    blurb: "Strategic implementation and executive correspondence.",
  },
  {
    name:
      "Ecclesiastical Chief of Staff — Department of Ecclesiastical Administrative Affairs",
    blurb: "Ecclesiastical protocols, ordinations, and governance.",
  },
];

// Governance — Councils & Commissions
export const COUNCILS_COMMISSIONS: Item[] = [
  {
    name: "Sacred College of Patriarchs & Matriarchs",
    blurb: "Heritage and succession counsel.",
  },
  {
    name: "College of Deans",
    blurb: "Theological and academic oversight.",
  },
  {
    name: "Liturgical Commission",
    blurb: "Worship and sacred order.",
  },
  {
    name: "Doctrinal Commission",
    blurb: "Doctrinal review and theological integrity.",
  },
  {
    name: "Youth & Family Commission",
    blurb: "Youth empowerment and family development.",
  },
  {
    name: "Women's Commission",
    blurb: "Ministry, leadership, and advocacy for women.",
  },
  {
    name: "Interfaith & Ecumenical Commission",
    blurb: "Dialogue with other churches and faith communities.",
  },
  {
    name: "Ethics & Discipline Commission",
    blurb: "Ecclesiastical discipline, accountability, and justice.",
  },
];

// Institutions & Foundations
export const INSTITUTIONS: Item[] = [
  {
    name: "Good Shepherd Foundation",
    blurb: "Humanitarian, charitable, and social welfare arm.",
    href: "/institutions/good-shepherd-foundation",
  },
  {
    name: "Archbishop Harvey Glaud Memorial Bible Seminary",
    blurb:
      "Ministerial education, theology, and leadership formation.",
    href: "/institutions/archbishop-harvey-glaud-seminary",
  },
  {
    name: "Spiritual Baptist Faith Board of Education",
    blurb:
      "Academic and doctrinal education anchored in Spiritual Baptist heritage.",
    href: "/institutions/board-of-education",
  },
];

// Media & Devotions
export const MEDIA_DEVOTIONS: Item[] = [
  {
    name: "Faith Vision Network",
    blurb:
      "\"Our official media arm—live and on-demand—amplifying worship, teaching, and assembly proceedings to the nations.\"",
    image: "/FVN.jpeg",
  },
  {
    name: "Spirit of Faith Devotion Ministries",
    blurb:
      "\"Morning devotion and worship platform: equipping saints and inspiring covenant partners in daily discipleship.\"",
    image: "/SOFDev.jpeg",
  },
  {
    name: "Spiritual Baptist Faith & Spiritual Churches Digital Library",
    blurb:
      "The official digital archive and heritage center preserving sacred records, liturgies, and cultural expression of the Spiritual Baptist Faith.",
    image: "/digital-library-seal.jpg",
    href: "#", // Library platform coming soon
  },
];

// About page (Phase-1)
export const ABOUT = {
  leadershipIntro:
    BLURBS.aboutMemberProfilesIntro,
  jethroPrinciplesIntro:
    BLURBS.jethroPrinciplesIntro,
  generalAssemblyIntro:
    BLURBS.generalAssemblyIntro,

  // Phase-1: profiles optional; fill in when provided
  memberProfiles: <Item[]>[],
};

// Contact / Visit - Official Address
export const CONTACT = {
  addressLine1: "11 Pastor Joseph Bennicourt Drive",
  city: "Parrylands Village Guapo",
  state: "Trinidad and Tobago",
  postalCode: "",
  country: "Republic of Trinidad and Tobago",
  serviceTimes: "Sundays at 9:00 & 11:00 AM",
  phone: "+1 (868) 332-4048",
  email: "info@fibc.org",
  mapEmbedSrc: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=11%20Pastor%20Joseph%20Bennicourt%20Drive,%20Parrylands%20Village%20Guapo,%20Trinidad%20and%20Tobago&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

// Give (Phase-1 placeholder)
export const DONATION_URL = "#";

// Home "Our Mission" cards
export const HOME_MISSION: Item[] = [
  {
    name: "Worship",
    blurb:
      "Christ-centered, Scripture-rich liturgy for every generation.",
  },
  {
    name: "Formation",
    blurb:
      "Teaching and discipleship that shapes everyday faith.",
  },
  {
    name: "Service",
    blurb:
      "Loving our city through practical care and partnership.",
  },
];