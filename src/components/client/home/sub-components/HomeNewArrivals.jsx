import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { new_arrivals } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomeNewArrivals = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr newArrivalSec__wr bg_green_20__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_32px__wr">
        <div className="row spaceInner_lg_x_32px__wr space_lg_x_es_48px__wr align-items-lg-center">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="newArrivalHeading__wr d-lg-flex flex-lg-column align-items-lg-center flexGap_lg_y_8px__wr">
              <picture className="newArrivalStarIcon__wr ">
                <img
                  src="/images/heelar-star-bg.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="75"
                  height="75"
                />
              </picture>
              <div className="newArrivalTitleParentWrap__wr d-lg-flex flex-lg-column align-items-lg-center flexGap_lg_y_8px__wr">
                <h2 className="newArrivalTitle__wr">New Arrivals</h2>
                <h4 className="newArrivalSubTitle__wr">
                  How We Relieve Your Pain And Stress
                </h4>
                <p>With our super powers we have reached this</p>
              </div>
              <div className="btnParent__wr sessionSecHeadBtnParent__wr newArrivalSessionSecHeadBtnParent__wr">
                <button
                  type="button"
                  className="btn linkPrimary__wr sessionHeadLinkPrimary__wr"
                >
                  <span className="labelText__wr">See all</span>
                  <i className="fa-light fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
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
                {new_arrivals.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="sessionSliderCard__wr rounded_10px__wr shadow_GreenRGBA_310_0_12__wr">
                      <picture className="sessionSliderFigure__wr rounded_tl_tr_10px__wr sixthAspect__wr">
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
                      <div className="card-body sessionSliderBody__wr">
                        <div className="sessionSliderNameWrap__wr">
                          <h6 className="sessionSliderNewArrivalTitle__wr">
                            <a href="javascript:void(0);">{item.healer}</a>
                          </h6>
                          {!item.hiddenButtons && (
                            <button
                              type="button"
                              className="btn btn-primary btn-sm primaryBtn__wr sessionSliderJoinBtn__wr"
                              disabled={item.disabled}
                            >
                              <span className="labelText__wr">Join Now</span>
                            </button>
                          )}
                        </div>
                        <h3 className="sessionSliderNewArrivalSubTitle__wr">
                          <a href="javascript:void(0);">{item.title}</a>
                        </h3>
                        <p className="sessionSliderNewArrivalGroup__wr">
                          {item.group}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomeNewArrivals;
