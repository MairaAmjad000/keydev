import { Fragment } from 'react';
import type { BlogListContent } from '@/types';
import { link } from '@/lib/utils/markup';

/**
 * Blog index: article rows on the left, sidebar (social, categories, tweets, Facebook, call to action)
 * on the right. Articles beyond `pageSize` start hidden; "Load More" (public/scripts/blog-page.js) reveals them.
 */
export function BlogList({ data }: { data: BlogListContent }) {
  const { sidebar } = data;
  const hasMore = data.items.length > data.pageSize;
  const otherCategories = data.items.length === 0 ? sidebar.categories.items.filter((c) => !c.active).slice(0, 8) : [];
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="blog-list-wrap" id="blog-list" data-page-size={data.pageSize}>
              {data.items.map((item, i) => (
                <div key={item.href} className={`blog-list-box${i >= data.pageSize ? ' d-none blog-list-more' : ''}`}>
                  <div className="blog-list-image box-shadow rounded10">
                    <a {...link(item.href)}>
                      <img className="rounded10" src={item.image.src} alt={item.image.alt} loading="lazy" />
                    </a>
                  </div>
                  {' '}
                  <div className="blog-list-info-box d-flex align-items-center">
                    <div className="blog-list-author-date d-flex align-items-center">
                      <div className="blog-list-author-image-wrap d-flex align-items-center">
                        <div className="blog-list-author-image box-shadow">
                          <img src={item.author.image.src} alt={item.author.image.alt} loading="lazy" />
                        </div>
                        {' '}
                        <a {...link(item.author.href)}>{item.author.name}</a>
                      </div>
                      {' '}
                      <span className="divider">|</span>
                      {' '}
                      <div className="blog-list-date">{item.date}</div>
                      {' '}
                      <span className="divider">|</span>
                    </div>
                    {' '}
                    <div className="blog-list-category">
                      <a {...link(item.category.href)}>{item.category.text}</a>
                    </div>
                  </div>
                  {' '}
                  <div className="blog-list-desc">
                    <h2>
                      <a {...link(item.href)}>{item.title}</a>
                    </h2>
                    {' '}
                    <p>{item.excerpt}</p>
                    {' '}
                    <a className="btn btn-custome waves-effect waves-light" {...link(item.href)}>
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {data.items.length === 0 && (data.emptyText || data.emptyTitle) && (
              <div className="blog-list-empty box-shadow rounded10 bg-white" role="status">
                <div className="blog-list-empty-icon" aria-hidden="true">
                  <svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M38 6H16a4 4 0 0 0-4 4v44a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V20L38 6z" />
                    <path d="M38 6v14h14" />
                    <path d="M22 32h20M22 40h12" />
                  </svg>
                </div>
                {data.emptyTitle && <h2 className="blog-list-empty-title">{data.emptyTitle}</h2>}
                {data.emptyText && <p className="blog-list-empty-text">{data.emptyText}</p>}
                {data.emptyButton && (
                  <a className="btn btn-custome waves-effect waves-light blog-list-empty-btn" {...link(data.emptyButton.href)}>
                    {data.emptyButton.text}
                  </a>
                )}
                {otherCategories.length > 0 && (
                  <div className="blog-list-empty-cats">
                    {data.emptyCategoriesTitle && <span className="blog-list-empty-cats-title">{data.emptyCategoriesTitle}</span>}
                    <ul>
                      {otherCategories.map((c, i) => (
                        <li key={i}>
                          <a {...link(c.href)}>{c.text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            {hasMore && (
              <div className="container mt-4">
                <div className="title">
                  <a className="btn btn-custome waves-effect waves-light" id="loadmore" href="#blog-list">
                    {data.loadMoreText}
                  </a>
                </div>
              </div>
            )}
          </div>
          {' '}
          <div className="col-lg-4 col-12 d-none d-lg-block">
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
            <div className="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
              <h3>{sidebar.tweets.title}</h3>
              <div className="view_latest_tweets" style={{ height: 400, overflowY: 'auto' }}>
                <a className="twitter-timeline" href={sidebar.tweets.href}>{sidebar.tweets.text}</a>
              </div>
            </div>
            {' '}
            <div className="blog-sidebar-box box-shadow rounded10 bg-white mb-30">
              <h3>{sidebar.facebook.title}</h3>
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
