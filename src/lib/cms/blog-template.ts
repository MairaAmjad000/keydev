/**
 * Template for every single blog article. An article only holds its own data (content/pages/blog/posts/<slug>.json);
 * the banner, breadcrumb, sidebar, labels and related articles come from here, so all posts look and behave the same.
 * The global sections (Connect With Us, Schedule Meeting, Engagement Models, Locations) are appended after the
 * page's own blocks by withGlobalSections, exactly as on every other page.
 */
import type { BlogListContent, BlogPostData, BlogPostTemplate, PageData } from '@/types';

const postHref = (post: BlogPostData) => `/blog/${post.slug}`;

export function buildBlogPostPage(
  post: BlogPostData,
  allPosts: BlogPostData[],
  template: BlogPostTemplate,
  sidebar: BlogListContent['sidebar'],
): PageData {
  // Same category first, then the rest, newest-first order as stored; never the post itself.
  const others = allPosts.filter((p) => p.slug !== post.slug);
  const related = [...others.filter((p) => p.category.text === post.category.text), ...others.filter((p) => p.category.text !== post.category.text)]
    .slice(0, template.relatedCount)
    .map((p) => ({ title: p.title, href: postHref(p), image: p.image, date: p.date, category: p.category }));

  return {
    slug: `blog/${post.slug}`,
    seo: post.seo ?? { title: `${post.title} | KeyDevs Technologies` },
    sections: [
      {
        type: 'categoryHero',
        data: {
          sectionClass: template.heroSectionClass,
          textClass: 'text-center',
          image: template.heroImage,
          heading: post.title,
          text: '',
          links: [],
          breadcrumbs: [
            { text: template.breadcrumbs.home, href: '/' },
            { text: template.breadcrumbs.blog, href: '/blog' },
            { text: post.title },
          ],
        },
      },
      {
        type: 'blogPost',
        data: {
          title: post.title,
          image: post.image,
          author: post.author,
          date: post.date,
          category: post.category,
          readTime: post.readTime,
          body: post.body,
          tags: post.tags,
          labels: template.labels,
          related,
          sidebar: {
            social: sidebar.social,
            cta: sidebar.cta,
            categories: {
              ...sidebar.categories,
              items: sidebar.categories.items.map((c) => ({ ...c, active: c.text === post.category.text })),
            },
          },
        },
      },
    ],
  };
}
