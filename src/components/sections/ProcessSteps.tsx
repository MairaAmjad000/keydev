import { Fragment } from 'react';
import type { ProcessStepsContent } from '@/types';
import { Icon } from '@/components/icons';
import { SectionTitle } from './shared/SectionTitle';

/**
 * Seven-step delivery process: a sticky step navigator (large screens) above numbered rows that alternate
 * text / picture. The navigator's progress and highlighting come from public/scripts/process-page.js.
 */
export function ProcessSteps({ data }: { data: ProcessStepsContent }) {
  return (
    <section className="padding-60-00 bg-light our-work-process-section">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} />
      </div>
      {' '}
      <div className="our-work-process-tabs">
        <div className="our-work-process-slider-section bg-light d-none d-lg-block top-sticy">
          <div className="progressbar">
            <div className="shim" />
            {' '}
            <div className="holder clearfix">
              <div className="bar">
                <div className="indicator" />
              </div>
              {' '}
              <div className="container">
                <div className="labels clearfix">
                  {data.steps.map((step, i) => (
                    <Fragment key={step.id}>
                      {i > 0 && ' '}
                      <div className="label-item">
                        <a href={`#${step.id}`}>
                          <div className="label-item-svg">
                            <Icon name={step.icon} />
                          </div>
                          {' '}
                          <div className="label-item-name">{step.navLabel ?? step.title}</div>
                        </a>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="our-process-step-listing">
          {data.steps.map((step, i) => (
            <Fragment key={step.id}>
              {i > 0 && ' '}
              <div className="our-process-step-row" id={step.id}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className={`position-static col-lg-7 col-md-12 col-sm-12 col-12${step.reverse ? ' order-lg-1' : ''}`}>
                      <div className="our-process-content-box">
                        <div className="number">{step.number}</div>
                        {' '}
                        <div className="our-process-content box-shadow">
                          <h3>{step.title}</h3>
                          {' '}
                          <p>{step.text}</p>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="our-process-image-box">
                        <img
                          className="rounded10 box-shadow"
                          src={step.image.src}
                          alt={step.image.alt}
                          width={step.image.width}
                          height={step.image.height}
                          loading="lazy"
                        />
                      </div>
                    </div>
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
