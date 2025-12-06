import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Train = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="page-inner">
          <h1>Trains</h1>
          <p className="text-muted">
            Plan train journeys with recommended routes and timings.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Train;
