import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import svet from "../../assets/imgs/svet1.png";

const Banner = () => {
  return (
    <>
      <div className="container mySwiper_flex">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper swiper_one"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="container">
                <div className="text_content">
                  <div>
                    <h1>Скидка 15% на все подвесные светильники </h1>
                    <span>до 5 февраля</span>
                  </div>
                  <div className="img_content">
                    <img src={svet} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
