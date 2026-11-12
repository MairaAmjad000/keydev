# KeyDevs — Next.js + TypeScript

A Next.js App Router project organized around a clear separation of **content/data**, **CMS access**, and **reusable UI components**. The original KeyDevs HTML/CSS and legacy interactions are retained in this fidelity-first migration so the visual design is not unintentionally redesigned during the architecture cleanup.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```text
src/
├── app/                         # Next.js routes, root layout and global styles
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/                   # Site-wide layout components
│   │   ├── SiteHeader.tsx
│   │   └── LegacyScripts.tsx
│   ├── sections/                 # Page-level and named section components
│   │   ├── HomepageSections.tsx
│   │   └── regions.tsx
│   └── shared/                   # Reusable presentation primitives
│       └── CmsHtmlSection.tsx
├── lib/
│   └── cms/                      # Backend CMS/API integration only
│       └── homepage.ts
└── types/                        # Shared TypeScript contracts
    └── content.ts

public/legacy/                    # Original scripts and static legacy assets
```

## Separation of responsibilities

- **`lib/cms`** owns backend requests, response validation and caching. There is no local homepage JSON or duplicated content seed; the backend is the single source of truth.
- **`types`** defines the content contracts shared by data, API and UI layers.
- **`components/layout`** contains site-wide elements such as the header.
- **`components/sections`** contains named, independently reusable page-section components and composes them in CMS order.
- **`components/shared`** contains reusable rendering primitives.
- **`app`** contains routing and global application setup only.

## CMS configuration

Set `CMS_API_URL` in `.env.local` to an endpoint returning this shape:

```ts
interface HomepageContent {
  page: string;
  title: string;
  description: string;
  headerHtml: string;
  sections: Array<{
    key: string;
    title: string;
    html: string;
    enabled: boolean;
    sortOrder: number;
  }>;
}
```

The endpoint is required. Configure `CMS_API_URL` in your deployment environment and redeploy. There is no local homepage JSON fallback: page content comes from your backend CMS.

**Security:** `html` and `headerHtml` are trusted HTML regions. Sanitize content on the server/admin side before saving or returning it from the CMS. Do not expose an unrestricted HTML editor to untrusted users.

## Important migration note

The supplied source is a very large legacy HTML page with embedded styles, assets and jQuery-based behavior. Each major region now has its own named React component boundary, while its original inner markup remains HTML data for now to protect the original design and interactions. The architecture is now organized and typed, but cards, navigation links, testimonials and service items inside each HTML region have **not** all been converted into native React data-driven components yet. That should be done section-by-section with visual comparison against the original HTML, rather than changing all markup at once and risking layout regressions.

## Commands

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — production server
- `npm run lint` — ESLint
