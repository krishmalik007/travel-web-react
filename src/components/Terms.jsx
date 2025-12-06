import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="page-inner">
          <h1>Terms &amp; Conditions</h1>
          <p className="text-muted">
            Review important information about bookings, cancellations, and
            usage of our services.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;
