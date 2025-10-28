// Phase 2 TypeScript types for Faith International Baptist Convention Inc.

export interface ImageMeta {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio?: string;
  image?: ImageMeta;
  email?: string;
  phone?: string;
  office?: string;
  responsibilities?: string[];
  education?: string[];
  ordination?: string;
  serviceYears?: number;
}

export interface OrgItem {
  id: string;
  slug: string;
  name: string;
  blurb: string;
  description?: string;
  responsibilities?: string[];
  leadership?: string[]; // Person slugs
  established?: string;
  location?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  image?: ImageMeta;
  seal?: ImageMeta | null; // Departmental seal image
  leaderPhoto?: { // Chief of Staff photo and info
    src: string;
    alt: string;
    name: string;
    title: string;
  };
  href?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date?: string; // ISO date string
  endDate?: string;
  location?: string;
  registrationUrl?: string;
  agenda?: string[];
  speakers?: string[]; // Person slugs
  image?: ImageMeta;
  status: 'upcoming' | 'ongoing' | 'completed' | 'tba';
  category?: 'assembly' | 'conference' | 'workshop' | 'service';
}

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: 'video' | 'audio' | 'livestream' | 'podcast' | 'article';
  externalUrl?: string;
  embedCode?: string;
  duration?: number; // in minutes
  publishedAt?: string; // ISO date string
  speakers?: string[]; // Person slugs
  topics?: string[];
  image?: ImageMeta;
  featured?: boolean;
}

export interface Slug {
  slug: string;
  name: string;
}

// Search types
export interface SearchResult {
  type: 'person' | 'governance' | 'institution' | 'media' | 'event';
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
}

export interface SearchIndex {
  [key: string]: SearchResult[];
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Hidden field for spam protection
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}
