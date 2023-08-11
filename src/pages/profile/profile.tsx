import React, { startTransition } from "react";
import { useRecoilValue } from "recoil";
import { Avatar, Page, Text } from "zmp-ui";
import { userState } from "../../state";

function Welcome() {
  const user = useRecoilValue(userState);
  return (
    <div className="flex flex-col items-center">
      <Avatar size={48} className="shadow align-middle mb-2" src={user.avatar}>
        Avatar
      </Avatar>
      <Text className="font-bold text-4xl mt-2">
        {user.name ? user.name : "..."}
      </Text>
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
