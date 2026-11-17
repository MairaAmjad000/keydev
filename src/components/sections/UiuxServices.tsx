import { Fragment } from 'react';
import type { UiuxServicesContent } from '@/types';
import { Icon } from '@/components/icons';

/** Four service cards: picture on top, a white card with round icon, title and text overlapping it. */
export function UiuxServices({ data }: { data: UiuxServicesContent }) {
  return (
    <section className="padding-6030 bg-light uiux-services-main">
      <div className="container">
        <div className="title">
          <span>{data.text}</span>
          {' '}
          <h2>{data.heading}</h2>
        </div>
        {' '}
        <div className="row">
          {data.items.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="col-lg-6 col-md-12 col-12 mb-30">
                <div className="uiux-service-box">
                  <div className="uiux-service-box-image">
                    <img className="rounded10 box-shadow" src={item.image.src} alt={item.image.alt} />
                  </div>
                  {' '}
                  <div className="uiux-service-content bg-white rounded10 box-shadow">
                    <div className="uiux-service-icon box-shadow">
                      <Icon name={item.icon} />
                    </div>
                    {' '}
                    <h3>{item.title}</h3>
                    {' '}
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
