import type { PolicyContentContent } from '@/types';
import { link } from '@/lib/utils/markup';
import { ContentBlock } from './shared/ContentBlock';

/**
 * Legal document (privacy policy, terms, ...): sticky contents list on the left, the document on the right.
 * Text styling reuses the article rules (.blog-post-body) from blog-post.css.
 */
export function PolicyContent({ data }: { data: PolicyContentContent }) {
  const hasContents = Boolean(data.contentsTitle) && data.sections.length > 0;
  return (
    <section id="policy">
      <div className="container">
        <div className="row">
          {hasContents && (
            <div className="col-lg-3 d-none d-lg-block">
              <nav className="policy-contents blog-sidebar-box box-shadow rounded10 bg-white" aria-label={data.contentsTitle}>
                <h3>{data.contentsTitle}</h3>
                <ul className="blog-cat-list">
                  {data.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.heading}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
          <div className={hasContents ? 'col-lg-9 col-12' : 'col-12'}>
            <div className="policy-document box-shadow rounded10 bg-white blog-post-body">
              {data.lastUpdated && (
                <p className="policy-updated">
                  <strong>{data.lastUpdated.label}:</strong> {data.lastUpdated.date}
                </p>
              )}
              {data.intro?.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
              {data.sections.map((section) => (
                <div key={section.id} id={section.id} className="policy-section">
                  <h2>{section.heading}</h2>
                  {section.body.map((block, i) => (
                    <ContentBlock key={i} block={block} />
                  ))}
                </div>
              ))}
              {data.contact && (
                <div className="policy-contact">
                  <h3>{data.contact.heading}</h3>
                  <p>{data.contact.text}</p>
                  <p>
                    <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                  </p>
                  {data.contact.button && (
                    <a className="btn btn-custome waves-effect waves-light" {...link(data.contact.button.href)}>
                      {data.contact.button.text}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
