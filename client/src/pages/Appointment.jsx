import AppointmentForm from "../components/AppointmentForm";
import SectionTitle from "../components/SectionTitle";

const Appointment = () => {
  return (
    <section className="page-section">
      <div className="container appointment-shell">
        <SectionTitle
          eyebrow="Appointment"
          title="Book your consultation."
          description="Tell us a little about your needs and we’ll confirm a time that suits you."
          align="center"
        />
        <AppointmentForm />
      </div>
    </section>
  );
};

export default Appointment;
