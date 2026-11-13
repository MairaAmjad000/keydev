import { Fragment } from 'react';
import type { BlogContent } from '@/types/content';
import { link } from '@/lib/markup';

export function Blog({ data }: { data: BlogContent }) {
  return (
    <div>
      <section className="padding-60 bg-light">
        <div className="container">
          <div className="title">
            <span>
              {data.text}
            </span>
            {' '}
            <h2>
              {data.heading}
            </h2>
          </div>
          {' '}
          <div className="blog-slider d-flex p-relative o-hidden">
            {data.items.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className="item">
                  <div className="blog-post format-standard-image ">
                    <div className="blog-post_wrapper">
                      <div className="blog-post_media">
                        <div className="blog-post_media_part">
                          <a
                            className="blog-post_feature-link"
                            title={item.blogPostFeatureLink.title}
                            {...link(item.blogPostFeatureLink.href)}
                          >
                            <img
                              className="lazy"
                              data-src={item.blogPostFeatureLink.image.src}
                              alt={item.blogPostFeatureLink.image.alt}
                              width={item.blogPostFeatureLink.image.width}
                              height={item.blogPostFeatureLink.image.height}
                            />
                          </a>
                        </div>
                      </div>
                      {' '}
                      <div className="blog-post_content">
                        <h3 className="blog-post_title">
                          <a {...link(item.link.href)}>
                            {item.link.text}
                          </a>
                        </h3>
                        {' '}
                        <div className="blog-post_text">
                          <p>
                            {item.text}
                          </p>
                        </div>
                        {' '}
                        <div className="blog-post_meta-wrap">
                          <div className="meta-wrapper">
                            <span className="date_post">
                              {item.datePost}
                            </span>
                          </div>
                          {' '}
                          <div className="blog-post_info-wrap">
                            <div className="share_post-container">
                              <a
                                className="fas fa-arrow-right"
                                title={item.link2.title}
                                {...link(item.link2.href)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
