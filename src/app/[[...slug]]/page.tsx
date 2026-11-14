import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, getPageSlugs, getSiteData } from '@/lib/cms';
import { SiteShell } from '@/components/layout/SiteShell';

type PageProps = { params: Promise<{ slug?: string[] }> };

/** "/" is the page with the slug "home"; "/a/b" is the page with the slug "a/b". */
const toSlug = (parts?: string[]) => (parts && parts.length > 0 ? parts.join('/') : 'home');

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  return slugs.map((slug) => ({ slug: slug === 'home' ? [] : slug.split('/') }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPage(toSlug((await params).slug));
  const metadata: Metadata = {};
  if (page?.seo?.title) metadata.title = page.seo.title;
  if (page?.seo?.description) metadata.description = page.seo.description;
  return metadata;
}

export default async function Page({ params }: PageProps) {
  const slug = toSlug((await params).slug);
  const [site, page] = await Promise.all([getSiteData(), getPage(slug)]);
  if (!page) notFound();
  return <SiteShell site={site} page={page} />;
}
