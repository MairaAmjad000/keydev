/**
 * Registry of the single blog article pages (content/pages/blog/posts/<slug>.json), all built from one template.
 * To add an article: create its JSON file in content/pages/blog/posts, import it below and add it to `posts`
 * (newest first), then add its card to content/pages/blog/sections/blog-list.json.
 */
import type { BlogCategoryTemplate, BlogListContent, BlogPostData, BlogPostTemplate, PageData } from '@/types';
import categoryTemplate from '../../../content/pages/blog/category-template.json';
import template from '../../../content/pages/blog/post-template.json';
import blogList from '../../../content/pages/blog/sections/blog-list.json';
import howToStartAnOnlineBusiness from '../../../content/pages/blog/posts/how-to-start-an-online-business.json';
import mobileAppSecurity from '../../../content/pages/blog/posts/mobile-app-security.json';
import onlineMarketplaceDevelopment from '../../../content/pages/blog/posts/online-marketplace-development.json';
import howToSellAnAppIdea from '../../../content/pages/blog/posts/how-to-sell-an-app-idea.json';
import howToGetFundingForAnApp from '../../../content/pages/blog/posts/how-to-get-funding-for-an-app.json';
import { buildBlogPostPage } from './blog-template';
import { buildBlogCategoryPage } from './blog-category-template';

const posts = [
  howToStartAnOnlineBusiness,
  mobileAppSecurity,
  onlineMarketplaceDevelopment,
  howToSellAnAppIdea,
  howToGetFundingForAnApp,
] as unknown as BlogPostData[];

export const blogPostPages: PageData[] = posts.map((post) =>
  buildBlogPostPage(post, posts, template as unknown as BlogPostTemplate, (blogList as unknown as BlogListContent).sidebar),
);

/** One page per category listed in the blog sidebar: /blog/category/<slug>. */
export const blogCategoryPages: PageData[] = (blogList as unknown as BlogListContent).sidebar.categories.items.map((category) =>
  buildBlogCategoryPage(category, blogList as unknown as BlogListContent, categoryTemplate as unknown as BlogCategoryTemplate),
);
