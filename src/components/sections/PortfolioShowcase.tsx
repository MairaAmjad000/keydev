import { Fragment } from 'react';
import type { PortfolioShowcaseContent, PortfolioShowcaseItem } from '@/types';
import { Icon } from '@/components/icons';

const SEP_CLASS = { default: 'portfolio-preview-thumb-sep', opt2: 'portfolio-preview-thumb-sep-opt2', landscape: 'portfolio-preview-thumb-sep' };

function Thumb({ item }: { item: PortfolioShowcaseItem }) {
  const { layout, images } = item.thumb;
  if (layout === 'single') {
    return <img src={images[0]} alt="" loading="lazy" />;
  }
  const portrait = layout === 'landscape' ? undefined : 'portrait';
  const mainClass = `portfolio-preview-thumb-main${layout === 'opt2' ? ' portfolio-preview-thumb-main-opt2' : ''}${layout === 'landscape' ? ' landscapescreen' : ''}`;
  const sep = SEP_CLASS[layout];
  return (
    <div className={mainClass}>
      <img src={images[0]} alt="" className={portrait} loading="lazy" />
      {(['one', 'two', 'three'] as const).map((n, i) => (
        <div key={n} className={`${sep} ${n}`}>
          <img src={images[i + 1]} alt="" className={portrait} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function Row({ item }: { item: PortfolioShowcaseItem }) {
  const { logo } = item;
  return (
    <section
      className={`section portfolio-preview-box ${item.classes}`}
      data-hash={item.id}
      style={item.background ? { backgroundImage: `url("${item.background}")` } : undefined}
    >
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 col-md-12 col-sm-12 col-12${item.reverse ? ' order-lg-1' : ''}`}>
              <div className="portfolio-preview-content-box">
                <div className="portfolio-preview-main-logo">
                  <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={logo.className} loading="lazy" />
                  {item.logoText && (
                    <div className="portfolio-preview-main-logo-text">
                      <span className={`appname${item.logoText.nameClass ? ` ${item.logoText.nameClass}` : ''}`}>{item.logoText.name}</span>
                      {' '}
                      <span className="moreaboutapp">{item.logoText.tagline}</span>
                    </div>
                  )}
                </div>
                {item.title && <h3>{item.title}</h3>}
                <ul className="contentboxlist">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {item.paragraphs.map((html, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
                ))}
                {item.links && item.links.length > 0 && (
                  <div className="button-wrap">
                    {item.links.map((l, i) => (
                      <Fragment key={i}>
                        {i > 0 && ' '}
                        {l.image ? (
                          <a href={l.href} rel="noreferrer" target="_blank" title={l.title}>
                            <img src={l.image.src} alt={l.image.alt} width={l.image.width} height={l.image.height} />
                          </a>
                        ) : (
                          <a href={l.href} rel="noreferrer" target="_blank" className={l.className}>
                            {l.text}
                          </a>
                        )}
                      </Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="portfolio-preview-thumb text-center">
                <Thumb item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Filterable list of projects. Filtering (Isotope) and the scroll behaviour are in
 * public/scripts/portfolio-page.js; the first filter should be "*" (All).
 */
export function PortfolioShowcase({ data }: { data: PortfolioShowcaseContent }) {
  return (
    <div className="portfolio-preview-wrap isotop">
      <div className="portfolio-listing-section box-shadow option1">
        <div className="container">
          <div className="d-flex align-items-center">
            {data.filters.map((f, i) => (
              <div key={f.filter} className={`portfolio-listing-box${i === 0 ? ' current' : ''}`}>
                <div className="portfolio-listing-icon" data-filter={f.filter} data-value={f.filter.replace(/^\./, '')}>
                  <Icon name={f.icon} />
                  {' '}
                  <span>{f.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {data.items.map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </div>
  );
}
