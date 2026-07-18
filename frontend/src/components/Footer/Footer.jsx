import React from "react";
import "./Footer.css";
import { Phone, Mail, MapPinned, Stethoscope, Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="about-dr">
          <h2 className="footer-heading">
            <Stethoscope /> Dr. Sumera Siddique
          </h2>

          <p>Consultant General Surgeon</p>
          <p>Compassionate, evidence-based surgical care.</p>
        </div>

        <div className="contact-info">
          <h2 className="footer-heading">
            <Phone size={20} />
            Contact
          </h2>

          <a href="tel:+923044999660">0304-4999660</a>
          <p>042-37182305</p>

          <a
            href="https://wa.me/923044999660"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a href="mailto: drsumera1@gmail.com">drsumera1@gmail.com</a>
        </div>

        <div className="clinic-info">
          <h2 className="footer-heading">
            <MapPinned size={20} />
            Clinic
          </h2>

          <p>CCA 20</p>
          <p>Hameed Latif Medical Center</p>
          <p>Phase 5 DHA</p>
          <p>Lahore</p>
        </div>

        <div className="links">
          <h2 className="footer-heading">
            <Globe size={20} /> Quick Links
          </h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Book Appointment</li>
          </ul>
        </div>
      </div>

      <div className="end-info">
        <p>© 2026 Dr. Sumera Siddique</p>

        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/samia-siddique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samia Siddique
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
