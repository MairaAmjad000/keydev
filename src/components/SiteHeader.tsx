import { CmsHtmlSection } from './CmsHtmlSection';

interface SiteHeaderProps { html: string }

export function SiteHeader({ html }: SiteHeaderProps) {
  return <CmsHtmlSection sectionKey="site-header" html={html} />;
}
