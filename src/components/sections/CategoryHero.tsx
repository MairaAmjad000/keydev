import { Fragment } from 'react';
import type { CategoryHeroContent, FormFieldContent } from '@/types';
import { link } from '@/lib/utils/markup';

function Field({ field }: { field: FormFieldContent }) {
  const common = {
    className: 'form-control',
    name: field.name,
    placeholder: field.placeholder,
    required: field.required,
  };
  const control =
    field.type === 'textarea' ? (
      <textarea {...common} rows={field.rows ?? 4} />
    ) : (
      <input
        {...common}
        type={field.type}
        minLength={field.minLength}
        maxLength={field.maxLength}
        className={field.variant === 'phone' ? 'form-control contact-phone country' : 'form-control'}
      />
    );
  if (field.variant === 'phone') {
    return (
      <div className="form-group col-12">
        <div className="phone-field">
          <div className="con-num">{control}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="form-group col-12">
      <label htmlFor={field.name}>
        {field.label}
        {control}
      </label>
    </div>
  );
}

/** Inner-page banner: heading + intro + buttons on the left, enquiry form on the right, breadcrumb below. */
export function CategoryHero({ data }: { data: CategoryHeroContent }) {
  const { form } = data;
  const textCol = form
    ? 'col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12'
    : 'col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12';
  return (
    <section className="banner innerbanner">
      <div className="video">
        <img src={data.image.src} alt={data.image.alt} width={data.image.width} height={data.image.height} />
      </div>
      {' '}
      <div className="tenc-intro-main__wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className={textCol}>
              <h1>{data.heading}</h1>
              {' '}
              <p dangerouslySetInnerHTML={{ __html: data.text }} />
              {' '}
              {data.links.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <a className={item.className} {...link(item.href)}>
                    {item.text}
                  </a>
                </Fragment>
              ))}
            </div>
            {form && (
              <>
                {' '}
                <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 pt-4">
                  <div className="innerbannerform">
                    <form id={form.id}>
                      <div className="alert alert-danger" id={form.errorId} style={{ display: 'none' }} />
                      <div className="alert alert-success" id={form.successId} style={{ display: 'none' }} />
                      <div className="row">
                        {form.fields.map((field) => (
                          <Field key={field.name} field={field} />
                        ))}
                      </div>
                      <div className="row align-items-center submitbar">
                        <div className="form-group w-auto m-0 d-inline-flex">
                          <button className="btn-custome btn waves-effect waves-light m-0" type="submit">
                            {form.submitText}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {' '}
      <ol className="breadcrumb">
        {data.breadcrumbs.map((crumb, i) => (
          <li key={i} className={crumb.href ? 'breadcrumb-item' : 'breadcrumb-item active'}>
            {crumb.href ? <a {...link(crumb.href)}>{crumb.text}</a> : crumb.text}
          </li>
        ))}
      </ol>
    </section>
  );
}
