# KeyDevs Next.js Native UI Rebuild

This version rebuilds the supplied original HTML as separate React/TypeScript section components. Embedded images have been extracted into `public/assets`. The original source stylesheet is retained in `src/app/globals.css` to preserve exact legacy selectors, typography, spacing and responsive rules; each component also has its own CSS file for future scoped styling.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/app`: routes, root layout and global source stylesheet.
- `src/components/layout`: site header.
- `src/components/sections`: one TSX and CSS file per original HTML section.
- `public/assets`: extracted embedded image assets.

## Fidelity notes

The component markup and content are derived from the supplied `index.html`. CSS rules from the original site are intentionally kept together in `globals.css` because splitting the original cascade without browser regression testing could change specificity and ordering. The component-level CSS files are the place for future isolated refinements. Original inline JavaScript handlers are not emitted as JSX event handlers; interactive tabs, carousels, forms and menu behaviour should be wired with React components and tested against the source site before production.
