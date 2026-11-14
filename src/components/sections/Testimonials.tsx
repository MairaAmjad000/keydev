import { Fragment } from 'react';
import type { TestimonialsContent } from '@/types';
import { link } from '@/lib/utils/markup';

export function Testimonials({ data }: { data: TestimonialsContent }) {
  return (
    <div>
      <section className="padding-60 bg-light testimonial-section">
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
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="testimonials_left">
                <ul className="testimonials_circle">
                  {data.items.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <li>
                        <a
                          title={item.testImg.title}
                          data-slide={item.testImg.dataSlide}
                          className={item.testImg.className}
                          {...link(item.testImg.href)}
                        >
                          {' '}
                          <img
                            className="lazy"
                            data-src={item.testImg.image.src}
                            alt={item.testImg.image.alt}
                            width={item.testImg.image.width}
                            height={item.testImg.image.height}
                          />
                          {' '}
                        </a>
                        <i className="fas fa-quote-left" />
                      </li>
                    </Fragment>
                  ))}
                </ul>
                {' '}
                <div className="testimonials_privew">
                  <div>
                    <img id="testimonials_privew" className="lazy" data-src={data.image.src} alt={data.image.alt} />
                  </div>
                  {' '}
                  <i className="fas fa-quote-left" />
                </div>
              </div>
            </div>
            {' '}
            <div className="col-12 col-lg-6">
              <div className="testimonials_text">
                <div className="testimonials_text_slider">
                  {data.testimonialTextSections.map((item, i) => (
                    <Fragment key={i}>
                      {i > 0 && ' '}
                      <div className="testimonial-text-section" data-index={item.dataIndex}>
                        <div className="testimonials_text_box">
                          <div className="testimonials-arrow" />
                          {' '}
                          <i className="fas fa-quote-left" />
                          {' '}
                          <p>
                            {item.text}
                          </p>
                          {' '}
                          <span dangerouslySetInnerHTML={{ __html: item.text2 }} />
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
