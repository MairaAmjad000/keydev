import { HomepageSections } from '@/components/HomepageSections';
import { SiteHeader } from '@/components/SiteHeader';
import { getHomepageContent } from '@/lib/cms';

export default async function HomePage() {
  const homepage = await getHomepageContent();

  return (
    <>
      <SiteHeader html={homepage.headerHtml} />
      <HomepageSections sections={homepage.sections} />
    </>
  );
}
