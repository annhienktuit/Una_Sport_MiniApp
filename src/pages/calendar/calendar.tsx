import React, { useState } from "react";
import { DatePicker, Page, Text } from "zmp-ui";
import DateBooker from "../../components/booking/booker";

const Calendar: React.FunctionComponent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Page>
      <DatePicker></DatePicker>
      <DateBooker onChange={setDate}></DateBooker>
    </Page>
  );
};

export default Calendar;
