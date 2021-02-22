const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  previousorders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  previousrestaurants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  ],
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
