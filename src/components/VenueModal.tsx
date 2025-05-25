// VenueModal.tsx
import React, { useRef, useEffect } from 'react';
import type { VenueType } from '../types';

type Props = {
  venue: VenueType;
  onClose: () => void;
};

const VenueModal: React.FC<Props> = ({ venue, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-container">
      <div className="modal" ref={modalRef}>
        <h2>{venue.name}</h2>
        <p>{venue.description}</p>
        <div className="buttons-container">
          <button className="select-city-btn">See Events</button>
          <button className="use-position-btn">Get Directions</button>
        </div>
      </div>
    </div>
  );
};

export default VenueModal;