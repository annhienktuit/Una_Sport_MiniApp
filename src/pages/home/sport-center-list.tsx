import React, { FC } from "react";
import { localizeString } from "../../assets/string";
import { Text } from "zmp-ui";
import { Section } from "../../components/ui/section";
import { RatingStar } from "../../components/ui/ratingStar";

export const SportCenterListContent: FC = () => {
  const numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Section title={localizeString.locationListHeader}>
      <div className="grid grid-cols-1 gap-4">
        {numbers.map((number) => (
          <div
            key={number}
            className="bg-white rounded-lg w-full h-24 flex items-left justify-left"
          >
            <div className="h-24 aspect-square relative">
              <img
                loading="lazy"
                src="https://chungcumulberrylane.org/wp-content/uploads/sites/68/2014/10/san-cau-long.jpg"
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
              />
            </div>
            <div className="ml-4 mt-2 mb-2 mr-2 flex-1 flex-col space-y-1">
              <div className="flex items-center justify-between">
                <Text bold size={"small"} className="text-text01">
                  Sân bóng Thảo Điền
                </Text>
                <RatingStar numberOfStar={3.5} numberOfReview={0}></RatingStar>
              </div>
              <Text size={"xxSmall"} className="text-text03">
                Cây trâm gò vấp
              </Text>
              <Text size={"xxSmall"} className="text-text03">
                Còn 7 sân
              </Text>
              <Text size={"xSmall"} className="text-text01">
                120.000đ / giờ
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
