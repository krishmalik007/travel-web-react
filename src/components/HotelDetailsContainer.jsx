import React from 'react';
import './HotelDetailsContainer.css'; 
import { Link } from 'react-router-dom';

const HotelDetailsContainer = ({ hotelDetails, onClose }) => {
  return (
    <div className="hotel-details-container active">
      <button id="close-details" onClick={onClose}>
        <i className="fa fa-close" style={{ fontSize: '24px' }}></i>
      </button>
      <div className="hotel-details-content" style={{ marginTop: '40px' }}>
        {hotelDetails.map((hotel, index) => (
          <div className="hotel-item" key={index}>
            <img src={hotel.image} alt={hotel.title} height="200px" width="330px" style={{ marginBottom: '10px' }} />
           <h4>
  <Link to="/contact">{hotel.title}</Link>
</h4>

            <p>{hotel.description}</p>
            <div className="rating">Rating: {hotel.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailsContainer;
