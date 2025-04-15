import React, { useState, useEffect } from "react";

const ClientVerifyOTPModal = ({ closeModal }) => {
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
    <div
      className={`main-modal modal fade show ${isVisible ? "modal-show" : ""} ${
        isClosing ? "modal-closing" : ""
      }`}
      id="OTPassModal__wr"
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
            <h5 className="modal-title" id="OTPassModalLabel">
              Please check your email or phone
            </h5>
            <p>
              The code has been sent to{" "}
              <a href="javascript:void(0);">+971 052 757 7111</a> and to your
              email <a href="javascript:void(0);">name@emailaddress.com</a>
            </p>
            <p>Please enter the code below</p>
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
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 otpWrap__wr">
                <div className="otpInputWrap__wr">
                  <input
                    type="number"
                    maxLength="1"
                    className="input__wr"
                    disabled
                  />
                  <input
                    type="number"
                    maxLength="1"
                    className="input__wr"
                    disabled
                  />
                  <input
                    type="number"
                    maxLength="1"
                    className="input__wr"
                    disabled
                  />
                  <input
                    type="number"
                    maxLength="1"
                    className="input__wr"
                    disabled
                  />
                </div>
                {/* <!-- <button className="hide" id="submit" onclick="validateOTP()">Submit</button> --> */}
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 redirectLink__wr resend__wr text-left">
                <p>
                  Didn’t get a code?{" "}
                  <a href="javascript:void(0);">Click to resend.</a>
                </p>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                <button
                  type="button"
                  className="btn btn-primary primaryBtn__wr roundedPill_22__wr lh_150__wr py_10px__wr px_18px__wr border_w_1__wr w-100"
                  onClick={handleClose}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientVerifyOTPModal;
