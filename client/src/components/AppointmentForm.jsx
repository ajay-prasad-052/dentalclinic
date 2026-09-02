import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: "General Consultation",
  date: "",
  notes: "",
};

const AppointmentForm = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Appointment request submitted successfully. Our team will contact you shortly.",
    );
    setForm(initialState);
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Service
          <select name="service" value={form.service} onChange={handleChange}>
            <option>General Consultation</option>
            <option>Teeth Whitening</option>
            <option>Dental Implants</option>
            <option>Clear Aligners</option>
            <option>Emergency Care</option>
          </select>
        </label>
        <label>
          Preferred Date
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label>
        Notes
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows="4"
        />
      </label>

      <button type="submit" className="btn btn-primary form-submit">
        Submit Request
      </button>
    </form>
  );
};

export default AppointmentForm;
