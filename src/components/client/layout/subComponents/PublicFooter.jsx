import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../../../routes/paths";

const PublicFooter = () => {
  return (
    <footer className="pageFooter__wr">
      {/* Footer 1 */}
      <article className="topFooterWrap__wr">
        <div className="container">
          <div className="row justify-content-lg-between">
            {/* Language Selector Dropdown */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="dropdown footerLangWrap__wr">
                <a
                  className="btn btn__wr"
                  href="javascript:void(0);"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="icon__wr">
                    <img
                      src="/images/lang-globe-icon.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="20"
                      height="20"
                    />
                  </span>
                  <span className="labelText__wr">English</span>
                  <span className="arrowIcon__wr">
                    <img
                      src="images/chevron-down-icon.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="16"
                      height="16"
                    />
                  </span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:void(0);">
                    Arabic
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    French
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Hindi
                  </a>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row justify-content-lg-between">
                {/* Customer Care Links */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="linkWrap__wr">
                    <h6 className="footTitle__wr">Customer Care</h6>
                    <ul>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_CONTACT_US}`}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_PRIVACY_POLICY}`}
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_REFUND_POLICY}`}
                        >
                          Refund Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_SHIPPING_POLICY}`}
                        >
                          Shipping Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_TERMS_SERVICE}`}
                        >
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_RETURNS_POLICY}`}
                        >
                          Returns Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_SUPPORT}`}
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Crisis Support</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Resource Links */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="linkWrap__wr">
                    <h6 className="footTitle__wr">Resource</h6>
                    <ul>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_BECOME_PRACTIONER}`}
                        >
                          Become a Practitioner
                        </Link>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Content Directory</a>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_HEALING_SESSIONS}`}
                        >
                          Healing Sessions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_COURSES}`}
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_WORKSHOPS}`}
                        >
                          Workshops
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_CIRCLES}`}
                        >
                          Circles
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_GROUPS}`}
                        >
                          Groups
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_BLOG_DIRECTORY}`}
                        >
                          Blogs Directory
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Healing Tools Links */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="linkWrap__wr">
                    <h6 className="footTitle__wr">Healing Tools</h6>
                    <ul>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_ETHICAL_STANDARDS}`}
                        >
                          Ethical Standards
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_SOURCING_ATW}`}
                        >
                          Sourcing Around the World
                        </Link>
                      </li>
                      <li>
                        <a href="javascript:void(0);">.....</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">.....</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">.....</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">.....</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* About Us Links */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="linkWrap__wr">
                    <h6 className="footTitle__wr">About Us</h6>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">About Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Blocks</a>
                      </li>
                      <li>
                        <Link
                          to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_CAREERS}`}
                        >
                          Careers
                        </Link>
                      </li>
                      <li>
                        <a href="giving-back-to-gaia.php">
                          Giving Back to Gaia
                        </a>
                      </li>
                      <li>
                        <a href="live-gaia-projects.php">Live Gaia Projects</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">.....</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Connected to Heelar */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="infoWrap__wr">
                <div className="footerSubscribeWrap__wr">
                  <div className="titleParentWrap__wr">
                    <h6 className="secTitle__wr">Stay Connected to Heelar</h6>
                  </div>
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                        aria-label="Recipient's email address"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append btnParent__wr">
                        <button className="btn btn__wr" type="button">
                          <span className="icon__wr">
                            <img
                              src="/images/arrow-right-white-icon.svg"
                              loading="lazy"
                              decoding="async"
                              className="img-fluid"
                              alt=""
                              title=""
                              width="15"
                              height="14"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="labelText__wr">
                    Subscribe to our newsletter and stay up to date with the new
                    collections, products and exclusive offers.
                  </p>
                </div>
                <div className="footerSocialWrap__wr">
                  <div className="titleParentWrap__wr">
                    <h6 className="secTitle__wr">Connect with Heelar</h6>
                  </div>
                  <div className="socialWrap__wr">
                    <a
                      href="javascript:void(0);"
                      target="_blank"
                      className="facebook__wr"
                    >
                      <span className="icon__wr">
                        <img
                          src="/images/facebook-colored-icon.svg"
                          loading="lazy"
                          decoding="async"
                          className="img-fluid"
                          alt=""
                          title=""
                          width="32"
                          height="32"
                        />
                      </span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      target="_blank"
                      className="twitter__wr"
                    >
                      <span className="icon__wr">
                        <img
                          src="/images/twitter-colored-icon.svg"
                          loading="lazy"
                          decoding="async"
                          className="img-fluid"
                          alt=""
                          title=""
                          width="32"
                          height="32"
                        />
                      </span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      target="_blank"
                      className="linkdin__wr"
                    >
                      <span className="icon__wr">
                        <img
                          src="/images/linkedIn-colored-icon.svg"
                          loading="lazy"
                          decoding="async"
                          className="img-fluid"
                          alt=""
                          title=""
                          width="32"
                          height="32"
                        />
                      </span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      target="_blank"
                      className="insta__wr"
                    >
                      <span className="icon__wr">
                        <img
                          src="/images/instagram-colored-icon.svg"
                          loading="lazy"
                          decoding="async"
                          className="img-fluid"
                          alt=""
                          title=""
                          width="32"
                          height="32"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer 2 */}
      <article className="bottomFooterWrap__wr">
        <div className="container d-flex flex-wrap align-items-center justify-content-between">
          <div className="leftWrap__wr">
            <div className="siteCopyRight__wr">
              <picture className="starBg__wr">
                <img
                  src="/images/heelar-star-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="30"
                  height="30"
                />
              </picture>
              <p>© 2023 Heelar LLC. All rights reserved.</p>
            </div>
          </div>

          <div className="rightWrap__wr">
            <div className="footerCountry__wr">
              <span className="icon__wr">
                <img
                  src="/images/lang-globe-icon.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="20"
                  height="20"
                />
              </span>
              <span className="labelText__wr">
                United Arab Emirates (GBP £)
              </span>
            </div>

            <div className="footerCardWrap__wr">
              <span className="card__wr">
                <img
                  src="/images/footer-card-amex-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
              <span className="card__wr">
                <img
                  src="/images/footer-card-apple-pay-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
              <span className="card__wr">
                <img
                  src="/images/footer-card-diners-club-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
              <span className="card__wr">
                <img
                  src="/images/footer-card-discover-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
              <span className="card__wr">
                <img
                  src="/images/footer-card-mastercard-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
              <span className="card__wr">
                <img
                  src="/images/footer-card-paypal-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
              <span className="card__wr">
                <img
                  src="/images/footer-card-visa-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="36"
                  height=""
                />
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Footer 3 */}
      <article className="bannerFooterWrap__wr">
        <div className="container">
          <div className="row flex-lg-nowrap justify-content-lg-between">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="contentWrap__wr">
                <div className="titleParentWrap__wr">
                  <h2 className="secTitle__wr">
                    Start the journey ...<span>Discovering You</span>
                  </h2>
                </div>
                <p>
                  Discovery comes from within, allowing yourself to be with
                  yourself, releasing what no longer serves or belongs to you,
                  layer by layer ....
                </p>
                <div className="btnParent__wr d-flex flex-wrap align-items-center justify-content-start">
                  <a href="javascript:void(0);" className="gPlayStore__wr">
                    <img
                      src="/images/footer-google-play-badge-bg.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="135"
                      height=""
                    />
                  </a>
                  <a href="javascript:void(0);" className="appStore__wr">
                    <img
                      src="/images/footer-app-store-badge-bg.svg"
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      alt=""
                      title=""
                      width="135"
                      height=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="imageWrap__wr">
                <picture className="image__wr">
                  <img
                    src="/images/footer-mob-app-bg.png"
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
    </footer>
  );
};

export default PublicFooter;
