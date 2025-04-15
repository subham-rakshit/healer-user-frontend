import React, { useState, useEffect } from "react";

const BecomePractitionerSignUpFields = ({ closeModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <>
      <div
        className={`main-modal modal fade show ${
          isVisible ? "modal-show" : ""
        } ${isClosing ? "modal-closing" : ""}`}
        id="practitionerSignUp2Modal__wr"
        style={{ display: "block" }}
        onClick={handleClose}
      >
        <div
          className="modal-dialog customModalDialog_400__wr modal-dialog-centered modal-dialog-scrollable"
          onClick={(e) => e.stopPropagation()}
        >
          <form className="modal-content">
            <div className="modal-header">
              <picture className="starIcon__wr">
                <img
                  src="/images/heelar-star-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="50"
                  height="50"
                />
              </picture>
              <h5 className="modal-title" id="practitionerSignUp2ModalLabel">
                Practitioner Sign-up
              </h5>
              <p>Enter your details</p>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <img
                    src="/images/x-mark-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt=""
                    title=""
                    width="12"
                    height="12"
                  />
                </span>
              </button>
            </div>
            <div className="modal-body signUpModalBodyTwo__wr">
              <div className="form-row">
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 phNo__wr">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control phoneNumber__wr"
                    placeholder="Phone number"
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 email__wr">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
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
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 confEmail__wr">
                  <label className="form-label">Confirm Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
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
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 drop__wr lang__wr">
                  <label className="form-label">Prefered Language</label>
                  <select className="form-control" required="">
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                  <span className="chevDownIcon__wr">
                    <img
                      src="/images/chevron-down-grey-icon.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt="arrow-icon"
                      title="arrow-icon"
                      width="20"
                      height="20"
                    />
                  </span>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                  <button
                    type="button"
                    className="btn btn-primary primaryBtn__wr roundedPill_22__wr lh_150__wr py_10px__wr px_18px__wr border_w_1__wr w-100"
                    data-toggle="modal"
                    data-target="#practitionerNewPassModal__wr"
                    data-dismiss="modal"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BecomePractitionerSignUpFields;
