import { Booking, SportCenter, Yard } from "../models/models";
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library
import { getUserInfo } from "zmp-sdk";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

function formatTimeRange(start: number, end: number): string {
  const formatOptions: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };
  const startTime = new Date(start * 1000).toLocaleTimeString("en-US", formatOptions);
  const endTime = new Date(end * 1000).toLocaleTimeString("en-US", formatOptions);
  return `${startTime} - ${endTime}`;
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function generateBookingInfo(yard: Yard, _sportCenter: SportCenter, date: Date,timeRange: [number, number]): string {
  const { sportCenter } = yard;
  const [ start, end ] = timeRange;
  const sportCenterId = _sportCenter.id;

  const formattedTimeRange = formatTimeRange(start, end);
  const formattedDate = formatDate(date.getDate());

  const bookingInfo = `
Sân được chọn: ${sportCenter}
Địa điểm: ${_sportCenter.address},
Thời gian: ${formattedTimeRange}
Ngày ${formattedDate}
`;

  return bookingInfo;
}

export function createBooking(yard: Yard, _sportCenter: SportCenter, date: Date, timeRange: [number, number]): Booking {
  const [startTime, endTime] = timeRange;
  const host = useRecoilValue(userState);
  
  const bookingTimeRange = [startTime, endTime];

  const booking: Booking = {
    id: 'your-booking-id', // Assign a booking ID
    yard: yard,
    host: host["userInfo"],
    timeRange: bookingTimeRange,
    guests: [], // Initialize guests array as needed
    isPublic: true, // Set this as needed
    waitToJoin: [], // Initialize waitToJoin array as needed
  };

  return booking;
}