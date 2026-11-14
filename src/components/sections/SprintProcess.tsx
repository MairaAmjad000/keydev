import type { SprintProcessContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/** Numbered step cards in a 3-column grid; each card can set its own grid order per breakpoint. */
export function SprintProcess({ data }: { data: SprintProcessContent }) {
  return (
    <section className="padding-60-00 mvp-process-dev-section bg-white">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="mvp-process-dev-box-wrap">
          <div className="row">
            {data.items.map((item, i) => (
              <div
                key={i}
                className={`wow fadeIn col-lg-4 col-md-6 col-sm-12 col-12 ${item.orderClass}`}
                data-wow-duration=".3s"
                data-wow-delay={item.dataWowDelay}
              >
                <div className="mvp-process-dev-box rounded10">
                  <div className="mvp-process-dev-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <div className="mvp-process-dev-content">
                    <h6>{item.title}</h6>
                    {' '}
                    <p>{item.text}</p>
                  </div>
                  {' '}
                  <div className="num">{item.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
