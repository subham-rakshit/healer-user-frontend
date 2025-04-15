import React from "react";

const TermsServiceHeroSection = () => {
  return (
    <article className="policyBannerSec__wr termsPolicyBnrSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="row spaceInner_lg_x_32px__wr">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="policyBnrPublishWrap__wr termsBnrPublishWrap__wr">
              <h6 className="policyBnrPublish__wr termsBnrPublish__wr">
                Published 20 Jan 2024
              </h6>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="contentBlock__wr policyBnrContentBlock__wr termsBnrContentBlock__wr">
              <div className="contentBlockHeading__wr policyBnrContentHeading__wr termsBnrContentHeading__wr">
                <div className="contentBlockTitleWrap__wr policyBnrContentTitleWrap__wr termsBnrContentTitleWrap__wr">
                  <h2 className="contentBlockTitle__wr policyBnrContentTitle__wr termsBnrContentTitle__wr">
                    Terms of Service
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="content__wr policyBnrContent__wr termsBnrContent__wr">
              <p>
                By accessing our website, you are agreeing to be bound by these
                terms of service, and agree that you are responsible for
                compliance with any applicable local laws.
              </p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 searchBoxWrap__wr policyBnrSearchBoxWrap__wr termsBnrSearchBoxWrap__wr">
            <form action="">
              <div className="form-group has-search">
                <span className="form-control-feedback">
                  <i className="fa-light fa-magnifying-glass"></i>
                </span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TermsServiceHeroSection;
