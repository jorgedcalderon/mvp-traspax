const mongoose = require('mongoose');

const pasajeroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  nacionalidad: {
    type: String,
    required: true
  },
  rut_pasaporte: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: true
  },
  contacto: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  observaciones: {
    type: String
  },
  vendedor: {
    type: String,
    required: true
  },
  traspaso: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pasajero', pasajeroSchema);