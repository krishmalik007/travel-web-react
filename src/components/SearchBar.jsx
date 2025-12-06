import React, { useState, useEffect } from 'react';
import GuestDropdown from './GuestDropdown';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const KNOWN_PLACES = [
  'Kerala',
  'Australia',
  'Europe',
  'Azerbaijan',
  'Bali',
  'Canaves Oia Epitome',
  'Goa',
  'Manali',
  'Delhi',
  'Kolkata',
  'Shimla',
  'Bangalore',
  'Hyderabad',
  'Udaipur',
  'Mumbai',
  'Pune',
  'Rishikesh',
  'Jaipur',
  'Agra',
  'Chennai'
];

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [, setDate] = useState('');
  const [guestDetails, setGuestDetails] = useState(
    '2 adults · 0 children · 1 room'
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const term = destination.trim();
    if (!term) {
      alert('Please enter a destination.');
      return;
    }

    const match =
      KNOWN_PLACES.find(
        (p) => p.toLowerCase() === term.toLowerCase()
      ) || null;

    if (match) {
      navigate(`/place/${match}`);
    } else {
      alert('We do not have packages for that destination yet.');
    }
  };

  const handleDateChange = (selectedDates, dateStr) => {
    setDate(dateStr);
  };

  useEffect(() => {
    flatpickr('#date-input', {
      mode: 'range',
      dateFormat: 'Y-m-d',
      onClose: handleDateChange
    });
  }, []);

  return (
    <div className="search-container">
      <div className="search-bar-wrapper">
        <div className="input-wrapper">
          <i className="fas fa-map-marker-alt" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <i className="fas fa-calendar-alt" />
          <input
            type="text"
            id="date-input"
            placeholder="Check-in date — Check-out date"
            readOnly
          />
        </div>

        <div
          className="input-wrapper"
          style={{ cursor: 'pointer' }}
          onClick={() => setDropdownVisible((prev) => !prev)}
        >
          <i className="fas fa-user-friends" />
          <input type="text" value={guestDetails} readOnly />
        </div>

        <button id="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {isDropdownVisible && (
        <GuestDropdown
          setGuestDetails={setGuestDetails}
          setDropdownVisible={setDropdownVisible}
        />
      )}
    </div>
  );
};

export default SearchBar;
