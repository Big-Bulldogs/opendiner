const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
restaurant: [
    {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
},
],
user: [
  {
  type: Schema.Types.ObjectId,
  ref: "User",
},
],
  dateantime: {
    type: string,
  },
});

const Reservation = mongoose.model("reservation", ReservationSchema);

module.exports = Reservation;
