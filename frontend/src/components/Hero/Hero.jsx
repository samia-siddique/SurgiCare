import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import assets from "../../assets/assets";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="hero-container">
          <div className="container-text">
            <h1>Expert General Surgery with Compassionate Care.</h1>
            <p>Welcome to the official website of Dr. Sumera Siddique</p>
          </div>
          
          <div className="hero-buttons">
            <button className="contact-btn">
              Contact Now
              <ArrowRight size={18} className="arrow-icon" />
            </button>
            <button className="wedo-btn">
              Book Appoinment
              <ArrowUpRight size={16} className="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="hero-card">
          <img src={assets.dr_img} alt="Dr img" />

          <div className="hero-overlay"></div>

          <div className="hero-info">
            <div className="hero-text">
              <h3>Dr. Sumera Siddique</h3>
              <p className="title">Consultant Surgeon</p>
            </div>

            <button className="arrow-btn">
              <ArrowUpRight size={20} className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
