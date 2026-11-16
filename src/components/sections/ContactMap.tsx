import { Fragment } from 'react';
import type { ContactMapContent } from '@/types';

/** Office tabs (photo + city) beside a Google Maps embed; tab switching is in public/scripts/contact-page.js. */
export function ContactMap({ data }: { data: ContactMapContent }) {
  return (
    <section className="contact-map-main clearfix d-flex">
      <ul className="map-tabs-nav">
        {data.tabs.map((tab, i) => (
          <Fragment key={tab.id}>
            {i > 0 && ' '}
            <li className={i === 0 ? 'tab-active' : undefined}>
              <a href={`#${tab.id}`}>
                <img src={tab.image.src} alt={tab.image.alt} loading="lazy" />
                {' '}
                <h4>{tab.title}</h4>
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
      {' '}
      <div className="map-tabs-iframe">
        {data.tabs.map((tab, i) => (
          <Fragment key={tab.id}>
            {i > 0 && ' '}
            <div className="mapiframe" id={tab.id} style={i === 0 ? undefined : { display: 'none' }}>
              <iframe
                src={tab.mapUrl}
                title={`${tab.title} office map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
