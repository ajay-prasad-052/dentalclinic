import { Link } from "react-router-dom";
import { clinic, features } from "../data/clinic";
import heroAsset from "../assets/herosection clinic.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Modern Dental Care</p>
          <h1>{clinic.tagline}</h1>
          <p className="lead">
            Personalized dental solutions that combine advanced technology,
            gentle care, and a welcoming environment for patients of every age.
          </p>

          <div className="cta-row">
            <Link to="/book-appointment" className="btn btn-primary">
              Book Consultation
            </Link>
            <Link to="/treatments" className="btn btn-secondary">
              Explore Treatments
            </Link>
          </div>

          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="image-card">
            <img
              src={heroAsset}
              alt="SmileCraft Dental Clinic website preview"
            />
          </div>
          <div className="floating-badge">
            <strong>Same-day visits</strong>
            <span>Emergency care available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
