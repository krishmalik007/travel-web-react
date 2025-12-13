
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import SearchBar from './components/SearchBar';
import PropertySection from './components/PropertySection';
import HighestRatedStays from './components/HighestRatedStays';
import HotelPage from './components/HotelPage';
import TopAccommodations from './components/TopAccommodations';
import Place from './components/Place';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HolidayPackage from './components/HolidayPackage';
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
  const heroBg = import.meta.env.BASE_URL + 'images/h 1.jpg';

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div
                className="image-container"
                style={{ backgroundImage: `url(${heroBg})` }}
              >
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

        {/* HOLIDAY PACKAGES PAGE */}
        <Route path="/holiday-package" element={<HolidayPackage />} />

        {/* HIGHEST RATED PAGE (if you want direct route) */}
        <Route path="/highest-rated" element={<HighestRatedStays />} />

        {/* HOTEL DETAILS PAGE */}
        <Route path="/HotelPage" element={<HotelPage />} />

        {/* PLACE PAGE (dynamic) */}
        <Route path="/place/:placeName" element={<Place />} />

        {/* OPTIONAL SLIDESHOW PAGE */}
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
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
              <Footer />
            </>
          }
        />
        <Route
          path="/restaurants"
          element={
            <>
              <Navbar />
              <Restaurants />
              <Footer />
            </>
          }
        />
        <Route
          path="/flight"
          element={
            <>
              <Navbar />
              <Flight />
              <Footer />
            </>
          }
        />
        <Route
          path="/train"
          element={
            <>
              <Navbar />
              <Train />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          }
        />
        <Route
          path="/help"
          element={
            <>
              <Navbar />
              <Help />
              <Footer />
            </>
          }
        />
        <Route
          path="/learn-more"
          element={
            <>
              <Navbar />
              <LearnMore />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
