// Detailed Chiefs of Staff information for Faith International Baptist Convention Inc.

export interface ChiefDetail {
  id: string;
  name: string;
  shortName: string;
  description: string;
  purpose: string;
  icon: string;
}

export const CHIEFS_DETAILED: ChiefDetail[] = [
  {
    id: "executive-chief-secretary-general",
    name: "Executive Chief of Staff – Apostolic Secretary-General's Office",
    shortName: "Chief of Staff",
    description: "Administrative execution and Secretariat coordination.",
    purpose: "Ensures operational excellence, coordination, and discipline across Apostolic governance through administrative execution and Secretariat coordination.",
    icon: "⭐"
  },
  {
    id: "executive-chief-chairman",
    name: "Executive Chief of Staff – Office of the Executive Chairman",
    shortName: "Evangelist Reneea Samuel",
    description: "Strategic implementation and executive correspondence.",
    purpose: "Handles strategic implementation and executive correspondence for the Office of the Executive Chairman, ensuring operational excellence and coordination.",
    icon: "🎯"
  },
  {
    id: "ecclesiastical-chief",
    name: "Ecclesiastical Chief of Staff – Department of Ecclesiastical Administrative Affairs",
    shortName: "Ecclesiastical Chief of Staff",
    description: "Ecclesiastical protocols, ordinations, and governance.",
    purpose: "Oversees ecclesiastical protocols, ordination processes, and governance procedures within the Department of Ecclesiastical Administrative Affairs.",
    icon: "⛪"
  }
];

