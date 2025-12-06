import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Restaurants = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="page-inner">
          <h1>Restaurants</h1>
          <p className="text-muted">
            Discover top-rated restaurants near your stays and popular
            attractions.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Restaurants;
