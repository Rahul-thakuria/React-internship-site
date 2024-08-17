import React from "react";
import "./News.css";
import { FaEnvelope } from "react-icons/fa";


function News() {
  return (
    <div className="news">
      <div className="indinews1">
        <h1 className="h1text">STAY UPTO DATE ABOUT </h1>
        <h1 className="h1text"> OUR LATEST OFFERS</h1>
      </div>
      <div className="indinews2" >
        <div className="input-wrapper">
          <FaEnvelope className="email-icon" />
          <input className="input1" type="text" placeholder="Enter your email address..." />
        </div>
        <br />
        <button className="input2">
        Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

export default News;
