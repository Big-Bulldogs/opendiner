const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  restaurant: [
    {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
},
],
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
