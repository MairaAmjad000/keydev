# KeyDevs Technologies, CMS-driven Next.js site

Pixel-matched rebuild of the reference page, with all content separated from the UI.

```
content/                 CMS data (JSON): site.json, forms.json, layout/*.json, home/*.json
src/lib/cms/index.ts     typed loader (getSiteSettings, getHomePage). Swap this for a headless CMS client.
src/types/content.ts     types mirroring the JSON (generated)
src/components/layout|home|ui   presentational server components, props only
src/components/icons     inline SVG registry (content refers to icons by key)
src/components/layout/PageTemplate.tsx   page composition (sync, testable)
src/app/layout.tsx       head metadata + CSS order: Font Awesome, Bootstrap, then src/styles/legacy.css
src/styles/legacy.css    the reference site CSS (must load after Bootstrap)
public/legacy/ref-*.js   the reference's inline scripts, verbatim, loaded by LegacyScripts in original order
tools/                   generator + DOM/pixel comparison harness (see docs/REBUILD_NOTES.md)
```

Components are stateless server components on purpose: jQuery/slick own the DOM after load and React must not re-render it.
The only client leaf is `InteractiveInput` (the reference's inline input handlers).

## Run
```
npm install      # refreshes package-lock.json (bootstrap@4.6.2 and fontawesome-free@5.15.4 were added)
npm run dev
npm run typecheck && npm run lint && npm run build
```

## Editing content
Edit the JSON in `content/`. Text, links, image paths, alt text and lists live there; markup lives in the components.
`tools/gen.py` regenerated them from the reference once; after that, edit the files directly.
See `docs/REBUILD_NOTES.md` for verification results, deliberate differences, missing images and links to verify.
