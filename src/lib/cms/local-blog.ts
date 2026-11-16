/**
* GENERATED registry of the blog index page (content/pages/blog). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import blogPage from '../../../content/pages/blog/page.json';
import blog_blogList from '../../../content/pages/blog/sections/blog-list.json';
import blog_categoryHero from '../../../content/pages/blog/sections/category-hero.json';
import blog_testimonials from '../../../content/pages/blog/sections/testimonials.json';

export const blogPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: blogPage, data: { blogList: blog_blogList, categoryHero: blog_categoryHero, testimonials: blog_testimonials } as Partial<SectionDataMap> },
];
