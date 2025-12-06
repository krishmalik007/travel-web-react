import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="page-inner">
          <h1>Privacy Policy</h1>
          <p className="text-muted">
            Learn how we collect, use, and protect your personal data.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;

