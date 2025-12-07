// src/components/Place.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Place.css';
import Footer from './Footer';
import Navbar from './Navbar';

const base = import.meta.env.BASE_URL;

const Place = () => {
  const { placeName } = useParams();

  const packageDetails = {
    Kerala: [
      {
        title: 'Premium 4N Kerala Vacay',
        description: '2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 1.avif`,
        features: ['Round Trip Flights', '5 Star Hotels', '8 Activities', 'Intercity Car Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Premium 5N Trip to Kerala',
        description: '1N Cochin - 2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 2.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '9 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Australia: [
      {
        title: 'Premium 4N Australia Vacay',
        description: '2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 28.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '8 Activities', 'Intercity Car Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Premium 5N Trip to Australia',
        description: '1N Cochin - 2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 29.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '9 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Europe: [
      {
        title: 'Premium 4N Europe Vacay',
        description: '2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 30.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '8 Activities', 'Intercity Car Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Premium 5N Trip to Europe',
        description: '1N Cochin - 2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 31.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '9 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Azerbaijan: [
      {
        title: 'Premium 4N Azerbaijan Vacay',
        description: '2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 32.avif`,
        features: ['Round Trip Flights', '5 Star Hotels', '8 Activities', 'Intercity Car Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Premium 5N Trip to Azerbaijan',
        description: '1N Cochin - 2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 33.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '9 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Bali: [
      {
        title: 'Premium 4N Bali Vacay',
        description: '2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 26.avif`,
        features: ['Round Trip Flights', '5 Star Hotels', '8 Activities', 'Intercity Car Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Premium 5N Trip to Bali',
        description: '1N Cochin - 2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 16.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '9 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    'Canaves Oia Epitome': [
      {
        title: 'Premium 4N Canaves Oia Epitome Vacay',
        description: '2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 9.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '8 Activities', 'Intercity Car Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Premium 5N Trip to Canaves Oia Epitome',
        description: '1N Cochin - 2N Munnar - 1N Thekkady - 1N Alleppey',
        image: `${base}images/img 10.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '9 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Goa: [
      {
        title: 'Most Wanted Goa Package',
        description: 'Calangute , 2.1 km drive to Calangute Beach',
        image: `${base}images/img 3.webp`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Goa 5N Experience',
        description: '3N North Goa - 2N South Goa',
        image: `${base}images/img 4.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Manali: [
      {
        title: 'Premium 4N Manali Getaway',
        description: '2N North Manali - 2N South Manali',
        image: `${base}images/img 5.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Manali 5N Experience',
        description: '3N North Manali - 2N South Manali',
        image: `${base}images/img 6.jpeg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Delhi: [
      {
        title: 'Premium 4N Delhi Getaway',
        description: '2N North Delhi - 2N South Delhi',
        image: `${base}images/img 7.webp`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Delhi 5N Experience',
        description: '3N North Delhi- 2N South Delhi',
        image: `${base}images/img 7.jpeg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Kolkata: [
      {
        title: 'Premium 4N Kolkata Getaway',
        description: '2N North Kolkata - 2N South Kolkata',
        image: `${base}images/img 8.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Kolkata 5N Experience',
        description: '3N North Kolkata - 2N South Kolkata',
        image: `${base}images/img 9.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Shimla: [
      {
        title: 'Premium 4N Shimla Getaway',
        description: '2N North Shimla - 2N South Shimla',
        image: `${base}images/img 10.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Shimla 5N Experience',
        description: '3N North Shimla - 2N South Shimla',
        image: `${base}images/img 11.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Bangalore: [
      {
        title: 'Premium 4N Banglore Getaway',
        description: '2N North Banglore - 2N South Banglore',
        image: `${base}images/img 12.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Banglore 5N Experience',
        description: '3N North Banglore - 2N South Banglore',
        image: `${base}images/img 13.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Hyderabad: [
      {
        title: 'Premium 4N Hyderabad Getaway',
        description: '2N North Hyderabad - 2N South Hyderabad',
        image: `${base}images/img 14.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Hyderabad 5N Experience',
        description: '3N North Hyderabad - 2N South Hyderabad',
        image: `${base}images/img 15.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Udaipur: [
      {
        title: 'Premium 4N Udaipur Getaway',
        description: '2N North Udaipur - 2N South Udaipur',
        image: `${base}images/img 16.webp`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Udaipur 5N Experience',
        description: '3N North Udaipur - 2N South Udaipur',
        image: `${base}images/img 17.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Mumbai: [
      {
        title: 'Premium 4N Mumbai Getaway',
        description: '2N North Mumbai - 2N South Mumbai',
        image: `${base}images/img 18.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Mumbai 5N Experience',
        description: '3N North Mumbai - 2N South Mumbai',
        image: `${base}images/img 19.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Pune: [
      {
        title: 'Premium 4N Pune Getaway',
        description: '2N North Pune - 2N South Pune',
        image: `${base}images/img 20.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Pune 5N Experience',
        description: '3N North Pune - 2N South Pune',
        image: `${base}images/img 21.jpg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Rishikesh: [
      {
        title: 'Premium 4N Rishikesh Getaway',
        description: '2N North Rishikesh - 2N South Rishikesh',
        image: `${base}images/img 22.jpg`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Rishikesh 5N Experience',
        description: '3N North Rishikesh - 2N South Rishikesh',
        image: `${base}images/img 23.webp`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Jaipur: [
      {
        title: 'Premium 4N Jaipur Getaway',
        description: '2N North Jaipur - 2N South Jaipur',
        image: `${base}images/img 24.webp`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Jaipur 5N Experience',
        description: '3N North Jaipur - 2N South Jaipur',
        image: `${base}images/img 25.jpeg`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],

    Agra: [
      {
        title: 'Premium 4N Agra Getaway',
        description: '2N North Agra - 2N South Agra',
        image: `${base}images/img 27.cms`,
        features: ['Round Trip Flights', 'Luxury Resorts', '8 Activities', 'Beach Transfers'],
        duration: '4N/5D',
      },
      {
        title: 'Agra 5N Experience',
        description: '3N North Agra - 2N South Agra',
        image: `${base}images/img 26.avif`,
        features: ['Round Trip Flights', '5 Star Hotels', '10 Activities', 'Intercity Car Transfers'],
        duration: '5N/6D',
      },
    ],
  };

  const placeData = packageDetails[placeName] || packageDetails['Kerala'];

  return (
    <>
      <Navbar />
      <div className="place-container">
        <h1>{placeName}</h1>
        <p style={{ fontSize: '30px' }}>
          Welcome to {placeName}! Here are some amazing vacation packages you can explore:
        </p>

        <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'space-between' }}>
          <div className="package-cards" style={{ marginLeft: '40px' }}>
            {placeData.map((packageItem, index) => (
              <div className="package-card" key={`row1-col1-${index}`}>
                <img
                  src={packageItem.image}
                  alt={packageItem.title}
                  className="package-image"
                />
                <div className="package-details">
                  <h3>{packageItem.title}</h3>
                  <p>{packageItem.description}</p>
                  <ul>
                    {packageItem.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>{packageItem.duration}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="package-cards" style={{ marginLeft: '40px' }}>
            {placeData.map((packageItem, index) => (
              <div className="package-card" key={`row1-col2-${index}`}>
                <img
                  src={packageItem.image}
                  alt={packageItem.title}
                  className="package-image"
                />
                <div className="package-details">
                  <h3>{packageItem.title}</h3>
                  <p>{packageItem.description}</p>
                  <ul>
                    {packageItem.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>{packageItem.duration}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'space-between' }}>
          <div className="package-cards" style={{ marginLeft: '40px' }}>
            {placeData.map((packageItem, index) => (
              <div className="package-card" key={`row2-col1-${index}`}>
                <img
                  src={packageItem.image}
                  alt={packageItem.title}
                  className="package-image"
                />
                <div className="package-details">
                  <h3>{packageItem.title}</h3>
                  <p>{packageItem.description}</p>
                  <ul>
                    {packageItem.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>{packageItem.duration}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="package-cards" style={{ marginLeft: '40px' }}>
            {placeData.map((packageItem, index) => (
              <div className="package-card" key={`row2-col2-${index}`}>
                <img
                  src={packageItem.image}
                  alt={packageItem.title}
                  className="package-image"
                />
                <div className="package-details">
                  <h3>{packageItem.title}</h3>
                  <p>{packageItem.description}</p>
                  <ul>
                    {packageItem.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>{packageItem.duration}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Place;
