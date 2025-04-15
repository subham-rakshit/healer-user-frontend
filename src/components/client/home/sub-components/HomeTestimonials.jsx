import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { testimonials } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomeTestimonials = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr testimonialSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_74px__wr">
        <div className="headingParentWrap__wr sessionSecHead__wr testimonialSessionSecHead__wr">
          <div className="titleParentWrap__wr sessionSecTitleWrap__wr testimonialSessionSecTitleWrap__wr">
            <h2 className="secTitle__wr sessionSecTitle__wr testimonialSessionSecTitle__wr textColor_grey_870__wr">
              Over 30,000 reviews
            </h2>
          </div>
          <div className="btnParent__wr sessionSecHeadBtnParent__wr testimonialSessionSecHeadBtnParent__wr">
            <button
              type="button"
              className="btn btn-primary btn-sm primaryBtn__wr rounded_176px__wr btnBgWhite__wr"
            >
              <span className="labelText__wr">Newest</span>
            </button>
            <button
              type="button"
              className="btn linkPrimary__wr sessionHeadLinkPrimary__wr"
            >
              <span className="labelText__wr">Show All</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_68px__wr">
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
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="sliderTestimonialCard__wr">
                  <div className="card-header testimonialCardHead__wr">
                    <div className="sliderTestimonialUserInfo__wr">
                      <picture className="sliderTestimonialAvtar__wr d-flex align-items-center justify-content-center flex-shrink-0 size_70px__wr rounded_50_per__wr overflow_hidden__wr">
                        <img
                          src={item.profilePicture}
                          loading="lazy"
                          decoding="async"
                          className="img-fluid w-100 h-100 objectFit_cover__wr objectPos_center"
                          alt=""
                          title=""
                          width="70"
                          height="70"
                        />
                      </picture>
                      <div className="sliderTestimonialProfileInfo__wr d-block flex-fill text_left__wr">
                        <h6 className="sliderTestimonialUserName__wr">
                          {item.name}
                        </h6>
                        <span className="sliderTestimonialUserDesignation__wr">
                          {item.designation}
                        </span>
                      </div>
                    </div>
                    <div className="sliderTestimonialRatingStar__wr">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-thin fa-star"></i>
                      <i className="fa-thin fa-star"></i>
                    </div>
                  </div>
                  <div className="card-body sliderTestimonialBody__wr">
                    <div className="sliderTestimonialRatingWrap__wr">
                      <div className="sliderTestimonialRatingStar__wr">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="sliderTestimonialPost__wr">
                      <p>{item.message}</p>
                    </div>
                    <div className="sliderTestimonialFoot__wr">
                      <span className="icon__wr d-inline-flex size_30px__wr">
                        <img
                          src="/images/quote-circle-green-icon.svg"
                          loading="lazy"
                          decoding="async"
                          className="img-fluid"
                          alt=""
                          title=""
                          width="30"
                          height="30"
                        />
                      </span>
                      <i className="line__wr"></i>
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

export default HomeTestimonials;
