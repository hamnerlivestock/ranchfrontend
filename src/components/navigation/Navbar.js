import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../static/images/logo2.png";
import "../../styles/navigation/navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        
          <Link className="logo-wrapper" to="/home">
            <img src={Logo} alt="logo" height={"68px"} />
          </Link>

          <div className="navbar-container">
          
            <div className="nav-item">
              <Link
              to="/about_us"
              className="nav-links"
              >About Us
              </Link>
              <Link
              to="/meat"
              className="nav-links"
              >Meat
              </Link>
          </div>
        
      </div>
    </nav>
  </>
  );
}