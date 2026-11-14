import type { ImageCardsContent } from '@/types';
import { link } from '@/lib/utils/markup';
import { SectionTitle } from './shared/SectionTitle';

/** Three-up cards: picture, title, text and a small button. */
export function ImageCards({ data }: { data: ImageCardsContent }) {
  return (
    <section className="padding-6030 mvp-what-we-offer-section bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={data.text2 ? [data.text2] : []} />
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
              <div className="mvp-what-we-offer-box rounded10">
                <div className="mvp-what-we-offer-image rounded10 o-hidden">
                  <img className="lazy" data-src={item.image.src} alt={item.image.alt} />
                </div>
                {' '}
                <h4>{item.title}</h4>
                {' '}
                <p>{item.text}</p>
                {' '}
                <a className="btn-custome btn-custome-small btn waves-effect waves-light" {...link(item.link.href)}>
                  {item.link.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
