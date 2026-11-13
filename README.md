# KeyDevs Next.js Native UI Rebuild

This version rebuilds the supplied original HTML as separate React/TypeScript section components. Embedded images have been extracted into `public/assets`. The original source stylesheet is retained in `src/app/globals.css` to preserve exact legacy selectors, typography, spacing and responsive rules; each component also has its own CSS file for future scoped styling.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm install        # commit the generated package-lock.json for reproducible deploys
npm run typecheck  # tsc --noEmit
npm run lint       # eslint (ignores .next, public/ and vendored legacy scripts)
npm run build
npm start
```

Requires Node >= 18.18. No environment variables are needed.

## Structure

- `src/app`: routes, root layout and global source stylesheet.
- `src/components/layout`: site header, page shell, legacy script loader.
- `src/components/sections`: one TSX and CSS file per original HTML section.
- `public/assets`: extracted image assets (content-hash names, cached as immutable).
- `public/legacy`: original inline scripts (jQuery plugins, sliders, menu). Loaded in order by `LegacyScripts`.

## Production notes

- This is a one-page site. Links that used to point at pages that do not exist in this project
  (service/industry pages, `*.php`, `/about-us`, ...) now scroll to the matching section
  (`#offerings`, `#industries`, `#about`, `#portfolio`, `#technologies`, `#process`, `#insights`,
  `#testimonials`, `#contact`). Replace them with real routes as those pages get built.
- Images use native `loading="lazy"` instead of the jQuery lazy plugin.
- The two forms (`#schedule_a_call`, `#request_the_quote`) are markup only: nothing submits them yet.
  Wire them to an API route / CRM before launch.
- Privacy policy: the cookie banner's "Learn more" link currently goes to `#contact`; add a real policy page.
- Third-party profile links for Clutch, GoodFirms and Behance point at the site roots because the original
  profile slugs were lost. Put the real profile URLs in `src/components/sections/Reviews/Reviews.tsx` and `Footer/Footer.tsx`.
