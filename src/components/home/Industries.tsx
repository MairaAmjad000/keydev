import { Fragment } from 'react';
import type { IndustriesContent } from '@/types/content';
import { Icon } from '@/components/icons';
import { link } from '@/lib/markup';

export function Industries({ data }: { data: IndustriesContent }) {
  return (
    <section className="padding-6030 bg-white">
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
        <div className="row">
          {data.blocks.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="solutions-box rounded10">
                  <div className="solutions-box-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <h4>
                    {item.subheading}
                  </h4>
                  {' '}
                  <p>
                    {item.text}
                  </p>
                  {' '}
                  <a
                    className="btn-custome btn-custome-small btn waves-effect waves-light"
                    {...link(item.link.href)}
                  >
                    {item.link.text}
                  </a>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
