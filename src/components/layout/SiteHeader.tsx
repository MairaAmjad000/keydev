import { CmsHtmlSection } from '@/components/shared/CmsHtmlSection';

interface SiteHeaderProps {
  html: string;
}

/** Site-wide header kept separate from page content and CMS data. */
export function SiteHeader({ html }: SiteHeaderProps) {
  return <CmsHtmlSection section={{ key: 'site-header', html }} />;
}
