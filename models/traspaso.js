const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traspasoSchema = new Schema({
  fecha: {
    type: Date,
    required: true
  },
  agenciaOrigen: {
    type: Schema.Types.ObjectId,
    ref: 'Agencia',
    required: true
  },
  agenciaDestino: {
    type: Schema.Types.ObjectId,
    ref: 'Agencia',
    required: true
  },
  pasajeros: [{
    type: Schema.Types.ObjectId,
    ref: 'Pasajero',
    required: true
  }],
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour',
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  saldo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Traspaso', traspasoSchema);