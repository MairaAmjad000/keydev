import type { PageData, SiteData } from '@/types';
import { withGlobalSections } from '@/lib/cms';
import { SectionRenderer } from '@/components/sections/SectionRenderer';
import { SiteScripts } from '@/components/scripts/SiteScripts';
import { ScrollTop } from './ScrollTop';
import { Header } from './Header';
import { MobileMenu } from './MobileMenu';
import { GetQuoteButton } from './GetQuoteButton';
import { CallBackSidebar } from './CallBackSidebar';
import { Footer } from './Footer';
import { QuotePopup } from './QuotePopup';
import { CookieAlert } from './CookieAlert';
import { HireStickyBar } from './HireStickyBar';

/** Page frame shared by every page: global chrome around the page's own sections. */
export function SiteShell({ site, page }: { site: SiteData; page: PageData }) {
  return (
    <>
      <ScrollTop />
      {' '}
      <div>
        <Header data={site.header} />
        {' '}
        <MobileMenu data={site.mobileMenu} />
        {' '}
        <GetQuoteButton data={site.getQuoteButton} />
        {' '}
        <CallBackSidebar data={site.callBackSidebar} forms={site.forms} />
      </div>
      {' '}
      {page.bareLayout ? (
        <div>
          <SectionRenderer sections={withGlobalSections(page, site.globalSections)} forms={site.forms} />
        </div>
      ) : (
        <>
          <main>
            <SectionRenderer sections={withGlobalSections(page, site.globalSections)} forms={site.forms} />
            {' '}
            <Footer data={site.footer} />
          </main>
          <div>
            <QuotePopup data={site.quotePopup} forms={site.forms} />
            {' '}
            <CookieAlert data={site.cookieAlert} />
            {' '}
            <HireStickyBar data={site.hireStickyBar} />
          </div>
        </>
      )}
      <SiteScripts />
    </>
  );
}
