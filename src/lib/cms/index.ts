// Content access layer. Today it reads JSON from /content; swap the bodies of these functions for a
// headless-CMS client (Strapi, Sanity, Contentful, ...) and nothing else in the app has to change.
import siteJson from '../../../content/site.json';
import formsJson from '../../../content/forms.json';
import headerJson from '../../../content/layout/header.json';
import mobileMenuJson from '../../../content/layout/mobileMenu.json';
import getQuoteButtonJson from '../../../content/layout/getQuoteButton.json';
import callBackSidebarJson from '../../../content/layout/callBackSidebar.json';
import heroJson from '../../../content/home/hero.json';
import brandLogosJson from '../../../content/home/brandLogos.json';
import aboutJson from '../../../content/home/about.json';
import offeringsJson from '../../../content/home/offerings.json';
import industriesJson from '../../../content/home/industries.json';
import valuesJson from '../../../content/home/values.json';
import calloutJson from '../../../content/home/callout.json';
import processJson from '../../../content/home/process.json';
import testimonialsJson from '../../../content/home/testimonials.json';
import portfolioJson from '../../../content/home/portfolio.json';
import contactCtaJson from '../../../content/home/contactCta.json';
import whatsAppAnchorJson from '../../../content/home/whatsAppAnchor.json';
import technologiesJson from '../../../content/home/technologies.json';
import blogJson from '../../../content/home/blog.json';
import scheduleCallJson from '../../../content/home/scheduleCall.json';
import engagementJson from '../../../content/home/engagement.json';
import locationsJson from '../../../content/home/locations.json';
import footerMainJson from '../../../content/home/footerMain.json';
import quotePopupJson from '../../../content/home/quotePopup.json';
import cookieAlertJson from '../../../content/home/cookieAlert.json';
import hireStickyBarJson from '../../../content/home/hireStickyBar.json';
import type { SiteSettings } from '@/types/site';
import type {
  HeaderContent,
  MobileMenuContent,
  GetQuoteButtonContent,
  CallBackSidebarContent,
  HeroContent,
  BrandLogosContent,
  AboutContent,
  OfferingsContent,
  IndustriesContent,
  ValuesContent,
  CalloutContent,
  ProcessContent,
  TestimonialsContent,
  PortfolioContent,
  ContactCtaContent,
  WhatsAppAnchorContent,
  TechnologiesContent,
  BlogContent,
  ScheduleCallContent,
  EngagementContent,
  LocationsContent,
  FooterMainContent,
  QuotePopupContent,
  CookieAlertContent,
  HireStickyBarContent,
  FormsContent,
} from '@/types/content';

export interface HomePageContent {
  forms: FormsContent;
  layout: {
    header: HeaderContent;
    mobileMenu: MobileMenuContent;
    getQuoteButton: GetQuoteButtonContent;
    callBackSidebar: CallBackSidebarContent;
  };
  home: {
    hero: HeroContent;
    brandLogos: BrandLogosContent;
    about: AboutContent;
    offerings: OfferingsContent;
    industries: IndustriesContent;
    values: ValuesContent;
    callout: CalloutContent;
    process: ProcessContent;
    testimonials: TestimonialsContent;
    portfolio: PortfolioContent;
    contactCta: ContactCtaContent;
    whatsAppAnchor: WhatsAppAnchorContent;
    technologies: TechnologiesContent;
    blog: BlogContent;
    scheduleCall: ScheduleCallContent;
    engagement: EngagementContent;
    locations: LocationsContent;
    footerMain: FooterMainContent;
    quotePopup: QuotePopupContent;
    cookieAlert: CookieAlertContent;
    hireStickyBar: HireStickyBarContent;
  };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return siteJson;
}

export async function getHomePage(): Promise<HomePageContent> {
  return {
    forms: formsJson,
    layout: {
      header: headerJson,
      mobileMenu: mobileMenuJson,
      getQuoteButton: getQuoteButtonJson,
      callBackSidebar: callBackSidebarJson,
    },
    home: {
      hero: heroJson,
      brandLogos: brandLogosJson,
      about: aboutJson,
      offerings: offeringsJson,
      industries: industriesJson,
      values: valuesJson,
      callout: calloutJson,
      process: processJson,
      testimonials: testimonialsJson,
      portfolio: portfolioJson,
      contactCta: contactCtaJson,
      whatsAppAnchor: whatsAppAnchorJson,
      technologies: technologiesJson,
      blog: blogJson,
      scheduleCall: scheduleCallJson,
      engagement: engagementJson,
      locations: locationsJson,
      footerMain: footerMainJson,
      quotePopup: quotePopupJson,
      cookieAlert: cookieAlertJson,
      hireStickyBar: hireStickyBarJson,
    },
  };
}
