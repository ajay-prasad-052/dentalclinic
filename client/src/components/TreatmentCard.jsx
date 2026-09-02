import { Link } from "react-router-dom";

const TreatmentCard = ({ treatment }) => {
  return (
    <article className="treatment-card">
      <img src={treatment.image} alt={treatment.name} />
      <div className="card-body">
        <span className="chip">{treatment.category}</span>
        <h3>{treatment.name}</h3>
        <p>{treatment.shortDescription}</p>
        <div className="card-meta">
          <span>{treatment.duration}</span>
          <strong>{treatment.price}</strong>
        </div>
        <Link to={`/treatments/${treatment.slug}`} className="text-link">
          Learn more
        </Link>
      </div>
    </article>
  );
};

export default TreatmentCard;
