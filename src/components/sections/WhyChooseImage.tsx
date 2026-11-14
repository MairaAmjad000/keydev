import type { WhyChooseImageContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Picture on the left (desktop), a card with icon rows on the right. */
export function WhyChooseImage({ data }: { data: WhyChooseImageContent }) {
  return (
    <section className="padding-60 mvp-why-choose-dev-section bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 col-left d-none d-lg-block">
            <img className="lazy box-shadow rounded10" data-src={data.image.src} alt={data.image.alt} />
          </div>
          {' '}
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 col-right mb-40">
            <div className="mvp-why-choose-dev-box-wrap box-shadow rounded10">
              {data.items.map((item, i) => (
                <div key={i} className="mvp-why-choose-dev-box">
                  <div className="mvp-why-choose-dev-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <div className="mvp-why-choose-dev-content">
                    <h6>{item.title}</h6>
                    {' '}
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
