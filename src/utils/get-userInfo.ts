import { getUserInfo } from "zmp-sdk/apis";

export const getUser = async () => {
  try {
    const { userInfo } = await getUserInfo({});
    console.log(userInfo);
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
};
