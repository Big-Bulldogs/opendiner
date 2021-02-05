const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: String
  },
  restaurant: [
    {
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
    }
  ],
  item: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
