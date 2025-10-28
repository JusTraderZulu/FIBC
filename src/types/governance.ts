export type PillarBlock = {
  title: string;
  subtitle?: string;         // e.g., Stewarded by
  pillarHead?: string | string[];
  keyOfficers?: string[];
  administrativeBody?: string[];
  chiefOfStaff?: string[];
  secretariats?: string[];
  leadershipBodies?: string[];
  councilsAndCommissions?: string[];
  mediaAndDevotions?: string[];
  institutionsAndFoundations?: string[];
  directors?: string[];
  standaloneBody?: {
    name: string;
    roles: string[];
  } | null;
  specialAdvisors?: string[];
};

