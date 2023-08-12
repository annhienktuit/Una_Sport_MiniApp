// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Text } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { FC } from "react";
import { Section } from "../../components/ui/section";
import { RatingStar } from "../../components/ui/ratingStar";

export const SportCenterNearbyPage: FC = () => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  return (
    <Section title={"Gần bạn"}>
      <Swiper
        className="bg-clear"
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay
        slidesPerView={1}
        loop
        cssMode
        pagination={{ clickable: true }}
      >
        {numbers.map((number) => (
          <SwiperSlide>
            <div className="rounded-lg overflow-clip w-full flex flex-col justify-center items-top bg-white h-[300px]">
              <div className="w-full h-44 relative">
                <img
                  loading="lazy"
                  src="https://chungcumulberrylane.org/wp-content/uploads/sites/68/2014/10/san-cau-long.jpg"
                  className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center bg-skeleton"
                />
              </div>
              <div className="ml-4 mt-2 mb-2 mr-2 flex-1 flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <Text bold size={"normal"} className="text-text01">
                    Sân bóng Thảo Điền
                  </Text>
                  <RatingStar
                    numberOfStar={3.5}
                    numberOfReview={20}
                  ></RatingStar>
                </div>
                <Text size={"xSmall"} className="text-text03">
                  Cây trâm gò vấp
                </Text>
                <Text size={"xSmall"} className="text-text03">
                  Còn 7 sân
                </Text>
                <Text size={"small"} className="text-text01">
                  120.000đ / giờ
                </Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
