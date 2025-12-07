import React, { useState } from 'react';
import HotelDetailsContainer from './HotelDetailsContainer';
import './PropertySection.css';

const PropertySection = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const base = import.meta.env.BASE_URL;

  const hotelDetails = {
    'Luxury Apartments': [
      { title: 'The Westin Gurgaon, New Delhi', description: 'Very good', image: `${base}images/img slide1.jpg`, rating: '4.5' },
      { title: 'FlxHo Quad - Luxury Studio Apart Hotel', description: 'Very good', image: `${base}images/img slide2.jpg`, rating: '3.8' },
      { title: 'DoubleTree by Hilton', description: 'Good', image: `${base}images/img slide3.jpg`, rating: '4.9' },
      { title: 'Olive Service Apartments', description: 'Fabulous', image: `${base}images/img slide4.jpg`, rating: '4.9' }
    ],
    'Smart Homes': [
      { title: 'Townhouse 219', description: 'Very good', image: `${base}images/img slide5.jpg`, rating: '3' },
      { title: 'Black Mountain Golf Club', description: 'Very good', image: `${base}images/img slide6.jpg`, rating: '3.5' },
      { title: 'Bonita Bay Club', description: 'Good', image: `${base}images/img slide7.jpg`, rating: '4.4' },
      { title: 'Southern Swing - A Fun Florida Triangle - Golf Content Network', description: 'Fabulous', image: `${base}images/img slide8.jpg`, rating: '4.8' }
    ],
    'Farmhouses': [
      { title: 'Vadodara bungalow', description: 'Very good', image: `${base}images/img slide9.jpg`, rating: '3.4' },
      { title: 'Seminyak Beachside Villa', description: 'Very good', image: `${base}images/img slide10.jpg`, rating: '2.8' },
      { title: '3ree Villa in Karaj', description: 'Good', image: `${base}images/img slide11.jpg`, rating: '4.2' },
      { title: 'Matthew McConaughey Villa', description: 'Fabulous', image: `${base}images/img slide12.jpg`, rating: '4.5' }
    ],
    'Urban Lofts': [
      { title: 'Maison 42- Onetreestays', description: 'Very good', image: `${base}images/img slide13.jpg`, rating: '4.5' },
      { title: 'Very spacious terrace with rooms for gatherings', description: 'Very good', image: `${base}images/img slide14.jpg`, rating: '4.9' },
      { title: 'ZEN Studios - DLF CyberCity Gurgaon', description: 'Good', image: `${base}images/img slide15.jpg`, rating: '3.1' }
    ]
  };

  const handleItemClick = (hotelName) => {
    setSelectedHotel(hotelDetails[hotelName]);
  };

  return (
    <section className="property-section">
      <h1 className="section-title" style={{ marginRight: '40px' }}>
        Unique Property Types Around the World
      </h1>
      <p className="section-description" style={{ marginRight: '40px' }}>
        Stay in style for your next trip
      </p>
      <div className="property-container">
        <div className="property-item" onClick={() => handleItemClick('Luxury Apartments')}>
          <img src={`${base}images/img luxury1.jpg`} alt="Luxury Apartments" height="350px" width="200px" />
          <div className="property-text">Luxury Apartments</div>
        </div>
        <div className="property-item" onClick={() => handleItemClick('Smart Homes')}>
          <img src={`${base}images/img luxury2.jpg`} alt="Smart Homes" height="350px" width="200px" />
          <div className="property-text">Smart Homes</div>
        </div>
        <div className="property-item" onClick={() => handleItemClick('Farmhouses')}>
          <img src={`${base}images/img luxury3.jpg`} alt="Farmhouses" height="350px" width="200px" />
          <div className="property-text">Farmhouses</div>
        </div>
        <div className="property-item" onClick={() => handleItemClick('Urban Lofts')}>
          <img src={`${base}images/img luxury4.jpg`} alt="Urban Lofts" height="350px" width="200px" />
          <div className="property-text">Urban Lofts</div>
        </div>
      </div>
      {selectedHotel && (
        <HotelDetailsContainer
          hotelDetails={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </section>
  );
};

export default PropertySection;
