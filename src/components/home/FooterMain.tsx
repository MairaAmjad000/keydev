import { Fragment } from 'react';
import type { FooterMainContent } from '@/types/content';
import { link } from '@/lib/markup';

export function FooterMain({ data }: { data: FooterMainContent }) {
  return (
    <div>
      <section className="footer-main">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 order-2 foot-center-col">
                <div className="foot-exp-wrap text-right">
                  <div className="foot-exp-box d-flex">
                    <div className="foot-exp-char">
                      <img
                        className="lazy"
                        data-src={data.image.src}
                        width={data.image.width}
                        height={data.image.height}
                        alt={data.image.alt}
                      />
                    </div>
                    {' '}
                    <div className="foot-exp-text-wrap text-center">
                      <div className="foot-exp-text-button rounded10 mb-30">
                        {data.exps.map((item, i) => (
                          <Fragment key={i}>
                            {i > 0 && ' '}
                            <span className={item.className}>
                              {item.text}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                      {' '}
                      <a className="btn-custome btn btn-lg waves-effect waves-light" {...link(data.link.href)}>
                        {data.link.text}
                      </a>
                    </div>
                  </div>
                  {' '}
                  <div className="foot-social text-center">
                    <ul className="header_social">
                      {data.items.map((item, i) => (
                        <Fragment key={i}>
                          {i > 0 && ' '}
                          <li>
                            <a
                              rel="noopener"
                              target="_blank"
                              title={item.link.title}
                              className={item.link.className}
                              {...link(item.link.href)}
                            />
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {' '}
              {data.footCenterCols.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <div className={item.className}>
                    <div className="foot-menu">
                      <h4>
                        {item.subheading}
                      </h4>
                      {' '}
                      <ul>
                        {item.items.map((item2, i2) => (
                          <Fragment key={i2}>
                            {i2 > 0 && ' '}
                            <li>
                              <a {...link(item2.link.href)}>
                                {item2.link.text}
                              </a>
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            {' '}
            <hr />
          </div>
        </div>
        {' '}
        <div className="footer-center">
          <div className="container">
            <div className="footer-center-top-content text-center">
              <p dangerouslySetInnerHTML={{ __html: data.text }} />
              {' '}
              <span dangerouslySetInnerHTML={{ __html: data.text2 }} />
            </div>
            {' '}
            <div className="footer-center-top-market">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="footer-center-market-list d-flex">
                    {data.items2.map((item, i) => (
                      <Fragment key={i}>
                        {i > 0 && ' '}
                        <div className="item">
                          <img
                            className="lazy"
                            data-src={item.image.src}
                            width={item.image.width}
                            height={item.image.height}
                            alt={item.image.alt}
                          />
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                {' '}
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center text-lg-right">
                  <a className="btn-custome btn waves-effect waves-light" {...link(data.link2.href)}>
                    {data.link2.text}
                  </a>
                </div>
              </div>
            </div>
            {' '}
            <hr />
          </div>
        </div>
        {' '}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center text-lg-left order-1 order-lg-0">
                <div className="foot-copy">
                  <p>
                    {data.text3}
                  </p>
                </div>
              </div>
              {' '}
              <div className="col-lg-7 col-md-12 col-sm-12 col-12 text-center text-lg-right order-0 order-lg-1">
                <ul className="foot-link">
                  {data.items3.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <li>
                        <a {...link(item.link.href)}>
                          {item.link.text}
                        </a>
                      </li>
                    </Fragment>
                  ))}
                </ul>
                {' '}
                <div className="foot-vat-no">
                  <p>
                    {data.text4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
