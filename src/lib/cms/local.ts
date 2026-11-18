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
import svc_categoryHero from '../../../content/pages/service/mvp-development/sections/category-hero.json';
import svc_introContent from '../../../content/pages/service/mvp-development/sections/intro-content.json';
import svc_offerCards from '../../../content/pages/service/mvp-development/sections/offer-cards.json';
import svc_imageCards from '../../../content/pages/service/mvp-development/sections/image-cards.json';
import svc_compareBenefits from '../../../content/pages/service/mvp-development/sections/compare-benefits.json';
import svc_sprintProcess from '../../../content/pages/service/mvp-development/sections/sprint-process.json';
import svc_whyChooseImage from '../../../content/pages/service/mvp-development/sections/why-choose-image.json';
import svc_portfolio from '../../../content/pages/service/mvp-development/sections/portfolio.json';
import svc_brandLogos from '../../../content/pages/service/mvp-development/sections/brand-logos.json';
import svc_testimonials from '../../../content/pages/service/mvp-development/sections/testimonials.json';
import svc_featuredIn from '../../../content/pages/service/mvp-development/sections/featured-in.json';
import svc_technologies from '../../../content/pages/service/mvp-development/sections/technologies.json';
import svc_blog from '../../../content/pages/service/mvp-development/sections/blog.json';
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
import { digitalMarketingPageSources } from './local-digital-marketing';
import type { GlobalSectionsContent, PageData, SectionBlock, SectionDataMap, SectionType, SiteData } from '@/types';
import mobileAppDevelopmentPage from '../../../content/pages/service-category/mobile-app-development/page.json';
import mobileAppDevelopment_categoryHero from '../../../content/pages/service-category/mobile-app-development/sections/category-hero.json';
import mobileAppDevelopment_introSlider from '../../../content/pages/service-category/mobile-app-development/sections/intro-slider.json';
import mobileAppDevelopment_offerGrid from '../../../content/pages/service-category/mobile-app-development/sections/offer-grid.json';
import mobileAppDevelopment_process from '../../../content/pages/service-category/mobile-app-development/sections/process.json';
import mobileAppDevelopment_appWhyChoose from '../../../content/pages/service-category/mobile-app-development/sections/app-why-choose.json';
import mobileAppDevelopment_brandLogos from '../../../content/pages/service-category/mobile-app-development/sections/brand-logos.json';
import mobileAppDevelopment_portfolio from '../../../content/pages/service-category/mobile-app-development/sections/portfolio.json';
import mobileAppDevelopment_testimonials from '../../../content/pages/service-category/mobile-app-development/sections/testimonials.json';
import mobileAppDevelopment_technologies from '../../../content/pages/service-category/mobile-app-development/sections/technologies.json';
import mobileAppDevelopment_blog from '../../../content/pages/service-category/mobile-app-development/sections/blog.json';
import mobileAppDevelopment_featuredIn from '../../../content/pages/service-category/mobile-app-development/sections/featured-in.json';
import ecommerceDevelopmentPage from '../../../content/pages/service-category/ecommerce-development/page.json';
import ecommerceDevelopment_categoryHero from '../../../content/pages/service-category/ecommerce-development/sections/category-hero.json';
import ecommerceDevelopment_introContent from '../../../content/pages/service-category/ecommerce-development/sections/intro-content.json';
import ecommerceDevelopment_iconCards from '../../../content/pages/service-category/ecommerce-development/sections/icon-cards.json';
import ecommerceDevelopment_featureList from '../../../content/pages/service-category/ecommerce-development/sections/feature-list.json';
import ecommerceDevelopment_techIcons from '../../../content/pages/service-category/ecommerce-development/sections/tech-icons.json';
import ecommerceDevelopment_whyChoose from '../../../content/pages/service-category/ecommerce-development/sections/why-choose.json';
import ecommerceDevelopment_portfolio from '../../../content/pages/service-category/ecommerce-development/sections/portfolio.json';
import ecommerceDevelopment_brandLogos from '../../../content/pages/service-category/ecommerce-development/sections/brand-logos.json';
import ecommerceDevelopment_testimonials from '../../../content/pages/service-category/ecommerce-development/sections/testimonials.json';
import ecommerceDevelopment_featuredIn from '../../../content/pages/service-category/ecommerce-development/sections/featured-in.json';
import ecommerceDevelopment_technologies from '../../../content/pages/service-category/ecommerce-development/sections/technologies.json';
import ecommerceDevelopment_blog from '../../../content/pages/service-category/ecommerce-development/sections/blog.json';
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
import uiUxDesign_categoryHero from '../../../content/pages/service-category/ui-ux-design/sections/category-hero.json';
import uiUxDesign_introContent from '../../../content/pages/service-category/ui-ux-design/sections/intro-content.json';
import uiUxDesign_uiuxServices from '../../../content/pages/service-category/ui-ux-design/sections/uiux-services.json';
import uiUxDesign_uiuxMobileDesign from '../../../content/pages/service-category/ui-ux-design/sections/uiux-mobile-design.json';
import uiUxDesign_uiuxWebDesign from '../../../content/pages/service-category/ui-ux-design/sections/uiux-web-design.json';
import uiUxDesign_uiuxProcess from '../../../content/pages/service-category/ui-ux-design/sections/uiux-process.json';
import uiUxDesign_uiuxTools from '../../../content/pages/service-category/ui-ux-design/sections/uiux-tools.json';
import uiUxDesign_whyChoose from '../../../content/pages/service-category/ui-ux-design/sections/why-choose.json';
import uiUxDesign_callout from '../../../content/pages/service-category/ui-ux-design/sections/callout.json';
import uiUxDesign_brandLogos from '../../../content/pages/service-category/ui-ux-design/sections/brand-logos.json';
import uiUxDesign_testimonials from '../../../content/pages/service-category/ui-ux-design/sections/testimonials.json';
import uiUxDesign_featuredIn from '../../../content/pages/service-category/ui-ux-design/sections/featured-in.json';
import uiUxDesign_technologies from '../../../content/pages/service-category/ui-ux-design/sections/technologies.json';
import uiUxDesign_blog from '../../../content/pages/service-category/ui-ux-design/sections/blog.json';

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
  categoryHero: svc_categoryHero,
  introContent: svc_introContent,
  offerCards: svc_offerCards,
  imageCards: svc_imageCards,
  compareBenefits: svc_compareBenefits,
  sprintProcess: svc_sprintProcess,
  whyChooseImage: svc_whyChooseImage,
  portfolio: svc_portfolio,
  brandLogos: svc_brandLogos,
  testimonials: svc_testimonials,
  featuredIn: svc_featuredIn,
  technologies: svc_technologies,
  blog: svc_blog,
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
  categoryHero: mobileAppDevelopment_categoryHero,
  introSlider: mobileAppDevelopment_introSlider,
  offerGrid: mobileAppDevelopment_offerGrid,
  process: mobileAppDevelopment_process,
  appWhyChoose: mobileAppDevelopment_appWhyChoose,
  brandLogos: mobileAppDevelopment_brandLogos,
  portfolio: mobileAppDevelopment_portfolio,
  testimonials: mobileAppDevelopment_testimonials,
  technologies: mobileAppDevelopment_technologies,
  blog: mobileAppDevelopment_blog,
  featuredIn: mobileAppDevelopment_featuredIn,
  };

/** Sections of the "E-Commerce Development" category page (content/pages/service-category/ecommerce-development). */
const ecommerceDevelopmentSections: Partial<SectionDataMap> = {
  categoryHero: ecommerceDevelopment_categoryHero,
  introContent: ecommerceDevelopment_introContent,
  iconCards: ecommerceDevelopment_iconCards,
  featureList: ecommerceDevelopment_featureList,
  techIcons: ecommerceDevelopment_techIcons,
  whyChoose: ecommerceDevelopment_whyChoose,
  portfolio: ecommerceDevelopment_portfolio,
  brandLogos: ecommerceDevelopment_brandLogos,
  testimonials: ecommerceDevelopment_testimonials,
  featuredIn: ecommerceDevelopment_featuredIn,
  technologies: ecommerceDevelopment_technologies,
  blog: ecommerceDevelopment_blog,
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
  categoryHero: uiUxDesign_categoryHero,
  introContent: uiUxDesign_introContent,
  uiuxServices: uiUxDesign_uiuxServices,
  uiuxMobileDesign: uiUxDesign_uiuxMobileDesign,
  uiuxWebDesign: uiUxDesign_uiuxWebDesign,
  uiuxProcess: uiUxDesign_uiuxProcess,
  uiuxTools: uiUxDesign_uiuxTools,
  whyChoose: uiUxDesign_whyChoose,
  callout: uiUxDesign_callout,
  brandLogos: uiUxDesign_brandLogos,
  testimonials: uiUxDesign_testimonials,
  featuredIn: uiUxDesign_featuredIn,
  technologies: uiUxDesign_technologies,
  blog: uiUxDesign_blog,
  };

/** Builds a page from its manifest (slug, seo, ordered list of section types). */
function buildPage(
  manifest: { slug: string; seo?: PageData['seo']; sections: string[]; hideGlobalSections?: string[]; bareLayout?: boolean },
  data: Partial<SectionDataMap>,
): PageData {
  const sections = manifest.sections.flatMap((type) =>
    Object.prototype.hasOwnProperty.call(data, type) ? [{ type: type as SectionType, data: data[type as SectionType] } as SectionBlock] : [],
  );
  return {
    slug: manifest.slug,
    seo: manifest.seo,
    sections,
    ...(manifest.hideGlobalSections ? { hideGlobalSections: manifest.hideGlobalSections as PageData['hideGlobalSections'] } : {}),
    ...(manifest.bareLayout ? { bareLayout: true } : {}),
  };
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
  ...Object.fromEntries(digitalMarketingPageSources.map(({ manifest, data }) => [manifest.slug, buildPage(manifest, data)])),
  ...Object.fromEntries(mobileApplicationPages.map((page) => [page.slug, page])),
};
