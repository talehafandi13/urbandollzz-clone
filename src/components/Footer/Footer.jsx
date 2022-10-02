import React from "react";
import "./Footer.sass";
import brandName from "../../assets/urbandoll.png";
import instagram from "../../assets/insta-white.png";
import facebook from "../../assets/fb-white.png";
import youtube from "../../assets/youtube-white.png";
import pinterest from "../../assets/pinterest-white.png";
import tiktok from "../../assets/tiktok-white.png";

const Footer = () => {
  return (
    <footer>
      <img src={brandName} alt="Urbandollzz" className="footer-main-logo" />
      <div className="footer-subs-container">
        <h1>URBAN DOLL VIP</h1>
        <h2>Be the first to know about exclusive deals, launches, & more!</h2>
        <div className="input-field">
          <input type="text" placeholder="enter email address" />
          <button type="submit">Submit</button>
        </div>
        {/* <div className="input-field">
          <input type="text" />
          <button type="submit">Submit</button>
        </div> */}
        <p className="disclaimer">
          By entering your phone number and submitting this form, you consent to
          receive marketing text messages (such as promotion codes and cart
          reminders) from Urban Dollzz at the number provided, including
          messages sent by autodialer. Consent is not a condition of any
          purchase. Message and data rates may apply. Message frequency varies.
          You can unsubscribe at any time by replying STOP or clicking the
          unsubscribe link (where available) in one of our messages. View our
          <span> Privacy Policy</span> and <span>Terms of Service</span>
        </p>
      </div>
      <div className="footer-links">
        <div className="box">
          <h2>Brand</h2>
          <ul>
            <li>Login</li>
            <li>About</li>
            <li>Lashes</li>
            <li>Rewards</li>
            <li>Collab</li>
            <li>Download Our App</li>
          </ul>
        </div>

        <div className="box">
          <h2>Help</h2>
          <ul>
            <li>1on1 Lash Application</li>
            <li>Video Tutorials</li>
            <li>Tips & Tricks</li>
            <li>Reviews</li>
            <li>Track My Order</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="box">
          <h2>Legal</h2>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="social-media-container">
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={youtube} alt="youtube" />
        <img src={pinterest} alt="twitter" />
        <img src={tiktok} alt="twitter" />
      </div>
    </footer>
  );
};

export default Footer;
