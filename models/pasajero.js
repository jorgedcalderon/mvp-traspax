import { Schema, model, models } from 'mongoose';

let modal = models.passengers;

if (!modal) {
  const Passenger = new Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true,
    },
    nacionalidad: {
      type: String,
      required: true
    },
    rut_pasaporte: {
      type: String,
      // required: true
    },
    hotel: {
      type: String,
      // required: true
    },
    contacto: {
      type: String,
      // required: true
    },
    edad: {
      type: Number,
      // required: true
    },
    observaciones: {
      type: String
    },
    vendedor: {
      type: String,
      // required: true
    },
    traspaso: {
      type: String,
      // required: true
    }
  }, { timestamps: true });
  modal = model('passengers', Passenger);
}


export default modal;