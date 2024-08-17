import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub,FaShoppingCart } from "react-icons/fa"; 


function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="indidiv">
          <h1>SHOP.CO</h1>
          <p className="p1">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
        <div className="indidiv">
          <h4>COMPANY</h4>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Career</a></li>
        </div>
        <div className="indidiv">
          <h4>HELP</h4>
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">Delivery Details</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </div>
        <div className="indidiv">
          <h4>FAQ</h4>
          <li><a href="#">Account</a></li>
          <li><a href="#">Manage Deliveries</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Payments</a></li>
        </div>
        <div className="indidiv">
          <h4>RESOURCES</h4>
          <li><a href="#">Free eBooks</a></li>
          <li><a href="#">Development Tutorial</a></li>
          <li><a href="#">How to - Blog</a></li>
          <li><a href="#">Youtube Playlist</a></li>
        </div>
      </div>
      <br />
      <hr />
      <div className="footer-bottom">
        <p className="endp endp1">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="paycons">
          <img src="/visa.png" alt="Visa" />
          <img src="/Mas.png" alt="MasterCard" />
          <img src="/Pay.png" alt="PayPal" />
          <img src="/Apple.png" alt="Apple Pay" />
          <img src="/gpay.png" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
