import React from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="Logo" />
        <div className="navbar-text">
          <h3>Dr. Sumera Siddique</h3>
          <p>Consultant Surgeon</p>
        </div>
      </div>

      <div className="navbar-list">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#education"> Education</a>
          </li>
        </ul>

        <a href="#contact" className="nav-btn">
            Contact Now
            <ArrowRight size={20} className="arrow-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
