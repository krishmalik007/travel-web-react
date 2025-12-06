import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const LearnMore = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="page-inner">
          <h1>About Our Travel Platform</h1>
          <p className="text-muted">
            We curate unique stays, exclusive packages, and seamless
            experiences for modern travelers.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LearnMore;
