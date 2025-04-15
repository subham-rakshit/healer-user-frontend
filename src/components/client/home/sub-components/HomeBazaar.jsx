import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { bazaar } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomeBazaar = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr bazaarSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_74px__wr">
        <div className="headingParentWrap__wr sessionSecHead__wr bazaarSessionSecHead__wr">
          <div className="titleParentWrap__wr sessionSecTitleWrap__wr bazaarSessionSecTitleWrap__wr">
            <h2 className="secTitle__wr sessionSecTitle__wr bazaarSessionSecTitle__wr textColor_grey_870__wr">
              Bazaar
            </h2>
          </div>
          <div className="btnParent__wr sessionSecHeadBtnParent__wr bazaarSessionSecHeadBtnParent__wr">
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

      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_51px__wr">
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
            {bazaar.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="sessionSliderCard__wr bazaarSessionSliderCard__wr rounded_5px__wr">
                  <picture className="sessionSliderFigure__wr bazaarSessionSliderFigure__wr rounded_tl_tr_5px__wr seventhAspect__wr">
                    <a href="#">
                      <img
                        src={item.image}
                        loading="lazy"
                        decoding="async"
                        className="img-fluid"
                        alt=""
                        title=""
                        width=""
                        height=""
                      />
                    </a>
                    {!item.hiddenButtons && (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm primaryBtn__wr sessionDateBtnWrap__wr"
                        disabled={item.disabled}
                      >
                        <i className="calenderIcon__wr">
                          <img
                            src="/images/calendar-white-icon.svg"
                            loading="lazy"
                            decoding="async"
                            className="img-fluid"
                            alt=""
                            title=""
                            width="10"
                            height="10"
                          />
                        </i>
                        <p className="labelText__wr">
                          <span className="date__wr">{item.date}</span> •{" "}
                          <span className="time__wr">{item.time}</span>
                        </p>
                      </button>
                    )}
                  </picture>
                  <div className="card-body sessionSliderBody__wr bazaarSessionSliderBody__wr px_14px__wr pt_10px__wr pb_16px__wr">
                    <div className="sessionSliderProNameWrap__wr">
                      <h6 className="sessionSliderProTitle__wr">
                        <a href="javascript:void(0);">Green Flourite Point</a>
                      </h6>
                      <button type="button" className="btn proFavorite__wr">
                        <i className="fa-light fa-heart"></i>
                      </button>
                    </div>
                    <h3 className="sessionSliderProPrice__wr">
                      From: <span className="amount__wr">$65</span>
                    </h3>
                    <div className="sessionSliderRatingWrap__wr">
                      <div className="sessionSliderRatingStar__wr">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <span className="ratingCount__wr">(10)</span>
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

export default HomeBazaar;
