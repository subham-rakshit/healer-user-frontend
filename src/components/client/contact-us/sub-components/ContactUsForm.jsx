import React from "react";

const ContactUsForm = () => {
  return (
    <article className="contactSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="headingParentWrap__wr text-center contactSecHeadingWrap__wr">
          <div className="titleParentWrap__wr contactSecTitleWrap__wr">
            <h6 className="secSupTitle__wr contactSecSupTitle__wr">Contact us</h6>
            <h2 className="secTitle__wr contactSecTitle__wr">Get in touch</h2>
            <p>We’d love to hear from you. Please fill out this form.</p>
          </div>
        </div>
        <div className="contactFromBlock__wr">
          <form action="">
            <div className="form-row">
              <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 firstName__wr">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 lastName__wr">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 email__wr">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@company.com"
                  autoComplete="off"
                  required=""
                />
                <span className="envelopeIcon__wr">
                  <img
                    src="/images/form-email-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt=""
                    title=""
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 phNo__wr">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control contactNumber__wr"
                  placeholder="Phone number"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 msg__wr">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Leave us a message..."
                  cols="40"
                  rows="4"
                  autoComplete="off"
                  required=""
                ></textarea>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 termCheck__wr">
                <div className="termCheckboxWrap__wr">
                  <label className="custom-control custom-checkbox customCheckbox__wr contactTermCheckbox__wr">
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      name="terms"
                      id="terms"
                    />
                    <div className="custom-control-label customCheckboxBlockBody__wr contactTermCheckboxBlockBody__wr">
                      <span className="checkMark__wr customCheckboxCheckMark__wr"></span>
                      <div
                        className="content__wr customCheckboxBlockContent__wr contactTermCheckboxBlockContent__wr"
                        // for="terms"
                      >
                        <p>
                          You agree to our friendly &nbsp;
                          <a href="javascript:void(0);">privacy policy</a>.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                <button
                  type="button"
                  className="btn btn-block btn-primary primaryBtn__wr btnGreen300__wr"
                >
                  <span className="labelText__wr">Send message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default ContactUsForm;
