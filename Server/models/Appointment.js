const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, default: 'pending' }
});


const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
