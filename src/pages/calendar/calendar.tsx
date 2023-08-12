import React from "react";
import { MainHeader } from "../../components/ui/mainHeader";
import { Page, Text } from "zmp-ui";
import { SportCenterListContent } from "../home/sport-center-list";
import { BookingCalendarListContent } from "./booking-calendar-list";

const Calendar: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col ">
      <div className="flex-1 overflow-auto pb-16">
        <div className="bg-white pl-4 pt-2"></div>
        <BookingCalendarListContent></BookingCalendarListContent>
      </div>
    </Page>
  );
};

export default Calendar;
