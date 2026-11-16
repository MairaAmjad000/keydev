import { Fragment } from 'react';
import type { BlogPostContent } from '@/types';
import { ContentBlock } from './shared/ContentBlock';
import { link } from '@/lib/utils/markup';

/**
 * Single blog article (one template for every post): article card on the left (picture, author / date /
 * category line, body blocks, tags, author box, back link, related articles), sidebar on the right.
 * The page's hero banner and the global sections after it are separate blocks of the page.
 */
export function BlogPost({ data }: { data: BlogPostContent }) {
  const { sidebar, labels } = data;
  return (
    <section id="blog-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <article className="blog-post-article box-shadow rounded10 bg-white">
              <div className="blog-post-image">
                <img className="rounded10" src={data.image.src} alt={data.image.alt} />
              </div>
              <div className="blog-list-info-box blog-post-meta d-flex align-items-center flex-wrap">
                <div className="blog-list-author-date d-flex align-items-center">
                  <div className="blog-list-author-image-wrap d-flex align-items-center">
                    <div className="blog-list-author-image box-shadow">
                      <img src={data.author.image.src} alt={data.author.image.alt} loading="lazy" />
                    </div>
                    {' '}
                    <a {...link(data.author.href)}>
                      <span className="blog-post-by">{labels.by} </span>
                      {data.author.name}
                    </a>
                  </div>
                  {' '}
                  <span className="divider">|</span>
                  {' '}
                  <div className="blog-list-date">{data.date}</div>
                  {data.readTime && (
                    <>
                      {' '}
                      <span className="divider">|</span>
                      {' '}
                      <div className="blog-list-date">{data.readTime}</div>
                    </>
                  )}
                  {' '}
                  <span className="divider">|</span>
                </div>
                {' '}
                <div className="blog-list-category">
                  <a {...link(data.category.href)}>{data.category.text}</a>
                </div>
              </div>
              <div className="blog-post-body">
                {data.body.map((block, i) => (
                  <ContentBlock key={i} block={block} />
                ))}
              </div>
              {data.tags && data.tags.length > 0 && (
                <div className="blog-post-tags">
                  <strong>{labels.tagsTitle}</strong>
                  {data.tags.map((tag, i) => (
                    <Fragment key={i}>
                      {' '}
                      {tag.href ? <a {...link(tag.href)}>{tag.text}</a> : <span>{tag.text}</span>}
                    </Fragment>
                  ))}
                </div>
              )}
              <div className="blog-post-back">
                <a className="btn btn-custome waves-effect waves-light" {...link(labels.backHref)}>
                  {labels.backText}
                </a>
              </div>
            </article>
            {data.related.length > 0 && (
              <div className="blog-post-related">
                <h3>{labels.relatedTitle}</h3>
                <div className="row">
                  {data.related.map((item) => (
                    <div key={item.href} className="col-md-4 col-sm-6 col-12 mb-30">
                      <div className="blog-post-related-card box-shadow rounded10 bg-white">
                        <a {...link(item.href)}>
                          <img src={item.image.src} alt={item.image.alt} loading="lazy" />
                        </a>
                        <div className="blog-post-related-info">
                          <span className="blog-list-date">{item.date}</span>
                          <h4>
                            <a {...link(item.href)}>{item.title}</a>
                          </h4>
                          <a className="blog-post-related-cat" {...link(item.category.href)}>
                            {item.category.text}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {' '}
          <div className="col-lg-4 col-12">
            <div className="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
              <h3>{sidebar.social.title}</h3>
              <ul className="header_social">
                {sidebar.social.items.map((s, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <li>
                      <a href={s.href} target="_blank" rel="noreferrer" className={s.iconClass} aria-label={s.iconClass.split(' ').pop()} />
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
            {' '}
            <div className="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
              <h3>{sidebar.categories.title}</h3>
              <ul className="blog-cat-list">
                {sidebar.categories.items.map((c, i) => (
                  <li key={i}>
                    <a className={c.active ? 'active' : undefined} {...link(c.href)}>{c.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {' '}
            <div className="blog-sidebar-box box-shadow rounded10 bg-white mb-30 p-0 o-hidden">
              <div className="blog-sidebar-cta text-center p-relative">
                <a {...link(sidebar.cta.href)}>
                  <div className="overlaytext">
                    <span>{sidebar.cta.text}</span>
                    {' '}
                    <div className="btn btn-custome waves-effect waves-light">{sidebar.cta.buttonText}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
