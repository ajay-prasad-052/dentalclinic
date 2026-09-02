import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import TreatmentCard from "../components/TreatmentCard";
import DoctorSection from "../components/DoctorSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Technology from "../components/Technology";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import { treatments } from "../data/treatments";
import { stats } from "../data/clinic";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionTitle
            eyebrow="Popular Treatments"
            title="Dental care tailored to your goals."
            description="From preventive care to smile transformations, we create treatment plans designed around your needs."
            align="center"
          />

          <div className="treatment-grid">
            {treatments.slice(0, 3).map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>

      <DoctorSection />
      <WhyChooseUs />
      <Technology />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
