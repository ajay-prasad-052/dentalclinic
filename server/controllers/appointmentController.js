export const createAppointment = async (req, res) => {
  try {
    const { name, phone, email, service, date, notes } = req.body;

    if (!name || !phone || !email || !date) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    return res.status(201).json({
      message: 'Appointment request received',
      appointment: {
        name,
        phone,
        email,
        service: service || 'General Consultation',
        date,
        notes: notes || '',
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
