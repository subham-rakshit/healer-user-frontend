import React from "react";

const HomeReference = () => {
  return (
    <>
      <article className="curveBannerSec__wr">
        <picture className="backGroundImage__wr">
          <img
            src="/images/curve-bg.svg"
            loading="lazy"
            decoding="async"
            className="img-fluid"
            alt=""
            title=""
            width=""
            height=""
          />
        </picture>
        <div className="container position-relative w_lg_max_972px__wr w_md_max_100_per__wr">
          <div className="row align-items-lg-center justify-content-lg-between justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contentWrap__wr">
                <h5 className="secTitle__wr">
                  Reference site about Lorem Ipsum, giving information
                </h5>
              </div>
            </div>
            <div className="col-xl-auto col-lg-auto col-md-12 col-sm-12 col-12">
              <button
                type="button"
                className="btn btn-primary btn-sm primaryBtn__wr rounded-pill"
              >
                <span className="labelText__wr">Know More</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomeReference;
