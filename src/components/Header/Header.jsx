import React, { useRef } from "react";
import "./Header.sass";
import Logo from "../../assets/main-logo.avif";
import User from "../../assets/user.svg";
import Wishlist from "../../assets/wishlist.svg";
import Cart from "../../assets/cart.svg";
import Search from "../../assets/search.svg";
import Close from "../../assets/close.svg";
import Person from "../../assets/person.png";
import Dropdown from "../Dropdown/Dropdown";
// import { useNavigate } from "react-router";

const Header = () => {
  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef?.current?.classList.contains("show")
      ? menuRef?.current?.classList.remove("show")
      : menuRef?.current?.classList.add("show");
  };


  return (
    <header>
      {
        // slider
      }

      <nav>
        <button className="hamburger-button" onClick={menuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className="search-bar-desktop">
              <img src={Search} alt="search icon" />
              <input type="text" name="search" placeholder="Axtarış..." />
            </div>
        <img
          src={Logo}
          alt="Urban Dolls"
          className="brand-logo"
        />
        <div className="nav-icons">
          <img src={Wishlist} alt="Wishlist" />
          <img src={User} alt="User" />
          <div className="cart-icon-container">
            <img src={Cart} alt="cart" />
            <div className="cart-item-counter">0</div>
          </div>
        </div>
        <div className="menu" ref={menuRef}>
          <div className="menu-header">
            <img
              src={Close}
              alt="Close btn"
              className="close-btn"
              onClick={menuToggle}
            />
            <div className="search-bar">
              <img src={Search} alt="search icon" />
              <input type="text" name="search" placeholder="Axtarış..." />
            </div>
          </div>

          <div className="menu-login">
            <img src={Person} alt="User" />
            <h1>Login</h1>
          </div>

          <ul className="menu-nav">
            <li>Shop</li>
            <li>Top Bundles</li>
            <li>Accessories</li>
            <li>$21 Refills</li>
            <li>Video Tutorials</li>
            <li>Lash Quiz</li>
            <li>About</li>
            <li>Get Help</li>
            <li>Reviews</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
