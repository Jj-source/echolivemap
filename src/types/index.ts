// Define TypeScript interfaces for our data structures

export interface CityType {
    name: string;
    coordinates: [number, number]; // [latitude, longitude]
}
  
export interface VenueType {
    name: string;
    coordinates: [number, number]; // [latitude, longitude]
}
  
export interface MapLayer {
    name: string;
    url: string;
    attribution: string;
    maxZoom: number;
}