import React from "react";

const HomeBanner = () => {
  return (
    <section className="homeCTABannerSec__wr">
      <div className="container">
        <div className="row flex-lg-nowrap align-items-lg-center justify-content-lg-between">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="contentWrap__wr">
              <h1 className="secTitle__wr">Embracing healing as a way of life</h1>
              <p className="secSubTitle__wr">Creating Change Within</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 d-flex justify-content-lg-end">
            <div className="ctaIconsWrap__wr">
              <div className="frameWrapper__wr">
                <div className="imageWrap__wr">
                  <picture className="icon__wr">
                    <img
                      src="/images/home-cta-banner-heart-icon-bg.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="134"
                      height=""
                    />
                  </picture>
                </div>
              </div>
              <div className="frameWrapper__wr">
                <div className="imageWrap__wr">
                  <picture className="icon__wr">
                    <img
                      src="/images/home-cta-banner-mental-peace-icon-bg.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="118"
                      height=""
                    />
                  </picture>
                </div>
                <span className="title__wr">Healing your</span>
                <div className="imageWrap__wr">
                  <picture className="icon__wr">
                    <img
                      src="/images/home-cta-banner-meditate-icon-bg.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="95"
                      height=""
                    />
                  </picture>
                </div>
              </div>
              <div className="frameWrapper__wr">
                <div className="imageWrap__wr">
                  <picture className="icon__wr">
                    <img
                      src="/images/home-cta-banner-care-icon-bg.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="134"
                      height=""
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
