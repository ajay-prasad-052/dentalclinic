import { useParams, Link } from "react-router-dom";
import { treatments } from "../data/treatments";

const TreatmentDetails = () => {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return (
      <section className="page-section">
        <div className="container">
          <h2>Treatment not found.</h2>
          <Link to="/treatments" className="btn btn-secondary">
            Back to Treatments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container treatment-detail">
        <img src={treatment.image} alt={treatment.name} />
        <div>
          <p className="eyebrow">{treatment.category}</p>
          <h1>{treatment.name}</h1>
          <p className="detail-price">{treatment.price}</p>
          <p>{treatment.description}</p>
          <p className="detail-meta">Duration: {treatment.duration}</p>
          <Link to="/book-appointment" className="btn btn-primary">
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentDetails;
