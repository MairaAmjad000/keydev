import { Header } from '@/components/layout/Header';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { GetQuoteButton } from '@/components/layout/GetQuoteButton';
import { CallBackSidebar } from '@/components/layout/CallBackSidebar';
import { Hero } from '@/components/home/Hero';
import { BrandLogos } from '@/components/home/BrandLogos';
import { About } from '@/components/home/About';
import { Offerings } from '@/components/home/Offerings';
import { Industries } from '@/components/home/Industries';
import { Values } from '@/components/home/Values';
import { Callout } from '@/components/home/Callout';
import { Process } from '@/components/home/Process';
import { Testimonials } from '@/components/home/Testimonials';
import { Portfolio } from '@/components/home/Portfolio';
import { ContactCta } from '@/components/home/ContactCta';
import { WhatsAppAnchor } from '@/components/home/WhatsAppAnchor';
import { Technologies } from '@/components/home/Technologies';
import { Blog } from '@/components/home/Blog';
import { ScheduleCall } from '@/components/home/ScheduleCall';
import { Engagement } from '@/components/home/Engagement';
import { Locations } from '@/components/home/Locations';
import { FooterMain } from '@/components/home/FooterMain';
import { QuotePopup } from '@/components/home/QuotePopup';
import { CookieAlert } from '@/components/home/CookieAlert';
import { HireStickyBar } from '@/components/home/HireStickyBar';
import { LegacyScripts } from '@/components/layout/LegacyScripts/LegacyScripts';
import type { HomePageContent } from '@/lib/cms';

/** Composes the home page from CMS content. Presentational: no data fetching here. */
export function PageTemplate({ content }: { content: HomePageContent }) {
  const { layout, home, forms } = content;

  return (
    <>
      <a className="scroll-top fas fa-angle-up" />
      {' '}
      <div>
        <Header data={layout.header} />
        {' '}
        <MobileMenu data={layout.mobileMenu} />
        {' '}
        <GetQuoteButton data={layout.getQuoteButton} />
        {' '}
        <CallBackSidebar data={layout.callBackSidebar} forms={forms} />
      </div>
      {' '}
      <div>
        <Hero data={home.hero} />
        {' '}
        <BrandLogos data={home.brandLogos} />
        {' '}
        <About data={home.about} />
        {' '}
        <Offerings data={home.offerings} />
        {' '}
        <Industries data={home.industries} />
        {' '}
        <Values data={home.values} />
        {' '}
        <Callout data={home.callout} />
        {' '}
        <Process data={home.process} />
        {' '}
        <Testimonials data={home.testimonials} />
        {' '}
        <Portfolio data={home.portfolio} />
        {' '}
        <ContactCta data={home.contactCta} />
        <WhatsAppAnchor data={home.whatsAppAnchor} />
        <Technologies data={home.technologies} />
        {' '}
        <Blog data={home.blog} />
        {' '}
        <ScheduleCall data={home.scheduleCall} forms={forms} />
        {' '}
        <Engagement data={home.engagement} />
        {' '}
        <Locations data={home.locations} />
        {' '}
        <FooterMain data={home.footerMain} />
        {' '}
        <QuotePopup data={home.quotePopup} forms={forms} />
        {' '}
        <CookieAlert data={home.cookieAlert} />
        {' '}
        <HireStickyBar data={home.hireStickyBar} />
      </div>
      <LegacyScripts />
    </>
  );
}
