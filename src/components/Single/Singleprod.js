import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaRegStar, FaMinus, FaPlus, FaCartPlus } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import "./singleprod.css";

const Singleprod = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState(""); 
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1, 
      image: product.thumbnail,
      size: "Large", 
      color: "#FFFFFF", 
    };
    addToCart(cartItem);
    setNotification("Product added to cart!"); 
    setTimeout(() => setNotification(""), 3000); 
  };

  return (
    <div className="product-detail-page">
      <div className="product-images">
        <img src={product.thumbnail} alt={product.title} className="main-image" />
        {/* <div className="image-thumbnails">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.title} ${index}`} />
          ))}
        </div> */}
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <div className="rating-section">
          {[...Array(5)].map((_, index) => (
            index < Math.round(product.rating) ? (
              <FaStar key={index} className="star-icon" />
            ) : (
              <FaRegStar key={index} className="star-icon" />
            )
          ))}
          <span>{product.rating.toFixed(1)}/5</span>
        </div>
        <div className="price-section">
          <h2>${product.price}</h2>
          {product.discountPercentage && (
            <>
              <span className="original-price">${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</span>
              <span className="discount">{product.discountPercentage}% Off</span>
            </>
          )}
        </div>
        <p>{product.description}</p>

        <div className="product-options">
          <h3>Select Colors</h3>
          <div className="color-options">
            {["#000000", "#FFFFFF", "#1C1C1C"].map((color, index) => (
              <div
                key={index}
                className="color-circle"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <h3>Choose Size</h3>
          <div className="size-options">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button key={size} className="size-option">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
          <button className="quantity-btn">
            <FaMinus />
          </button>
          <span>1</span>
          <button className="quantity-btn">
            <FaPlus />
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <FaCartPlus /> Add to Cart
        </button>

        {notification && <div className="notification">{notification}</div>} 
      </div>
    </div>
  );
};

export default Singleprod;
