import Fuse from "fuse.js";
import { calcCrowFliesDistance } from "../utils/calculateLocation";
import { District, SportCenter, SportType, Location } from "./models";

/// ------- Filter

// // Lọc các SportCenter có sân trống theo District, SportType và thời gian
// const availableSportCentersByAllCriteria = filterSportCentersBySportType(
//   filterSportCentersByDistrict(sportCentersData, districtABC, currentTimeStamp),
//   sportTypeFootball,
//   currentTimeStamp
// );

export function filterSportCentersWithAvailableCourts(sportCenters: SportCenter[], timestamp: number): SportCenter[] {
  const availableSportCenters: SportCenter[] = [];

  for (const sportCenter of sportCenters) {
    let hasAvailableCourt = false;

    for (const yard of sportCenter.yards) {
      const availableCourt = yard.bookedRanges.every(range => {
        return timestamp < range.start || timestamp >= range.end;
      });

      if (availableCourt) {
        hasAvailableCourt = true;
        break;
      }
    }

    if (hasAvailableCourt) {
      availableSportCenters.push(sportCenter);
    }
  }

  return availableSportCenters;
}

export function filterSportCentersBySportType(sportCenters: SportCenter[], sportType: SportType, timestamp: number): SportCenter[] {
  const filteredSportCenters: SportCenter[] = sportCenters.filter(sportCenter =>
    hasAvailableCourtForSportType(sportCenter, sportType, timestamp)
  );

  return filteredSportCenters;
}

export function filterSportCentersByDistrict(sportCenters: SportCenter[], district: District, timestamp: number): SportCenter[] {
  const filteredSportCenters: SportCenter[] = sportCenters.filter(sportCenter =>
    sportCenter.districtId === district.id && hasAvailableCourt(sportCenter, timestamp)
  );

  return filteredSportCenters;
}

export function filterAvailableCourts(sportCenters: SportCenter[], timestamp: number): SportCenter[] {
  return sportCenters.filter(sportCenter => hasAvailableCourt(sportCenter, timestamp));
}

function hasAvailableCourtForSportType(sportCenter: SportCenter, sportType: SportType, timestamp: number): boolean {
  return sportCenter.type.some(type => type.id === sportType.id) && hasAvailableCourt(sportCenter, timestamp);
}

function hasAvailableCourt(sportCenter: SportCenter, timestamp: number): boolean {
  return sportCenter.yards.some(yard =>
    yard.bookedRanges.every(range => timestamp < range.start || timestamp >= range.end)
  );
}

export function filterSportCentersByRating(sportCenters: SportCenter[], minRating: number): SportCenter[] {
  return sportCenters.filter(sportCenter => sportCenter.rating >= minRating);
}

export function filterSportCentersByDistricts(sportCenters: SportCenter[], districts: District[], timestamp: number): SportCenter[] {
  return sportCenters.filter(sportCenter => districts.some(district => district.id === sportCenter.districtId) && hasAvailableCourt(sportCenter, timestamp));
}

export function sortSportCentersByAverageDistance(sportCenters: SportCenter[], locations: Location[]): SportCenter[] {
  const sortedSportCenters = sportCenters.slice().sort((a, b) => {
    const avgDistanceA = calculateAverageDistance(a.location, locations);
    const avgDistanceB = calculateAverageDistance(b.location, locations);

    return avgDistanceA - avgDistanceB;
  });

  return sortedSportCenters;
}

function calculateAverageDistance(centerLocation: Location, locations: Location[]): number {
  let totalDistance = 0;

  for (const location of locations) {
    totalDistance += calcCrowFliesDistance(centerLocation, location);
  }

  return totalDistance / locations.length;
}

// SHORT -----

export function sortSportCentersByDistanceToLocation(sportCenters: SportCenter[], location: Location): SportCenter[] {
  const sortedSportCenters = sportCenters.slice().sort((a, b) => {
    const distanceToA = calcCrowFliesDistance(a.location, location);
    const distanceToB = calcCrowFliesDistance(b.location, location);

    return distanceToA - distanceToB;
  });

  return sortedSportCenters;
}

export function sortSportCentersByRating(sportCenters: SportCenter[]): SportCenter[] {
  const sortedSportCenters = sportCenters.slice().sort((a, b) => b.rating - a.rating);

  return sortedSportCenters;
}

// SEARCH -------

/// Normal search func
export function searchAndRankSportCenters(query: string, sportCenters: SportCenter[]): SportCenter[] {
  const lowerCaseQuery = query.toLowerCase();

  return sportCenters.map(sportCenter => {
    const sportCenterName = sportCenter.name.toLowerCase();
    const sportCenterAddress = sportCenter.address.toLowerCase();

    const nameMatchIndex = sportCenterName.indexOf(lowerCaseQuery);
    const addressMatchIndex = sportCenterAddress.indexOf(lowerCaseQuery);

    let matchScore = 0;

    if (nameMatchIndex !== -1) {
      matchScore += 1;
    }
    
    if (addressMatchIndex !== -1) {
      matchScore += 0.5; // You can adjust the score based on your criteria
    }

    return {
      ...sportCenter,
      matchScore,
    };
  })
  .filter(sportCenter => sportCenter.matchScore > 0)
  .sort((a, b) => b.matchScore - a.matchScore);
}

export function fuse_searchAndRankSportCenters(query: string, sportCenters: SportCenter[]): SportCenter[] {
  const options = {
    keys: ['name', 'address'],
    threshold: 0.3,
  };

  const fuse = new Fuse(sportCenters, options);
  const searchResults = fuse.search(query);

  return searchResults.map(result => result.item);
}


