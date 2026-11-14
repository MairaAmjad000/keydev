# KeyDevs Technologies: CMS frontend

Next.js (App Router) frontend where **all content comes from the admin panel**: text, links, images, menus,
forms options, SEO, page sections and their order. The code only holds markup and styles.

```
content/                      Bundled copy of the admin-panel data (used when CMS_API_URL is empty or unreachable)
  settings/                   site.json (language, theme colour, SEO, 404 text), forms.json (dropdown options)
  navigation/                 header.json, mobile-menu.json
  globals/                    blocks on every page: footer, quote popup, cookie alert, call-back sidebar, ...
  pages/home/                 page.json (slug, SEO, ordered list of sections) + sections/*.json
public/                       images/, fonts/, scripts/ (browser scripts), favicon.png
src/
  app/
    layout.tsx                <html>, metadata and viewport from settings, loads the stylesheets
    [[...slug]]/page.tsx      renders any CMS page: "/" = slug "home", "/a/b" = slug "a/b"; 404 if unknown
    not-found.tsx             404 page (text from settings)
    api/revalidate/route.ts   webhook the admin panel calls on publish
  components/
    layout/                   SiteShell, Header, MobileMenu, Footer, popups, ... (site-wide chrome)
    sections/                 one component per page section + SectionRenderer (type -> component)
    ui/  icons/  scripts/     form helpers, inline SVG registry, browser-script loader
  lib/cms/                    client.ts (HTTP), local.ts (content/ files), api.ts (what the app calls)
  lib/utils/markup.tsx        small JSX helpers
  config/cms.ts               environment variables
  types/                      TypeScript shapes of the content (settings, layout, sections, page)
  styles/
    index.css                 imports everything in cascade order (order matters)
    base/                     fonts, global rules, utilities, buttons, shared rules
    layout/                   header, mega menu, mobile menu, footer, popups, ...
    sections/                 one file per page section
    vendor/                   Bootstrap copy, slick, Magnific Popup, intl-tel-input, Font Awesome
```

## Run

```
npm install
npm run dev          # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

With no environment variables the site renders the files in `content/`.

## Connecting the admin panel

Copy `.env.example` to `.env.local` and set `CMS_API_URL`. The site then requests these paths
(`GET {CMS_API_URL}/<path>`, JSON, same shape as the matching file in `content/`):

| Path | Content |
|---|---|
| `settings/site`, `settings/forms` | settings, form dropdown options |
| `navigation/header`, `navigation/mobile-menu` | menus |
| `globals/footer`, `globals/quote-popup`, `globals/cookie-alert`, `globals/hire-sticky-bar`, `globals/get-quote-button`, `globals/call-back-sidebar` | site-wide blocks |
| `pages` | list of `{ "slug": "..." }` for all pages |
| `pages/<slug>` | `{ "slug", "seo": { "title", "description" }, "sections": [ { "type": "hero", "data": { ... } }, ... ] }` |

Section `type` values: `hero`, `brandLogos`, `about`, `offerings`, `industries`, `values`, `callout`, `process`,
`testimonials`, `portfolio`, `contactCta`, `whatsAppAnchor`, `technologies`, `blog`, `scheduleCall`, `engagement`,
`locations`. Their `data` shapes are in `src/types/sections.ts`. The order of the array is the order on the page.

If the admin panel is down, the bundled `content/` is used, so the site keeps rendering.
Responses are cached for `CMS_REVALIDATE_SECONDS`; to publish instantly, have the admin panel call
`POST /api/revalidate` with header `x-revalidate-secret: <CMS_REVALIDATE_SECRET>`.
If your CMS returns a different JSON shape, adapt it in `src/lib/cms/api.ts` only.

## Category (service) pages

`/service-category/web-development` (`content/pages/service-category/web-development`) is the template for every
service category page. To add another category, create a page with a new slug and the same list of sections, then
fill each section's data in the admin panel. Sections, in page order:

| type | component | note |
| --- | --- | --- |
| `categoryHero` | `CategoryHero` | banner + enquiry form (fields come from the CMS) + breadcrumb |
| `brandLogos` | `BrandLogos` | existing |
| `introContent` | `IntroContent` | heading, paragraphs, button, picture |
| `serviceOfferings` | `ServiceOfferings` | sticky tab bar + one row per service (tabs are built from the rows) |
| `featureList` | `FeatureList` | icon bullets + picture |
| `advantageGrid` | `AdvantageGrid` | equal-height icon cards |
| `process` | `Process` | existing (optional `icon` for step 5) |
| `frameworkTabs` | `FrameworkTabs` | vertical tabs, accordion on mobile |
| `contactCta` | `ContactCta` | existing (optional `background`, e.g. `bg-white`) |
| `whyChoose` | `WhyChoose` | two-column icon cards |
| `portfolio`, `testimonials`, `technologies`, `blog`, `scheduleCall` | existing | |
| `faq` | `Faq` | Bootstrap accordion |
| `featuredIn` | `FeaturedIn` | press / platform logo strip |

Sticky tabs and scroll-spy for `serviceOfferings` live in `public/scripts/category-page.js` (+ `scroll-to-fixed.js`).
The hero form is markup only, like the other forms in this project; hook your submit handler to the form `id`.

## Service pages

`/service/mvp-development` (`content/pages/service/mvp-development`) is the template for every individual service
page. Create another page with a new slug and the same list of sections. It reuses `categoryHero` (without `form`,
the text spans the full width), `brandLogos`, `introContent`, `contactCta`, `portfolio` (with its optional `callout`
bar), `testimonials`, `technologies`, `faq`, `featuredIn`, `blog`, `scheduleCall` and `engagement`, plus:

| type | component | note |
| --- | --- | --- |
| `offerCards` | `OfferCards` | three cards: illustration + boxed title/text |
| `imageCards` | `ImageCards` | three cards: picture, title, text, button |
| `compareBenefits` | `CompareBenefits` | before/after slider + icon benefit boxes (`public/scripts/twentytwenty.js`) |
| `sprintProcess` | `SprintProcess` | numbered step cards; each sets its own grid order |
| `techStackTabs` | `TechStackTabs` | technology logos in tabs; `idPrefix` keeps ids unique on the page |
| `whyChooseImage` | `WhyChooseImage` | picture + card with icon rows |

## Adding things

* **New page**: create it in the admin panel (or add `content/pages/<slug>/page.json`) and it is served at `/<slug>`.
* **New section type**: add its type in `src/types/sections.ts` + `page.ts`, a component in `src/components/sections`,
  a `case` in `SectionRenderer.tsx`, and its stylesheet in `src/styles/sections` (import it in `styles/index.css`).

## Notes

* Service page images to upload: `public/images/service/mvp-development/` (`prototype-design.png`,
  `single-feature-mvp.png`, `single-feature-mvp2.png`, `on-demand-taxi-booking.jpg`, `on-demand-food-delivery.jpg`,
  `instant-messaging.jpg`, `on-demand-car-wash.jpg`, `why-choose-mvp-development.jpg`), `public/images/technologies/`
  (`php.png`, `node.png`, `angular.png`, `my-sql.png`, `amazon-rds.png`, `aws-ec2.png`, `aws-s3.png`) and
  `public/images/portfolio/` (`fantasyji.jpg`, `finance-app.jpg`, `healthcare-and-fitness.jpg`, `real-estate.jpg`,
  `social-media.jpg`, `event-and-community-building.jpg`). The "featured in" logos use the category page folder below.
* Category page images to upload to `public/images/category/web-development/`: `custom-web-development-listing.webp`,
  `ecommerce-website-listing.webp`, `web-app-development-listing.webp`, `content-management-system-listing.webp`,
  `erp-solution-listing.webp`, `crm-solution-listing.webp`, `daily-mail.webp`, `post.webp`, `sun.webp`, `men.webp`,
  `bbc.webp` (the template referenced them from the live site, they were not embedded).

* Images referenced by the content but missing from `public/`: `images/author/yasir.jpg`,
  `images/author/nick-konechny.webp`, `images/author/star-user.svg`, `images/brand/upwork-rating.webp`,
  `images/brand/pph.webp`, `images/footer/handshake.png`. Upload them (or change the paths in the admin panel).
* Components are server components on purpose: jQuery/slick manage the DOM after load, so React must not re-render it.
  `public/scripts` are those browser scripts, loaded in order by `components/scripts/SiteScripts.tsx`.
