import React from "react";
import "./Footer.css";
import { assets } from "../../src/assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptates velit praesentium quo dolorem illum quidem eos ab quam
            tempora labore, qui facilis veniam ex nihil pariatur earum fugit
            ipsam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
           <a href="#home"><li>Home</li></a>
           <a href='#explore-menu'> <li>About Us</li></a>
           <a href='#app-download'> <li>Delivery</li></a>
           <a href='#footer'><li>Privacy Policy</li></a>
           
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>(+91)-212-8415-603</li>
            <li>WoW_FooD@.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 WoW_FooD@.com</p>
    </div>
  );
};

export default Footer;
