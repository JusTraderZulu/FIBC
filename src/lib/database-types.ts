// Database-ready TypeScript types for Faith International Baptist Convention Inc.
// These types match the planned database schema and are ready for backend integration

// ==================== CORE ENTITIES ====================

export interface DBMember {
  id: string; // UUID
  slug: string; // URL-friendly identifier
  name: string;
  title: string;
  bio?: string | null;
  email?: string | null;
  phone?: string | null;
  image_url?: string | null;
  profile_image_alt?: string | null;
  service_years?: number | null;
  responsibilities?: string[] | null;
  education?: string[] | null;
  ordination_date?: string | null; // ISO date string
  status: 'active' | 'retired' | 'emeritus';
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
}

export interface DBSecretariat {
  id: string; // UUID
  slug: string;
  name: string; // Full official name
  short_name: string; // Display name
  description: string;
  responsibilities: string[];
  icon?: string | null;
  head_member_id?: string | null; // Foreign key to members
  staff?: string[] | null; // Array of member IDs
  contact_email?: string | null;
  established_date?: string | null;
  parent_pillar?: number | null; // 1-7
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface DBCouncil {
  id: string; // UUID
  slug: string;
  name: string;
  short_name: string;
  type: 'council' | 'commission';
  description: string;
  purpose: string;
  icon?: string | null;
  chair_member_id?: string | null; // Foreign key to members
  members?: string[] | null; // Array of member IDs
  parent_pillar?: number | null;
  meeting_frequency?: string | null;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface DBInstitution {
  id: string; // UUID
  slug: string;
  name: string;
  short_name: string;
  description: string;
  purpose: string;
  icon?: string | null;
  website_url?: string | null;
  contact_email?: string | null;
  phone?: string | null;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
  } | null;
  director_member_id?: string | null;
  staff?: string[] | null;
  established_date?: string | null;
  seal_image_url?: string | null;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface DBPillar {
  id: number; // 1-7
  title: string;
  subtitle?: string | null;
  description?: string | null;
  icon?: string | null;
  pillar_head_member_id?: string | null;
  steward?: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBEvent {
  id: string; // UUID
  slug: string;
  title: string;
  description: string;
  event_type: 'assembly' | 'conference' | 'workshop' | 'service';
  start_date: string; // ISO timestamp
  end_date?: string | null;
  location?: string | null;
  location_address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
  } | null;
  status: 'upcoming' | 'ongoing' | 'completed' | 'tba';
  agenda?: string[] | null;
  speakers?: string[] | null; // Array of member IDs
  registration_url?: string | null;
  registration_deadline?: string | null;
  image_url?: string | null;
  live_stream_url?: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBMedia {
  id: string; // UUID
  slug: string;
  title: string;
  description: string;
  media_type: 'video' | 'audio' | 'livestream' | 'podcast' | 'article';
  external_url?: string | null;
  thumbnail_url?: string | null;
  duration?: number | null; // seconds
  published_at: string; // ISO timestamp
  speakers?: string[] | null; // Array of member IDs
  featured: boolean;
  platform?: string | null; // e.g., "FVN", "Spirit of Faith"
  view_count: number;
  status: 'published' | 'draft' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface DBChurch {
  id: string; // UUID
  slug: string;
  name: string;
  region: string;
  country: string;
  city: string;
  address: {
    street: string;
    city: string;
    state?: string;
    postal_code?: string;
    country: string;
  };
  pastor_member_id?: string | null;
  contact_email?: string | null;
  contact_phone?: string | null;
  website_url?: string | null;
  service_times?: {
    sunday?: string;
    wednesday?: string;
    other?: string;
  } | null;
  image_url?: string | null;
  established_date?: string | null;
  status: 'active' | 'inactive' | 'pending';
  created_at: string;
  updated_at: string;
}

// ==================== RELATIONAL TABLES ====================

export interface DBMemberRole {
  id: string; // UUID
  member_id: string; // Foreign key to members
  entity_type: 'pillar' | 'secretariat' | 'council' | 'institution' | 'church';
  entity_id: string; // UUID of the entity
  role_title: string;
  start_date?: string | null;
  end_date?: string | null; // null if current
  is_current: boolean;
  created_at: string;
  updated_at: string;
}

// ==================== FORMS & COMMUNICATIONS ====================

export interface DBAGCReport {
  id: string; // UUID
  reporter_name: string;
  reporter_email: string;
  report_type: 'governance' | 'doctrinal' | 'administrative' | 'disciplinary' | 'general';
  message: string;
  is_confidential: boolean;
  status: 'pending' | 'under_review' | 'resolved' | 'archived';
  assigned_to_member_id?: string | null;
  resolution_notes?: string | null;
  submitted_at: string;
  reviewed_at?: string | null;
  resolved_at?: string | null;
  ip_address?: string | null;
  created_at: string;
  updated_at: string;
}

export interface DBContactSubmission {
  id: string; // UUID
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  status: 'new' | 'read' | 'responded' | 'archived';
  responded_at?: string | null;
  ip_address?: string | null;
  submitted_at: string;
  created_at: string;
  updated_at: string;
}

// ==================== API RESPONSE TYPES ====================

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

// ==================== REQUEST TYPES ====================

export interface CreateMemberRequest {
  name: string;
  title: string;
  bio?: string;
  email?: string;
  phone?: string;
  image_url?: string;
  service_years?: number;
  responsibilities?: string[];
}

export interface UpdateMemberRequest extends Partial<CreateMemberRequest> {
  id: string;
}

export interface CreateAGCReportRequest {
  reporter_name: string;
  reporter_email: string;
  report_type: DBAGCReport['report_type'];
  message: string;
  is_confidential: boolean;
}

export interface CreateContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// ==================== FILTER & QUERY TYPES ====================

export interface MemberFilters {
  status?: DBMember['status'];
  search?: string;
  has_role_in_pillar?: number;
  role_type?: DBMemberRole['entity_type'];
}

export interface EventFilters {
  status?: DBEvent['status'];
  event_type?: DBEvent['event_type'];
  start_date_from?: string;
  start_date_to?: string;
}

export interface MediaFilters {
  media_type?: DBMedia['media_type'];
  featured?: boolean;
  platform?: string;
  published_after?: string;
}


