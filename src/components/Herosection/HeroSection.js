import React from "react";
import "./HeroSection.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section>
    <div className="hero">
      <div className="hero-content">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button>Shop Now</button>

      
        <div className="hero-stats">
          <div className="brnd"><b>200+</b><br/> International Brands</div>
          <div className="brnd"><b>2,000+</b><br/>High-Quality Products</div>
          <div><b>30,000+</b> <br/>Happy Customers</div>
        </div>
      </div>
      
      <div className="hero-image">
        <img src="/file.png" alt="Fashion Models" />
      </div>
      
    </div>

    <div className="Brandlogos">
            <img  className="img" src="/GUCCI.png" alt="GUCCI" />
            <img  className="img" src="/ck.png" alt="calvin Klein" />
            <img  className="img" src="/zara.png" alt="Zara" />
            <img  className="img" src="/GUCCI.png" alt="GUCCI" />
            <img  className="img" src="/GUCCI.png" alt="GUCCI" />
    </div>
    </section>
  );
}

export default HeroSection;
