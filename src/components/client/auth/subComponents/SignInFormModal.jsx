import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const SignInFormModal = ({
  closeModal,
  forgotPassModalOpen,
  clientSignUpOpenModal,
  practitionerSignUpOpenModal,
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

  // Forgot Password Modal Open
  const handleForgotPassword = () => {
    handleClose();

    setTimeout(() => {
      forgotPassModalOpen();
    }, 200);
  };

  // Client Sign Up Modal Open
  const handleClientSignUp = () => {
    handleClose();

    setTimeout(() => {
      clientSignUpOpenModal();
    }, 200);
  };

  // Practitioner Sign Up Modal Open
  const handlePractitionerSignUp = () => {
    handleClose();

    setTimeout(() => {
      practitionerSignUpOpenModal();
    }, 200);
  };

  return (
    <div
      className={`main-modal modal fade show ${isVisible ? "modal-show" : ""} ${
        isClosing ? "modal-closing" : ""
      }`}
      id="clientSignInModal__wr"
      style={{ display: "block" }}
      onClick={handleClose}
    >
      <div
        className="modal-dialog modal-xl customModalDialog_lg_1235__wr modal-dialog-centered modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="modal-content">
          <div className="modal-header">
            {/* <!-- <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> --> */}
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
            <div className="container-fluid">
              <div className="row flex-lg-nowrap align-items-lg-center justify-content-lg-between">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 formSideWrap__wr">
                  <div className="formWrpper__wr">
                    <div className="secHeadWrap__wr text-center">
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
                      <h5 className="modal-title" id="clientSignInModalLabel">
                        Welcome Back
                      </h5>
                      <p>Please enter your details</p>
                    </div>
                    <div className="secBodyWrap__wr">
                      <div className="form-row">
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
                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pass__wr">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="off"
                            required=""
                          />
                        </div>
                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 redirectLink__wr forgotPass__wr text-lg-right text-center">
                          <p>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();

                                handleForgotPassword();
                              }}
                            >
                              Forgot Password?
                            </a>
                          </p>
                        </div>
                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 invalid-feedback">
                          <p>
                            Your email address or password is incorrect, please
                            check and re-enter.
                          </p>
                        </div>
                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                          <button
                            type="submit"
                            className="btn btn-primary primaryBtn__wr roundedPill_22__wr lh_150__wr py_10px__wr px_18px__wr border_w_1__wr w-100"
                          >
                            Sign in
                          </button>
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
                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 redirectLink__wr newAccount__wr text-center">
                          <p>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();

                                handleClientSignUp();
                              }}
                            >
                              Create New Account?
                            </a>
                          </p>
                        </div>
                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 redirectLink__wr practitionerSign__wr text-center">
                          <p>
                            Healing Practitioner?&nbsp;
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();

                                handlePractitionerSignUp();
                              }}
                            >
                              Sign-up as a Practitioner
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 sliderSideWrap__wr">
                  <Swiper
                    className="clientSignInSlider__wr"
                    spaceBetween={35}
                    slidesPerView={1}
                    navigation={false}
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className="itemWrapper__wr">
                        <picture className="image__wr">
                          <img
                            src="/images/client-sign-up-modal-first-bg.jpg"
                            loading="lazy"
                            decoding="async"
                            className="img-fluid"
                            alt=""
                            title=""
                            width="696"
                            height=""
                          />
                        </picture>
                        <div className="captionWrap__wr">
                          <h6 className="title__wr">
                            “Create change in you and your life, heal on heelar”
                          </h6>
                          <div className="infoWrap__wr">
                            <p className="name">Lula Meyers</p>
                            <p>
                              <span>EFT Practitioner</span>
                              <span>EFT - Soul Healing - Crystal Healing</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="itemWrapper__wr">
                        <picture className="image__wr">
                          <img
                            src="/images/client-sign-up-modal-second-bg.jpg"
                            loading="lazy"
                            decoding="async"
                            className="img-fluid"
                            alt=""
                            title=""
                            width="696"
                            height=""
                          />
                        </picture>
                        <div className="captionWrap__wr">
                          <h6 className="title__wr">
                            “Creating change within, heal on heelar”
                          </h6>
                          <div className="infoWrap__wr">
                            <p className="name">Lula Meyers</p>
                            <p>
                              <span>EFT Practitioner</span>
                              <span>EFT - Soul Healing - Crystal Healing</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="boxColumnWrapper__wr">
                        <div className="qouteWrap__wr">
                          <picture className="starIcon__wr">
                            <img
                              src="/images/heelar-star-bg.svg"
                              loading="lazy"
                              decoding="async"
                              className="img-fluid"
                              alt=""
                              title=""
                              width="75"
                              height="75"
                            />
                          </picture>
                          <p className="title__wr">
                            You must find the place inside yourself where
                            nothing is impossible.
                          </p>
                          <div className="proWrap__wr">
                            <picture className="pic__wr">
                              <img
                                src="/images/heelar-profile-avatar.jpg"
                                loading="lazy"
                                decoding="async"
                                className="img-fluid"
                                alt=""
                                title=""
                                width="64"
                                height="64"
                              />
                            </picture>
                            <div className="heelarInfo__wr text-center">
                              <h6 className="name__wr">Deepak Chopra</h6>
                              <p className="des__wr">Healer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInFormModal;
