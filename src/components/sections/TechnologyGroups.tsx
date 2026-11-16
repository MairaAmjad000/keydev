import { Fragment } from 'react';
import type { TechnologyGroupsContent } from '@/types';
import { Icon } from '@/components/icons';

/**
 * Sticky tab bar (desktop) + one block per technology group (title, intro and a grid of logos).
 * Same bar as ServiceOfferings; sticky behaviour, smooth scroll and active tab come from
 * /scripts/category-page.js.
 */
export function TechnologyGroups({ data }: { data: TechnologyGroupsContent }) {
  return (
    <section className="padding-60 bg-white">
      <div className="what-we-offer-main-tabs">
        <div className="what-we-offer-main-slider-section bg-white d-none d-lg-block top-sticy">
          <div className="container">
            <div className="what-we-offer-main-slider what-we-offer-main-item">
              {data.groups.map((group, i) => (
                <div key={group.id} className={i === 0 ? 'what-we-offer-main-item-box active' : 'what-we-offer-main-item-box'}>
                  <a href={`#${group.id}`}>
                    <div className="what-we-offer-main-item-icon">
                      <Icon name={group.navIcon} />
                    </div>
                    {' '}
                    <div className="what-we-offer-main-item-title">{group.navTitle}</div>
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
            {data.groups.map((group) => (
              <Fragment key={group.id}>
                <div className="row" id={group.id}>
                  <div className="col-12">
                    <div className="technology-content-main">
                      <div className="title max-wid-600 text-center m-0">
                        <h2>{group.heading}</h2>
                        {' '}
                        <p>{group.text}</p>
                      </div>
                      {' '}
                      <ul className="row technology-box">
                        {group.logos.map((logo, i) => (
                          <Fragment key={i}>
                            {i > 0 && ' '}
                            <li className="col-lg-3 col-md-4 col-sm-6 col-12">
                              <img src={logo.src} alt={logo.alt} loading="lazy" />
                            </li>
                          </Fragment>
                        ))}
                      </ul>
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
