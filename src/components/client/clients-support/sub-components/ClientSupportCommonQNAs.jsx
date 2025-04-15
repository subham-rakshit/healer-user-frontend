import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";

const ClientSupportCommonQNAs = () => {
  return (
    <article className="supportFaqColSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="row flexGap_y_lg_64px__wr spaceInner_lg_x_16px__wr">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="itemColBlock__wr supportFaqItemColBlock__wr">
              <div className="content__wr itemBlockContent__wr supportFaqBlockContent__wr">
                <span className="iconBox__wr">
                  <i className="fa-regular fa-heart"></i>
                </span>
                <h2 className="itemBlockTitle__wr">
                  Is there a free trial available?
                </h2>
                <p>
                  Yes, you can try us for free for 30 days. Our friendly team
                  will work with you to get you up and running as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="itemColBlock__wr supportFaqItemColBlock__wr">
              <div className="content__wr itemBlockContent__wr supportFaqBlockContent__wr">
                <span className="iconBox__wr">
                  <i className="fa-regular fa-arrow-right-arrow-left"></i>
                </span>
                <h2 className="itemBlockTitle__wr">
                  Can I change my plan later?
                </h2>
                <p>
                  Of course. Our pricing scales with your company. Chat to our
                  friendly team to find a solution that works for you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="itemColBlock__wr supportFaqItemColBlock__wr">
              <div className="content__wr itemBlockContent__wr supportFaqBlockContent__wr">
                <span className="iconBox__wr">
                  <i className="fa-regular fa-ban"></i>
                </span>
                <h2 className="itemBlockTitle__wr">
                  What is your cancellation policy?
                </h2>
                <p>
                  We understand that things change. You can cancel your plan at
                  any time and we’ll refund you the difference already paid.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="itemColBlock__wr supportFaqItemColBlock__wr">
              <div className="content__wr itemBlockContent__wr supportFaqBlockContent__wr">
                <span className="iconBox__wr">
                  <i className="fa-regular fa-file-lines"></i>
                </span>
                <h2 className="itemBlockTitle__wr">
                  Can other info be added to an invoice?
                </h2>
                <p>
                  At the moment, the only way to add additional information to
                  invoices is to add the information to the workspace's name.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="itemColBlock__wr supportFaqItemColBlock__wr">
              <div className="content__wr itemBlockContent__wr supportFaqBlockContent__wr">
                <span className="iconBox__wr">
                  <img
                    src="/images/credit-card-refresh-dark-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt=""
                    title=""
                    width="24"
                    height="24"
                  />
                </span>
                <h2 className="itemBlockTitle__wr">How does billing work?</h2>
                <p>
                  Plans are per workspace, not per account. You can upgrade one
                  workspace, and still have any number of free workspaces.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="itemColBlock__wr supportFaqItemColBlock__wr">
              <div className="content__wr itemBlockContent__wr supportFaqBlockContent__wr">
                <span className="iconBox__wr">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <h2 className="itemBlockTitle__wr">
                  How do I change my account email?
                </h2>
                <p>
                  You can change the email address associated with your account
                  by going to untitled.com/account from a laptop or desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="supportFaqBoxWrapper__wr">
          <div className="row">
            <div className="col">
              <div className="content__wr supportFaqBoxContent__wr">
                <h3 className="secTitle__wr supportFaqBoxTitle__wr">
                  Still have questions?
                </h3>
                <p>
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
            </div>
            <div className="col-xl-auto col-lg-auto col-md-12 col-sm-12 col-12">
              <div className="btnParent__wr supportFaqBoxBtnParent__wr d-flex flex-wrap">
                <Link
                  to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_CONTACT_US}`}
                  className="btn btn-primary primaryBtn__wr btnGreen300__wr"
                >
                  <span className="labelText__wr">Get in touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ClientSupportCommonQNAs;
