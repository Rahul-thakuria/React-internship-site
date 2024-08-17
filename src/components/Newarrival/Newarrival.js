import React, { useState, useEffect } from "react";
import axios from "axios";
import "./newarrival.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Newarrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const dressStyles = [
    { id: 1, style: "Casual", image: "/casual.jpg" },
    { id: 2, style: "Formal", image: "/formal.jpg" },
    { id: 3, style: "Party", image: "/party.jpg" },
    { id: 4, style: "Gym", image: "/gym.jpg" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [newArrivalsResponse, topSellingResponse] = await Promise.all([
          axios.get("https://dummyjson.com/products/category/mens-shirts?limit=4"),
          axios.get("https://dummyjson.com/products/category/mens-shirts?limit=4"),
        ]);
        setNewArrivals(newArrivalsResponse.data.products);
        setTopSelling(topSellingResponse.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <Section className="newarrival" id="new-arrivals" title="NEW ARRIVALS" products={newArrivals} />
      <Section title="TOP SELLING" products={topSelling} />
      <BrowseByDressStyle styles={dressStyles} />
    </div>
  );
};

const Section = ({ id, title, products }) => (
  <div id={id} className="product-section">
    <h2 className="section-title">{title}</h2>
    <div className="product-list1">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
    <Link to="/categorypage" className="view-all-btn">View All</Link>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} className="product-image" />
    <h3 className="product-name">{product.title}</h3>
    <div className="product-rating">
      {Array.from({ length: Math.round(product.rating) }).map((_, index) => (
        <FaStar key={index} />
      ))}
      {` ${product.rating}/5`}
    </div>
    <div className="product-pricing">
      {product.discountPercentage && (
        <span className="original-price">${product.price.toFixed(2)}</span>
      )}
      <span className="product-price">
        ${(
          product.price - (product.price * product.discountPercentage) / 100
        ).toFixed(2)}
      </span>
      {product.discountPercentage && (
        <span className="discount">-{product.discountPercentage}%</span>
      )}
    </div>
  </div>
);

const BrowseByDressStyle = ({ styles }) => (
  <div className="browse-by-dress-style">
    <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
    <div className="style-list">
      {styles.map((style) => (
        <div key={style.id} className="style-card">
          <img src={style.image} alt={style.style} className="style-image" />
          <h3 className="style-name">{style.style}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Newarrival;
