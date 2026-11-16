/**
* GENERATED registry of the client-review page (content/pages/client-review). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import clientReviewPage from '../../../content/pages/client-review/page.json';
import clientReview_blog from '../../../content/pages/client-review/sections/blog.json';
import clientReview_brandLogos from '../../../content/pages/client-review/sections/brand-logos.json';
import clientReview_categoryHero from '../../../content/pages/client-review/sections/category-hero.json';
import clientReview_clientReviews from '../../../content/pages/client-review/sections/client-reviews.json';
import clientReview_clutchReviews from '../../../content/pages/client-review/sections/clutch-reviews.json';
import clientReview_technologies from '../../../content/pages/client-review/sections/technologies.json';

export const clientReviewPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: clientReviewPage, data: { blog: clientReview_blog, brandLogos: clientReview_brandLogos, categoryHero: clientReview_categoryHero, clientReviews: clientReview_clientReviews, clutchReviews: clientReview_clutchReviews, technologies: clientReview_technologies } as Partial<SectionDataMap> },
];
