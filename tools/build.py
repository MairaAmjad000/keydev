import sys, json, os, shutil
sys.path.insert(0, '/home/claude/gen')
from gen import *

prep(TREE)
body_els = [c for c in TREE['c'] if 'n' in c]
hdr_wrap, main_wrap = body_els[1], body_els[2]
hdr = [c for c in hdr_wrap['c'] if 'n' in c]
main = [c for c in main_wrap['c'] if 'n' in c]
assert len(hdr) == 5 and len(main) == 21, (len(hdr), len(main))

# wipe previously generated output
for g in ('layout', 'home'):
    shutil.rmtree(f'{ROOT}/content/{g}', ignore_errors=True)
    for f in os.listdir(f'{ROOT}/src/components/{g}') if os.path.isdir(f'{ROOT}/src/components/{g}') else []:
        if f != 'LegacyScripts':
            p = f'{ROOT}/src/components/{g}/{f}'
            shutil.rmtree(p, ignore_errors=True) if os.path.isdir(p) else os.remove(p)

def gaps(children):
    """per gap between consecutive element children: is there whitespace in the reference?"""
    out, cur, seen = [], False, False
    for c in children:
        if 'n' in c:
            if seen: out.append(cur)
            cur, seen = False, True
        elif seen and is_ws(c):
            cur = True
    return out
HDR_GAPS = gaps(hdr_wrap['c']); MAIN_GAPS = gaps(main_wrap['c'])
print('gaps', HDR_GAPS, ''.join('1' if g else '0' for g in MAIN_GAPS))

LAYOUT = [('Header', [hdr[0]]), ('MobileMenu', [hdr[1]]), ('GetQuoteButton', [hdr[2]]), ('CallBackSidebar', [hdr[3]] + ([{'t': ' '}] if HDR_GAPS[3] else []) + [hdr[4]])]
HOME = ['Hero', 'BrandLogos', 'About', 'Offerings', 'Industries', 'Values', 'Callout', 'Process', 'Testimonials', 'Portfolio',
        'ContactCta', 'WhatsAppAnchor', 'Technologies', 'Blog', 'ScheduleCall', 'Engagement', 'Locations', 'FooterMain',
        'QuotePopup', 'CookieAlert', 'HireStickyBar']
for name, nodes in LAYOUT:
    emit_component('layout', name, nodes)
for name, node in zip(HOME, main):
    emit_component('home', name, [node])

# shared form option lists
os.makedirs(f'{ROOT}/content', exist_ok=True)
json.dump(FORMS, open(f'{ROOT}/content/forms.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
open(f'{ROOT}/content/forms.json', 'a').write('\n')
write_types()
write_icons()

# site settings (head metadata)
site = {'seo': {
    'title': 'Website & Mobile App Development Company in Lahore, Pakistan | KeyDevs',
    'description': 'KeyDevs Technologies: a website and mobile app development company in Lahore, Pakistan that offers the best Website and app development services to startups & companies.',
    'siteName': 'KeyDevs Technologies', 'favicon': '/favicon.png'}}
json.dump(site, open(f'{ROOT}/content/site.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
open(f'{ROOT}/content/site.json', 'a').write('\n')

# ---- cms loader
L = []
L.append("// Content access layer. Today it reads JSON from /content; swap the bodies of these functions for a")
L.append("// headless-CMS client (Strapi, Sanity, Contentful, ...) and nothing else in the app has to change.")
L.append("import siteJson from '../../../content/site.json';")
L.append("import formsJson from '../../../content/forms.json';")
for g, n, fk, _ in COMPONENTS:
    L.append(f"import {fk}Json from '../../../content/{g}/{fk}.json';")
L.append("import type { SiteSettings } from '@/types/site';")
L.append("import type {")
for g, n, fk, _ in COMPONENTS:
    L.append(f"  {n}Content,")
L.append("  FormsContent,")
L.append("} from '@/types/content';")
L.append("")
L.append("export interface HomePageContent {")
L.append("  forms: FormsContent;")
for grp in ('layout', 'home'):
    L.append(f"  {grp}: {{")
    for g, n, fk, _ in COMPONENTS:
        if g == grp:
            L.append(f"    {fk}: {n}Content;")
    L.append("  };")
L.append("}")
L.append("")
L.append("export async function getSiteSettings(): Promise<SiteSettings> {")
L.append("  return siteJson;")
L.append("}")
L.append("")
L.append("export async function getHomePage(): Promise<HomePageContent> {")
L.append("  return {")
L.append("    forms: formsJson,")
for grp in ('layout', 'home'):
    L.append(f"    {grp}: {{")
    for g, n, fk, _ in COMPONENTS:
        if g == grp:
            L.append(f"      {fk}: {fk}Json,")
    L.append("    },")
L.append("  };")
L.append("}")
L.append("")
open(f'{ROOT}/src/lib/cms/index.ts', 'w').write('\n'.join(L))
open(f'{ROOT}/src/types/site.ts', 'w').write("export interface SiteSettings {\n  seo: {\n    title: string;\n    description: string;\n    siteName: string;\n    favicon: string;\n  };\n}\n")

# ---- page template (sync, presentational) + thin async page
def tag(g, n, fk, nf):
    return f"<{n} data={{{g}.{fk}}}{' forms={forms}' if nf else ''} />"
P = []
for g, n, fk, _ in COMPONENTS:
    P.append(f"import {{ {n} }} from '@/components/{g}/{n}';")
P.append("import { LegacyScripts } from '@/components/layout/LegacyScripts/LegacyScripts';")
P.append("import type { HomePageContent } from '@/lib/cms';")
P.append("")
P.append("/** Composes the home page from CMS content. Presentational: no data fetching here. */")
P.append("export function PageTemplate({ content }: { content: HomePageContent }) {")
P.append("  const { layout, home, forms } = content;")
P.append("")
P.append("  return (")
P.append("    <>")
SP = "{' '}"
P.append('      <a className="scroll-top fas fa-angle-up" />')
P.append("      " + SP)
P.append("      <div>")
lay = [c for c in COMPONENTS if c[0] == 'layout']
for i, (g, n, fk, nf) in enumerate(lay):
    if i and HDR_GAPS[i - 1]: P.append("        " + SP)
    P.append("        " + tag(g, n, fk, nf))
P.append("      </div>")
P.append("      " + SP)
P.append("      <div>")
hom = [c for c in COMPONENTS if c[0] == 'home']
for i, (g, n, fk, nf) in enumerate(hom):
    if i and MAIN_GAPS[i - 1]: P.append("        " + SP)
    P.append("        " + tag(g, n, fk, nf))
P.append("      </div>")
P.append("      <LegacyScripts />")
P.append("    </>")
P.append("  );")
P.append("}")
P.append("")
open(f'{ROOT}/src/components/layout/PageTemplate.tsx', 'w').write('\n'.join(P))
open(f'{ROOT}/src/app/page.tsx', 'w').write("""import { getHomePage } from '@/lib/cms';
import { PageTemplate } from '@/components/layout/PageTemplate';

export default async function HomePage() {
  const content = await getHomePage();
  return <PageTemplate content={content} />;
}
""")

print('components', len(COMPONENTS), 'icons', len(ICONS), 'forms', {k: len(v) for k, v in FORMS.items()})
print('links normalised:', len(LINK_LOG))
