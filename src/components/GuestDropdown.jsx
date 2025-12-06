import React, { useState } from 'react';

const GuestDropdown = ({ setGuestDetails, setDropdownVisible }) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleApply = () => {
    setGuestDetails(
      `${adults} adults · ${children} children · ${rooms} room${
        rooms > 1 ? 's' : ''
      }`
    );
    setDropdownVisible(false);
  };

  return (
    <div className="guest-dropdown-menu">
      <label>
        <b>Adults:</b>
        <input
          type="number"
          min="1"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
        />
      </label>
      <label>
        <b>Children:</b>
        <input
          type="number"
          min="0"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
        />
      </label>
      <label>
        <b>Rooms:</b>
        <input
          type="number"
          min="1"
          value={rooms}
          onChange={(e) => setRooms(Number(e.target.value))}
        />
      </label>
      <button id="Button1" onClick={handleApply}>
        Done
      </button>
    </div>
  );
};

export default GuestDropdown;
