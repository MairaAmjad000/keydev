import type { SolutionCtaContent } from '@/types';
import { Icon } from '@/components/icons';
import { link } from '@/lib/utils/markup';

/** Slim banner: big faded icon, three-line pitch and a button. */
export function SolutionCta({ data }: { data: SolutionCtaContent }) {
  return (
    <section className="bg-light box-shadow o-hidden real-time-app-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="real-time-app-icon">
              <Icon name={data.icon} />
            </div>
          </div>
          {' '}
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="real-time-app-content-box d-flex align-items-center justify-content-start">
              <div className="real-time-app-content">
                <span className="top">{data.topText}</span>
                {' '}
                <h4>{data.heading}</h4>
                {' '}
                <span className="bottom">{data.bottomText}</span>
              </div>
              {' '}
              <div className="real-time-app-button">
                <a
                  className={data.link.className ?? 'btn-custome btn waves-effect waves-light'}
                  {...link(data.link.href)}
                >
                  {data.link.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
