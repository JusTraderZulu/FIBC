# Faith International Baptist Convention Inc. - Database Schema Plan

## 🗄️ **Required Databases for Future Implementation**

Based on the current site architecture and interactive governance system, here are the databases you'll need:

---

## 📊 **Core Database Tables**

### **1. Members / People** ⭐ HIGH PRIORITY
**Purpose**: Store all fellowship members, officers, and leaders mentioned throughout governance structure

**Schema**:
```sql
members:
  - id (UUID, Primary Key)
  - slug (String, Unique, for URLs)
  - name (String, Required)
  - title (String, Required) -- e.g., "Apostolic Bishop & Patriarchal Leader"
  - bio (Text, nullable)
  - email (String, nullable)
  - phone (String, nullable)
  - image_url (String, nullable)
  - profile_image_alt (String, nullable)
  - service_years (Integer, nullable)
  - responsibilities (JSON Array, nullable)
  - education (JSON Array, nullable)
  - ordination_date (Date, nullable)
  - status (Enum: active, retired, emeritus)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Member Profiles page (`/about/leadership`)
- Individual member detail pages (`/about/leadership/[slug]`)
- Governance pillar modals (clickable names)
- Search functionality

**Current Placeholder**: `src/lib/data/leadership.ts`

---

### **2. Secretariats** ⭐ HIGH PRIORITY
**Purpose**: Detailed information about all Fellowship secretariats

**Schema**:
```sql
secretariats:
  - id (UUID, Primary Key)
  - slug (String, Unique)
  - name (String, Required) -- Full official name
  - short_name (String, Required) -- Display name
  - description (Text, Required)
  - responsibilities (JSON Array)
  - icon (String, nullable) -- Emoji or icon identifier
  - head_member_id (UUID, Foreign Key -> members.id, nullable)
  - staff (JSON Array of member IDs, nullable)
  - contact_email (String, nullable)
  - established_date (Date, nullable)
  - parent_pillar (Integer, nullable) -- Which pillar it belongs to
  - status (Enum: active, inactive)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Governance pillar modals (clickable secretariats)
- Secretariat detail modals
- Governance pages
- Search functionality

**Current Placeholder**: `src/data/governance/secretariats-detailed.ts`

---

### **3. Councils & Commissions** ⭐ HIGH PRIORITY
**Purpose**: Store council and commission information

**Schema**:
```sql
councils:
  - id (UUID, Primary Key)
  - slug (String, Unique)
  - name (String, Required)
  - short_name (String, Required)
  - type (Enum: council, commission)
  - description (Text, Required)
  - purpose (Text, Required)
  - icon (String, nullable)
  - chair_member_id (UUID, Foreign Key -> members.id, nullable)
  - members (JSON Array of member IDs, nullable)
  - parent_pillar (Integer, nullable)
  - meeting_frequency (String, nullable) -- e.g., "Monthly", "Quarterly"
  - status (Enum: active, inactive)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Governance pillar modals (clickable councils)
- Council detail modals
- Governance pages

**Current Placeholder**: `src/data/governance/councils-detailed.ts`

---

### **4. Institutions & Foundations** ⭐ MEDIUM PRIORITY
**Purpose**: Information about Fellowship institutions

**Schema**:
```sql
institutions:
  - id (UUID, Primary Key)
  - slug (String, Unique)
  - name (String, Required)
  - short_name (String, Required)
  - description (Text, Required)
  - purpose (Text, Required)
  - icon (String, nullable)
  - website_url (String, nullable)
  - contact_email (String, nullable)
  - phone (String, nullable)
  - address (JSON Object, nullable)
  - director_member_id (UUID, Foreign Key -> members.id, nullable)
  - staff (JSON Array of member IDs, nullable)
  - established_date (Date, nullable)
  - seal_image_url (String, nullable)
  - status (Enum: active, inactive)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Institutions page
- Governance pillar modals (clickable institutions)
- Institution detail modals

**Current Placeholder**: `src/data/governance/institutions-detailed.ts`

---

### **5. Pillars** ⭐ MEDIUM PRIORITY
**Purpose**: Seven Pillars of governance structure

**Schema**:
```sql
pillars:
  - id (Integer, Primary Key, 1-7)
  - title (String, Required)
  - subtitle (String, nullable)
  - description (Text, nullable)
  - icon (String, nullable)
  - pillar_head_member_id (UUID, Foreign Key -> members.id, nullable)
  - steward (String, nullable) -- e.g., "Exec Chair CoS"
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Governance page pillar grid
- Pillar detail modals

**Current Placeholder**: `src/data/governance/pillars.ts`

---

### **6. Events** ⭐ HIGH PRIORITY
**Purpose**: General Assemblies, conferences, workshops

**Schema**:
```sql
events:
  - id (UUID, Primary Key)
  - slug (String, Unique)
  - title (String, Required)
  - description (Text, Required)
  - event_type (Enum: assembly, conference, workshop, service)
  - start_date (Timestamp, Required)
  - end_date (Timestamp, nullable)
  - location (String, nullable)
  - location_address (JSON Object, nullable)
  - status (Enum: upcoming, ongoing, completed, tba)
  - agenda (JSON Array, nullable)
  - speakers (JSON Array of member IDs, nullable)
  - registration_url (String, nullable)
  - registration_deadline (Date, nullable)
  - image_url (String, nullable)
  - live_stream_url (String, nullable)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Events listing page
- Event detail pages
- Homepage (upcoming events)

**Current Placeholder**: `src/lib/data/events.ts`

---

### **7. Media & Devotions** ⭐ MEDIUM PRIORITY
**Purpose**: Videos, livestreams, devotionals, podcasts

**Schema**:
```sql
media:
  - id (UUID, Primary Key)
  - slug (String, Unique)
  - title (String, Required)
  - description (Text, Required)
  - media_type (Enum: video, audio, livestream, podcast, article)
  - external_url (String, nullable) -- YouTube, Vimeo, etc.
  - thumbnail_url (String, nullable)
  - duration (Integer, nullable) -- in seconds
  - published_at (Timestamp, Required)
  - speakers (JSON Array of member IDs, nullable)
  - featured (Boolean, default: false)
  - platform (String, nullable) -- e.g., "FVN", "Spirit of Faith"
  - view_count (Integer, default: 0)
  - status (Enum: published, draft, archived)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Media & Devotions page
- Media archive
- Homepage (featured content)

**Current Placeholder**: `src/lib/data/media.ts`

---

### **8. Churches** ⭐ MEDIUM PRIORITY
**Purpose**: Directory of Fellowship churches worldwide

**Schema**:
```sql
churches:
  - id (UUID, Primary Key)
  - slug (String, Unique)
  - name (String, Required)
  - region (String, Required) -- e.g., "North America", "Caribbean"
  - country (String, Required)
  - city (String, Required)
  - address (JSON Object, Required)
  - pastor_member_id (UUID, Foreign Key -> members.id, nullable)
  - contact_email (String, nullable)
  - contact_phone (String, nullable)
  - website_url (String, nullable)
  - service_times (JSON Object, nullable)
  - image_url (String, nullable)
  - established_date (Date, nullable)
  - status (Enum: active, inactive, pending)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Churches directory page
- Church detail pages
- Search functionality

**Current Placeholder**: `src/lib/data/churches.ts`

---

## 🔗 **Relational Database Tables**

### **9. Member-Role Assignments** (Junction Table)
**Purpose**: Track which members hold which positions in which entities

**Schema**:
```sql
member_roles:
  - id (UUID, Primary Key)
  - member_id (UUID, Foreign Key -> members.id, Required)
  - entity_type (Enum: pillar, secretariat, council, institution, church)
  - entity_id (UUID, Required)
  - role_title (String, Required) -- e.g., "Chief of Staff", "Chairman"
  - start_date (Date, nullable)
  - end_date (Date, nullable) -- null if current
  - is_current (Boolean, default: true)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Purpose**: 
- Tracks Dr. W.B. Primus across multiple pillars
- Shows member service history
- Enables dynamic organizational charts

---

### **10. Reports & Communications** ⭐ HIGH PRIORITY
**Purpose**: Store AGC reports and official communications

**Schema**:
```sql
agc_reports:
  - id (UUID, Primary Key)
  - reporter_name (String, Required)
  - reporter_email (String, Required)
  - report_type (Enum: governance, doctrinal, administrative, disciplinary, general)
  - message (Text, Required)
  - is_confidential (Boolean, default: false)
  - status (Enum: pending, under_review, resolved, archived)
  - assigned_to_member_id (UUID, Foreign Key -> members.id, nullable)
  - resolution_notes (Text, nullable)
  - submitted_at (Timestamp, Required)
  - reviewed_at (Timestamp, nullable)
  - resolved_at (Timestamp, nullable)
  - ip_address (String, nullable) -- for security/spam prevention
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- AGC reporting form (`/about/agc`)
- AGC dashboard (future admin panel)
- Email notifications

---

### **11. Contact Form Submissions** ⭐ MEDIUM PRIORITY
**Purpose**: Store general contact form submissions

**Schema**:
```sql
contact_submissions:
  - id (UUID, Primary Key)
  - name (String, Required)
  - email (String, Required)
  - subject (String, nullable)
  - message (Text, Required)
  - status (Enum: new, read, responded, archived)
  - responded_at (Timestamp, nullable)
  - ip_address (String, nullable)
  - submitted_at (Timestamp, Required)
  - created_at (Timestamp)
  - updated_at (Timestamp)
```

**Used In**:
- Contact page form
- Admin notifications

---

### **12. Search Index** (Optional - can use Algolia/Meilisearch instead)
**Purpose**: Fast full-text search across all content

**Schema**:
```sql
search_index:
  - id (UUID, Primary Key)
  - entity_type (Enum: member, secretariat, council, institution, event, media, church)
  - entity_id (UUID, Required)
  - title (String, Required)
  - description (Text, nullable)
  - keywords (Text Array, nullable)
  - content (Text, nullable) -- Full searchable content
  - url (String, Required)
  - updated_at (Timestamp)
```

---

## 🔧 **Recommended Database Technology**

### **Option 1: PostgreSQL** (Recommended)
- ✅ **Best for**: Complex relationships, JSON support, full-text search
- ✅ **Free tier**: Vercel Postgres, Supabase, Neon
- ✅ **Integration**: Works perfectly with Next.js
- ✅ **Features**: JSONB columns, advanced querying, reliable

### **Option 2: MongoDB**
- ✅ **Best for**: Flexible schema, rapid iteration
- ✅ **Free tier**: MongoDB Atlas
- ✅ **Integration**: Mongoose with Next.js
- ✅ **Features**: Schema flexibility, easy scaling

### **Option 3: Supabase** (Easiest)
- ✅ **Best for**: All-in-one solution (Database + Auth + Storage + Realtime)
- ✅ **Free tier**: Generous free tier
- ✅ **Integration**: Built for Next.js, excellent DX
- ✅ **Features**: Auto-generated APIs, Row Level Security, Auth built-in

---

## 📋 **Priority Implementation Order**

### **Phase 1: Core Content** (Start Here)
1. **Members database** - Foundation for all relationships
2. **AGC Reports** - Functional requirement for reporting system
3. **Contact Submissions** - Already have the form, just need storage

### **Phase 2: Governance** (Next)
4. **Secretariats** - Make governance fully dynamic
5. **Councils** - Complete governance structure
6. **Institutions** - Dynamic institution management

### **Phase 3: Dynamic Content** (Later)
7. **Events** - Event management system
8. **Media** - Content management for videos/devotionals
9. **Churches** - Church directory management

### **Phase 4: Admin & Advanced** (Future)
10. **Search Index** - Fast search (or use Algolia)
11. **Member Roles** - Dynamic organizational chart
12. **Audit Logs** - Track changes (governance requirement)

---

## 🎯 **What We'll Create Now: API Placeholders**

I'll create:
1. **Database type definitions** - TypeScript interfaces matching schema
2. **API route placeholders** - Ready for database integration
3. **Service layer structure** - Clean separation of concerns
4. **Migration plan** - How to transition from static to dynamic data

This will make it **seamless** to plug in a database later without changing the frontend code.

Ready to create the placeholders?


