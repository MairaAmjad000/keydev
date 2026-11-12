import { SiteHeader } from '@/components/layout/SiteHeader';
import { HomepageSections } from '@/components/sections/HomepageSections';
import { getHomepageContent } from '@/lib/cms/homepage';

export default async function HomePage() {
  const homepage = await getHomepageContent();

  return (
    <>
      <SiteHeader html={homepage.headerHtml} />
      <HomepageSections sections={homepage.sections} />
    </>
  );
}
