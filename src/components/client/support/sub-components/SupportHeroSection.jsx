import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";

const SupportHeroSection = () => {
  return (
    <article className="fluidContentSec__wr text-center supportTopFluidBannerSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="contentBlock__wr supportTopFluidBnrContentBlock__wr">
          <div className="contentBlockTitleWrap__wr supportTopFluidBnrContentTitleWrap__wr">
            <h2 className="contentBlockTitle__wr supportTopFluidBnrContentTitle__wr">
              Help and Support
            </h2>
          </div>
          <div className="searchBoxWrap__wr supportTopFluidBnrSearchBoxWrap__wr">
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
          <ul className="nav nav-pills justify-content-lg-between supportTopFluidBnrNav__wr">
            <li className="nav-item">
              <Link
                className="btn btn-primary primaryBtn__wr btnGreen300__wr rounded_22px__wr"
                to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_CLIENTS_SUPPORT}`}
              >
                <span className="labelText__wr">Clients</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary primaryBtn__wr btnGreen300__wr rounded_22px__wr"
                to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_PRACTIONERS_SUPPORT}`}
              >
                <span className="labelText__wr">Practitioners</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary primaryBtn__wr btnGreen300__wr rounded_22px__wr"
                to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_WORKPLACE_SUPPORT}`}
              >
                <span className="labelText__wr">Workplace</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default SupportHeroSection;
