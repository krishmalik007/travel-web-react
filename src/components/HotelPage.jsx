import React from 'react';
import './Hotel.css';
import { FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Hotel = () => {
  return (
    <>
    <Navbar/>
    <div className="hotel-container">
      {/* Header Section */}
      <div className="hotel-header">
        <div>
          <h1 className="hotel-title">The Oberoi Udaivilas</h1>
          <div className="rating" style={{ backgroundColor: 'white', color: 'black' }}>
            <span>★★★★☆</span>
            <span className="reviews">4,024 reviews</span>
          </div>
          <div className="location">Lake Pichola, Udaipur 313001, India</div>
        </div>
        <div className="icons">
          <a href="#"><FaGlobe /> Visit hotel website</a>
          <a href="#"><FaPhone /> 00 30 2374 110750</a>
          <a href="mailto:abc@gmail.com"><FaEnvelope /> E-mail hotel</a>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        <div className="gallery-main">
          <img src={import.meta.env.BASE_URL + "images/img i6.jpg" }alt="Main hotel" height="600px" />
          <div className="gallery-award">Best of the Best 2024</div>
        </div>
        <div className="thumbnail-gallery">
          <img src={import.meta.env.BASE_URL + "images/img i1.jpg" }alt="Thumbnail 1" />
          <img src={import.meta.env.BASE_URL + "images/img i2.webp"} alt="Thumbnail 2" />
          <img src={import.meta.env.BASE_URL + "images/img i3.webp"} alt="Thumbnail 3" />
          <img src={import.meta.env.BASE_URL + "images/img i4.webp"} alt="Thumbnail 4" />
          <img src={import.meta.env.BASE_URL + "images/img i5.jpg" }alt="Thumbnail 5" />
        </div>
      </div>

      {/* Check Availability Button */}
      <div className="check-availability">
        <button><Link to="/">Check Availability</Link></button>
      </div>

      {/* Review Section */}
      <div className="review-container">
        <h2 className="review-header">About</h2>
        <div className="rating-section">
          <div className="rating-number">5.0</div>
          <div className="rating-text">
            <span>Excellent</span>
            <span className="reviews">4,024 reviews</span>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="progress-bar-section">
          {['Location', 'Cleanliness', 'Service', 'Value'].map((item, index) => (
            <div key={index}>
              <div className="progress-bar-title">
                <span>{item}</span>
                <span>{item === 'Cleanliness' ? '5.0' : '4.9'}</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${item === 'Cleanliness' ? '100%' : '98%'}` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="award-section">
          <FaTrophy /> 2024 Travelers' Choice Best of the Best
        </div>
        <div className="description">
          The Oberoi Udaivilas is a luxurious hotel located in Udaipur, Rajasthan. Known for its traditional architecture, opulent rooms, and exceptional service, it offers stunning views of Lake Pichola.
        </div>
      </div>

      {/* Location Section */}
      <div className="location-container">
        <h2 className="location-header">Location</h2>
        <div className="location-details">
          <div><FaMapMarkerAlt /> Lake Pichola, Udaipur</div>
          <div><FaPhone /> 00 30 2374 110750</div>
          <div><FaEnvelope /> <a href="mailto:abc@gmail.com">E-mail hotel</a></div>
        </div>
        <div className="map-section">
          <iframe src="https://www.google.com/maps/embed?pb=..." loading="lazy" title="Hotel Map"></iframe>
        </div>
      </div>

    
    </div>
    <Footer/>
    </>
  );
};

export default Hotel;
