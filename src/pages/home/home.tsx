import React from "react";
import { Page, Text } from "zmp-ui";
import { MainHeader } from "../../components/ui/mainHeader";
import { SportCenterListContent } from "./sport-center-list";
import NearBySportCenterCarousel from "./sport-center-nearby-page";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col ">
      <div className="flex-1 overflow-auto pb-16">
        <div className="bg-white pl-4 pt-2">
          <Text size="normal" className="text-text02">
            Xin chào
          </Text>
          <Text size="xLarge" className="text-text01" bold>
            Hôm nay bạn sẽ chơi ở đâu?
          </Text>
        </div>
        <MainHeader />
        <SportCenterListContent></SportCenterListContent>
      </div>
    </Page>
  );
};

export default HomePage;
