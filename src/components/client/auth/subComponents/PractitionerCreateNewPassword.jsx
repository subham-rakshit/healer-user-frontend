import React, { useState, useEffect } from "react";

const PractitionerCreateNewPassword = ({ closeModal, verifyOTPOpenModal }) => {
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

  // Practitioner Verify OTP Modal Open
  const handleVerifyOTP = () => {
    handleClose();

    setTimeout(() => {
      verifyOTPOpenModal();
    }, 200);
  };

  return (
    <div
      className={`main-modal modal fade show ${isVisible ? "modal-show" : ""} ${
        isClosing ? "modal-closing" : ""
      }`}
      id="practitionerNewPassModal__wr"
      style={{ display: "block" }}
      onClick={handleClose}
    >
      <div
        className="modal-dialog customModalDialog_400__wr modal-dialog-centered modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="modal-content">
          <div className="modal-header text-center">
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
            <h5 className="modal-title" id="practitionerNewPassModalLabel">
              Create New Passowrd
            </h5>
            <p>Password to include be a minimum of 8 characters.</p>
            <p>
              Include at least one capital letter, number and a special
              character such as !@£$%^&*()
            </p>
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
          <div className="modal-body signUpModalBodyOne__wr">
            <div className="form-row">
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pass__wr">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control passField__wr"
                  placeholder="Password"
                  autoComplete="off"
                  required=""
                />
                <span data-tag="passField__wr" className="togglePass__wr">
                  <i className="fa-regular fa-eye-slash"></i>
                </span>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pass__wr cnfPass__wr">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control passConfField__wr"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required=""
                />
                <span data-tag="passConfField__wr" className="togglePass__wr">
                  <i className="fa-regular fa-eye-slash"></i>
                </span>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                <button
                  type="button"
                  className="btn btn-primary primaryBtn__wr roundedPill_22__wr lh_150__wr py_10px__wr px_18px__wr border_w_1__wr w-100"
                  onClick={handleVerifyOTP}
                  // data-toggle="modal"
                  // data-target="#practitionerOTPModal__wr"
                  // data-dismiss="modal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PractitionerCreateNewPassword;
