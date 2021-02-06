const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: [{
    first: String,
    last: String
  }],
  email: 
    {
      type: String
    },
  password:
    {
      type: String
    },
  previousorders:[
    {
    type: Schema.Types.ObjectId,
    ref: "Order"
    },
  ],
  previousrestaurants:[
    {
    type: Schema.Types.ObjectId,
    ref: "Restaurant"
    }
  ]
});

const Menu = mongoose.model("User", UserSchema);

module.exports = User;