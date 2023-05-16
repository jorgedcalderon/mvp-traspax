const mongoose = require('mongoose');

const salidaSchema = new mongoose.Schema({
  conductor: {
    type: String,
    required: true
  },
  rutConductor: {
    type: String,
    required: true
  },
  telefonoConductor: {
    type: String,
    required: true
  },
  guia: {
    type: String,
    required: true
  },
  rutGuia: {
    type: String,
    required: true
  },
  telefonoGuia: {
    type: String,
    required: true
  },
  nombreAgencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agencia',
    required: true
  },
  registroSernatur: {
    type: String,
    required: true
  },
  patente: {
    type: String,
    required: true
  },
  numeroPasajeros: {
    type: Number,
    required: true
  },
  pasajeros: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pasajero',
    required: true
  }],
  fecha: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Salida = mongoose.model('Salida', salidaSchema);

module.exports = Salida;