import React from "react";
import { useRecoilState } from "recoil";
import { Page, Text } from "zmp-ui";
import { MainHeader } from "../../components/ui/mainHeader";
import { dateState } from "../../state";
import { SportCenterListContent } from "./sport-center-list";
import { SportCenterNearbyPage } from "./sport-center-nearby-page";

const HomePage: React.FunctionComponent = () => {
  const [date, setDate] = useRecoilState(dateState);

  

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
        <SportCenterNearbyPage></SportCenterNearbyPage>
        <SportCenterListContent></SportCenterListContent>
      </div>
    </Page>
  );
};

export default HomePage;
