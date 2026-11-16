/**
* GENERATED registry of the technologies page (content/pages/technologies). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import technologiesPage from '../../../content/pages/technologies/page.json';
import technologiesPg_blog from '../../../content/pages/technologies/sections/blog.json';
import technologiesPg_categoryHero from '../../../content/pages/technologies/sections/category-hero.json';
import technologiesPg_featuredIn from '../../../content/pages/technologies/sections/featured-in.json';
import technologiesPg_technologies from '../../../content/pages/technologies/sections/technologies.json';
import technologiesPg_technologyGroups from '../../../content/pages/technologies/sections/technology-groups.json';
import technologiesPg_testimonials from '../../../content/pages/technologies/sections/testimonials.json';

export const technologiesPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: technologiesPage, data: { blog: technologiesPg_blog, categoryHero: technologiesPg_categoryHero, featuredIn: technologiesPg_featuredIn, technologies: technologiesPg_technologies, technologyGroups: technologiesPg_technologyGroups, testimonials: technologiesPg_testimonials } as Partial<SectionDataMap> },
];
