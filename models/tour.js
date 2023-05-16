const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  duracion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  precioTraspaso: {
    type: Number,
    required: true,
  },
  lugarInicio: {
    type: String,
    required: true,
  },
  lugarTermino: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tour", tourSchema);