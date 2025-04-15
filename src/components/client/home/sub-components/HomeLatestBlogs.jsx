import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { latest_blogs } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomeLatestBlogs = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr latestBlogSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_74px__wr">
        <div className="headingParentWrap__wr sessionSecHead__wr latestBlogSessionSecHead__wr">
          <div className="titleParentWrap__wr sessionSecTitleWrap__wr latestBlogSessionSecTitleWrap__wr">
            <h2 className="secTitle__wr sessionSecTitle__wr latestBlogSessionSecTitle__wr textColor_grey_870__wr">
              Latest Blogs
            </h2>
          </div>
          <div className="btnParent__wr sessionSecHeadBtnParent__wr latestBlogSessionSecHeadBtnParent__wr">
            <button
              type="button"
              className="btn btn-primary btn-sm primaryBtn__wr rounded_176px__wr btnBgWhite__wr"
            >
              <span className="labelText__wr">Drawn To</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm primaryBtn__wr rounded_176px__wr btnBgWhite__wr"
            >
              <span className="labelText__wr">Newest</span>
            </button>
            <button
              type="button"
              className="btn linkPrimary__wr link_sm__wr sessionHeadLinkPrimary__wr"
            >
              <span className="labelText__wr">Show All</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_47_5px__wr">
        <div className="swiper_wr">
          {/* Custom Navigation Buttons */}
          <div className="swiper-nav-btns">
            <button
              className="swiper-custom-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              {/* Your custom left arrow icon or text */}
              <span className="fa-light fa-angle-left"></span>
            </button>
            <button
              className="swiper-custom-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              {/* Your custom right arrow icon or text */}
              <span className="fa-light fa-angle-right"></span>
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={35}
            slidesPerView={1}
            navigation={false}
            loop={true}
            breakpoints={{
              // when window width is >= 576px
              576: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
              // when window width is >= 992px
              992: {
                slidesPerView: 4,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {latest_blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blogSliderCard__wr">
                  <picture className="blogSliderFigure__wr eighthAspect__wr">
                    <a href="javascript:void(0);">
                      <img
                        src={blog.image}
                        loading="lazy"
                        decoding="async"
                        className="img-fluid"
                        alt=""
                        title=""
                        width=""
                        height=""
                      />
                    </a>
                  </picture>
                  <div className="card-body blogSliderBody__wr">
                    <div className="blogSliderCardHead__wr">
                      <div className="sessionSliderUserInfo__wr">
                        <picture className="sessionSliderProfileAvtar__wr d-flex align-items-center justify-content-center flex-shrink-0 size_26px__wr rounded_50_per__wr overflow_hidden__wr">
                          <img
                            src="/images/heelar-profile-avatar.jpg"
                            loading="lazy"
                            decoding="async"
                            className="img-fluid w-100 h-100 objectFit_cover__wr objectPos_center"
                            alt=""
                            title=""
                            width="26"
                            height="26"
                          />
                        </picture>
                        <div className="sessionSliderProfileInfo__wr d-block flex-fill text_left__wr">
                          <h6 className="sessionSliderUserName__wr">
                            Julie Saunders
                          </h6>
                          <span className="sessionSliderUserLocation__wr">
                            London
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn blogSliderHrDots__wr d-flex bg_transparent__wr border-0 borderColor_transparent__wr rounded_0px__wr p_0px__wr"
                      >
                        <i className="fa-solid fa-ellipsis"></i>
                      </button>
                      <button
                        type="button"
                        className="btn blogBookMark__wr d-flex bg_transparent__wr border-0 borderColor_transparent__wr rounded_0px__wr p_0px__wr"
                      >
                        <i className="fa-light fa-bookmark"></i>
                        {/* <!-- <i className="fa-solid fa-bookmark"></i> --><!-- for filled icon --> */}
                      </button>
                    </div>
                    <div className="blogSliderDescription__wr">
                      <p>Reference site about Lorem Ipsum...</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  );
};

export default HomeLatestBlogs;
