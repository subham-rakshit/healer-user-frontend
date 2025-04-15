import React from "react";

const NeedMoreClarity = () => {
  return (
    <section className="clearityStripSec__wr">
      <div className="container d-flex align-items-center justify-content-between">
        <picture className="footerStar__wr">
          <img
            src="/images/heelar-footer-star-bg.svg"
            loading="lazy"
            decoding="async"
            className="img-fluid"
            alt=""
            title=""
            width="75"
            height="75"
          />
        </picture>
        <div className="contentWrap__wr">
          <h5 className="secTitle__wr">
            Need more <span>clarity?</span>
          </h5>
          <p>
            Visit our <a href="javascript:void(0);">FAQ page</a> or email us at{" "}
            <a href="mailto:connect@heelar.com">connect@heelar.com</a>
          </p>
        </div>
        <picture className="footerStar__wr">
          <img
            src="/images/heelar-footer-star-bg.svg"
            loading="lazy"
            decoding="async"
            className="img-fluid"
            alt=""
            title=""
            width="75"
            height="75"
          />
        </picture>
      </div>
    </section>
  );
};

export default NeedMoreClarity;
