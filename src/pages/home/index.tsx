import React from "react";
import { Page, Text } from "zmp-ui";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="bg-white page flex items-center justify-center h-screen">
      <Text.Title size="xLarge">Home</Text.Title>
    </Page>
  );
};

export default HomePage;
