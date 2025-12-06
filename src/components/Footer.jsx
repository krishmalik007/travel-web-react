// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/holiday-package">Packages</Link>
            </li>
            <li>
              <Link to="/gallery">Picture Gallery</Link>
            </li>
            <li>
              <Link to="/HotelPage">Hotels</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/help">Help &amp; Support</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <ul>
            <li>Ambala</li>
            <li>Haryana, India</li>
            <li>
              <a href="tel:+911234567890">+91 1234567890</a>
            </li>
            <li>
              <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            </li>
            <li>
              <Link to="/learn-more">Learn More</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <div className="social">
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram-alt" />
            </a>
            <a href="https://x.com/i/flow/login">
              <i className="bx bxl-twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Stay Journey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
