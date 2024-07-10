import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import background from "../assets/background.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login-user");
  };

  return (
    <div className="main-content" style={{ backgroundImage: `url(${background})` }}>
      <div className="delivery-form-container">
        <form className="delivery-form">
          <h2>Parcel Delivery</h2>
          <input type="text" placeholder="From Address" required />
          <input type="text" placeholder="To Address" required />
          <button type="button" onClick={handleButtonClick}>Search Delivery</button>
        </form>
        <form className="tracker-form">
          <h2>Order Tracker</h2>
          <input type="text" placeholder="Order ID" required />
          <button type="button" onClick={handleButtonClick}>Track</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
