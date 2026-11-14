import { Fragment } from 'react';
import type { LocationsContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';

export function Locations({ data }: { data: LocationsContent }) {
  return (
    <div>
      <footer className="padding-60 bg-white">
        <div className="container">
          <div className="title">
            <span>
              {data.text}
              {' '}
            </span>
            {' '}
            <h2>
              {data.heading}
            </h2>
          </div>
          {' '}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-12 mb-md-4 mb-0">
              <div className="footer_box">
                <div className="row align-items-end justify-content-between">
                  <div className="col-12 col-sm-12">
                    <div className="footer_box_img mb-30">
                      <img
                        className="lazy box-shadow rounded10"
                        data-src={data.boxShadow.src}
                        alt={data.boxShadow.alt}
                        width={data.boxShadow.width}
                        height={data.boxShadow.height}
                      />
                    </div>
                    {' '}
                    <div className="footer_box_add">
                      <h5>
                        {data.subheading}
                      </h5>
                      {' '}
                      <ul>
                        <li>
                          <i>
                            {' '}
                            <Icon name="svg-e4c9d3" />
                            {' '}
                          </i>
                          {' '}
                          <p>
                            {data.text2}
                          </p>
                        </li>
                        {' '}
                        {data.items.map((item, i) => (
                          <Fragment key={i}>
                            {i > 0 && ' '}
                            <li>
                              <i>
                                {' '}
                                <Icon name={item.icon} />
                                {' '}
                              </i>
                              {' '}
                              <p>
                                <a {...link(item.link.href)}>
                                  {item.link.text}
                                </a>
                              </p>
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            {data.blocks.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className={item.className}>
                  <div className="footer_box">
                    <div className="row align-items-end justify-content-between">
                      <div className="col-12 col-sm-12">
                        <div className="footer_box_img mb-30">
                          <img
                            className="lazy box-shadow rounded10"
                            data-src={item.boxShadow.src}
                            alt={item.boxShadow.alt}
                            width={item.boxShadow.width}
                            height={item.boxShadow.height}
                          />
                        </div>
                        {' '}
                        <div className="footer_box_add">
                          <h5>
                            {item.subheading}
                          </h5>
                          {' '}
                          <ul>
                            <li>
                              <i>
                                {' '}
                                <Icon name="svg-e4c9d3" />
                                {' '}
                              </i>
                              {' '}
                              <p>
                                {item.text}
                              </p>
                            </li>
                            {' '}
                            {item.items.map((item2, i2) => (
                              <Fragment key={i2}>
                                {i2 > 0 && ' '}
                                <li>
                                  <i>
                                    {' '}
                                    <Icon name={item2.icon} />
                                    {' '}
                                  </i>
                                  {' '}
                                  <p>
                                    <a {...link(item2.link.href)}>
                                      {item2.link.text}
                                    </a>
                                  </p>
                                </li>
                              </Fragment>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
