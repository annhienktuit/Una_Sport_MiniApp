import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getUserInfo } from "zmp-sdk/apis";
import { Avatar, Page, Text } from "zmp-ui";
import { userState } from "../../state";

function Welcome() {
  // const user = useRecoilValue(userState);
  return (
    <div className="flex flex-col items-center">
      <Avatar
        size={48}
        className="shadow align-middle mb-2"
        src={"https://h5.zdn.vn/static/images/avatar.png"}
      >
        Avatar
      </Avatar>
      <h1 className="text-2xl font-bold text-gray-900">Nhien Nguyen</h1>
    </div>
  );
}

const Profile: React.FunctionComponent = () => {
  return (
    <Page className="bg-white page flex justify-center">
      <Welcome />
    </Page>
  );
};

export default Profile;
