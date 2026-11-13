import { Fragment } from 'react';
import type { ProcessContent } from '@/types/content';
import { Icon } from '@/components/icons';

export function Process({ data }: { data: ProcessContent }) {
  return (
    <section className="padding-6030 bg-white o-hidden">
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
        <div className="row justify-content-center d-none d-lg-flex">
          {data.processItemsList.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div
                className="col-lg-3 process-items wow fadeIn"
                data-wow-duration="0.2s"
                data-wow-delay={item.dataWowDelay}
              >
                <i className={item.icon.className} />
                {' '}
                <div className="process-box">
                  <div className="process-box-icon">
                    <Icon name={item.icon2} />
                  </div>
                  {' '}
                  <h4>
                    {item.subheading}
                  </h4>
                  {' '}
                  <ul>
                    {item.items.map((item2, i2) => (
                      <Fragment key={i2}>
                        {i2 > 0 && ' '}
                        <li dangerouslySetInnerHTML={{ __html: item2.html }} />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        {' '}
        <div className="row justify-content-center flex-lg-row-reverse  d-none d-lg-flex">
          <div className="col-lg-3 pl-20 wow fadeIn" data-wow-duration="0.2s" data-wow-delay="0.8s">
            <div className="process-box">
              <div className="process-box-icon">
                <Icon name="svg-a93881" />
              </div>
              {' '}
              <h4>
                {data.subheading}
              </h4>
              {' '}
              <ul>
                {data.items.map((item, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <li dangerouslySetInnerHTML={{ __html: item.html }} />
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
          {' '}
          {data.processItemsList2.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div
                className="col-lg-3 process-items wow fadeIn"
                data-wow-duration="0.2s"
                data-wow-delay={item.dataWowDelay}
              >
                <i className="fas fa-angle-left" />
                {' '}
                <div className="process-box">
                  <div className="process-box-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <h4>
                    {item.subheading}
                  </h4>
                  {' '}
                  <ul>
                    {item.items.map((item2, i2) => (
                      <Fragment key={i2}>
                        {i2 > 0 && ' '}
                        <li dangerouslySetInnerHTML={{ __html: item2.html }} />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        {' '}
        <div className="process-slider d-lg-none p-relative">
          {data.items2.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <div className="item">
                <div className="process-box">
                  <div className="process-box-icon">
                    <Icon name={item.icon} />
                  </div>
                  {' '}
                  <h4>
                    {item.subheading}
                  </h4>
                  {' '}
                  <ul>
                    {item.items.map((item2, i2) => (
                      <Fragment key={i2}>
                        {i2 > 0 && ' '}
                        <li dangerouslySetInnerHTML={{ __html: item2.html }} />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
