import { Fragment } from 'react';
import type { EngagementContent } from '@/types/content';
import { link, Center } from '@/lib/markup';

export function Engagement({ data }: { data: EngagementContent }) {
  return (
    <section className="padding-60 bg-light partnership-main">
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
        <div className="row mt-5 hire-col">
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="row justify-content-center">
              {data.blocks.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <div className="col-4 col-md-4">
                    <div className="hire_box">
                      <img
                        className="lazy"
                        data-src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                      />
                      {' '}
                      <span>
                        {item.text}
                      </span>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            {' '}
            <Center className="mt-lg-5 mt-3">
              <a
                className="btn-custome btn btn-lg waves-effect waves-light head-requet-btn"
                {...link(data.headRequetBtn.href)}
              >
                {data.headRequetBtn.text}
              </a>
            </Center>
          </div>
          {' '}
          <div className="col-12 col-sm-12 col-lg-6 text-center d-none d-lg-flex">
            <img
              className="lazy rounded10 box-shadow"
              data-src={data.boxShadow.src}
              alt={data.boxShadow.alt}
              width={data.boxShadow.width}
              height={data.boxShadow.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
