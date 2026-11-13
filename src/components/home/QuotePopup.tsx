import { Fragment } from 'react';
import type { QuotePopupContent, FormsContent } from '@/types/content';
import { InteractiveInput } from '@/components/ui/InteractiveInput';
import { FormOptions } from '@/components/ui/FormOptions';
import { link } from '@/lib/markup';

export function QuotePopup({ data, forms }: { data: QuotePopupContent; forms: FormsContent }) {
  return (
    <section id="contact_popup">
      <a id="popup_close" className="fa fa-times" {...link(data.link.href)} />
      {' '}
      <div className="popup_form">
        <h4 dangerouslySetInnerHTML={{ __html: data.subheading }} />
        {' '}
        <form method="post" id="request_the_quote">
          <div id="error_message_popup" className="alert alert-danger" style={{ display: "none" }} />
          {' '}
          <div className="row">
            {data.formGroups.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <div className="form-group col-sm-6 col-12">
                  <label htmlFor={item.label.for} />
                  {' '}
                  <InteractiveInput
                    className="form-control"
                    required
                    type={item.formControl.type}
                    name={item.formControl.name}
                    placeholder={item.formControl.placeholder}
                    clearPlaceholderOnFocus
                    restorePlaceholderOnBlur
                  />
                </div>
              </Fragment>
            ))}
            {' '}
            <div className="form-group col-md-6 col-12">
              <div className="phone-field">
                <div className="con-num">
                  <InteractiveInput
                    type="text"
                    name="phone"
                    className="form-control get-quote-contact-phone"
                    required
                    maxLength={12}
                    placeholder={data.formControl.placeholder}
                    clearPlaceholderOnFocus
                    restorePlaceholderOnBlur
                    numericOnly
                  />
                </div>
              </div>
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12">
              <label htmlFor="country" />
              {' '}
              <InteractiveInput
                type="text"
                name="company_name"
                className="form-control"
                placeholder={data.formControl2.placeholder}
                clearPlaceholderOnFocus
                restorePlaceholderOnBlur
              />
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12">
              <label htmlFor="budget" />
              {' '}
              <select className="form-control" name="budget">
                <FormOptions options={forms.budget} />
              </select>
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12">
              <label htmlFor="region" />
              {' '}
              <select className="form-control" name="region" required>
                <FormOptions options={forms.region} />
              </select>
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12">
              <label htmlFor="service" />
              {' '}
              <select className="form-control" name="service" required>
                <FormOptions options={forms.service} />
              </select>
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12">
              <label htmlFor="reference" />
              {' '}
              <select className="form-control" name="reference">
                <FormOptions options={forms.reference} />
              </select>
            </div>
            {' '}
            <div className="form-group col-12">
              <label htmlFor="message" />
              {' '}
              <textarea
                name="message"
                className="form-control"
                rows={8}
                placeholder={data.formControl3.placeholder}
              />
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12">
              <div id="intelGrecaptchaPopup" />
              {' '}
              <input type="hidden" className="form-control" name="gRecaptchaPopup" id="gRecaptchaPopup" />
            </div>
            {' '}
            <div className="form-group col-sm-6 col-12 text-center text-sm-right">
              <button
                type="submit"
                className="btn-custome btn waves-effect waves-light contact-custome-btn"
                dangerouslySetInnerHTML={{ __html: data.contactCustomeBtn }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
