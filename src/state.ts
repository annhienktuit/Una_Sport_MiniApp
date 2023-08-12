import { atom, selector } from "recoil";
import { getAppInfo, getLocation, getUserInfo } from "zmp-sdk";
import { SportCenter } from "./models/models";

export const userState = selector({
  key: "user",
  get: async () => {
    const { userInfo } = await getUserInfo({});
    console.log(userInfo);
    return userInfo;
  },
});

export const getInfo = selector({
  key: "info",
  get: async () => {
    const appInfo = await getAppInfo({});
    console.log(appInfo);
    return appInfo;
  },
});

export const slectedSportCenterState = atom<SportCenter | null>({
  key: 'slectedSportCenterState',
  default: null, 
});