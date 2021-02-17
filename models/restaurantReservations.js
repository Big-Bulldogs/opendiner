const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  reservationDate: {
      type: Array
  },
  reservationTime: {
      type: Array
  },

});
