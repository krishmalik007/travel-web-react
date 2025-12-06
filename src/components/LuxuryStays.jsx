import React from 'react';
import './LuxuryStays.css';
import { Link } from 'react-router-dom';

const LuxuryStays = () => {
  return (
    <div>
      {/* Highest-Rated Luxury Stays Section */}
      <h2
        style={{fontSize: '30px',
          marginTop: '50px',
          textAlign: 'left',
          color: 'rgb(64, 60, 60)',
          marginLeft: '120px',}}
      >
        <b>Highest-Rated Luxury Stays</b>
      </h2>
      <p
        className="section-subtitle"
      >
        Explore the hottest travel spots around the globe.
      </p>

      {/* Aligning all items in a single line */}
      <div className="stay-card-container">
        {['Australia', 'Europe', 'Bali', 'Canaves Oia Epitome', 'Mahali Mzuri'].map((location, index) => (
          <div className="stay-card" key={index}>
            <div className="stay-card-inner">
              <img
                src={`/images/img pckg1${index + 1}.jpg`}
                className="stay-card-img"
                alt={`Image ${index + 1}`}
              />
              <div className="stay-card-body">
                <Link to={`/place/${location}`} ><p className="stay-card-text" style={{color: 'black'}}>{location}</p></Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Getaways Section */}
      <h2
        className="section-title" style={{fontSize: '30px',
          marginTop: '50px',
          textAlign: 'left',
          color: 'rgb(64, 60, 60)',
          marginLeft: '120px',}}
      >
        <b>Seasonal Getaways</b>
      </h2>
      <p
        className="section-subtitle"
      >
        Best places to visit in August for Heavenly Escapes!
      </p>

      <div className="stay-container">
        {/* Updated React component */}
        <div className="stay-group">
          <div className="large-stay">
           <Link to="/place/Singapore"><img src="/images/img pckg5.jpg" alt="Large Image" /></Link> 
            <h3>
              Singapore Splendor with Genting Cruise
              <br />
              Start From <b>₹ 54499</b>
            </h3>
          </div>
          <div className="small-stays">
            {[{ img: '/images/img pckg6.jpg', title: 'Serene Sri Lanka', price: '₹ 39990' },
            { img: '/images/img pckg7.jpg', title: 'Thai Delight', price: '₹ 15999' }].map((item, index) => (
              <div className="small-stay" key={index}>
                <img src={item.img} alt={`Small Image ${index + 1}`} />
                <h3>
                <Link to={`/place/${item.title}`} style={{color: 'white'}}>{item.title}</Link> 
                  <br />
                  Start From <b>{item.price}</b>
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="single-stay">
          <div className="single-stay-image">
          <Link to="/place/Kerala"><img src="/images/img pckg8.jpg" alt="Single Image" height="890px" /></Link>
            <h3>
              Kerala
              <br />
              Start From <b>₹ 14499</b>
            </h3>
          </div>
        </div>

        <div className="column-stays">
          {[{ img: '/images/img pckg9.jpg', title: 'Spiti Valley', price: '₹ 24999' },
            { img: '/images/img place10.jpg', title: 'Rajasthan', price: '₹ 16499' }].map((item, index) => (
            <div className="column-stay" key={index}>
              <img src={item.img} alt={`Column Image ${index + 1}`} />
              <h3>
              <Link to={`/place/${item.title}`} style={{color: 'white'}}>{item.title}</Link>  
                <br />
                Start From <b>{item.price}</b>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuryStays;
