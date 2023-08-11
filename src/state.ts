import { atom, selector } from "recoil";
import { getLocation, getUserInfo } from "zmp-sdk";

export const userState = selector({
  key: "user",
  get: async () => {
    const { userInfo } = await getUserInfo({});
    console.log(userInfo);
    return userInfo;
  },
});
