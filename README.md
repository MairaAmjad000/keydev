# KeyDevs — Next.js migration

A TypeScript + Next.js App Router migration of the supplied KeyDevs homepage. The original HTML styling and content fragments are preserved as CMS-editable regions to prioritize UI fidelity.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — production server
- `npm run lint` — ESLint

## CMS integration

The page is loaded through `getHomepageContent()` in `src/lib/cms.ts`. Without `CMS_API_URL`, it uses `public/cms/homepage.json` as the local seed. Set `CMS_API_URL` in `.env.local` to an endpoint returning the `HomepageContent` shape documented in `src/types/cms.ts`.

Each homepage region is an independent record in `sections[]` with a stable `key`, `title`, `html`, `enabled`, and `sortOrder`. Header markup is stored in `headerHtml`. An admin panel can edit/reorder/enable sections and update HTML without changing React components. Sanitize CMS-authored HTML server-side before returning it.

## Component structure

- `SiteHeader` — CMS-managed header/navigation region
- `HomepageSections` — ordered CMS section renderer
- `CmsHtmlSection` — reusable trusted HTML region renderer
- `LegacyScripts` — original jQuery/Bootstrap/Slick/SweetAlert dependencies and interaction scripts

## UI fidelity notes

The original stylesheet (including embedded font data and icon-font definitions) is preserved in `src/app/globals.css`. Original inline images remain embedded in the CMS seed. Original third-party stylesheets and legacy scripts are retained. Some legacy interactions rely on jQuery and external CDNs, matching the supplied source behavior.

## Next migration step

For a production CMS, replace raw HTML fields with structured fields for hero, service cards, testimonials, portfolio entries, blog posts, navigation links, contact details, and footer columns. The current typed API boundary is ready for that gradual migration while preserving the visual layout.
