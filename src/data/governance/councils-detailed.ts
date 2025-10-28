// Detailed Councils & Commissions information for Faith International Baptist Convention Inc.

export interface CouncilDetail {
  id: string;
  name: string;
  shortName: string;
  description: string;
  purpose: string;
  icon: string;
}

export const COUNCILS_DETAILED: CouncilDetail[] = [
  {
    id: "sacred-college",
    name: "Sacred College of Patriarchs & Matriarchs",
    shortName: "Sacred College of Patriarchs & Matriarchs",
    description: "Heritage and succession counsel.",
    purpose: "Provides guidance on heritage preservation and succession planning within the Apostolic and Patriarchal tradition.",
    icon: "👑"
  },
  {
    id: "college-deans",
    name: "College of Deans",
    shortName: "College of Deans",
    description: "Theological and academic oversight.",
    purpose: "Ensures theological integrity and academic excellence across all Fellowship educational institutions and programs.",
    icon: "🎓"
  },
  {
    id: "liturgical-commission",
    name: "Liturgical Commission",
    shortName: "Liturgical Commission",
    description: "Worship and sacred order.",
    purpose: "Oversees worship practices, liturgical development, and maintains sacred order across the Fellowship.",
    icon: "⛪"
  },
  {
    id: "doctrinal-commission",
    name: "Doctrinal Commission",
    shortName: "Doctrinal Commission",
    description: "Doctrinal review and theological integrity.",
    purpose: "Reviews and maintains doctrinal purity, ensuring theological integrity across all Fellowship teachings and practices.",
    icon: "📖"
  },
  {
    id: "youth-family-commission",
    name: "Youth & Family Commission",
    shortName: "Commission for the Youth",
    description: "Youth empowerment and family development.",
    purpose: "Develops programs and policies for youth empowerment, family strengthening, and intergenerational ministry.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    id: "womens-commission",
    name: "Women's Commission",
    shortName: "Women's Commission",
    description: "Ministry, leadership, and advocacy for women.",
    purpose: "Advocates for women's ministry, leadership development, and ensures women's voices are represented in Fellowship governance.",
    icon: "👩"
  },
  {
    id: "interfaith-commission",
    name: "Interfaith & Ecumenical Commission",
    shortName: "Interfaith Council",
    description: "Dialogue with other churches and faith communities.",
    purpose: "Facilitates dialogue and cooperation with other churches and faith communities while maintaining Apostolic distinctiveness.",
    icon: "🤝"
  },
  {
    id: "ethics-discipline",
    name: "Ethics & Discipline Commission",
    shortName: "Council for Ethics & Discipline",
    description: "Ecclesiastical discipline, accountability, and justice.",
    purpose: "Ensures ethical standards, handles disciplinary matters, and maintains accountability across all levels of Fellowship leadership.",
    icon: "⚖️"
  },
  {
    id: "sacred-ministry",
    name: "Sacred Ministry Commission",
    shortName: "Sacred Ministry",
    description: "Oversight of sacred ministry and ordination processes.",
    purpose: "Oversees sacred ministry practices, ordination processes, and ministerial standards throughout the Fellowship.",
    icon: "🕊️"
  },
  {
    id: "ecclesiastical-tribunal",
    name: "Ecclesiastical Tribunal",
    shortName: "Ecclesiastical Tribunal",
    description: "Ecclesiastical court for serious disciplinary and doctrinal matters.",
    purpose: "Serves as the ecclesiastical court for serious disciplinary matters and doctrinal disputes requiring formal adjudication.",
    icon: "🏛️"
  },
  {
    id: "education-commission",
    name: "Education Commission",
    shortName: "Education Commission",
    description: "Educational policy and institutional oversight.",
    purpose: "Develops educational policies and oversees all Fellowship educational institutions and training programs.",
    icon: "📚"
  },
  {
    id: "social-outreach-family",
    name: "Commission for Social Outreach & Family",
    shortName: "Commission for Social Outreach & Family",
    description: "Social programs and family ministry coordination.",
    purpose: "Coordinates social outreach programs and family ministry initiatives across the global Fellowship.",
    icon: "🏠"
  }
];

