// ---- Test data

import { SportType, UserInfo, SportCenter, Yard, Booking, addBookingToYard, Location } from "../models";

const locationABC: Location = {
  lat: 10.12345,
  long: 20.6789,
};

const sportTypeFootball: SportType = {
  id: 1,
  name: "Football",
};

const userJohn: UserInfo = {
  id: "user1",
  favouriteSport: [sportTypeFootball],
  zaUserInfo: {
    id: "zaUser1",
    name: "John",
    avatar: "john_avatar.jpg",
    idByOA: "oaUser1",
  },
};

const userJane: UserInfo = {
  id: "user2",
  favouriteSport: [sportTypeFootball],
  zaUserInfo: {
    id: "zaUser2",
    name: "Jane",
    avatar: "jane_avatar.jpg",
    idByOA: "oaUser2",
  },
};

const sportCenterABC: SportCenter = {
  id: 123,
  name: "ABC Sport Center",
  districtId: 5,
  location: locationABC,
  address: "123 Main Street",
  image: ["image1.jpg", "image2.jpg"],
  type: [sportTypeFootball],
  owner: userJohn,
  hotline: "123-456-7890",
  map: "https://maps.google.com/...",
  rating: 4.5,
  yards: [],
};

const yard1: Yard = {
  id: "yard456",
  sportCenter: sportCenterABC,
  number: 1,
  bookings: [],
  bookedRanges: [],
};

const booking1: Booking = {
  id: "booking1",
  yard: yard1,
  host: userJohn,
  timeRange: { start: 10, end: 12 },
  guests: [],
  isPublic: true,
  waitToJoin: [],
};

const booking2: Booking = {
  id: "booking2",
  yard: yard1,
  host: userJane,
  timeRange: { start: 14, end: 15 },
  guests: [],
  isPublic: false,
  waitToJoin: [],
};

const booking3: Booking = {
  id: "booking3",
  yard: yard1,
  host: userJohn,
  timeRange: { start: 13, end: 16 },
  guests: [],
  isPublic: true,
  waitToJoin: [],
};

const booking4: Booking = {
  id: "booking4",
  yard: yard1,
  host: userJane,
  timeRange: { start: 11, end: 13 },
  guests: [],
  isPublic: true,
  waitToJoin: [],
};

console.log(addBookingToYard(yard1, booking1)); // true
console.log(addBookingToYard(yard1, booking2)); // true
console.log(addBookingToYard(yard1, booking3)); // false (overlap)
console.log(addBookingToYard(yard1, booking4)); // true (merge)
