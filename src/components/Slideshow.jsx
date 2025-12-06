import React, { useEffect, useState } from 'react';
import './Slideshow.css';
import { Link } from 'react-router-dom';

const images = [
  { src: '/images/img pckg16.jpeg', caption: 'Azerbaijan Tour Package' },
  { src: '/images/img pckg17.jpg', caption: 'Australia Tour Package' },
  { src: '/images/Kerala.jpg', caption: 'Kerala Tour Package' },
  { src: '/images/img pckg119.jpeg', caption: 'Europe Tour Package' }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const current = images[currentIndex];
  const placeName = current.caption.split(' ')[0];

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <img
          src={current.src}
          alt={current.caption}
          className="slide-image"
        />
        <Link to={`/place/${placeName}`}>
          <div className="caption">{current.caption}</div>
        </Link>
      </div>
    </div>
  );
};

export default Slideshow;
