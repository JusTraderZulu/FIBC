apostolic-fellowship-draft
==========================

Tech stack
- Next.js App Router (TypeScript)
- Tailwind CSS
- Packages: lucide-react, clsx, date-fns, tailwind-merge, framer-motion
- Fonts: Playfair Display (headings), Inter (body)

Requirements
- Node 18+

Getting started
```bash
npm i
npm run dev
```

Build & run
```bash
npm run build && npm start
```

Images
- `next.config.ts` permits `images.unsplash.com` as a remote host.

Accessibility
- WCAG 2.2 AA: keyboard navigable header, skip link, visible focus ring in accent color.

SEO
- Per-route metadata is defined in `src/app/layout.tsx` and pages.
- `src/app/sitemap.ts` and `src/app/robots.ts` are provided.

Phase-1 workflow
1) Local development
   - Run `npm run dev`
   - Verify routes render with content from `src/lib/seed.ts`
2) GitHub
   - `git init && git add -A && git commit -m "feat: initial"`
   - Create a new GitHub repo and push
3) Vercel
   - Connect the repo in Vercel
   - Ensure Unsplash remotePatterns in `next.config.ts`
   - Deploy and share preview URL

Content management
- All list copy and blurbs are in `src/lib/seed.ts`. Update there.
