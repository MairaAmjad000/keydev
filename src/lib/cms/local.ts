/**
 * Bundled copy of the admin-panel content (the content/ folder). Used as the data source when
 * CMS_API_URL is not set and as a fallback when the admin panel cannot be reached.
 */
import site from '../../../content/settings/site.json';
import forms from '../../../content/settings/forms.json';
import header from '../../../content/navigation/header.json';
import mobileMenu from '../../../content/navigation/mobile-menu.json';
import getQuoteButton from '../../../content/globals/get-quote-button.json';
import callBackSidebar from '../../../content/globals/call-back-sidebar.json';
import footer from '../../../content/globals/footer.json';
import quotePopup from '../../../content/globals/quote-popup.json';
import cookieAlert from '../../../content/globals/cookie-alert.json';
import hireStickyBar from '../../../content/globals/hire-sticky-bar.json';
import homePage from '../../../content/pages/home/page.json';
import hero from '../../../content/pages/home/sections/hero.json';
import brandLogos from '../../../content/pages/home/sections/brand-logos.json';
import about from '../../../content/pages/home/sections/about.json';
import offerings from '../../../content/pages/home/sections/offerings.json';
import industries from '../../../content/pages/home/sections/industries.json';
import values from '../../../content/pages/home/sections/values.json';
import callout from '../../../content/pages/home/sections/callout.json';
import processSection from '../../../content/pages/home/sections/process.json';
import testimonials from '../../../content/pages/home/sections/testimonials.json';
import portfolio from '../../../content/pages/home/sections/portfolio.json';
import contactCta from '../../../content/pages/home/sections/contact-cta.json';
import whatsAppAnchor from '../../../content/pages/home/sections/whatsapp-anchor.json';
import technologies from '../../../content/pages/home/sections/technologies.json';
import blog from '../../../content/pages/home/sections/blog.json';
import scheduleCall from '../../../content/pages/home/sections/schedule-call.json';
import engagement from '../../../content/pages/home/sections/engagement.json';
import locations from '../../../content/pages/home/sections/locations.json';
import categoryWebDevelopmentPage from '../../../content/pages/service-category/web-development/page.json';
import catCategoryHero from '../../../content/pages/service-category/web-development/sections/category-hero.json';
import catBrandLogos from '../../../content/pages/service-category/web-development/sections/brand-logos.json';
import catIntroContent from '../../../content/pages/service-category/web-development/sections/intro-content.json';
import catServiceOfferings from '../../../content/pages/service-category/web-development/sections/service-offerings.json';
import catFeatureList from '../../../content/pages/service-category/web-development/sections/feature-list.json';
import catAdvantageGrid from '../../../content/pages/service-category/web-development/sections/advantage-grid.json';
import catProcess from '../../../content/pages/service-category/web-development/sections/process.json';
import catFrameworkTabs from '../../../content/pages/service-category/web-development/sections/framework-tabs.json';
import catContactCta from '../../../content/pages/service-category/web-development/sections/contact-cta.json';
import catWhyChoose from '../../../content/pages/service-category/web-development/sections/why-choose.json';
import catPortfolio from '../../../content/pages/service-category/web-development/sections/portfolio.json';
import catTestimonials from '../../../content/pages/service-category/web-development/sections/testimonials.json';
import catTechnologies from '../../../content/pages/service-category/web-development/sections/technologies.json';
import catFaq from '../../../content/pages/service-category/web-development/sections/faq.json';
import catFeaturedIn from '../../../content/pages/service-category/web-development/sections/featured-in.json';
import catBlog from '../../../content/pages/service-category/web-development/sections/blog.json';
import catScheduleCall from '../../../content/pages/service-category/web-development/sections/schedule-call.json';
import servicePage from '../../../content/pages/service/mvp-development/page.json';
import svcCategoryHero from '../../../content/pages/service/mvp-development/sections/category-hero.json';
import svcBrandLogos from '../../../content/pages/service/mvp-development/sections/brand-logos.json';
import svcIntroContent from '../../../content/pages/service/mvp-development/sections/intro-content.json';
import svcOfferCards from '../../../content/pages/service/mvp-development/sections/offer-cards.json';
import svcImageCards from '../../../content/pages/service/mvp-development/sections/image-cards.json';
import svcCompareBenefits from '../../../content/pages/service/mvp-development/sections/compare-benefits.json';
import svcSprintProcess from '../../../content/pages/service/mvp-development/sections/sprint-process.json';
import svcTechStackTabs from '../../../content/pages/service/mvp-development/sections/tech-stack-tabs.json';
import svcContactCta from '../../../content/pages/service/mvp-development/sections/contact-cta.json';
import svcWhyChooseImage from '../../../content/pages/service/mvp-development/sections/why-choose-image.json';
import svcPortfolio from '../../../content/pages/service/mvp-development/sections/portfolio.json';
import svcTestimonials from '../../../content/pages/service/mvp-development/sections/testimonials.json';
import svcTechnologies from '../../../content/pages/service/mvp-development/sections/technologies.json';
import svcFaq from '../../../content/pages/service/mvp-development/sections/faq.json';
import svcFeaturedIn from '../../../content/pages/service/mvp-development/sections/featured-in.json';
import svcBlog from '../../../content/pages/service/mvp-development/sections/blog.json';
import svcScheduleCall from '../../../content/pages/service/mvp-development/sections/schedule-call.json';
import svcEngagement from '../../../content/pages/service/mvp-development/sections/engagement.json';
import type { PageData, SectionBlock, SectionDataMap, SectionType, SiteData } from '@/types';

export const localSite: SiteData = {
  settings: site,
  forms,
  header,
  mobileMenu,
  getQuoteButton,
  callBackSidebar,
  footer,
  quotePopup,
  cookieAlert,
  hireStickyBar,
};

const homeSections: Partial<SectionDataMap> = {
  hero,
  brandLogos,
  about,
  offerings,
  industries,
  values,
  callout,
  process: processSection,
  testimonials,
  portfolio,
  contactCta,
  whatsAppAnchor,
  technologies,
  blog,
  scheduleCall,
  engagement,
  locations,
};

/** Sections of the "MVP Development" service page (content/pages/service/mvp-development). */
const serviceMvpSections: Partial<SectionDataMap> = {
  categoryHero: svcCategoryHero,
  brandLogos: svcBrandLogos,
  introContent: svcIntroContent,
  offerCards: svcOfferCards,
  imageCards: svcImageCards,
  compareBenefits: svcCompareBenefits,
  sprintProcess: svcSprintProcess,
  techStackTabs: svcTechStackTabs,
  contactCta: svcContactCta,
  whyChooseImage: svcWhyChooseImage,
  portfolio: svcPortfolio,
  testimonials: svcTestimonials,
  technologies: svcTechnologies,
  faq: svcFaq,
  featuredIn: svcFeaturedIn,
  blog: svcBlog,
  scheduleCall: svcScheduleCall,
  engagement: svcEngagement,
};

/** Sections of the "Web Development" category page (content/pages/service-category/web-development). */
const categoryWebDevelopmentSections: Partial<SectionDataMap> = {
  categoryHero: catCategoryHero,
  brandLogos: catBrandLogos,
  introContent: catIntroContent,
  serviceOfferings: catServiceOfferings,
  featureList: catFeatureList,
  advantageGrid: catAdvantageGrid,
  process: catProcess,
  frameworkTabs: catFrameworkTabs,
  contactCta: catContactCta,
  whyChoose: catWhyChoose,
  portfolio: catPortfolio,
  testimonials: catTestimonials,
  technologies: catTechnologies,
  faq: catFaq,
  featuredIn: catFeaturedIn,
  blog: catBlog,
  scheduleCall: catScheduleCall,
};

/** Builds a page from its manifest (slug, seo, ordered list of section types). */
function buildPage(
  manifest: { slug: string; seo?: PageData['seo']; sections: string[] },
  data: Partial<SectionDataMap>,
): PageData {
  const sections = manifest.sections.flatMap((type) =>
    Object.prototype.hasOwnProperty.call(data, type) ? [{ type: type as SectionType, data: data[type as SectionType] } as SectionBlock] : [],
  );
  return { slug: manifest.slug, seo: manifest.seo, sections };
}

export const localPages: Record<string, PageData> = {
  [homePage.slug]: buildPage(homePage, homeSections),
  [servicePage.slug]: buildPage(servicePage, serviceMvpSections),
  [categoryWebDevelopmentPage.slug]: buildPage(categoryWebDevelopmentPage, categoryWebDevelopmentSections),
};
