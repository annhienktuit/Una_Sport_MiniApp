import React, { FC, useEffect, useState } from "react";
import { Text } from "zmp-ui";
import { Section } from "../../components/ui/section";
import { ref, get, child } from "@firebase/database";
import { Booking } from "../../models/models";
import { realTimeDB } from "../../components/firebase/firebase";
import { useNavigate } from "react-router";
import { bookingState } from "../../state";

import { useRecoilState } from "recoil";
import { dateState } from "../../state";

export const BookingCalendarListContent: FC = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [booking, setBooking] = useRecoilState(bookingState);
  const [date, setDate] = useRecoilState(dateState);

  useEffect(() => {
    const dbRef = ref(realTimeDB);
    get(child(dbRef, "Booking"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const bookingData = snapshot.val();
          const bookings: Booking[] = Object.values(bookingData);
          setBookings(bookings);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [date]);

  const handleClick = (data: Booking) => {
    console.log("Clicked data:", data);
    setBooking(data);
    navigate("/detail-info");
  };

  return (
    <Section title={"Lịch trình booking sắp tới của bạn"}>
      <div className="grid grid-cols-1 gap-4">
        {bookings.map((data, key) => (
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
                  Chủ sân {data.host.zaUserInfo.name}
                </Text>
              </div>

              <Text
                size={"xxSmall"}
                className="text-text03 line-clamp-1 max-lines"
              >
                Sân: {data.yard}
              </Text>

              <Text size={"xSmall"} className="text-text01"></Text>
            </div>
            <div className="h-24 aspect-square relative">
              <img
                loading="lazy"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Stamford_Bridge_Clear_Skies.JPG/1200px-Stamford_Bridge_Clear_Skies.JPG"
                className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
