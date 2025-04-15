import React from "react";

const SourcingATWHeroSection = () => {
  return (
    <article className="twoColContentSec__wr ethicalStandardsBannerSec__wr sourcAroundWorldBannerSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="row spaceInner_lg_x_32px__wr flex-lg-row-reverse align-items-lg-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="bgBlock__wr bgHalfColBlock__wr ethicalStdBnrSecBgBlock__wr">
              <div className="imageBlockBg__wr ethicalStdBnrSecImageBlockBg__wr">
                <picture className="figure__wr ethicalStdBnrSecFigure__wr aspectSeventhRatio__wr">
                  <img
                    src="/images/sourcing-around-world-bnr-bg.jpg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt=""
                    title=""
                    width=""
                    height=""
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="contentBlock__wr contentHalfColBlock__wr ethicalStdBnrSecContentBlock__wr">
              <div className="contentBlockHeading__wr ethicalStdBnrSecContentHead__wr">
                <div className="contentBlockTitleWrap__wr ethicalStdBnrSecContentTitleWrap__wr">
                  <h2 className="contentBlockTitle__wr ethicalStdBnrSecContentTitle__wr">
                    Sourcing From Around The World
                  </h2>
                </div>
              </div>
              <div className="content__wr ethicalStdBnrSecContent__wr">
                <p>
                  We aim to work with mine owners who employ <br />
                  ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SourcingATWHeroSection;
