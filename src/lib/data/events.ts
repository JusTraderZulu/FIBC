// Phase 2 Events data for Faith International Baptist Convention Inc.
import { EventItem } from "../types";

export const EVENTS: EventItem[] = [
  {
    id: "general-assembly-2025",
    slug: "general-assembly-2025",
    title: "Bi-Annual General Assembly 2025",
    description: "The Bi-Annual General Assembly convenes delegates to deliberate, resolve, and commission the Fellowship's next season—under Scripture, order, and shared responsibility.",
    status: "tba",
    category: "assembly",
    agenda: [
      "Opening worship and devotion",
      "State of the Fellowship address", 
      "Committee reports and deliberations",
      "Elections and appointments",
      "Strategic planning sessions",
      "Closing commissioning service"
    ],
    speakers: [], // To be populated with Person slugs
    // date: "", // To be set when announced
    // location: "", // To be determined
    // registrationUrl: "", // To be added when registration opens
  }
  // Additional events to be added as they are announced
];
