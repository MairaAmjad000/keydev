interface CmsHtmlSectionProps {
  sectionKey: string;
  html: string;
}

/** Renders a CMS-authored HTML region. Only render trusted/sanitized CMS output here. */
export function CmsHtmlSection({ sectionKey, html }: CmsHtmlSectionProps) {
  return <div data-cms-section={sectionKey} dangerouslySetInnerHTML={{ __html: html }} />;
}
