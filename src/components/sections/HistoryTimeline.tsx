import { Fragment } from 'react';
import type { HistoryTimelineContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Company history: a slider of year cards linked to a year strip (Slick, see public/scripts/about-page.js). */
export function HistoryTimeline({ data }: { data: HistoryTimelineContent }) {
  return (
    <section className="padding-6030 our-history-progress-section bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.paragraph ? [data.paragraph] : []} />
        {' '}
        <div className="our-history-progress-top">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center">
              <div className="our-history-detail-image">
                <img src={data.image.src} alt={data.image.alt} />
              </div>
            </div>
            {' '}
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="our-history-content-wrap box-shadow rounded10">
                <div className="our-history-content-slider">
                  {data.items.map((item, i) => (
                    <div key={i}>
                      <div className="our-history-detail-box">
                        <div className="our-history-detail-box-title-wrap">
                          <div className="our-history-detail-num">{item.year}</div>
                          {' '}
                          <div className="our-history-detail-title">{item.title}</div>
                        </div>
                        {' '}
                        <div className="our-history-detail-icon">
                          <Icon name={item.icon} />
                        </div>
                        {' '}
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {' '}
      <div className="our-history-progress-bottom">
        <div className="container">
          <div className="our-history-year-slider">
            {data.items.map((item, i) => (
              <Fragment key={i}>
                <div>
                  <div className="our-history-year-box">{item.year}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
