/**
 * Content access layer: the only place the app reads content from.
 *
 * Every function asks the admin panel first (GET {CMS_API_URL}/<path>, same paths as the folders
 * under content/) and falls back to the bundled content/ files, so the site always renders.
 */
import type {
  CallBackSidebarContent, CookieAlertContent, FooterContent, FormsContent, GetQuoteButtonContent,
  HeaderContent, HireStickyBarContent, MobileMenuContent, PageData, QuotePopupContent, SiteData,
  SiteSettings,
} from '@/types';
import { fetchFromCms } from './client';
import { localPages, localSite } from './local';

async function load<T>(path: string, fallback: T): Promise<T> {
  return (await fetchFromCms<T>(path)) ?? fallback;
}

export function getSiteSettings(): Promise<SiteSettings> {
  return load('settings/site', localSite.settings);
}

/** Settings, navigation and global blocks shared by every page. */
export async function getSiteData(): Promise<SiteData> {
  const [settings, forms, header, mobileMenu, getQuoteButton, callBackSidebar, footer, quotePopup, cookieAlert, hireStickyBar] =
    await Promise.all([
      getSiteSettings(),
      load<FormsContent>('settings/forms', localSite.forms),
      load<HeaderContent>('navigation/header', localSite.header),
      load<MobileMenuContent>('navigation/mobile-menu', localSite.mobileMenu),
      load<GetQuoteButtonContent>('globals/get-quote-button', localSite.getQuoteButton),
      load<CallBackSidebarContent>('globals/call-back-sidebar', localSite.callBackSidebar),
      load<FooterContent>('globals/footer', localSite.footer),
      load<QuotePopupContent>('globals/quote-popup', localSite.quotePopup),
      load<CookieAlertContent>('globals/cookie-alert', localSite.cookieAlert),
      load<HireStickyBarContent>('globals/hire-sticky-bar', localSite.hireStickyBar),
    ]);
  return { settings, forms, header, mobileMenu, getQuoteButton, callBackSidebar, footer, quotePopup, cookieAlert, hireStickyBar };
}

/** One page: SEO plus its ordered sections. `slug` is "home" for the front page. */
export async function getPage(slug: string): Promise<PageData | null> {
  return (await fetchFromCms<PageData>(`pages/${slug}`)) ?? localPages[slug] ?? null;
}

/** Slugs of all published pages (used to pre-render them). */
export async function getPageSlugs(): Promise<string[]> {
  const remote = await fetchFromCms<Array<{ slug: string }>>('pages');
  return remote ? remote.map((page) => page.slug) : Object.keys(localPages);
}
