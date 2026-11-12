# KeyDevs site (Next.js)

Home page is a pixel-faithful port of the original template (`index.html`):
same CSS (Bootstrap 4.6.2 + the template's `style.css`), same images/SVG icons/fonts, same sections.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

## Layout
- `public/css/template.css` – the template's own stylesheet (loaded after Font Awesome + Bootstrap, as in the original)
- `public/assets/` – every image, icon and font extracted from the template
- `public/js/` – the template's original jQuery plugins/behaviour (mega menu, slick sliders, popups)
- `src/components/home/` – one component per home section (`Hero`, `About`, `Services`, …) + `SiteHeader` / `SiteFooter`
- `src/app/layout.tsx` – chrome + script loader; `src/app/page.tsx` – home composition

Next step: bind each section's text/images to the admin-panel data (`docs/admin-panel.md`).
