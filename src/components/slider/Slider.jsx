// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import PropTypes from "prop-types";

export default function Slider({ children, delay = 1500 }) {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          1300: {
            slidesPerView: 9,
          },
          1200: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 7,
          },
          924: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 5,
          },
          580: {
            slidesPerView: 4,
          },
        }}
        // slidesPerView={
        //   matchMedia("(min-width: 1300px)").matches
        //     ? 8
        //     : matchMedia("(min-width: 1200px)").matches
        //     ? 7
        //     : matchMedia("(min-width: 1024px)").matches
        //     ? 6
        //     : matchMedia("(min-width: 768px)").matches
        //     ? 4
        //     : matchMedia("(min-width: 640px)").matches
        //     ? 3
        //     : 2
        // }
        autoplay={{
          delay,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        grabCursor={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

Slider.propTypes = {
  children: PropTypes.array.isRequired,
  delay: PropTypes.number,
};
