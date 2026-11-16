import { GLOBAL_SECTION_ORDER } from '@/types';
import type { GlobalSectionsContent, PageData, SectionBlock } from '@/types';

/**
 * The blocks to render for a page: its own sections, then the enabled global sections (Connect With Us,
 * Schedule Meeting, Engagement Models, Locations) in that fixed order, unless the page hides them.
 *
 * A global section type that also appears in a page's own list (e.g. from an older admin export) is dropped
 * there, so it is never shown twice.
 */
export function withGlobalSections(page: PageData, globals: GlobalSectionsContent | undefined): SectionBlock[] {
  const own = page.sections.filter((s) => !(GLOBAL_SECTION_ORDER as readonly string[]).includes(s.type));
  if (!globals) return own;
  const hidden = new Set<string>(page.hideGlobalSections ?? []);
  const shared = GLOBAL_SECTION_ORDER.flatMap((type) => {
    const block = globals.sections.find((s) => s.type === type);
    if (!block || block.enabled === false || hidden.has(type)) return [];
    return [{ type: block.type, data: block.data } as SectionBlock];
  });
  return [...own, ...shared];
}
