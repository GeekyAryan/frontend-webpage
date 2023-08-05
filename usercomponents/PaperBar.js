import React from 'react';
import './PaperBar.css'; // Import your CSS for PaperBar styling

const PaperBar = () => {
  return (
    <div className="paper-bar">
      <div className="paper-bar-content">
        <div className="app-info">
          <img src="logo.png" alt="App Logo" className="app-logo" />
          <span className="app-name">ShopCart</span>
        </div>
        <div className="app-options">
          <span className="option">Category</span>
          <span className="option">Deals</span>
          <span className="option">What's New</span>
          <span className="option">Delivery</span>
          <span className="option">Search</span>
          <span className="option">Account</span>
          <span className="option">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default PaperBar;
