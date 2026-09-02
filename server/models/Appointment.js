import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, default: 'General Consultation' },
    date: { type: Date, required: true },
    notes: { type: String },
  },
  { timestamps: true },
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
