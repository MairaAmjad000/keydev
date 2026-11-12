import type { CmsSection } from '@/types/content';

interface CmsHtmlSectionProps {
  section: Pick<CmsSection, 'key' | 'html'>;
  as?: 'div' | 'section';
}

/** Shared renderer for trusted, server-sanitized CMS HTML regions. */
export function CmsHtmlSection({ section, as: Element = 'div' }: CmsHtmlSectionProps) {
  return (
    <Element
      data-cms-section={section.key}
      dangerouslySetInnerHTML={{ __html: section.html }}
    />
  );
}
