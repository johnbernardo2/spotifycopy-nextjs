"use client";
import React from 'react';

const NavItemWithText = () => (
  <div className="nav-item-with-text">
    <a className="text-link">Preview of Spotify</a>
    <span className="nav-text">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</span>
  </div>
);

const BottomNavBar = () => {
  return (
    <nav className="bottom-nav">
      <NavItemWithText />
      <a href="#" className="btn-bottom-circle">Sign up free</a>
    </nav>
  );
};

export default BottomNavBar;
