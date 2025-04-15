import React from "react";

const TermsAndConditionsAlert = () => {
  return (
    <div
      className="alert alertStrip__wr text-center alertGreen300__wr alert-dismissible fade show"
      role="alert"
    >
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_16px__wr">
        <p>
          <span>We’ve recently changed our T&Cs!</span> Read our new policy{" "}
          <a href="javascript:void(0);">here</a>.
        </p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditionsAlert;
