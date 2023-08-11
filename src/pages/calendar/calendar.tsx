import React from "react";
import { Page, Text } from "zmp-ui";

const Calendar: React.FunctionComponent = () => {
  return (
    <Page className="bg-white page flex items-center justify-center h-screen">
      <Text.Title size="xLarge">Lịch của tôi</Text.Title>
    </Page>
  );
};

export default Calendar;
