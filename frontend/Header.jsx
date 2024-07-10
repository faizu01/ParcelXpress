import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';  

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="ParcelXpress Logo" />
        <h2>ParcelXpress</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/platform">Platform</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/track-order">Track Order</Link>
        <div className="dropdown">
          <button className="dropbtn">Sign In</button>
          <div className="dropdown-content">
            <Link to="/login-user">Sign in as User</Link>
            <Link to="/login-agent">Sign in as Delivery Agent</Link>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;


