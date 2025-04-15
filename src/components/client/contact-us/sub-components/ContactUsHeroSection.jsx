import React from "react";

const ContactUsHeroSection = () => {
  return (
    <>
      <article className="fluidContentSec__wr text-center contactUsTopBannerSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="contentBlock__wr contactTopBnrContentBlock__wr">
            <div className="contentBlockHeading__wr contactTopBnrContentHeading__wr">
              <div className="contentBlockTitleWrap__wr contactTopBnrContentTitleWrap__wr">
                <h6 className="contentBlockSupTitle__wr contactTopBnrContentSupTitle__wr">
                  Contact us
                </h6>
                <h2 className="contentBlockTitle__wr contactTopBnrContentTitle__wr">
                  We’d love to hear from you
                </h2>
              </div>
            </div>
            <div className="content__wr contactTopBnrContent__wr">
              <p>Our friendly team is always here to chat.</p>
            </div>
          </div>
        </div>
      </article>

      <article className="contactInfoSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="itemColBlock__wr text-center contactInfoItemColBlock__wr">
                <div className="content__wr itemBlockContent__wr contactInfoBlockContent__wr">
                  <span className="iconBox__wr contactInfoIconBox__wr">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <h2 className="itemBlockTitle__wr contactInfoItemTitle__wr">
                    Email
                  </h2>
                  <span className="contactInfoText__wr">
                    Our friendly team is here to help.
                  </span>
                  <p>
                    <a href="mailto:enquire@risianstechnology.com">
                      enquire@risianstechnology.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="itemColBlock__wr text-center contactInfoItemColBlock__wr">
                <div className="content__wr itemBlockContent__wr contactInfoBlockContent__wr">
                  <span className="iconBox__wr contactInfoIconBox__wr">
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                  </span>
                  <h2 className="itemBlockTitle__wr contactInfoItemTitle__wr">
                    Ofice
                  </h2>
                  <span className="contactInfoText__wr">
                    Come say hello at our office HQ.
                  </span>
                  <p>
                    Emaar Square Building - 1, Office no - 701 - Downtown -
                    Dubai - UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="itemColBlock__wr text-center contactInfoItemColBlock__wr">
                <div className="content__wr itemBlockContent__wr contactInfoBlockContent__wr">
                  <span className="iconBox__wr contactInfoIconBox__wr">
                    <i className="fa-light fa-phone"></i>
                  </span>
                  <h2 className="itemBlockTitle__wr contactInfoItemTitle__wr">
                    Phone
                  </h2>
                  <span className="contactInfoText__wr">
                    Mon-Fri from 8am to 5pm.
                  </span>
                  <p>
                    <a href="tel:+971581700765">+971 58 170 0765</a>
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

export default ContactUsHeroSection;
