import React from 'react';
import { useCart } from '../contexts/CartContext';
import { FaTrashAlt } from 'react-icons/fa'; 
import './cartpage.css';

const Cartpage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="cartpage-container">
      <div className="tophead breadcrumb">
        <span>Home</span> <span> &gt; </span> <span>Cart</span>
      </div>

      <h1 className="tophead page-heading">YOUR CART</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your Cart is Empty</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p>${item.price}</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => handleRemoveItem(item.id)} className="cart-item-remove">
                  <FaTrashAlt /> 
                </button>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ${subtotal}</p>
            <p>Discount (-20%): <span className="discount">-${discount}</span></p>
            <p>Delivery Fee: ${deliveryFee}</p>
            <h3>Total: ${total}</h3>
            <div className="promo-code">
              <input type="text" placeholder="Add promo code" />
              <button>Apply</button>
            </div>
            <button className="checkout-button">Go to Checkout →</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
