const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  restaurant: mongoose.Schema({
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  }),
  reservationDate: {
    type: Array,
  },
  reservationTime: {
    type: Array,
  },
  Order: mongoose.Schema({
    type: Schema.Types.ObjectId,
    ref: "reservationOrder",
  }),
  user: mongoose.Schema({
    type: Schema.Types.ObjectId,
    ref: "user",
  }),
});

const Reservation = mongoose.model("reservation", ReservationSchema);

module.exports = Reservation;
