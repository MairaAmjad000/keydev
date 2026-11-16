/**
* GENERATED registry of the how-we-work page (content/pages/how-we-work). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import howWeWorkPage from '../../../content/pages/how-we-work/page.json';
import howWeWork_blog from '../../../content/pages/how-we-work/sections/blog.json';
import howWeWork_brandLogos from '../../../content/pages/how-we-work/sections/brand-logos.json';
import howWeWork_categoryHero from '../../../content/pages/how-we-work/sections/category-hero.json';
import howWeWork_introContent from '../../../content/pages/how-we-work/sections/intro-content.json';
import howWeWork_portfolio from '../../../content/pages/how-we-work/sections/portfolio.json';
import howWeWork_processSteps from '../../../content/pages/how-we-work/sections/process-steps.json';
import howWeWork_technologies from '../../../content/pages/how-we-work/sections/technologies.json';
import howWeWork_testimonials from '../../../content/pages/how-we-work/sections/testimonials.json';

export const howWeWorkPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: howWeWorkPage, data: { blog: howWeWork_blog, brandLogos: howWeWork_brandLogos, categoryHero: howWeWork_categoryHero, introContent: howWeWork_introContent, portfolio: howWeWork_portfolio, processSteps: howWeWork_processSteps, technologies: howWeWork_technologies, testimonials: howWeWork_testimonials } as Partial<SectionDataMap> },
];
