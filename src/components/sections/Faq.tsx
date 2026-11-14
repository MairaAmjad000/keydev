import type { FaqContent } from '@/types';
import { SectionTitle } from './shared/SectionTitle';

/** Bootstrap accordion; the first question starts open. */
export function Faq({ data }: { data: FaqContent }) {
  return (
    <section className="padding-60 bg-light faq-section">
      <div className="container">
        <SectionTitle text={data.text} heading={data.heading} paragraphs={[data.text2]} />
        {' '}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faq-acc">
              {data.items.map((item, i) => (
                <div key={i} className="card faq-card">
                  <div className="card-header" id={`faq-h${i}`}>
                    <button
                      className={i === 0 ? 'btn btn-link' : 'btn btn-link collapsed'}
                      type="button"
                      data-toggle="collapse"
                      data-target={`#faq-c${i}`}
                      aria-expanded={i === 0}
                      aria-controls={`faq-c${i}`}
                    >
                      {item.question}
                    </button>
                  </div>
                  <div
                    id={`faq-c${i}`}
                    className={i === 0 ? 'collapse show' : 'collapse'}
                    aria-labelledby={`faq-h${i}`}
                    data-parent="#faq-acc"
                  >
                    <div className="card-body" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
