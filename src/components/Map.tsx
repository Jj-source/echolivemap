import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { CityType, VenueType } from '../types';
import { mapLayers } from '../data/mapLayers';
import { filterPointsWithinRadius } from '../utils/geo';
import { venues } from '../data/venues';

interface MapProps {
  city: CityType;
  visible: boolean;
}

const Map: React.FC<MapProps> = ({ city, visible }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && mapContainerRef.current && !mapRef.current) {
      // Initialize the map
      mapRef.current = L.map(mapContainerRef.current);
      
      // Add the default layer (OpenCycleMap)
      const defaultLayer = L.tileLayer(
        mapLayers.openCycleMap.url, 
        {
          maxZoom: mapLayers.openCycleMap.maxZoom,
          attribution: mapLayers.openCycleMap.attribution
        }
      );
      defaultLayer.addTo(mapRef.current);
      
      // Set up base layers for layer control
      const baseLayers: Record<string, L.TileLayer> = {};
      
      // Add all available base layers to the control
      Object.entries(mapLayers).forEach(([key, layerConfig]) => {
        baseLayers[layerConfig.name] = L.tileLayer(
          layerConfig.url, 
          {
            maxZoom: layerConfig.maxZoom,
            attribution: layerConfig.attribution
          }
        );
      });
      
      // Create layer groups for venues and events
      const venuesLayer = L.layerGroup();
      const eventsLayer = L.layerGroup();
      
      // Set up overlay layers
      const overlays = {
        'Venues': venuesLayer,
        'Events': eventsLayer
      };
      
      // Add layer control
      L.control.layers(baseLayers, overlays).addTo(mapRef.current);
      
      // Add venue markers layer to the map
      venuesLayer.addTo(mapRef.current);
      
      // Return cleanup function to destroy map on unmount
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
    }
  }, [visible]);

  // Update the map view and markers when the city changes
  useEffect(() => {
    if (mapRef.current && visible) {
      // Set view to the selected city
      mapRef.current.setView(city.coordinates, 13);
      
      // Clear existing markers
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current?.removeLayer(layer);
        }
      });
      
      // Add a marker for the city
      const cityMarker = L.marker(city.coordinates)
        .addTo(mapRef.current)
        .bindPopup(`<b>${city.name}</b>`)
        .openPopup();
      
      // Filter venues within 50km radius of the selected city
      const venuesWithinRadius: VenueType[] = filterPointsWithinRadius(
        city.coordinates[0],
        city.coordinates[1],
        50,
        venues
      );
      
      // Add markers for venues within radius
      venuesWithinRadius.forEach((venue) => {
        L.marker(venue.coordinates)
          .bindPopup(venue.name)
          .addTo(mapRef.current as L.Map);
      });
    }
  }, [city, visible]);

  return (
    <div 
      ref={mapContainerRef} 
      className="map-container" 
      style={{ display: visible ? 'block' : 'none' }}
    />
  );
};

export default Map;