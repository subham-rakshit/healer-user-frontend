import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";

const ClientSupportHeroSection = () => {
  return (
    <>
      <article className="supportBreadCrumbSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_80px__wr">
          <nav aria-label="breadcrumb breadCrumbNav__wr">
            <ol className="breadcrumb breadCrumbWrap__wr">
              <li className="breadcrumb-item breadCrumbItem__wr">
                <Link
                  to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_SUPPORT}`}
                >
                  <span className="labelText__wr">Support</span>
                </Link>
              </li>
              <li
                className="breadcrumb-item breadCrumbItem__wr active"
                aria-current="page"
              >
                <span className="labelText__wr">Clients Support</span>
              </li>
            </ol>
          </nav>
        </div>
      </article>

      <article className="supportBannerSec__wr clientsSupportBnrSec__wr">
        <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
          <div className="row spaceInner_lg_x_32px__wr">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="supportBnrSupTitleWrap__wr clientsSupportBnrSupTitleWrap__wr">
                <h6 className="supportBnrSupTitle__wr clientsSupportBnrSupTitle__wr">
                  Support
                </h6>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contentBlock__wr supportBnrContentBlock__wr clientsSupportBnrContentBlock__wr">
                <div className="contentBlockHeading__wr supportBnrContentHeading__wr clientsSupportBnrContentHeading__wr">
                  <div className="contentBlockTitleWrap__wr supportBnrContentTitleWrap__wr clientsSupportBnrContentTitleWrap__wr">
                    <h2 className="contentBlockTitle__wr supportBnrContentTitle__wr clientsSupportBnrContentTitle__wr">
                      Client Help and Support
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="content__wr supportBnrContent__wr clientsSupportBnrContent__wr">
                <p>Get help and support or learn how to use features.</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 searchBoxWrap__wr supportBnrSearchBoxWrap__wr clientsSupportBnrSearchBoxWrap__wr">
              <form action="">
                <div className="form-group has-search">
                  <span className="form-control-feedback">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ClientSupportHeroSection;
