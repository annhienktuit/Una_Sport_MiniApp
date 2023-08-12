import React from "react";
import { Page, Text } from "zmp-ui";
import { MainHeader } from "../../components/ui/mainHeader";
import { PublicCourtListContent } from "./public-court";

const FindGrounds: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col ">
      <div className="flex-1 overflow-auto pb-16">
        <div className="bg-white pl-4 pt-2">
          <Text size="normal" className="text-text02">
            Xin chào
          </Text>
          <Text size="xLarge" className="text-text01" bold>
            Chưa có đồng đội? Đừng lo
          </Text>
        </div>
        <MainHeader />
        <PublicCourtListContent />
      </div>
    </Page>
  );
};

export default FindGrounds;
