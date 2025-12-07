// src/components/Place.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./Place.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const base = import.meta.env.BASE_URL;

const Place = () => {
  const { placeName } = useParams();

  // ==========================
  //     ALL PLACE PACKAGES
  // ==========================
  const packageDetails = {
    Kerala: [
      {
        title: "Premium 4N Kerala Vacay",
        description: "2N Munnar • 1N Thekkady • 1N Alleppey",
        image: `${base}images/img 1.avif`,
        features: ["Flights Included", "5 Star Hotels", "Activities", "Transfers"],
        duration: "4N/5D",
      },
      {
        title: "Premium 5N Kerala Trip",
        description: "1N Cochin • 2N Munnar • 1N Thekkady • 1N Alleppey",
        image: `${base}images/img 2.jpg`,
        features: ["Flights Included", "5 Star Hotels", "Activities", "Transfers"],
        duration: "5N/6D",
      },
    ],

    Australia: [
      {
        title: "4N Australia Special",
        description: "Sydney • Gold Coast • Melbourne",
        image: `${base}images/img 28.jpg`,
        features: ["Flights Included", "Luxury Hotels", "City Tours", "Transfers"],
        duration: "4N/5D",
      },
      {
        title: "5N Australia Experience",
        description: "Sydney • Cairns • Melbourne",
        image: `${base}images/img 29.webp`,
        features: ["Flights Included", "5 Star Hotels", "Activities", "Transfers"],
        duration: "5N/6D",
      },
    ],

    Europe: [
      {
        title: "Classic 4N Europe Tour",
        description: "Paris • Switzerland",
        image: `${base}images/img 30.webp`,
        features: ["Flights Included", "4 Star Hotels", "Tours", "Transfers"],
        duration: "4N/5D",
      },
      {
        title: "Premium 5N Europe Experience",
        description: "Paris • Amsterdam • Switzerland",
        image: `${base}images/img 31.jpg`,
        features: ["Flights Included", "5 Star Hotels", "Cruise", "Transfers"],
        duration: "5N/6D",
      },
    ],

    Goa: [
      {
        title: "Beach Paradise Goa",
        description: "Calangute • Baga • Anjuna",
        image: `${base}images/img 3.webp`,
        features: ["Stay Included", "Breakfast", "Sightseeing"],
        duration: "3N/4D",
      },
      {
        title: "Goa Premium Resort",
        description: "Candolim • Vagator",
        image: `${base}images/img 4.jpg`,
        features: ["Resort Stay", "Beach Access", "Pool"],
        duration: "4N/5D",
      },
    ],

    Manali: [
      {
        title: "Snowy Manali Getaway",
        description: "Solang Valley • Hidimba Temple",
        image: `${base}images/img 5.jpg`,
        features: ["Cab Included", "Hotel Stay", "Breakfast"],
        duration: "3N/4D",
      },
      {
        title: "Premium Manali Vacation",
        description: "Luxury Cottage • Mountain View",
        image: `${base}images/img 6.jpeg`,
        features: ["Luxury Stay", "Bonfire", "Sightseeing"],
        duration: "4N/5D",
      },
    ],
  };

  // DEFAULT fallback
  const placeData = packageDetails[placeName] || packageDetails["Kerala"];

  return (
    <>
      <Navbar />

      <div className="place-wrapper">
        <h1 className="place-title">{placeName}</h1>
        <p className="place-subtext">
          Explore the most popular vacation packages available for {placeName}.
        </p>

        {/* ⭐ SHOW ONLY 2 CARDS */}
        <div className="place-row">
          {placeData.slice(0, 2).map((item, index) => (
            <div className="place-card" key={index}>
              <img className="place-card-img" src={item.image} alt={item.title} />

              <div className="place-card-body">
                <h2 className="place-card-title">{item.title}</h2>
                <p className="place-card-desc">{item.description}</p>

                <ul className="place-features">
                  {item.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <p className="place-duration">{item.duration}</p>

                <button className="place-book-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Place;
