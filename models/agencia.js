const mongoose = require('mongoose');

const agenciaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Agencia', agenciaSchema);