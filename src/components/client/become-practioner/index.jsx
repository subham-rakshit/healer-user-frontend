import React, { useState } from "react";
import BecomePractitionerSignUpMain from "../auth/subComponents/BecomePractitionerSignUpMain";
import BecomePractitionerSignUpFields from "../auth/subComponents/BecomePractitionerSignUpFields";
import SignInFormModal from "../auth/subComponents/SignInFormModal";
import ClientSignUpModal from "../auth/subComponents/ClientSignUpModal";
import ForgotPasswordModal from "../auth/subComponents/ForgotPasswordModal";
import PractitionerCreateNewPassword from "../auth/subComponents/PractitionerCreateNewPassword";
import PractitionerVerifyOTP from "../auth/subComponents/PractitionerVerifyOTP";
import PractitionerPersonalSignUpModal from "../auth/subComponents/PractitionerPersonalSignUpModal";
import ClientSignUpFieldsModal from "../auth/subComponents/ClientSignUpFieldsModal";
import ClientCreateNewPasswordModal from "../auth/subComponents/ClientCreateNewPasswordModal";
import ClientVerifyOTPModal from "../auth/subComponents/ClientVerifyOTPModal";

const BecomePractionerPage = () => {
  const [isPractitionerSignUpModalOpen, setIsPractitionerSignUpModalOpen] =
      useState(false);
    const [
      isPractitionerSignUpFieldsModalOpen,
      setIsPractitionerSignUpFieldsModalOpen,
    ] = useState(false);
    const [
      isPractitionerCreateNewPasswordModalOpen,
      setIsPractitionerCreateNewPasswordModalOpen,
    ] = useState(false);
    const [
      isPractitionerVerifyOTPModalOpen,
      setIsPractitionerVerifyOTPModalOpen,
    ] = useState(false);
    const [
      isPractitionerPersonalSignUpModalOpen,
      setIsPractitionerPersonalSignUpModalOpen,
    ] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  
    const [isClientSignUpModal, setIsClientSignUpModal] = useState(false);
    const [isClientSignUpFieldsModalOpen, setIsClientSignUpFieldsModalOpen] =
      useState(false);
    const [isClientCreateNewPasswordModalOpen, setIsClientCreateNewPasswordModalOpen] =
      useState(false);
    const [isClientVerifyOTPModalOpen, setIsClientVerifyOTPModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
      useState(false);

  // Practitioner Sign Up Modal
  const handlePractitionerSignUpModalOpen = () => {
    setIsPractitionerSignUpModalOpen(true);
  };
  const handlePractitionerSignUpModalClose = () => {
    setIsPractitionerSignUpModalOpen(false);
  };

  // Practitioner Sign Up Fields Modal
  const handlePractitionerSignUpFieldsModalOpen = () => {
    setIsPractitionerSignUpFieldsModalOpen(true);
  };
  const handlePractitionerSignUpFieldsModalClose = () => {
    setIsPractitionerSignUpFieldsModalOpen(false);
  };

  // Practitioner Create New Password Modal
  const handleCreateNewPasswordModalOpen = () => {
    setIsPractitionerCreateNewPasswordModalOpen(true);
  };
  const handleCreateNewPasswordModalClose = () => {
    setIsPractitionerCreateNewPasswordModalOpen(false);
  };

  // Practitioner Verify OTP Modal
  const handlePractitionerVerifyOTPModalOpen = () => {
    setIsPractitionerVerifyOTPModalOpen(true);
  };
  const handlePractitionerVerifyOTPModalClose = () => {
    setIsPractitionerVerifyOTPModalOpen(false);
  };

  // Practitioner Personal Sign Up Modal
  const handlePractitionerPersonalSignUpModalOpen = () => {
    setIsPractitionerPersonalSignUpModalOpen(true);
  };
  const handlePractitionerPersonalSignUpModalClose = () => {
    setIsPractitionerPersonalSignUpModalOpen(false);
  };

  // Sign In Modal
  const handleSignInModalOpen = () => {
    setIsSignInModalOpen(true);
  };
  const handleSignInModalClose = () => {
    setIsSignInModalOpen(false);
  };

  // Client Sign Up Modal
  const handleClientSignUpModalOpen = () => {
    setIsClientSignUpModal(true);
  };
  const handleClientSignUpModalClose = () => {
    setIsClientSignUpModal(false);
  };

  // Client Sign Up Fields Modal
  const handleClientSignUpFieldsModalOpen = () => {
    setIsClientSignUpFieldsModalOpen(true);
  };
  const handleClientSignUpFieldsModalClose = () => {
    setIsClientSignUpFieldsModalOpen(false);
  };

  // Client Create New Password Modal
  const handleClientCreateNewPasswordModalOpen = () => {
    setIsClientCreateNewPasswordModalOpen(true);
  };
  const handleClientCreateNewPasswordModalClose = () => {
    setIsClientCreateNewPasswordModalOpen(false);
  };

  // Client Verify OTP Modal
  const handleClientVerifyOTPModalOpen = () => {
    setIsClientVerifyOTPModalOpen(true);
  };
  const handleClientVerifyOTPModalClose = () => {
    setIsClientVerifyOTPModalOpen(false);
  };

  // Forgot Password Modal
  const handleForgotPasswordModalOpen = () => {
    setIsForgotPasswordModalOpen(true);
  };
  const handleForgotPasswordModalClose = () => {
    setIsForgotPasswordModalOpen(false);
  };

  return (
    <>
      <article className="becomePractitionerSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="row spaceInner_lg_x_32px__wr align-items-lg-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="contentBlock__wr becomePracSecContentBlock__wr">
                <div className="content__wr becomePracSecContent__wr">
                  <div className="contentBlockTitleWrap__wr becomePracSecContentTitleWrap__wr">
                    <h2 className="contentBlockTitle__wr becomePracSecContentTitle__wr">
                      Touch someone’s life and make a difference
                    </h2>
                  </div>
                  <p>Share the gift of your healing with others.</p>
                  <div className="btnParent__wr becomePracSecBtnParent__wr">
                    <button
                      className="btn btn-primary primaryBtn__wr becomePracSecBtn__wr"
                      type="button"
                      onClick={handlePractitionerSignUpModalOpen}
                    >
                      <span className="labelText__wr">Sign up as a Healer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="becomePracFigureParent__wr">
                <div className="imageBlockBg__wr becomePracImageBlockBg__wr ">
                  <picture className="figure__wr becomePracFigure__wr">
                    <img
                      src="/images/Rectangle9.jpg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt="cta-bg"
                      title="cta-bg"
                      width=""
                      height=""
                    />
                  </picture>
                </div>
                <div className="imageBlockBg__wr becomePracImageBlockBg__wr ">
                  <picture className="figure__wr becomePracFigure__wr">
                    <img
                      src="/images/Rectangle10.jpg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt="cta-bg"
                      title="cta-bg"
                      width=""
                      height=""
                    />
                  </picture>
                  <picture className="figure__wr becomePracFigure__wr">
                    <img
                      src="/images/Rectangle-8.jpg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt="cta-bg"
                      title="cta-bg"
                      width=""
                      height=""
                    />
                  </picture>
                </div>
                <div className="imageBlockBg__wr becomePracImageBlockBg__wr ">
                  <picture className="figure__wr becomePracFigure__wr">
                    <img
                      src="/images/Rectangle11.jpg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt="cta-bg"
                      title="cta-bg"
                      width=""
                      height=""
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="dividerSec__wr contactDividerSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <hr className="w-100 dividerSecHr__wr contactDividerSecHr__wr" />
        </div>
      </article>

      {/* Become Practitioner Sign Up Modal Main */}
      {isPractitionerSignUpModalOpen && (
        <BecomePractitionerSignUpMain
          openModal={handlePractitionerSignUpFieldsModalOpen}
          signInOpenModal={handleSignInModalOpen}
          clientSignUpOpenModal={handleClientSignUpModalOpen}
          closeModal={handlePractitionerSignUpModalClose}
        />
      )}

      {/* Become Practitioner Sign Up Fields Modal */}
      {isPractitionerSignUpFieldsModalOpen && (
        <BecomePractitionerSignUpFields
          closeModal={handlePractitionerSignUpFieldsModalClose}
          createNewPasswordOpenModal={handleCreateNewPasswordModalOpen}
        />
      )}

      {/* Practitioner Create New Password Modal */}
      {isPractitionerCreateNewPasswordModalOpen && (
        <PractitionerCreateNewPassword
          closeModal={handleCreateNewPasswordModalClose}
          verifyOTPOpenModal={handlePractitionerVerifyOTPModalOpen}
        />
      )}

      {/* Practitioner Verify OTP Modal */}
      {isPractitionerVerifyOTPModalOpen && (
        <PractitionerVerifyOTP
          closeModal={handlePractitionerVerifyOTPModalClose}
          personalSignUpOpenModal={handlePractitionerPersonalSignUpModalOpen}
        />
      )}

      {/* Practitioner Personal Sign Up Modal */}
      {isPractitionerPersonalSignUpModalOpen && (
        <PractitionerPersonalSignUpModal
          closeModal={handlePractitionerPersonalSignUpModalClose}
        />
      )}

      {/* Sign In Modal Main */}
      {isSignInModalOpen && (
        <SignInFormModal
          closeModal={handleSignInModalClose}
          forgotPassModalOpen={handleForgotPasswordModalOpen}
          clientSignUpOpenModal={handleClientSignUpModalOpen}
          practitionerSignUpOpenModal={handlePractitionerSignUpModalOpen}
        />
      )}

      {/* Client Sign Up Modal Main */}
      {isClientSignUpModal && (
        <ClientSignUpModal
          closeModal={handleClientSignUpModalClose}
          signInOpenModal={handleSignInModalOpen}
          practitionerSignUpOpenModal={handlePractitionerSignUpModalOpen}
          clientSignUpFieldsOpenModal={handleClientSignUpFieldsModalOpen}
        />
      )}

      {/* Client Sign Up Fields Modal */}
      {isClientSignUpFieldsModalOpen && (
        <ClientSignUpFieldsModal
          closeModal={handleClientSignUpFieldsModalClose}
          createNewPasswordOpenModal={handleClientCreateNewPasswordModalOpen}
        />
      )}

      {/* Client Create New Password Modal */}
      {isClientCreateNewPasswordModalOpen && (
        <ClientCreateNewPasswordModal
          closeModal={handleClientCreateNewPasswordModalClose}
          verifyOTPOpenModal={handleClientVerifyOTPModalOpen}
        />
      )}

      {/* Client Verify OTP Modal */}
      {isClientVerifyOTPModalOpen && (
        <ClientVerifyOTPModal
          closeModal={handleClientVerifyOTPModalClose}
        />
      )}

      {/* Forgot Password Modal Main */}
      {isForgotPasswordModalOpen && (
        <ForgotPasswordModal
          closeModal={handleForgotPasswordModalClose}
          signInOpenModal={handleSignInModalOpen}
        />
      )}
    </>
  );
};

export default BecomePractionerPage;
