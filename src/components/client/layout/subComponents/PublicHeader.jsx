import React, { useState } from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";
import BecomePractitionerSignUpMain from "../../auth/subComponents/BecomePractitionerSignUpMain";
import BecomePractitionerSignUpFields from "../../auth/subComponents/BecomePractitionerSignUpFields";
import SignInFormModal from "../../auth/subComponents/SignInFormModal";
import ClientSignUpModal from "../../auth/subComponents/ClientSignUpModal";
import ForgotPasswordModal from "../../auth/subComponents/ForgotPasswordModal";

const PublicHeader = () => {
  const [isPractitionerSignUpModalOpen, setIsPractitionerSignUpModalOpen] =
    useState(false);
  const [
    isPractitionerSignUpFieldsModalOpen,
    setIsPractitionerSignUpFieldsModalOpen,
  ] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isClientSignUpModal, setIsClientSignUpModal] = useState(false);
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

  // Forgot Password Modal
  const handleForgotPasswordModalOpen = () => {
    setIsForgotPasswordModalOpen(true);
  };
  const handleForgotPasswordModalClose = () => {
    setIsForgotPasswordModalOpen(false);
  };

  return (
    <>
      <header className="pageHeader__wr navbar navbar-expand-lg">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_48px__wr">
          <Link to={`${ROUTE_PATHS.HEELAR_PUBLIC}`} className="navBrand__wr">
            <img
              src="/images/logo.svg"
              loading="lazy"
              decoding="async"
              className="img-fluid"
              alt="Heelar Brand Identity"
              title=""
              width="149"
              height="37"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="offcanvasHead__wr">
              <a className="brand__wr" href="index.php">
                <img
                  src="/images/logo.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt="Heelar Brand Identity"
                  title=""
                  width="149"
                  height="37"
                />
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="offcanvasBody__wr">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="labelText__wr">For You</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="labelText__wr">For Workspaces</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="labelText__wr">Discover</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="labelText__wr">Bazaar</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="userRightNav__wr">
            <a href="javascript:void(0);" className="searchBtn__wr">
              <span className="icon__wr">
                <img
                  src="/images/header-serch-icon.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="20"
                  height=""
                />
              </span>
            </a>
            <a
              href="#"
              role="button"
              className="pageHeaderSignUpBtn__wr btn btn-primary btn-sm primaryBtn__wr roundedPill_138__wr w_121__wr h_32 fs_14__wr fw_400__wr lh_214_286__wr avenirFont__wr text-capitalize p-0"
              onClick={(e) => {
                e.preventDefault();
                handleClientSignUpModalOpen();
              }}
              // data-toggle="modal"
              // data-target="#clientSignUpModal__wr"
            >
              <span className="labelText__wr">Let’s Begin</span>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>

      {/* Become Practitioner Sign Up Modal Main */}
      {isPractitionerSignUpModalOpen && (
        <BecomePractitionerSignUpMain
          openModal={handlePractitionerSignUpFieldsModalOpen}
          signInOpenModal={handleSignInModalOpen}
          clientSignUpOpenModal={handleClientSignUpModalOpen}
          closeModal={handlePractitionerSignUpModalClose}
        />
      )}

      {/* Become Practitioner Sign Up Fields Modal Main */}
      {isPractitionerSignUpFieldsModalOpen && (
        <BecomePractitionerSignUpFields
          closeModal={handlePractitionerSignUpFieldsModalClose}
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

export default PublicHeader;
