import type { OfferCardsContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** Three-up cards: illustration on top, boxed title + text below (equal-height boxes). */
export function OfferCards({ data }: { data: OfferCardsContent }) {
  return (
    <section className="padding-6030 mvp-services-offer-section m-height-280 bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
              <div className="mvp-services-offer-box">
                <div className="mvp-services-offer-image text-center">
                  <img className="lazy" data-src={item.image.src} alt={item.image.alt} />
                </div>
                {' '}
                <div className="mvp-services-offer-content-box mhbox rounded10 text-center box-shadow bg-white">
                  <h3>{item.title}</h3>
                  {' '}
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
