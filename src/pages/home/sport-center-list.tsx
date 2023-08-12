import React, { FC, useEffect, useState } from "react";
import { localizeString } from "../../assets/string";
import { Button, Text } from "zmp-ui";
import { Section } from "../../components/ui/section";
import { RatingStar } from "../../components/ui/ratingStar";
import { ref, getDatabase, get, child } from "@firebase/database";
import { SportCenter } from "../../models/models";
import { realTimeDB } from "../../components/firebase/firebase";
import { generateRandomNumber } from "../../utils/ultils";

export const SportCenterListContent: FC = () => {
  const numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [sportCenters, setSportCenters] = useState<SportCenter[]>([]);

  useEffect(() => {
    const dbRef = ref(realTimeDB);
    get(child(dbRef, 'SportCenter'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const sportCenterData = snapshot.val();
          const sportCenterArray: SportCenter[] = Object.values(sportCenterData);
          setSportCenters(sportCenterArray);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClick = () => {
    console.log(sportCenters);
  };

  const randomCount = generateRandomNumber();
  const availabilityText = `Còn ${randomCount} sân`;

  return (
    <Section title={localizeString.locationListHeader}>
      {/* <Button onClick={handleClick} > Click me</Button> */}
      <div className="grid grid-cols-1 gap-4">
        {sportCenters.map((data, key) => (
          <div
            key={key}
            className="bg-white rounded-lg w-full h-24 flex items-left justify-left"
          >
            <div className="h-24 aspect-square relative">
              <img
                loading="lazy"
                src={data.image[0]}
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
              />
            </div>
            <div className="ml-4 mt-2 mb-2 mr-2 flex-1 flex-col space-y-1">
              <div className="flex items-center justify-between">
                <Text bold size={"small"} className="text-text01 line-clamp-2 max-lines pr-2">
                  {data.name}
                </Text>
                <RatingStar numberOfStar={data.rating} numberOfReview={0}></RatingStar>
              </div>
              <Text size={"xxSmall"} className="text-text03 line-clamp-1 max-lines">
                {data.address}
              </Text>
              <Text size={"xxSmall"} className="text-text03">
              {`Còn ${generateRandomNumber()} sân`}
              </Text>
              <Text size={"xSmall"} className="text-text01">

              </Text>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
