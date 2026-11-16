import type { BlogPostBlock } from '@/types';

/** One rich-text block (paragraph, heading, list, image, quote or raw html) of an article or policy page. */
export function ContentBlock({ block }: { block: BlogPostBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.text}</p>;
    case 'heading': {
      const Tag = `h${block.level ?? 2}` as 'h2' | 'h3' | 'h4';
      return <Tag>{block.text}</Tag>;
    }
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Tag>
      );
    }
    case 'image':
      return (
        <figure className="blog-post-figure">
          <img className="rounded10" src={block.image.src} alt={block.image.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'quote':
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );
    case 'html':
      return <div dangerouslySetInnerHTML={{ __html: block.html }} />;
    default:
      return null;
  }
}
