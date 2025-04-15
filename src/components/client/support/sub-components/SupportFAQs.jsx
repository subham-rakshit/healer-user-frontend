import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";

const SupportFAQs = () => {
  return (
    <article className="faqSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="titleParentWrap__wr text-center faqSecTitleWrap__wr">
          <h2 className="secTitle__wr faqSecTitle__wr">
            Frequently asked questions
          </h2>
          <p>Everything you need to know about the product and billing.</p>
        </div>
      </div>
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="accordion faqAccord__wr" id="accordionExample">
          <div className="card faqAccordCard__wr">
            <div
              className="card-header faqAccordCardHead__wr"
              id="headingOne"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h2 className="faqAccordHeadTitle__wr">
                Is there a free trial available?
              </h2>
              <span className="faqAccordHeadIcon__wr"></span>
            </div>
            <div
              id="collapseOne"
              className="collapse faqCollapse__wr show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body faqAccordCardBody__wr">
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="card faqAccordCard__wr">
            <div
              className="card-header faqAccordCardHead__wr collapsed"
              id="headingTwo"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h2 className="faqAccordHeadTitle__wr">
                Is there a free trial available?
              </h2>
              <span className="faqAccordHeadIcon__wr"></span>
            </div>
            <div
              id="collapseTwo"
              className="collapse faqCollapse__wr"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body faqAccordCardBody__wr">
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="card faqAccordCard__wr">
            <div
              className="card-header faqAccordCardHead__wr collapsed"
              id="headingThree"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h2 className="faqAccordHeadTitle__wr">
                Is there a free trial available?
              </h2>
              <span className="faqAccordHeadIcon__wr"></span>
            </div>
            <div
              id="collapseThree"
              className="collapse faqCollapse__wr"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body faqAccordCardBody__wr">
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="faqSupportBoxWrapper__wr text-center">
          <div className="avatarGroup__wr faqSupportBoxAvatarGrp__wr">
            <picture className="avatar__wr faqSupportBoxAvatar__wr sm__wr">
              <img
                src="/images/practitioner-01-bg.jpg"
                loading="lazy"
                decoding="async"
                className="img-fluid"
                alt=""
                title=""
                width=""
                height=""
              />
            </picture>
            <picture className="avatar__wr faqSupportBoxAvatar__wr">
              <img
                src="/images/Rectangle9.jpg"
                loading="lazy"
                decoding="async"
                className="img-fluid"
                alt=""
                title=""
                width=""
                height=""
              />
            </picture>
            <picture className="avatar__wr faqSupportBoxAvatar__wr sm__wr">
              <img
                src="/images/Rectangle-8.jpg"
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
          <div className="content__wr faqSupportBoxContent__wr">
            <h3 className="secTitle__wr faqSupportBoxTitle__wr">
              Still have questions?
            </h3>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="btnParent__wr faqSupportBoxBtnParent__wr">
            <Link
              to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_CONTACT_US}`}
              className="btn btn-primary primaryBtn__wr btnGreen600__wr"
            >
              <span className="labelText__wr">Get in touch</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SupportFAQs;
