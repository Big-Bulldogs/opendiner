const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  category: {
    type: String
  },
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: "Menu"
    }
  ]
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
