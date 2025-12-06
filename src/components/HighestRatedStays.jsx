// HighestRatedStays.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HighestRatedStays.css';

const HighestRatedStays = () => {
  return (
    <>
      {/* Highest-Rated Luxury Stays */}
      <section className="highest-rated-section">
        <h1 className="stays-title">
          <b>Highest-Rated Luxury Stays</b>
        </h1>

        <div className="stays-grid">
          <div className="card">
            <img
              src="/images/img top1.jpg"
              className="card-img-top"
              alt="The Oberoi Udaivilas"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  The Oberoi Udaivilas
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/img top2.jpg"
              className="card-img-top"
              alt="The Grace Hotel"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  The Grace Hotel
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/img top3.jpg"
              className="card-img-top"
              alt="Canaves Oia Epitome"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Canaves Oia Epitome
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/img top4.jpg"
              className="card-img-top"
              alt="Mahali Mzuri"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Mahali Mzuri
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks: All-Inclusive Retreats */}
      <section className="top-picks-section">
        <h1 className="stays-title">
          <b>Top Picks: All-Inclusive Retreats</b>
        </h1>

        <div className="stays-grid">
          <div className="card">
            <img
              src="/images/img hotel1.jpg"
              className="card-img-top"
              alt="Islas Malvinas"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Islas Malvinas
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/img hotel2.jpg"
              className="card-img-top"
              alt="Badrutt's Palace, Switzerland"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Badrutt&apos;s Palace, Switzerland
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/img hotel3.jpg"
              className="card-img-top"
              alt="Burj Khalifa, Dubai"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Burj Khalifa, Dubai
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/img hotel4.jpg"
              className="card-img-top"
              alt="Taj Mahal, India"
            />
            <div className="card-body">
              <p className="card-text">
                <Link
                  to="/HotelPage"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Taj Mahal, India
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighestRatedStays;
