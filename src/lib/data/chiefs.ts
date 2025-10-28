// Phase 2 Chiefs of Staff data with slugs generated from Phase-1
import { OrgItem } from "../types";

export const CHIEFS: OrgItem[] = [
  {
    id: "executive-chief-staff-secretary-general",
    slug: "executive-chief-staff-secretary-general",
    name: "Executive Chief of Staff — Apostolic Secretary-General's Office",
    blurb: "Administrative execution and Secretariat coordination for the worldwide fellowship.",
    description: "",
    responsibilities: [
      "Administrative execution of Secretary-General directives",
      "Coordination of all Secretariat activities and communications",
      "Management of Fellowship administrative operations",
      "Liaison between Secretary-General and operational departments",
      "Oversight of administrative protocol implementation",
      "Coordination of inter-secretariat collaboration"
    ],
    leadership: [],
    established: "1995",
    contact: {
      email: "secretary.general@fibc.org",
      phone: "+1 (868) 469-2410"
    },
    seal: {
      src: "/seals/secretary-general-seal.png", // Placeholder
      alt: "Apostolic Secretary-General Office Official Seal"
    },
    leaderPhoto: {
      src: "/leadership/secretary-general-chief.jpg", // Placeholder
      alt: "Executive Chief of Staff - Secretary-General Office",
      name: "Chief of Staff Name", // Placeholder
      title: "Executive Chief of Staff"
    }
  },
  {
    id: "executive-chief-staff-chairman",
    slug: "executive-chief-staff-chairman",
    name: "Executive Chief of Staff — Office of the Executive Chairman",
    blurb: "Strategic implementation and executive correspondence for the highest executive office of FIBC.",
    description: "",
    responsibilities: [
      "Strategic implementation of Executive Chairman directives",
      "Coordination of executive correspondence and communications",
      "Management of high-level meetings and assemblies",
      "Liaison between Executive Chairman and all governance entities",
      "Oversight of strategic planning implementation",
      "Executive calendar and priority management"
    ],
    leadership: [],
    established: "1995",
    contact: {
      email: "executive.chairman@fibc.org",
      phone: "+1 (868) 332-4048"
    },
    seal: {
      src: "/executive-chairman-seal.jpeg",
      alt: "Executive Chairman Official Seal"
    },
    leaderPhoto: {
      src: "/bishop_primus.jpeg",
      alt: "Bishop Primus - Executive Chairman",
      name: "Bishop Primus",
      title: "Executive Chairman"
    }
  },
  {
    id: "ecclesiastical-chief-staff",
    slug: "ecclesiastical-chief-staff",
    name: "Ecclesiastical Chief of Staff — Department of Ecclesiastical Administrative Affairs",
    blurb: "Ecclesiastical protocols, ordinations, and governance oversight for the fellowship.",
    description: "",
    responsibilities: [
      "Ecclesiastical protocol development and implementation",
      "Coordination of ordination processes and ceremonies",
      "Management of ecclesiastical governance procedures",
      "Oversight of ministerial appointments and assignments",
      "Administration of ecclesiastical discipline and standards",
      "Coordination of liturgical and worship standards"
    ],
    leadership: [],
    established: "1995",
    contact: {
      email: "ecclesiastical@fibc.org"
    },
    seal: {
      src: "/seals/ecclesiastical-seal.png", // Placeholder
      alt: "Ecclesiastical Administrative Affairs Official Seal"
    },
    leaderPhoto: {
      src: "/leadership/ecclesiastical-chief.jpg", // Placeholder
      alt: "Ecclesiastical Chief of Staff",
      name: "Ecclesiastical Chief Name", // Placeholder
      title: "Ecclesiastical Chief of Staff"
    }
  },
];
