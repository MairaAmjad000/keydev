import { Fragment } from 'react';
import type { IntroContentContent } from '@/types';
import { link } from '@/lib/utils/markup';

/** Heading + paragraphs + button beside a picture. */
export function IntroContent({ data }: { data: IntroContentContent }) {
  const text = (
    <>
      <h2 className={data.headingClass ?? 'h4 mb-3'}>{data.heading}</h2>
      {data.subheading && (
        <>
          {' '}
          <small>{data.subheading}</small>
        </>
      )}
      {data.paragraphs.map((p, i) => (
        <Fragment key={i}>
          {' '}
          <p dangerouslySetInnerHTML={{ __html: p.html }} />
        </Fragment>
      ))}
      {' '}
      <a className={data.link.className ?? 'btn btn-custome waves-effect waves-light'} {...link(data.link.href)}>
        {data.link.text}
      </a>
    </>
  );
  const picture = (
    <img
      className={data.imageClass ?? 'rounded10 box-shadow'}
      src={data.image.src}
      alt={data.image.alt}
      width={data.image.width}
      height={data.image.height}
    />
  );
  return (
    <section className={data.sectionClass ?? 'service-main-content padding-60 bg-white'}>
      <div className="container">
        <div className={data.rowClass ?? 'row align-items-center'}>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-lg-1 mb-4 m-lg-0">
            {data.contentClass ? <div className={data.contentClass}>{text}</div> : text}
          </div>
          {' '}
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center">
            {data.imageWrapClass ? <div className={data.imageWrapClass}>{picture}</div> : picture}
          </div>
        </div>
      </div>
    </section>
  );
}
