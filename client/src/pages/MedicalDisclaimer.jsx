import SectionTitle from "../components/SectionTitle";

const MedicalDisclaimer = () => {
  return (
    <section className="page-section">
      <div className="container content-shell">
        <SectionTitle
          eyebrow="Medical Disclaimer"
          title="Information for educational purposes only."
        />
        <div className="page-copy">
          <p>
            The content on this website is intended to provide general
            information about dental services and oral health. It does not
            replace a professional consultation or diagnosis.
          </p>
          <p>
            Treatment needs vary by individual. A licensed dental professional
            should evaluate your condition before making decisions about care,
            surgery, or ongoing treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalDisclaimer;
