import React from 'react';
import { Link } from 'react-router-dom';
import './TopAccommodations.css';

const TopAccommodations = () => {
  return (
    <div className="div1">
      <h2
        style={{
          fontSize: '30px',
          marginTop: '30px',
          marginBottom: '50px',
          textAlign: 'center',
          color: 'rgb(64, 60, 60)'
        }}
        id="accommodation"
      >
        <b>Top Accommodations</b>
      </h2>
      <div className="container my-4" style={{ display: 'flex' }}>
        <div className="row">
          {accommodations.map((item, index) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3"
              key={index}
            >
              <div className="item">
                <Link
                  to={`/place/${item.name}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    src={item.img}
                    alt={`Image ${index + 1}`}
                    className="rounded-circle"
                  />
                </Link>
                <div className="ms-3">
                  <h5 className="item-heading">{item.name}</h5>
                  <p className="item-content">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {accommodation.map((item, index) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3"
              key={index}
            >
              <div className="item">
                <Link
                  to={`/place/${item.name}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    src={item.img}
                    alt={`Image ${index + 1}`}
                    className="rounded-circle"
                  />
                </Link>
                <div className="ms-3">
                  <h5 className="item-heading">{item.name}</h5>
                  <p className="item-content">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {acommodations.map((item, index) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3"
              key={index}
            >
              <div className="item">
                <Link
                  to={`/place/${item.name}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    src={item.img}
                    alt={`Image ${index + 1}`}
                    className="rounded-circle"
                  />
                </Link>
                <div className="ms-3">
                  <h5 className="item-heading">{item.name}</h5>
                  <p className="item-content">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// same data arrays as tumhare original code...
const accommodations = [
  {
    name: 'Goa',
    img: '/images/img place1.jpg',
    description:
      'Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas'
  },
  {
    name: 'Delhi',
    img: '/images/img place2.jpg',
    description:
      'Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport'
  },
  {
    name: 'Bangalore',
    img: '/images/img place3.jpg',
    description:
      'Hotels, Budget Hotels, Resorts, Near Airport, Guhantara Resort'
  },
  {
    name: 'Mumbai',
    img: '/images/img place4.jpg',
    description:
      'Luxury Hotels, Budget Stays, Resorts, Marine Drive, Juhu Beach'
  },
  {
    name: 'Jaipur',
    img: '/images/img place5.jpg',
    description:
      'Heritage Hotels, Budget Hotels, Resorts, City Palace, Amer Fort'
  }
];

const accommodation = [
  {
    name: 'Chennai',
    img: '/images/img place6.jpg',
    description:
      'Hotels, Resorts, Budget Hotels, Marina Beach, Mahabalipuram'
  },
  {
    name: 'Kolkata',
    img: '/images/img place7.jpg',
    description:
      'Boutique Hotels, Budget Stays, Resorts, Howrah Bridge, Victoria Memorial'
  },
  {
    name: 'Hyderabad',
    img: '/images/img place8.jpg',
    description: 'Hotels, Budget Hotels, Resorts, Charminar, Golconda Fort'
  },
  {
    name: 'Pune',
    img: '/images/img place9.jpg',
    description:
      'Hotels, Budget Hotels, Resorts, Aga Khan Palace, Lavasa'
  },
  {
    name: 'Kerala',
    img: '/images/img place10.jpg',
    description:
      'Houseboats, Beach Resorts, Hotels, Alleppey, Munnar'
  }
];

const acommodations = [
  {
    name: 'Manali',
    img: '/images/img place11.jpg',
    description:
      'Hotels, Cottages, Resorts, Solang Valley, Snow Peaks'
  },
  {
    name: 'Shimla',
    img: '/images/img place12.jpg',
    description:
      'Hotels, Resorts, Mall Road, Ridge, Snow Capped Mountains'
  },
  {
    name: 'Udaipur',
    img: '/images/img place13.jpg',
    description:
      'Lake Hotels, Luxury Resorts, City Palace, Lake Pichola'
  },
  {
    name: 'Rishikesh',
    img: '/images/img place14.jpg',
    description:
      'Riverside Hotels, Resorts, Adventure Stays, Ganges River'
  },
  {
    name: 'Agra',
    img: '/images/img place15.jpg',
    description:
      'Hotels, Budget Hotels, Resorts, Taj Mahal, Fatehpur Sikri'
  }
];

export default TopAccommodations;
