import { Fragment } from 'react';
import type { ValuesContent } from '@/types/content';
import { Icon } from '@/components/icons';

export function Values({ data }: { data: ValuesContent }) {
  return (
    <section className="padding-60 bg-light">
      <div className="container">
        <div className="title">
          <span>
            {data.text}
          </span>
          {' '}
          <h2>
            {data.heading}
          </h2>
          {' '}
          <p>
            {data.text2}
          </p>
        </div>
        {' '}
        <div className="Feature-slider d-flex p-relative o-hidden">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="item">
                <div className="why-choose-box">
                  <Icon name={item.icon} />
                  {' '}
                  <h5>
                    {item.subheading}
                  </h5>
                  {' '}
                  <p>
                    {item.text}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
