import { Fragment } from 'react';
import type { ClientReviewsContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** Two-column grid of client testimonial cards (photo, name, country, star rating, quote). */
export function ClientReviews({ data }: { data: ClientReviewsContent }) {
  return (
    <section className="padding-60 tideway-review-section bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.paragraph ? [data.paragraph] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
                <div className="tideway-box box-shadow rounded10">
                  <div className="tideway-top d-flex">
                    <div className="tideway-image box-shadow">
                      <img src={item.image.src} alt={item.image.alt} loading="lazy" />
                    </div>
                    {' '}
                    <div className="tideway-client-info">
                      <div className="name">
                        <strong>{item.name}</strong>
                        {' '}
                        <span>I</span>
                        {' '}
                        {item.country}
                      </div>
                      {' '}
                      <div className="ratedbtclient">{item.ratedByText}</div>
                      {' '}
                      <div className="ratingstar">
                        {Array.from({ length: item.rating }, (_, s) => (
                          <Fragment key={s}>
                            {s > 0 && ' '}
                            <i className="fas fa-star" />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  {' '}
                  <div className="tideway-review-text">
                    <sub className="openquote">“</sub>
                    {' '}
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    <sup className="closequote">”</sup>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
