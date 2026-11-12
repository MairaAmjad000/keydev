import type { CmsSection } from '@/types/cms';
import { CmsHtmlSection } from './CmsHtmlSection';

interface HomepageSectionsProps { sections: CmsSection[] }

export function HomepageSections({ sections }: HomepageSectionsProps) {
  return (
    <main id="main-content">
      {sections
        .filter((section) => section.enabled)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((section) => (
          <CmsHtmlSection key={section.key} sectionKey={section.key} html={section.html} />
        ))}
    </main>
  );
}
