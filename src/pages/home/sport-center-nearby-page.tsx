// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      autoplay
      loop
      cssMode
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="w-full flex justify-center items-center bg-primary h-72">
          {/* Content of the slide */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full flex justify-center items-center bg-primary h-72">
          {/* Content of the slide */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
