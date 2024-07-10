import React, { useState } from 'react';
import './OrderTracker.css';

const OrderTracker = () => {
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order ID:', orderId);
  };

  return (
    <form className="order-tracker" onSubmit={handleSubmit}>
      <h2>Order Tracker</h2>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button type="submit">Track</button>
    </form>
  );
};

export default OrderTracker;
