import { Fragment } from 'react';
import type { TechnologiesContent } from '@/types';
import { link } from '@/lib/utils/markup';

export function Technologies({ data }: { data: TechnologiesContent }) {
  return (
    <section className="padding-60 bg-white">
      <a title={data.link.title} {...link(data.link.href)}>
        {' '}
      </a>
      <div className="container">
        <a title={data.link2.title} {...link(data.link2.href)}>
          {' '}
          <div className="title">
            <span>
              {data.link2.text}
            </span>
            {' '}
            <h2>
              {data.link2.heading}
            </h2>
          </div>
          {' '}
        </a>
        <div className="technologies_tabs">
          <a title={data.link3.title} {...link(data.link3.href)}>
            {' '}
          </a>
          <ul className="nav nav-tabs" id="technologies_tabs" role="tablist">
            <a title={data.link4.title} {...link(data.link4.href)}>
              {' '}
            </a>
            <li>
              <a title={data.link5.title} {...link(data.link5.href)} />
              <a
                className="active"
                id="mobile-technologies-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="mobile-technologies"
                aria-selected="true"
                {...link(data.link6.href)}
              >
                {data.link6.text}
              </a>
            </li>
            {' '}
            {data.items.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <li>
                  <a
                    data-toggle="tab"
                    role="tab"
                    aria-selected="true"
                    id={item.link.id}
                    aria-controls={item.link.ariaControls}
                    {...link(item.link.href)}
                  >
                    {item.link.text}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
          {' '}
          <div className="tab-content" id="technologies_tabs_Content">
            {data.blocks.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div role="tabpanel" className={item.className} id={item.id} aria-labelledby={item.ariaLabelledby}>
                  <ul className="technologies_icons d-flex align-items-center justify-content-center">
                    {item.items.map((item2, i2) => (
                      <Fragment key={i2}>
                        {i2 > 0 && ' '}
                        <li>
                          <img
                            className="lazy"
                            data-src={item2.image.src}
                            title={item2.image.title}
                            alt={item2.image.alt}
                            width={item2.image.width}
                            height={item2.image.height}
                          />
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
