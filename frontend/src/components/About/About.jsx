import React from "react";
import assets from "../../assets/assets";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-heading">
        <p>ABOUT</p>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={assets.stethoscope} alt="Dr. Sumera Siddique" />
        </div>

        <div className="about-content">
          <h2>
            Meet <span>Dr. Sumera Siddique</span>
          </h2>
          <h4>
            Dedicated to providing safe, compassionate and evidence-based
            surgical care.
          </h4>

          <p>
            Dr. Sumera Siddique is an experienced General Surgeon with FCPS
            qualification and extensive clinical expertise in general,
            laparoscopic, breast, and emergency surgery.
          </p>

          <p>
            She believes in clear communication, respectful patient care, and
            helping every patient understand their diagnosis and treatment
            options.
          </p>

          <p>
            Her professional interests include breast disease, surgical
            oncology, colorectal surgery, trauma, and minimally invasive
            procedures. Dr. Sumera believes in clear communication, respectful
            patient care, and helping every patient understand their diagnosis
            and treatment options.
          </p>

          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default About;
