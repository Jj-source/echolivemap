import React, { useState, useEffect, useRef } from 'react';
import type { CityType } from '../types';
import { cities } from '../data/cities';

interface CityModalProps {
  onCitySelect: (city: CityType) => void;
  onUseMyPosition: () => void;
  visible: boolean;
}

const CityModal: React.FC<CityModalProps> = ({ onCitySelect, onUseMyPosition, visible }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCities, setFilteredCities] = useState<CityType[]>(cities);
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Filter cities based on search term
    const filtered = cities.filter(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        searchRef.current && 
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city: CityType) => {
    setSelectedCity(city);
    setSearchTerm(city.name);
    setShowDropdown(false);
  };

  const handleViewMap = () => {
    if (selectedCity) {
      onCitySelect(selectedCity);
    }
  };

  if (!visible) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Seleziona una città</h2>
        <p>Scegli una città per visualizzare la mappa</p>
        
        <div className="search-container">
          <input
            ref={searchRef}
            type="text"
            className="city-search"
            placeholder="Cerca o seleziona una città..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            autoComplete="off"
          />
        </div>
        
        {showDropdown && (
          <div 
            ref={dropdownRef} 
            className="city-dropdown" 
            style={{ display: showDropdown ? 'block' : 'none' }}
          >
            {filteredCities.length === 0 ? (
              <div className="city-option">Nessuna città trovata</div>
            ) : (
              filteredCities.map((city, index) => (
                <div 
                  key={index} 
                  className="city-option"
                  onClick={() => handleCitySelect(city)}
                >
                  {city.name}
                </div>
              ))
            )}
          </div>
        )}
        
        <div className="buttons-container">
          <button 
            className="select-city-btn"
            disabled={!selectedCity}
            onClick={handleViewMap}
          >
            Visualizza Mappa
          </button>
          <button 
            className="use-position-btn"
            onClick={onUseMyPosition}
          >
            Usa la mia posizione
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityModal;