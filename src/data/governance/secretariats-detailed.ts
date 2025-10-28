// Detailed Secretariats information for Faith International Baptist Convention Inc.

export interface SecretariatDetail {
  id: string;
  name: string;
  shortName: string;
  description: string;
  responsibilities: string[];
  icon: string;
}

export const SECRETARIATS_DETAILED: SecretariatDetail[] = [
  {
    id: "restoration-healing",
    name: "Secretariat for Restoration, Healing, Reconciliation & Pastoral Oversight",
    shortName: "Restoration, Healing, Reconciliation & Pastoral Care",
    description: "Provides pastoral care, restoration, and reconciliation within the Fellowship.",
    responsibilities: [
      "Provides pastoral care, restoration, and reconciliation within the Fellowship",
      "Oversees ministries of healing and counseling with direct Apostolic oversight"
    ],
    icon: "💚"
  },
  {
    id: "social-outreach",
    name: "Secretariat for Social Outreach & Community Development",
    shortName: "Social Development & Outreach",
    description: "Leads social programs, humanitarian aid, and empowerment projects.",
    responsibilities: [
      "Leads social programs, humanitarian aid, and empowerment projects",
      "Engages local and global communities in Apostolic witness"
    ],
    icon: "🤝"
  },
  {
    id: "apostolic-planning",
    name: "Secretariat for Apostolic Planning, Strategic Development & Protocol Affairs",
    shortName: "Apostolic Planning, Strategic Development & Protocol Affairs",
    description: "Responsible for strategic planning, policy development, and Apostolic protocol.",
    responsibilities: [
      "Responsible for strategic planning, policy development, and Apostolic protocol",
      "Manages ceremonial order and institutional foresight"
    ],
    icon: "📋"
  },
  {
    id: "ict-digital",
    name: "Secretariat for ICT, AI, Cybersecurity & Digital Transformation",
    shortName: "ICT, AI, Cybersecurity & Digital Transformation",
    description: "Oversees digital innovation, artificial intelligence, and secure communications.",
    responsibilities: [
      "Oversees digital innovation, artificial intelligence, and secure communications",
      "Ensures Apostolic governance adapts to the technological age"
    ],
    icon: "💻"
  },
  {
    id: "enterprise-innovation",
    name: "Secretariat for Enterprise, Innovation & Sustainable Development",
    shortName: "Enterprise, Innovation & Sustainable Development",
    description: "Develops Apostolic business ventures and financial empowerment projects.",
    responsibilities: [
      "Develops Apostolic business ventures and financial empowerment projects",
      "Promotes sustainable economic growth across regions"
    ],
    icon: "🚀"
  },
  {
    id: "finance-treasury",
    name: "Secretariat for Finance, Treasury & Reporting",
    shortName: "Finance, Budgeting & Reporting",
    description: "Custodian of financial governance, budgeting, and treasury operations.",
    responsibilities: [
      "Custodian of financial governance, budgeting, and treasury operations",
      "Produces transparent reporting for Apostolic accountability"
    ],
    icon: "💰"
  },
  {
    id: "governance-integrity",
    name: "Secretariat for Governance, Integrity & Accountability",
    shortName: "Governance, Religious Data Management, Integrity & Accountability",
    description: "Safeguards ethical standards, compliance, and internal governance audits.",
    responsibilities: [
      "Safeguards ethical standards, compliance, and internal governance audits",
      "Ensures all Apostolic offices operate with transparency and order"
    ],
    icon: "⚖️"
  },
  {
    id: "general-assembly",
    name: "Secretariat for General Assembly, Conference Management & Cultural Heritage Oversight",
    shortName: "General Assembly, Conference Management & Cultural Heritage Oversight",
    description: "Manages the Bi-Annual General Assembly and international conferences.",
    responsibilities: [
      "Manages the Bi-Annual General Assembly and international conferences",
      "Preserves and promotes the Apostolic Spiritual Baptist cultural heritage"
    ],
    icon: "🏛️"
  },
  {
    id: "chaplaincy-pastoral",
    name: "Secretariat for Chaplaincy & Pastoral Care Administration",
    shortName: "Chaplaincy & Pastoral Care Administration",
    description: "Oversees chaplaincy services in institutions, hospitals, and community programs.",
    responsibilities: [
      "Oversees chaplaincy services in institutions, hospitals, and community programs",
      "Ensures spiritual care and Apostolic pastoral presence"
    ],
    icon: "⛪"
  },
  {
    id: "international-relations",
    name: "Secretariat for International Relations & Apostolic Diplomacy",
    shortName: "International Relations & Apostolic Diplomacy",
    description: "Coordinates ecumenical relations, international partnerships, and global Apostolic diplomacy.",
    responsibilities: [
      "Coordinates ecumenical relations, international partnerships, and global Apostolic diplomacy",
      "Manages international Fellowship relationships and diplomatic affairs"
    ],
    icon: "🌍"
  },
  {
    id: "youth-women-family",
    name: "Secretariat for Youth, Women & Family Life Development",
    shortName: "Deputy SG, Youth Development",
    description: "Focuses on family strengthening, youth leadership, and women's empowerment.",
    responsibilities: [
      "Focuses on family strengthening, youth leadership, and women's empowerment",
      "Develops programs for youth and family ministry across the Fellowship"
    ],
    icon: "👨‍👩‍👧‍👦"
  },
  {
    id: "apostolic-research",
    name: "Secretariat for Apostolic Research & Theological Development",
    shortName: "Apostolic Research & Theological Development",
    description: "Advances Spiritual Baptist theology, Apostolic doctrine, and historical preservation.",
    responsibilities: [
      "Advances Spiritual Baptist theology, Apostolic doctrine, and historical preservation",
      "Conducts research and development of Apostolic theological frameworks"
    ],
    icon: "📚"
  },
  {
    id: "education-formation",
    name: "Secretariat for Apostolic Formation, Education, Research & Training (AFERD)",
    shortName: "Apostolic Formation, Education, Research & Training (AFERD)",
    description: "Comprehensive education and formation programs for the Fellowship.",
    responsibilities: [
      "Develops comprehensive education and formation programs",
      "Oversees training and development across the Fellowship"
    ],
    icon: "🎓"
  }
];

