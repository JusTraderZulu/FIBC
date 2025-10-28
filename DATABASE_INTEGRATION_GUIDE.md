# Database Integration Guide
## Faith International Baptist Convention Inc.

This guide explains how to integrate a database into the FIBC website, replacing the current static data with dynamic database-driven content.

---

## 🎯 **Current State**

✅ **Static Data Files** (Phase 1):
- `src/lib/data/leadership.ts` - Empty member profiles array
- `src/data/governance/pillars.ts` - 7 pillars with organizational data
- `src/data/governance/secretariats-detailed.ts` - 12 secretariats
- `src/data/governance/councils-detailed.ts` - 12 councils/commissions
- `src/data/governance/institutions-detailed.ts` - 6 institutions

✅ **API Placeholders** (Ready for database):
- `/api/members` - Member CRUD operations
- `/api/agc-reports` - AGC reporting system
- `/api/secretariats` - Secretariat data

✅ **TypeScript Types** (Database-ready):
- `src/lib/database-types.ts` - All DB schemas as TypeScript interfaces

---

## 🚀 **Recommended: Supabase Integration**

### **Why Supabase?**
- ✅ **Free tier** with generous limits
- ✅ **PostgreSQL** with all features
- ✅ **Auto-generated APIs** (REST + GraphQL)
- ✅ **Built-in authentication** for admin panel
- ✅ **Row Level Security** for data protection
- ✅ **File storage** for images/documents
- ✅ **Realtime subscriptions** (optional)
- ✅ **Perfect for Next.js** + Vercel

---

## 📋 **Step-by-Step Integration Plan**

### **Phase 1: Database Setup** (Week 1)

#### **1. Create Supabase Project**
```bash
# Sign up at https://supabase.com
# Create new project
# Save connection details
```

#### **2. Install Dependencies**
```bash
npm install @supabase/supabase-js
npm install -D @supabase/auth-helpers-nextjs
```

#### **3. Configure Environment Variables**
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

#### **4. Create Database Tables**
Execute SQL in Supabase Dashboard:

```sql
-- Members Table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT,
  email TEXT,
  phone TEXT,
  image_url TEXT,
  profile_image_alt TEXT,
  service_years INTEGER,
  responsibilities JSONB,
  education JSONB,
  ordination_date DATE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'retired', 'emeritus')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Secretariats Table
CREATE TABLE secretariats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  description TEXT NOT NULL,
  responsibilities JSONB NOT NULL,
  icon TEXT,
  head_member_id UUID REFERENCES members(id),
  staff JSONB,
  contact_email TEXT,
  established_date DATE,
  parent_pillar INTEGER CHECK (parent_pillar BETWEEN 1 AND 7),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Councils Table
CREATE TABLE councils (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('council', 'commission')),
  description TEXT NOT NULL,
  purpose TEXT NOT NULL,
  icon TEXT,
  chair_member_id UUID REFERENCES members(id),
  members JSONB,
  parent_pillar INTEGER CHECK (parent_pillar BETWEEN 1 AND 7),
  meeting_frequency TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AGC Reports Table (HIGH PRIORITY)
CREATE TABLE agc_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_name TEXT NOT NULL,
  reporter_email TEXT NOT NULL,
  report_type TEXT NOT NULL CHECK (report_type IN ('governance', 'doctrinal', 'administrative', 'disciplinary', 'general')),
  message TEXT NOT NULL,
  is_confidential BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'resolved', 'archived')),
  assigned_to_member_id UUID REFERENCES members(id),
  resolution_notes TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_members_slug ON members(slug);
CREATE INDEX idx_members_status ON members(status);
CREATE INDEX idx_secretariats_parent_pillar ON secretariats(parent_pillar);
CREATE INDEX idx_councils_type ON councils(type);
CREATE INDEX idx_agc_reports_status ON agc_reports(status);
CREATE INDEX idx_agc_reports_submitted_at ON agc_reports(submitted_at DESC);
```

---

### **Phase 2: API Integration** (Week 2)

#### **1. Create Supabase Client**
Create `src/lib/supabase/client.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

#### **2. Update API Routes**
Replace placeholder comments in:
- `/api/members/route.ts` - Use Supabase queries
- `/api/agc-reports/route.ts` - Store reports in DB
- `/api/secretariats/route.ts` - Fetch from DB

#### **3. Create Data Fetching Functions**
Create `src/lib/database/queries.ts`:
```typescript
import { supabase } from '@/lib/supabase/client';

export async function getAllMembers() {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('status', 'active')
    .order('name');
  
  if (error) throw error;
  return data;
}

export async function getMemberBySlug(slug: string) {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) throw error;
  return data;
}

// ... more query functions
```

---

### **Phase 3: Frontend Integration** (Week 3)

#### **1. Update Member Profiles Page**
Replace:
```typescript
// OLD (static)
import { LEADERSHIP } from "@/lib/data/leadership";

// NEW (database)
import { getAllMembers } from "@/lib/database/queries";

export default async function MemberProfilesPage() {
  const members = await getAllMembers();
  // ... rest of component
}
```

#### **2. Update Governance Components**
Replace static data imports with database fetching in server components.

---

## 🔐 **Authentication & Admin Panel**

### **Setup Admin Authentication**
```typescript
// Use Supabase Auth or NextAuth.js
import { createServerClient } from '@supabase/ssr';

// Protect admin routes
export async function requireAdmin() {
  const supabase = createServerClient(/* ... */);
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session || session.user.role !== 'admin') {
    throw new Error('Unauthorized');
  }
  
  return session.user;
}
```

### **Admin Dashboard** (Future)
Create `/admin` routes for:
- Managing members
- Reviewing AGC reports
- Updating secretariats/councils
- Content management

---

## 📦 **Data Migration Strategy**

### **Step 1: Export Current Data**
```typescript
// Run this script to convert current data to SQL
import { pillars } from '@/data/governance/pillars';
import { SECRETARIATS_DETAILED } from '@/data/governance/secretariats-detailed';

// Generate SQL INSERT statements
// Or use Supabase's CSV import
```

### **Step 2: Seed Database**
```sql
-- Insert members mentioned in pillars
INSERT INTO members (slug, name, title, status) VALUES
  ('wb-primus', 'Dr. W. B. Primus', 'Apostolic Bishop & Patriarchal Leader', 'active'),
  ('sharon-johnson', 'Teacher Sharon Johnson', 'Apostolic Chancellor', 'active'),
  -- ... more members
;

-- Insert secretariats
INSERT INTO secretariats (slug, name, short_name, description, responsibilities, icon, parent_pillar) VALUES
  ('restoration-healing', 
   'Secretariat for Restoration, Healing, Reconciliation & Pastoral Oversight',
   'Restoration, Healing, Reconciliation & Pastoral Care',
   'Provides pastoral care, restoration, and reconciliation within the Fellowship.',
   '["Provides pastoral care within the Fellowship", "Oversees healing ministries"]'::jsonb,
   '💚',
   1),
  -- ... more secretariats
;
```

---

## 🛠️ **Alternative: Prisma ORM** (Optional)

If you prefer Prisma over direct Supabase:

```bash
npm install prisma @prisma/client
npx prisma init
```

Create `prisma/schema.prisma`:
```prisma
model Member {
  id              String    @id @default(uuid())
  slug            String    @unique
  name            String
  title           String
  bio             String?
  email           String?
  // ... rest of fields
  
  secretariatsLed Secretariat[] @relation("SecretariatHead")
  councilsChaired Council[]     @relation("CouncilChair")
  
  @@map("members")
}

model Secretariat {
  id             String   @id @default(uuid())
  slug           String   @unique
  name           String
  // ... rest of fields
  
  headMemberId   String?
  headMember     Member?  @relation("SecretariatHead", fields: [headMemberId], references: [id])
  
  @@map("secretariats")
}
```

---

## 📊 **Data Flow Architecture**

### **Current (Static)**:
```
Static Files → Component → Display
```

### **Future (Database)**:
```
Database → API Route → Server Component → Display
```

### **With Caching** (Recommended):
```
Database → API Route → Redis Cache → Server Component → Display
                     ↑
              Revalidate every 1 hour
```

---

## ✅ **What's Already Prepared**

1. ✅ **TypeScript types** match database schema
2. ✅ **API routes** have placeholder structure
3. ✅ **Component architecture** ready for async data
4. ✅ **Error handling** in place
5. ✅ **Form validation** working
6. ✅ **Modular data structures** easy to migrate

---

## 🎯 **Priority Order for Database Implementation**

### **Immediate (Week 1-2)**:
1. **AGC Reports** - Make the reporting system functional
2. **Contact Submissions** - Store contact form data
3. **Members** - Foundation for all relationships

### **Next (Week 3-4)**:
4. **Secretariats** - Make governance fully dynamic
5. **Councils** - Complete governance interactivity
6. **Institutions** - Dynamic institution management

### **Later (Month 2)**:
7. **Events** - Event management system
8. **Media** - Content management
9. **Churches** - Church directory CMS

---

## 💡 **Quick Start Command**

When ready to implement:

```bash
# 1. Set up Supabase project
# 2. Add environment variables to .env.local
# 3. Run the SQL migrations in Supabase
# 4. Update API routes to use Supabase client
# 5. Replace static imports with database queries
# 6. Deploy to Vercel with environment variables
```

---

## 📞 **Support Resources**

- **Supabase Docs**: https://supabase.com/docs
- **Next.js + Supabase**: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- **Prisma Docs**: https://www.prisma.io/docs (if using Prisma)
- **Database Schema**: See `DATABASE_SCHEMA.md`

---

**The foundation is ready. When you're ready to add the database, everything is structured to make integration smooth and straightforward!** 🚀


