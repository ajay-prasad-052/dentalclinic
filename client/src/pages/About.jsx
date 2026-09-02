import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className="page-section">
      <div className="container content-shell">
        <SectionTitle
          eyebrow="About Us"
          title="A patient-first clinic designed around comfort and long-term health."
        />

        <div className="page-copy">
          <p>
            SmileCraft Dental Clinic was founded to make exceptional dental care
            feel personal, transparent, and stress-free. Our team focuses on
            listening carefully, explaining each option clearly, and designing
            treatment plans that support both function and confidence.
          </p>
          <p>
            We combine modern diagnostics, gentle care, and tailored treatment
            planning to help patients of all ages feel genuinely cared for from
            the very first appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
