# KeyDevs — frontend component & page blueprint

Companion to [admin-panel.md](admin-panel.md). The admin doc describes what the CMS stores;
this one describes what the Next.js site should render from it.

Source analysed: `keydev html.zip` — 36 HTML files, 697 `<section>` tags, Bootstrap 4.6.2 +
jQuery 3.7.1 + slick-carousel + SweetAlert2 + Font Awesome 5 + one 550 KB hand-written `style.css`.
Section data below is cross-checked against the CMS section keys in `admin-panel.md` §5–§6.

---

## 1. Counts at a glance

| Layer | Count | Notes |
|---|---|---|
| Route files (`page.tsx`) | **18** | 10 static + 6 dynamic + 2 legal |
| URLs those routes render | **~70** | 19 services, 13 solutions, 4+4 categories, blog & portfolio details |
| Distinct page templates | **7** | home, inner-static, listing, service detail, solution detail, category, estimate |
| **Section components** | **45** | 105 CMS section instances → 45 distinct types |
| …of which implemented as shared variants | **28** | 10 near-identical card-grid sections collapse into one component |
| UI primitives | **16** | heading, button, image, carousel, accordion, tabs, modal, form fields… |
| Layout / chrome components | **6** | header, mega menu, mobile drawer, footer, cookie banner, quote modal |
| Form components | **6** + wizard | schedule call, quote, contact, banner lead, SEO audit, estimate wizard |
| Reusable "render one section" registry entries | **45** | the `sections` JSON key → component map |

The template's 697 section tags collapse to 45 components because the HTML is copy-pasted:
`.padding-60 bg-white` repeats **109 times** across 34 pages, and each of the 20 service pages
repeats the same 8 "tail" sections (testimonials, portfolio, featured-in, connect, technologies,
blogs, schedule, engagement).

---

## 2. Pages

### 2.1 Template files vs real pages

36 `.html` files, but the four *category* files are **concatenations of their child pages**:

| File | Child pages embedded (heroes) |
|---|---|
| `service category/web-development.html` | 7 (web, PHP, WordPress, CodeIgniter, Laravel, AngularJS, NodeJS) |
| `service category/enterprise-solutions.html` | 6 (MVP, ERP, CRM, CMS, eCommerce, UI/UX) |
| `service category/mobile-app-development.html` | 5 (startup app, Android, iPhone, Flutter, cross-platform) |
| `service category/on-demand-solutions.html` | 3 (taxi, food delivery, car wash) |
| `service category/social-solutions.html` | 3 |
| `solution category/industry-solutions.html` | 4 (real estate, finance, travel, health) |
| `solution category/other-solutions.html` | 2 (fantasy sports, chatbot) |

Counts of hero `<section class="banner…">` across the whole template = **58**. That is the real
page count the HTML represents; the 36 files are a packaging artifact. Do **not** rebuild category
pages as giant concatenations — the CMS has separate category records with their own sections.

### 2.2 Route map

| # | Route | Source file | Template | Data source |
|---|---|---|---|---|
| 1 | `/` | `home.html` | home | `pages.home` (14 sections) |
| 2 | `/about-us` | `who-we-are.html` | inner-static | `pages.about` (13) |
| 3 | `/how-we-work` | `how-we-work.html` | inner-static | `pages.process` (10) |
| 4 | `/client-review` | `client-review.html` | inner-static + reviews | `pages.client_review` (7) |
| 5 | `/technologies` | `technologies.html` | inner-static | `pages.technology` (7) |
| 6 | `/portfolio` | `portfolio.html` | listing | `pages.portfolio` (9) + portfolio rows |
| 7 | `/blog` | `blog.html` | listing + pagination | `pages.blog` (6) + blog rows |
| 8 | `/contact` | `contact.html` | inner-static + form | `pages.contact` (6) |
| 9 | `/estimate-your-project` | `estimate-your-project.html` | wizard | `estimate_steps` + options (52 steps) |
| 10 | `/services/[slug]` | `services/*.html` (19) | service detail | service row + 16 sections |
| 11 | `/service-category/[slug]` | `service category/*.html` (4) | category | category row + full section set |
| 12 | `/solutions/[slug]` | nav + embedded in `solution category/*` (13) | solution detail | solution row + 13 sections |
| 13 | `/solution-category/[slug]` | `solution category/*.html` (4) | category | category row + sections |
| 14 | `/blog/[slug]` | — (no detail file shipped) | article | blog row |
| 15 | `/portfolio/[slug]` | — (no detail file shipped) | case study | portfolio row |
| 16 | `/privacy-policy` | footer link | legal | static/CMS page |
| 17 | `/terms` | footer link | legal | static/CMS page |
| 18 | `not-found.tsx` | — | 404 | — |

Slugs from the template nav (use these as seed content, don't hard-code):

- **Services (19):** android-app-development, android-game-development, angularjs-development,
  cms-solutions, codeigniter-development, crm-solutions, cross-platform-app-development,
  ecommerce-solutions, erp-solutions, flutter-app-development, ios-game-development,
  iphone-app-development, laravel-development, nodejs-development, php-web-development,
  search-engine-optimization, startup-mvp-development, ui-ux-design, wordpress-development
- **Solution categories (4):** on-demand, industry, social, other
- **Solutions (13):** taxi, food-delivery, car-wash, real-estate, finance, travel, health-fitness,
  social-media, dating, instant-messaging, media-entertainment, fantasy-sports, chatbot
- **Service categories (4):** web-development, enterprise-solutions, mobile-app-development,
  digital-marketing

### 2.3 Which template each route reuses

Only **7 page templates** are needed:

1. **Home** — unusual section order, no inner banner.
2. **Inner static** (about, process, reviews, technology, contact) — hero banner + sections + shared tail.
3. **Listing** (portfolio, blog) — grid + filters + pagination.
4. **Service detail** — hero + 15 section slots + tail.
5. **Solution detail** — hero + 12 section slots + tail.
6. **Category** — hero + intro + child cards + tail.
7. **Estimate wizard** — full-screen stepper, no header/footer sections.

---

## 3. Section components (45)

Format: **Component** — CMS key — rendered on. Every section is optional (`status`/`__active`)
and renders `null` when off, so a page is a filtered map over its section list.

### 3.1 Hero & framing

| # | Component | Key | Props (from CMS) | Used on |
|---|---|---|---|---|
| 1 | `HeroBanner` | `hero` | eyebrow, title, description(rich), button_text_1/2 + urls, image | all detail + inner pages |
| 2 | `BannerSlider` | `banners` | items[n]: image, alt | service pages ("innerbanner" image strip) |
| 3 | `CalloutStrip` | `callout` | text_before, typed_words[n].word, text_after, button_text, button_url | home, process, service, solution |
| 4 | `SectionIntro` | `introduction` | title, description(rich), button_text/url, image | service, solution |
| 5 | `AboutBlock` | `about` | image, small_title, title, description, button_text | home, about |

### 3.2 Grid / card sections (one component, 10 configurations)

All share `eyebrow, title, description, items[n]{icon,image,alt,title,subtitle,description,button_text,button_url,points}`.
Implement once as `<CardGrid variant=…>`; variants differ only in card chrome and column count.

| # | Component | Key | Variant |
|---|---|---|---|
| 6 | `CardGrid` | `offerings` | tabs + image cards (home) |
| 7 | `CardGrid` | `industries` | icon cards on dark |
| 8 | `CardGrid` | `value` | icon cards, 3-up |
| 9 | `CardGrid` | `features` | icon + "show all" expander (`show_all_text`) |
| 10 | `CardGrid` | `benefits` | icon cards + CTA button |
| 11 | `CardGrid` | `services` | icon + link (service pages) |
| 12 | `CardGrid` | `why_choose_us` | icon cards, alternate bg |
| 13 | `CardGrid` | `beneficiaries` | "Ideal for" icon cards |
| 14 | `CardGrid` | `frameworks` | logo/image cards, 4-up |
| 15 | `CardGrid` | `statistics` | number + title counters |

### 3.3 Process & timeline

| # | Component | Key | Notes |
|---|---|---|---|
| 16 | `ProcessSteps` | `process` | items: icon, number, title, description (zig-zag layout) |
| 17 | `HowItWorks` | `how_it_works` | numbered vertical list |
| 18 | `ProcessDetail` | `process_steps` | richer variant with images |
| 19 | `HistoryTimeline` | `history` | alternating year blocks |

### 3.4 Relationship sections (selection-driven)

Each takes `*_ids[]` from the CMS and renders live records — one generic `<RelatedGrid>` with a
per-type card:

| # | Component | Key | Source collection |
|---|---|---|---|
| 20 | `PortfolioShowcase` | `portfolio` | portfolios (3 layouts: featured `preview-box`, 3-up grid, `our_work`) |
| 21 | `Testimonials` | `testimonials` | testimonials (slick slider) |
| 22 | `TechStack` | `technologies` | technologies (+ technology_images) |
| 23 | `LatestBlogs` | `blogs` | blogs |
| 24 | `BlogCategoriesGrid` | `blog_categories` | blog_categories |
| 25 | `OtherSolutions` | `other_solutions` | solutions |
| 26 | `YouMayAlsoLike` | `client_reviews` | testimonials, review-card variant |
| 27 | `LocationsGrid` / `/contact` map | `locations` | locations |
| 28 | `SocialLinks` | `social_links` | settings `social` |

### 3.5 Trust & proof

| # | Component | Key / source | Notes |
|---|---|---|---|
| 29 | `ClutchReviews` | `clutch` | Clutch widget + rating summary |
| 30 | `FeaturedIn` | `featured_in`, `our_work`, `our_award_section` | logo strip + award badges |
| 31 | `ConnectWithUs` | global `connect` | logo + rating + review_count cards |
| 32 | `ClientLogos` | `brand-logo` blocks | static logo marquee |

### 3.6 Content / editorial

| # | Component | Key | Fields |
|---|---|---|---|
| 33 | `TeamGrid` | `team_intro` | items: photo, name, role, socials |
| 34 | `Leadership` | `leadership` | larger profile cards |
| 35 | `MissionVision` | `mission_vision` | two-column cards |
| 36 | `CoreValues` | `values` | icon list |
| 37 | `FeaturedProjects` | `featured_projects` | large image + text rows |
| 38 | `TweetsStrip` | `latest_tweets` | embed list |
| 39 | `ContactInfoPanel` | `contact_information` | address/phone/email cards |
| 40 | `MapEmbed` | `map` | iframe / static map + office tabs |

### 3.7 Global CTA sections (appear on every page via `show_on[]`)

| # | Component | Key | Fields |
|---|---|---|---|
| 41 | `ScheduleMeeting` | `schedule_meeting` | image, alt, section_title, title, description, button_1_text, button_2_text |
| 42 | `EngagementModels` | `engagement_models` | image, items[icon,title], button_text |
| 43 | `SolutionCTA` | `solution_cta` | eyebrow, title, subtitle, button, icon |
| 44 | `FAQAccordion` | `faq` | items[question, answer] |
| 45 | `NewsletterCta` / `WeWouldLoveToHear` | page `bg-light` tail | title + callback button |

> The shared tail on 34 pages is exactly: **Testimonials → FeaturedIn → ConnectWithUs →
> TechStack → LatestBlogs → ScheduleMeeting → EngagementModels**. Build it as one
> `<PageTail />` that reads globals + `show_on`, not seven copies.

---

## 4. UI primitives (16)

| Component | Purpose / props |
|---|---|
| `SectionHeading` | eyebrow, title, description, align, invert |
| `Button` / `ButtonLink` | primary, outline, white, ghost; sizes; icon |
| `SmartImage` | `next/image` wrapper, required alt, aspect, priority |
| `RichText` | sanitised HTML from CMS textareas (`dangerouslySetInnerHTML` + sanitizer) |
| `Card` | base surface used by every grid variant |
| `RatingStars` | value 1–5, half stars, count |
| `Carousel` | replaces slick: embla/swiper, arrows + dots, responsive slidesToShow |
| `Accordion` | FAQ + process; single/multi open |
| `Tabs` | offerings tabs, office tabs |
| `Modal` | quote popup, schedule call, video lightbox |
| `Breadcrumbs` | service/solution/blog hierarchy |
| `Pagination` | blog + portfolio listings |
| `Badge` | category pill, "new" |
| `LogoMarquee` | featured-in / brand strip |
| `FormField` | label, error, hint, required mark — wraps input/textarea/select |
| `VideoEmbed` / `MapEmbed` | lazy iframes |

---

## 5. Layout & chrome (6)

| Component | Consumes |
|---|---|
| `RootLayout` | fonts, `style.css`→ Tailwind theme, cookie state |
| `Header` | `general`, `contact`, `social`, `header_top_bar`, `header_button` |
| `MegaMenu` | service_categories × services, solution_categories × solutions, static links |
| `MobileDrawer` | same tree, accordion behaviour |
| `Footer` | `footer_expertise`, `footer_solution`, `footer_experience`, `footer_clutch`, `footer_awards`, `footer_bottom`, `locations` |
| `CookieBanner` | `cookie` (title, text, button_text) |

Header structure from the template: top bar (rating "Excellent 5 out of 5", email, phone,
"Request a Call Back") → main nav (Home, Company ▾, Our Service ▾, Solution ▾, Portfolio, Blog,
Contact, CTA "Estimate Your Project") → two CTA cards inside the Services and Solutions menus
(`header_services_cta`, `header_solutions_cta`).

---

## 6. Forms (6)

Field lists taken verbatim from the template markup:

| Form | Fields | Where |
|---|---|---|
| `ScheduleCallForm` | name, email, phone, company, budget, region, service, reference, message, recaptcha | global section |
| `QuoteForm` (popup) | name, email, phone, company, budget, region, service, reference, message, recaptcha | every page |
| `ContactForm` | + `uploadedFiles` (file), skype | `/contact` |
| `BannerLeadForm` | name, email, phone, message (3-field variant on service hero) | service pages |
| `SeoAuditForm` | name, email, company, website_url, phone | digital-marketing page only |
| `EstimateWizard` | 52 steps, 3 entry forms (mobile / web / game), branches `2`, `21`, `45` | `/estimate-your-project` |

`budget`, `region`, `service`, `reference` options come from settings `form_options`
(three textareas, one option per line) — fetch once, share through a context.

---

## 7. Suggested structure

```
src/
  app/
    (site)/layout.tsx            Header + Footer + modals
    (site)/page.tsx              home
    (site)/about-us/page.tsx
    (site)/how-we-work/page.tsx
    (site)/client-review/page.tsx
    (site)/technologies/page.tsx
    (site)/portfolio/page.tsx
    (site)/portfolio/[slug]/page.tsx
    (site)/blog/page.tsx
    (site)/blog/[slug]/page.tsx
    (site)/contact/page.tsx
    (site)/services/[slug]/page.tsx
    (site)/service-category/[slug]/page.tsx
    (site)/solutions/[slug]/page.tsx
    (site)/solution-category/[slug]/page.tsx
    (site)/privacy-policy/page.tsx
    (site)/terms/page.tsx
    estimate-your-project/page.tsx   own layout, no chrome
  components/layout/  Header, MegaMenu, MobileDrawer, Footer, CookieBanner
  components/ui/      16 primitives
  components/sections/ 45 registered sections
  components/forms/
  lib/cms.ts          typed fetchers per collection
  lib/sections.tsx    registry: Record<SectionKey, ComponentType<SectionProps>>
  content/            nav tree, fallback copy
```

The single most important file is `lib/sections.tsx` — the admin stores
`sections: { [key]: { status, …fields } }`, so a page render is:

```tsx
{page.sections
  .filter(s => s.active && registry[s.key])
  .map(s => { const C = registry[s.key]; return <C key={s.key} {...s.data} /> })}
```

Add a section to the site = add a key to the registry. No page edits.

---

## 8. Build order

1. **Theme port** — 550 KB `style.css` is Bootstrap-4 + custom. Extract the design tokens
   (colours, spacing scale, radii, type scale) into Tailwind rather than importing the file.
2. **Chrome** — Header + MegaMenu + MobileDrawer + Footer + CookieBanner + QuoteModal (6).
3. **Primitives** — SectionHeading, Button, SmartImage, RichText, Card, Carousel, Accordion (7 of 16).
4. **Home** — 14 sections; forces `CardGrid`, `CalloutStrip`, `RelatedGrid`, `PageTail` into shape.
5. **Inner-static pages** — about, process, reviews, technology (mostly reuse).
6. **Service detail + category** — 16 sections; then 19 pages come free.
7. **Solution detail + category** — 13 sections; then 13 pages come free.
8. **Listings + details** — blog, portfolio, pagination, article/case-study layouts.
9. **Estimate wizard** — 52 steps; separate effort, do last.
10. **Legal, 404, SEO metadata, sitemap.**

Roughly: steps 2–4 are ~45% of the work, the 19 service pages are near-zero after step 6,
and the wizard is a project of its own.

---

## 9. Porting gotchas

1. **Bootstrap 4, not 5** — no `gap` utilities, different grid breakpoints; a straight
   Bootstrap-5 or Tailwind port will shift layouts. Budget time for visual diffing on home.
2. **jQuery plugins** — slick (carousels), wow.js (scroll reveal), SweetAlert2 (alerts),
   `jquery.cookie` (cookie banner). Replace with embla/`framer-motion`, sonner, and a
   consent cookie — do not keep `allpage.js`.
3. **Icon fonts** — Font Awesome 5 + custom `icomoon`; decide between `react-icons` or keeping the font.
4. **Images** — assets are referenced as `assets/assets/...` with hashed filenames; move to
   `public/` or a CDN and generate `next/image` sizes. Many portfolio banners are >250 KB.
5. **Duplicate IDs in the template** — category pages repeat `id="schedule_a_call"` /
   `request_the_quote` several times; React requires unique ids per instance.
6. **Section order is data, not code** — pages must render sections in stored order.
7. **Empty states** — CMS lets every section be switched off; each component needs a null-safe
   render and the page needs a sane fallback hero.
8. **SEO** — the 17-field block lives per page/record; generate `generateMetadata`, OG and
   JSON-LD (`schema_type`, `schema_data`) from it.
