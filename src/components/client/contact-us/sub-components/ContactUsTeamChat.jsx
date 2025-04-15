import React from "react";

const ContactUsTeamChat = () => {
  return (
    <>
      <article className="contactTeamSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="row flexGap_lg_y_64px__wr">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="headingParentWrap__wr contactTeamHeadingWrap__wr">
                <div className="titleParentWrap__wr contactTeamTitleWrap__wr">
                  <h6 className="secSupTitle__wr contactTeamSupTitle__wr">
                    Contact us
                  </h6>
                  <h2 className="secTitle__wr contactTeamTitle__wr">
                    Chat to our friendly team
                  </h2>
                  <p>We’d love to hear from you! Please get in touch.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="supportAddressBlock__wr">
                <div className="supportAddressItem__wr">
                  <span className="icon__wr">
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                  </span>
                  <div className="content__wr supportAddressContent__wr">
                    <h6 className="labelText__wr supportAddressLabelText__wr">
                      Melbourne
                    </h6>
                    <p>100 Flinders Street, Melbourne VIC 3000 AU</p>
                  </div>
                </div>
                <div className="supportAddressItem__wr">
                  <span className="icon__wr">
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                  </span>
                  <div className="content__wr supportAddressContent__wr">
                    <h6 className="labelText__wr supportAddressLabelText__wr">
                      Sydney
                    </h6>
                    <p>100 George Street, Sydney NSW 2000 AU</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="imageBlockBg__wr contactTeamImageBlockBg__wr">
                <picture className="figure__wr contactTeamFigure__wr">
                  <img
                    src="/images/caontact-team-bg.jpg"
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
        </div>
      </article>

      <article className="newsLetterBoxSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="newsLetterBoxWrapper__wr">
            <div className="row spaceInner_lg_x_16px__wr">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="content__wr newsLetterBoxContent__wr">
                  <h3 className="secTitle__wr newsLetterBoxTitle__wr">
                    Join 2,000+ subscribers
                  </h3>
                  <p>Stay in the loop with everything you need to know.</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="newsLetterFormBlock__wr contactNewsLetterFormBlock__wr">
                  <form action="">
                    <div className="input-group newsLetterInputGroup__wr contactNewsLetterInputGroup__wr">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                        aria-label="Enter your email"
                        aria-describedby="newsLetterFormBlock"
                      />
                      <button
                        className="btn btn-primary primaryBtn__wr btnGreen300__wr"
                        type="button"
                      >
                        <span className="labelText__wr">Subscribe</span>
                      </button>
                    </div>
                    <small className="form-text">
                      We care about your data in our{" "}
                      <a href="javascript:void(0);">privacy policy</a>.
                    </small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ContactUsTeamChat;
