import React, { Suspense, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Page, Header, Text, Button, Icon } from "zmp-ui";
import DateBooker from "../../components/booking/booker";
import { realTimeDB } from "../../components/firebase/firebase";
import { DropDownButton } from "../../components/ui/dropdownButton";
import { RatingStar } from "../../components/ui/ratingStar";
import { Section } from "../../components/ui/section";
import { Yard } from "../../models/models";
import { slectedSportCenterState } from "../../state";
import { getDatabase, ref, get, child } from "firebase/database";
import ConfirmBottomSheet from "../../components/ui/confirm-bottomsheets";
import { generateBookingInfo } from "../../utils/ultils";

const DetailSportCenter: React.FunctionComponent = () => {
  const [sportCenter, setSportCenter] = useRecoilState(slectedSportCenterState);
  const [yards, setYards] = useState<Yard[]>([]);
  const [date, setDate] = useState(new Date());
  const numberOfStar = sportCenter?.rating ?? 0;
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [bottomSheetText, setBottomSheetText] = useState("");
  
  function getYards() {
      const yardIds = sportCenter?.yards ?? []; // Assuming sportCenter?.yards contains an array of yard ids

  const dbRef = ref(realTimeDB);

  // Create an array of promises for each yard id
  const yardPromises = yardIds.map(yardId => get(child(dbRef, `Yard/${yardId}`)));

  // Use Promise.all to wait for all promises to resolve
  Promise.all(yardPromises)
    .then(yardSnapshots => {
      // Convert the snapshots to actual Yard objects
      const yards = yardSnapshots.map(snapshot => snapshot.exists() ? snapshot.val() : null);

      // Filter out any null values (yards that don't exist)
      const existingYards = yards.filter(yard => yard !== null);

      // Update the state with the fetched yards
      setYards(existingYards);
    })
    .catch(error => {
      console.error("Error fetching yards:", error);
    });

  }

  useEffect(() => {
      console.log("yards?");
      console.log(sportCenter);
      getYards();
  }, [sportCenter]);

  function formatTimeRange(start: number, end: number): string {
  const formatOptions: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };
  const startTime = new Date(start * 1000).toLocaleTimeString("en-US", formatOptions);
  const endTime = new Date(end * 1000).toLocaleTimeString("en-US", formatOptions);
  return `${startTime} - ${endTime}`;
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

  const handleClick = (data: Yard) => {
    console.log("Clicked data:", data);
    const startTime = new Date();
startTime.setHours(9, 0, 0, 0); // Set time to 9 AM

const endTime = new Date();
endTime.setHours(10, 0, 0, 0); // Set time to 10 AM

const timeRange = [ startTime.getTime()/1000, endTime.getTime()/1000];
    setIsSheetVisible(true);
    setBottomSheetText(generateBookingInfo(data, sportCenter!, date, timeRange))
  };

  return (    
    <Page className="relative flex-1 flex flex-col bg-white">
      <Suspense>
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
            placeHolder={"10:00 AM"}
          ></DropDownButton>
        </div>
      </div>
      <Section title={"Chọn sân"} padding="all">
        <div className="mt-6 grid grid-cols-4 gap-4">
          {yards.map((data, key) => (
            <div
              key={key}
              onClick={() => handleClick(data)}
              className="bg-button aspect-square rounded-lg w-full flex items-center justify-center"
            >
              {key}
            </div>
          ))}
        </div>
      </Section>

      <ConfirmBottomSheet
          title="Xác nhận thông tin"
          body={bottomSheetText}
          visible={isSheetVisible}
          onPositiveClick={() => {
            setIsSheetVisible(false);
          }}
          onNegativeClick={() => setIsSheetVisible(false)}
        />
        </Suspense>
    </Page>
  );
};

export default DetailSportCenter;
