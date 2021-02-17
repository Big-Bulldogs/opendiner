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
  reservationOrder: {
    type: Schema.Types.ObjectId,
    ref: "reservationOrder",
  },
});

const Reservation = mongoose.model("reservation", ReservationSchema);

module.exports = Reservation;
