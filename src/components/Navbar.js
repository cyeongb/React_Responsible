import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRAVEL 
            <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
