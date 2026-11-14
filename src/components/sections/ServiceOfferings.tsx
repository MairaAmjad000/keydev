import { Fragment } from 'react';
import type { ServiceOfferingsContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/**
 * Sticky tab bar (desktop) + one alternating text/image row per service. The bar and the rows are
 * built from the same `items`, so the tabs always match the rows. Behaviour lives in
 * /scripts/category-page.js (sticky bar, smooth scroll, active tab).
 */
export function ServiceOfferings({ data }: { data: ServiceOfferingsContent }) {
  return (
    <section className="padding-60 bg-light what-we-offer-main">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} />
      </div>
      {' '}
      <div className="what-we-offer-main-tabs">
        <div className="what-we-offer-main-slider-section bg-light d-none d-lg-block top-sticy">
          <div className="container">
            <div className="what-we-offer-main-slider what-we-offer-main-item">
              {data.items.map((item, i) => (
                <div key={item.id} className={i === 0 ? 'what-we-offer-main-item-box active' : 'what-we-offer-main-item-box'}>
                  <a href={`#${item.id}`}>
                    <div className="what-we-offer-main-item-icon">
                      <Icon name={item.navIcon} />
                    </div>
                    {' '}
                    <div className="what-we-offer-main-item-title">{item.navTitle}</div>
                  </a>
                </div>
              ))}
            </div>
            {' '}
            <div className="border-dashed" />
          </div>
        </div>
        {' '}
        <div className="what-we-offer-main-listing">
          <div className="container">
            {data.items.map((item) => (
              <Fragment key={item.id}>
                <div className="row" id={item.id}>
                  <div className={`col-lg-6 col-md-12 col-12 ${item.reverse ? 'order-lg-1 ' : ''}mb-4 m-lg-0`}>
                    <div className="what-we-offer-main-listing-content">
                      <div className="what-we-offer-main-listing-title d-inline-flex align-items-center">
                        <div className="number">
                          {item.number}
                          <span>{item.number}</span>
                        </div>
                        {' '}
                        <h2 className="m-0">{item.heading}</h2>
                      </div>
                      {' '}
                      <div dangerouslySetInnerHTML={{ __html: item.bodyHtml }} />
                      {' '}
                      <ul>
                        {item.bullets.map((b, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
                        ))}
                      </ul>
                      {' '}
                      <a className="btn btn-custome waves-effect waves-light" {...link(item.link.href)}>
                        {item.link.text}
                      </a>
                    </div>
                  </div>
                  {' '}
                  <div className="col-lg-6 col-md-12 col-12 text-ce text-center">
                    <div className="what-we-offer-main-listing-img">
                      <img
                        className="lazy rounded10"
                        data-src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                      />
                    </div>
                  </div>
                </div>
                {' '}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="nofixed" />
    </section>
  );
}
