import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={import.meta.env.BASE_URL + "images/finallogo.png"} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="dropdown">
            <Link to="/holiday-package">
              Holiday Packages <span>&#9662;</span>
            </Link>
            <ul className="dropdown-menu" style={{ listStyleType: 'none' }}>
              <li>
                <Link to="/place/Goa">Goa Package</Link>
              </li>
              <li>
                <Link to="/place/Shimla">Shimla Package</Link>
              </li>
              <li>
                <Link to="/place/Manali">Manali Package</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <span style={{ color: '#e5e7eb', cursor: 'default' }}>
              Services <span>&#9662;</span>
            </span>
            <ul className="dropdown-menu" style={{ listStyleType: 'none' }}>
              <li>
                <Link to="/flight">Flight</Link>
              </li>
              <li>
                <Link to="/train">Train</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/gallery">Picture Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
