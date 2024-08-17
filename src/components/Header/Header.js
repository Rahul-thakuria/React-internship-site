import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); 

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><h1>SHOP.CO</h1></Link>
      </div>
      <nav>
        <ul>
          <li>
            Shop
            <select className="drop" onChange={handleSelectChange} defaultValue="">
              <option value="" disabled>Select Category</option>
              <option value="/categorypage">Men</option>
              <option value="/">Women</option>
              <option value="/cate">Casual</option>
            </select>
          </li>
          <li>
            <a href="#new-arrivals">New Arrivals</a>
          </li>
          <li>On Sale</li>
          <li>Brands</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="icons">
        <Link to="/cart">
          <span><FaShoppingCart /></span>
        </Link>
        <span><FaUser /></span>
      </div>
    </header>
  );
}

export default Header;
