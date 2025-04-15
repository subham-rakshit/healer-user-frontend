import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";

const BecomePractitionerSignUpMain = ({
  openModal,
  signInOpenModal,
  clientSignUpOpenModal,
  closeModal,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Main Modal Close
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      closeModal();
    }, 300);
  };

  // Practitioner Sign Up Fields Modal Open
  const handleOpen = () => {
    handleClose();

    setTimeout(() => {
      openModal();
    }, 200);
  };

  // Sign In Modal Open
  const handleSignIn = () => {
    handleClose();

    setTimeout(() => {
      signInOpenModal();
    }, 200);
  };

  // Client Sign Up Modal Open
  const handleClientSignUp = () => {
    handleClose();

    setTimeout(() => {
      clientSignUpOpenModal();
    }, 200);
  };

  return (
    <>
      <div
        className={`main-modal modal fade show ${
          isVisible ? "modal-show" : ""
        } ${isClosing ? "modal-closing" : ""}`}
        id="practitionerSignUpModal__wr"
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
              <h5 className="modal-title" id="practitionerSignUpModalLabel">
                Practitioner Sign up
              </h5>
              <p>
                Please ensure that you meet the following criteria before
                proceeding.
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
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 criteria__wr">
                  <ul>
                    <li>Qualified Healing Practitioner</li>
                    <li>Have been providing healing for at least 1 year</li>
                    <li>Can provide certificates for your modalities</li>
                    <li>
                      Have Public Liability insurance and can provide
                      certificates
                    </li>
                  </ul>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                  <button
                    type="button"
                    className="btn btn-primary primaryBtn__wr roundedPill_22__wr lh_150__wr py_10px__wr px_18px__wr border_w_1__wr w-100"
                    // data-toggle="modal"
                    // data-target="#practitionerSignUp2Modal__wr"
                    // data-dismiss="modal"
                    onClick={handleOpen}
                  >
                    Sign up
                  </button>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 redirectLink__wr practitionerLogin__wr text-center">
                  <p>
                    I have an account&nbsp;
                    <a
                      href="#"
                      // data-toggle="modal"
                      // data-target="#clientSignInModal__wr"
                      // data-dismiss="modal"
                      onClick={(e) => {
                        e.preventDefault();

                        handleSignIn();
                      }}
                    >
                      Login
                    </a>
                  </p>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 divider__wr text-center">
                  <div className="dividerWrap__wr">
                    <span>Or sign up with</span>
                  </div>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 social__wr">
                  <div className="socialRegistration__wr">
                    <a
                      href="javascript:void(0);"
                      className="icon__wr googleBtn__wr"
                    >
                      <img
                        src="/images/google-btn-icon.svg"
                        loading="lazy"
                        decoding="async"
                        className="img-fluid"
                        alt="Google Icon"
                        title="Google Icon"
                        width="24"
                        height="24"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="icon__wr appleBtn__wr"
                    >
                      <i className="fa-brands fa-apple"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="icon__wr facebookBtn__wr"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="icon__wr linkedinBtn__wr"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ploicyText__wr">
                  <p>
                    By tapping “Sign up”, you acknowledge that you have read the{" "}
                    <Link
                      to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_PRIVACY_POLICY}`}
                    >
                      Privacy Policy
                    </Link>{" "}
                    and agree to the{" "}
                    <Link
                      to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_TERMS_SERVICE}`}
                    >
                      Terms of Service
                    </Link>
                  </p>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 termCheck__wr">
                  <div className="termCheckboxWrap__wr">
                    <label className="custom-control custom-checkbox customCheckbox__wr termCheckbox__wr">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        name="terms2"
                        id="terms2"
                      />
                      <div className="custom-control-label customCheckboxBlockBody__wr termCheckboxBlockBody__wr">
                        <span className="checkMark__wr customCheckboxCheckMark__wr"></span>
                        <div
                          className="content__wr customCheckboxBlockContent__wr termCheckboxBlockContent__wr"
                          // for="terms2"
                        >
                          <p>
                            I accept&nbsp;
                            <Link to="#">Terms &amp; Conditions.</Link>
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 redirectLink__wr clientSign__wr text-center">
                  <p>
                    Client&nbsp;
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();

                        handleClientSignUp();
                      }}
                    >
                      Sign-up as a Client
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BecomePractitionerSignUpMain;
