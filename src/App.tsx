import React, { useState } from 'react';
import CityModal from './components/CityModal';
import Map from './components/Map';
import type { CityType } from './types';
import './index.css';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [showMap, setShowMap] = useState<boolean>(false);

  const handleCitySelect = (city: CityType) => {
    setSelectedCity(city);
    setShowModal(false);
    setShowMap(true);
  };

  const handleUseMyPosition = () => {
    // Get user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation: CityType = {
            name: "Your Location",
            coordinates: [position.coords.latitude, position.coords.longitude]
          };
          handleCitySelect(userLocation);
        },
        (error) => {
          console.error(`Error getting location: ${error.message}`);
          alert("Failed to get your location. Please select a city instead.");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert("Geolocation is not supported by your browser. Please select a city.");
    }
  };

  return (
    <div className="app">
      <CityModal 
        onCitySelect={handleCitySelect}
        onUseMyPosition={handleUseMyPosition}
        visible={showModal}
      />
      
      {selectedCity && (
        <Map 
          city={selectedCity} 
          visible={showMap}
        />
      )}
    </div>
  );
};

export default App;