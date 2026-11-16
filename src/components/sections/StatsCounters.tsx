import { Fragment } from 'react';
import type { StatsCountersContent } from '@/types';

/** Row of animated number counters (the animation script reads `data-count`). */
export function StatsCounters({ data }: { data: StatsCountersContent }) {
  return (
    <section className="padding-00-60 about-us-review-section bg-light">
      <div className="container">
        <ul className="counter-section">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <li>
                <div className="counter-image">
                  <img src={item.image.src} alt={item.image.alt} />
                </div>
                {' '}
                <div className="counter_text">
                  <div className="counter" data-count={item.count}>
                    {item.count}
                  </div>
                  {' '}
                  <i className={item.iconClass} />
                  {' '}
                  <p dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
