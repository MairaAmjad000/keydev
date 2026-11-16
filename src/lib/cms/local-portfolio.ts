/**
* GENERATED registry of the portfolio page (content/pages/portfolio).
* Same shape as local-services.ts / local-solutions.ts. Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import portfolioPage from '../../../content/pages/portfolio/page.json';
import portfolio_blog from '../../../content/pages/portfolio/sections/blog.json';
import portfolio_callout from '../../../content/pages/portfolio/sections/callout.json';
import portfolio_categoryHero from '../../../content/pages/portfolio/sections/category-hero.json';
import portfolio_featuredIn from '../../../content/pages/portfolio/sections/featured-in.json';
import portfolio_portfolioShowcase from '../../../content/pages/portfolio/sections/portfolio-showcase.json';
import portfolio_technologies from '../../../content/pages/portfolio/sections/technologies.json';
import portfolio_testimonials from '../../../content/pages/portfolio/sections/testimonials.json';

export const portfolioPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: portfolioPage, data: { blog: portfolio_blog, callout: portfolio_callout, categoryHero: portfolio_categoryHero, featuredIn: portfolio_featuredIn, portfolioShowcase: portfolio_portfolioShowcase, technologies: portfolio_technologies, testimonials: portfolio_testimonials } as Partial<SectionDataMap> },
];
