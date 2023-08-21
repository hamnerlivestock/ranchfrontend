import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/navigation/navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">


    {/* <a href="/" className="site-title"> Site Name </a> */}
          <ul>
            <li className="nav-item">
              <Link
              to="/about_us"
              className="nav-links"
              >About Us
              </Link>
              <Link
              to="/home"
              className="nav-links"
              >Home
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
  );
}