import { Fragment } from "react";
import type {
  EstimateStep,
  EstimateWizardContent,
  FormsContent,
} from "@/types";
import { InteractiveInput } from "@/components/ui/InteractiveInput";
import { FormOptions } from "@/components/ui/FormOptions";

const byOrder = <T extends { sort_order: number }>(a: T, b: T) =>
  a.sort_order - b.sort_order;

/** Icon + label content shared by the first-step tiles and the answer boxes. */
function OptionBody({ icon, label }: { icon: string; label: string }) {
  return (
    <>
      {icon && <img src={icon} alt="" />}
      <span>{label}</span>
    </>
  );
}

function StepPane({
  step,
  first,
  content,
}: {
  step: EstimateStep;
  first: boolean;
  content: EstimateWizardContent;
}) {
  const { form } = content;
  const options = step.options.filter((o) => o.active !== false).sort(byOrder);
  const checkbox = step.answer_type === "multiple_choice";
  return (
    <div
      className={`tab-pane fade${first ? " active in show" : ""}`}
      id={`step-${step.key}`}
      data-type={step.answer_type}
      data-next={step.next_step ?? ""}
      data-required={step.answer_required !== false ? "true" : "false"}
      data-question={step.question}
    >
      <div className="estimate_title">{step.question}</div>
      {step.help_text && (
        <>
          {" "}
          <p className="m-auto" style={{ maxWidth: 1000 }}>
            {step.help_text}
          </p>
        </>
      )}
      {checkbox && (
        <>
          {" "}
          <p className="estimate-select-text">
            <span>{form.selectAtLeastOneText}</span>
          </p>
        </>
      )}
      {first ? (
        <ul className="nav-tabs" role="tablist">
          {options.map((o, i) => (
            <li key={i}>
              <a
                href="#"
                role="tab"
                className="development"
                data-i={i}
                data-next={o.next_step ?? ""}
                data-label={o.label}
              >
                <OptionBody icon={o.icon} label={o.label} />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="nav-tabs estimate_tab" role="tablist">
          {step.answer_type === "text" ? (
            <div className="estimate-textarea-box">
              <div className="form-group text-left col-sm-12 col-xs-12">
                <textarea
                  className="form-control"
                  rows={8}
                  placeholder={step.placeholder}
                />
              </div>
            </div>
          ) : (
            options.map((o, i) => {
              const id = `o_${step.key}_${i}`;
              return (
                <li key={i}>
                  <label className="estimate_box" htmlFor={id}>
                    <OptionBody icon={o.icon} label={o.label} />
                    <input
                      id={id}
                      type={checkbox ? "checkbox" : "radio"}
                      name={step.key}
                      value={o.label}
                      data-i={i}
                      data-next={o.next_step ?? ""}
                      className={
                        checkbox ? "checkbox_value" : "radiokbox_value"
                      }
                    />
                  </label>
                </li>
              );
            })
          )}
          <a href="#" className="back_btn" data-back>
            <i className="fa fa-long-arrow-left" />
            {form.prevText}
          </a>
          {step.answer_type !== "single_choice" && (
            <a href="#" className="next_btn" data-next-btn>
              {form.nextText}
              <i className="fa fa-long-arrow-right" />
            </a>
          )}
        </ul>
      )}
    </div>
  );
}

function FinalForm({
  content,
  forms,
}: {
  content: EstimateWizardContent;
  forms: FormsContent;
}) {
  const { form } = content;
  const ph = form.placeholders;
  return (
    <div
      role="tabpanel"
      className="tab-pane fade mob-app-submit"
      id="final-form"
    >
      <div className="estimate_title">{form.title}</div>{" "}
      <p className="m-auto" style={{ maxWidth: 1000 }}>
        {form.text}
      </p>{" "}
      <div className="estimate_contact">
        <div
          id="error_message"
          className="alert alert-danger"
          style={{ display: "none" }}
        />
        <div
          id="success_message"
          className="alert alert-success"
          style={{ display: "none" }}
        />
        <div className="row">
          <div className="col-md-2" />{" "}
          <div className="col-md-8 col-sm-12 col-xs-12">
            <form
              encType="multipart/form-data"
              id="estimate_form"
              className="bv-form"
              action={form.action}
              method="POST"
            >
              <input type="hidden" name="answers" id="est_answers" />
              <input
                type="file"
                name="briefAttachment"
                id="briefAttachment"
                style={{ visibility: "hidden" }}
              />
              <div className="form-group text-left col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="name"
                  id="app_name"
                  className="form-control"
                  placeholder={ph.name}
                  required
                />
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-6 col-xs-12">
                <input
                  type="email"
                  name="email"
                  id="app_email"
                  className="form-control"
                  placeholder={ph.email}
                  required
                />
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-12 col-xs-12">
                <div className="phone-field">
                  <div className="con-num">
                    <InteractiveInput
                      type="text"
                      name="mobile"
                      id="app_mobile"
                      className="form-control est-app-phone"
                      placeholder={ph.mobile}
                      maxLength={11}
                      required
                      numericOnly
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-12 col-xs-12">
                <input
                  type="text"
                  name="company_name"
                  id="app_company_name"
                  className="form-control"
                  placeholder={ph.company}
                />
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-12 col-xs-12">
                <select
                  className="form-control"
                  name="reference"
                  id="reference"
                >
                  <FormOptions options={forms.reference} />
                </select>
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-12 col-xs-12">
                <select
                  className="form-control"
                  name="region"
                  id="region"
                  required
                >
                  <FormOptions
                    options={
                      form.regionPlaceholder
                        ? forms.region.map((o) =>
                            o.value === ""
                              ? {
                                  ...o,
                                  label: form.regionPlaceholder as string,
                                }
                              : o,
                          )
                        : forms.region
                    }
                  />
                </select>
              </div>{" "}
              <div className="form-group text-left col-md-12 col-sm-12 col-xs-12">
                <div className="group Attchment_file_form">
                  <input
                    type="file"
                    name="app_attachment"
                    id="Appfile"
                    className="form-control"
                    style={{ visibility: "hidden" }}
                  />
                  <div className="input-append">
                    <input
                      type="text"
                      id="Appsubfile"
                      className="form-control"
                      disabled
                      placeholder={ph.attachment}
                    />{" "}
                    <a
                      className="btn btn--primary fa fa-paperclip"
                      id="Appfile-trigger"
                      href="#Appfile"
                      aria-label="Choose file"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-6 col-xs-12 old_app_link">
                <input
                  type="text"
                  name="app_link_android"
                  id="app_link_android"
                  className="form-control"
                  placeholder={ph.androidLink}
                />
              </div>{" "}
              <div className="form-group text-left col-md-6 col-sm-6 col-xs-12 old_app_link">
                <input
                  type="text"
                  name="app_link_ios"
                  id="app_link_ios"
                  className="form-control"
                  placeholder={ph.iosLink}
                />
              </div>{" "}
              <div className="form-group text-left col-sm-12 col-xs-12 mb-10">
                <textarea
                  name="additional"
                  id="app_additional"
                  className="form-control"
                  placeholder={ph.additional}
                  rows={4}
                  data-bv-field="message"
                />
              </div>{" "}
              <div className="form-group col-sm-12 col-xs-12 text-left">
                <label htmlFor="check1">
                  <b>{form.ndaText}</b>
                </label>
              </div>{" "}
              <div className="form-group col-lg-3 col-md-4 col-sm-6 col-xs-12" />{" "}
              <div className="form-group col-lg-9 col-md-8 col-sm-6 col-xs-12 pt-10 text-right">
                <div className="consultation-btn-left">
                  <button
                    type="submit"
                    className="custome_btn"
                    id="submit_app_development_form"
                  >
                    <i className="fa fa-spinner fa-spin start-loader" />{" "}
                    {form.submitText}
                  </button>
                </div>
              </div>
            </form>
          </div>{" "}
          <div className="col-md-2" />
        </div>
      </div>
      <ul className="nav-tabs estimate_tab" role="tablist">
        <a href="#" className="back_btn" data-back>
          <i className="fa fa-long-arrow-left" />
          {form.prevText}
        </a>
      </ul>
    </div>
  );
}

/**
 * Multi-step project estimate. Every step is rendered here from the admin panel's `steps`; branching,
 * answers, the final form submit and the phone field live in public/scripts/estimate-page.js, which reads
 * the data-* attributes (data-next on options and steps) written below.
 */
export function EstimateWizard({
  data,
  forms,
}: {
  data: EstimateWizardContent;
  forms: FormsContent;
}) {
  const steps = data.steps.filter((s) => s.active !== false).sort(byOrder);
  const first = steps.find((s) => s.first_step) ?? steps[0];
  return (
    <>
      <section id="estimate">
        <div className="pjax-content">
          <div className="estimate_tabs">
            <div
              className="tab-content"
              id="estimate-root"
              data-first={first?.key}
            >
              {steps.map((step) => (
                <Fragment key={step.key}>
                  <StepPane
                    step={step}
                    first={step === first}
                    content={data}
                  />{" "}
                </Fragment>
              ))}
              <FinalForm content={data} forms={forms} />
            </div>
          </div>
        </div>
      </section>
      {data.form.successModal && (
        <SuccessModal modal={data.form.successModal} />
      )}
    </>
  );
}

function SuccessModal({
  modal,
}: {
  modal: NonNullable<EstimateWizardContent["form"]["successModal"]>;
}) {
  return (
    <div
      className="modal fade"
      id="successModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="success-modal-box">
              <img src="data:application/octet-stream;base64," alt="" />
              <h3>
                {modal.title}
                <small>{modal.subtitle}</small>
              </h3>
              <p>{modal.text}</p>
              <button
                type="button"
                className="custome_btn"
                data-dismiss="modal"
                data-home={modal.homeHref}
              >
                {modal.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}