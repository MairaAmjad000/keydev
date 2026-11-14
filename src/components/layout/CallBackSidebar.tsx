import { Fragment } from 'react';
import type { CallBackSidebarContent, FormsContent } from '@/types';
import { InteractiveInput } from '@/components/ui/InteractiveInput';
import { FormOptions } from '@/components/ui/FormOptions';

export function CallBackSidebar({ data, forms }: { data: CallBackSidebarContent; forms: FormsContent }) {
  return (
    <>
      <div className="head-call-back-sidebar-background" />
      {' '}
      <div className="head-call-back-sidebar">
        <div className="head-call-back-sidebar-main">
          <div className="close">
            <i className="fas fa-times" />
          </div>
          {' '}
          <div className="head-call-back-box d-flex align-items-start">
            <img className="lazy" src={data.image.src} alt={data.image.alt} />
            {' '}
            <div className="head-call-back-content">
              <div className="head-call-back-content-title">
                {data.headCallBackContentTitle}
              </div>
              {' '}
              <p>
                {data.text}
              </p>
            </div>
          </div>
          {' '}
          <div className="head-call-form-section">
            <form>
              {data.formGroups.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <div className="form-group">
                    <label htmlFor={item.label.for} />
                    {' '}
                    <InteractiveInput
                      className="form-control"
                      type={item.formControl.type}
                      placeholder={item.formControl.placeholder}
                      clearPlaceholderOnFocus
                      restorePlaceholderOnBlur
                    />
                    {' '}
                    <div className="text-danger" />
                  </div>
                </Fragment>
              ))}
              {' '}
              <div className="form-group">
                <div className="phone-field">
                  <div className="con-num">
                    <label htmlFor="phone" />
                    {' '}
                    <InteractiveInput
                      type="text"
                      className="form-control request-a-all-contact-phone"
                      maxLength={12}
                      placeholder={data.formControl.placeholder}
                      clearPlaceholderOnFocus
                      restorePlaceholderOnBlur
                      numericOnly
                    />
                    {' '}
                    <div className="text-danger" />
                  </div>
                </div>
              </div>
              {' '}
              <div className="form-group">
                <label htmlFor="service" />
                {' '}
                <select className="form-control">
                  <FormOptions options={forms.service} />
                </select>
                {' '}
                <div className="text-danger" />
              </div>
              {' '}
              <div className="form-group">
                <label htmlFor="service" />
                {' '}
                <select className="form-control">
                  <FormOptions options={forms.region} />
                </select>
                {' '}
                <div className="text-danger" />
              </div>
              {' '}
              <div className="form-group m-0 text-center">
                <button
                  type="submit"
                  className="btn-custome btn waves-effect waves-light contact-custome-btn"
                  dangerouslySetInnerHTML={{ __html: data.contactCustomeBtn }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
