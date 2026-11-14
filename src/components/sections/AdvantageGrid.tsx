import type { AdvantageGridContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Grid of equal-height cards, each with an icon, a title and a short text. */
export function AdvantageGrid({ data }: { data: AdvantageGridContent }) {
  return (
    <section className="bg-light padding-6030 web-advantages-section">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="web-advantages-wrap m-height-240">
          <div className="row justify-content-center">
            {data.items.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="web-advtanges-box mhbox box-shadow rounded10">
                  <div className="web-advantages-icon-title-wrap d-flex align-items-center">
                    <div className="web-advantages-icon rounded10">
                      <Icon name={item.icon} />
                    </div>
                    {' '}
                    <div className="web-advantages-title">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                  {' '}
                  <div className="web-advantages-content-box">
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
