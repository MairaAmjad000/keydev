# Rebuild notes

## What was verified (and how)
Both pages were parsed by Chromium (JS disabled) and compared node by node (`tools/treediff.py`):

| Check | Result |
|---|---|
| Structure + text + attributes | 3,019 / 3,019 lines identical |
| Including layout-significant whitespace | 3,932 / 3,932 lines identical |
| Pixels (reference vs rebuilt, full page) | 0 differing pixels at 1440, 1024, 768 and 390 px; identical page heights |

Limits of the pixel check: it ran with the same libraries missing on **both** sides (Bootstrap 4.6.2, Font Awesome 5.15.4,
jQuery, slick, sweetalert2 and the Lazy plugin are CDN/JS and could not be fetched in the build sandbox), so it proves the
markup, whitespace, site CSS and asset wiring match, not that Bootstrap/JS-driven states match. A control that removes two
inline spaces is detected (2,727 pixels), so the check is sensitive.

## Deliberate differences from the reference DOM
* Junk attributes dropped: the `<` / `a` attributes created by the malformed `<a ... title="..."</a>` and the
  `='contactform'` attribute on `#schedule_a_call`.
* The 15 anchors that the HTML parser created from that malformed tag (`href="https://wa.me/..."`, `title="+92 339 5393387"`)
  **are kept** (as normal anchors). Several sit in flex rows / tab lists or wrap real content (e.g. "How we Build Your Product"),
  so removing them could change layout in the live site. They are candidates for removal once checked in the browser.
* `*.php` / mirror-artifact hrefs normalised (`docs/link-normalisation.txt`).
* Inline `onfocus` / `onblur` / `onkeydown` attributes on 13 inputs are reproduced by `InteractiveInput` (client leaf).
  `checkNumberOnly` is referenced by the reference but never defined there, so it stays a no-op.
* `href="javascript:;"`: React 19 blocks `javascript:` URLs, so such anchors are emitted through `link()` in
  `src/lib/markup.tsx`, which keeps the real attribute in the DOM. React logs a dev-only warning about the `HREF` prop.
* `<style>` / `<script>` elements are not in the component markup: their CSS is in `src/styles/legacy.css`, the scripts are
  loaded by `LegacyScripts` in the reference order.

## Missing assets (broken in the reference too)
Provide these files under `public/`:
`images/author/yasir.jpg`, `images/author/nick-konechny.webp`, `images/author/star-user.svg` (3 uses),
`images/brand/upwork-rating.webp`, `images/brand/pph.webp`, `images/footer/handshake.png`.

## Placeholder profile URLs: please verify
The mirror destroyed these slugs. Searching did not find the profiles, so these are guesses:
Clutch `clutch.co/profile/keydevs-technologies`, GoodFirms `goodfirms.co/company/keydevs-technologies`,
Behance `behance.net/keydevs`, Upwork `upwork.com/o/companies/~012085085920f5cdea/` (id from the original).
Freelancer and PeoplePerHour keep their original slugs.
