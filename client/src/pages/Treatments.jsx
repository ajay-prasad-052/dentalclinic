import SectionTitle from "../components/SectionTitle";
import TreatmentCard from "../components/TreatmentCard";
import { treatments } from "../data/treatments";

const Treatments = () => {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Treatments"
          title="Comprehensive care for every smile."
          description="Explore the services designed to restore, protect, and enhance your oral health."
          align="center"
        />

        <div className="treatment-grid large">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
