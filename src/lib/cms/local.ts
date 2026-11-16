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
import whatsAppAnchor from '../../../content/pages/home/sections/whatsapp-anchor.json';
import technologies from '../../../content/pages/home/sections/technologies.json';
import blog from '../../../content/pages/home/sections/blog.json';
import categoryWebDevelopmentPage from '../../../content/pages/service-category/web-development/page.json';
import catCategoryHero from '../../../content/pages/service-category/web-development/sections/category-hero.json';
import catBrandLogos from '../../../content/pages/service-category/web-development/sections/brand-logos.json';
import catIntroContent from '../../../content/pages/service-category/web-development/sections/intro-content.json';
import catServiceOfferings from '../../../content/pages/service-category/web-development/sections/service-offerings.json';
import catFrameworkTabs from '../../../content/pages/service-category/web-development/sections/framework-tabs.json';
import catWhyChoose from '../../../content/pages/service-category/web-development/sections/why-choose.json';
import catPortfolio from '../../../content/pages/service-category/web-development/sections/portfolio.json';
import catTestimonials from '../../../content/pages/service-category/web-development/sections/testimonials.json';
import catTechnologies from '../../../content/pages/service-category/web-development/sections/technologies.json';
import catFeaturedIn from '../../../content/pages/service-category/web-development/sections/featured-in.json';
import catBlog from '../../../content/pages/service-category/web-development/sections/blog.json';
import servicePage from '../../../content/pages/service/mvp-development/page.json';
import svcCategoryHero from '../../../content/pages/service/mvp-development/sections/category-hero.json';
import svcBrandLogos from '../../../content/pages/service/mvp-development/sections/brand-logos.json';
import svcIntroContent from '../../../content/pages/service/mvp-development/sections/intro-content.json';
import svcOfferCards from '../../../content/pages/service/mvp-development/sections/offer-cards.json';
import svcImageCards from '../../../content/pages/service/mvp-development/sections/image-cards.json';
import svcCompareBenefits from '../../../content/pages/service/mvp-development/sections/compare-benefits.json';
import svcSprintProcess from '../../../content/pages/service/mvp-development/sections/sprint-process.json';
import svcTechStackTabs from '../../../content/pages/service/mvp-development/sections/tech-stack-tabs.json';
import svcWhyChooseImage from '../../../content/pages/service/mvp-development/sections/why-choose-image.json';
import svcPortfolio from '../../../content/pages/service/mvp-development/sections/portfolio.json';
import svcTestimonials from '../../../content/pages/service/mvp-development/sections/testimonials.json';
import svcTechnologies from '../../../content/pages/service/mvp-development/sections/technologies.json';
import svcFaq from '../../../content/pages/service/mvp-development/sections/faq.json';
import svcFeaturedIn from '../../../content/pages/service/mvp-development/sections/featured-in.json';
import svcBlog from '../../../content/pages/service/mvp-development/sections/blog.json';
import globalSections from '../../../content/globals/global-sections.json';
import { servicePageSources } from './local-services';
import { solutionPageSources } from './local-solutions';
import { portfolioPageSources } from './local-portfolio';
import { blogPageSources } from './local-blog';
import { legalPageSources } from './local-legal';
import { blogCategoryPages, blogPostPages } from './local-blog-posts';
import { contactPageSources } from './local-contact';
import { whoWeArePageSources } from './local-who-we-are';
import { howWeWorkPageSources } from './local-how-we-work';
import { clientReviewPageSources } from './local-client-review';
import { technologiesPageSources } from './local-technologies';
import { estimatePageSources } from './local-estimate';
import { mobileApplicationPages } from './local-mobile-application';
import type { GlobalSectionsContent, PageData, SectionBlock, SectionDataMap, SectionType, SiteData } from '@/types';
import mobileAppDevelopmentPage from '../../../content/pages/service-category/mobile-app-development/page.json';
import mobileAppDevelopmentCategoryHero from '../../../content/pages/service-category/mobile-app-development/sections/category-hero.json';
import mobileAppDevelopmentBrandLogos from '../../../content/pages/service-category/mobile-app-development/sections/brand-logos.json';
import mobileAppDevelopmentIntroContent from '../../../content/pages/service-category/mobile-app-development/sections/intro-content.json';
import mobileAppDevelopmentServiceOfferings from '../../../content/pages/service-category/mobile-app-development/sections/service-offerings.json';
import mobileAppDevelopmentFeatureList from '../../../content/pages/service-category/mobile-app-development/sections/feature-list.json';
import mobileAppDevelopmentAdvantageGrid from '../../../content/pages/service-category/mobile-app-development/sections/advantage-grid.json';
import mobileAppDevelopmentProcess from '../../../content/pages/service-category/mobile-app-development/sections/process.json';
import mobileAppDevelopmentFrameworkTabs from '../../../content/pages/service-category/mobile-app-development/sections/framework-tabs.json';
import mobileAppDevelopmentWhyChoose from '../../../content/pages/service-category/mobile-app-development/sections/why-choose.json';
import mobileAppDevelopmentPortfolio from '../../../content/pages/service-category/mobile-app-development/sections/portfolio.json';
import mobileAppDevelopmentTestimonials from '../../../content/pages/service-category/mobile-app-development/sections/testimonials.json';
import mobileAppDevelopmentTechnologies from '../../../content/pages/service-category/mobile-app-development/sections/technologies.json';
import mobileAppDevelopmentFaq from '../../../content/pages/service-category/mobile-app-development/sections/faq.json';
import mobileAppDevelopmentFeaturedIn from '../../../content/pages/service-category/mobile-app-development/sections/featured-in.json';
import mobileAppDevelopmentBlog from '../../../content/pages/service-category/mobile-app-development/sections/blog.json';
import ecommerceDevelopmentPage from '../../../content/pages/service-category/ecommerce-development/page.json';
import ecommerceDevelopmentCategoryHero from '../../../content/pages/service-category/ecommerce-development/sections/category-hero.json';
import ecommerceDevelopmentBrandLogos from '../../../content/pages/service-category/ecommerce-development/sections/brand-logos.json';
import ecommerceDevelopmentIntroContent from '../../../content/pages/service-category/ecommerce-development/sections/intro-content.json';
import ecommerceDevelopmentServiceOfferings from '../../../content/pages/service-category/ecommerce-development/sections/service-offerings.json';
import ecommerceDevelopmentFeatureList from '../../../content/pages/service-category/ecommerce-development/sections/feature-list.json';
import ecommerceDevelopmentAdvantageGrid from '../../../content/pages/service-category/ecommerce-development/sections/advantage-grid.json';
import ecommerceDevelopmentProcess from '../../../content/pages/service-category/ecommerce-development/sections/process.json';
import ecommerceDevelopmentFrameworkTabs from '../../../content/pages/service-category/ecommerce-development/sections/framework-tabs.json';
import ecommerceDevelopmentWhyChoose from '../../../content/pages/service-category/ecommerce-development/sections/why-choose.json';
import ecommerceDevelopmentPortfolio from '../../../content/pages/service-category/ecommerce-development/sections/portfolio.json';
import ecommerceDevelopmentTestimonials from '../../../content/pages/service-category/ecommerce-development/sections/testimonials.json';
import ecommerceDevelopmentTechnologies from '../../../content/pages/service-category/ecommerce-development/sections/technologies.json';
import ecommerceDevelopmentFaq from '../../../content/pages/service-category/ecommerce-development/sections/faq.json';
import ecommerceDevelopmentFeaturedIn from '../../../content/pages/service-category/ecommerce-development/sections/featured-in.json';
import ecommerceDevelopmentBlog from '../../../content/pages/service-category/ecommerce-development/sections/blog.json';
import gameDevelopmentPage from '../../../content/pages/service-category/game-development/page.json';
import gameDevelopmentCategoryHero from '../../../content/pages/service-category/game-development/sections/category-hero.json';
import gameDevelopmentBrandLogos from '../../../content/pages/service-category/game-development/sections/brand-logos.json';
import gameDevelopmentIntroContent from '../../../content/pages/service-category/game-development/sections/intro-content.json';
import gameDevelopmentServiceOfferings from '../../../content/pages/service-category/game-development/sections/service-offerings.json';
import gameDevelopmentFeatureList from '../../../content/pages/service-category/game-development/sections/feature-list.json';
import gameDevelopmentAdvantageGrid from '../../../content/pages/service-category/game-development/sections/advantage-grid.json';
import gameDevelopmentProcess from '../../../content/pages/service-category/game-development/sections/process.json';
import gameDevelopmentFrameworkTabs from '../../../content/pages/service-category/game-development/sections/framework-tabs.json';
import gameDevelopmentWhyChoose from '../../../content/pages/service-category/game-development/sections/why-choose.json';
import gameDevelopmentPortfolio from '../../../content/pages/service-category/game-development/sections/portfolio.json';
import gameDevelopmentTestimonials from '../../../content/pages/service-category/game-development/sections/testimonials.json';
import gameDevelopmentTechnologies from '../../../content/pages/service-category/game-development/sections/technologies.json';
import gameDevelopmentFaq from '../../../content/pages/service-category/game-development/sections/faq.json';
import gameDevelopmentFeaturedIn from '../../../content/pages/service-category/game-development/sections/featured-in.json';
import gameDevelopmentBlog from '../../../content/pages/service-category/game-development/sections/blog.json';
import uiUxDesignPage from '../../../content/pages/service-category/ui-ux-design/page.json';
import uiUxDesignCategoryHero from '../../../content/pages/service-category/ui-ux-design/sections/category-hero.json';
import uiUxDesignBrandLogos from '../../../content/pages/service-category/ui-ux-design/sections/brand-logos.json';
import uiUxDesignIntroContent from '../../../content/pages/service-category/ui-ux-design/sections/intro-content.json';
import uiUxDesignServiceOfferings from '../../../content/pages/service-category/ui-ux-design/sections/service-offerings.json';
import uiUxDesignFeatureList from '../../../content/pages/service-category/ui-ux-design/sections/feature-list.json';
import uiUxDesignAdvantageGrid from '../../../content/pages/service-category/ui-ux-design/sections/advantage-grid.json';
import uiUxDesignProcess from '../../../content/pages/service-category/ui-ux-design/sections/process.json';
import uiUxDesignFrameworkTabs from '../../../content/pages/service-category/ui-ux-design/sections/framework-tabs.json';
import uiUxDesignWhyChoose from '../../../content/pages/service-category/ui-ux-design/sections/why-choose.json';
import uiUxDesignPortfolio from '../../../content/pages/service-category/ui-ux-design/sections/portfolio.json';
import uiUxDesignTestimonials from '../../../content/pages/service-category/ui-ux-design/sections/testimonials.json';
import uiUxDesignTechnologies from '../../../content/pages/service-category/ui-ux-design/sections/technologies.json';
import uiUxDesignFaq from '../../../content/pages/service-category/ui-ux-design/sections/faq.json';
import uiUxDesignFeaturedIn from '../../../content/pages/service-category/ui-ux-design/sections/featured-in.json';
import uiUxDesignBlog from '../../../content/pages/service-category/ui-ux-design/sections/blog.json';
import uiUxDesignCallout from '../../../content/pages/service-category/ui-ux-design/sections/callout.json';

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
  globalSections: globalSections as unknown as GlobalSectionsContent,
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
  whatsAppAnchor,
  technologies,
  blog,
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
    whyChooseImage: svcWhyChooseImage,
  portfolio: svcPortfolio,
  testimonials: svcTestimonials,
  technologies: svcTechnologies,
  faq: svcFaq,
  featuredIn: svcFeaturedIn,
  blog: svcBlog,
    };

/** Sections of the "Web Development" category page (content/pages/service-category/web-development). */
const categoryWebDevelopmentSections: Partial<SectionDataMap> = {
  categoryHero: catCategoryHero,
  brandLogos: catBrandLogos,
  introContent: catIntroContent,
  serviceOfferings: catServiceOfferings,
  frameworkTabs: catFrameworkTabs,
    whyChoose: catWhyChoose,
  portfolio: catPortfolio,
  testimonials: catTestimonials,
  technologies: catTechnologies,
  featuredIn: catFeaturedIn,
  blog: catBlog,
  };

/** Sections of the "Mobile App Development" category page (content/pages/service-category/mobile-app-development). */
const mobileAppDevelopmentSections: Partial<SectionDataMap> = {
  categoryHero: mobileAppDevelopmentCategoryHero,
  brandLogos: mobileAppDevelopmentBrandLogos,
  introContent: mobileAppDevelopmentIntroContent,
  serviceOfferings: mobileAppDevelopmentServiceOfferings,
  featureList: mobileAppDevelopmentFeatureList,
  advantageGrid: mobileAppDevelopmentAdvantageGrid,
  process: mobileAppDevelopmentProcess,
  frameworkTabs: mobileAppDevelopmentFrameworkTabs,
    whyChoose: mobileAppDevelopmentWhyChoose,
  portfolio: mobileAppDevelopmentPortfolio,
  testimonials: mobileAppDevelopmentTestimonials,
  technologies: mobileAppDevelopmentTechnologies,
  faq: mobileAppDevelopmentFaq,
  featuredIn: mobileAppDevelopmentFeaturedIn,
  blog: mobileAppDevelopmentBlog,
  };

/** Sections of the "E-Commerce Development" category page (content/pages/service-category/ecommerce-development). */
const ecommerceDevelopmentSections: Partial<SectionDataMap> = {
  categoryHero: ecommerceDevelopmentCategoryHero,
  brandLogos: ecommerceDevelopmentBrandLogos,
  introContent: ecommerceDevelopmentIntroContent,
  serviceOfferings: ecommerceDevelopmentServiceOfferings,
  featureList: ecommerceDevelopmentFeatureList,
  advantageGrid: ecommerceDevelopmentAdvantageGrid,
  process: ecommerceDevelopmentProcess,
  frameworkTabs: ecommerceDevelopmentFrameworkTabs,
    whyChoose: ecommerceDevelopmentWhyChoose,
  portfolio: ecommerceDevelopmentPortfolio,
  testimonials: ecommerceDevelopmentTestimonials,
  technologies: ecommerceDevelopmentTechnologies,
  faq: ecommerceDevelopmentFaq,
  featuredIn: ecommerceDevelopmentFeaturedIn,
  blog: ecommerceDevelopmentBlog,
  };

/** Sections of the "Game Development" category page (content/pages/service-category/game-development). */
const gameDevelopmentSections: Partial<SectionDataMap> = {
  categoryHero: gameDevelopmentCategoryHero,
  brandLogos: gameDevelopmentBrandLogos,
  introContent: gameDevelopmentIntroContent,
  serviceOfferings: gameDevelopmentServiceOfferings,
  featureList: gameDevelopmentFeatureList,
  advantageGrid: gameDevelopmentAdvantageGrid,
  process: gameDevelopmentProcess,
  frameworkTabs: gameDevelopmentFrameworkTabs,
    whyChoose: gameDevelopmentWhyChoose,
  portfolio: gameDevelopmentPortfolio,
  testimonials: gameDevelopmentTestimonials,
  technologies: gameDevelopmentTechnologies,
  faq: gameDevelopmentFaq,
  featuredIn: gameDevelopmentFeaturedIn,
  blog: gameDevelopmentBlog,
  };

/** Sections of the "UI/UX Design" category page (content/pages/service-category/ui-ux-design). */
const uiUxDesignSections: Partial<SectionDataMap> = {
  categoryHero: uiUxDesignCategoryHero,
  callout: uiUxDesignCallout,
  brandLogos: uiUxDesignBrandLogos,
  introContent: uiUxDesignIntroContent,
  serviceOfferings: uiUxDesignServiceOfferings,
  featureList: uiUxDesignFeatureList,
  advantageGrid: uiUxDesignAdvantageGrid,
  process: uiUxDesignProcess,
  frameworkTabs: uiUxDesignFrameworkTabs,
    whyChoose: uiUxDesignWhyChoose,
  portfolio: uiUxDesignPortfolio,
  testimonials: uiUxDesignTestimonials,
  technologies: uiUxDesignTechnologies,
  faq: uiUxDesignFaq,
  featuredIn: uiUxDesignFeaturedIn,
  blog: uiUxDesignBlog,
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
  [mobileAppDevelopmentPage.slug]: buildPage(mobileAppDevelopmentPage, mobileAppDevelopmentSections),
  [ecommerceDevelopmentPage.slug]: buildPage(ecommerceDevelopmentPage, ecommerceDevelopmentSections),
  [gameDevelopmentPage.slug]: buildPage(gameDevelopmentPage, gameDevelopmentSections),
  [uiUxDesignPage.slug]: buildPage(uiUxDesignPage, uiUxDesignSections),
  ...Object.fromEntries(servicePageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(solutionPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(portfolioPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(blogPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(blogPostPages.map((page) => [page.slug, page])),
  ...Object.fromEntries(blogCategoryPages.map((page) => [page.slug, page])),
  ...Object.fromEntries(legalPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(contactPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(whoWeArePageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(howWeWorkPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(clientReviewPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(technologiesPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(estimatePageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(mobileApplicationPages.map((page) => [page.slug, page])),
};
