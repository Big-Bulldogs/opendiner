const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  restaurant: {
    type: string,
  },
  reservationDate: {
    type: date,
  },
  reservationTime: {
    type: time,
  },
  Order: {
    type: string,
  },
  user: {
    type: string,
  },
});

const Reservation = mongoose.model("reservation", ReservationSchema);

module.exports = Reservation;
