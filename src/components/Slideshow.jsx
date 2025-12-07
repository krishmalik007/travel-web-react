import React, { useEffect, useState } from 'react';
import './Slideshow.css';
import { Link } from 'react-router-dom';

const Slideshow = () => {
  const base = import.meta.env.BASE_URL;

  const images = [
    { src: `${base}images/img pckg16.jpeg`, caption: 'Azerbaijan Tour Package' },
    { src: `${base}images/img pckg17.jpg`, caption: 'Australia Tour Package' },
    { src: `${base}images/Kerala.jpg`, caption: 'Kerala Tour Package' },
    { src: `${base}images/img pckg119.jpeg`, caption: 'Europe Tour Package' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const searchAndHighlight = () => {
    const prevHighlights = document.querySelectorAll('.highlight');
    prevHighlights.forEach((highlight) => {
      highlight.classList.remove('highlight');
      highlight.style.backgroundColor = '';
    });

    if (!searchText.trim()) return;

    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${searchText})`, 'gi');
    const highlightedHTML = bodyText.replace(regex, `<span class='highlight'>$1</span>`);
    document.body.innerHTML = highlightedHTML;

    const firstHighlight = document.querySelector('.highlight');
    if (firstHighlight) {
      firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstHighlight.style.backgroundColor = 'yellow';
    }
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <Link to={`/place/${images[currentIndex].caption.split(' ')[0]}`}>
          <div className="caption">{images[currentIndex].caption}</div>
        </Link>

        <div className="carousel-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
            />
            <button className="btn" onClick={searchAndHighlight}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
