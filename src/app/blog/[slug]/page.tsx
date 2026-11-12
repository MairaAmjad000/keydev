import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionList } from "@/components/sections/SectionList";
import { connectCta, getPost, posts } from "@/lib/seed";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-page max-w-3xl py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-brand">
          <ArrowLeft className="size-4" aria-hidden /> All articles
        </Link>
        <time dateTime={post.published_at} className="mt-6 block text-sm text-muted">
          {new Date(post.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </time>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight text-ink">{post.title}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt="" className="mt-8 w-full rounded-card" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
      <SectionList sections={[connectCta]} />
    </>
  );
}
