import type { VenueType } from '../types';

// Helper function to convert degrees to radians
export const toRadians = (degrees: number): number => {
  return degrees * Math.PI / 180;
};

// Haversine formula to calculate distance between two points
export const haversineDistance = (
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Function to filter points within a specified radius
export const filterPointsWithinRadius = (
  centerLat: number, 
  centerLon: number, 
  radius: number, 
  points: VenueType[]
): VenueType[] => {
  return points.filter(point => {
    const distance = haversineDistance(
      centerLat, 
      centerLon, 
      point.coordinates[0], 
      point.coordinates[1]
    );
    return distance <= radius;
  });
};