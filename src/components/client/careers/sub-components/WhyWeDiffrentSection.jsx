import React from "react";

const WhyWeDiffrentSection = () => {
  return (
    <>
      <article className="careerWhyUsSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="headingParentWrap__wr careerWhyUsSecHead__wr">
            <div className="titleParentWrap__wr careerWhyUsSecTitleWrap__wr">
              <h6 className="secSupTitle__wr careerWhyUsSecSupTitle__wr">
                Why we’re different
              </h6>
              <h2 className="secTitle__wr careerWhyUsSecTitle__wr">
                We bring love, kindness and respect to everyone that we work
                with
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non.
              </p>
            </div>
            <div className="btnParent__wr careerWhyUsSecHeadBtnParent__wr">
              <button
                className="btn btn-primary btn-sm primaryBtn__wr btnGreen300__wr rounded_22px__wr avenirFont__wr"
                type="button"
              >
                <span className="labelText__wr">Connect with us</span>
              </button>
            </div>
          </div>
          <div className="row spaceInner_lg_x_32px__wr flex-lg-row-reverse">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="bgBlock__wr bgHalfColBlock__wr careerWhyUsBgBlock__wr">
                <div className="imageBlockBg__wr careerWhyUsImageBlockBg__wr">
                  <picture className="figure__wr careerWhyUsFigure__wr">
                    <img
                      src="/images/career-why-us-bg.jpg"
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
              <div className="contentBlock__wr contentHalfColBlock__wr careerWhyUsContentBlock__wr">
                <div className="content__wr careerWhyUsContent__wr">
                  <p>
                    Dolor enim eu tortor urna sed duis nulla. Aliquam
                    vestibulum, nulla odio nisl vitae. In aliquet pellentesque
                    aenean hac vestibulum turpis mi bibendum diam. Tempor
                    integer aliquam in vitae malesuada fringilla.
                  </p>
                  <h2 className="contentBlockTitle__wr careerWhyUsContentTitle__wr">
                    Together we make a difference
                  </h2>
                  <p>
                    Mi tincidunt elit, id quisque ligula ac diam, amet. Vel
                    etiam suspendisse morbi eleifend faucibus eget vestibulum
                    felis. Dictum quis montes, sit sit. Tellus aliquam enim
                    urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi,
                    tellus tincidunt. At feugiat sapien varius id.
                  </p>
                  <p>
                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                    volutpat mollis at volutpat lectus velit, sed auctor.
                    Porttitor fames arcu quis fusce augue enim. Quis at habitant
                    diam at. Suscipit tristique risus, at donec. In turpis vel
                    et quam imperdiet. Ipsum molestie aliquet sodales id est ac
                    volutpat.{" "}
                  </p>
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
    </>
  );
};

export default WhyWeDiffrentSection;
