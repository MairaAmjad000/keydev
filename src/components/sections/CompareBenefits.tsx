import type { CompareBenefitsContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/**
 * Before/after image slider (jquery.twentytwenty, started by /scripts/twentytwenty.js) above a grid
 * of icon benefit boxes.
 */
export function CompareBenefits({ data }: { data: CompareBenefitsContent }) {
  const { before, after } = data.compare;
  return (
    <section className="padding-6030 mvp-benefits-section bg-light">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="mvp-after-before-section box-shadow rounded10 o-hidden">
          <div className="twentytwenty-container">
            <img src={before.src} alt={before.alt} />
            {' '}
            <img src={after.src} alt={after.alt} />
          </div>
        </div>
        {' '}
        <div className="row justify-content-center">
          {data.items.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
              <div className="our-core-value-box rounded10">
                <div className="our-core-value-icon rounded10">
                  <Icon name={item.icon} />
                </div>
                {' '}
                <h5>{item.title}</h5>
                {' '}
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
