const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String
  },
  phone_number: {
    type: String
  },
  address: {
    type: String
  },
  webpage: {
    type: String
  },
  hours: {
    type: Array
  },
  menu: {
    type: Schema.Types.String,
    ref: "Menu"
 }
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
