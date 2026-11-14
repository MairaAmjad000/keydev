import { Fragment } from 'react';
import type { TechStackTabsContent } from '@/types';

/**
 * Bootstrap tabs of technology logos. Ids are prefixed (`idPrefix`) so this block can sit on the
 * same page as the "Technologies we Use" section without clashing ids.
 */
export function TechStackTabs({ data }: { data: TechStackTabsContent }) {
  const id = (tab: { id: string }) => `${data.idPrefix}-${tab.id}`;
  return (
    <section className="padding-60 bg-light ins-msg-how-build-main">
      <div className="container">
        <div className="title">
          <span>{data.text}</span>
          {' '}
          <h2>{data.heading}</h2>
        </div>
        {' '}
        <div className="technologies_tabs">
          <ul className="nav nav-tabs" role="tablist">
            {data.tabs.map((tab, i) => (
              <Fragment key={tab.id}>
                {i > 0 && ' '}
                <li>
                  <a
                    className={i === 0 ? 'active' : undefined}
                    id={`${id(tab)}-tab`}
                    data-toggle="tab"
                    href={`#${id(tab)}`}
                    role="tab"
                    aria-controls={id(tab)}
                    aria-selected={i === 0}
                  >
                    {tab.title}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
          {' '}
          <div className="tab-content">
            {data.tabs.map((tab, i) => (
              <Fragment key={tab.id}>
                {i > 0 && ' '}
                <div
                  className={i === 0 ? 'tab-pane fade show active' : 'tab-pane fade'}
                  id={id(tab)}
                  role="tabpanel"
                  aria-labelledby={`${id(tab)}-tab`}
                >
                  <ul className="technologies_icons d-flex align-items-center justify-content-center">
                    {tab.icons.map((icon, i2) => (
                      <li key={i2}>
                        <img className="lazy" data-src={icon.image.src} alt={icon.image.alt} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
