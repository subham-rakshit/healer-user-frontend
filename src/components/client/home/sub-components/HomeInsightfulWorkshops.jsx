import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { insightful_workshops } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomeInsightfulWorkshops = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr insightfulWorkSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_74px__wr">
        <div className="headingParentWrap__wr sessionSecHead__wr insightfulWorkSessionSecHead__wr">
          <div className="titleParentWrap__wr sessionSecTitleWrap__wr insightfulWorkSessionSecTitleWrap__wr">
            <h2 className="secTitle__wr sessionSecTitle__wr insightfulWorkSessionSecTitle__wr textColor_grey_870__wr">
              Insightful Workshops
            </h2>
          </div>
          <div className="btnParent__wr sessionSecHeadBtnParent__wr insightfulWorkSessionSecHeadBtnParent__wr">
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

      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_43_5px__wr">
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
            {insightful_workshops.map((workshop) => (
              <SwiperSlide key={workshop.id}>
                <div className="sessionSliderCard__wr">
                  <picture className="sessionSliderFigure__wr thirdAspect__wr">
                    <a href="#">
                      <img
                        src={workshop.image}
                        loading="lazy"
                        decoding="async"
                        className="img-fluid"
                        alt=""
                        title=""
                        width=""
                        height=""
                      />
                    </a>
                    {!workshop.hiddenButtons && (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm primaryBtn__wr sessionDateBtnWrap__wr"
                        disabled={workshop.disabled}
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
                          <span className="date__wr">{workshop.date}</span> •{" "}
                          <span className="time__wr">{workshop.time}</span>
                        </p>
                      </button>
                    )}
                  </picture>
                  <div className="card-body sessionSliderBody__wr">
                    <div className="sessionSliderNameWrap__wr">
                      <h6 className="sessionSliderHeelarName__wr">
                        <a href="javascript:void(0);">{workshop.healer}</a>
                      </h6>
                      {!workshop.hiddenButtons && (
                        <button
                          type="button"
                          className="btn btn-primary btn-sm primaryBtn__wr sessionSliderJoinBtn__wr"
                          disabled={workshop.disabled}
                        >
                          <span className="labelText__wr">Join Now</span>
                        </button>
                      )}
                    </div>
                    <h3 className="sessionSliderWorkOutName__wr">
                      <a href="javascript:void(0);">{workshop.title}</a>
                    </h3>
                    <p className="sessionSliderGroupName">
                      <a href="javascript:void(0);">{workshop.group}</a>
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

export default HomeInsightfulWorkshops;
