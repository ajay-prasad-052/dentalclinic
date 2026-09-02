import SectionTitle from "../components/SectionTitle";

const PrivacyPolicy = () => {
  return (
    <section className="page-section">
      <div className="container content-shell">
        <SectionTitle
          eyebrow="Privacy Policy"
          title="Your information is handled with care."
        />
        <div className="page-copy">
          <p>
            We collect personal information only to support appointments,
            treatment planning, and communication with our patients. This data
            is stored securely and used solely for the purpose of delivering
            care and relevant updates.
          </p>
          <p>
            We do not sell personal information. We may share necessary details
            with trusted service providers when required to support treatment or
            clinic operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
