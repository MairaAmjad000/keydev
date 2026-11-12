# KeyDevs site — shell scaffold

Next.js (App Router) + Tailwind v4 shell for the rebuild described in
[docs/frontend-blueprint.md](docs/frontend-blueprint.md) and
[docs/admin-panel.md](docs/admin-panel.md).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run typecheck
```

## What exists

| File | Purpose |
|---|---|
| `src/app/globals.css` | Theme tokens ported from the template (`#008080`, Montserrat, radii, shadows) |
| `src/app/layout.tsx` | Font, metadata, skip link, chrome composition |
| `src/lib/site.ts` | Nav tree (19 services, 13 solutions), offices, footer links, form options |
| `src/components/layout/Header.tsx` | Sticky header, top bar, dropdown + mega menu triggers |
| `src/components/layout/MegaMenu.tsx` | Four-column panel with CTA card |
| `src/components/layout/MobileDrawer.tsx` | Accordion drawer |
| `src/components/layout/Footer.tsx` | Offices, link columns, awards, legal bar |
| `src/components/layout/CookieBanner.tsx` | Consent banner (`localStorage: kd-cookie-consent`) |
| `src/components/layout/QuoteModal.tsx` | Request-a-quote form (submission not wired) |
| `src/components/ui/Modal.tsx` | Portal modal, focus trap, Escape, scroll lock |

Sections (the 45 components in the blueprint) are **not** built yet; `src/app/page.tsx`
is a placeholder that exercises the chrome.

## Next

1. Wire the quote form to the queries endpoint.
2. Add the section registry (`lib/sections.tsx`) and the CMS fetchers.
3. Build sections in the order listed in the blueprint (hero → card grids → related → tail).
