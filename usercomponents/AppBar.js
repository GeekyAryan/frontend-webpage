// AppBarComponent.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="appbar-content">
          <div className="appbar-options">
            <div className="appbar-option">mobileno, 50% off</div>
            <div className="appbar-option">shopnow</div>
            <div className="appbar-option">English & location</div>
            <KeyboardArrowDownOutlinedIcon className="appbar-option-icon" />
          </div>
          <div className="appbar-options">
            <div className="appbar-option appname-logo">Appname</div>
            <div className="appbar-option">category</div>
            <div className="appbar-option">deals</div>
            <div className="appbar-option">what's new</div>
            <div className="appbar-option">delivery</div>
            <div className="appbar-option">searchbar</div>
            <div className="appbar-option">account</div>
            <div className="appbar-option">cart</div>
            <KeyboardArrowDownOutlinedIcon className="appbar-option-icon" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
