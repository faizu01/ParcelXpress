import React, { useState } from 'react';
import './ParcelSection.css';

const ParcelSection = () => {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('From:', fromAddress, 'To:', toAddress);
  };

  return (
    <form className="parcel-section" onSubmit={handleSubmit}>
      <h2>Parcel Delivery</h2>
      <input
        type="text"
        placeholder="From Address"
        value={fromAddress}
        onChange={(e) => setFromAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="To Address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <button type="submit">Search Delivery</button>
    </form>
  );
};

export default ParcelSection;
