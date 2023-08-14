import { atom, selector } from "recoil";
import { getAppInfo, getLocation, getUserInfo, openChat } from "zmp-sdk";
import { Booking, SportCenter } from "./models/models";

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

export const openChatScreen = async (user_id) => {
  try {
    await openChat({
      type: "user",
      id: user_id,
      message: "Tôi muốn liên hệ đặt sân",
    });
  } catch (error) {
    console.log(error);
  }
};

export const slectedSportCenterState = atom<SportCenter | null>({
  key: "slectedSportCenterState",
  default: null,
});

export const bookingState = atom<Booking | null>({
  key: "bookingDetailState",
  default: null,
});

export const dateState = atom<Date>({
  key: "dateState",
  default: new Date(),
});

export const searchValueState = atom<string>({
  key: "searchValueState",
  default: "",
});
