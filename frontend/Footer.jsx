import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: support@parcelxpress.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Delivery Lane, Parcel City, PX 12345</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ParcelXpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
