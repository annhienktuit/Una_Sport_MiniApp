import React, { FC, useEffect, useState } from "react";
import { localizeString } from "../../assets/string";
import { Button, Text } from "zmp-ui";
import { Section } from "../../components/ui/section";
import { RatingStar } from "../../components/ui/ratingStar";
import { ref, getDatabase, get, child } from "@firebase/database";
import { SportCenter } from "../../models/models";
import { realTimeDB } from "../../components/firebase/firebase";
import { generateRandomNumber } from "../../utils/ultils";
import { useNavigate } from "react-router";
import { slectedSportCenterState } from "../../state";

import { useRecoilState } from "recoil";
import { dateState } from "../../state";
import { filterAvailableCourts } from "../../models/functions";

export const BookingCalendarListContent: FC = () => {
  const navigate = useNavigate();
  const [sportCenters, setSportCenters] = useState<SportCenter[]>([]);
  const [sportCenter, setSportCenter] = useRecoilState(slectedSportCenterState);

  const [date, setDate] = useRecoilState(dateState);

  useEffect(() => {
    const dbRef = ref(realTimeDB);
    get(child(dbRef, "SportCenter"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const sportCenterData = snapshot.val();
          const sportCenterArray: SportCenter[] =
            Object.values(sportCenterData);
          console.log("get List sport!");
          const filterByDateArr = filterAvailableCourts(
            sportCenterArray,
            date.getDate()
          );
          setSportCenters(filterByDateArr);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [date]);

  const handleClick = (data: SportCenter) => {
    console.log("Clicked data:", data);
    setSportCenter(data);
    navigate("/detailSportCenter");
  };

  const randomCount = generateRandomNumber();
  const availabilityText = `Còn ${randomCount} sân`;

  return (
    <Section title="Quản lý booking của bạn">
      <div className="grid grid-cols-1 gap-4">
        {sportCenters.map((data, key) => (
          <div
            key={key}
            onClick={() => handleClick(data)}
            className="bg-white rounded-lg w-full h-24 flex items-left justify-left"
          >
            <div className="ml-4 mt-2 mb-2 mr-2 flex-1 flex-col space-y-1">
              <div className="flex items-center justify-between">
                <Text
                  bold
                  size={"small"}
                  className="text-text01 line-clamp-2 max-lines pr-2"
                >
                  {data.name}
                </Text>
              </div>
              <Text
                size={"xxSmall"}
                className="text-text03 line-clamp-1 max-lines"
              >
                {data.address}
              </Text>

              <Text size={"xxSmall"} className="text-text03">
                {`Còn ${generateRandomNumber()} sân`}
              </Text>
              <Text size={"xSmall"} className="text-text01"></Text>
            </div>
            <div className="h-24 aspect-square relative">
              <img
                loading="lazy"
                src={data.image[0]}
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
