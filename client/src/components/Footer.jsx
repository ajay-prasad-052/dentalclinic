import { Link } from "react-router-dom";
import { clinic } from "../data/clinic";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{clinic.name}</h3>
          <p>
            Compassionate dentistry with advanced technology, a calming
            experience, and a team that puts your comfort first.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/treatments">Treatments</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>{clinic.address}</li>
            <li>{clinic.phone}</li>
            <li>{clinic.email}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 {clinic.name}. All rights reserved.</span>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/medical-disclaimer">Medical Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
