import SectionTitle from "../components/SectionTitle";
import { clinic } from "../data/clinic";

const Contact = () => {
  return (
    <section className="page-section">
      <div className="container contact-grid">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="We’re here to help you smile with confidence."
          />
          <div className="contact-list">
            <p>
              <strong>Phone:</strong> {clinic.phone}
            </p>
            <p>
              <strong>Email:</strong> {clinic.email}
            </p>
            <p>
              <strong>Address:</strong> {clinic.address}
            </p>
            <p>
              <strong>Hours:</strong> {clinic.hours}
            </p>
          </div>
        </div>

        <div className="contact-card">
          <h3>Request a callback</h3>
          <p>Send us your details and we’ll get back to you shortly.</p>
          <a
            href="mailto:hello@smilecraftdental.com"
            className="btn btn-primary"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
