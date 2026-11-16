import { Fragment } from 'react';
import type { ContactFormContent, ContactFormField, FormsContent } from '@/types';
import { InteractiveInput } from '@/components/ui/InteractiveInput';
import { FormOptions } from '@/components/ui/FormOptions';
import { link } from '@/lib/utils/markup';

function Field({ field, forms }: { field: ContactFormField; forms: FormsContent }) {
  switch (field.kind) {
    case 'select':
      return (
        <div className={`form-group ${field.colClass}`}>
          <select className="form-control" name={field.name} required={field.required}>
            <FormOptions options={forms[field.list]} />
          </select>
        </div>
      );
    case 'textarea':
      return (
        <div className={`form-group ${field.colClass}`}>
          <textarea name={field.name} className="form-control" placeholder={field.placeholder} rows={field.rows} />
        </div>
      );
    case 'file':
      return (
        <div className={`form-group ${field.colClass}`}>
          <div className="group">
            <input type="file" name={field.name} id="file" className="form-control" style={{ visibility: 'hidden' }} />
            <div className="input-append">
              <input type="text" id="subfile" className="form-control" disabled placeholder={field.placeholder} />
              {' '}
              <a className="btn btn--primary fas fa-paperclip" id="file-trigger" href="#file" aria-label="Choose file" />
            </div>
          </div>
        </div>
      );
    default: {
      const input = (
        <InteractiveInput
          type={field.type}
          name={field.name}
          className={field.variant === 'phone' ? 'form-control contact-phone' : 'form-control'}
          placeholder={field.placeholder}
          required={field.required}
          minLength={field.minLength}
          maxLength={field.maxLength}
          clearPlaceholderOnFocus
          restorePlaceholderOnBlur
          numericOnly={field.variant === 'phone'}
        />
      );
      return (
        <div className={`form-group ${field.colClass}`}>
          {field.variant === 'phone' ? (
            <div className="phone-field">
              <div className="con-num">{input}</div>
            </div>
          ) : (
            input
          )}
        </div>
      );
    }
  }
}

/** Enquiry form (selects use the shared lists in content/settings/forms.json) beside a "schedule a meeting" card. */
export function ContactForm({ data, forms }: { data: ContactFormContent; forms: FormsContent }) {
  const { form, meeting } = data;
  return (
    <section className="contact-form-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12 col-12">
            <div className="contact-form-box bg-white rounded10 box-shadow">
              <form id={form.id} method="post">
                <div className="row">
                  {form.fields.map((field) => (
                    <Fragment key={field.name}>
                      <Field field={field} forms={forms} />
                      {' '}
                    </Fragment>
                  ))}
                  <div className="form-group col-md-6 text-center text-md-left">
                    <div id="intelGrecaptchaContact" />
                    {' '}
                    <input type="hidden" className="form-control" name="gRecaptchaContact" id="gRecaptchaContact" />
                  </div>
                  {' '}
                  <div className="form-group col-md-6 text-center text-md-right">
                    <button type="submit" className="btn-custome btn waves-effect waves-light contact-custome-btn">
                      <i className="fa fa-spinner fa-spin start-loader" />
                      {form.submitText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {' '}
          <div className="col-lg-4 col-md-5 col-sm-12 col-12">
            <div className="schedule-meeting-main">
              <div className="schedule-meeting-box rounded10">
                <div className="schedule-meeting-img">
                  <img src={meeting.image.src} alt={meeting.image.alt} width={meeting.image.width} height={meeting.image.height} />
                </div>
                {' '}
                <div className="schedule-meeting-content text-center">
                  <div className="schedule-meeting-content-description">
                    <h3>{meeting.heading}</h3>
                    {' '}
                    <h4>{meeting.subheading}</h4>
                    {meeting.paragraphs.map((p, i) => (
                      <Fragment key={i}>
                        {' '}
                        <p>{p}</p>
                      </Fragment>
                    ))}
                  </div>
                  {' '}
                  <a className="btn-custome btn waves-effect waves-light head-requet-btn" {...link(meeting.button.href)}>
                    {meeting.button.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
