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
  image:{
    type: String
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu"
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
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
