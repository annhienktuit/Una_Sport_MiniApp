// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Text } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { FC, useEffect, useState } from "react";
import { Section } from "../../components/ui/section";
import { RatingStar } from "../../components/ui/ratingStar";
import { Location, SportCenter } from "../../models/models";
import { realTimeDB } from "../../components/firebase/firebase";
import { child, get, ref } from "firebase/database";
import { handleLocationApi } from "../../utils/calculateLocation";
import { getNearestSportCenters, searchAndRankSportCenters } from "../../models/functions";
import { generateRandomNumber } from "../../utils/ultils";
import { useRecoilState } from "recoil";
import { searchValueState } from "../../state";

export const SportCenterNearbyPage: FC = () => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const [sportCenters, setSportCenters] = useState<SportCenter[]>([]);
  const [nearSportCenters, setNearSportCenters] = useState<SportCenter[]>([]);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  useEffect(() => {
    const dbRef = ref(realTimeDB);
    get(child(dbRef, 'SportCenter'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const sportCenterData = snapshot.val();
          const sportCenterArray: SportCenter[] = Object.values(sportCenterData);
          const searchRes = searchAndRankSportCenters(searchValue ,sportCenterArray)
          setSportCenters(searchRes);
          console.log(sportCenterArray);
          handleLocationApi({
            success: (location) => {
              // Handle success
              updateNearest(location, sportCenterArray);
            },
            fail: (error) => {
              // Handle failure
              console.log("Error location rồi")
              console.error('Error:', error);
            },
          });
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.log("Error rồi")
        console.error(error);
      });
  }, [searchValue]);

  function updateNearest(userLocation: Location, centers: SportCenter[]) {
    console.log(centers);
    const nearestSportCenters = getNearestSportCenters(userLocation, centers, 5);
    console.log(nearestSportCenters);
    setNearSportCenters(nearestSportCenters);
  }
  
  const randomCount = generateRandomNumber();

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
        {nearSportCenters.map((center) => (
          <SwiperSlide>
            <div className="rounded-lg overflow-clip w-full flex flex-col justify-center items-top bg-white h-[300px]">
              <div className="w-full h-44 relative">
                <img
                  loading="lazy"
                  src={center.image[0]}
                  className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center bg-skeleton"
                />
              </div>
              <div className="ml-4 mt-2 mb-2 mr-2 flex-1 flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <Text bold size={"normal"} className="text-text01">
                    {center.name}
                  </Text>
                  <RatingStar
                    numberOfStar={3.5}
                    numberOfReview={20}
                  ></RatingStar>
                </div>
                <Text size={"xSmall"} className="text-text03">
                  {center.address}
                </Text>
                <Box flex flex-h>
                <Text size={"xSmall"} className="text-text03">
                  {`Còn ${generateRandomNumber()} sân`}
                </Text>
                <Box flex className="flex-grow"></Box>
                <Text size={"small"} className="text-text02">
                  120.000đ / giờ
                </Text>
                </Box>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
