import { Location } from "../models/models";

import api from "zmp-sdk";

export function calcCrowFliesDistance(from: Location, to: Location) {
  const R = 6371; // Radius of the earth in km
  const dLat = toRadians(to.lat - from.lat);
  const dLon = toRadians(to.long - from.long);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(from.lat)) *
      Math.cos(toRadians(to.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

const getUserLocationByToken = async (token) => {
  // gọi API Server của bạn để truy xuất thông tin từ token và user access token
};

interface ApiCallbacks {
  success: (data: Location) => void;
  fail: (error: any) => void;
}

export function handleLocationApi(callbacks: ApiCallbacks): void {
  const { success, fail } = callbacks;

  api.getLocation({
    success: async (data) => {
      // xử lý khi gọi api thành công
      let { token, latitude, longitude } = data;
      // xử lý cho trường hợp sử dụng phiên bản Zalo mới
      const userLocation: Location = {
        lat: parseFloat(latitude!),
        long: parseFloat(longitude!)
      }
      success(userLocation);
      if (token) {
        const response = await getUserLocationByToken(token);
        
      }
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    },
  });
}