import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { popular_practitioners } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomePopularPractitioners = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr popularPracSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_74px__wr">
        <div className="headingParentWrap__wr sessionSecHead__wr popularPracSecHead__wr">
          <div className="titleParentWrap__wr sessionSecTitleWrap__wr popularPracSecTitleWrap__wr">
            <h2 className="secTitle__wr sessionSecTitle__wr popularPracSecTitle__wr textColor_grey_870__wr">
              Popular Practitioners
            </h2>
          </div>
          <div className="btnParent__wr sessionSecHeadBtnParent__wr popularPracSecHeadBtnParent__wr">
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

      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_37_5px__wr">
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
            {popular_practitioners.map((partitioner) => (
              <SwiperSlide key={partitioner.id}>
                <div className="sessionSliderCard__wr bg_transparent__wr shadow-none rounded-0">
                  <picture className="sessionSliderFigure__wr rounded_10px__wr fifthAspect__wr">
                    <a href="#">
                      <img
                        src={partitioner.image}
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
                  <div className="card-body sessionSliderBody__wr px_0px__wr py_s_10px__wr">
                    <div className="sessionSliderNameWrap__wr mb-0">
                      <h6 className="sessionSliderPractitionerName__wr">
                        <a href="javascript:void(0);">Vince Fleming</a>
                      </h6>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm primaryBtn__wr sessionSliderAboutPracBtn__wr"
                      >
                        <span className="labelText__wr">About Me</span>
                      </button>
                    </div>
                    <h3 className="sessionSliderLocation__wr">
                      <a href="javascript:void(0);">Location</a>
                    </h3>
                    <p className="sessionSliderPortfolio__wr">
                      <span>EFT</span> • <span>Soul Healing</span> •{" "}
                      <span>Light Language</span>
                    </p>
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

export default HomePopularPractitioners;
