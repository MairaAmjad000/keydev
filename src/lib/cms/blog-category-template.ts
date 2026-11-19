/**
 * Template for every blog category page (/blog/category/<slug>). The categories come from the blog index's sidebar,
 * the articles from its list, and the banner / texts / SEO from content/pages/blog/category-template.json,
 * so adding a category in the admin panel is enough to get its page. Global sections are appended by withGlobalSections.
 */
import type { BlogCategoryTemplate, BlogListContent, PageData } from '@/types';

const fill = (text: string, category: string) => text.replaceAll('{category}', category);

export const categorySlug = (href: string) => href.replace(/\/+$/, '').split('/').pop() ?? '';

export function buildBlogCategoryPage(
  category: { text: string; href: string },
  blogList: BlogListContent,
  template: BlogCategoryTemplate,
): PageData {
  const slug = categorySlug(category.href);
  return {
    slug: `blog/category/${slug}`,
    seo: {
      title: fill(template.seo.titleTemplate, category.text),
      description: fill(template.seo.descriptionTemplate, category.text),
    },
    sections: [
      {
        type: 'categoryHero',
        data: {
          sectionClass: template.heroSectionClass,
          textClass: 'text-center',
          image: template.heroImage,
          heading: fill(template.headingTemplate, category.text),
          text: template.descriptions?.[slug] ?? fill(template.textTemplate, category.text),
          links: [],
          breadcrumbs: [
            { text: template.breadcrumbs.home, href: '/' },
            { text: template.breadcrumbs.blog, href: '/blog' },
            { text: category.text },
          ],
        },
      },
      {
        type: 'blogList',
        data: {
          pageSize: template.pageSize,
          loadMoreText: template.loadMoreText,
          emptyText: template.emptyText,
          emptyTitle: template.emptyTitle,
          emptyButton: template.emptyButton,
          emptyCategoriesTitle: template.emptyCategoriesTitle,
          items: blogList.items
            .filter((item) => item.category.text === category.text)
            .map((item) => ({ ...item, buttonText: template.buttonText })),
          sidebar: {
            ...blogList.sidebar,
            categories: {
              ...blogList.sidebar.categories,
              items: blogList.sidebar.categories.items.map((c) => ({ ...c, active: c.text === category.text })),
            },
          },
        },
      },
    ],
  };
}
