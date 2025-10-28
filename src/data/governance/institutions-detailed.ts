// Detailed Institutions & Foundations information for Faith International Baptist Convention Inc.

export interface InstitutionDetail {
  id: string;
  name: string;
  shortName: string;
  description: string;
  purpose: string;
  icon: string;
}

export const INSTITUTIONS_DETAILED: InstitutionDetail[] = [
  {
    id: "good-shepherd-foundation",
    name: "Good Shepherd Foundation",
    shortName: "Good Shepherd Foundation",
    description: "Humanitarian, charitable, and social welfare arm.",
    purpose: "The Fellowship's institutions embody our mission in action—training leaders, serving the vulnerable, broadcasting truth, and advancing Spiritual Baptist education worldwide.",
    icon: "🏥"
  },
  {
    id: "spirit-of-faith-devotions",
    name: "Spirit of Faith Divine Devotion Ministries",
    shortName: "Spirit of Faith Devotion Ministries",
    description: "Morning devotion and worship platform: equipping saints and inspiring covenant partners in daily discipleship.",
    purpose: "Devotional platform for prayer, worship, and evangelism, providing daily spiritual formation for the Fellowship.",
    icon: "🙏"
  },
  {
    id: "faithvision-network",
    name: "FaithVision Network (FVN)",
    shortName: "FaithVision Network (FVN)",
    description: "Our official media arm—live and on-demand—amplifying worship, teaching, and assembly proceedings to the nations.",
    purpose: "Global streaming and Apostolic media communications, broadcasting Fellowship activities and teachings worldwide.",
    icon: "📺"
  },
  {
    id: "harvey-glaud-seminary",
    name: "Archbishop Harvey Glaud Memorial Bible Seminary",
    shortName: "Archbishop Harvey Glaud Memorial Bible Seminary",
    description: "Ministerial education, theology, and leadership formation.",
    purpose: "Provides comprehensive ministerial education, theological training, and leadership formation for Fellowship ministers and leaders.",
    icon: "🏫"
  },
  {
    id: "board-of-education",
    name: "Spiritual Baptist Faith Board of Education",
    shortName: "Board of Education",
    description: "Academic and doctrinal education anchored in Spiritual Baptist heritage.",
    purpose: "Oversees academic and doctrinal education programs, ensuring they are anchored in authentic Spiritual Baptist heritage and tradition.",
    icon: "📚"
  },
  {
    id: "fibcwf-training",
    name: "FIBCWF Training Program",
    shortName: "FIBCWF Training Program",
    description: "Specialized training and development programs for Fellowship members.",
    purpose: "Provides specialized training and development programs for Fellowship members across various ministry and leadership areas.",
    icon: "🎓"
  }
];

