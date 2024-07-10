import React from 'react';
import ParcelSection from './ParcelSection';
import OrderTracker from './OrderTracker';
import './MainContent.css';
import background from '../assets/background.jpg';

const MainContent = () => {
  return (
    <main className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="main-content">
        <ParcelSection />
        <OrderTracker />
      </div>
    </main>
  );
};

export default MainContent;
