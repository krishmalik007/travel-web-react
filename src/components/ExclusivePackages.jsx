
import React from "react";
import "./ExclusivePackages.css";

const base = import.meta.env.BASE_URL;

const packages = [
  {
    img: base + "images/img pckg1.jpg",
    title: "Kashmir",
    price: "₹ 24,999",
  },
  {
    img: base + "images/img pckg2.jpg",
    title: "Vietnam",
    price: "₹ 29,499",
  },
  {
    img: base + "images/img pckg3.jpg",
    title: "Ooty",
    price: "₹ 18,999",
  },
  {
    img: base + "images/img pckg4.jpg",
    title: "Malaysia",
    price: "₹ 34,999",
  },
];

const ExclusivePackages = () => {
  return (
    <section className="exclusive-section">
      <h2 className="exclusive-title">Exclusive Vacation Packages</h2>
      <p className="exclusive-subtitle">
        Indulge in unforgettable adventure with special tour plans.
      </p>

      <div className="exclusive-grid">
        {packages.map((item, index) => (
          <div className="exclusive-card" key={index}>
            <div className="exclusive-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="exclusive-content">
              <h3>{item.title}</h3>

              <div className="exclusive-footer">
                <span className="exclusive-price">{item.price}</span>
                <button className="exclusive-btn">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusivePackages;
