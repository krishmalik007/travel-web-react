import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

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
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
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

        <Route path="/holiday-package" element={<HolidayPackage />} />
        <Route path="/HotelPage" element={<HotelPage />} />
        <Route path="/place/:placeName" element={<Place />} />

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

