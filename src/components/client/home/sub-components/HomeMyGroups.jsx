import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { my_groups } from "../../../../assets/data/home-page";

// Import Swiper styles
import "swiper/css";

const HomeMyGroups = () => {
  const swiperRef = useRef(null);

  return (
    <article className="sessionSec__wr groupSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_74px__wr">
        <div className="headingParentWrap__wr sessionSecHead__wr groupSessionSecHead__wr">
          <div className="titleParentWrap__wr sessionSecTitleWrap__wr groupSessionSecTitleWrap__wr">
            <h2 className="secTitle__wr sessionSecTitle__wr groupSessionSecTitle__wr textColor_grey_870__wr">
              My Groups
            </h2>
          </div>
          <div className="btnParent__wr sessionSecHeadBtnParent__wr groupSessionSecHeadBtnParent__wr">
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

      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_46px__wr">
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
            {my_groups.map((group) => (
              <SwiperSlide key={group.id}>
                <div className="groupSliderCard__wr">
                  <picture className="groupSliderFigure__wr ninthAspect__wr">
                    <a href="#">
                      <img
                        src={group.image}
                        loading="lazy"
                        decoding="async"
                        className="img-fluid"
                        alt=""
                        title=""
                        width=""
                        height=""
                      />
                    </a>
                    {group.locked && (
                      <button type="button" className="btn privateGroupBtn__wr">
                        <i className="icon__wr">
                          <img
                            src="/images/lock-green-icon.svg"
                            loading="lazy"
                            decoding="async"
                            className="img-fluid"
                            alt=""
                            title=""
                            width="10"
                            height="10"
                          />
                        </i>
                      </button>
                    )}
                    <button type="button" className="btn groupHrDots__wr">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </picture>
                  <div className="card-body groupSliderBody__wr text-center">
                    <h3 className="groupSliderTitle__wr">
                      <a href="javascript:void(0);">Soul Discovery</a>
                    </h3>
                    <div className="groupSliderParticipant__wr">
                      <span className="count__wr">13K</span> Participants
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

export default HomeMyGroups;
