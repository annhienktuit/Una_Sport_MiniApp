import { StringLike } from "@firebase/util";

export interface SportCenter {
  id: number;
  name: string;
  districtId: number;
  location: Location;
  address: string;
  image: string[];  // Mảng các đường dẫn hình ảnh
  type: SportType[];  // Mảng các loại thể thao
  
  owner: UserInfo;
  hotline: string;
  map: string;    // deeplink google map
  rating: number; // [1...5]

  yards: Yard[];
}

export interface Yard  {
  id: string; // SportCenterId_number
  sportCenter: SportCenter; // 
  number: number; // Sân số mấy

  bookings: Booking[];  // Các đơn đặt chỗ của sân này
  bookedRanges: TimeRange[];  // Các khoảng thời gian đã bị đặt. Dùng để truy vấn nhanh hơn
}

export interface Booking {
  id: string;
  yard: Yard;
  host: UserInfo;

  timeRange: TimeRange; // Giờ đặt sân

  guests: UserInfo[]; // Member đã join
  isPublic: boolean;  // Có tuyển người lạ?
  waitToJoin: UserInfo[]; // Danh sách người lạ chờ accept join
}

interface TimeRange {
  start: number;  // Giờ bắt đầu (định dạng timestamp)
  end: number;    // Giờ kết thúc (định dạng timestamp)
}

export interface District {
  id: number;
  name: string;
}

export interface Location {
  lat: number;
  long: number;
}

export interface UserInfo {
  id: string;
  favouriteSport: SportType[];  // Mảng các loại thể thao yêu thích
  zaUserInfo: {
    id: string;
    name: string;
    avatar: string;
    idByOA?: string;
  };
}

export interface SportType {
  id: number;
  name: string;
}


interface TimeRange {
  start: number;  // Giờ bắt đầu (định dạng 24 giờ, ví dụ: 8)
  end: number;    // Giờ kết thúc (định dạng 24 giờ, ví dụ: 10)
}

// Function to check if TimeRange is valid (start < end)
function isValidTimeRange(timeRange: TimeRange): boolean {
  return timeRange.start < timeRange.end;
}

export interface District {
  id: number;
  name: string;
}

export interface Location {
  lat: number;
  long: number;
}

export interface UserInfo {
  id: string;
  favouriteSport: SportType[];
  zaUserInfo: {
    id: string;
    name: string;
    avatar: string;
    idByOA?: string;
  };
}

export interface SportType {
  id: number;
  name: string;
}

// just prepare
export interface Extra {
  key: string;
  label: string;
  options: {
    key: string;
    label: string;
    selected?: boolean;
  }[];
}

// -------- FUNCTION  ------

// Function to add a Booking to Yard and update bookedRanges
export function addBookingToYard(yard: Yard, booking: Booking): boolean {
  const isOverlapping = yard.bookedRanges.some(existingRange =>
    isTimeRangeOverlap(existingRange, booking.timeRange)
  );

  if (isOverlapping) {
    return false; // Cannot add booking due to time overlap
  }

  yard.bookedRanges.sort((a, b) => a.start - b.start);
  mergeAdjacentTimeRanges(yard.bookedRanges, booking.timeRange);

  yard.bookings.push(booking);
  yard.bookedRanges.push(booking.timeRange);

  return true; // Booking added successfully
}

// Function to merge adjacent time ranges with end equal to start
function mergeAdjacentTimeRanges(ranges: TimeRange[], newRange: TimeRange) {
  const insertIndex = findInsertIndex(ranges, newRange);

  const prevRange = ranges[insertIndex - 1];
  const nextRange = ranges[insertIndex];

  if (prevRange && prevRange.end === newRange.start) {
    prevRange.end = newRange.end;
  } else if (nextRange && newRange.end >= nextRange.start) {
    nextRange.start = Math.min(nextRange.start, newRange.start);
    nextRange.end = Math.max(nextRange.end, newRange.end);
  } else {
    ranges.splice(insertIndex, 0, newRange);
  }
}

// Function to find the index where a TimeRange should be inserted
function findInsertIndex(ranges: TimeRange[], newRange: TimeRange): number {
  let low = 0;
  let high = ranges.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (ranges[mid].start === newRange.start) {
      return mid;
    } else if (ranges[mid].start < newRange.start) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

// Function to check if two TimeRanges overlap
function isTimeRangeOverlap(range1: TimeRange, range2: TimeRange): boolean {
  return range1.start < range2.end && range2.start < range1.end;
}