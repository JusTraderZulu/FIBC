// Church Directory data for Faith International Baptist Convention Inc.
import { ImageMeta } from "../types";

export interface Church {
  id: string;
  slug: string;
  name: string;
  pastor?: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  serviceTimes: {
    sunday?: string;
    wednesday?: string;
    other?: string[];
  };
  established?: number;
  membership?: number;
  image?: ImageMeta;
  description?: string;
  specialties?: string[]; // e.g., ["Youth Ministry", "Senior Care", "Community Outreach"]
  region?: string; // e.g., "North America", "Caribbean", "Africa"
}

// Empty array ready for client population
export const CHURCHES: Church[] = [
  // Example structure (to be populated):
  // {
  //   id: "first-spiritual-baptist-church",
  //   slug: "first-spiritual-baptist-church",
  //   name: "First Spiritual Baptist Church",
  //   pastor: "Rev. John Smith",
  //   address: {
  //     street: "123 Church Street",
  //     city: "Port of Spain",
  //     state: "Port of Spain",
  //     postalCode: "00000",
  //     country: "Trinidad and Tobago"
  //   },
  //   contact: {
  //     phone: "(868) 555-0123",
  //     email: "info@firstsbc.org",
  //     website: "https://firstsbc.org"
  //   },
  //   serviceTimes: {
  //     sunday: "9:00 AM & 11:00 AM",
  //     wednesday: "7:00 PM Bible Study"
  //   },
  //   established: 1975,
  //   membership: 250,
  //   region: "Caribbean",
  //   specialties: ["Youth Ministry", "Community Outreach"],
  //   description: "A vibrant community focused on worship and service..."
  // }
];

export const REGIONS = [
  "North America",
  "Caribbean", 
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Oceania"
] as const;
