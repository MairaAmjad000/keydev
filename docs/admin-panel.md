# KeyDevs Admin Panel — Complete Frontend Rebuild Reference

> **Captured:** 12 November 2026 · **Method:** read-only inspection (GET requests only; no record was created, edited or deleted)
> **Base URL:** `https://kd.keydevs.net`
> **Panel entry:** `https://kd.keydevs.net/` → login → `https://kd.keydevs.net/admin/dashboard`
> **Login credentials:** supplied separately in chat and deliberately **not** stored in this file.
> **Screenshots:** [`screenshots/`](screenshots/) — dashboard, services list, service create, estimate wizard.

---

## 1. What this system is

A Laravel (Blade) server-rendered CMS/admin for the KeyDevs marketing site. Almost every screen is a full page load; there is no SPA/JSON API layer exposed to the browser (state changes are form POSTs plus a handful of AJAX toggles). The frontend rebuild therefore has to define its own API contract — section 18 proposes one based on the observed data shapes.

| Layer | Detected |
|---|---|
| Backend | Laravel (CSRF `_token` in every form, `_method` spoofing for PUT/DELETE, `loginAuth` route, Blade views) |
| Admin theme | **Sneat** Bootstrap 5 admin template (`/backend/assets/`) |
| CSS | Bootstrap 5 (`core.css`), `demo.css`, Perfect Scrollbar, ApexCharts, Font Awesome 5.9, Public Sans (Google Fonts) |
| Tables | **DataTables 2.3.3** + `dataTables.bootstrap5` — client-side, 25 rows/page, search box, pagination |
| Charts | ApexCharts (`dashboards-analytics.js`) |
| JS | jQuery 3.7.1, Popper, Bootstrap bundle, `menu.js`, `main.js` |
| Editors | Custom rich-text wrappers: `.js-rich-editor`, `.js-editor` (textarea + WYSIWYG toolbar) |
| Uploads | `multipart/form-data`; image previews are click-to-upload widgets ("Click the preview to upload or replace"), accepted JPG/PNG/WEBP/GIF/AVIF |

### Global shell

- **Left sidebar** (Sneat menu, collapsible, Perfect Scrollbar): brand block → nav groups (below) → footer text `KeyDevs Technologies Pvt Ltd.`
- **Top navbar:** sidebar toggle, notification bell with dropdown (latest 6 items + "View all notifications"), user dropdown (`Admin Admin` → Profile / Logout), fullscreen toggle, theme toggle.
- **Breadcrumb:** appears as a card title like `Services / Create`, `Role / Edit`; list pages show only the module title.
- **Cards:** every screen is a stack of `card` blocks with `card-header` (title + right-aligned actions) and `card-body`.
- **Footer:** `KeyDevs Technologies Pvt Ltd.`
- **Page `<title>`:** literally `| Keydevs` on every admin screen — the prefix variable is empty (bug worth fixing in the rebuild).

---

## 2. Authentication & session

| Screen | URL | Method | Fields |
|---|---|---|---|
| Login | `/` (root; guests see the login page) | `POST /loginAuth` | `email` (text, placeholder "Enter your email", label "Email or Username"), `password`, `remember` (checkbox "Remember Me"), submit "Login", link "Forgot Password?" |
| Forgot password | `/forgot-password` | `POST /forgot-password` | `email` (required), submit "Send Reset Link", "Back to Login" |
| Reset password | `/reset-password/{token}` | `POST` | `email`, `password`, `password_confirmation` (Laravel standard; page returns 405 when requested with GET without a token) |
| Logout | any screen | `POST /logout` | hidden `_token` |

Notes:
- `/login` and `/admin/login` do **not** exist (404). The login view is served at the site root, and after auth you are redirected into `/admin/*`.
- Every authenticated page contains a logout form with the CSRF token — the token value is session-scoped and changes per session.
- No registration, no 2FA, no SSO.
- On session expiry an admin route redirects to `/` (login), not to an `/admin` login page.

---

## 3. Navigation map (sidebar, exact order and labels)

```
Dashboard                       /admin/dashboard
Appearance                      /admin/pages/home/seo      (opens Website Content → Home → SEO tab)
Services ▾
  Categories                    /admin/service-categories
  Services                      /admin/services
Solutions ▾
  Categories                    /admin/solution-categories
  Solutions                     /admin/solutions
Portfolio                       /admin/portfolios
Technology                      /admin/technologies
Blogs ▾
  Categories                    /admin/blog-categories
  All Blogs                     /admin/blogs
Reviews                         /admin/testimonials
Locations                       /admin/locations
Estimate Wizard                 /admin/estimate-steps
Menu                            /admin/menus
Queries ▾
  Contact Query                 /admin/contact-messages
  Callback Query                /admin/callback-requests
  Estimate Project Query        /admin/estimate-projects
Role ▾
  List                          /admin/roles
  Create                        /admin/roles/create
Users ▾
  List                          /admin/user
  Create                        /admin/user/create
Profile                         /admin/profile   (user dropdown)
Notifications                   /admin/notifications
```

Sidebar badges: none rendered, even when unread inquiries exist (the dashboard is the only place counts appear).

---

## 4. Repeated UI patterns

### 4.1 List pages
Every module list is identical:

- One `card` → `card-header` with the page title and a primary **Create** button (label varies: `Create`, `Add Technology`, `Add Location`, `Add Step`, `Add Menu`).
- DataTable: no server-side filters, no date filters, no bulk actions, no column sorting UI toggles beyond DataTables defaults. A single free-text search box (DataTables default) filters client-side.
- Pagination: 25 rows per page, DataTables "Showing 1 to 25 of 52 entries".
- Row actions are inline icon buttons: **edit** (`btn-secondary`, `fa-edit`) and **delete** (`POST {resource}/{id}` with `_method=DELETE`, `onsubmit="return confirm('Are you sure you want to delete this …?')"`).
- Search engines/SEO fields do not appear in list tables.

### 4.2 Status controls
Two different patterns exist:

1. **Content modules** — a Bootstrap switch in the Status column:
   `<input type="checkbox" class="form-check-input status-toggle" role="switch" data-id="{id}">` → AJAX toggle, green = active.
2. **Query modules** — a **button** whose label is the status:
   `<button class="btn btn-sm status-toggle-btn bg-label-warning" data-id="{id}">New</button>`
   Statuses observed: `New` (yellow `bg-label-warning`) → `Contacted` (success/green). The estimate list also shows a green `Contacted` button for already-contacted rows.

### 4.3 Forms
- Vertical layout, `form-label` + `form-control`, required fields marked with `*` and HTML `required`.
- Two-column rows for short fields (title + slug, name + email).
- **Slug** inputs have no `name` attribute until JS fills it (auto-generated from the title); treat slug as auto-derived but editable.
- Rich text: `<textarea class="form-control js-rich-editor">` / `.js-editor`.
- Media: file inputs are visually hidden (`.d-none`) and driven by a preview tile with "Remove" and "Click the preview to upload or replace" hint.
- Repeatable blocks (banners, items, options, typed words) have `Add …` / `Remove` buttons; each block is numbered (`1 Item`, `2 Items`).
- Submit bar at the bottom of the form: **Save/Create** (primary) and **Cancel** (secondary, returns to the list).
- Error display: standard Laravel `is-invalid` + `.invalid-feedback` under fields; success/error flash alerts were **not** exercised (would require a write) — assume a dismissible `.alert`.

### 4.4 Section builder (the core of the CMS)
Content types and pages store an arbitrary JSON blob under `sections[...]`. Each section has an enable switch and its own fields; empty/inactive sections are not rendered on the website.

Conventions:
- `sections[{key}][status]` — hidden `0` + checkbox `1` (settings/global) or `sections[{key}][__active]` (pages).
- `sections[{key}][eyebrow]`, `[title]`, `[description]` — standard heading trio.
- `sections[{key}][items][n][…]` — repeatable item arrays.
- `sections[{key}][{relation}_ids][]` — checkboxes selecting existing records (portfolio, testimonials, technologies, blogs, services, solutions, locations).
- `sections[{key}][typed_words][n][word]` — typewriter effect words.
- `sections[{key}][show_on][]` — page visibility checkboxes (global sections only).

---

## 5. Appearance / Website Content

`Appearance` opens `/admin/pages/home/seo`. Everything under **Website Content** is one settings surface with three tab groups in the left panel:

| Group | Tabs (16 general + 4 global + 8 pages) |
|---|---|
| **General Settings** (16) | General, Contact Info, Social Links, SEO, Header – Top Bar, Header Button, Services Menu CTA, Solutions Menu CTA, Footer – Expertise, Footer – Solution, Footer – Experience, Footer – Clutch, Footer – Awards, Footer – Bottom Bar, Cookie Banner, Queries Form Options |
| **Global Sections** (4) | Connect With Us, Schedule Meeting, Engagement Models, Locations |
| **Pages** | Home (14 sections), About (13), Process (10), Client Review (7), Technology (7), Portfolio (9), Blog (6), Contact (6) |

Routes: `/admin/pages/settings/{key}`, `/admin/pages/global/{key}`, `/admin/pages/{page}`, `/admin/pages/{page}/seo`.

> **Important implementation detail:** every tab serves the **same** form (all sections at once) and only switches the visible panel. `current_section` (hidden) tells the server which tab was submitted, and the payload contains *all* sections. A SPA rebuild should instead submit one section per request.

### 5.1 General Settings — full field schema

Form: `POST /admin/pages/settings`, `multipart/form-data`, plus hidden `current_section`.

**general**
| Field | Type | Notes |
|---|---|---|
| `sections[general][logo]` | file | light logo |
| `sections[general][logo_dark]` | file | dark logo |
| `sections[general][favicon]` | file | |
| `sections[general][site_name]` | text | |
| `sections[general][tagline]` | text | |

**contact**
| Field | Type |
|---|---|
| `sections[contact][email]` | text |
| `sections[contact][phone]` | text |
| `sections[contact][whatsapp]` | text |
| `sections[contact][address]` | textarea |

**social** — all `text`: `facebook`, `instagram`, `linkedin`, `twitter`, `behance`, `youtube`.

**seo** (the canonical SEO block reused everywhere)
| Field | Type |
|---|---|
| `meta_title` | text |
| `meta_description` | textarea |
| `meta_keywords` | text |
| `canonical_url` | text |
| `robots` | text (free text here; module forms use a select — see 6.1) |
| `og_title` | text |
| `og_description` | textarea |
| `og_type` | text |
| `og_url` | text |
| `og_image` | file |
| `twitter_card` | text |
| `twitter_title` | text |
| `twitter_description` | textarea |
| `twitter_image` | file |
| `schema_type` | text |
| `schema_data` | textarea (JSON-LD) |

**header_top_bar**
| Field | Type | Default |
|---|---|---|
| `consultant_image` | file | |
| `rating` | radio 5…1 | 5 |
| `rating_text` | text | "Excellent 5 out of 5" |
| `email_text` | text | "Email us on" |
| `phone_text` | text | "or Speak to our expert" |
| `callback_text` | text | "Request A Callback" |

**header_button** — `text` (label), `link` (URL).
**header_services_cta / header_solutions_cta** — `title`, `phone`, `phone_link`, `button_text`.
**footer_expertise** — `title`, `service_ids[]` (checkbox list of services).
**footer_solutions** — `title`, `solution_ids[]` (checkbox list of solutions).
**footer_experience** — `title`, `years`, `button_text`, `button_link`.
**footer_clutch** — `text`.
**footer_awards** — `disclaimer` (textarea), repeatable `items[n][image]`, `[alt]`, `[link]`, plus `button_text`, `button_link`.
**footer_bottom** — `copyright`, `contact_text`, `contact_link`, `privacy_text`, `privacy_link`, `registration_text`.
**cookie** — `title`, `text` (textarea), `button_text`.
**form_options** — `budgets` (textarea, one per line), `regions` (textarea), `hear_about` (textarea) — feeds the query form dropdowns site-wide.

### 5.2 Global Sections — full field schema

Form: `POST /admin/pages/global`, `multipart/form-data`, `current_section`.
Every global section also has `show_on[]` (page visibility) with these values/labels:

`home`, `about`, `process`, `client_review`, `technology`, `portfolio`, `blog`, `contact`, `service` ("Service pages"), `service_category` ("Service category pages"), `solution` ("Solution pages") — 11 checkboxes.

**connect** — `section_title`, `title`, `description` (textarea); repeatable `items[n][logo]`, `rating` (radio: empty/5/4/3/2/1), `review_count`; `show_on[]`.
**schedule_meeting** — `image`, `section_title`, `title`, `description`, `button_1_text`, `button_2_text`, `alt`, `show_on[]`.
**engagement_models** — `image`, `section_title`, `title`, `description`, `button_text`, `alt`, repeatable `items[n][icon]`, `[title]`, `show_on[]`.
**locations** — `section_title`, `title`, `subtitle`, `location_ids[]` (checkbox list of locations), `show_on[]`.

### 5.3 Page sections

`/admin/pages/{page}` (sections) and `/admin/pages/{page}/seo` (page SEO). Form action `POST /admin/pages/{page}`. Section toggle is `[__active]`.

| Page | Sections (in order) |
|---|---|
| **home** | seo, hero, banner, about, statistics, offerings, industries, value, callout, process, testimonials, portfolio, technologies, blogs |
| **about** | seo, hero, featured_projects, team_intro, statistics, leadership, mission_vision, values, history, callout, testimonials, portfolio, technologies |
| **process** | seo, hero, banner, how_it_works, process_steps, callout, testimonials, portfolio, technologies, blogs |
| **client_review** | seo, hero, banner, clutch, testimonials, technologies, blogs |
| **technology** | seo, hero, technologies, callout, testimonials, featured_in, blogs |
| **portfolio** | seo, hero, banner, portfolio, callout, testimonials, our_work, technologies, blogs |
| **blog** | seo, hero, blogs, blog_categories, latest_tweets, client_reviews |
| **contact** | seo, hero, schedule, contact_information, social_links, map |

**Home page field schema (111 inputs):**

```text
hero         image(file), title, subtitle, button_text_1, button_text_2
banner       items[n][image], items[n][alt]
about        image(file), small_title, title, description, button_text
statistics   items[n][icon](file), items[n][number], items[n][title]
offerings    small_title, title, description,
             items[n][icon](file), items[n][image](file), items[n][alt],
             items[n][tab_title], items[n][title], items[n][subtitle],
             items[n][description], items[n][button_text], items[n][button_link]
industries   small_title, title, description,
             items[n][icon](file), items[n][title], items[n][description]
value        small_title, title, description,
             items[n][icon](file), items[n][title], items[n][description]
callout      text_before, typed_words[n][word], text_after, button_text, button_url
process      small_title, title, description,
             items[n][icon](file), items[n][number], items[n][title], items[n][description]
testimonials small_title, title, description, testimonial_ids[]
portfolio    small_title, title, description, portfolio_ids[]
technologies small_title, title, description, technology_ids[]
blogs        small_title, title, description, blog_ids[]
seo          <canonical SEO block + og_image/twitter_image files>
```

Other pages follow the same item shape (`small_title/title/description` + `items[n]`) with page-specific relations; the section keys above are enough to design the accordion UI. Each page also exposes a `Use section` toggle and an "Unsaved changes" indicator in the header (`Manage your website sections`).

---

## 6. Content modules

### 6.1 Shared SEO block (flat fields on module forms)

Portfolios, blogs and blog/solution categories use flat SEO fields instead of `sections[seo]`:

```text
meta_title:text, meta_description:text, meta_keywords:text,
canonical_url:url,
robots:select [Default (site setting) | index, follow (default) | noindex, follow | index, nofollow | noindex, nofollow],
og_image:text, og_title:text, og_description:text
```

Reviews and testimonials use only `meta_title`, `meta_description`, `meta_keywords`.

### 6.2 Services

- **List** `/admin/services` → `Create` → `/admin/services/create`
- Columns: `Order | Category | Title | Status | Action`
- Create/Edit form: `POST /admin/services` (multipart), edit at `/admin/services/{id}/edit`, action `POST /admin/services/{id}` + `_method=PUT`
- Base fields:

| Field | Type | Rules / notes |
|---|---|---|
| `service_category_id` | select | "Select Category" + categories |
| `sort_order` | number | default `0`; value shown in the list's "Order" column |
| `title` | text | required |
| `slug` | text | auto from title |
| `icon` | file | |
| `image` | file | |
| `sections[...]` | — | 148 inputs total on the create form |

- Sections on a service (16): `seo, hero, banners, introduction, services, offerings, features, benefits, process, frameworks, callout, why_choose_us, portfolio, testimonials, technologies, faq`

| Section | Fields |
|---|---|
| seo | canonical SEO block (17) |
| hero | eyebrow, title, description (rich), button_text_1, button_url_1, button_text_2, button_url_2, image |
| banners | items[n][image, alt]; "Add Banner" |
| introduction | eyebrow, title, description (rich), button_text, button_url, image |
| services | eyebrow, title, description; items[n][icon, title, description, button_text, button_url] |
| offerings | eyebrow, title, description; items[n][image, alt, title, description, points (textarea), button_text, button_url] |
| features | eyebrow, title, description; items[n][icon, title, description, button_text, button_url, points] |
| benefits | eyebrow, title, description, subheading; items[n][icon, title, description]; button_text, button_url |
| process | eyebrow, title, description; items[n][icon, title, points] |
| frameworks | eyebrow, title, description; items[n][image, alt, title, description, button_text, button_url] |
| callout | text_before, typed_words[n][word], text_after, button_text, button_url |
| why_choose_us | eyebrow, title, description; items[n][icon, title, description] |
| portfolio | eyebrow, title, description, portfolio_ids[] |
| testimonials | eyebrow, title, description, testimonial_ids[] |
| technologies | eyebrow, title, description, technology_ids[] |
| faq | eyebrow, title, description; items[n][question, answer] |

### 6.3 Service Categories

- List `/admin/service-categories` → columns `Order | Title | Slug | Status | Action`
- Create `/admin/service-categories/create` (`POST /admin/service-categories`), edit `/admin/service-categories/{id}/edit`
- Fields: `name` (required, "Enter category title"), `slug` (placeholder `category-slug`), `sort_order` (number, **default 20**), `short_description` (rich), `description` (rich), `icon` (file), `image` (file), plus the full section set (same partial as services, incl. `sections[seo]`).

### 6.4 Solutions

- List `/admin/solutions` → `Create`
- Columns: `Order | Icon | Category | Title | Slug | Status | Action`
- Create `/admin/solutions/create`, edit `/admin/solutions/{id}/edit`
- Fields: `solution_category_id` (select), `sort_order` (number, 0), `title`, `slug`, `icon` (file), `image` (file), `description` (textarea) + 113 section inputs.
- Sections (13): `seo, hero, banners, introduction, features, callout, benefits, technologies, beneficiaries, faq, solution_cta, other_solutions, why_choose_us`

| Section | Fields |
|---|---|
| hero | title, description, button_text, button_url, image |
| banners | items[n][image, alt] |
| introduction | title, description, button_text, button_url, image |
| features | eyebrow, title, description, `show_all_text`, items[n][icon, title, description, …] |
| callout | text_before, typed_words[n][word], text_after, button_text, button_url |
| benefits (Benefits/Advantages) | eyebrow, title, description, items[n][icon, title, description] |
| technologies | eyebrow, title, description, technology_ids[] |
| beneficiaries ("Ideal Businesses") | eyebrow, title, description, items[n][icon, …] |
| faq | eyebrow, title, items[n][question, answer] |
| solution_cta | eyebrow, title, subtitle, button_text, button_url, icon |
| other_solutions | eyebrow, title, solution_ids[] |
| why_choose_us | title, description, image, items[n][icon, alt, url, …] |

### 6.5 Solution Categories

- List `/admin/solution-categories` → columns `Order | Icon | Title | Slug | Status | Action`
- Create `/admin/solution-categories/create`
- Fields: `meta_title`, `meta_description`, `meta_keywords`, `title`, `slug`, `icon` (file), `sort_order` (number, 0) + sections.

### 6.6 Portfolio

- List `/admin/portfolios` → columns `Sr No | Image | Service | Title | Slug | Status | Action`
- Create `/admin/portfolios/create` (multipart), edit `/admin/portfolios/{id}/edit`
- Fields:

| Field | Type | Notes |
|---|---|---|
| `service_id` | select | **required**; "Select Service" + services |
| `tagline` | text | |
| `title` | text | |
| `slug` | text | auto |
| `project_url` | url | |
| `image` | file | |
| `image_alt` | text | |
| `short_description` | textarea | |
| `description` | textarea (rich) | |
| SEO | flat block | see 6.1 (8 fields) |

No sections; portfolio detail content is the description plus gallery image.

### 6.7 Technology

- List `/admin/technologies` → "Add Technology"; columns `Sr No | Title | Images | Status | Action`
- Create `/admin/technologies/create`
- Fields: `title` (required), `status` (checkbox, default on), `images[]` (**multiple file upload**) — "Technology Information" + "Technology Images" cards.

### 6.8 Blogs

- List `/admin/blogs` → columns `Sr No | Image | Title | Category | Author | Published | Status | Action`
- Create `/admin/blogs/create` (multipart), edit `/admin/blogs/{id}/edit`
- Fields:

| Field | Type |
|---|---|
| `blog_category_id` | select (categories) |
| `title` | text |
| `slug` | text (auto) |
| `author` | text |
| `author_image` | file |
| `image` | file |
| `image_alt` | text |
| `short_description` | textarea |
| `published_at` | `datetime-local` |
| `description` | textarea (rich) |
| SEO | flat block (8 fields) |

- List "Published" column renders `d M Y` (e.g., `20 Jul 2018`).

### 6.9 Blog Categories

- List `/admin/blog-categories` → columns `Sr No | Title | Slug | Action` (no status)
- Create `/admin/blog-categories/create`
- Fields: `meta_title`, `meta_description`, `meta_keywords`, `title`, `slug`.

### 6.10 Reviews / Testimonials

- List `/admin/testimonials` → columns `Sr No | Image | Name | Designation | Company | Rating | Status | Action`
- Create `/admin/testimonials/create`
- Fields: `meta_title`, `meta_description`, `meta_keywords`, `name`*, `designation`, `company`, `image` (file), `rating`* select `5|4|3|2|1` (default 5), `review`* textarea.
- Rating is rendered as `x / 5` in lists and on the dashboard as average.

### 6.11 Locations

- List `/admin/locations` → "Add Location"; columns `Sr No | Image | Country | Address | Contact No | Email | Status | Action`
- Create `/admin/locations/create`
- Fields: `country`*, `contact_no`, `email`, `image` (file), `address`* (textarea), `status` (checkbox, default on).

---

## 7. Estimate Wizard (`/admin/estimate-steps`)

A branching questionnaire used by the public "Get an estimate" flow. 52 steps, stored relationally.

- List columns: `Sr No | Key | Question | Type | Options | Default next | Status | Action` (25/page)
- Create: `/admin/estimate-steps/create` · Edit: `/admin/estimate-steps/{id}/edit` (`POST /admin/estimate-steps/{id}`)

**Step fields**

| Field | Type | Notes |
|---|---|---|
| `title` | text | required — the question shown to the user |
| `key` | text | required — unique machine key (`project_type`, `app_login`, …) |
| `description` | textarea | helper text |
| `type` | select | `Single choice` (`single`) \| `Multiple choice` (`multiple`) |
| `next_step_id` | select | "Final form (flow ends here)" + every step as `Label (key)` |
| `sort_order` | number | 0 |
| `is_required` | hidden + checkbox | default on |
| `is_start` | hidden + checkbox | marks the first step (`project_type`) |
| `status` | hidden + checkbox | default on |

**Option fields** (repeatable, "Add option" / "Remove", `options[n][…]`)

| Field | Type | Notes |
|---|---|---|
| `id` | hidden | option id (edit only) |
| `value` | hidden | slug, e.g. `mobile-app`, `web`, `game` |
| `label` | text | required — button label |
| `price` | number | step `0.01`, default `0.00` |
| `next` | select | "Default (the step's next step)", "Go to final form", "Go to: {step label} ({key})" |
| `sort_order` | number | |
| `icon` | file | |
| `status` | hidden + checkbox | |

**Flow (all 52 steps, in table order)**

```text
 1 project_type            What kind of project are you developing?            single   3 opts  → final
 2 app_start               How would you like to start?                       single   2       → final
 3 app_platform            What platform do you want the app on?              single   4       → final
 4 app_device_ios          What device will the app be used on?               single   4
 5 app_device_android      What device will the app be used on?               single   4
 6 app_device_any          What device will the app be used on?               single   4
 7 app_category            What will the app be used for?                     single  10
 8 app_login               What type of login is needed?                      single   4
 9 app_admin               Do you require an admin panel?                     single   2
10 app_design              Do you need us to design the app?                  single   2
11 app_gps                 Is GPS integration required?                       single   2
12 app_chat                Does the app need a chat feature?                  single   2
13 app_earn                How will you earn from the app?                    multiple 6
14 app_payment             Do you need payment integration?                   single   2       → final
15 app_old_platform        For which platform is your app developed?          single   3       → final
16 app_old_device_ios      What device will the app be used on?               single   4
17 app_old_device_android  What device will the app be used on?               single   4
18 app_old_device_any      What device will the app be used on?               single   4
19 app_old_technology      What technology was used?                          multiple11
20 app_old_category        What is the app used for?                          single  10       → final
21 web_start               How would you like to start?                       single   2       → final
22 web_old_type            What type of web solution do you need?             single   2       → final
23 web_old_static_tech     Original website technology                        single   6
24 web_old_dynamic_category Web application category                          single   8
25 web_old_dynamic_tech    Technology used to develop it                      single   8
26 web_old_design          Do you need design changes?                        single   2       → final
27 web_new_type            What type of web solution do you need?             single   3       → final
28 web_new_static_tech     Which technology would you like to use?            single   6
29 web_new_static_ui       Design options                                     single   2       → final
30 web_new_dynamic_category Web application category                          single   4
31 web_new_dynamic_tech    Which technology would you like to use?            single   9
32 web_new_dynamic_ui      Design options                                     single   2
33 web_mobile_too          Do you need a mobile app too?                      single   2       → final
34 web_mobile_platform     What platform do you want the app on?              single   4       → final
35 web_mobile_device_ios   What device will the app be used on?               single   4
36 web_mobile_device_android What device will the app be used on?             single   4
37 web_mobile_device_any   What device will the app be used on?               single   4
38 web_mobile_category     What will the app be used for?                     single  10
39 web_mobile_login        What type of login is needed?                      single   4
40 web_mobile_design       Do you need us to design the app?                  single   2
41 web_mobile_gps          Is GPS integration required?                       single   2
42 web_mobile_chat         Does the app need a chat feature?                  single   2
43 web_payment             Payment integration required?                      single   2
44 web_advertise           Advertise?                                         single   2       → final
45 game_platform           What platform would you like your game on?         multiple 6
46 game_type               What type of game will it be?                      single   2
47 game_mode               Single or Multiplayer?                             single   2
48 game_category           Which category best defines your game?             single  10
49 game_graphics           Will you need the graphics designed?               single   2
50 game_login              How will the user log in to the game?              single   4
51 game_manage             How will you manage the game?                      single   3
52 game_earn               How will you earn from the game?                   multiple 4       → final
```

Entry points: `project_type` options are `Mobile App → 2`, `Web → 21`, `Game → 45` (values `mobile-app`, `web`, `game`). Pricing is per-option (`price`, decimal) so the estimate is the sum along the chosen path; the flow supports per-option jumps, so a graph renderer (not a linear stepper) is the correct UI model.

---

## 8. Queries (inbox modules)

All three are read-only detail pages; status is changed from the list.

### 8.1 Contact Queries — `/admin/contact-messages`
Columns: `Sr No | Name | Email | Contact No | Company | Service | Received At | Status | Action`
Detail `/admin/contact-messages/{id}` → cards:
- **Basic Information:** Full Name, Email Address, Contact Number, Company, Budget, Service, Region, How did you hear about us?
- **Message:** free text
- **Attachment:** "Message Attachment" + "View Attachment" button
- **Received:** `21 Oct 2026, 02:13 AM`
- Actions: `Back`, `View Attachment`. No reply composer, no notes, no assignment.

### 8.2 Callback Queries — `/admin/callback-requests`
Columns: `Sr No | Full Name | Email | Contact No | Service | Region | Recieved At | Status | Action` (typo "Recieved" is in the UI).

### 8.3 Estimate Project Queries — `/admin/estimate-projects`
Columns: `Sr No | Name | Email | Contact | Company Name | Region | Received At | Status | Action`
Detail `/admin/estimate-projects/{id}`: Basic Information (Full Name, Company, Email Address, Contact Number, Region, How did you hear about us?), **Project Description** text, **Attachment** ("Attached project file" + View Attachment), Received timestamp.

> **Gap:** the project-detail page does **not** show the Estimate Wizard answers or the computed price — only the free-text description. If the rebuild needs job summaries, that data must be surfaced from the wizard submissions (currently not exposed anywhere in the admin).

Shared query behaviours: status button toggles `New` ↔ `Contacted`; delete with browser `confirm()`; no bulk select; no CSV export visible.

---

## 9. Roles & Permissions

- List `/admin/roles` → columns `Sr No | Name | Permissions | Action` (permissions rendered as a space-separated slug string, truncated).
- Create `/admin/roles/create`; **edit is `/admin/roles/edit/{id}`** (different shape from other modules).
- Form: `Role Name` (text), master checkbox **All** (`checkPermissionAll`), then 16 module groups with a group checkbox (`group-1` … `group-16`) and `permissions[]` checkboxes.
- The UI exposes raw slugs as labels (`appearance.view`, `blog.edit`, …).

**Complete permission catalog (68 permissions, 16 groups, in DOM order):**

| # | Module | Permissions |
|---|---|---|
| 1 | appearance | `appearance.view`, `appearance.edit` |
| 2 | blog | `blog.view`, `blog.create`, `blog.edit`, `blog.delete` |
| 3 | blog_category | `blog_category.view`, `blog_category.create`, `blog_category.edit`, `blog_category.delete` |
| 4 | callback_request | `callback_request.view`, `callback_request.delete` |
| 5 | contact_message | `contact_message.view`, `contact_message.delete` |
| 6 | dashboard | `dashboard.view` |
| 7 | estimate_project | `estimate_project.view`, `estimate_project.delete` |
| 8 | estimate_step | `estimate_step.view`, `estimate_step.create`, `estimate_step.edit`, `estimate_step.delete` |
| 9 | portfolio | `portfolio.view`, `portfolio.create`, `portfolio.edit`, `portfolio.delete` |
| 10 | role | `role.view`, `role.create`, `role.edit`, `role.delete` |
| 11 | service | `service.view`, `service.create`, `service.edit`, `service.delete` |
| 12 | service_category | `service_category.view`, `service_category.create`, `service_category.edit`, `service_category.delete` |
| 13 | solution | `solution.view`, `solution.create`, `solution.edit`, `solution.delete` |
| 14 | solution_category | `solution_category.view`, `solution_category.create`, `solution_category.edit`, `solution_category.delete` |
| 15 | testimonial | `testimonial.view`, `testimonial.create`, `testimonial.edit`, `testimonial.delete` |
| 16 | user | `user.view`, `user.create`, `user.edit`, `user.delete` |

Seeded roles: `Admin` (all 68) and a second role (partial). `Admin` is not editable from the UI in practice (role edit for id 1 is reachable but is the system role).

**Missing from the catalog** although the sidebar exposes them: `location.*`, `technology.*`, `menu.*`, and the whole `pages/settings` surface beyond `appearance.view/edit`. Either these screens are guarded by `appearance.*` or they are ungated — a security/consistency item to resolve in the rebuild.

---

## 10. Users

- List `/admin/user` → columns `Sr No | Name | Email | Role | Action`
- Create `/admin/user/create` (`POST /admin/user`) · Edit `/admin/user/edit/{id}`, submit `POST /admin/user/update/{id}`
- Fields:

| Field | Type | Notes |
|---|---|---|
| `name` | text | |
| `email` | email | login identifier |
| `password` | password | blank on edit = unchanged |
| `password_confirmation` | password | |
| `role[]` | multi-select | **only `Sub Admin` is offered** — the Admin role is not assignable |
| `mobile` | text | |
| `status` | select | `-- Select Status --` (0) / `Active` (1) / `Inactive` (0) |
| `image` | file | avatar |

Seeded users: `Admin` (`kdadmin@gmail.com`, role Admin) and one Sub Admin.

---

## 11. Profile — `/admin/profile`

Two cards, `multipart/form-data`:

**Profile Details** — `image` (file, avatar preview), `name`, `email`, `mobile`.
**Change Password** — `current_password`, `password`, `password_confirmation`.

Buttons: `Save` (primary), `Reset` (secondary).

---

## 12. Notifications — `/admin/notifications`

- Header: `All Notifications`; action `Delete all` (destructive, no per-row delete).
- Rows are list items: `<actor> <event>` + `Read`/`Unread` + relative time (`2 weeks ago`, `3 weeks ago`), e.g.
  - "keydevs requested a project estimate"
  - "keydevs sent a contact message"
  - "keydevs requested a callback"
- Clicking a row hits `/admin/notifications/{uuid}/read` (marks read then redirects to the related record).
- Top-bar dropdown mirrors the latest 6 with "View all notifications".
- Notifications are generated for contact message, callback request and estimate request events; they are **not** filtered per role.

---

## 13. Menu builder — `/admin/menus`

- List columns: `# | Menu Title | Location | Status | Action`; header button `Add Menu`.
- Create is a **modal** (`#addMenuModal`): fields `title`* (text), `location`* (select `Header` | `Footer`), `status` (checkbox) → `POST /admin/menus`.
- **Manage Items** → `/admin/menus/{id}/edit` — a two-pane builder:
  - Left: menu items tree with per-item `Save` forms and a "Create Menu Item" card.
  - Right: tree preview of the menu with `Cancel` / `Save Menu`.
  - Menu settings form: `location` (hidden), `title`*, `status`.
- **Menu item fields** (`POST /admin/menus/{id}/items`, update `POST /admin/menus/{id}/items/{itemId}`):

| Field | Type | Options / notes |
|---|---|---|
| `title` | text | required |
| `type` | select | `Custom URL` (`url`), `Page` (`page`), `Service / Solution` (`module`) |
| `url` | text | default `/` |
| `page_key` | select | `About, Blog, Client Review, Contact, Home, Portfolio, Process, Technology` |
| `module_link` | select | values like `service_category:1`, `service:2`, `solution:3`, `solution_category:4` (grouped list of all services/solutions/categories) |
| `parent_id` | select | "Main Menu Item"/"Select Parent" + other items (one level of nesting in practice) |
| `target` | select | `Same Tab` (`_self`), `New Tab` (`_blank`) |
| `sort_order` | number | 0 |
| `icon` | text | (icon class/name; present on edit forms) |
| `is_fluid` | hidden + checkbox | "full-width dropdown" flag on edit forms |
| `status` | hidden + checkbox | |

Observed header tree: Home, Who We are → (Sean Whitehead), Company, Services → (Sean Whitehead), Solutions, Portfolio, Blog, Contact — i.e. nesting depth 2 with a mega-menu CTA per services/solutions group.

---

## 14. Dashboard — `/admin/dashboard`

Snapshot at capture (12 Nov 2026):

- **Welcome block:** "Welcome back, Admin 👋" + `Thursday, 12 November 2026 · 8 new inquiries waiting for a reply.`
- **KPI cards:** Total Inquiries `9` (0 this month) · New/Unanswered `8` ("Need your attention") · Response Rate `11%` ("Marked as contacted") · Average Rating `2 / 5` ("1 active reviews").
- **Charts (ApexCharts):** "Inquiries Trend — Contact, callback and estimate requests, last 6 months"; "Inquiry Status — New vs contacted".
- **Query summary cards:** Contact Messages `4` (0 this month, 4 new, 0 contacted) · Callback Requests `2` (2 new, 0 contacted) · Estimate Requests `3` (2 new, 1 contacted), each with "View all".
- **Content counters:** `1 Blog Categories`, `2 Menus`, `20/20 Page Sections`, `2 Admin Users`.

Layout: 4 KPI columns → 2 chart columns → 3 query cards → 4 counter cards. No date-range picker, no "recent activity" feed.

---

## 15. Route & endpoint table

| Resource | List | Create | Edit (GET) | Store | Update | Delete |
|---|---|---|---|---|---|---|
| Services | `/admin/services` | `/admin/services/create` | `/admin/services/{id}/edit` | `POST /admin/services` | `POST /admin/services/{id}` + `_method=PUT` | `POST /admin/services/{id}` + `_method=DELETE` |
| Service categories | `/admin/service-categories` | `…/create` | `…/{id}/edit` | `POST /admin/service-categories` | `POST …/{id}` | `POST …/{id}` |
| Solutions | `/admin/solutions` | `…/create` | `…/{id}/edit` | `POST /admin/solutions` | `POST …/{id}` | `POST …/{id}` |
| Solution categories | `/admin/solution-categories` | `…/create` | `…/{id}/edit` | `POST /admin/solution-categories` | `POST …/{id}` | `POST …/{id}` |
| Portfolios | `/admin/portfolios` | `…/create` | `…/{id}/edit` | `POST /admin/portfolios` | `POST …/{id}` | `POST …/{id}` |
| Technologies | `/admin/technologies` | `…/create` | `…/{id}/edit` | `POST /admin/technologies` | `POST …/{id}` | `POST …/{id}` |
| Blogs | `/admin/blogs` | `…/create` | `…/{id}/edit` | `POST /admin/blogs` | `POST …/{id}` | `POST …/{id}` |
| Blog categories | `/admin/blog-categories` | `…/create` | `…/{id}/edit` | `POST /admin/blog-categories` | `POST …/{id}` | `POST …/{id}` |
| Testimonials | `/admin/testimonials` | `…/create` | `…/{id}/edit` | `POST /admin/testimonials` | `POST …/{id}` | `POST …/{id}` |
| Locations | `/admin/locations` | `…/create` | `…/{id}/edit` | `POST /admin/locations` | `POST …/{id}` | `POST …/{id}` |
| Estimate steps | `/admin/estimate-steps` | `…/create` | `…/{id}/edit` | `POST /admin/estimate-steps` | `POST …/{id}` | `POST …/{id}` |
| Roles | `/admin/roles` | `/admin/roles/create` | **`/admin/roles/edit/{id}`** | `POST /admin/roles` | `POST /admin/roles/edit/{id}`* | `POST /admin/roles/delete/{id}`* |
| Users | `/admin/user` | `/admin/user/create` | **`/admin/user/edit/{id}`** | `POST /admin/user` | **`POST /admin/user/update/{id}`** | `POST …/{id}`* |
| Menus | `/admin/menus` | modal → `POST /admin/menus` | `/admin/menus/{id}/edit` | (same) | `POST /admin/menus/{id}` | `POST …/{id}`* |
| Menu items | — | inline card | per-item card | `POST /admin/menus/{id}/items` | `POST /admin/menus/{id}/items/{itemId}` | (not observed) |
| Queries | `/admin/contact-messages`, `/admin/callback-requests`, `/admin/estimate-projects` | — | `/admin/{module}/{id}` (show) | — | status toggle (AJAX) | `POST /admin/{module}/{id}` |
| Notifications | `/admin/notifications` | — | `/admin/notifications/{uuid}/read` | — | — | `Delete all` form |
| Pages | `/admin/pages/{page}` | — | — | `POST /admin/pages/{page}` | (same) | — |
| Settings | `/admin/pages/settings/{key}` | — | — | `POST /admin/pages/settings` | (same) | — |
| Global sections | `/admin/pages/global/{key}` | — | — | `POST /admin/pages/global` | (same) | — |
| Profile | `/admin/profile` | — | — | `POST /admin/profile`* | | |
| Auth | `/` | — | `/forgot-password`, `/reset-password/{token}` | `POST /loginAuth`, `POST /forgot-password` | | `POST /logout` |

\* Inferred from observed patterns; the exact verb/segment was not exercised (destructive or write path).

Status toggle endpoints were not inspected in the network panel (would require a write), but the markup (`status-toggle` with `data-id`, `status-toggle-btn` with `data-id`) confirms an AJAX PATCH-style call per row.

---

## 16. Inferred data model

```text
users ──< role_user >── roles ──< permission_role >── permissions
users(id, name, email, password, mobile, status, image, role_id?)

service_categories 1──< services 1──< portfolios
solution_categories 1──< solutions
blog_categories 1──< blogs
technologies(id, title, status) 1──< technology_images
testimonials(id, name, designation, company, rating, review, image, status)
locations(id, country, address, contact_no, email, image, status)
menus 1──< menu_items (self-referencing parent_id; location header|footer)
estimate_steps 1──< estimate_options(next_step_id → estimate_steps)
contact_messages / callback_requests / estimate_projects (inquiry tables)
notifications(id uuid, actor, type, notifiable, read_at)
pages / settings  (key → JSON `sections` blob)
```

Every content row additionally carries a JSON `sections` column (page/section builder payload) plus flat `meta_*`/`og_*` columns on portfolios, blogs and categories. Sort order is a plain integer edited by hand; no drag-and-drop sequencing exists anywhere.

---

## 17. Observed gaps / issues to fix in the rebuild

1. **Page title** is `| Keydevs` everywhere (empty prefix).
2. **Settings tabs share one form** — 115 inputs submitted for one tab; `current_section` decides what is saved. Easy to lose edits and hard to validate.
3. **Role labels are raw slugs** (`blog_category.delete`) — needs a human-readable permission matrix.
4. **Permission catalog is incomplete**: locations, technologies, menus and page settings have no permissions of their own.
5. **Admin role cannot be assigned** to users from the UI (`role[]` offers only Sub Admin).
6. **No estimate answers in the admin** — wizard submissions show only the free-text description.
7. **No inquiry workflow**: no assignment, notes, reply templates, or bulk actions; only New/Contacted.
8. **No filters** on query lists (no status/date/service filter) — DataTables search only.
9. **Status controls are inconsistent** (switch vs. button) and toggle without confirmation.
10. **Delete is a bare browser `confirm()`** and forms are inline inside table cells.
11. **No per-row delete for notifications**, only "Delete all".
12. **Typo in a column header**: `Recieved At` (callback list).
13. **No rich preview** of a page/section before saving ("Unsaved changes" indicator only, no draft/publish).
14. **No sorting/reordering UI** despite `sort_order` on nearly every table.
15. **Menu items cannot be deleted** from the builder UI (only saved).
16. **Slug fields lack `name` until JS runs** — clients with JS disabled cannot submit slugs.

---

## 18. Suggested contract for the new frontend

Rebuild as a typed SPA against a JSON API rather than Blade forms.

**Conventions**
- `GET /api/v1/{resource}?page&per_page&q&status&sort` → `{ data, meta: { page, per_page, total } }`
- `POST/PATCH/DELETE /api/v1/{resource}/{id}` with JSON; multipart uploads go through `POST /api/v1/uploads` returning `{ id, url, width, height, mime }` to be referenced by id.
- `PATCH /api/v1/{resource}/{id}/status` → `{ status: boolean }` for switches and `{ status: "new" | "contacted" }` for queries.
- Sections stored as `sections: { [key]: { active, ...fields, items?: [] } }` — same shape the backend already persists, so migration is mechanical.
- `GET /api/v1/pages/{key}` → page + its section schema; render the editor from a **schema descriptor** (`{ key, label, fields: [{ name, type, label, required, options, multiple }] }`) instead of hard-coding 16 forms.

**Component checklist derived from the panel**
- `ResourceTable` (search, 25/page default, status switch/button, edit/delete confirm, empty state)
- `ResourceForm` (two-column, slug auto-fill, rich text, image dropzone with preview, repeatable `ItemsEditor`, relation multi-select)
- `SectionAccordion` (enable switch, standard heading trio, items editor, relation pickers, `show_on` page matrix)
- `SeoFields` (canonical block + OG/Twitter preview card + robots select + JSON-LD textarea with validation)
- `MenuBuilder` (nested tree, type-dependent fields: URL / page / module, parent select, target, order)
- `WizardBuilder` (step graph: nodes = steps, edges = option.next; price per option; entry node via `is_start`)
- `InquiryInbox` (status chips, detail drawer with attachment, contact actions)
- `PermissionMatrix` (group → view/create/edit/delete grid with "All" toggles)
- `MediaPicker` (single/multiple, alt text, replace/remove)
- Shell: collapsible sidebar (12 nav items + 5 groups), notification bell with unread count, user menu, breadcrumb, theme toggle.

**Design tokens worth keeping** (Sneat defaults): Public Sans, `#696cff` primary, `#71dd37` success, `#ffab00` warning, `#ff3e1d` danger, `#03c3ec` info, cards with `0.375rem` radius and very light shadows, `bg-label-*` soft badges.

---

## 19. Screenshots

| File | Screen |
|---|---|
| [`screenshots/01-dashboard-desktop.png`](screenshots/01-dashboard-desktop.png) | Dashboard at 1440px — KPI cards, charts, query and content counters |
| [`screenshots/02-services-list.png`](screenshots/02-services-list.png) | Services list — DataTable with switch status and row actions |
| [`screenshots/03-service-create.png`](screenshots/03-service-create.png) | Service create — base fields + section builder |
| [`screenshots/04-estimate-wizard.png`](screenshots/04-estimate-wizard.png) | Estimate Wizard step list (52 steps) |

---

## 20. Inspection log

- Authenticated as `kdadmin@gmail.com` (Admin role) at 12 Nov 2026, 09:46–10:03 local.
- All pages above were opened or fetched with `GET`; **no create, update, delete, toggle, upload or send action was performed**, per instruction.
- Consequence: success/error flash messages, delete-confirmation dialogs beyond the inline `confirm()` text, the status-toggle request payloads, and the validator rules behind `required` could not be captured. Everything else is taken from rendered markup and field names.
