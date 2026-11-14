import { Fragment } from 'react';
import type { BrandLogosContent } from '@/types';

export function BrandLogos({ data }: { data: BrandLogosContent }) {
  return (
    <div>
      <section className="brand-logo">
        <div className="container">
          <div className="brands_logo d-flex flex-wrap align-items-center justify-content-center">
            {data.blocks.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div>
                  <img src={item.image.src} alt={item.image.alt} />
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
