import type { AnchorHTMLAttributes, CSSProperties, ElementType } from 'react';

/**
 * `<center>` is still used by the site markup but has no intrinsic JSX typing.
 */
export const Center = 'center' as unknown as ElementType;

/**
 * Props for an <a>. React 19 rewrites `javascript:` URLs into a throwing stub, but the site
 * markup uses `href="javascript:;"` on button-like anchors (cursor/colour come from `a[href]`).
 * For those we emit the attribute under a name React does not treat as a URL prop; HTML attribute
 * names are case-insensitive, so the browser sees a normal `href`.
 */
export function link(href: string): AnchorHTMLAttributes<HTMLAnchorElement> {
  if (/^\s*javascript:/i.test(href)) {
    return { HREF: href } as unknown as AnchorHTMLAttributes<HTMLAnchorElement>;
  }
  return { href };
}

/** Parse an inline `style` string stored in content into a React style object. */
export function css(style: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of style.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const key = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!key) continue;
    const prop = key.startsWith('--') ? key : key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[prop] = value;
  }
  return out as CSSProperties;
}
