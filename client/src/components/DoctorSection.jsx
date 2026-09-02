import { clinic } from "../data/clinic";

const doctors = [
  {
    name: "Dr. Amelia Hart",
    role: "Lead Cosmetic Dentist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Mason Lee",
    role: "Implant Specialist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Olivia Brooks",
    role: "Family Dentistry Expert",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  },
];

const DoctorSection = () => {
  return (
    <section className="doctor-section section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our Dental Experts</p>
          <h2>Meet the team behind your smile.</h2>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <span>{doctor.role}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="clinic-highlight">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h3>{clinic.name}</h3>
          </div>
          <p>
            We provide honest guidance, gentle treatment plans, and modern
            dentistry in a warm, patient-first environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
