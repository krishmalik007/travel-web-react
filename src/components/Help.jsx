import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Help = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="page-inner">
          <h1>Help &amp; Support</h1>
          <p className="text-muted">
            Find answers to frequently asked questions and contact support if
            you need assistance.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Help;

