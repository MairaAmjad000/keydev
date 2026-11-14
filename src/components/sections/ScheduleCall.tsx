import { Fragment } from 'react';
import type { ScheduleCallContent, FormsContent } from '@/types';
import { InteractiveInput } from '@/components/ui/InteractiveInput';
import { FormOptions } from '@/components/ui/FormOptions';
import { link } from '@/lib/utils/markup';

export function ScheduleCall({ data, forms }: { data: ScheduleCallContent; forms: FormsContent }) {
  return (
    <div>
      <section className="padding-60 bg-white">
        <div className="container">
          <div className="title">
            <span>
              {data.text}
              {' '}
            </span>
            {' '}
            <h2>
              {data.heading}
            </h2>
          </div>
          {' '}
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-lg-5">
              <div className="row">
                {data.blocks.map((item, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <div className="col-12 col-sm-6 col-lg-6">
                      <div className="contact_top_rating">
                        <a rel="noopener" target="_blank" {...link(item.link.href)}>
                          {' '}
                          <img
                            className="lazy"
                            data-src={item.link.image.src}
                            alt={item.link.image.alt}
                            width={item.link.image.width}
                            height={item.link.image.height}
                          />
                          {' '}
                          <span className="orange-text">
                            {item.link.orangeText}
                          </span>
                          {' '}
                          <i className="fas fa-star" />
                          {' '}
                          <i className="fas fa-star" />
                          {' '}
                          <i className="fas fa-star" />
                          {' '}
                          <i className="fas fa-star" />
                          {' '}
                          <i className="fas fa-star" />
                          {' '}
                          <strong>
                            {item.link.strong}
                          </strong>
                          {' '}
                          <span className="text-dark">
                            {item.link.text}
                            {' '}
                          </span>
                          {' '}
                        </a>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              {' '}
              <ul className="contact_rating">
                {data.items.map((item, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <li>
                      <a rel="noopener" target="_blank" {...link(item.link.href)}>
                        {' '}
                        <div className="work_logo">
                          <img
                            className="lazy"
                            data-src={item.link.image.src}
                            alt={item.link.image.alt}
                            width={item.link.image.width}
                            height={item.link.image.height}
                          />
                          {' '}
                          <img
                            className="top_rating_img lazy"
                            data-src={item.link.topRatingImg.src}
                            alt={item.link.topRatingImg.alt}
                            width={item.link.topRatingImg.width}
                          />
                        </div>
                        {' '}
                        <div className="work_rating">
                          <img
                            className="lazy"
                            data-src={item.link.image2.src}
                            alt={item.link.image2.alt}
                            width={item.link.image2.width}
                            height={item.link.image2.height}
                          />
                          {' '}
                          <div className="rating_text">
                            <p dangerouslySetInnerHTML={{ __html: item.link.text }} />
                            {' '}
                            <i className="fas fa-star" />
                            {' '}
                            <i className="fas fa-star" />
                            {' '}
                            <i className="fas fa-star" />
                            {' '}
                            <i className="fas fa-star" />
                            {' '}
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        {' '}
                      </a>
                    </li>
                  </Fragment>
                ))}
                {' '}
                <li>
                  <a rel="noopener" target="_blank" {...link(data.link.href)}>
                    {' '}
                    <div className="work_logo">
                      <img
                        className="lazy"
                        data-src={data.link.image.src}
                        alt={data.link.image.alt}
                        width={data.link.image.width}
                        height={data.link.image.height}
                      />
                    </div>
                    {' '}
                    <div className="work_rating">
                      <img
                        className="lazy"
                        data-src={data.link.image2.src}
                        alt={data.link.image2.alt}
                        width={data.link.image2.width}
                        height={data.link.image2.height}
                      />
                      {' '}
                      <div className="rating_text">
                        <p dangerouslySetInnerHTML={{ __html: data.link.text }} />
                        {' '}
                        <i className="fas fa-star" />
                        {' '}
                        <i className="fas fa-star" />
                        {' '}
                        <i className="fas fa-star" />
                        {' '}
                        <i className="fas fa-star" />
                        {' '}
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    {' '}
                  </a>
                </li>
              </ul>
            </div>
            {' '}
            <div className="col-12 col-sm-12 col-lg-7">
              <h3 className="d-flex d-lg-none mb-3">
                {data.heading2}
              </h3>
              {' '}
              <form id="schedule_a_call" className="row">
                <div id="error_message_schedule_a_call" className="alert alert-danger" style={{ display: "none" }} />
                {' '}
                {data.formGroups.map((item, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <div className="form-group col-sm-6 col-12">
                      <label htmlFor={item.label.for}>
                        {item.label.text}
                        {' '}
                        <InteractiveInput
                          className="form-control"
                          required
                          type={item.label.formControl.type}
                          name={item.label.formControl.name}
                          placeholder={item.label.formControl.placeholder}
                          clearPlaceholderOnFocus
                          restorePlaceholderOnBlur
                        />
                        {' '}
                      </label>
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
                        className="form-control contact-phone"
                        required
                        minLength={10}
                        maxLength={11}
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
                  <label htmlFor="company_name">
                    {data.label}
                    {' '}
                    <input
                      type="text"
                      name="company_name"
                      className="form-control"
                      placeholder={data.formControl2.placeholder}
                    />
                    {' '}
                  </label>
                </div>
                {' '}
                <div className="form-group col-sm-6 col-12">
                  <label htmlFor="budget">
                    {data.label2}
                    {' '}
                    <select className="form-control" name="budget">
                      <FormOptions options={forms.budget} />
                    </select>
                    {' '}
                  </label>
                </div>
                {' '}
                <div className="form-group col-sm-6 col-12">
                  <select className="form-control" name="region" required>
                    <FormOptions options={forms.region} />
                  </select>
                </div>
                {' '}
                <div className="form-group col-sm-6 col-12">
                  <label htmlFor="service">
                    {data.label3}
                    {' '}
                    <select className="form-control" name="service" required>
                      <FormOptions options={forms.service} />
                    </select>
                    {' '}
                  </label>
                </div>
                {' '}
                <div className="form-group col-sm-6 col-12">
                  <label htmlFor="reference">
                    {data.label4}
                    {' '}
                    <select className="form-control" name="reference">
                      <FormOptions options={forms.reference} />
                    </select>
                    {' '}
                  </label>
                </div>
                {' '}
                <div className="form-group col-12">
                  <label htmlFor="message">
                    {data.label5}
                    {' '}
                    <textarea
                      name="message"
                      className="form-control"
                      rows={10}
                      placeholder={data.formControl3.placeholder}
                    />
                    {' '}
                  </label>
                </div>
                {' '}
                <div className="form-group col-sm-6 col-12">
                  <div id="intelGrecaptchaScheduleCall" />
                  {' '}
                  <input
                    type="hidden"
                    className="form-control"
                    name="recaptcha_schedule_call"
                    id="recaptcha_schedule_call"
                  />
                </div>
                {' '}
                <div className="form-group col-sm-6 col-12 text-right">
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
      </section>
    </div>
  );
}
