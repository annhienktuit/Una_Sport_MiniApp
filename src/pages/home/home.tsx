import React from "react";
import { Page, Box } from "zmp-ui";
import { Divider } from "../../components/ui/divider";
import { MainHeader } from "../../components/ui/mainHeader";
import { SportCenterListContent } from "./sport-center-list";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-16">
        <MainHeader />
        <SportCenterListContent></SportCenterListContent>
      </div>
    </Page>
  );
};

export default HomePage;
