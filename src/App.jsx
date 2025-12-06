// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Main Components
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PropertySection from './components/PropertySection';
import HighestRatedStays from './components/HighestRatedStays';
import TopAccommodations from './components/TopAccommodations';
import Footer from './components/Footer';
import HolidayPackage from './components/HolidayPackage';
import HotelPage from './components/HotelPage';
import Place from './components/Place';
import Slideshow from './components/Slideshow';

// New Pages
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Restaurants from './components/Restaurants';
import Flight from './components/Flight';
import Train from './components/Train';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Help from './components/Help';
import LearnMore from './components/LearnMore';

function App() {
  return (
    // 👇 VERY IMPORTANT FOR GITHUB PAGES
    <Router basename={import.meta.env.BASE_URL}>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <div className="image-container">
                <div className="overlay-text">Discover Your Ideal Stay</div>
                <SearchBar />
              </div>

              <PropertySection />
              <HighestRatedStays />
              <TopAccommodations />
              <Footer />
            </>
          }
        />

        {/* HOLIDAY PACKAGES */}
        <Route path="/holiday-package" element={<HolidayPackage />} />

        {/* HOTEL PAGE */}
        <Route path="/HotelPage" element={<HotelPage />} />

        {/* PLACE DYNAMIC PAGE */}
        <Route path="/place/:placeName" element={<Place />} />

        {/* EXTRA SLIDESHOW PAGE */}
        <Route
          path="/slideshow"
          element={
            <>
              <Navbar />
              <Slideshow />
              <Footer />
            </>
          }
        />

        {/* STATIC PAGES */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/train" element={<Train />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Router>
  );
}

export default App;
