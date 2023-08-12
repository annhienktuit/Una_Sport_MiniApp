import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Page, Header, Text, Button, Icon } from "zmp-ui";
import DateBooker from "../../components/booking/booker";
import { DropDownButton } from "../../components/ui/dropdownButton";
import { RatingStar } from "../../components/ui/ratingStar";
import { Section } from "../../components/ui/section";
import { Yard } from "../../models/models";
import { slectedSportCenterState } from "../../state";

const DetailSportCenter: React.FunctionComponent = () => {
  const [sportCenter, setSportCenter] = useRecoilState(slectedSportCenterState);
  const [date, setDate] = useState(new Date());
  const numberOfStar = sportCenter?.rating ?? 0;

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (data: Yard) => {
    console.log("Clicked data:", data);
  };

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Header title="" />
      <div className="h-[200px] relative flex-col flex">
        <img
          loading="lazy"
          src="https://chungcumulberrylane.org/wp-content/uploads/sites/68/2014/10/san-cau-long.jpg"
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center bg-skeleton"
        />
      </div>
      <div className="mr-4 ml-4 flex-col flex">
        <div className="flex justify-between mt-3 mb-3">
          <Text bold size="xLarge">
            {sportCenter?.name}
          </Text>
          <RatingStar
            numberOfStar={numberOfStar}
            numberOfReview={0}
          ></RatingStar>
        </div>
        <div className="bg-button p-[16px] flex rounded-[100px] items-center justify-center text-buttonText">
          <Text bold size="normal">
            Liên hệ Zalo
          </Text>
        </div>
        <div className="mt-2 flex justify-left items-center">
          <Icon icon="zi-clock-1"></Icon>
          <Text className="ml-2 text-successTextColor">Đang mở cửa</Text>
          <Text className="ml-1 text-black">- Mở cửa từ 8:00 đến 23:00</Text>
        </div>
        <Text className="mt-2">{sportCenter?.address}</Text>
        <div className="mt-2">
          <DateBooker onChange={setDate}></DateBooker>
        </div>
        <div className="bg-white mt-4 flex gap-8">
          <DropDownButton
            labelString={"Giờ từ"}
            placeHolder={"9:00 AM"}
          ></DropDownButton>
          <DropDownButton
            labelString={"Đến"}
            placeHolder={"10:00 PM"}
          ></DropDownButton>
        </div>
      </div>
      <Section title={"Chọn sân"} padding="all">
        <div className="mt-6 grid grid-cols-4 gap-4">
          {numbers.map((data, key) => (
            <div
              key={key}
              onClick={() => handleClick(data)}
              className="bg-green-600 text-white aspect-square rounded-lg w-full flex items-center justify-center "
            >
              {key}
            </div>
          ))}
        </div>
      </Section>
    </Page>
  );
};

export default DetailSportCenter;
